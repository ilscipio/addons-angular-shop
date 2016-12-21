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

<#-- @field template-facing macro - theme override 
    currently we only need this override because of some markup limitations that can't be addressed
    in the _markup macros alone. ideally would have only the _markup macros. but this provides extra examples. -->
<#-- field_defaultArgs_min only lists the min params we need access to in our immediate overriding code.
    the _min separatation here is not necessary in general, it's only an optimization used because @field has a million
    parameters. having field_defaultArgs only would work fine as well (and less error prone). -->
<#assign field_defaultArgs_min = {"type":"", "class":"", "passArgs":{}}>
<#assign field_defaultArgs = getScipioMacroDefaultArgs("field", scipioStdTmplLib) + field_defaultArgs_min>
<#macro field args={} inlineArgs...>
  <#-- WARN: usage of field_defaultArgs_min here means any arguments that need to be accessed 
      from this override code must be declared in field_defaultArgs_min.
  <#local args = mergeArgMaps(args, inlineArgs, scipioBsTmplLib.field_defaultArgs)>-->
  <#local args = mergeArgMaps(args, inlineArgs, scipioBsTmplLib.field_defaultArgs_min)>
  <#local dummy = localsPutAll(args)>
  
  <#if !type?has_content>
    <#local type = "generic">
  </#if>

  <#-- FIXME? this works to add form-control to inputs, but probably complicates if need to add containers
      (see other FIXMEs) -->
  <#local class = addClassArg(class, "form-control")/>
  
  <#-- FIXME: the following classes don't belong here at all (shouldn't be on <input> elems but only on wrappers), 
      but currently can't add wrappers in markup macro... -->
  <#local fieldEntryTypeClass = "field-entry-type-" + mapScipioFieldTypeToStyleName(type)>
  <#local class = addClassArg(class, "field-entry-widget")/>
  <#local class = addClassArg(class, fieldEntryTypeClass)/>
  
  <#-- any extra args we need to communicate to our macro implementation can go in this map -->
  <#local extraPassArgs = {}>
  
  <#-- NOTE: the inlineArgs always override the args map, so can exploit this to avoid making an extra map 
      NOTE: passArgs should always concatenate, so a caller can still pass args through us -->
  <@scipioStdTmplLib.field args=args class=class passArgs=(passArgs+extraPassArgs)><#nested /></@scipioStdTmplLib.field>
</#macro>

<#-- @field container markup - theme override 
    #nested is the actual field widget (<input>, <select>, etc.). -->
<#macro field_markup_container type="" class="" postfix=false postfixContent=true 
  labelArea=true labelType="" labelPosition="" labelAreaContent="" collapse="" collapsePostfix="" norows=false 
  nocells=false container=true containerId="" containerClass="" containerStyle=""
  preWidgetContent=false postWidgetContent=false preLabelContent=false postLabelContent=false prePostfixContent=false postPostfixContent=false
  labelAreaContentArgs={} postfixContentArgs={} prePostContentArgs={} defaultGridArgs={} gridArgs={}
  widgetAreaClass="" labelAreaClass="" postfixAreaClass="" widgetPostfixAreaClass="" inverted=false labelSmallDiffColumns=""
  origArgs={} passArgs={} catchArgs...>
  <#-- FIXME: the current non-grid arrangement does not properly support parent/child fields which scipio macros
      should support (see layoutdemo - "Default form fields (with label area) with parent/child fields") 
      this especially affects submit buttons but others too
       FIXME: collapse, collapsePostfix are not handled -->
  <#local rowClass = containerClass>
  <#--<#local labelAreaClass = "">  
  <#local postfixClass = "">-->
  
  <#-- FIXME: The *Class args above are largely non-implementable with current markup -->
  
  <#-- NOTE: currently we assume widgetPostfixCombined==false in general -->

  <#-- not using grid here...
      NOTE: the spans below don't support extra classes at all right now
  <#local defaultGridStyles = getDefaultFieldGridStyles(defaultGridArgs + {"labelInRow": labelInRow} + gridArgs)>-->

  <#local fieldEntryTypeClass = "field-entry-type-" + mapScipioFieldTypeToStyleName(type)>
  
  <#local rowClass = addClassArg(rowClass, "form-field-entry " + fieldEntryTypeClass)>
  <@row class=compileClassArg(rowClass) collapse=collapse!false norows=(norows || !container) id=containerId style=containerStyle>
    <#if labelType == "vertical">
      <#-- FIXME: vertical was mostly copy-pasted quickly so it can be seen visually, needs work -->
      <@cell>
        <div class="form-group input-group">
        <#if labelArea && labelPosition == "top">
          <@row>
            <@cell class=compileClassArg(inverted?string(widgetAreaClass, labelAreaClass))>
              <#if inverted>
                <#if type == "display">
                  <span class="form-control"><#nested></span>
                <#else>
                  <#if !preWidgetContent?is_boolean><@contentArgRender content=preWidgetContent args=prePostContentArgs /></#if>
                  <#nested>
                  <#if !postWidgetContent?is_boolean><@contentArgRender content=postWidgetContent args=prePostContentArgs /></#if>
                </#if>
              <#else>
                <#if !preLabelContent?is_boolean><@contentArgRender content=preLabelContent args=prePostContentArgs /></#if>
                <#-- FIXME?: This span should be in @field_markup_labelarea? -->
                <span class="input-group-addon field-entry-title ${escapeVal(fieldEntryTypeClass, 'html')}"><#if !labelAreaContent?is_boolean><@contentArgRender content=labelAreaContent args=labelAreaContentArgs /></#if></span>
                <#if !postLabelContent?is_boolean><@contentArgRender content=postLabelContent args=prePostContentArgs /></#if>
              </#if>
            </@cell>
          </@row>
        </#if>
          <@row>
            <#-- WARN: widgetAreaClass is probably not quite proper here -->
            <@cell class=compileClassArg(inverted?string(labelAreaClass, widgetAreaClass))>
              <#-- FIXME: currently can't add wrapper without breaking style, so moved these classes to @field override
              <span class="field-entry-widget ${fieldEntryTypeClass}"><#nested></span>
              -->
              <#if inverted>
                <#if !preLabelContent?is_boolean><@contentArgRender content=preLabelContent args=prePostContentArgs /></#if>
                <#-- FIXME?: This span should be in @field_markup_labelarea? -->
                <span class="input-group-addon field-entry-title ${escapeVal(fieldEntryTypeClass, 'html')}"><#if !labelAreaContent?is_boolean><@contentArgRender content=labelAreaContent args=labelAreaContentArgs /></#if></span>
                <#if !postLabelContent?is_boolean><@contentArgRender content=postLabelContent args=prePostContentArgs /></#if>
              <#else>
                <#-- quick hack to add container to things that don't naturally have any (shouldn't
                    be needed, see last FIXME -->
                <#if type == "display">
                  <span class="form-control"><#nested></span>
                <#else>
                  <#if !preWidgetContent?is_boolean><@contentArgRender content=preWidgetContent args=prePostContentArgs /></#if>
                  <#nested>
                  <#if !postWidgetContent?is_boolean><@contentArgRender content=postWidgetContent args=prePostContentArgs /></#if>
                </#if>
              </#if>
              <#-- FIXME: CSS not working with postfix (form-control goes to width 100% and pushes this to next line) 
              <#if postfix>
                <span class="field-entry-postfix ${fieldEntryTypeClass}">
                  <#if !prePostfixContent?is_boolean><@contentArgRender content=prePostfixContent args=prePostContentArgs /></#if>
                  <#if (postfixContent?is_boolean && postfixContent == true) || !postfixContent?has_content>
                    <span class="postfix"><input type="submit" class="${styles.icon!} ${styles.icon_button!}" value="${styles.icon_button_value!}"/></span>
                  <#elseif !postfixContent?is_boolean>
                    <#if !postfixContent?is_boolean><@contentArgRender content=postfixContent args=postfixContentArgs /></#if>
                  </#if>
                  <#if !postPostfixContent?is_boolean><@contentArgRender content=postPostfixContent args=prePostContentArgs /></#if>
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
            <#if inverted>
              <#if type == "display">
                <span class="form-control"><#nested></span>
              <#else>
                <#if !preWidgetContent?is_boolean><@contentArgRender content=preWidgetContent args=prePostContentArgs /></#if>
                <#nested>
                <#if !postWidgetContent?is_boolean><@contentArgRender content=postWidgetContent args=prePostContentArgs /></#if>
              </#if>
            <#else>
              <#if !preLabelContent?is_boolean><@contentArgRender content=preLabelContent args=prePostContentArgs /></#if>
              <#-- FIXME: give label area min width -->
              <span class="input-group-addon field-entry-title ${escapeVal(fieldEntryTypeClass, 'html')}"><#if !labelAreaContent?is_boolean><@contentArgRender content=labelAreaContent args=labelAreaContentArgs /></#if></span>
              <#if !postLabelContent?is_boolean><@contentArgRender content=postLabelContent args=prePostContentArgs /></#if>
            </#if>
          </#if>
          <#-- FIXME: currently can't add wrapper without breaking style, so moved these classes to @field override
          <span class="field-entry-widget ${fieldEntryTypeClass}"><#nested></span>
          -->
          <#-- quick hack to add container to things that don't naturally have any (shouldn't
              be needed, see last FIXME -->
          <#if inverted>
            <#if !preLabelContent?is_boolean><@contentArgRender content=preLabelContent args=prePostContentArgs /></#if>
            <#-- FIXME?: This span should be in @field_markup_labelarea? -->
            <span class="input-group-addon field-entry-title ${escapeVal(fieldEntryTypeClass, 'html')}"><#if !labelAreaContent?is_boolean><@contentArgRender content=labelAreaContent args=labelAreaContentArgs /></#if></span>
            <#if !postLabelContent?is_boolean><@contentArgRender content=postLabelContent args=prePostContentArgs /></#if>
          <#else>
            <#if type == "display">
              <span class="form-control"><#nested></span>
            <#else>
              <#if !preWidgetContent?is_boolean><@contentArgRender content=preWidgetContent args=prePostContentArgs /></#if>
              <#nested>
              <#if !postWidgetContent?is_boolean><@contentArgRender content=postWidgetContent args=prePostContentArgs /></#if>
            </#if>
          </#if>
          <#-- FIXME: CSS not working with postfix (form-control goes to width 100% and pushes this to next line) 
          <#if postfix>
            <span class="field-entry-postfix ${escapeVal(fieldEntryTypeClass, 'html')}">
              <#if !prePostfixContent?is_boolean><@contentArgRender content=prePostfixContent args=prePostContentArgs /></#if>
              <#if (postfixContent?is_boolean && postfixContent == true) || !postfixContent?has_content>
                <span class="postfix"><input type="submit" class="${styles.icon!} ${styles.icon_button!}" value="${styles.icon_button_value!}"/></span>
              <#elseif !postfixContent?is_boolean>
                <#if !postfixContent?is_boolean><@contentArgRender content=postfixContent args=postfixContentArgs /></#if>
              </#if>
              <#if !postPostfixContent?is_boolean><@contentArgRender content=postPostfixContent args=prePostContentArgs /></#if>
            </span>
          </#if>
          -->
        </div>
      </@cell>
    </#if>
  </@row>
</#macro>

<#-- @field label area markup - theme override -->
<#macro field_markup_labelarea labelType="" labelPosition="" label="" labelContent=false labelDetail=false fieldType="" fieldId="" 
  collapse="" required=false labelContentArgs={} norows=false nocells=false container=true origArgs={} passArgs={} catchArgs...>
  <#-- the label must be escaped by default. caller can prevent using #wrapAsRaw
  <#local label = label?trim>-->
  <#local label = escapeVal(label, 'htmlmarkup')?trim>
  <#if !labelContent?is_boolean>
    <@contentArgRender content=labelContent args=labelContentArgs doTrim=true />
  <#elseif label?has_content>
    <#if collapse>
      <span class="form-field-label">${label}<#if required> *</#if></span>
    <#else>
      <span class="form-field-label">${label}<#if required> *</#if></span>
    </#if>  
  <#-- don't show this if no label
  <#else>
    <#if required>*</#if>-->
  </#if> 
  <#if !labelDetail?is_boolean><@contentArgRender content=labelDetail args=labelContentArgs doTrim=true /></#if>
  <#-- This was nbsp to prevent collapsing empty divs, now replaced by a CSS hack (see _base.scss)
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
<#macro modal_markup id="" label="" href="" icon="" origArgs={} passArgs={} catchArgs...>
  <a href="${escapeFullUrl(href, 'html')}" data-toggle="modal" data-target="#${escapeVal(id, 'html')}_modal"><#if icon?has_content><i class="${escapeVal(icon, 'html')}"></i> </#if>${escapeVal(label, 'htmlmarkup')}</a>
  <div id="${escapeVal(id, 'html')}_modal" class="${styles.modal_wrap!}" role="dialog">
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
