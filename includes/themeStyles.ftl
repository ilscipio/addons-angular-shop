<#--
* 
* A set of global variables that define common styling classes, part of standard Cato Freemarker API.
* Automatically included at all times.
* Intended to be swappable.
*
* Overrides the default CATO styles located in 
* catoHtmlVariablesDefault.ftl - ofbiz_foundation/framework/common/webcommon/includes
*
-->

<#-- 
*************************************
* TEMPLATING VARIABLES FOR BOOTSTRAP *
*************************************
-->

<#global styles = {
  <#-- Misc -->
    "framework" : "bootstrap",
    "disabled" : "disabled",
    "active" : "active",
    "button" : "btn",
    "button_group" : "btn-group",
    "button_force" : "force-button",
    "button_default" : "btn btn-xs btn-default",
    "tiny" : "btn-xs",
    "small" : "btn-sm",
    "medium" : "btn-md",
    "large" : "btn-xl",
    "round" : "round",
    "radius" : "radius",
    "expand" : "expand",
    "collapse" : "collapse",
    "collapsed" : "collapsed",
    "hidden" : "hide",
    "icon" : "fa fa-fw",
    "icon_button" : "fa-widget",
    "icon_button_value" : "&#xf214;",
    "icon_calendar" : "fa-calendar",
    "icon_arrow" : "fa-arrow-right",
    "icon_list" : "fa-list",
    
  <#-- Menus -->  
    <#-- Generic menu types -->
    "menu_default" : "",  
    "menu_default_item" : "", 
    "menu_default_itemlink" : "", 
    "menu_button" : "button-group force-button",
    "menu_button_item" : "",
    "menu_button_itemlink" : "button tiny",
    <#-- Main navigation menus -->
    "menu_main" : "dropdown-menu",
    "menu_main_wrap" : "dropdown",  
    "menu_main_item" : "dropdown-toggle",
    "menu_main_itemlink" : "javascript:;",
    "menu_sidebar" : "nav navbar-nav side-nav", 
    "menu_sidebar_wrap" :"collapse navbar-collapse navbar-ex1-collapse",
    "menu_sidebar_item" : "",
    "menu_sidebar_itemlink" : "", 
    <#-- Tab and secondary navigation menus-->
    "menu_tab" : "button-group force-button", 
    "menu_tab_item" : "", 
    "menu_tab_itemlink" : "button tiny", 
    "menu_subtab" : "button-group force-button",
    "menu_subtab_item" : "",
    "menu_subtab_itemlink" : "button tiny", 
    <#-- Default section menu -->
    "menu_section" : "button-group",
    "menu_section_item" : "",
    "menu_section_itemlink" : "button tiny", 
    <#-- Default section menu inlined with title
        FIXME: looks too big/clumsy with these buttons (floats right of title) -->
    "menu_section_inline" : "button-group",
    "menu_section_inline_item" : "",
    "menu_section_inline_itemlink" : "button tiny", 
    
  <#-- Data and Tables -->  
    "table_default" : "table",
    "table_default_cellspacing" : "",
    "table_data_list" : "basic-table",
    "table_data_list_cellspacing" : 0,
    "table_data_complex" : "table-hover",
    "table_data_complex_cellspacing" : 0,
    "table_summary" : "table",
    "table_summary_cellspacing" : 0,
    "table_fields" : "",
    "table_fields_cellspacing" : 0,
    "row_reg" : "even",
    "row_alt" : "odd",
    "row_selected" : "selected",
    
    "link_action" : "btn btn-xs btn-default", 
    "link_id" : "btn btn-xs btn-default", 
    "link_name" : "btn btn-xs btn-default", 
    "link_desc" : "",
    "link_text" : "",
    "link_image" : "",
    
  <#-- Colors -->
    "color_green" : "success",
    "color_red" : "alert",
    "color_grey" : "secondary",
    "color_secondary" : "secondary",
    "color_info" : "info",
    "color_warning" : "warning",
    "color_success" : "success",  
    "color_alert" : "danger",        
    "color_error" : "danger",
    
  <#-- Grid -->
    "grid_row" : "row",
    "grid_cell" : "columns",
    "grid_display" : "display",      <#-- display grid -->
    "grid_end" : "end",
    "grid_small" : "small-",   
    "grid_medium" : "col-md-",
    "grid_large" : "col-lg-",       
    "grid_offset" : "col-md-offset-",      
    "grid_small_offset" : "col-sm-offset-",     
    "grid_medium_offset" : "col-md-offset-",    
    "grid_large_offset" : "col-lg-offset-",   
    "grid_block" : "block-grid-",
    "grid_columns_1" : "col-lg-1",
    "grid_columns_2" : "col-lg-2 col-md-3",
    "grid_columns_3" : "col-lg-3 col-md-4",
    "grid_columns_4" : "col-lg-4 col-md-5",
    "grid_columns_5" : "col-lg-5 col-md-6",
    "grid_columns_6" : "col-lg-6",
    "grid_columns_7" : "col-lg-7 col-md-6",
    "grid_columns_8" : "col-lg-8 col-md-7",
    "grid_columns_9" : "col-lg-9 col-md-8",
    "grid_columns_10" : "col-lg-10 col-md-9",
    "grid_columns_11" : "col-lg-11 col-md-10",
    "grid_columns_12" : "col-lg-12",
    "grid_centered" : "centered",
    "grid_small_centered" : "col-sm-centered",
    "grid_medium_centered" : "col-md-centered",
    "grid_large_centered" : "col-lg-centered",
    "grid_sidebar_0_main" : "col-lg-12",
    "grid_sidebar_1_main" : "",
    "grid_sidebar_1_side" : "navbar-inverse ",
    "grid_sidebar_2_main" : "col-lg-12 columns",
    "grid_sidebar_2_side" : "navbar-inverse",

  <#-- Floats -->
    "float_left" : "left",
    "float_right" : "right",
    "float_clearfix" : "clearfix",
    
  <#-- Navigation -->
    "nav_subnav" : "sub-nav",

  <#-- Lists -->
    "list_inline" : "inline-list",

  <#-- Tile -->
    "tile_container" : "tile-container",
    "tile_wrap" : "tile",
    "tile_color" : "tile-color-",
    "tile_content" : "tile-content",
    "tile_icon" : "tile-icon",
    "tile_title" : "tile-title",
    "tile_overlay" : "tile-overlay",
    "tile_image" : "tile-image",

  <#-- Breadcrumbs -->
    "nav_breadcrumbs" : "breadcrumbs",
    "nav_breadcrumbs_disabled" : "unavailable",
    "nav_breadcrumbs_active" : "current",

  <#-- Panels -->
    "panel_wrap" : "panel panel-default",
    "panel_head" : "panel-heading",
    "panel_title" : "panel-title",
    "panel_body" : "panel-body",

  <#-- Alert Box -->
    "alert_wrap" : "alert",    
    "alert_prefix_type" : "alert-",             

  <#-- Pricing Tables -->
    "pricing_wrap" : "pricing-table",
    "pricing_price" : "price",
    "pricing_description" : "description",
    "pricing_title" : "title",
    "pricing_cta" : "cta-button",
    "pricing_bullet" : "bullet-item",

  <#-- Modal -->
    "modal_wrap" : "reveal-modal",

  <#-- Chart -->
    "chart_legend" : "chart-legend",

  <#-- Progress Bar -->
    "progress_container" : "progress",   
    "progress_wrap" : "progress-bar",           
    "progress_bar" : "sr-only",       

  <#-- Fields -->
    "fields_default_labeltype" : "gridarea",
    "fields_default_labellayout" : "left",
    "fields_default_labelarea" : true,
    "fields_default_labelareaexceptions" : "submit submitarea",

    "fields_default_nolabels_labeltype" : "none",
    "fields_default_nolabels_labellayout" : "none",
    "fields_default_nolabels_labelarea" : false,
    "fields_default_nolabels_labelareaexceptions" : "", 

    "fields_generic_labeltype" : "gridarea",
    "fields_generic_labellayout" : "left",
    "fields_generic_labelarea" : false,
    "fields_generic_labelareaexceptions" : "", 

  <#-- Always declare last -->
    "dummy" : ""
}>