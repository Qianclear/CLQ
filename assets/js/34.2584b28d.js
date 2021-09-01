(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{393:function(t,a,s){"use strict";s.r(a);var e=s(44),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("day_01")]),t._v(" "),s("h2",{attrs:{id:"jsp-动态网页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsp-动态网页"}},[t._v("#")]),t._v(" JSP:动态网页")]),t._v(" "),s("p",[t._v("静态、动态:")]),t._v(" "),s("p",[t._v("不用和是否有“动感”混为--谈")]),t._v(" "),s("p",[t._v("是否随着时间、地点、用户操作的改变而改变")]),t._v(" "),s("blockquote",[s("p",[t._v("动态网页需要使用到服务端脚本语言(jSP)")])]),t._v(" "),s("h2",{attrs:{id:"架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),s("p",[t._v("BS :Broswer Server")]),t._v(" "),s("p",[t._v("客户端可以通过浏览器 直接访问服务器")]),t._v(" "),s("p",[t._v("CS: Client Server")]),t._v(" "),s("p",[t._v("CS不足：")]),t._v(" "),s("ol",[s("li",[t._v("如果然健升级，那么全部软件都需要升级")]),t._v(" "),s("li",[t._v("维护麻烦：需要维护每一台客户端软件")]),t._v(" "),s("li",[t._v("每一台客户端，都需要安装客户端软件")])]),t._v(" "),s("h2",{attrs:{id:"tomcat解压后目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat解压后目录"}},[t._v("#")]),t._v(" tomcat解压后目录:")]),t._v(" "),s("p",[t._v("bin:可执行文件(startup. bat    shutdown. bat )\nconf:配置文件(server. xml)\nlib: tomcat依赖的jar文件\nlog:日志文件(记录出错等信息)\ntemp:临时文件\nwebapps: 可执行的项目(将我们开发的项目放入该目录)\nwork:存放由jsp翻译成的java,以及编辑成的class文件(jsp->java->class)")]),t._v(" "),s("h2",{attrs:{id:"配置tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置tomcat"}},[t._v("#")]),t._v(" 配置tomcat")]),t._v(" "),s("ul",[s("li",[t._v("配置jdk (必须配置JAVA_ HOME)\njava_ home classPath path")]),t._v(" "),s("li",[t._v("配置catalina_ home\n双击bin/startup. bat启动tomacat")]),t._v(" "),s("li",[t._v("常见错误: 可能与其他服务的端口号冲突\ntomcat端口号默认8080 (此端口号较为常见，容易冲突)，我修改此端口 (9090)")])]),t._v(" "),s("h2",{attrs:{id:"常见状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("200")]),t._v(" "),s("th",[t._v("一切正常")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("300/301")]),t._v(" "),s("td",[t._v("页面重定向 (跳转)")])]),t._v(" "),s("tr",[s("td",[t._v("404")]),t._v(" "),s("td",[t._v("资源不存在")])]),t._v(" "),s("tr",[s("td",[t._v("403")]),t._v(" "),s("td",[t._v("权限不足 (如果访问a目录，但是a目录设置不可见)")])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("服务器内部错误(代码有误)")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("jsp：在html中嵌套的java代码")]),t._v(" "),s("p",[t._v("<%")]),t._v(" "),s("p",[t._v(".....")]),t._v(" "),s("p",[t._v("%>")])]),t._v(" "),s("blockquote",[s("p",[t._v("在项目/WEB—INF/web.xml中设置默认的初始页面")]),t._v(" "),s("welcome-file-list",[s("p",[t._v("​    "),s("welcome-file",[t._v("index.jsp")])],1)])],1),t._v(" "),s("h2",{attrs:{id:"虚拟路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟路径"}},[t._v("#")]),t._v(" 虚拟路径")]),t._v(" "),s("p",[t._v("将web项目配置到webapps以外的目录")]),t._v(" "),s("p",[t._v("在conf文件夹里找到server.xml 文件，在文件的末尾吧，可以找到"),s("code",[t._v("<Host>.....</Host>")])]),t._v(" "),s("p",[t._v("在其中末尾处可以添加"),s("code",[t._v('<Context docBase="D:\\developTools\\IntelliJ_IDEA_2019.1.4\\apache-tomcat-9.0.37\\JspProject" path = "/JspProject" />')])]),t._v(" "),s("p",[t._v("docBase: 实际路径")]),t._v(" "),s("p",[t._v("path: 虚拟路径     （绝对路径[文件的确切位置嘛]，相对路径[相对于webapps]）")]),t._v(" "),s("p",[t._v("缺点：需要重启")]),t._v(" "),s("p",[t._v("方式二：")]),t._v(" "),s("p",[t._v("在conf里的Catalina文件夹里localhost里新建立一个xml文件，名为“项目名.xml”，")]),t._v(" "),s("blockquote",[s("p",[t._v("当然，如果项目名改为ROOT，那么它就是默认的项目了")])]),t._v(" "),s("h2",{attrs:{id:"虚拟主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机"}},[t._v("#")]),t._v(" 虚拟主机")]),t._v(" "),s("p",[t._v("这个没弄，大概意思是当你要访问一个网站时，电脑会先查询本机设置的域名ip并访问，如果没有的话，才去互联网查询访问")]),t._v(" "),s("h2",{attrs:{id:"jsp执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsp执行流程"}},[t._v("#")]),t._v(" JSP执行流程")]),t._v(" "),s("p",[t._v("jsp->java(Servlet文件) ->class")]),t._v(" "),s("p",[t._v("jsp 和servlet可以相互转换")]),t._v(" "),s("blockquote",[s("p",[t._v("因为第一次请求服务端会有翻译和编译的过程，所以比较慢，但是如果服务端修改了代码，则再次访问时会重新的翻译、编译。")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果出现了这个问题"),s("code",[t._v('The superclass "javax.servlet.http.HttpServlet" was not found on the Java Build Path')]),t._v(" 说明是Javaweb工程下没有引入对应的library")]),t._v(" "),s("p",[t._v("则 Window->Preferences->Server->RuntimeEnvironments->Add->选择Apache的版本后点Next，再填入安装的Apache Tomcat软件的安装目录")]),t._v(" "),s("p",[t._v("然后右击web工程->Build Path->Configure buildpath->Java Build Path ->Libraries->Add Library->ServerRuntime->Next->Apache Tomcat Server->Finish->Apply and close")])]),t._v(" "),s("h2",{attrs:{id:"杂项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杂项"}},[t._v("#")]),t._v(" 杂项")]),t._v(" "),s("blockquote",[s("p",[t._v("WEB-INF中的文件无法通过客户端（浏览器）直接访问，只能通过请求转发来访问，但并不是所有的内部跳转都能访问WEB-INF；因为跳转有2种方式：请求转发 、重定向")])]),t._v(" "),s("p",[s("strong",[t._v("小发现：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<body>\n\t\n\thello index1!!....      jgh\n\twulawulawula\n\n</body>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("以上代码片段的结论为："),s("code",[t._v("hello index1!!.... jgh\twulawulawula")])]),t._v(" "),s("p",[t._v("嗯？？！！不对呀，电脑上显示的不是这样啊")]),t._v(" "),s("p",[t._v("是这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5C17990%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1598097820424.png",alt:"1598097820424"}})]),t._v(" "),s("p",[t._v("其实我本来先说编译器可能会选择性的忽略空格，现在看来，它可能没有忽略，只是显示的原因所以看不出空格的存在，而且可能在编译的时候，将换行替换为了"),s("code",[t._v("tab")])]),t._v(" "),s("h2",{attrs:{id:"部署tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署tomcat"}},[t._v("#")]),t._v(" 部署tomcat")]),t._v(" "),s("p",[t._v("在servers面板 新建一个 tomcat实例 ，  再在该实例中 部署项目（右键-add）\n之后运行")]),t._v(" "),s("p",[t._v("注意：一般建议 将eclipse中的tomcat与 本地tomcat的配置信息保持一致： 将eclipse中的tomcat设为托管模式：【第一次】创建tomcat实例之后， 双击，选择Server Location的第二项")]),t._v(" "),s("p",[t._v("然而，我的第二项点不了，应该说三项都是点不了的灰色状态，可能因为这不是第一次创建吧")]),t._v(" "),s("h2",{attrs:{id:"jsp的页面元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsp的页面元素"}},[t._v("#")]),t._v(" JSP的页面元素")]),t._v(" "),s("p",[t._v("HTML  java代码（脚本Scriptlet）、指令、注释")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("脚本Scriptlet")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%\n\t\t局部变量、java语句\n%>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%!\n\t\t全局变量、定义方法\n%>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%=输出表达式 %>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("p",[t._v("一般而言，修改web.xml、配置文件、java  需要重启tomcat服务\n但是如果修改 Jsp\\html\\css\\js ，不需要重启")]),t._v(" "),s("p",[t._v("注意，out.println()不能回车； 要想回车：“"),s("br"),t._v("”，即out.print() <%= %> 可以直接解析html代码")]),t._v(" "),s("p",[t._v("b.指令\npage指令")])])}),[],!1,null,null,null);a.default=v.exports}}]);