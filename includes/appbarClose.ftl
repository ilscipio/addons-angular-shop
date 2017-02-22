        <#-- Macro for rendering the sidebar. Relies on a tiny screenwidget that we are using for rendering menus-->
        <#macro sideBarMenu>
            <#if mainSideBarMenuCfg.location?has_content && mainSideBarMenuCfg.name?has_content>
                   <@render type="menu" name=mainSideBarMenuCfg.name resource=mainSideBarMenuCfg.location subMenus="all"/>
               </#if>
            
          <#-- 
          <#if sections??>
            ${sections.render("left-column")}
          </#if>-->
        </#macro>
                <#-- 
                <ul class="nav navbar-nav navbar-left top-nav" style="display:none">
                </ul>-->
             </header>
        <div class="app-body">
            <div class="sidebar">
                <@sideBarMenu/> 
            </div>
            <main class="main">