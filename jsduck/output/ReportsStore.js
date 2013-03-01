Ext.data.JsonP.ReportsStore({"meta":{},"html_meta":{},"subclasses":[],"tagname":"class","requires":[],"enum":null,"superclasses":[],"members":{"method":[{"meta":{},"tagname":"method","owner":"ReportsStore","name":"listApps","id":"method-listApps"},{"meta":{},"tagname":"method","owner":"ReportsStore","name":"reportsPerDay","id":"method-reportsPerDay"},{"meta":{},"tagname":"method","owner":"ReportsStore","name":"setApp","id":"method-setApp"}],"property":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/acra-storage.html#ReportsStore' target='_blank'>acra-storage.js</a></div></pre><div class='doc-contents'><p>@namespace</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-listApps' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReportsStore'>ReportsStore</span><br/><a href='source/acra-storage.html#ReportsStore-method-listApps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ReportsStore-method-listApps' class='name expandable'>listApps</a>( <span class='pre'>cb, errorHandler</span> )</div><div class='description'><div class='short'>Gets the list of available apps for which we have crash reports databases. ...</div><div class='long'><p>Gets the list of available apps for which we have crash reports databases.\nLooks for all CouchDB databases starting with</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Object<div class='sub-desc'><p>: callback which will receive an array of strings (app names) as a parameter.</p>\n</div></li><li><span class='pre'>errorHandler</span> : Object<div class='sub-desc'><p>: callback to be triggered if an error occurs.</p>\n</div></li></ul></div></div></div><div id='method-reportsPerDay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReportsStore'>ReportsStore</span><br/><a href='source/acra-storage.html#ReportsStore-method-reportsPerDay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ReportsStore-method-reportsPerDay' class='name expandable'>reportsPerDay</a>( <span class='pre'>grouplvl, cb, errorHandler</span> ) : Object</div><div class='description'><div class='short'>Gets the number of reports per unit of time. ...</div><div class='long'><p>Gets the number of reports per unit of time.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grouplvl</span> : Object<div class='sub-desc'><p>Grouping level: Year = 1, Month = 2, Day = 3, Hour = 4, Minute = 5, Second = 6.</p>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'><p>Callback which receives the results.</p>\n</div></li><li><span class='pre'>errorHandler</span> : Object<div class='sub-desc'><p>Called in case of error while retreiving data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Key: date/time, Value: quantity</p>\n</div></li></ul></div></div></div><div id='method-setApp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReportsStore'>ReportsStore</span><br/><a href='source/acra-storage.html#ReportsStore-method-setApp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ReportsStore-method-setApp' class='name expandable'>setApp</a>( <span class='pre'>newAppName, cb</span> )</div><div class='description'><div class='short'>Switch to another app, i.e. ...</div><div class='long'><p>Switch to another app, i.e. reports storage database.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newAppName</span> : Object<div class='sub-desc'><p>The app name. The database name is determined by adding prefix set in\nacralyzerConfig.appDBPrefix</p>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'><p>callback to be executed after database changed.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"inheritable":null,"linenr":25,"singleton":false,"override":null,"mixedInto":[],"statics":{"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[]},"mixins":[],"private":null,"parentMixins":[],"files":[{"href":"acra-storage.html#ReportsStore","filename":"acra-storage.js"}],"name":"ReportsStore","alternateClassNames":[],"id":"class-ReportsStore","inheritdoc":null,"extends":null,"aliases":{},"uses":[]});