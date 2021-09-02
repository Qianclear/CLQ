(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{376:function(v,_,t){"use strict";t.r(_);var a=t(44),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"内部排序算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部排序算法"}},[v._v("#")]),v._v(" 内部排序算法")]),v._v(" "),t("p",[t("strong",[v._v("选择排序")]),v._v(" ：直接选择排序、堆排序")]),v._v(" "),t("p",[t("strong",[v._v("交换排序")]),v._v(" ：冒泡排序、快速排序")]),v._v(" "),t("p",[t("strong",[v._v("插入排序")]),v._v(" ： 直接插入排序、折半插入排序、shell排序")]),v._v(" "),t("p",[t("strong",[v._v("并归排序")])]),v._v(" "),t("p",[t("strong",[v._v("桶式排序")])]),v._v(" "),t("p",[t("strong",[v._v("基数排序")])]),v._v(" "),t("h2",{attrs:{id:"数组中的常见异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组中的常见异常"}},[v._v("#")]),v._v(" 数组中的常见异常：")]),v._v(" "),t("p",[v._v("数组角标越界异常：")]),v._v(" "),t("blockquote",[t("p",[v._v("ArrayIndexOutOfBoundsException(简单来说就是角标不在0~arr.length-1的范围内)")])]),v._v(" "),t("p",[v._v("空指针异常：")]),v._v(" "),t("blockquote",[t("p",[v._v("NullPointerException")]),v._v(" "),t("p",[v._v("int [] = null;")]),v._v(" "),t("p",[v._v("arr[0];")])]),v._v(" "),t("h1",{attrs:{id:"day-08"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day-08"}},[v._v("#")]),v._v(" day 08")]),v._v(" "),t("p",[t("strong",[v._v("面向对象")])]),v._v(" "),t("p",[v._v("1.面向过程(POP)：强调的是功能行为，以函数为最小单位，考虑怎么做。")]),v._v(" "),t("p",[v._v("2.面向对象(OOP)：强调具备了功能的对象，以类/对象为最小单位，考虑谁来做。")]),v._v(" "),t("blockquote",[t("p",[v._v("感觉面向对象层次更分明")])]),v._v(" "),t("p",[t("strong",[v._v("两个要素")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("类：对一类事物的描述，是抽象的、概念上的定义")]),v._v(" "),t("li",[v._v("对象：是实际存在的该类事物的每个个体，因而也称为实例(instance)")])]),v._v(" "),t("blockquote",[t("p",[v._v("个人理解：类->名词；")]),v._v(" "),t("p",[v._v("面向对象程序设计的重点是类的设计")]),v._v(" "),t("p",[v._v("设计类，就是设计类的成员。")])]),v._v(" "),t("blockquote",[t("p",[v._v("ps:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("属性 = 成员变量 = field = 域、字段")])]),v._v(" "),t("li",[t("p",[v._v("方法 = 成员方法 = 函数 = method")])]),v._v(" "),t("li",[t("p",[v._v("创建类的对象 = 类的实例化 = 实例化类")])])])]),v._v(" "),t("h2",{attrs:{id:"类和对象的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类和对象的使用"}},[v._v("#")]),v._v(" 类和对象的使用")]),v._v(" "),t("p",[v._v("(面向对象思想落地的实现)：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("创建类，设计类的成员")])]),v._v(" "),t("li",[t("p",[v._v("创建类的对象")])]),v._v(" "),t("li",[t("p",[v._v("通过“对象.属性”或“对象.方法”调用对象的结构")])])]),v._v(" "),t("h2",{attrs:{id:"类中属性的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类中属性的使用"}},[v._v("#")]),v._v(" 类中属性的使用")]),v._v(" "),t("p",[v._v("属性（成员变量）   vs  局部变量")]),v._v(" "),t("p",[v._v("1.相同点：")]),v._v(" "),t("ol",[t("li",[v._v("定义变量的格式：数据类型  变量名 = 变量值")]),v._v(" "),t("li",[v._v("先声明，后使用")]),v._v(" "),t("li",[v._v("变量都有其对应的作用域")])]),v._v(" "),t("p",[v._v("2.不同点：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("在类中声明的位置的不同")]),v._v(" "),t("p",[v._v("属性：直接定义在类的一对{}内")]),v._v(" "),t("p",[v._v("局部变量：声明在方法内、方法形参、代码块内、构造器形参、构造器内部的变量")])]),v._v(" "),t("li",[t("p",[v._v("关于权限修饰符的不同")]),v._v(" "),t("p",[v._v("属性：可以在声明属性时，指明其权限，使用权限修饰符。")]),v._v(" "),t("p",[v._v("常用的权限修饰符(设置权限)：private、public、缺省、protected  ---\x3e封装性（通常使用缺省）")]),v._v(" "),t("p",[v._v("局部变量：不可以使用权限修饰符。")])]),v._v(" "),t("li",[t("p",[v._v("默认初始化值的情况：")]),v._v(" "),t("p",[v._v("属性：类的属性，根据其类型，都有默认初始化值。")]),v._v(" "),t("p",[v._v("​    整型（byte、short、int、long）：0")]),v._v(" "),t("p",[v._v("​    浮点型（float、double）：0.0")]),v._v(" "),t("p",[v._v("​    字符型（char）：0  （或'\\u0000'）")]),v._v(" "),t("p",[v._v("​    布尔型（boolean）：false")]),v._v(" "),t("p",[v._v("​    引用数据类型（类、数组、接口）：null")]),v._v(" "),t("p",[v._v("局部变量：没有默认初始化值。")]),v._v(" "),t("p",[v._v("​    意味着，我们在调用局部变量之前，一定要显式赋值。")]),v._v(" "),t("p",[v._v("​    特别地：形参在调用时，我们赋值即可。")])]),v._v(" "),t("li",[t("p",[v._v("在内存中加载的位置：")]),v._v(" "),t("p",[v._v("属性：加载到堆空间中   （非static）")]),v._v(" "),t("p",[v._v("局部变量：加载到栈空间")])])]),v._v(" "),t("h2",{attrs:{id:"return的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return的使用"}},[v._v("#")]),v._v(" return的使用")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("使用范围：使用在方法体中")])]),v._v(" "),t("li",[t("p",[v._v('作用：① 结束方法② 针对于有返回值类型的方法，使用"return 数据"方法返回所要的数据。')])]),v._v(" "),t("li",[t("p",[v._v("注意点：return关键字后面不可以声明执行语句")])])]),v._v(" "),t("h1",{attrs:{id:"day-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day-09"}},[v._v("#")]),v._v(" day 09")]),v._v(" "),t("p",[v._v("一、理解“万事万物皆对象”")]),v._v(" "),t("p",[v._v("1.在Java语言范畴中，我们都将功能、结构等封装到类中，通过类的实例化，来调用具体的功能结构")]),v._v(" "),t("p",[v._v("2.涉及到Java语言与前端html、后端的数据库交互时，前后端的结构在Java层面交互时，都体现为类、对象。")]),v._v(" "),t("p",[v._v("二、内存解析的说明")]),v._v(" "),t("p",[v._v("1.引用类型的变量，只可能存储两类值：null  或  地址值（含变量的类型）")]),v._v(" "),t("h2",{attrs:{id:"匿名对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名对象"}},[v._v("#")]),v._v(" 匿名对象")]),v._v(" "),t("p",[v._v("1.理解：我们创建的对象，没有显式的赋给一个变量名。即为匿名对象")]),v._v(" "),t("p",[v._v("2.特征：匿名对象只能调用一次。")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("\t\tnew Phone().price = 1999;\n\t\tnew Phone().showPrice();//0.0\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br")])]),t("p",[v._v("3.使用：如"),t("code",[v._v("new Phone().playGame();")])]),v._v(" "),t("h2",{attrs:{id:"方法重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法重载"}},[v._v("#")]),v._v(" 方法重载")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("方法的重载（overload）  loading...")]),v._v(" "),t("p",[v._v("定义：在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可。")])]),v._v(" "),t("li",[t("p",[v._v('"两同一不同":')]),v._v(" "),t("p",[v._v("同一个类、相同方法名")]),v._v(" "),t("p",[v._v("参数列表不同（参数个数不同，参数类型不同）")])]),v._v(" "),t("li",[t("p",[v._v("跟方法的权限修饰符、返回值类型、形参变量名、方法体都没有关系")])])]),v._v(" "),t("h3",{attrs:{id:"可变个数形参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可变个数形参"}},[v._v("#")]),v._v(" 可变个数形参")]),v._v(" "),t("blockquote",[t("p",[v._v("我觉得这个好像是比较类似于重载函数（方法），所以把它弄成了三级标题")])]),v._v(" "),t("ol",[t("li",[v._v("格式：数据类型 ... 变量名")]),v._v(" "),t("li",[v._v("当调用可变个数形参的方法时，传入的参数个数可以是：0个，1个,2个，。。。")]),v._v(" "),t("li",[v._v("可变个数形参的方法与本类中方法名相同，形参不同的方法之间构成重载")]),v._v(" "),t("li",[v._v("可变个数形参的方法与本类中方法名相同，形参类型也相同的数组之间不构成重载。换句话说，二者不能共存。")]),v._v(" "),t("li",[v._v("可变个数形参在方法的形参中，必须声明在末尾")]),v._v(" "),t("li",[v._v("可变个数形参在方法的形参中,最多只能声明一个可变形参。")])]),v._v(" "),t("blockquote",[t("p",[v._v("关于变量的赋值：")]),v._v(" "),t("p",[v._v("如果变量是基本数据类型，此时赋值的是变量所保存的数据值。")]),v._v(" "),t("p",[v._v("如果变量是引用数据类型，此时赋值的是变量所保存的数据的地址值。")])]),v._v(" "),t("blockquote",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("System.exit(o);\n//表示终止当前JVM的执行（感觉像是中断了程序的进行一样）\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);