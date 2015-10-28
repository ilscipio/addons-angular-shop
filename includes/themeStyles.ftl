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
    "button_prefix" : "btn-",
    "button_group" : "btn-group",
    "button_force" : "force-button",
    "button_default" : "btn btn-sm btn-default",
    "tiny" : "btn-xs",
    "small" : "btn-sm",
    "medium" : "btn-md",
    "large" : "btn-lg",
    "round" : "round",
    "radius" : "radius",
    "expand" : "expand",
    "collapse" : "",
    "collapsed" : "",
    "prefix" : "prefix",
    "postfix" : "postfix",
    "hidden" : "hide",
    "icon" : "fa fa-fw",
    "icon_prefix" : "fa fa-",
    "icon_button" : "fa-widget",
    "icon_button_value" : "&#xf214;",
    "icon_calendar" : "fa-calendar",
    "icon_arrow" : "fa-arrow-right",
    "icon_list" : "fa-list",
    "heading_level_prefix" : "heading-level-",     
    
  <#-- Menus -->  
    <#-- Generic menu types -->
    "menu_generic" : "",  
    "menu_generic_item" : "", 
    "menu_generic_item_link" : "",
    "menu_generic_item_submit" : "", 
    "menu_button" : "btn-group",
    "menu_button_item" : "",
    "menu_button_item_link" : "btn btn-sm btn-default",
    "menu_button_item_submit" : "btn btn-sm btn-default",
    <#-- Main navigation menus -->
    "menu_main" : "dropdown-menu",
    "menu_main_wrap" : "dropdown",  
    "menu_main_item" : "dropdown-toggle",
    "menu_main_item_link" : "javascript:;",
    "menu_main_item_submit" : "",
    "menu_sidebar" : "nav navbar-nav side-nav", 
    "menu_sidebar_wrap" :"collapse navbar-collapse navbar-ex1-collapse",
    "menu_sidebar_item" : "",
    "menu_sidebar_item_link" : "", 
    "menu_sidebar_item_submit" : "",
    <#-- Tab and secondary navigation menus-->
    "menu_tab" : "nav nav-tabs", 
    "menu_tab_item" : "", 
    "menu_tab_item_link" : "btn btn-sm btn-default",
    "menu_tab_item_submit" : "", 
    "menu_subtab" : "nav nav-tabs",
    "menu_subtab_item" : "",
    "menu_subtab_item_link" : "btn btn-sm btn-default",
    "menu_subtab_item_submit" : "", 
    <#-- Default section menu -->
    "menu_section" : "btn-group",
    "menu_section_item" : "",
    "menu_section_item_link" : "btn btn-sm btn-default",
    "menu_section_item_submit" : "btn btn-sm btn-default", 
    <#-- Default section menu inlined with title
        FIXME: looks too big/clumsy with these buttons (floats right of title) -->
    "menu_section_inline" : "btn-group",
    "menu_section_inline_item" : "",
    "menu_section_inline_item_link" : "btn btn-sm btn-default",
    "menu_section_inline_item_submit" : "btn btn-sm btn-default", 
    <#-- default entry is used for any encountered menu types that have no specific entries in this hash -->    
    "menu_default" : "",  
    "menu_default_item" : "", 
    "menu_default_itemdisabled" : "disabled", 
    "menu_default_itemactive" : "active", 
    "menu_default_itemselected" : "selected", 
    "menu_default_item_contentdisabled" : "disabled", 
    "menu_default_item_contentactive" : "active", 
    "menu_default_item_contentselected" : "selected", 
    "menu_default_item_link" : "",
    "menu_default_item_text" : "text-entry",
    "menu_default_item_submit" : "", 
    
  <#-- Data and Tables -->
    "table_generic" : "",
    "table_generic_cellspacing" : "",
    "table_generic_rowtype" : "generic",    <#-- the default row type is normally "content", but generic tables need "generic" -->
    "table_responsive_wrap" : "table-responsive", <#-- responsive table wrapping div element -->
    "table_data_list" : "table table-striped",
    "table_data_list_cellspacing" : 0,
    <#-- not enabled, but may be desirable: "table_data_list_autoaltrows" : true, -->
    "table_data_complex" : "table",
    "table_data_complex_cellspacing" : 0,
    "table_summary" : "table",
    "table_summary_cellspacing" : 0,
    "table_fields" : "table table-condensed",
    "table_fields_cellspacing" : 0,
    <#-- default entry is used by @table for any encountered table types that have no specific entries in this hash. 
         in other words, it is the default style for table types that this theme does not recognize, or "all others". --> 
    "table_default" : "table",
    "table_default_cellspacing" : "",
    "table_default_autoaltrows" : false,
    "table_default_rowtype" : "content",
    
    "table_basic" : "table table-condensed",  <#-- this is not a table type, but simply the basic-table style -->
    "row_reg" : "even",
    "row_alt" : "odd",
    "row_selected" : "selected",
    
    "link_action" : "btn btn-sm btn-default", 
    "link_id" : "btn btn-sm btn-default", 
    "link_name" : "btn btn-sm btn-default", 
    "link_desc" : "",
    "link_text" : "",
    "link_image" : "",
    
  <#-- Colors -->
    "color_green" : "success",
    "color_red" : "alert",
    "color_grey" : "secondary",
    "color_primary" : "primary",
    "color_secondary" : "secondary",
    "color_info" : "info",
    "color_warning" : "warning",
    "color_success" : "success",  
    "color_alert" : "danger",        
    "color_error" : "danger",
    "button_color_default" : "btn-default",
    "button_color_primary" : "btn-primary",
    "button_color_secondary" : "btn-secondary",
    "button_color_success" : "btn-success",
    "button_color_info" : "btn-info",
    "button_color_warning" : "btn-warning",
    "button_color_alert" : "btn-danger",
    
  <#-- Grid -->
    "grid_row" : "row",
    "grid_cell" : "columns",
    "grid_display" : "display",      <#-- display grid -->
    "grid_end" : "end",
    "grid_small" : "col-sm-",   
    "grid_medium" : "col-md-",
    "grid_large" : "col-lg-",       
    "grid_offset" : "col-md-offset-",      
    "grid_small_offset" : "col-sm-offset-",     
    "grid_medium_offset" : "col-md-offset-",    
    "grid_large_offset" : "col-lg-offset-",   
    "grid_block_prefix" : "",
    "grid_block_postfix" : "block-grid-",
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
    "grid_sidebar_1_main" : "col-lg-12",
    "grid_sidebar_1_side" : "",
    "grid_sidebar_2_main" : "col-lg-12",
    "grid_sidebar_2_side" : "navbar-inverse",

  <#-- Floats -->
    "float_left" : "left",
    "float_right" : "right",
    "float_clearfix" : "clearfix",
    
  <#-- Navigation -->
    "nav_subnav" : "sub-nav",
    "nav_sidenav" : "navbar-inverse collapse navbar-collapse navbar-ex1-collapse ",

  <#-- Pagination -->
    "pagination_wrap" : "text-center",
    "pagination_list" : "pagination",
    "pagination_control" : "pull-right",
    "pagination_item" : "",
    "pagination_item_first" : "",
    "pagination_item_last" : "",
    "pagination_item_previous" : "",
    "pagination_item_next" : "",
    "pagination_item_active" : "active",
    "pagination_item_disabled" : "disabled",

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
    "nav_breadcrumbs" : "breadcrumb",
    "nav_breadcrumbs_disabled" : "disabled",
    "nav_breadcrumbs_active" : "active",

  <#-- Panels -->
    "panel_wrap" : "panel panel-default",
    "panel_head" : "panel-heading",
    "panel_title" : "panel-title",
    "panel_body" : "panel-body",

  <#-- Alert Box -->
    "alert_wrap" : "alert",    
    "alert_prefix_type" : "alert-",     <#-- Bootstrap: "alert-"; Note: This may be removed -->
    "alert_type_info" : "alert-info",
    "alert_type_success" : "alert-success",
    "alert_type__warning" : "alert-warning",
    "alert_type_secondary" : "alert-secondary",  
    "alert_type_alert" : "alert-danger",        
    "alert_type_error" : "alert-danger",             

  <#-- Pricing Tables -->
    "pricing_wrap" : "panel panel-primary",
    "pricing_price" : "price",
    "pricing_description" : "panel-body text-center",
    "pricing_title" : "panel-heading",
    "pricing_cta" : "btn btn-lg btn-block btn-primary",
    "pricing_bullet" : "list-group-item",

  <#-- Modal -->
    "modal_wrap" : "modal fade",

  <#-- Chart -->
    "chart_legend" : "chart-legend",

  <#-- Progress Bar -->
    "progress_container" : "progress",   
    "progress_wrap" : "progress-bar",           
    "progress_bar" : "sr-only",       

  <#-- Fields -->
    "fields_wrap" : "input-group",
    "fields_label" : "input-group-addon",
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