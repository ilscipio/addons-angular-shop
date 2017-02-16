        <#-- Macro for rendering the sidebar. Relies on a tiny screenwidget that we are using for rendering menus-->
        <#macro sideBarMenu>
            <#--<#if applicationMenuLocation?has_content && applicationMenuName?has_content>
                <@render type="menu" name=applicationMenuName resource=applicationMenuLocation />
            </#if>-->
          <#if sections??>
            ${sections.render("left-column")}
          </#if>
        </#macro>

                </ul>
             </header>
        </div>
        <div class="app-body">
            <div class="sidebar">
                <@sideBarMenu/> 
            </div>
            <main class="main">