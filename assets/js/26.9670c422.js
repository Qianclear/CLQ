(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{385:function(t,s,a){"use strict";a.r(s);var n=a(44),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"day-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-14"}},[t._v("#")]),t._v(" day_14")]),t._v(" "),a("h2",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" static")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("static:静态的")])]),t._v(" "),a("li",[a("p",[t._v("static可以用来修饰：属性、方法、代码块、内部类")])]),t._v(" "),a("li",[a("p",[t._v("使用static修饰属性：静态变量（或类变量）")]),t._v(" "),a("ul",[a("li",[t._v("属性，按是否使用static修饰，又分为：静态属性  vs 非静态属性(实例变量)")]),t._v(" "),a("li",[t._v("实例变量：我们创建了类的多个对象，每个对象都独立的拥有一套类中的非静态属性。当修改其中一个对象中的非静态属性时，不会导致其他对象中同样的属性值的修改。")]),t._v(" "),a("li",[t._v("静态变量：我们创建了类的多个对象，多个对象共享同一个静态变量。当通过某一个对象修改静态变量时，会导致其他对象调用此静态变量时，是修改过了的。")])])]),t._v(" "),a("li",[a("p",[t._v("static修饰属性的其他说明：")]),t._v(" "),a("ul",[a("li",[t._v('静态变量随着类的加载而加载。可以通过"类.静态变量"的方式进行调用')]),t._v(" "),a("li",[t._v("静态变量的加载要早于对象的创建。")]),t._v(" "),a("li",[t._v("由于类只会加载一次，则静态变量在内存中也只会存在一份：存在方法区的静态域中。")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("类变量")]),t._v(" "),a("th",[t._v("实例变量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("类")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("no")])]),t._v(" "),a("tr",[a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("yes")])])])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("静态属性举例：System.out; Math.PI;")])]),t._v(" "),a("li",[a("p",[t._v("使用static修饰方法：静态方法")]),t._v(" "),a("ul",[a("li",[t._v('随着类的加载而加载，可以通过"类.静态方法"的方式进行调用')])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("静态方法")]),t._v(" "),a("th",[t._v("非静态方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("类")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("no")])]),t._v(" "),a("tr",[a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("yes")])])])]),t._v(" "),a("ul",[a("li",[t._v("静态方法中，只能调用静态的方法或属性")]),t._v(" "),a("li",[t._v("非静态方法中，既可以调用非静态的方法或属性，也可以调用静态的方法或属性")])])]),t._v(" "),a("li",[a("p",[t._v("static注意点：")]),t._v(" "),a("ul",[a("li",[t._v("在静态的方法内，不能使用this关键字、super关键字")]),t._v(" "),a("li",[t._v("关于静态属性和静态方法的使用，大家都从生命周期的角度去理解。")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("属性是可以被多个对象所共享的，不会随着对象的不同而不同的。")]),t._v(" "),a("p",[t._v("类中的常量也常常声明为static")]),t._v(" "),a("p",[t._v("操作静态属性的方法，通常设置为static的")]),t._v(" "),a("p",[t._v("工具类中的方法，习惯上声明为static的。 比如：Math、Arrays、Collections")])]),t._v(" "),a("h2",{attrs:{id:"单例设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例设计模式"}},[t._v("#")]),t._v(" 单例设计模式")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例。")])]),t._v(" "),a("li",[a("p",[t._v("如何实现？")]),t._v(" "),a("p",[t._v("饿汉式     以及    懒汉式")])]),t._v(" "),a("li",[a("p",[t._v("饿汉式：")]),t._v(" "),a("p",[t._v("好处：饿汉式是现场安全的")]),t._v(" "),a("p",[t._v("坏处：对象加载时间过长")]),t._v(" "),a("p",[t._v("懒汉式：")]),t._v(" "),a("p",[t._v("好处：延迟对象的创建")]),t._v(" "),a("p",[t._v("目前坏处：线程不安全（到多线程内容时，再修改）")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Bank{\n\t//1.私有化类的构造器\n\tprivate Bank(){\t\n\t}\n\t//2.内部创建类的对象\n\t//4.要求此对象也必须声明为静态的\n\tprivate static Bank instance = new Bank();\n\t//3.提供公共的静态的方法，返回类的对象\n\tpublic static Bank getInstance(){\n\t\treturn instance;\n\t}\n}\n\n懒汉式\npublic class SingletonTest2 {\n\tpublic static void main(String[] args) {\n\t\tOrder order1 = Order.getInstance();\n\t\tOrder order2 = Order.getInstance();\n\t\tSystem.out.println(order1 == order2);\n\t}\n}\nclass Order{\n\t//1.私有化类的构造器\n\tprivate Order(){\n\t}\n\t//2.声明当前类对象，没有初始化\n\t//4.此对象也必须声明为static的\n\tprivate static Order instance = null;\n\t//3.声明public、static的返回当前类对象的方法\n\tpublic static Order getInstance(){\n\t\tif(instance == null){\n\t\t\tinstance = new Order();\n\t\t}\n\t\treturn instance;\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])]),a("h2",{attrs:{id:"类的成员之四-代码块-或初始化块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的成员之四-代码块-或初始化块"}},[t._v("#")]),t._v(" 类的成员之四：代码块（或初始化块）")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("代码块的作用：用来初始化类、对象")])]),t._v(" "),a("li",[a("p",[t._v("代码块如果有修饰的话，只能使用"),a("strong",[t._v("static")])])]),t._v(" "),a("li",[a("p",[t._v("分类：静态代码块  vs 非静态代码块")])]),t._v(" "),a("li",[a("p",[t._v("静态代码块")]),t._v(" "),a("ul",[a("li",[t._v("内部可以有输出语句")]),t._v(" "),a("li",[t._v("随着"),a("strong",[t._v("类的加载")]),t._v("而执行,而且只执行一次")]),t._v(" "),a("li",[t._v("作用：初始化类的信息")]),t._v(" "),a("li",[t._v("如果一个类中定义了多个静态代码块，则按照声明的先后顺序执行")]),t._v(" "),a("li",[a("strong",[t._v("静态代码块的执行要优先于非静态代码块的执行")])]),t._v(" "),a("li",[t._v("静态代码块内只能调用静态的属性、静态的方法，不能调用非静态的结构")])])]),t._v(" "),a("li",[a("p",[t._v("非静态代码块")]),t._v(" "),a("ul",[a("li",[t._v("内部可以有输出语句")]),t._v(" "),a("li",[t._v("随着"),a("strong",[t._v("对象的创建")]),t._v("而执行")]),t._v(" "),a("li",[t._v("每创建一个对象，就执行一次非静态代码块")]),t._v(" "),a("li",[t._v("作用：可以在创建对象时，对对象的属性等进行初始化")]),t._v(" "),a("li",[t._v("如果一个类中定义了多个非静态代码块，则按照声明的先后顺序执行")]),t._v(" "),a("li",[a("strong",[t._v("非静态代码块内可以调用静态的属性、静态的方法，或非静态的属性、非静态的方法")])])])])]),t._v(" "),a("h2",{attrs:{id:"final"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[t._v("#")]),t._v(" final")]),t._v(" "),a("p",[t._v("final:最终的")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("final可以用来修饰的结构：类、方法、变量")])]),t._v(" "),a("li",[a("p",[t._v("final 用来修饰一个类:此类不能被其他类所继承。")]),t._v(" "),a("p",[t._v("比如：String类、System类、StringBuffer类")])]),t._v(" "),a("li",[a("p",[t._v("final 用来修饰方法：表明此方法不可以被重写")]),t._v(" "),a("p",[t._v("比如：Object类中getClass();")])]),t._v(" "),a("li",[a("p",[t._v('final 用来修饰变量：此时的"变量"就称为是一个常量')])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("final修饰属性：可以考虑赋值的位置有：显式初始化、代码块中初始化、构造器中初始化")])]),t._v(" "),a("li",[a("p",[t._v("final修饰局部变量：尤其是使用final修饰形参时，表明此形参是一个常量。当我们调用此方法时，给常量形参赋一个实参。一旦赋值")])])]),t._v(" "),a("p",[t._v("以后，就只能在方法体内使用此形参，但不能进行重新赋值。")]),t._v(" "),a("p",[t._v("static final 用来修饰属性：全局常量")])])}),[],!1,null,null,null);s.default=v.exports}}]);