<#--
* 
* A set of HTML templating macros, part of standard Scipio Freemarker API.
* Automatically included at all times.
* Intended to be swappable.
*
* Overrides the default SCIPIO styles located in 
* htmlTemplate.ftl - ofbiz_foundation/framework/common/webcommon/scipio/lib/standard/
* 
-->

<#-- Master include: Includes the default macros and allows overrides -->
<#include "component://common/webcommon/includes/scipio/lib/standard/htmlTemplate.ftl"> 
<#-- The following is now done by the include above instead, because the standard macros need it as well.
    It creates a map of references to the original macros so we can delegate to them, essentially a namespace.
    NOTE: this overriding file creates a namespace for itself as well - scipioBsTmplLib (see end of this file).
<#assign scipioStdTmplLib = copyObject(.namespace)> -->

<#--
Other possible patterns:

<#import "component://common/webcommon/includes/scipio/lib/standard/htmlTemplate.ftl" as scipioStdTmplLib> 

DEV NOTE: it turns out, using #import statement here as-is is too problematic. within the import calls, local macro definitions will always
shadow the global macro definitions, which means they won't automatically use the overridden macros defined in this parent file, 
so reuse of high-level macros (that call others) becomes confusing.
whether automatic overriding is wanted or not is case-specific, but in general, here yes.
the only way around this would be to modify the namespace using:
<#import ... as scipioStdTmplLib>
<#macro row>
</#macro>
<#assign row = row in scipioStdTmplLib>
for every major macro (which could be approximated with looped assignments again, but ugly).
note this pattern is acceptable in some other cases because it can be very fine-grained, but here will probably cause only headaches
because in general we wish to override selectively, not include selectively.
-->

<#-- 
*************
* MACRO OVERRIDES
************
See component://common/webcommon/includes/scipio/lib/standard/htmlTemplate.ftl for documentation about
the macro interfaces used in the standard macros and these overrides.

NOTES:
  * It's important that any overrides for template-facing macros (like @field or other) be enabled with and
    use the advanced args pattern (args={} inlineArgs...). Without this, standard scipio macro interface
    changes - almost always adding an attribute - will break compatibility for any themes not controlled by Ilscipio.
    Using this pattern, any extra attributes added in standard interfaces will either be gracefully ignored by the 
    overriding macros (if total new substitute implementation) or automatically pass along the new attributes 
    to the delegated macro (if is a delegating override).
  * The markup macros are not subject to the previous point because they are not template-facing; however
    they all MUST accept an "catchArgs..." (varargs) so they are not subject to compatibility breaking.
 -->

<#-- @field container markup - theme override 
    #nested is the actual field widget (<input>, <select>, etc.). -->
<#macro field_markup_container type="" fieldsType="" defaultGridArgs={} gridArgs={} 
    postfix=false postfixContent=true labelArea=true labelType="" labelPosition="" labelAreaContent="" collapse="" 
    collapseLabel="" collapsePostfix="" norows=false nocells=false container=true containerId="" containerClass="" containerStyle=""
    preWidgetContent=false postWidgetContent=false preLabelContent=false postLabelContent=false prePostfixContent=false postPostfixContent=false
    labelAreaContentArgs={} postfixContentArgs={} prePostContentArgs={}
    widgetAreaClass="" labelAreaClass="" postfixAreaClass="" widgetPostfixAreaClass="" inverted=false labelSmallDiffColumns=""
    origArgs={} passArgs={} required=false noLabelCell=false noInputCell=false catchArgs...>
  <#local containerClass = addClassArg(containerClass, "form-group ")>
  <#if labelArea && labelPosition == "top">
    <#local nocells = true>
  </#if>
  <#--
  <#local labelAreaClass = addClassArg(labelAreaClass, "control-label")>
  <#local widgetAreaClass = addClassArg(widgetAreaClass, "form-control")>-->

        
  <@scipioStdTmplLib.field_markup_container type=type fieldsType=fieldsType defaultGridArgs=defaultGridArgs gridArgs=gridArgs postfix=postfix  
    postfixContent=postfixContent labelArea=labelArea labelType=labelType labelPosition=labelPosition labelAreaContent=labelAreaContent 
    collapse=collapse collapseLabel=collapseLabel collapsePostfix=collapsePostfix norows=norows nocells=nocells container=container containerId=containerId containerClass=containerClass containerStyle=containerStyle
    preWidgetContent=preWidgetContent postWidgetContent=postWidgetContent preLabelContent=preLabelContent postLabelContent=postLabelContent prePostfixContent=prePostfixContent postPostfixContent=postPostfixContent
    labelAreaContentArgs=labelAreaContentArgs postfixContentArgs=postfixContentArgs prePostContentArgs=prePostContentArgs
    widgetAreaClass=widgetAreaClass labelAreaClass=labelAreaClass postfixAreaClass=postfixAreaClass widgetPostfixAreaClass=widgetPostfixAreaClass
    inverted=inverted labelSmallDiffColumns=labelSmallDiffColumns origArgs=origArgs passArgs=passArgs required=required noLabelCell=noLabelCell noInputCell=noInputCell><#nested></@scipioStdTmplLib.field_markup_container>

</#macro>

<#-- @field label area markup - theme override -->
<#macro field_markup_labelarea labelType="" labelPosition="" label="" labelContent=false labelDetail=false fieldType="" fieldsType="" fieldId="" collapse="" 
    required=false labelContentArgs={} norows=false nocells=false container=true origArgs={} passArgs={} catchArgs...>
  <#-- the label must be escaped by default. caller can prevent using #wrapAsRaw
  <#local label = label?trim>-->
  <#local label = escapeVal(label, 'htmlmarkup')?trim>
  <#if !labelContent?is_boolean>
    <@contentArgRender content=labelContent args=labelContentArgs doTrim=true />
    <#-- don't show this here, let macro handle it
    <#if required>*</#if>-->
  <#elseif label?has_content>
      <label class="control-label "<#if fieldId?has_content> for="${escapeVal(fieldId, 'html')}"</#if>>${label}<#if required> *</#if></label>
  <#-- only show this if there's a label, otherwise affects inline fields too in ugly way, and there are other indications anyhow
  <#else>
    <#if required>*</#if>-->
  </#if> 
  <#if !labelDetail?is_boolean><@contentArgRender content=labelDetail args=labelContentArgs doTrim=true /></#if>
  <#-- This was nbsp to prevent collapsing empty cells in foundation, now replaced by a CSS hack (see _base.scss)
  <#if container && !nocells>
    <#if !label?has_content && labelDetail?is_boolean && labelContent?is_boolean>
      &nbsp;
    </#if>
  </#if>-->
</#macro>

<#-- Override of @field_datetime_markup_script since fdatetime is foundation specific -->
<#macro field_datetime_markup_script inputId="" inputName="" displayInputId="" displayInputName="" dateType="" dateDisplayType="" htmlwrap=true origArgs={} passArgs={} catchArgs...>
  <#local datepickerOptions>{format:"yyyy-mm-dd", shortTime:false}</#local>
  <@script htmlwrap=htmlwrap>
    $(function() {

        var dateI18nToNorm = function(date) {
            <#-- TODO: WARN: this needs to be implemented if the displayed date is ever different from the 
                    internal format (timestamp-like) 
                NOTE: this will vary based on date type and format -->
            return date;
        };
        
        var dateNormToI18n = function(date) {
            <#-- TODO: WARN: this needs to be implemented if the displayed date is ever different from the 
                    internal format (timestamp-like) 
                NOTE: this will vary based on date type and format -->
            return date;
        };
    
        jQuery("#${escapeVal(displayInputId, 'js')}").change(function() {
          <#if dateType == "timestamp">
            jQuery("#${escapeVal(inputId, 'js')}").val(convertToDateTimeNorm(dateI18nToNorm(this.value)));
          <#elseif dateType == "date">
            jQuery("#${escapeVal(inputId, 'js')}").val(convertToDateNorm(dateI18nToNorm(this.value)));
          <#elseif dateType == "time">
            jQuery("#${escapeVal(inputId, 'js')}").val(convertToTimeNorm(dateI18nToNorm(this.value)));
          </#if>
        });
        
      <#if dateType == "time">
      
        <#-- do nothing for now; user inputs into box manually and change() should adjust -->

      <#else>
      
        var oldDate = "";
        var onDatePopup = function(ev) {
            oldDate = dateI18nToNorm(jQuery("#${escapeVal(displayInputId, 'js')}").val());
        };
        var onDateChange = function(ev) {
          <#if dateDisplayType == "timestamp">
            jQuery("#${escapeVal(displayInputId, 'js')}").val(dateNormToI18n(convertToDateTimeNorm(dateI18nToNorm(jQuery("#${escapeVal(displayInputId, 'js')}").val()), oldDate)));
          <#elseif dateDisplayType == "date">
            jQuery("#${escapeVal(displayInputId, 'js')}").val(dateNormToI18n(convertToDateNorm(dateI18nToNorm(jQuery("#${escapeVal(displayInputId, 'js')}").val()), oldDate)));
          </#if>
        };
        
        <#-- SCIPIO: How this works: the datepicker will put a yyyy-MM-dd value into the id_i18n field. 
            This triggers onDateChange which may transform the date and put it back in id_i18n.
            This triggers then another change() which copies it into the hidden id field (with another conversion if necessary). -->
        $("#${escapeVal(displayInputId, 'js')}").bootstrapMaterialDatePicker(${datepickerOptions}).on('changeDate', onDateChange).on('show', onDatePopup);
        <#-- Cannot use name, must use ID, this is invalid (will break multiple forms per page): $("input[name='${displayInputName}']")-->

      </#if>
    });
  </@script>
</#macro>

<#-- @menu template-facing macro - theme override
    NOTE: the more "proper" way to modify these is now to override the @menu_markup and @menuitem_markup macros, but
        these are acceptable as well (because of args/inlineArgs pattern) and provides more examples of ways to override. 
    2016-02-22: Comment this completely because the htmlwraps are now set in styles hash, per-menu-type
<#assign menu_defaultArgs_min = {"htmlwrap":"div", "passArgs":{}}> <#- change the default value, but still possible for client to override ->
<#assign menu_defaultArgs = getScipioMacroDefaultArgs("menu", scipioStdTmplLib) + menu_defaultArgs_min>
<#macro menu args={} inlineArgs...>
  <@scipioStdTmplLib.menu args=mergeArgMaps(args, inlineArgs, scipioBsTmplLib.menu_defaultArgs_min)><#nested /></@scipioStdTmplLib.menu>
</#macro>-->

<#-- @menuitem template-facing macro - theme override
<#assign menuitem_defaultArgs_min = {"htmlwrap":false, "passArgs":{}}> <#- no html wrapper by default ->
<#assign menuitem_defaultArgs = getScipioMacroDefaultArgs("menuitem", scipioStdTmplLib) + menuitem_defaultArgs_min>
<#macro menuitem args={} inlineArgs...>
  <@scipioStdTmplLib.menuitem args=mergeArgMaps(args, inlineArgs, scipioBsTmplLib.menuitem_defaultArgs_min)><#nested /></@scipioStdTmplLib.menuitem>
</#macro>-->

<#-- @modal main markup - theme override -->
<#macro modal_markup id="" label="" href="" class="" icon="" origArgs={} passArgs={} catchArgs...>
  <a href="${escapeFullUrl(href, 'html')}" data-toggle="modal" data-target="#${escapeVal(id, 'html')}_modal" <@compiledClassAttribStr class=class />><#if icon?has_content><i class="${escapeVal(icon, 'html')}"></i> </#if>${escapeVal(label, 'htmlmarkup')}</a>
  <div id="${escapeVal(id, 'html')}_modal" class="${styles.modal_wrap!}" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <#-- Modal content-->
            <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                  </div>
                  <div class="modal-body">
                    <#nested>
                  </div>
                  <div class="modal-footer">
                  </div>
            </div>
        </div>
  </div>
</#macro>

<#-- @slider main markup - theme override -->
<#macro slider_markup title="" id="" sliderIdNum=0 class="" controls=true indicator=true origArgs={} passArgs={} catchArgs...>
    <#if title?has_content><@heading>${escapeVal(title, 'htmlmarkup')}</@heading></#if>
    <div class="${styles.slider_container!}" data-ride="carousel" id="${escapeVal(id, 'html')}">
      <div class="${styles.slider_wrap!}">
        <#nested/>
      </div>
        <#local sliderLength = getRequestVar("scipioSliderLength")!0>
        <#if controls>
            <a class="carousel-control left" href="#${escapeVal(id, 'html')}" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a class="carousel-control right" href="#${escapeVal(id, 'html')}" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
        </#if>
        <#if indicator>
            <ol class="carousel-indicators">
                <#list 1..sliderLength as x>
                    <li data-target="#${escapeVal(id, 'html')}" data-slide-to="${x}"<#if x==1> class="active"</#if>></li>
                </#list>
            </ol> 
        </#if>
    </div>
</#macro>

<#-- @slide markup - theme override -->
<#macro slide_markup id="" class="" image="" link="" linkTarget="" title="" slideIdNum=0 sliderLength=1 renderSeqNumber="" origArgs={} passArgs={} catchArgs...>
    <div id="${escapeVal(id, 'html')}" class="${styles.slide_container!}<#if sliderLength==1> active</#if>">
        <#if link?has_content><a href="${escapeFullUrl(link, 'html')}"<#if linkTarget?has_content> target="${escapeVal(linkTarget, 'html')}"</#if>></#if>
        <div>
        <#if image?has_content>
          <img src="${escapeFullUrl(image, 'html')}"/>
        </#if>
          <#local nestedContent><#nested></#local>
          <#if nestedContent?has_content || title?has_content><div class="${styles.slide_content!}"><#if title?has_content><h2>${escapeVal(title, 'htmlmarkup')}</h2></#if>${nestedContent}</div></#if>
        </div>
        <#if link?has_content></a></#if>
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
    <#case "steps">
      <#local class = addClassArg(class, styles.nav_steps!)>
      <ul<@compiledClassAttribStr class=class />>
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
<#assign scipioBsTmplLib = copyObject(.namespace)>
