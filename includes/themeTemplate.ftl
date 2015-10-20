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

<#-- Imports the default macros and allows overrides-->
<#import "component://common/webcommon/includes/catoHtmlTemplateDefault.ftl" as macrolib> 


<#-- 
*************
* ORIGINAL MACROS
************
 -->
<#macro htmlHeadOpen includeDocType=false>
  <@macrolib.htmlHeadOpen includeDocType=includeDocType/>
</#macro>

<#macro row class=true id="" collapse=false norows=false alt="" selected="">
    <@macrolib.row class=class id=id collapse=collapse norows=norows alt=alt selected=selected><#nested /></@macrolib.row>
</#macro>

<#macro cell columns=-1 small=-1 medium=-1 large=-1 offset=-1 smallOffset=-1 mediumOffset=-1 largeOffset=-1 class=true id="" collapse=false nocells=false last=false>
    <@macrolib.cell columns=columns small=small medium=medium large=large offset=offset smallOffset=smallOffset mediumOffset=mediumOffset 
        largeOffset=largeOffset class=class id=id collapse=collapse nocells=nocells last=last><#nested /></@macrolib.cell>
</#macro>

<#macro section type="generic" id="" title="" class=true padded=false autoHeadingLevel=true headingLevel="" relHeadingLevel="" defaultHeadingLevel="" menuHtml="" menuClass="" menuLayout="" menuRole="nav-menu" requireMenu=false forceEmptyMenu=false hasContent=true titleClass="">
    <@macrolib.section type=type id=id title=title class=class padded=padded autoHeadingLevel=autoHeadingLevel headingLevel=headingLevel relHeadingLevel=relHeadingLevel 
        defaultHeadingLevel=defaultHeadingLevel menuHtml=menuHtml menuClass=menuClass menuLayout=menuLayout menuRole=menuRole requireMenu=requireMenu forceEmptyMenu=forceEmptyMenu 
        hasContent=hasContent titleClass=titleClass><#nested /></@macrolib.section>
</#macro>

<#macro heading elemType=true level="" relLevel="" class=true id="" levelClassPrefix="heading-level-" consumeLevel="" containerElemType=false containerClass=true attribs={} inlineAttribs...>
    <@macrolib.heading elemType=elemType level=level relLevel=relLevel class=class id=id levelClassPrefix=levelClassPrefix consumeLevel=consumeLevel 
        containerElemType=containerElemType containerClass=containerClass attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.heading>
</#macro>

<#macro fields type="default" labelType="" labelLayout="" labelArea="" labelAreaExceptions=true formName="" formId="">
    <@macrolib.fields type=type labelType=labelType labelLayout=labelLayout labelArea=labelArea labelAreaExceptions=labelAreaExceptions formName=formName formId=formId/>
</#macro>

<#function makeFieldsInfo type labelType="" labelLayout="" labelArea="" labelAreaExceptions=true formName="" formId="">
    <#return macrolib.makeFields(type,labelType,labelLayout,labelArea,labelAreaExceptions,formName,formId)/>
</#function>

<#-- moved to override
<#macro field type="generic" label="" labelDetail="" name="" value="" valueType="generic" currentValue="" defaultValue="" class=true size=20 maxlength="" id="" onClick="" 
        disabled=false placeholder="" autoCompleteUrl="" mask=false alert="false" readonly=false rows="4" 
        cols="50" dateType="date" multiple="" checked=false collapse=false tooltip="" columns="" norows=false nocells=false nocontainer=""
        fieldFormName="" formName="" formId="" postfix=false postfixSize=1 required=false items=[] autocomplete=true progressOptions={} 
        labelType="" labelLayout="" labelArea="" description=""
        submitType="input" text="" href="" src="" confirmMsg="">
   
   <@macrolib.field type=type label=label labelDetail=labelDetail name=name value=value valueType=valueType currentValue=currentValue defaultValue=defaultValue class=class size=size maxlength=maxlength id=id onClick=onClick 
        disabled=disabled placeholder=placeholder autoCompleteUrl=autoCompleteUrl mask=mask alert=alert readonly=readonly rows=rows 
        cols=cols dateType=dateType multiple=multiple checked=checked collapse=collapse tooltip=tooltip columns=columns norows=norows nocells=nocells nocontainer=nocontainer
        fieldFormName=fieldFormName formName=formName formId=formId postfix=postfix postfixSize=postfixSize required=required items=items autocomplete=autocomplete progressOptions=progressOptions 
        labelType=labelType labelLayout=labelLayout labelArea=labelArea description=description
        submitType=submitType text=text href=href src=src confirmMsg=confirmMsg><#nested /></@macrolib.field>            
</#macro>
-->

<#macro fieldset id="" title="" class=true collapsed=false>
    <@macrolib.fieldset id=id title=title class=class collapsed=collapsed><#nested /></@macrolib.fieldset>
</#macro>

<#macro form type="input" name="" id="" class=true attribs={} inlineAttribs...>
    <@macrolib.form type=type name=name id=id class=class attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.form>
</#macro>

<#macro modal id label href="" icon="">
    <@macrolib.modal id=id label=label href=href icon=icon><#nested /></@macrolib.modal>
</#macro>

<#macro paginate mode="single" type="default" layout="default" noResultsMode="default" paginateOn=true url="" class=true viewIndex=0 listSize=0 viewSize=1 altParam=false 
    forcePost=false paramStr="" viewIndexFirst=0 showCount=true countMsg=""
    paginateToggle=false paginateToggleString="" paginateToggleOnValue="Y" paginateToggleOffValue="N">
    <@macrolib.paginate mode=mode type=type layout=layout noResultsMode=noResultsMode paginateOn=paginateOn url=url class=class viewIndex=viewIndex listSize=listSize viewSize=viewSize
        altParam=altParam forcePost=forcePost paramStr=paramStr viewIndexFirst=viewIndexFirst showCount=showCount countMsg=countMsg paginateToggle=paginateToggle 
        paginateToggleString=paginateToggleString paginateToggleOnValue=paginateToggleOnValue paginateToggleOffValue=paginateToggleOffValue><#nested /></@macrolib.paginate>
</#macro>

<#macro script type="text/javascript" language="" src="" ofbizContentSrc="" forceInline=false>
    <@macrolib.script type=type language=language src=src ofbizContentSrc=ofbizContentSrc forceInline=forceInline><#nested /></@macrolib.script>
</#macro>

<#macro alert type="info" class=true id="">
    <@macrolib.alert type=type class=class id=id><#nested /></@macrolib.alert>
</#macro>

<#macro resultMsg class=true id="">
    <@macrolib.resultMsg class=class id=id><#nested /></@macrolib.resultMsg>
</#macro>

<#macro errorMsg type="error" class=true id="">
    <@macrolib.errorMsg type=type class=class id=id><#nested /></@macrolib.errorMsg>
</#macro>

<#macro panel type="" title="">
    <@macrolib.panel type=type title=title><#nested /></@macrolib.panel>
</#macro>

<#macro pul title="">
    <@macrolib.pul title=title><#nested /></@macrolib.pul>
</#macro>

<#macro pli type="">
    <@macrolib.pli type=type><#nested /></@macrolib.pli>
</#macro>

<#macro grid type="" class=true columns=4>
    <@macrolib.grid type=type class=class columns=columns><#nested /></@macrolib.grid>
</#macro>

<#macro nav type="inline">
    <@macrolib.nav type=type><#nested /></@macrolib.nav>
</#macro>

<#macro mli arrival="">
    <@macrolib.mli arrival=arrival><#nested /></@macrolib.mli>
</#macro>

<#function mtarget id>
  <#return macrolib.mtarget(id)>
</#function>

<#function makeMagTargetAttribMap id>
  <#return macrolib.makeMagTargetAttribMap(id)>
</#function>

<#macro code type="html">
    <@macrolib.code type=type><#nested /></@macrolib.code>
</#macro>

<#macro table type="generic" class=true id="" cellspacing=true scrollable=false autoAltRows="" firstRowAlt="" inheritAltRows=false useFootAltRows=false wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.table type=type class=class id=id cellspacing=cellspacing scrollable=scrollable scrollable=scrollable firstRowAlt=firstRowAlt 
        inheritAltRows=inheritAltRows useFootAltRows=useFootAltRows wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.table>
</#macro>

<#macro thead class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.thead class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.thead>
</#macro>

<#macro tbody class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.tbody class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.tbody>
</#macro>

<#macro tfoot class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.tfoot class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.tfoot>
</#macro>

<#macro tr type="" class=true id="" useAlt="" alt="" groupLast="" groupParent="" selected="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.tr type=type class=class id=id useAlt=useAlt alt=alt groupLast=groupLast groupParent=groupParent selected=selected wrapIf=wrapIf openOnly=openOnly 
        closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.tr>
</#macro>

<#macro th class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.th class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.th>
</#macro>

<#macro td class=true id="" wrapIf=true openOnly=false closeOnly=false attribs={} inlineAttribs...>
    <@macrolib.td class=class id=id wrapIf=wrapIf openOnly=openOnly closeOnly=closeOnly attribs=concatMaps(attribs, inlineAttribs)><#nested /></@macrolib.td>
</#macro>

<#macro dataRowClassStr class=true alt="" selected="">
    <@macrolib.dataRowClassStr class=class alt=alt selected=selected><#nested /></@macrolib.dataRowClassStr>
</#macro>

<#macro tile type="normal" title="" class=true id="" link="" color=0 icon="" image="">
    <@macrolib.tile type=type title=title class=class id=id link=link color=color icon=icon image=image><#nested /></@macrolib.tile>
</#macro>

<#function calcTileSize type="x" value="normal">
    <#return macrolib.calcTileSize(type,value)>
</#function>

<#macro chart type="pie" library="foundation" title="">
    <@macrolib.chart type=type library=library title=title><#nested /></@macrolib.chart>
</#macro>

<#macro chartdata title value value2="">
    <@macrolib.chartdata title=title value=value value2=value2><#nested /></@macrolib.chartdata>
</#macro>

<#macro progress value=0 id="" type="" class=true showValue=false wrapperClass=true progressOptions={}>
    <@macrolib.progress value=value id=id type=type class=class showValue=showValue wrapperClass=wrapperClass progressOptions=progressOptions><#nested /></@macrolib.progress>
</#macro>

<#macro progressScript options={} htmlwrap=false>
    <@macrolib.progressScript options=options htmlwrap=htmlwrap><#nested /></@macrolib.progressScript>
</#macro>

<#macro menu args={} inlineArgs...>
    <@macrolib.menu args=concatMaps(args, inlineArgs)><#nested /></@macrolib.menu>
</#macro>

<#macro menuitem args={} inlineArgs...>
    <@macrolib.menuitem args=concatMaps(args, inlineArgs)><#nested /></@macrolib.menuitem>
</#macro>

<#macro printVars var=context>
    <@macrolib.printVars var=var><#nested /></@macrolib.printVars>
</#macro>

<#macro printVar key value="">
    <@macrolib.printVar key=key value=value><#nested /></@macrolib.printVar>
</#macro>


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
   
   <@macrolib.field type=type label=label labelDetail=labelDetail name=name value=value valueType=valueType currentValue=currentValue defaultValue=defaultValue class=class size=size maxlength=maxlength id=id onClick=onClick 
        disabled=disabled placeholder=placeholder autoCompleteUrl=autoCompleteUrl mask=mask alert=alert readonly=readonly rows=rows 
        cols=cols dateType=dateType multiple=multiple checked=checked collapse=collapse tooltip=tooltip columns=columns norows=norows nocells=nocells nocontainer=nocontainer
        fieldFormName=fieldFormName formName=formName formId=formId postfix=postfix postfixSize=postfixSize required=required items=items autocomplete=autocomplete progressOptions=progressOptions 
        labelType=labelType labelLayout=labelLayout labelArea=labelArea description=description
        submitType=submitType text=text href=href src=src confirmMsg=confirmMsg><#nested /></@macrolib.field>         
</#macro>