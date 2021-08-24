(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(v,_,t){"use strict";t.r(_);var e=t(44),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"day-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day-12"}},[v._v("#")]),v._v(" day_12")]),v._v(" "),t("h2",{attrs:{id:"object类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object类"}},[v._v("#")]),v._v(" object类")]),v._v(" "),t("ol",[t("li",[v._v("如果我们没有显式地声明一个类的父类的话，则此类继承与"),t("code",[v._v("java.lang.Object")]),v._v("类")]),v._v(" "),t("li",[v._v("所有的Java类（除了"),t("code",[v._v("java.lang.Object")]),v._v(" 类之外都直接或间接的继承与"),t("code",[v._v("java.lang.Object")]),v._v(" 类")]),v._v(" "),t("li",[v._v("意味着，所有的Java类具有"),t("code",[v._v("java.lang.Object")]),v._v("类声明的功能")])]),v._v(" "),t("h2",{attrs:{id:"debug-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-操作"}},[v._v("#")]),v._v(" debug 操作")]),v._v(" "),t("blockquote",[t("p",[v._v("这个是要看英文的")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("英文")]),v._v(" "),t("th",[v._v("释义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Resume")]),v._v(" "),t("td",[v._v("执行到下一个断点")])]),v._v(" "),t("tr",[t("td",[v._v("Terminate")]),v._v(" "),t("td",[v._v("强制终止程序")])]),v._v(" "),t("tr",[t("td",[v._v("Stepinto")]),v._v(" "),t("td",[v._v("让你看到程序执行的每一步")])]),v._v(" "),t("tr",[t("td",[v._v("Stepover")]),v._v(" "),t("td",[v._v("执行一行程序")])]),v._v(" "),t("tr",[t("td",[v._v("Stepreturn")]),v._v(" "),t("td",[v._v('"跳出"Stepinto')])])])]),v._v(" "),t("h2",{attrs:{id:"方法的重写-override-overwrite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法的重写-override-overwrite"}},[v._v("#")]),v._v(" 方法的重写(override/overwrite)")]),v._v(" "),t("ol",[t("li",[v._v("重写的规定：")])]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("方法的声明： 权限修饰符  返回值类型  方法名(形参列表) throws 异常的类型{\n//方法体\n}\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br")])]),t("blockquote",[t("p",[v._v("约定俗称：子类中的叫重写的方法，父类中的叫被重写的方法")])]),v._v(" "),t("ul",[t("li",[v._v("子类重写的方法的方法名和形参列表与父类被重写的方法的方法名和形参列表相同")]),v._v(" "),t("li",[v._v("子类重写的方法的权限修饰符不小于父类被重写的方法的权限修饰符")])]),v._v(" "),t("p",[v._v("特殊情况：子类不能重写父类中声明为private权限的方法")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("返回值类型：\n父类被重写的方法的返回值类型是void，则子类重写的方法的返回值类型只能是void")]),v._v(" "),t("p",[v._v("父类被重写的方法的返回值类型是A类型，则子类重写的方法的返回值类型可以是A类或A类的子类")]),v._v(" "),t("p",[v._v("父类被重写的方法的返回值类型是基本数据类型(比如：double)，则子类重写的方法的返回值类型必须是相同的基本数据类型(必须也是double)")])]),v._v(" "),t("li",[t("p",[v._v("子类重写的方法抛出的异常类型不大于父类被重写的方法抛出的异常类型")])])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[v._v("重写：子类继承父类以后，可以对父类中同名同参数的方法，进行覆盖操作")])]),v._v(" "),t("li",[t("p",[v._v("应用：重写以后，当创建子类对象以后，通过子类对象调用子父类中的同名同参数的方法时，实际执行的是子类重写父类的方法。")])])]),v._v(" "),t("h2",{attrs:{id:"super关键字的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#super关键字的使用"}},[v._v("#")]),v._v(" super关键字的使用")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("super理解为：父类的")])]),v._v(" "),t("li",[t("p",[v._v("super可以用来调用：属性、方法、构造器")])]),v._v(" "),t("li",[t("p",[v._v("super的使用：调用属性和方法")])])]),v._v(" "),t("ul",[t("li",[v._v('我们可以在子类的方法或构造器中。通过使用"super.属性"或"super.方法"的方式，显式的调用父类中声明的属性或方法。但是，通常情况下，我们习惯省略"super."')]),v._v(" "),t("li",[v._v('特殊情况：当子类和父类中定义了同名的属性时，我们要想在子类中调用父类中声明的属性，则必须显式的使用"super.属性"的方式，表明调用的是父类中声明的属性。')]),v._v(" "),t("li",[v._v('特殊情况：当子类重写了父类中的方法以后，我们想在子类的方法中调用父类中被重写的方法时，则必须显的使用"super.方法"的方式，表明调用的是父类中被重写的方法。')])]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("super调用构造器")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v('我们可以在子类的构造器中显式的使用"super(形参列表)"的方式，调用父类中声明的指定的构造器')])]),v._v(" "),t("li",[t("p",[v._v('"super(形参列表)"的使用，必须声明在子类构造器的首行！')])]),v._v(" "),t("li",[t("p",[v._v('我们在类的构造器中，针对于"this(形参列表)"或"super(形参列表)"只能二选一，不能同时出现')])]),v._v(" "),t("li",[t("p",[v._v('在构造器的首行，没有显式的声明"this(形参列表)"或"super(形参列表)"，则默认调用的是父类中空参的构器：super()')])]),v._v(" "),t("li",[t("p",[v._v('在类的多个构造器中，至少有一个类的构造器中使用了"super(形参列表)"，调用父类中的构造器')])])]),v._v(" "),t("h2",{attrs:{id:"子类对象实例化的全过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子类对象实例化的全过程"}},[v._v("#")]),v._v(" 子类对象实例化的全过程")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("从结果上来看：（继承性）")]),v._v(" "),t("ul",[t("li",[v._v("子类继承父类以后，就获取了父类中声明的属性或方法。")]),v._v(" "),t("li",[v._v("创建子类的对象，在堆空间中，就会加载所有父类中声明的属性。")])])]),v._v(" "),t("li",[t("p",[v._v("从过程上来看：")]),v._v(" "),t("ul",[t("li",[v._v("当我们通过子类的构造器创建子类对象时，我们一定会直接或间接的调用其父类的构造器，进而调用父类的父类的构造器，...")]),v._v(" "),t("li",[v._v("直到调用了java.lang.Object类中空参的构造器为止。正因为加载过所有的父类的结构，所以才可以看到内存中有父类中的结构，子类对象才可以考虑进行调用。")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("虽然创建子类对象时，调用了父类的构造器，但是自始至终就创建过一个对象，即为new的子类对象。")])]),v._v(" "),t("blockquote",[t("p",[v._v("编译看左，运行看右，new谁用谁")])]),v._v(" "),t("h2",{attrs:{id:"多态性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多态性"}},[v._v("#")]),v._v(" 多态性")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("多态性：可以理解为一个事物的多种形态。")])]),v._v(" "),t("li",[t("p",[v._v("何为多态性：")]),v._v(" "),t("p",[v._v("​\t对象的多态性：父类的引用指向子类的对象（或子类的对象赋给父类的引用）")])]),v._v(" "),t("li",[t("p",[v._v("多态的使用：虚拟方法调用")]),v._v(" "),t("p",[v._v("有了对象的多态性以后，我们在编译期，只能调用父类中声明的方法，但在运行期，我们实际执行的是子类重写类的方法。")]),v._v(" "),t("p",[v._v("总结：编译，看左边；运行，看右边。")])]),v._v(" "),t("li",[t("p",[v._v("多态性的使用前提：  ① 类的继承关系  ② 方法的重写")])]),v._v(" "),t("li",[t("p",[v._v("对象的多态性，只适用于方法，不适用于属性（编译和运行都看左边）")])])]),v._v(" "),t("blockquote",[t("p",[v._v("重写   -----    晚绑定    ----    多态")])])])}),[],!1,null,null,null);_.default=a.exports}}]);