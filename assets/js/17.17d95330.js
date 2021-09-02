(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(v,_,t){"use strict";t.r(_);var a=t(44),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"day-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day-10"}},[v._v("#")]),v._v(" day_10")]),v._v(" "),t("h2",{attrs:{id:"封装与隐藏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封装与隐藏"}},[v._v("#")]),v._v(" 封装与隐藏")]),v._v(" "),t("p",[v._v("体现：")]),v._v(" "),t("p",[v._v("我们将类的属性xxx私有化(private),同时，提供公共的(public)方法来获取(getXxx)和设置(setXxx)此属性的值")]),v._v(" "),t("p",[v._v("拓展：封装性的体现：① 如上  ② 不对外暴露的私有的方法  ③ 单例模式   ...")]),v._v(" "),t("p",[v._v("三、封装性的体现，需要权限修饰符来配合。")]),v._v(" "),t("p",[v._v("1.Java规定的4种权限（从小到大排列）：private、缺省、protected 、public")]),v._v(" "),t("p",[v._v("2.4种权限可以用来修饰类及类的内部结构：属性、方法、构造器、内部类")]),v._v(" "),t("p",[v._v("3.具体的，4种权限都可以用来修饰类的内部结构：属性、方法、构造器、内部类")]),v._v(" "),t("p",[v._v("修饰类的话，只能使用：缺省、public")]),v._v(" "),t("p",[v._v("总结封装性：Java提供了4种权限修饰符来修饰类及类的内部结构，体现类及类的内部结构在被调用时的可见性的大小。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("修饰符")]),v._v(" "),t("th",[v._v("类内部")]),v._v(" "),t("th",[v._v("同一个包")]),v._v(" "),t("th",[v._v("不同包的子类")]),v._v(" "),t("th",[v._v("同一个工程")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("private")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("(缺省)default")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("protected")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("public")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")])])])]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('throw new RuntimeException("传入的数据非法！");\nSystem.out.println("传入的数据非法！");\n//看视频说这两行代码输出一样\n//后来搜了一下，说第一个意思是抛出异常...\n')])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br")])]),t("h2",{attrs:{id:"类的成员-构造器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的成员-构造器"}},[v._v("#")]),v._v(" 类的成员—构造器")]),v._v(" "),t("blockquote",[t("p",[v._v("constructor    也称构造方法（有点怀疑是不是跟C++的构造函数很像）")])]),v._v(" "),t("p",[v._v("一、构造器的作用：")]),v._v(" "),t("p",[v._v("1.创建对象")]),v._v(" "),t("p",[v._v("2.初始化对象的信息")]),v._v(" "),t("p",[v._v("二、说明：")]),v._v(" "),t("p",[v._v("1.如果没有显式的定义类的构造器的话，则系统默认提供一个空参的构造器")]),v._v(" "),t("p",[v._v("2.定义构造器的格式：权限修饰符  类名(形参列表){}")]),v._v(" "),t("p",[v._v("3.一个类中定义的多个构造器，彼此构成重载")]),v._v(" "),t("p",[v._v("4.一旦我们显式的定义了类的构造器之后，系统就不再提供默认的空参构造器")]),v._v(" "),t("p",[v._v("5.一个类中，至少会有一个构造器。")]),v._v(" "),t("h2",{attrs:{id:"this-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-关键字"}},[v._v("#")]),v._v(" this 关键字")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("this可以用来修饰、调用：属性、方法、构造器")])]),v._v(" "),t("li",[t("p",[v._v("this修饰属性和方法：")]),v._v(" "),t("p",[v._v("this理解为："),t("strong",[v._v("当前对象")]),v._v("  或 "),t("strong",[v._v("当前正在创建的对象")])])]),v._v(" "),t("li",[t("p",[v._v('在类的方法中，我们可以使用"'),t("strong",[v._v("this.属性")]),v._v('"或"'),t("strong",[v._v("this.方法")]),v._v('"的方式，调用当前对象属性或方法。但是，通常情况下，我们都选择'),t("strong",[v._v("省略")]),v._v('"this."。特殊情况下，如果方法的形参和类的属性同名时，我们必须显式的使用"this.变量"的方式，表明此变量是属性，而非形参。')])]),v._v(" "),t("li",[t("p",[v._v("在"),t("strong",[v._v("类的构造器")]),v._v('中，我们可以使用"this.属性"或"this.方法"的方式，调用当前正在创建的对象属性或方法。但是，通常情况下，我们都选择省略"this."。特殊情况下，如果构造器的形参和类的属性同名时，我们必须显式的使用"this.变量"的方式，表明此变量是属性，而非形参。')])]),v._v(" "),t("li",[t("p",[v._v("this调用构造器")]),v._v(" "),t("p",[v._v('① 我们在类的构造器中，可以显式的使用"this(形参列表)"方式，调用本类中指定的其他构造器')]),v._v(" "),t("p",[v._v('② 构造器中不能通过"this(形参列表)"方式调用自己')]),v._v(" "),t("p",[v._v('③ 如果一个类中有n个构造器，则最多有 n - 1构造器中使用了"this(形参列表)"')]),v._v(" "),t("blockquote",[t("p",[v._v("this关键字没办法调用成“环”状，换句话说，最起码得是直线状。")])]),v._v(" "),t("p",[v._v('④ 规定："this(形参列表)"必须声明在当前构造器的首行')]),v._v(" "),t("blockquote",[t("p",[v._v("得先调用别的，再去调自己的")])]),v._v(" "),t("p",[v._v('⑤ 构造器内部，最多只能声明一个"this(形参列表)"，用来调用其他的构造器')]),v._v(" "),t("blockquote",[t("p",[v._v("好的，推翻前面的看法，必须得是调用成直线，不能“三心二意”，况且，要真是同时调了两个，第二个肯定也不在第一行")])])])]),v._v(" "),t("h2",{attrs:{id:"ps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[v._v("#")]),v._v(" ps：")]),v._v(" "),t("blockquote",[t("p",[v._v("本人的脏话，点source —>  找到”Generate Getters and Setters “，它可以直接生成get，set函数。。。。")]),v._v(" "),t("p",[v._v("好吧，没玩熟还是别用了")])]),v._v(" "),t("blockquote",[t("p",[v._v("Source还挺好玩的，构造函数啥的都能直接帮你造好，奈何，我还不熟练啊")]),v._v(" "),t("p",[v._v("不过，它都会产生一个super函数，不知道干啥用的")])]),v._v(" "),t("h2",{attrs:{id:"packet-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packet-包"}},[v._v("#")]),v._v(" packet  包")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("为了更好的实现项目中类的管理，提供包的概念")])]),v._v(" "),t("li",[t("p",[v._v("使用package声明类或接口所属的包，声明在源文件的首行")])]),v._v(" "),t("li",[t("p",[v._v("包，属于标识符，遵循标识符的命名规则、规范(xxxyyyzzz)、“见名知意”")])]),v._v(" "),t("li",[t("p",[v._v('每"."一次，就代表一层文件目录。')])])]),v._v(" "),t("blockquote",[t("p",[v._v("ps：同一个包下，不能命名同名的接口、类。")]),v._v(" "),t("p",[v._v("不同的包下，可以命名同名的接口、类。")])]),v._v(" "),t("p",[v._v("主要包的介绍")]),v._v(" "),t("ol",[t("li",[v._v("java.lang---包含一些Java语言的核心类，如String、Math、 Integer、 System和Thread,提供常用功能")]),v._v(" "),t("li",[v._v("java.net----包含执行 与网络相关的操作的类和接口")]),v._v(" "),t("li",[v._v("java.io ----包含能提 供多种输入输出功能的类。")]),v._v(" "),t("li",[v._v("java.util--包含一些实用工具类，如定义系统特性、接口的集合框架类、使用与日期日历相关的函数。")]),v._v(" "),t("li",[v._v("java.text---包含了一些java格式化相关的类")]),v._v(" "),t("li",[v._v("java.sql--包含 了java进行JDBC数据库编程的相关类/接口")]),v._v(" "),t("li",[v._v("java.awt---包含 了构成抽象窗口工具集(abstract window tookits)的多个类，这些类被用来构建和管理应用程序的图形用户界面(GUI)")])]),v._v(" "),t("h2",{attrs:{id:"import关键字的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import关键字的使用"}},[v._v("#")]),v._v(" import关键字的使用")]),v._v(" "),t("p",[v._v("import:    导入")]),v._v(" "),t("ol",[t("li",[v._v("在源文件中显式的使用import结构导入指定包下的类、接口")]),v._v(" "),t("li",[v._v("声明在包的声明和类的声明之间")]),v._v(" "),t("li",[v._v("如果需要导入多个结构，则并列写出即可")]),v._v(" "),t("li",[v._v('可以使用"xxx.*"的方式，表示可以导入xxx包下的所有结构')]),v._v(" "),t("li",[v._v("如果使用的类或接口是java.lang包下定义的，则可以省略import结构")]),v._v(" "),t("li",[v._v("如果使用的类或接口是本包下定义的，则可以省略import结构")]),v._v(" "),t("li",[v._v("如果在源文件中，使用了不同包下的同名的类，则必须至少有一个类需要以全类名的方式显示。")]),v._v(" "),t("li",[v._v('使用"xxx.*"方式表明可以调用xxx包下的所有结构。但是如果使用的是xxx子包下的结构，则仍需要显式导入')]),v._v(" "),t("li",[v._v("import static:导入指定类或接口中的静态结构:属性或方法。")])]),v._v(" "),t("blockquote",[t("p",[v._v("JavaBean    符合一定标准的Java类")]),v._v(" "),t("ol",[t("li",[v._v("类是公共的")]),v._v(" "),t("li",[v._v("一个无参的公共的构造器")]),v._v(" "),t("li",[v._v("使用get、set方法给属性赋值")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);