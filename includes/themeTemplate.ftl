<#--
* 
* A set of HTML templating macros, part of standard Cato Freemarker API.
* Automatically included at all times.
* Intended to be swappable.
*
* Overrides the default CATO styles located in 
* htmlTemplate.ftl - ofbiz_foundation/framework/common/webcommon/cato/lib/standard/
* 
-->

<#-- Master include: Includes the default macros and allows overrides -->
<#include "component://common/webcommon/includes/cato/lib/standard/htmlTemplate.ftl"> 
<#-- save the existing macro def references so we can delegate to them easily -->
<#assign catoStdTmplLib = copyObject(.namespace)>

<#--
Other patterns:

<#import "component://common/webcommon/includes/cato/lib/standard/htmlTemplate.ftl" as catoStdTmplLib> 

it turns out, using #import statement here as-is is too problematic. within the import calls, local macro definitions will always
shadow the global macro definitions, which means they won't automatically use the overridden macros defined in this parent file, 
so reuse of high-level macros (that call others) becomes confusing.
whether automatic overriding is wanted or not is case-specific, but in general, here yes.
the only way around this would be to modify the namespace using:
<#import ... as catoStdTmplLib>
<#macro row>
</#macro>
<#assign row = row in catoStdTmplLib>
for every major macro (which could be approximated with looped assignments again, but ugly).
note this pattern is acceptable in some other cases because it can be very fine-grained, but here will probably cause only headaches
because in general we wish to override selectively, not include selectively.
-->

<#-- 
*************
* MACRO EXTENSIONS
************
 -->

<#-- min only lists the minimal params we need defaults for; @field has too many args, will be faster this way -->
<#assign fieldArgDefaultsCatoBsMin = {"class":"", "norows":false, "nocells":false, "label":""}>
<#assign fieldArgDefaultsCatoBs = fieldArgDefaultsCatoStd + fieldArgDefaultsCatoBsMin>
<#macro field args={} inlineArgs...>
    <#-- NOTE: we don't need to use fieldArgDefaultsCatoBs here for the time being, but if this was
        a heavier mod, may want it here instead of fieldArgDefaultsCatoBsMin.
        this is simply an optimization.
        WARN: you have to make sure to include the defaults you need in fieldArgDefaultsCatoBsMin.
    <#local args = mergeArgMaps(args, inlineArgs, fieldArgDefaultsCatoBs)>-->
    <#local args = mergeArgMaps(args, inlineArgs, fieldArgDefaultsCatoBsMin)>
    <#local dummy = localsPutAll(args)>

    <#local class = addClassArg(class, "form-control")/>
    
    <@row collapse=false norows=norows> 
      <@cell nocells=nocells>
      <div class="form-group input-group">
          <#if label?has_content><span class="input-group-addon">${label!}</span></#if>
          <#-- NOTE: the inlineArgs always override the args map, so can exploit this to avoid making an extra map -->
          <@catoStdTmplLib.field args=args class=class container=false label="" labelArea=false><#nested /></@catoStdTmplLib.field>
      </div>
      </@cell>
    </@row>         
</#macro>

<#-- @field container markup - theme override - TODO -->
<#macro field_markup_container type="" class="" columns="" postfix=false postfixSize=0 postfixContent=true labelArea=true labelType="" labelLayout="" labelAreaContent="" collapse="" norows=false nocells=false container=true extraArgs...>
  <#local rowClass = "">
  <#local labelAreaClass = "">  
  <#local postfixClass = "">
  
  <#if postfix>
      <#if !collapse?has_content>
          <#local collapse = true/> <#-- explicit collapse param overrides postfix setting, but collapse by default -->
      </#if>
  </#if>
  <#if !collapse?has_content>
      <#local collapse = false/>
  </#if>

  <#local defaultGridStyles = getDefaultFieldGridStyles({"columns":columns, "labelArea":labelArea, "postfix":postfix, "postfixSize":postfixSize })>

  <#local fieldEntryTypeClass = "field-entry-type-" + mapCatoFieldTypeToStyleName(type)>
  
  <#local rowClass = addClassArg(rowClass, "form-field-entry " + fieldEntryTypeClass)>
  <@row class=rowClass collapse=collapse!false norows=(norows || !container)>
    <#-- TODO: support more label configurations (besides gridarea left) -->
    <#if labelArea && labelType == "gridarea" && labelLayout == "left">
        <#local labelAreaClass = addClassArg(labelAreaClass, "field-entry-title " + fieldEntryTypeClass)>
        <@cell class=compileClassArg(labelAreaClass, defaultGridStyles.labelArea) nocells=(nocells || !container)>
            ${labelAreaContent}
        </@cell>
    </#if>
    <#local class = addClassArg(class, "field-entry-widget " + fieldEntryTypeClass)>
    <#-- NOTE: here this is the same as doing 
           class=("=" + compileClassArg(class, defaultGridStyles.widgetArea))
         as we know the compiled class will never be empty. -->
    <@cell class=compileClassArg(class, defaultGridStyles.widgetArea) nocells=(nocells || !container)>
        <#nested>
    </@cell>
    <#if postfix && !nocells && container>
        <#local postfixClass = addClassArg(postfixClass, "field-entry-postfix " + fieldEntryTypeClass)>
        <@cell class=compileClassArg(postfixClass, defaultGridStyles.postfixArea)>
          <#if (postfixContent?is_boolean && postfixContent == true) || !postfixContent?has_content>
            <span class="postfix"><input type="submit" class="${styles.icon!} ${styles.icon_button!}" value="${styles.icon_button_value!}"/></span>
          <#elseif !postfixContent?is_boolean> <#-- boolean false means prevent markup -->
            ${postfixContent}
          </#if>
        </@cell>
    </#if>
  </@row>
</#macro>

<#-- @field label area markup - theme override - TODO -->
<#macro field_markup_labelarea labelType="" labelLayout="" label="" labelDetail="" fieldType="" fieldId="" collapse="" required=false extraArgs...>
  <#if !collapse?has_content>
      <#local collapse = false/>
  </#if>
  <#if label?has_content>
    <#if fieldType=="checkbox" || collapse==false>
        <label class="form-field-label"<#if fieldId?has_content> for="${fieldId}"</#if>>${label}<#if required> *</#if></label>
    <#else>
        <span class="${styles.prefix!} form-field-label">${label}<#if required> *</#if></span>
    </#if>  
  </#if> 
  <#if labelDetail?has_content>
    ${labelDetail}
  </#if>  
</#macro>


<#macro menu args={} inlineArgs...>
    <@catoStdTmplLib.menu args=mergeArgMaps(args, inlineArgs) htmlWrap="div"><#nested /></@catoStdTmplLib.menu>
</#macro>

<#macro menuitem args={} inlineArgs...>
    <@catoStdTmplLib.menuitem args=mergeArgMaps(args, inlineArgs) htmlWrap=false><#nested /></@catoStdTmplLib.menuitem>
</#macro>

<#macro modal id label href="" icon="">
    <a href="${href!"#"}" data-toggle="modal" data-target="#${id}_modal"><#if icon?has_content><i class="${icon!}"></i> </#if>${label}</a>
    <div id="${id}_modal" class="${styles.modal_wrap!}" role="dialog">
        <div class="modal-dialog">
        <#-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <#nested>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</#macro>

<#macro nav type="inline">
    <#switch type>
        <#case "magellan">
            <nav class="navbar navbar-default navbar-static-top"">
              <div class="container">
                <ul class="nav navbar-nav">
                <#nested>
                </ul>
              </div>
            </nav>
        <#break>
        <#case "breadcrumbs">
            <ul class="${styles.nav_breadcrumbs!}">
                <#nested>
            </ul>
        <#break>
        <#default>
            <ul class="${styles.list_inline!} ${styles.nav_subnav!}">
              <#nested>
            </ul>
        <#break>
    </#switch>
</#macro>

<#macro mli arrival="">
    <li><#nested></li>
</#macro>

<#-- since bootstrap doesn't use <li>, this check must be adjusted to something else... -->
<#function isMenuMarkupItemsInline menuContent>
  <#return menuContent?matches(r'(\s*<!--((?!<!--).)*?-->\s*)*\s*<(li|a|span|button|input)(\s|>).*', 'rs')>
</#function>
