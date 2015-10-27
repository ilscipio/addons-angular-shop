<#--
* 
* A set of HTML templating macros, part of standard Cato Freemarker API.
* Automatically included at all times.
* Intended to be swappable.
*
* Overrides the default CATO styles located in 
* catoHtmlTemplateDefault.ftl - ofbiz_foundation/framework/common/webcommon/includes
*
-->

<#-- Includes the default macros and allows overrides-->
<#include "component://common/webcommon/includes/catoHtmlTemplateDefault.ftl"> 
<#-- save the existing macro def references so we can delegate to them easily -->
<#assign defaultlib = copyObject(.namespace)>

<#--
Other patterns:

<#import "component://common/webcommon/includes/catoHtmlTemplateDefault.ftl" as defaultlib> 

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
* ORIGINAL MACROS
************
 -->

<#--
<#macro htmlHeadOpen includeDocType=false>
  <@defaultlib.htmlHeadOpen includeDocType=includeDocType/>
</#macro>

<#macro row class=true id="" collapse=false norows=false alt="" selected="">
    <@defaultlib.row class=class id=id collapse=collapse norows=norows alt=alt selected=selected><#nested /></@defaultlib.row>
</#macro>

<#macro cell columns=-1 small=-1 medium=-1 large=-1 offset=-1 smallOffset=-1 mediumOffset=-1 largeOffset=-1 class=true id="" collapse=false nocells=false last=false>
    <@defaultlib.cell columns=columns small=small medium=medium large=large offset=offset smallOffset=smallOffset mediumOffset=mediumOffset 
        largeOffset=largeOffset class=class id=id collapse=collapse nocells=nocells last=last><#nested /></@defaultlib.cell>
</#macro>

<#macro section type="generic" id="" title="" class=true padded=false autoHeadingLevel=true headingLevel="" relHeadingLevel="" defaultHeadingLevel="" menuContent="" menuClass="" menuLayout="" menuRole="nav-menu" requireMenu=false forceEmptyMenu=false hasContent=true titleClass="">
    <@defaultlib.section type=type id=id title=title class=class padded=padded autoHeadingLevel=autoHeadingLevel headingLevel=headingLevel relHeadingLevel=relHeadingLevel 
        defaultHeadingLevel=defaultHeadingLevel menuContent=menuContent menuClass=menuClass menuLayout=menuLayout menuRole=menuRole requireMenu=requireMenu forceEmptyMenu=forceEmptyMenu 
        hasContent=hasContent titleClass=titleClass><#nested /></@defaultlib.section>
</#macro>

<#macro heading elemType=true level="" relLevel="" class=true id="" levelClassPrefix="heading-level-" consumeLevel="" containerElemType=false containerClass=true attribs={} inlineAttribs...>
    <@defaultlib.heading elemType=elemType level=level relLevel=relLevel class=class id=id levelClassPrefix=levelClassPrefix consumeLevel=consumeLevel 
        containerElemType=containerElemType containerClass=containerClass attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.heading>
</#macro>

<#macro fields type="default" labelType="" labelLayout="" labelArea="" labelAreaExceptions=true formName="" formId="">
    <@defaultlib.fields type=type labelType=labelType labelLayout=labelLayout labelArea=labelArea labelAreaExceptions=labelAreaExceptions formName=formName formId=formId/>
</#macro>

<#function makeFieldsInfo type labelType="" labelLayout="" labelArea="" labelAreaExceptions=true formName="" formId="">
    <#return defaultlib.makeFields(type,labelType,labelLayout,labelArea,labelAreaExceptions,formName,formId)/>
</#function>

<#- moved to override
<#macro field type="generic" label="" labelDetail="" name="" value="" valueType="generic" currentValue="" defaultValue="" class=true size=20 maxlength="" id="" onClick="" 
        disabled=false placeholder="" autoCompleteUrl="" mask=false alert="false" readonly=false rows="4" 
        cols="50" dateType="date" multiple="" checked=false collapse=false tooltip="" columns="" norows=false nocells=false nocontainer=""
        fieldFormName="" formName="" formId="" postfix=false postfixSize=1 required=false items=[] autocomplete=true progressOptions={} 
        labelType="" labelLayout="" labelArea="" description=""
        submitType="input" text="" href="" src="" confirmMsg="">
   
   <@defaultlib.field type=type label=label labelDetail=labelDetail name=name value=value valueType=valueType currentValue=currentValue defaultValue=defaultValue class=class size=size maxlength=maxlength id=id onClick=onClick 
        disabled=disabled placeholder=placeholder autoCompleteUrl=autoCompleteUrl mask=mask alert=alert readonly=readonly rows=rows 
        cols=cols dateType=dateType multiple=multiple checked=checked collapse=collapse tooltip=tooltip columns=columns norows=norows nocells=nocells nocontainer=nocontainer
        fieldFormName=fieldFormName formName=formName formId=formId postfix=postfix postfixSize=postfixSize required=required items=items autocomplete=autocomplete progressOptions=progressOptions 
        labelType=labelType labelLayout=labelLayout labelArea=labelArea description=description
        submitType=submitType text=text href=href src=src confirmMsg=confirmMsg><#nested /></@defaultlib.field>            
</#macro>
->

<#macro fieldset id="" title="" class=true collapsed=false>
    <@defaultlib.fieldset id=id title=title class=class collapsed=collapsed><#nested /></@defaultlib.fieldset>
</#macro>

<#macro form type="input" name="" id="" class=true attribs={} inlineAttribs...>
    <@defaultlib.form type=type name=name id=id class=class attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.form>
</#macro>

<#macro modal id label href="" icon="">
    <@defaultlib.modal id=id label=label href=href icon=icon><#nested /></@defaultlib.modal>
</#macro>

<#macro paginate mode="single" type="default" layout="default" noResultsMode="default" paginateOn=true url="" class=true viewIndex=0 listSize=0 viewSize=1 altParam=false 
    forcePost=false paramStr="" viewIndexFirst=0 showCount=true countMsg=""
    paginateToggle=false paginateToggleString="" paginateToggleOnValue="Y" paginateToggleOffValue="N">
    <@defaultlib.paginate mode=mode type=type layout=layout noResultsMode=noResultsMode paginateOn=paginateOn url=url class=class viewIndex=viewIndex listSize=listSize viewSize=viewSize
        altParam=altParam forcePost=forcePost paramStr=paramStr viewIndexFirst=viewIndexFirst showCount=showCount countMsg=countMsg paginateToggle=paginateToggle 
        paginateToggleString=paginateToggleString paginateToggleOnValue=paginateToggleOnValue paginateToggleOffValue=paginateToggleOffValue><#nested /></@defaultlib.paginate>
</#macro>

<#macro script type="text/javascript" language="" src="" ofbizContentSrc="" forceInline=false>
    <@defaultlib.script type=type language=language src=src ofbizContentSrc=ofbizContentSrc forceInline=forceInline><#nested /></@defaultlib.script>
</#macro>

<#macro alert type="info" class=true id="">
    <@defaultlib.alert type=type class=class id=id><#nested /></@defaultlib.alert>
</#macro>

<#macro resultMsg class=true id="">
    <@defaultlib.resultMsg class=class id=id><#nested /></@defaultlib.resultMsg>
</#macro>

<#macro errorMsg type="error" class=true id="">
    <@defaultlib.errorMsg type=type class=class id=id><#nested /></@defaultlib.errorMsg>
</#macro>

<#macro panel type="" title="">
    <@defaultlib.panel type=type title=title><#nested /></@defaultlib.panel>
</#macro>

<#macro pul title="">
    <@defaultlib.pul title=title><#nested /></@defaultlib.pul>
</#macro>

<#macro pli type="">
    <@defaultlib.pli type=type><#nested /></@defaultlib.pli>
</#macro>

<#macro grid type="" class=true columns=4>
    <@defaultlib.grid type=type class=class columns=columns><#nested /></@defaultlib.grid>
</#macro>

<#macro nav type="inline">
    <@defaultlib.nav type=type><#nested /></@defaultlib.nav>
</#macro>

<#macro mli arrival="">
    <@defaultlib.mli arrival=arrival><#nested /></@defaultlib.mli>
</#macro>

<#function mtarget id>
  <#return defaultlib.mtarget(id)>
</#function>

<#function makeMagTargetAttribMap id>
  <#return defaultlib.makeMagTargetAttribMap(id)>
</#function>

<#macro code type="html">
    <@defaultlib.code type=type><#nested /></@defaultlib.code>
</#macro>

<#macro table type="generic" class=true id="" cellspacing=true scrollable=false autoAltRows="" firstRowAlt="" inheritAltRows=false useFootAltRows=false wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.table type=type class=class id=id cellspacing=cellspacing scrollable=scrollable scrollable=scrollable firstRowAlt=firstRowAlt 
        inheritAltRows=inheritAltRows useFootAltRows=useFootAltRows wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.table>
</#macro>

<#macro thead class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.thead class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.thead>
</#macro>

<#macro tbody class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.tbody class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.tbody>
</#macro>

<#macro tfoot class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.tfoot class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.tfoot>
</#macro>

<#macro tr type="" class=true id="" useAlt="" alt="" groupLast="" groupParent="" selected="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.tr type=type class=class id=id useAlt=useAlt alt=alt groupLast=groupLast groupParent=groupParent selected=selected wrapIf=wrapIf openOnly=openOnly 
        closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.tr>
</#macro>

<#macro th class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.th class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.th>
</#macro>

<#macro td class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@defaultlib.td class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@defaultlib.td>
</#macro>

<#macro dataRowClassStr class=true alt="" selected="">
    <@defaultlib.dataRowClassStr class=class alt=alt selected=selected><#nested /></@defaultlib.dataRowClassStr>
</#macro>

<#macro tile type="normal" title="" class=true id="" link="" color=0 icon="" image="">
    <@defaultlib.tile type=type title=title class=class id=id link=link color=color icon=icon image=image><#nested /></@defaultlib.tile>
</#macro>

<#function calcTileSize type="x" value="normal">
    <#return defaultlib.calcTileSize(type,value)>
</#function>

<#macro chart type="pie" library="foundation" title="">
    <@defaultlib.chart type=type library=library title=title><#nested /></@defaultlib.chart>
</#macro>

<#macro chartdata title value value2="">
    <@defaultlib.chartdata title=title value=value value2=value2><#nested /></@defaultlib.chartdata>
</#macro>

<#macro progress value=0 id="" type="" class=true showValue=false wrapperClass=true progressOptions={}>
    <@defaultlib.progress value=value id=id type=type class=class showValue=showValue wrapperClass=wrapperClass progressOptions=progressOptions><#nested /></@defaultlib.progress>
</#macro>

<#macro progressScript options={} htmlwrap=false>
    <@defaultlib.progressScript options=options htmlwrap=htmlwrap><#nested /></@defaultlib.progressScript>
</#macro>

<#macro menu args={} inlineArgs...>
    <@defaultlib.menu args=concatMaps(args, inlineArgs)><#nested /></@defaultlib.menu>
</#macro>

<#macro menuitem args={} inlineArgs...>
    <@defaultlib.menuitem args=concatMaps(args, inlineArgs)><#nested /></@defaultlib.menuitem>
</#macro>

<#macro printVars var=context>
    <@defaultlib.printVars var=var><#nested /></@defaultlib.printVars>
</#macro>

<#macro printVar key value="">
    <@defaultlib.printVar key=key value=value><#nested /></@defaultlib.printVar>
</#macro>

-->

<#-- 
*************
* OVERRIDES
************
 -->

<#macro field type="generic" label="" labelDetail="" name="" value="" valueType="generic" currentValue="" defaultValue="" class=true size=20 maxlength="" id="" onClick="" 
        disabled=false placeholder="" autoCompleteUrl="" mask=false alert="false" readonly=false rows="4" 
        cols="50" dateType="date" multiple="" checked=false collapse=false tooltip="" columns="" norows=false nocells=false nocontainer=""
        fieldFormName="" formName="" formId="" postfix=false postfixSize=1 required=false items=[] autocomplete=true progressOptions={} 
        labelType="" labelLayout="" labelArea="" description=""
        submitType="input" text="" href="" src="" confirmMsg="">
   <#local fieldIdNum = getRequestVar("catoFieldIdNum")!0>
   <#local fieldIdNum = fieldIdNum + 1 />
   <#local dummy = setRequestVar("catoFieldIdNum", fieldIdNum)>
   <#local class = makeClassesArg(class, "form-control")/>
   <#if !id?has_content>
        <#-- FIXME? renderSeqNumber usually empty... where come from? should be as request attribute also? -->
        <#local id = "field_id_${renderSeqNumber!}_${fieldIdNum!0}">
   </#if>

    <#local classes = "${styles.grid_large!}12"/>
    <#local columnspostfix = 0/>
    <#if postfix>
        <#local columnspostfix = postfixSize/>
        <#local collapse = true/>
        <#local classes = "${styles.grid_small!}${12-columnspostfix} ${styles.grid_large!}${12-columnspostfix}"/>
    </#if>

    <#local class = makeClassesArg(class, "")>  
    <#if required && (!containsStyleName(class, "required"))>
        <#local class = (class + " required")?trim>
    </#if>
    
    <@row collapse=collapse!false norows=norows> 
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
        <#if label?has_content>
            <label class="control-label"<#if id?has_content> for="${id}"</#if>>${label}</label>
            <#if required>*</#if>
        </#if> 
        <#if labelDetail?has_content>
            ${labelDetail}
        </#if>
            
        
        
   <div class="form-group input-group">
        <#if label?has_content><span class="input-group-addon">${label!}</span></#if>
        <@defaultlib.field type=type label="" labelDetail=labelDetail name=name value=value valueType=valueType currentValue=currentValue defaultValue=defaultValue class=class size=size maxlength=maxlength id=id onClick=onClick 
            disabled=disabled placeholder=placeholder autoCompleteUrl=autoCompleteUrl mask=mask alert=alert readonly=readonly rows=rows
            cols=cols dateType=dateType multiple=multiple checked=checked collapse=collapse tooltip=tooltip columns=columns norows=norows nocells=nocells nocontainer="true"
            fieldFormName=fieldFormName formName=formName formId=formId postfix=postfix postfixSize=postfixSize required=required items=items autocomplete=autocomplete progressOptions=progressOptions 
            labelType=labelType labelLayout=labelLayout labelArea=labelArea description=description
            submitType=submitType text=text href=href src=src confirmMsg=confirmMsg><#nested /></@defaultlib.field>
   </div>
   </@cell>
   </@row>         
</#macro>


<#macro menu args={} inlineArgs...>
    <#-- DEV WARN: currently the htmlWrap does not apply to @section menus; fix is WIP (part of a bigger fix; please do not try to fix at the moment) -->
    <@defaultlib.menu args=concatMaps(args, inlineArgs) htmlWrap="div"><#nested /></@defaultlib.menu>
</#macro>

<#macro menuitem args={} inlineArgs...>
    <@defaultlib.menuitem args=concatMaps(args, inlineArgs) inlineItem=true><#nested /></@defaultlib.menuitem>
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
