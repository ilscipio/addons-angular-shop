<#--
* 
* A set of HTML templating macros, part of standard Cato Freemarker API.
* Automatically included at all times.
* Intended to be swappable.
*
-->

<#-- Imports the default macros and allows overrides-->
<#include "component://widget/templates/htmlMenuMacroLibrary.ftl"> 
<#assign defaultmenulib = copyObject(.namespace)>

<#-- 
*************************************
* CATO: NEW MENU MACROS (ONE-SHOT) *
*************************************
-->

<#-- Cato: Override not currently needed; htmlwraps are set in style hash menu_ entries instead
    DEV NOTE: prefer not using because this is hard to maintain...
<#macro renderMenuFull>
</#macro>-->

<#-- Cato: Override not currently needed; htmlwraps are set in style hash menu_ entries instead
    DEV NOTE: prefer not using because this is hard to maintain...
<#macro renderMenuItemFull>
</#macro>-->


<#-- 
*************************************
* CATO: TRADITIONAL MENU MACROS *
*************************************
-->

<#-- Cato: DEPRECATED/unmaintained/obsolete, replaced by one-shot macros, kept for reference only
<#macro renderMenuBegin boundaryComment="" id="" style="" title="" inlineEntries=false menuCtxRole="">
  <#local styleSet = splitStyleNamesToSet(style)>
<#if boundaryComment?has_content>
<!- ${boundaryComment} ->
</#if>
  <#local menuIdNum = getRequestVar("catoMenuIdNum")!0>
  <#local menuIdNum = menuIdNum + 1 />
  <#local dummy = setRequestVar("catoMenuIdNum", menuIdNum)>
  <#if !id?has_content>
    <#local id = "menu_" + menuIdNum>
  </#if>
  <#if !inlineEntries>
    <#local extraMenuAttribs = {}>
    <#if styleSet.contains("menu-main")>
      <#local remStyle = removeStyleNames(style, "menu-main")>
        <li class="${styles.menu_main_wrap!}"><a href="#" class="${styles.menu_main_item_link!}"
            <#if styles.framework?has_content && styles.framework == "bootstrap"> data-toggle="dropdown"</#if>>${title!}<#if styles.framework?has_content && styles.framework =="bootstrap"> <i class="fa fa-fw fa-caret-down"></i></#if></a>
      <#local classes = joinStyleNames(styles.menu_main!, remStyle)>
    <#elseif styleSet.contains("menu-sidebar")>
      <#local remStyle = removeStyleNames(style, "menu-sidebar")>
        <nav class="${styles.nav_sidenav!""}">
            <#if navigation?has_content><h2>${navigation!}</h2></#if>
      <#local classes = joinStyleNames(styles.menu_sidebar!, remStyle)>
    <#elseif styleSet.contains("menu-button")>
      <#local remStyle = removeStyleNames(style, "menu-button")>
      <#local classes = joinStyleNames(styles.menu_button!, remStyle)>
    <#elseif styleSet.contains("menu-button-dropdown")>
      <#local remStyle = removeStyleNames(style, "menu-button-dropdown")>
      <#local classes = joinStyleNames(styles.menu_button_dropdown!, remStyle)>
      <button href="#" data-dropdown="${id}" aria-controls="${id}" aria-expanded="false" class="${styles.menu_button_dropdown_mainbutton!}">${title}</button><br>
      <#local extraMenuAttribs = extraMenuAttribs + {"data-dropdown-content":"true", "aria-hidden":"true"}>
    <#elseif styleSet.contains("menu-tab")>    
      <#local remStyle = removeStyleNames(style, "menu-tab")>
      <#local classes = joinStyleNames(styles.menu_tab!, remStyle)>
    <#elseif styleSet.contains("button-bar")>
      <#local remStyle = removeStyleNames(style, ["button-bar"])> <#- ["button-bar", "no-clear"] ->
      <#- right now translating button-bar menu-container-style here to avoid modifying all menu styles
           note: in stock, button-bar usually accompanied by one of: button-style-2, tab-bar; also found: no-clear (removed above) ->
      <#- WARN: stock ofbiz usually applied styles to a containing div, 
           not sure should keep that behavior or not, but might not consistent with foundation styles? ->
      <#local classes = joinStyleNames(styles.menu_button!, remStyle)>
    <#else>
      <#- all other cases ->
      <#- WARN: stock ofbiz usually applied styles to a containing div, 
           not sure should keep that behavior or not, but might not consistent with foundation styles? ->
      <#local classes = joinStyleNames(styles.menu_default!, style)>
    </#if>
    <#if styleSet.contains("menu-button") || styleSet.contains("button-bar")>
        <div<#if classes?has_content> id="${id!"test"}" class="${classes}"</#if><@elemAttribStr attribs=extraMenuAttribs />>
    <#else>
        <ul<#if classes?has_content> id="${id!"test"}" class="${classes}"</#if><@elemAttribStr attribs=extraMenuAttribs />>
    </#if>
  </#if>
  <#local dummy = pushRequestStack("renderMenuStack", {"style":style,"remStyle":remStyle,"id":id,"inlineEntires":inlineEntries})> <#- pushing info to stack, so that this can be used by subsequently ->
</#macro>
-->

<#-- Cato: DEPRECATED/unmaintained/obsolete, replaced by one-shot macros, kept for reference only
<#macro renderMenuEnd boundaryComment="" style="" inlineEntries=false menuCtxRole="">
  <#local styleSet = splitStyleNamesToSet(style)>
  <#local menu = popRequestStack("renderMenuStack")>
  <#if !inlineEntries>
    <#if styleSet.contains("menu-main")>
            </ul>
        </li>
    <#elseif styleSet.contains("menu-sidebar")>
            </ul>
        </nav>
    <#elseif styleSet.contains("menu-button")>
        <#global isButtonMenu=true/>
        </div>
    <#elseif styleSet.contains("menu-tab")>
        </ul>
    <#elseif styleSet.contains("button-bar")>
        <#global isButtonMenu=true/>
        </div>
    <#else>
        </ul>
    </#if>
  </#if>
  <#if !readRequestStack("renderMenuStack")??> <#- if top-level menu ->
    <#local renderMenuHiddenFormContent = getRequestVar("renderMenuHiddenFormContent")!"">
    <#if renderMenuHiddenFormContent?has_content>
      ${renderMenuHiddenFormContent}
      <#- note: we don't have to worry about recursion here; will accumulate all forms from sub-menus as well;
           note: for simplicity, don't use xxxRequestStack for now, probably not needed ->
      <#local dummy = setRequestVar("renderMenuHiddenFormContent", "")>
    </#if>
  </#if>
<#if boundaryComment?has_content>
<!- ${boundaryComment} ->
</#if>
</#macro>
-->

<#-- Cato: DEPRECATED/unmaintained/obsolete, replaced by one-shot macros, kept for reference only
<#macro renderMenuItemBegin style toolTip linkStr containsNestedMenus menuCtxRole="">
    <#- Get surrounding menu information ->
    <#local menu = readRequestStack("renderMenuStack")>
    <#if menu.style?has_content>
        <#if menu.style?contains("menu-button") || menu.style?contains("button-bar")>\
            <#- FIXME: the nested menus thing is probably not appropriate for bootstrap, but leaving in otherwise comes out even worse
                The nested element would probably go inside the <a> but not possible with current menus; refactor may address later ->
            <#if linkStr?has_content>${linkStr}</#if><#rt/><#if containsNestedMenus><div></#if><#rt/>
        <#else>
            <li<#if style?has_content> class="${style}"</#if><#if toolTip?has_content> title="${toolTip}"</#if>><#if linkStr?has_content>${linkStr}</#if><#if containsNestedMenus><ul></#if><#rt/>
        </#if>
    </#if>    
</#macro>-->

<#-- Cato: DEPRECATED/unmaintained/obsolete, replaced by one-shot macros, kept for reference only
<#macro renderMenuItemEnd containsNestedMenus=false menuCtxRole="">
    <#local menu = readRequestStack("renderMenuStack")>
    <#if menu.style?has_content>
        <#if menu.style?contains("menu-button") || menu.style?contains("button-bar")>
            <#if containsNestedMenus></div></#if>
        <#else>
            <#if containsNestedMenus></ul></#if></li>
        </#if>
    </#if>
</#macro>-->
