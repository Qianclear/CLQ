(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{607:function(t,a,s){"use strict";s.r(a);var n=s(17),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"day-13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day-13"}},[t._v("#")]),t._v(" day_13")]),t._v(" "),s("blockquote",[s("p",[t._v("有了对象的多态性以后，内存中实际上是加载了子类特有的属性和方法的，但是由于变量声明为父类类型，导致编译时，只能调用父类中声明的属性和方法。子类特有的属性和方法不能调用。")]),t._v(" "),s("p",[t._v("所以说，如何才能调用子类特有的属性和方法？\n答案：向下转型：使用强制类型转换符。")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t\tMan m1 = (Man)p2;\n\t\tm1.earnMoney();\n\t\tm1.isSmoking = true;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),s("ol",[s("li",[t._v("关键字的使用\n"),s("code",[t._v("a instanceof A")]),t._v(" 含义是：判断对象a是否是类A的实例。如果是，返回true；如果不是，返回false。")]),t._v(" "),s("li",[t._v("使用情境：为了避免在向下转型时出现ClassCastException的异常，我们在向下转型之前，先\n进行instanceof的判断，一旦返回true，就进行向下转型。如果返回false，不进行向下转型。")])]),t._v(" "),s("p",[t._v("如果 a instanceof A返回true,则 a instanceof B也返回true(其中，类B是类A的父类。)")]),t._v(" "),s("h2",{attrs:{id:"java-lang-object类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-object类"}},[t._v("#")]),t._v(" java.lang.Object类")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Object类是所有Java类的根父类")])]),t._v(" "),s("li",[s("p",[t._v("如果在类的声明中未使用extends关键字指明其父类，则默认父类为java.lang.Object类")])]),t._v(" "),s("li",[s("p",[t._v("Object类中的功能(属性、方法)就具有通用性。")]),t._v(" "),s("p",[t._v("属性：无")]),t._v(" "),s("p",[t._v("方法：equals() / toString() / getClass() "),s("code",[t._v("反射讲")]),t._v(" /hashCode()"),s("code",[t._v("集合")]),t._v(" / clone()"),s("code",[t._v("很少用")]),t._v("  / finalize()")]),t._v(" "),s("p",[t._v("wait() 、 notify()、notifyAll()")]),t._v(" "),s("blockquote",[s("p",[t._v("Object类只声明了一个空参的构造器")])])])]),t._v(" "),s("h2",{attrs:{id:"和-equals-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和-equals-区别"}},[t._v("#")]),t._v(" == 和 equals() 区别")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("== 的使用：")]),t._v(" "),s("p",[t._v("== ：运算符")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("可以使用在基本数据类型变量和引用数据类型变量中")])]),t._v(" "),s("li",[s("p",[t._v("如果比较的是基本数据类型变量：比较两个变量保存的数据是否相等。（不一定类型要相同）")])]),t._v(" "),s("li",[s("p",[t._v("如果比较的是引用数据类型变量：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("== 符号使用时，必须保证符号左右两边的变量类型一致。")])]),t._v(" "),s("blockquote",[s("p",[t._v("==符号的作用是比较两个对象的地址值是否相同")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("equals()方法的使用：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("是一个方法，而非运算符")])]),t._v(" "),s("li",[s("p",[t._v("只能适用于引用数据类型")])]),t._v(" "),s("li",[s("p",[t._v("Object类中equals()的定义：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public boolean equals(Object obj) {\n    return (this == obj);\n    }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Object类中定义的equals()和==的作用是相同的：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体")])]),t._v(" "),s("blockquote",[s("p",[t._v('像String、Date、File、包装类等都重写了Object类中的equals()方法。重写以后，比较的不是两个引用的地址是否相同，而是比较两个对象的"实体内容"是否相同。')])]),t._v(" "),s("blockquote",[s("p",[t._v('通常情况下，我们自定义的类如果使用equals()的话，也通常是比较两个对象的"实体内容"是否相同。那么我们就需要对Object类中的equals()进行重写.')])]),t._v(" "),s("p",[t._v("重写的原则："),s("strong",[t._v("比较两个对象的实体内容是否相同.")])]),t._v(" "),s("h2",{attrs:{id:"object类中tostring-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object类中tostring-的使用"}},[t._v("#")]),t._v(" Object类中toString()的使用：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当我们输出一个对象的引用时，实际上就是调用当前对象的toString()")])]),t._v(" "),s("li",[s("p",[t._v("Object类中toString()的定义：")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public String toString() {\n   return getClass().getName() + "@" + Integer.toHexString(hashCode());\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("像String、Date、File、包装类等都重写了Object类中的toString()方法。")]),t._v(" "),s("p",[t._v('使得在调用对象的toString()时，返回"实体内容"信息')]),t._v(" "),s("p",[t._v('自定义类也可以重写toString()方法，当调用此方法时，返回对象的"实体内容"')]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public class ToStringTest {\n\tpublic static void main(String[] args) {\n\t\t\n\t\tCustomer cust1 = new Customer("Tom",21);\n\t\tSystem.out.println(cust1.toString());\n\t\tSystem.out.println(cust1);\n\t\t\n\t\tString str = new String("MM");\n\t\tSystem.out.println(str);//MM\n\t\t\n\t\tDate date = new Date(4534534534543L);\n\t\tSystem.out.println(date.toString());\n\t\t\n\t}\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"java中的junit单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java中的junit单元测试"}},[t._v("#")]),t._v(" Java中的JUnit单元测试")]),t._v(" "),s("p",[t._v("步骤：\n1.选中当前工程 - 右键选择：build path - add libraries - JUnit 4 - 下一步\n2.创建Java类，进行单元测试。\n此时的Java类要求：① 此类是public的  ②此类提供公共的无参的构造器\n3.此类中声明单元测试方法。\n此时的单元测试方法：方法的权限是public,没有返回值，没有形参")]),t._v(" "),s("p",[t._v("4.此单元测试方法上需要声明注解：@Test,并在单元测试类中导入："),s("strong",[t._v("import org.junit.Test;")])]),t._v(" "),s("p",[t._v("5.声明好单元测试方法以后，就可以在方法体内测试相关的代码。\n6.写完代码以后，左键双击单元测试"),s("strong",[t._v("方法名")]),t._v("，右键："),s("strong",[t._v("run as")]),t._v(" - "),s("strong",[t._v("JUnit Test")])]),t._v(" "),s("p",[t._v("说明：\n1.如果执行结果没有任何异常：绿条\n2.如果执行结果出现异常：红条")]),t._v(" "),s("blockquote",[s("p",[t._v("ps:以上皆为视频中的方法，在实际操作中，点击build path之后可能需要自己寻找add libraries，此外，视频中默认的是JUnit4，但自己操作时默认的是JUnit5.")])]),t._v(" "),s("blockquote",[s("p",[t._v("操作中还可以简单操作，即直接"),s("code",[t._v("@Test")]),t._v("，回车，"),s("code",[t._v("public void test(){}")]),t._v("然后在提示里add就行了")])]),t._v(" "),s("blockquote",[s("p",[t._v("开发中不要自己建立一个名叫test的类，避免误用自己的类")])]),t._v(" "),s("h2",{attrs:{id:"包装类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包装类"}},[t._v("#")]),t._v(" 包装类")]),t._v(" "),s("p",[t._v("包装类的使用:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("基本数据类型 ---\x3e包装类：调用包装类的构造器")]),t._v(" "),s("p",[t._v("@Test\npublic void test1(){")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" int num1 = 10;\n System.out.println(num1.toString());\n Integer in1 = new Integer(num1);\n System.out.println(in1.toString());\n")])])]),s("p",[t._v("}")])]),t._v(" "),s("li",[s("p",[t._v("包装类---\x3e基本数据类型:调用包装类Xxx的xxxValue()")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);