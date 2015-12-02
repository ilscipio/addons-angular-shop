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
<#assign defaultlib = copyObject(.namespace)>

<#--
Other patterns:

<#import "component://common/webcommon/includes/cato/lib/standard/htmlTemplate.ftl" as defaultlib> 

it turns out, using #import statement here as-is is too problematic. within the import calls, local macro definitions will always
shadow the global macro definitions, which means they won't automatically use the overridden macros defined in this parent file, 
so reuse of high-level macros (that call others) becomes confusing.
whether automatic overriding is wanted or not is case-specific, but in general, here yes.
the only way around this would be to modify the namespace using:
<#import ... as defaultlib>
<#macro row>
</#macro>
<#assign row = row in defaultlib>
for every major macro (which could be approximated with looped assignments again, but ugly).
note this pattern is acceptable in some other cases because it can be very fine-grained, but here will probably cause only headaches
because in general we wish to override selectively, not include selectively.
-->

<#-- 
*************
* MACRO EXTENSIONS
************
 -->

<#macro field type="" label="" labelDetail="" name="" value="" valueType="" currentValue="" defaultValue="" class="" size=20 maxlength="" id="" onClick="" 
        disabled=false placeholder="" autoCompleteUrl="" mask=false alert="false" readonly=false rows="4" 
        cols="50" dateType="date" multiple="" checked=false collapse="" tooltip="" columns="" norows=false nocells=false container=""
        fieldFormName="" formName="" formId="" postfix=false postfixSize=1 required=false items=false autocomplete=true progressOptions={} 
        labelType="" labelLayout="" labelArea="" description=""
        submitType="input" text="" href="" src="" confirmMsg="" inlineItems="" 
        selected=false allowEmpty=false currentFirst=false currentDescription="" noCurrentSelectedKey=""
        manualItems="" manualItemsOnly="">
   <#local fieldIdNum = getRequestVar("catoFieldIdNum")!0>
   <#local fieldIdNum = fieldIdNum + 1 />
   <#local dummy = setRequestVar("catoFieldIdNum", fieldIdNum)>
   <#local class = compileClassArg(class, "form-control")/>
   <#if !id?has_content>
        <#-- FIXME? renderSeqNumber usually empty... where come from? should be as request attribute also? -->
        <#local id = "field_id_${renderSeqNumber!}_${fieldIdNum!0}">
   </#if>

    <#local classes = "${styles.grid_large!}12"/>
    <#local columnspostfix = 0/>
    <#if postfix>
        <#local columnspostfix = postfixSize/>
        <#local classes = "${styles.grid_small!}${12-columnspostfix} ${styles.grid_large!}${12-columnspostfix}"/>
    </#if>

    <#local class = compileClassArg(class)>  
    <#if required && (!containsStyleName(class, "required"))>
        <#local class = (class + " required")?trim>
    </#if>
    
    <@row collapse=false norows=norows> 
    <@cell nocells=(nocells)>
    <#if labelType?has_content>
      <#local effLabelType = labelType>
    <#else>
      <#local effLabelType = (fieldsInfo.labelType)!"">
    </#if>
    <#if labelLayout?has_content>
      <#local effLabelLayout = labelLayout>
    <#else>
      <#local effLabelLayout = (fieldsInfo.labelLayout)!"">
    </#if>
        <#--        
        <#if label?has_content>
            <label class="control-label"<#if id?has_content> for="${id}"</#if>>${label}</label>
            <#if required>*</#if>
        </#if> 
        <#if labelDetail?has_content>
            ${labelDetail}
        </#if>-->
            
        
        
   <div class="form-group input-group">
        <#if label?has_content><span class="input-group-addon">${label!}</span></#if>
        <@defaultlib.field type=type label="" labelDetail=labelDetail name=name value=value valueType=valueType currentValue=currentValue defaultValue=defaultValue class=class size=size maxlength=maxlength id=id onClick=onClick 
            disabled=disabled placeholder=placeholder autoCompleteUrl=autoCompleteUrl mask=mask alert=alert readonly=readonly rows=rows
            cols=cols dateType=dateType multiple=multiple checked=checked collapse=collapse tooltip=tooltip columns=columns norows=norows nocells=nocells container="false"
            fieldFormName=fieldFormName formName=formName formId=formId postfix=postfix postfixSize=postfixSize required=required items=items autocomplete=autocomplete progressOptions=progressOptions 
            labelType=labelType labelLayout=labelLayout labelArea=labelArea description=description
            submitType=submitType text=text href=href src=src confirmMsg=confirmMsg
            inlineItems=inlineItems
            selected=selected allowEmpty=allowEmpty currentFirst=currentFirst currentDescription=currentDescription noCurrentSelectedKey=noCurrentSelectedKey
            manualItems=manualItems manualItemsOnly=manualItemsOnly><#nested /></@defaultlib.field>
   </div>
   </@cell>
   </@row>         
</#macro>

<#-- DEV NOTE: instead of overriding @field above, you should be able to simply override the markup. 
     however interface of markup is subject to change...
<#macro field_markup_container extraArgs...>
</#macro>
 -->

<#macro menu args={} inlineArgs...>
    <@defaultlib.menu args=mergeArgMaps(args, inlineArgs) htmlWrap="div"><#nested /></@defaultlib.menu>
</#macro>

<#macro menuitem args={} inlineArgs...>
    <@defaultlib.menuitem args=mergeArgMaps(args, inlineArgs) htmlWrap=false><#nested /></@defaultlib.menuitem>
</#macro>

<#macro modal id label href="" icon="">
    <a href="${href!"#"}" data-toggle="modal" data-target="#${id}_modal"><#if icon?has_content><i class="${icon!}"></i> </#if>${label}</a>
    <div id="${id}_modal" class="${styles.modal_wrap!}" role="dialog">
        <div class="modal-dialog">
        <!-- Modal content-->
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
