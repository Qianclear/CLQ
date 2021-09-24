(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{388:function(e,t,s){"use strict";s.r(t);var a=s(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"一、什么是servlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是servlet"}},[e._v("#")]),e._v(" 一、什么是servlet？")]),e._v(" "),s("p",[e._v("servelt就是一个特殊的java类，用来相应客户端的请求。它必须继承HttpServlet类，客户端请求基本分为两种，通过实现doGet()和doPost()方法来完成相应。")]),e._v(" "),s("h2",{attrs:{id:"二、servlet的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、servlet的配置"}},[e._v("#")]),e._v(" 二、Servlet的配置")]),e._v(" "),s("p",[e._v("在web.xml中配置servlet，根据我的观察，它是这样配置的")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<servlet>\n    <servlet-name>'class名'</servlet-name>\n    <servlet-class>'所在包名.class名'</servlet-class>\n</servlet>\n    \x3c!-- 给servlet提供(映射)一个可供客户端访问的URI --\x3e\n<servlet-mapping>\n    <servlet-name>'同上上'</servlet-name>\n    <url-pattern>/demo1'算是一个代号吧'</url-pattern>\n</servlet-mapping>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("这好像算是一个映射，然后，通配符*代表任意字符串，")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("url-pattern:*.do        以*.字符的请求都可以访问\nurl-pattern:/*          任意字符串都可以访问\nurl-pattern:  /action/* 以/action开头的请求都可以访问\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("优先级：从高到低")]),e._v(" "),s("p",[e._v("​\t\t\t\t绝对匹配  >  /开头匹配  >  扩展名方式匹配")]),e._v(" "),s("h2",{attrs:{id:"三、tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、tomcat"}},[e._v("#")]),e._v(" 三、tomcat...")]),e._v(" "),s("p",[e._v("http://tomcat.apache.org/ 下载地址在这里(这里好像是需要下载与servlet对应的版本)")]),e._v(" "),s("p",[e._v("下载完之后，cd进入tomcat对应的bin文件夹，然后用"),s("code",[e._v("startup.bat")]),e._v(" 进行下载")]),e._v(" "),s("blockquote",[s("p",[e._v("cmd中选中加回车即复制")])]),e._v(" "),s("blockquote",[s("p",[e._v("ps：产生的命令行窗口，可以点褐色区域暂停执行，点右键回复执行")])]),e._v(" "),s("blockquote",[s("p",[e._v("如果发现是出现了乱码，可以再conf文件夹下将"),s("strong",[e._v("logging.properties")]),e._v(" 文件中的UTF-8,全部改为GBK，")]),e._v(" "),s("p",[e._v("或者用**#** 注释掉(打开方式为sublime或者vscode)")]),e._v(" "),s("p",[e._v("或者是复制文件，添加后缀.bak然后修改，这样防止改炸了")])]),e._v(" "),s("p",[e._v("如果在启动时失败，发现tomcat的logs文件夹中的catalina.log文件(启动日志)说xxx初始化失败，百度后发现tomcat默认端口是8080，得到结论：8080端口被别的应用占用")]),e._v(" "),s("p",[s("strong",[e._v("然后：")]),e._v(" 在cmd中使用"),s("code",[e._v('netstat -aon | findstr "端口"')]),e._v(" 来查看占用端口的应用所对应的PID(任务管理器中可以查看)，这样可以查看应用")]),e._v(" "),s("p",[e._v("接着，可以在conf文件夹下打开server.xml来更改启动的默认端口")]),e._v(" "),s("h2",{attrs:{id:"另一个问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#另一个问题"}},[e._v("#")]),e._v(" 另一个问题")]),e._v(" "),s("p",[e._v("eclipse中没有找到 Dynamic Web Project 该如何解决")]),e._v(" "),s("p",[e._v("Help -> Install New Software 再根据eclipse版本选择对应网站，接着选择 Web, XML, Java EE and OSGi Enterprise Development 这个，下载完之后再重启即可")]),e._v(" "),s("h2",{attrs:{id:"四-eclipse配置tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-eclipse配置tomcat"}},[e._v("#")]),e._v(" 四：eclipse配置tomcat")]),e._v(" "),s("p",[e._v("点击window----preferences----Server目录下找到Runtime Enviroment----单击add----找到对应tomcat版本----next----browse到tomcat对应的文件夹下----finish即可")]),e._v(" "),s("blockquote",[s("p",[e._v("右击project，点击Build Path----Configure Build Path...然后就可以添加libraries（jar包）了")])]),e._v(" "),s("h2",{attrs:{id:"五、servlet的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、servlet的生命周期"}},[e._v("#")]),e._v(" 五、servlet的生命周期")]),e._v(" "),s("p",[e._v("（1）客户端第一次请求时创建servlet实例。（也可能是在web应用程序启动时创建。通过配置load-on-startup实现）。")]),e._v(" "),s("p",[e._v("（2）web容器调用servlet的init()方法，对servlet进行初始化。")]),e._v(" "),s("p",[e._v("（3）通过doGet()或doPost()方法响应客户端请求。")]),e._v(" "),s("p",[e._v("（4）web容器通过调用destory()方法销毁servlet.")]),e._v(" "),s("h3",{attrs:{id:"init-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-方法"}},[e._v("#")]),e._v(" init() 方法")]),e._v(" "),s("p",[e._v("只调用一次，用于一次性初始化")]),e._v(" "),s("p",[e._v("init 方法的定义如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public void init() throws ServletException {\n  // 初始化代码...\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"service-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-方法"}},[e._v("#")]),e._v(" service() 方法")]),e._v(" "),s("p",[e._v("该方法的特征：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public void service(ServletRequest request,ServletResponse response) \n      throws ServletException, IOException{\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("感觉好像没啥")]),e._v(" "),s("h3",{attrs:{id:"doget-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doget-方法"}},[e._v("#")]),e._v(" doGet() 方法")]),e._v(" "),s("p",[e._v("GET 请求来自于一个 URL 的正常请求，或者来自于一个未指定 METHOD 的 HTML 表单，它由 doGet() 方法处理。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public void doGet(HttpServletRequest request,HttpServletResponse response)\n    throws ServletException, IOException {\n    // Servlet 代码\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"dopost-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dopost-方法"}},[e._v("#")]),e._v(" doPost() 方法")]),e._v(" "),s("p",[e._v("POST 请求来自于一个特别指定了 METHOD 为 POST 的 HTML 表单，它由 doPost() 方法处理。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public void doPost(HttpServletRequest request,\n                   HttpServletResponse response)\n    throws ServletException, IOException {\n    // Servlet 代码\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"destroy-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy-方法"}},[e._v("#")]),e._v(" destroy() 方法")]),e._v(" "),s("p",[e._v("destroy() 方法只会被调用一次，在 Servlet 生命周期结束时被调用。destroy() 方法可以让您的 Servlet 关闭数据库连接、停止后台线程、把 Cookie 列表或点击计数器写入到磁盘，并执行其他类似的清理活动。")]),e._v(" "),s("p",[e._v("在调用 destroy() 方法之后，servlet 对象被标记为垃圾回收。destroy 方法定义如下所示：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  public void destroy() {\n    // 终止化代码...\n  }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("blockquote",[s("p",[e._v("ps ,以上对于各种方法的解释均来自菜鸟教程，因为本人对其了解不深")])]),e._v(" "),s("h2",{attrs:{id:"六、额-网上看到的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、额-网上看到的"}},[e._v("#")]),e._v(" 六、额，网上看到的")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Accept")]),e._v(" "),s("th",[e._v("这个头信息指定浏览器或其他客户端可以处理的 MIME 类型。值 "),s("strong",[e._v("image/png")]),e._v(" 或 "),s("strong",[e._v("image/jpeg")]),e._v(" 是最常见的两种可能值。")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Accept-Charset")]),e._v(" "),s("td",[e._v("这个头信息指定浏览器可以用来显示信息的字符集。例如 ISO-8859-1。")])]),e._v(" "),s("tr",[s("td",[e._v("Accept-Encoding")]),e._v(" "),s("td",[e._v("这个头信息指定浏览器知道如何处理的编码类型。值 "),s("strong",[e._v("gzip")]),e._v(" 或 "),s("strong",[e._v("compress")]),e._v(" 是最常见的两种可能值。")])]),e._v(" "),s("tr",[s("td",[e._v("Accept-Language")]),e._v(" "),s("td",[e._v("这个头信息指定客户端的首选语言，在这种情况下，Servlet 会产生多种语言的结果。例如，en、en-us、ru 等。")])]),e._v(" "),s("tr",[s("td",[e._v("Authorization")]),e._v(" "),s("td",[e._v("这个头信息用于客户端在访问受密码保护的网页时识别自己的身份。")])]),e._v(" "),s("tr",[s("td",[e._v("Connection")]),e._v(" "),s("td",[e._v("这个头信息指示客户端是否可以处理持久 HTTP 连接。持久连接允许客户端或其他浏览器通过单个请求来检索多个文件。值 "),s("strong",[e._v("Keep-Alive")]),e._v(" 意味着使用了持续连接。")])]),e._v(" "),s("tr",[s("td",[e._v("Content-Length")]),e._v(" "),s("td",[e._v("这个头信息只适用于 POST 请求，并给出 POST 数据的大小（以字节为单位）。")])]),e._v(" "),s("tr",[s("td",[e._v("Cookie")]),e._v(" "),s("td",[e._v("这个头信息把之前发送到浏览器的 cookies 返回到服务器。")])]),e._v(" "),s("tr",[s("td",[e._v("Host")]),e._v(" "),s("td",[e._v("这个头信息指定原始的 URL 中的主机和端口。")])]),e._v(" "),s("tr",[s("td",[e._v("If-Modified-Since")]),e._v(" "),s("td",[e._v("这个头信息表示只有当页面在指定的日期后已更改时，客户端想要的页面。如果没有新的结果可以使用，服务器会发送一个 304 代码，表示 "),s("strong",[e._v("Not Modified")]),e._v(" 头信息。")])]),e._v(" "),s("tr",[s("td",[e._v("If-Unmodified-Since")]),e._v(" "),s("td",[e._v("这个头信息是 If-Modified-Since 的对立面，它指定只有当文档早于指定日期时，操作才会成功。")])]),e._v(" "),s("tr",[s("td",[e._v("Referer")]),e._v(" "),s("td",[e._v("这个头信息指示所指向的 Web 页的 URL。例如，如果您在网页 1，点击一个链接到网页 2，当浏览器请求网页 2 时，网页 1 的 URL 就会包含在 Referer 头信息中。")])]),e._v(" "),s("tr",[s("td",[e._v("User-Agent")]),e._v(" "),s("td",[e._v("这个头信息识别发出请求的浏览器或其他客户端，并可以向不同类型的浏览器返回不同的内容。")])])])]),e._v(" "),s("h2",{attrs:{id:"七、一些东西"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、一些东西"}},[e._v("#")]),e._v(" 七、一些东西")]),e._v(" "),s("p",[e._v("ServletConfig")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('String encoding = config.getInitParameter("encoding");//获得配置文件中的信息\nsyso(encoding);\n\nor\n\nString value = this.getServletConfig().getInitParameter("encoding");\nsyso(value);\n\nor\n\nString value = this.getInitParameter("encoding");\nsyso(value);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("ServletContext")]),e._v(" "),s("p",[e._v("代表的是整个应用，一个应用只有一个ServletContext对象。单实例。")]),e._v(" "),s("p",[e._v("String getRealPath(String path);//根据资源名称得到资源的绝对路径")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('String path = this.getServletContext().getRealPath("/adlaldjadak");\nsyso...\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("将请求向下传递（转发）")]),e._v(" "),s("p",[e._v("ServletContext application = this.getServletContext();")]),e._v(" "),s("p",[e._v('application.getRequestDispatcher("/servlet/demo3").forward(request,response);')])])}),[],!1,null,null,null);t.default=r.exports}}]);