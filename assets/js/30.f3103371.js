(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{384:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"maven是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven是什么"}},[t._v("#")]),t._v(" Maven是什么")]),t._v(" "),s("p",[t._v("Maven是一款服务于java平台的自动化构建工具")]),t._v(" "),s("h2",{attrs:{id:"_1-构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建"}},[t._v("#")]),t._v(" 1. 构建")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('概念：以"Java源文件"、"框架配置文件"、"JSP"、"HTML"、"图片"等资源为"原材料" ，去生产一个可以运行的项目的过程')]),t._v(" "),s("blockquote",[s("p",[t._v('个人感觉类似于vuepress的一个build过程，像"打包"一样')])]),t._v(" "),s("blockquote",[s("p",[t._v("新发现，java的project里面有一个build文件夹，里面正是编译得到的字节码文件")])]),t._v(" "),s("ul",[s("li",[t._v("编译 + 部署 + 搭建")])])]),t._v(" "),s("li",[s("p",[t._v("编译：源文件—> 编译 —> class字节码文件—>交给JVM去执行")])]),t._v(" "),s("li",[s("p",[t._v('部署：一个BS项目最终运行的并不是动态web工程本身，而是这个web工程"编译的结果"')]),t._v(" "),s("blockquote",[s("p",[t._v("生的鸡——> 处理——> 熟的鸡")]),t._v(" "),s("p",[t._v("动态web工程——> 编译、部署——> 编译结果")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-构建中的环节-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建中的环节-了解"}},[t._v("#")]),t._v(" 2. 构建中的环节(了解)")]),t._v(" "),s("ol",[s("li",[t._v("清理：将以前编译得到的旧的class字节码文件删除，为下一次编译做准备")]),t._v(" "),s("li",[t._v("编译：将java源程序编程成class字节码文件")]),t._v(" "),s("li",[t._v("测试：自动测试，自动焦勇Junit程序")]),t._v(" "),s("li",[t._v("报告：测试程序执行结果")]),t._v(" "),s("li",[t._v("打包：动态web工程打包成war包，java工程打jar包")]),t._v(" "),s("li",[t._v('安装：Maven特定概念——将打包得到的文件复制到"仓库"中的指定位置')]),t._v(" "),s("li",[t._v("部署：将动态web工程生成的war包复制到Servlet容器的指定目录下，使其可以运行")])]),t._v(" "),s("h1",{attrs:{id:"安装maven核心程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装maven核心程序"}},[t._v("#")]),t._v(" 安装Maven核心程序")]),t._v(" "),s("h2",{attrs:{id:"_1-检查java-home环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查java-home环境变量"}},[t._v("#")]),t._v(" 1. 检查"),s("strong",[t._v("JAVA_HOME")]),t._v("环境变量")]),t._v(" "),s("blockquote",[s("p",[t._v("可以用命令行，输入")]),t._v(" "),s("p",[t._v("echo %JAVA_HOME%")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/CLQ/img/java.%E5%85%B6%E4%BB%96/1628067657787.png",alt:"1628067657787"}})]),t._v(" "),s("h2",{attrs:{id:"_2-解压maven核心程序的压缩包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压maven核心程序的压缩包"}},[t._v("#")]),t._v(" 2. 解压Maven核心程序的压缩包")]),t._v(" "),s("p",[t._v("放在"),s("strong",[t._v("非中文无空格")]),t._v("目录下")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/CLQ/img/java/1628068139989.png",alt:"1628068139989"}}),t._v(" "),s("h2",{attrs:{id:"_3-配置maven环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置maven环境变量"}},[t._v("#")]),t._v(" 3. 配置Maven环境变量")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("MAVEN_HOME或M2_HOME")]),t._v(" "),s("blockquote",[s("p",[t._v("以普遍性而言，用这俩哪一个都行")]),t._v(" "),s("p",[t._v("但是据说，用M2_HOME可以避免一些犄角旮旯的错误....")])]),t._v(" "),s("p",[t._v("M2_HOME")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"/CLQ/img/java/1628069858282.png",alt:"1628069858282"}}),t._v(" "),s("p",[t._v("PATH")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"/CLQ/img/java/1628069746351.png",alt:"1628069746351"}})])]),t._v(" "),s("h2",{attrs:{id:"_4-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证"}},[t._v("#")]),t._v(" 4. 验证")]),t._v(" "),s("p",[t._v("运行mvn -v查看Maven版本")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/CLQ/img/java/1628070041293.png",alt:"1628070041293"}}),t._v(" "),s("h2",{attrs:{id:"_5-maven的核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-maven的核心概念"}},[t._v("#")]),t._v(" 5. Maven的核心概念")]),t._v(" "),s("ol",[s("li",[t._v("约定的目录结构")]),t._v(" "),s("li",[t._v("POM")]),t._v(" "),s("li",[t._v("坐标")]),t._v(" "),s("li",[t._v("依赖")]),t._v(" "),s("li",[t._v("仓库")]),t._v(" "),s("li",[t._v("生命周期/插件/目标")]),t._v(" "),s("li",[t._v("继承")]),t._v(" "),s("li",[t._v("聚合")])]),t._v(" "),s("h1",{attrs:{id:"第一个maven工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个maven工程"}},[t._v("#")]),t._v(" 第一个Maven工程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建约定的目录结构")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Hello\n|---src\n|---|---main\n|---|---|---java\n|---|---|---resources\n|---|---test\n|---|---|---java\n|---|---|---resources\n|---pom.xml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[t._v("根目录：工程名")]),t._v(" "),s("li",[t._v("src目录：源码")]),t._v(" "),s("li",[t._v("pom.xml文件：maven工程的核心配置文件")]),t._v(" "),s("li",[t._v("main目录：存放主程序")]),t._v(" "),s("li",[t._v("test目录：存放测试程序")]),t._v(" "),s("li",[t._v("java目录：存放java文件")]),t._v(" "),s("li",[t._v("resources目录：存放框架he欧哲其他工具的配置文件")])])]),t._v(" "),s("li",[s("p",[t._v("如果想让自定义东西让框架或者工具知道，2种方法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("以配置的方法明确告诉框架")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("classpath:spring-context.xml"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("遵守框架内部已经存在的约定")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("log4j.properties    //帮助控制台打印日志，之后会接触，必须有\nlog4j.xml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("编码界共识：约定 > 配置 > 编码")])])])]),t._v(" "),s("li",[s("p",[t._v("pom.xml内容")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" ?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.0.1-SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个是坐标，唯一标识--\x3e")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个是工程名--\x3e")]),t._v("\n\t  \n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个是依赖的其他jar包--\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("blockquote",[s("p",[t._v("注：xml文件仅仅可以使用html的注释，即")])])]),t._v(" "),s("li",[s("p",[t._v("在src/main/java/maven(pom.xml文件中的"),s("groupID",[t._v("maven")]),t._v(")目录下新建Hello.java文件")],1),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("maven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("在src/test/java/maven目录下新建HelloTest.java文件")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("maven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("junit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//静态引入，可以调用所有的静态资源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" results "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"litingwei"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello litingwei!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//asser意为断言，函数意思为断言相等，返回值取决于是否相等")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"常用maven命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用maven命令"}},[t._v("#")]),t._v(" 常用Maven命令")]),t._v(" "),s("blockquote",[s("p",[t._v("注：执行与构建相关的Maven命令，必须进入pom.xml所在的目录")]),t._v(" "),s("p",[t._v("与构建相关：编译、测试、打包......")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("指令")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mvn clean")]),t._v(" "),s("td",[t._v("清理")])]),t._v(" "),s("tr",[s("td",[t._v("mvn compile")]),t._v(" "),s("td",[t._v("编译主程序")])]),t._v(" "),s("tr",[s("td",[t._v("mvn test-compile")]),t._v(" "),s("td",[t._v("编译测试程序")])]),t._v(" "),s("tr",[s("td",[t._v("mvn test")]),t._v(" "),s("td",[t._v("执行测试")])]),t._v(" "),s("tr",[s("td",[t._v("mvn package")]),t._v(" "),s("td",[t._v("打包")])]),t._v(" "),s("tr",[s("td",[t._v("mvn install")]),t._v(" "),s("td",[t._v("安装")])]),t._v(" "),s("tr",[s("td",[t._v("mvn site")]),t._v(" "),s("td",[t._v("生成站点")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("注：执行mvn compile时可能会失败")]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:"/CLQ/img/java/1628148586492.png",alt:"1628148586492"}}),t._v(" "),s("p",[t._v("去官网看看")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/CLQ/img/java/1628149130899.png",alt:"1628149130899"}}),t._v(" "),s("p",[t._v("看网上说是Maven和java的版本不匹配导致的，所以直接下载最新版的然后重新配置一下")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"/CLQ/img/java/1628237272078.png",alt:"1628237272078"}}),t._v(" "),s("p",[t._v("很好，经过尝试，成功了")]),t._v(" "),s("p",[t._v("此时，")])]),t._v(" "),s("h2",{attrs:{id:"注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注"}},[t._v("#")]),t._v(" 注：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Maven核心程序仅仅定义了抽象的生命周期，但具体工作必须由特点定插件完成，而插件本身并不在Maven核心程序中")])]),t._v(" "),s("li",[s("p",[t._v("当需要用到插件时，会到先本地仓库(默认：C:\\Users\\[用户名]\\.m2\\repository)中进行查找")]),t._v(" "),s("blockquote",[s("p",[t._v("修改默认仓库：")]),t._v(" "),s("ul",[s("li",[t._v("Maven解压目录\\conf\\settings.xml")]),t._v(" "),s("li",[t._v("找到localRepository标签，并将里面的"),s("localRepository",[t._v("/path/to/local/repo")]),t._v("取出，并修改标签内容为已准备好的仓库")],1)]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/CLQ/img/java/1628239038197.png",alt:"1628239038197"}})])]),t._v(" "),s("li",[s("p",[t._v("当未查找到时，会自动连接外网，到中央仓库下载。")])])]),t._v(" "),s("h2",{attrs:{id:"pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[t._v("#")]),t._v(" POM")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Project Object Model")]),t._v(" 项目对象模型")]),t._v(" "),s("p",[t._v("DOM "),s("strong",[t._v("Document Object Model")]),t._v(" 文档对象模型")])]),t._v(" "),s("li",[s("p",[t._v("pom.xml对于maven工程是核心配置文件，可在文件中进行构建过程中的一切配置")]),t._v(" "),s("p",[t._v("重要程度相当于web.xml对于动态web工程")])])]),t._v(" "),s("h2",{attrs:{id:"坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#坐标"}},[t._v("#")]),t._v(" 坐标")]),t._v(" "),s("p",[t._v("用三个向量在仓库中定位一个Maven工程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("groupid：公司或组织域名的倒序 + 项目名")]),t._v(" "),s("blockquote",[s("p",[s("groupid",[t._v("com.cqq.maven")])],1)])]),t._v(" "),s("li",[s("p",[t._v("artifactid：模块名")]),t._v(" "),s("blockquote",[s("p",[s("artifactid",[t._v("Hello")])],1)])]),t._v(" "),s("li",[s("p",[t._v("version：版本号")]),t._v(" "),s("blockquote",[s("p",[s("version",[t._v("1.2.3")])],1)])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  <groupId>org.springframework</groupId>\n  <artifactId>spring-core</artifactId>\n  <version>4.1.1.RELEASE</version>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("org/springframework/spring-core/4.1.1.RELEASE/spring-core-4.1.1.RELEASE.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[t._v("#")]),t._v(" 仓库")]),t._v(" "),s("p",[t._v("分类：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("本地仓库：当前电脑上部署的仓库目录，为当前电脑上所有的Maven工程服务")])]),t._v(" "),s("li",[s("p",[t._v("远程仓库")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("私服：搭建在局域网环境，服务局域网范围内的Maven工程")])]),t._v(" "),s("li",[s("p",[t._v("中央仓库：搭建在Internet上，服务全世界所有的Maven工程")])]),t._v(" "),s("li",[s("p",[t._v("中央仓库镜像：用于分档中央仓库流量，提升用户访问速度")]),t._v(" "),s("blockquote",[s("p",[t._v("感觉像github的镜像，我记得是：https://hub.fastgit.org/")])])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("仓库中保存的是Maven工程，包括Maven自身所需要的插件，第三方框架或工具的jar包以及自己开发的Maven工程")])]),t._v(" "),s("h2",{attrs:{id:"依赖-初级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖-初级"}},[t._v("#")]),t._v(" 依赖[初级]")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Maven解析依赖信息时会到本地仓库中查找被依赖的jar包")]),t._v(" "),s("p",[t._v("我们自己开发的Maven工程，使用mvn install命令安装后就可以进入仓库")]),t._v(" "),s("img",{staticStyle:{zoom:"75%"},attrs:{src:"/CLQ/img/java/1629339042921.png",alt:"1629339042921"}})]),t._v(" "),s("li",[s("p",[t._v("依赖范围")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围依赖")]),t._v(" "),s("th",[t._v("compile")]),t._v(" "),s("th",[t._v("test")]),t._v(" "),s("th",[t._v("provide")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("对主程序是否有效")]),t._v(" "),s("td",[t._v("有效")]),t._v(" "),s("td",[t._v("无效")]),t._v(" "),s("td",[t._v("有效")])]),t._v(" "),s("tr",[s("td",[t._v("对测试程序是否有效")]),t._v(" "),s("td",[t._v("有效")]),t._v(" "),s("td",[t._v("有效")]),t._v(" "),s("td",[t._v("有效")])]),t._v(" "),s("tr",[s("td",[t._v("是否参与打包")]),t._v(" "),s("td",[t._v("参与")]),t._v(" "),s("td",[t._v("不参与")]),t._v(" "),s("td",[t._v("不参与")])]),t._v(" "),s("tr",[s("td",[t._v("是否参与部署")]),t._v(" "),s("td",[t._v("参与")]),t._v(" "),s("td",[t._v("不参与")]),t._v(" "),s("td",[t._v("不参与")])]),t._v(" "),s("tr",[s("td",[t._v("典型例子")]),t._v(" "),s("td",[t._v("spring-core")]),t._v(" "),s("td",[t._v("Junit")]),t._v(" "),s("td",[t._v("servlet-api.jar")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);