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
<#-- The following is now done by the include above instead, because the standard macros need it as well.
    It creates a map of references to the original macros so we can delegate to them, essentially a namespace.
    NOTE: this overriding file creates a namespace for itself as well - catoBsTmplLib (see end of this file).
<#assign catoStdTmplLib = copyObject(.namespace)> -->

<#--
Other possible patterns:

<#import "component://common/webcommon/includes/cato/lib/standard/htmlTemplate.ftl" as catoStdTmplLib> 

DEV NOTE: it turns out, using #import statement here as-is is too problematic. within the import calls, local macro definitions will always
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
* MACRO OVERRIDES
************
See component://common/webcommon/includes/cato/lib/standard/htmlTemplate.ftl for documentation about
the macro interfaces used in the standard macros and these overrides.

NOTES:
  * It's important that any overrides for template-facing macros (like @field or other) be enabled with and
    use the advanced args pattern (args={} inlineArgs...). Without this, standard cato macro interface
    changes - almost always adding an attribute - will break compatibility for any themes not controlled by Ilscipio.
    Using this pattern, any extra attributes added in standard interfaces will either be gracefully ignored by the 
    overriding macros (if total new substitute implementation) or automatically pass along the new attributes 
    to the delegated macro (if is a delegating override).
  * The markup macros are not subject to the previous point because they are not template-facing; however
    they all MUST accept an "catchArgs..." (varargs) so they are not subject to compatibility breaking.
 -->

<#-- @field template-facing macro - theme override 
    currently we only need this override because of some markup limitations that can't be addressed
    in the _markup macros alone. ideally would have only the _markup macros. but this provides extra examples. -->
<#-- field_defaultArgs_min only lists the min params we need access to in our immediate overriding code.
    the _min separatation here is not necessary in general, it's only an optimization used because @field has a million
    parameters. having field_defaultArgs only would work fine as well (and less error prone). -->
<#assign field_defaultArgs_min = {"type":"", "class":"", "passArgs":{}}>
<#assign field_defaultArgs = getCatoMacroDefaultArgs("field", catoStdTmplLib) + field_defaultArgs_min>
<#macro field args={} inlineArgs...>
  <#-- WARN: usage of field_defaultArgs_min here means any arguments that need to be accessed 
      from this override code must be declared in field_defaultArgs_min.
  <#local args = mergeArgMaps(args, inlineArgs, catoBsTmplLib.field_defaultArgs)>-->
  <#local args = mergeArgMaps(args, inlineArgs, catoBsTmplLib.field_defaultArgs_min)>
  <#local dummy = localsPutAll(args)>
  
  <#if !type?has_content>
    <#local type = "generic">
  </#if>

  <#-- FIXME? this works to add form-control to inputs, but probably complicates if need to add containers
      (see other FIXMEs) -->
  <#local class = addClassArg(class, "form-control")/>
  
  <#-- FIXME: the following classes don't belong here at all (shouldn't be on <input> elems but only on wrappers), 
      but currently can't add wrappers in markup macro... -->
  <#local fieldEntryTypeClass = "field-entry-type-" + mapCatoFieldTypeToStyleName(type)>
  <#local class = addClassArg(class, "field-entry-widget")/>
  <#local class = addClassArg(class, fieldEntryTypeClass)/>
  
  <#-- any extra args we need to communicate to our macro implementation can go in this map -->
  <#local extraPassArgs = {}>
  
  <#-- NOTE: the inlineArgs always override the args map, so can exploit this to avoid making an extra map 
      NOTE: passArgs should always concatenate, so a caller can still pass args through us -->
  <@catoStdTmplLib.field args=args class=class passArgs=(passArgs+extraPassArgs)><#nested /></@catoStdTmplLib.field>
</#macro>

<#-- @field container markup - theme override 
    labelContent is generated by field_markup_labelarea.
    #nested is the actual field widget (<input>, <select>, etc.). -->
<#macro field_markup_container type="" class="" columns="" postfix=false postfixSize=0 postfixContent=true 
  labelArea=true labelType="" labelPosition="" labelAreaContent="" collapse="" collapsePostfix="" norows=false 
  nocells=false container=true containerId="" containerClass="" origArgs={} passArgs={} catchArgs...>
  <#-- FIXME: the current non-grid arrangement does not properly support parent/child fields which cato macros
      should support (see layoutdemo - "Default form fields (with label area) with parent/child fields") 
      this especially affects submit buttons but others too
       FIXME: collapse, collapsePostfix are not handled -->
  <#local rowClass = containerClass>
  <#--<#local labelAreaClass = "">  
  <#local postfixClass = "">-->

  <#-- not using grid here...
      NOTE: the spans below don't support extra classes at all right now
  <#local defaultGridStyles = getDefaultFieldGridStyles({"columns":columns, "labelArea":labelArea, "postfix":postfix, "postfixSize":postfixSize })>-->

  <#local fieldEntryTypeClass = "field-entry-type-" + mapCatoFieldTypeToStyleName(type)>
  
  <#local rowClass = addClassArg(rowClass, "form-field-entry " + fieldEntryTypeClass)>
  <@row class=rowClass collapse=collapse!false norows=(norows || !container) id=containerId>
    <#if labelType == "vertical">
      <#-- FIXME: vertical was mostly copy-pasted quickly so it can be seen visually, needs work -->
      <@cell>
        <div class="form-group input-group">
        <#if labelArea && labelPosition == "top">
          <@row>
            <@cell>
              <span class="input-group-addon field-entry-title ${fieldEntryTypeClass}">${labelAreaContent}</span>
            </@cell>
          </@row>
        </#if>
          <@row>
            <@cell>
              <#-- FIXME: currently can't add wrapper without breaking style, so moved these classes to @field override
              <span class="field-entry-widget ${fieldEntryTypeClass}"><#nested></span>
              -->
              <#-- quick hack to add container to things that don't naturally have any (shouldn't
                  be needed, see last FIXME -->
              <#if type == "display">
                <span class="form-control"><#nested></span>
              <#else>
                <#nested>
              </#if>
              <#-- FIXME: CSS not working with postfix (form-control goes to width 100% and pushes this to next line) 
              <#if postfix>
                <span class="field-entry-postfix ${fieldEntryTypeClass}">
                  <#if (postfixContent?is_boolean && postfixContent == true) || !postfixContent?has_content>
                    <span class="postfix"><input type="submit" class="${styles.icon!} ${styles.icon_button!}" value="${styles.icon_button_value!}"/></span>
                  <#elseif !postfixContent?is_boolean>
                    ${postfixContent}
                  </#if>
                </span>
              </#if>
              -->
            </@cell>
          </@row>
        </div>
      </@cell>
    <#else> <#-- elseif labelType == "horizontal" -->
      <@cell class="" nocells=(nocells || !container)>
        <div class="form-group input-group">
          <#if labelArea  && labelType == "horizontal" && labelPosition == "left">
            <#-- FIXME: give label area min width -->
            <span class="input-group-addon field-entry-title ${fieldEntryTypeClass}">${labelAreaContent}</span>
          </#if>
          <#-- FIXME: currently can't add wrapper without breaking style, so moved these classes to @field override
          <span class="field-entry-widget ${fieldEntryTypeClass}"><#nested></span>
          -->
          <#-- quick hack to add container to things that don't naturally have any (shouldn't
              be needed, see last FIXME -->
          <#if type == "display">
            <span class="form-control"><#nested></span>
          <#else>
            <#nested>
          </#if>
          <#-- FIXME: CSS not working with postfix (form-control goes to width 100% and pushes this to next line) 
          <#if postfix>
            <span class="field-entry-postfix ${fieldEntryTypeClass}">
              <#if (postfixContent?is_boolean && postfixContent == true) || !postfixContent?has_content>
                <span class="postfix"><input type="submit" class="${styles.icon!} ${styles.icon_button!}" value="${styles.icon_button_value!}"/></span>
              <#elseif !postfixContent?is_boolean>
                ${postfixContent}
              </#if>
            </span>
          </#if>
          -->
        </div>
      </@cell>
    </#if>
  </@row>
</#macro>

<#-- @field label area markup - theme override
    This generates labelContent passed to @field_markup_container. -->
<#macro field_markup_labelarea labelType="" labelPosition="" label="" labelDetail="" fieldType="" fieldId="" 
  collapse="" required=false origArgs={} passArgs={} catchArgs...>
  <#local label = label?trim>
  <#if label?has_content>
    <#if collapse>
      <span class="form-field-label">${label}<#if required> *</#if></span>
    <#else>
      <span class="form-field-label">${label}<#if required> *</#if></span>
    </#if>  
  <#else>
    <#if required>*</#if>
  </#if> 
  <#local labelDetail = labelDetail?trim>
  <#if labelDetail?has_content>
    ${labelDetail}
  </#if>  
  <#-- FIXME?: nbsp workaround is to prevent a foundation "bug" where empty cells sometimes go to zero width -->
  <#if !label?has_content && !labelDetail?has_content>
    &nbsp;
  </#if>
</#macro>

<#-- @menu template-facing macro - theme override
    NOTE: the more "proper" way to modify these is now to override the @menu_markup and @menuitem_markup macros, but
        these are acceptable as well (because of args/inlineArgs pattern) and provides more examples of ways to override. 
    2016-02-22: Comment this completely because the htmlwraps are now set in styles hash, per-menu-type
<#assign menu_defaultArgs_min = {"htmlWrap":"div", "passArgs":{}}> <#- change the default value, but still possible for client to override ->
<#assign menu_defaultArgs = getCatoMacroDefaultArgs("menu", catoStdTmplLib) + menu_defaultArgs_min>
<#macro menu args={} inlineArgs...>
  <@catoStdTmplLib.menu args=mergeArgMaps(args, inlineArgs, catoBsTmplLib.menu_defaultArgs_min)><#nested /></@catoStdTmplLib.menu>
</#macro>-->

<#-- @menuitem template-facing macro - theme override
<#assign menuitem_defaultArgs_min = {"htmlWrap":false, "passArgs":{}}> <#- no html wrapper by default ->
<#assign menuitem_defaultArgs = getCatoMacroDefaultArgs("menuitem", catoStdTmplLib) + menuitem_defaultArgs_min>
<#macro menuitem args={} inlineArgs...>
  <@catoStdTmplLib.menuitem args=mergeArgMaps(args, inlineArgs, catoBsTmplLib.menuitem_defaultArgs_min)><#nested /></@catoStdTmplLib.menuitem>
</#macro>-->

<#-- @modal main markup - theme override -->
<#macro modal_markup id="" label="" href="" icon="" origArgs={} passArgs={} catchArgs...>
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

<#-- @nav main markup - theme override -->
<#macro nav_markup type="" origArgs={} passArgs={} catchArgs...>
  <#switch type>
    <#case "magellan">
      <nav class="navbar navbar-default navbar-static-top">
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

<#-- @mli main markup - theme override -->
<#macro mli_markup arrival="" origArgs={} passArgs={} catchArgs...>
  <li><#nested></li>
</#macro>

<#-- since bootstrap doesn't use <li>, this check must be adjusted to something else... -->
<#function isMenuMarkupItemsInline menuContent>
  <#return menuContent?matches(r'(\s*<!--((?!<!--).)*?-->\s*)*\s*<(li|a|span|button|input)(\s|>).*', 'rs')>
</#function>


<#-- save copy of this namespace so that our macros are able to access its own definitions without overrides (sometimes needed) -->
<#assign catoBsTmplLib = copyObject(.namespace)>
