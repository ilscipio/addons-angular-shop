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
*************
* ORIGINAL MACROS
************
 -->


<#-- 
*************
* OVERRIDES
************
 -->


<#-- 
*   FIXME: 
*   The following macros override the ofbiz standards, so that we can change the html. 
*   Ideally the html generation of these and the cato macros should be based on a common library 
-->
<#macro renderMenuBegin boundaryComment="" id="" style="" title="" inlineEntries=false menuCtxRole="">
  <#local styleSet = splitStyleNamesToSet(style)>
<#if boundaryComment?has_content>
<!-- ${boundaryComment} -->
</#if>
  <#if !inlineEntries>
    <#if styleSet.contains("menu-main")>
      <#local remStyle = removeStyleNames(style, "menu-main")>
        <li class="${styles.menu_main_wrap!}"><a href="#" class="${styles.menu_main_item_link!}"
            <#if styles.framework?has_content && styles.framework =="bootstrap"> data-toggle="dropdown"</#if>>${title!}<#if styles.framework?has_content && styles.framework =="bootstrap"> <i class="fa fa-fw fa-caret-down"></i></#if></a>
      <#local classes = joinStyleNames(styles.menu_main!, remStyle)>
    <#elseif styleSet.contains("menu-sidebar")>
      <#local remStyle = removeStyleNames(style, "menu-sidebar")>
        <nav class="${styles.nav_sidenav!""}">
            <h2>${navigation!}</h2>
      <#local classes = joinStyleNames(styles.menu_sidebar!, remStyle)>
    <#elseif styleSet.contains("menu-button")>
      <#local remStyle = removeStyleNames(style, "menu-button")>
      <#local classes = joinStyleNames(styles.menu_button!, remStyle)>
    <#elseif styleSet.contains("menu-tab")>    
      <#local remStyle = removeStyleNames(style, "menu-tab")>
      <#local classes = joinStyleNames(styles.menu_tab!, remStyle)>
    <#elseif styleSet.contains("button-bar")>
      <#local remStyle = removeStyleNames(style, ["button-bar", "no-clear"])>
      <#-- right now translating button-bar menu-container-style here to avoid modifying all menu styles
           note: in stock, button-bar usually accompanied by one of: button-style-2, tab-bar; also found: no-clear (removed above) -->
      <#-- WARN: stock ofbiz usually applied styles to a containing div, 
           not sure should keep that behavior or not, but might not consistent with foundation styles? -->
      <#local classes = joinStyleNames(styles.menu_button!, remStyle)>
    <#else>
      <#-- all other cases -->
      <#-- WARN: stock ofbiz usually applied styles to a containing div, 
           not sure should keep that behavior or not, but might not consistent with foundation styles? -->
      <#local classes = joinStyleNames(styles.menu_default!, style)>
    </#if>
    <#if styleSet.contains("menu-button") || styleSet.contains("button-bar")>
        <div<#if classes?has_content> id="${id!"test"}" class="${classes}"</#if>>
    <#else>
        <ul<#if classes?has_content> id="${id!"test"}" class="${classes}"</#if>>
    </#if>
  </#if>
  <#local dummy = pushRequestStack("renderMenuStack", {"style":style,"remStyle":remStyle,"id":id,"inlineEntires":inlineEntries})> <#-- pushing info to stack, so that this can be used by subsequently -->
</#macro>

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
<#if boundaryComment?has_content>
<!-- ${boundaryComment} -->
</#if>
</#macro>

<#macro renderMenuItemBegin style toolTip linkStr containsNestedMenus menuCtxRole="">
    <#-- Get surrounding menu information -->
    <#local menu = readRequestStack("renderMenuStack")>
    <#if menu.style?has_content>
        <#if menu.style?contains("menu-button") || menu.style?contains("button-bar")>
            <#if linkStr?has_content>${linkStr}</#if><#rt/>
        <#else>
            <li<#if style?has_content> class="${style}"</#if><#if toolTip?has_content> title="${toolTip}"</#if>><#if linkStr?has_content>${linkStr}</#if><#if containsNestedMenus><ul></#if><#rt/>
        </#if>
    </#if>    
</#macro>
