(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{375:function(t,a,v){"use strict";v.r(a);var _=v(44),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"day16-异常处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#day16-异常处理"}},[t._v("#")]),t._v(" day16 异常处理")]),t._v(" "),v("h2",{attrs:{id:"异常"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),v("p",[t._v("在Java语言中，将程序执行中发生的不正常情况称为“异常”")]),t._v(" "),v("blockquote",[v("p",[t._v("(开发过程中的语法错误和逻辑错误不是异常)")])]),t._v(" "),v("p",[v("strong",[t._v("Error:")])]),t._v(" "),v("p",[t._v("Java虚拟机无法解决的严重问题。如：JVM系统内部错误、资源 耗尽等严重情况。比如："),v("code",[t._v("StackOverflowError和OOM")]),t._v("。一般不编写针对性 的代码进行处理。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("栈溢出："),v("code",[t._v("java.lang.StackOverflowError")])]),t._v(" "),v("p",[t._v("比如说，可以在main函数中调用main函数，实现无限递归，导致栈满")])]),t._v(" "),v("li",[v("p",[t._v("堆溢出："),v("code",[t._v("java.lang.OutOfMemoryError")]),t._v("\n这里是堆空间满了（简称OOM）")]),t._v(" "),v("p",[t._v("Integer[] arr = new Integer[1024"),v("em",[t._v("1024")]),t._v("1024];")])])]),t._v(" "),v("p",[v("strong",[t._v("Exception:")])]),t._v(" "),v("blockquote",[v("p",[t._v("主要就是讲这个，因为Error不做处理...")])]),t._v(" "),v("p",[t._v("其它因编程错误或偶然的外在因素导致的一般性问题，可以使 用针对性的代码进行处理。例如：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("空指针访问")])]),t._v(" "),v("li",[v("p",[t._v("试图读取不存在的文件")])]),t._v(" "),v("li",[v("p",[t._v("网络连接中断")])]),t._v(" "),v("li",[v("p",[t._v("数组角标越界")])])]),t._v(" "),v("p",[t._v("根据异常的出现时间可以将异常分为")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("编译时异常")]),t._v("（checked）")]),t._v(" "),v("p",[t._v("IOException输入输出异常")]),t._v(" "),v("p",[t._v("FileNotFoundException文件未找到异常")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("运行时异常")]),t._v("（unchecked）")]),t._v(" "),v("p",[t._v("NullPointerException空指针异常")]),t._v(" "),v("p",[t._v("ArrayIndexOutOfBoundsException数组脚标越界异常")]),t._v(" "),v("p",[t._v("ClassCastException 两个类型间转换不兼容时引发的运行时异常")]),t._v(" "),v("p",[t._v("NumberFormatException 数字格式化异常")]),t._v(" "),v("p",[t._v("InputMismatchException 输入类型与获取类型不匹配异常")]),t._v(" "),v("p",[t._v("ArithmeticException 出现异常的运算条件时，抛出此异常 ，比如1除以0")])])]),t._v(" "),v("h2",{attrs:{id:"异常处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),v("p",[t._v("异常的处理：抓抛模型")]),t._v(" "),v("ul",[v("li",[v("p",[t._v('过程一："抛"：程序在正常执行的过程中，一旦出现异常，就会在异常代码处生成一个对应异常的对象。并将此对象抛出。一旦抛出对象以后，其后的代码就不再执行。')])]),t._v(" "),v("li",[v("p",[t._v("关于异常对象的产生：① 系统自动生成的异常对象② 手动的生成一个异常对象，并抛出（throw）")])]),t._v(" "),v("li",[v("p",[t._v('过程二："抓"：可以理解为异常的处理方式：① try-catch-finally  ② throws')]),t._v(" "),v("blockquote",[v("p",[t._v("throw 是异常对象的产生，throws是异常的处理")])])])]),t._v(" "),v("p",[t._v("两种方式")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("try-catch-finally")]),t._v(" "),v("p",[t._v("自己能处理就自己搞")])]),t._v(" "),v("li",[v("p",[t._v("throws + 异常类型")]),t._v(" "),v("p",[t._v("处理不了交给别人")])])]),t._v(" "),v("h3",{attrs:{id:"try-catch-finally"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally"}},[t._v("#")]),t._v(" try-catch-finally")]),t._v(" "),v("p",[t._v("try-catch-finally的使用")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("try{\n    //可能出现异常的代码\n}catch(异常类型1 变量名1){\n    //处理异常的方式1\n}catch(异常类型2 变量名2){\n    //处理异常的方式2\n}catch(异常类型3 变量名3){\n    //处理异常的方式3\n}\n....\nfinally{\n//一定会执行的代码\n//这个不一定要写，可以不写\n}\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br")])]),v("blockquote",[v("p",[t._v("finally在异常处理中是一定会执行的，即使是catch中出现了异常")])]),t._v(" "),v("p",[t._v("像数据库连接、输入输出流、网络编程Socket等资源，JVM是不能自动的回收的，我们需要自己手动的进行资源释放。此时的资源释放，就需要声明在finally中。")]),t._v(" "),v("blockquote",[v("p",[t._v("对于出问题的代码，可以选中右键Surround With 然后选择Try/catch Block")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("使用try将可能出现异常代码包装起来，在执行过程中，一旦出现异常，就会生成一个对应异常类的对象，根据此对象的类型，去catch中进行匹配")])]),t._v(" "),v("li",[v("p",[t._v("一旦try中的异常对象匹配到某一个catch时，就进入catch中进行异常的处理。一旦处理完成，就跳出当前的\ntry-catch结构（在没有写finally的情况）。继续执行其后的代码")])]),t._v(" "),v("li",[v("p",[t._v("catch中的异常类型如果没有子父类关系，则谁声明在上，谁声明在下无所谓。\ncatch中的异常类型如果满足子父类关系，则要求子类一定声明在父类的上面。否则，报错")])]),t._v(" "),v("li",[v("p",[t._v("常用的异常对象处理的方式：String  getMessage()    printStackTrace()")])]),t._v(" "),v("li",[v("p",[t._v("在try结构中声明的变量，再出了try结构以后，就不能再被调用")])])]),t._v(" "),v("h3",{attrs:{id:"throws-异常类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#throws-异常类型"}},[t._v("#")]),t._v(" throws + 异常类型")]),t._v(" "),v("p",[t._v('"'),v("strong",[t._v("throws + 异常类型")]),t._v('"写在方法的声明处。指明此方法执行时，可能会抛出的异常类型。\n一旦当方法体执行时，出现异常，仍会在异常代码处生成一个异常类的对象，此对象满足throws异常类型时，就会被抛出。'),v("strong",[t._v("异常代码后续的代码，就不再执行！")])]),t._v(" "),v("blockquote",[v("p",[t._v("try-catch-finally:真正的将异常给处理掉了。\nthrows的方式只是将异常抛给了方法的调用者。  并没有真正将异常处理掉")])]),t._v(" "),v("blockquote",[v("p",[t._v("当然，抛出异常需要导包，可以在快捷修复里找到import......")])]),t._v(" "),v("blockquote",[v("p",[t._v("如果父类中被重写的方法没有throws方式处理异常，则子类重写的方法也不能使用throws，意味着如果子类重写的方法中有异常，必须使用try-catch-finally方式处理。")])]),t._v(" "),v("blockquote",[v("p",[t._v("执行的方法a中，先后又调用了另外的几个方法，这几个方法是递进关系执行的。我们建议这几个方法使用throws的方式进行处理。而执行的方法a可以考虑使用try-catch-finally方式进行处理。(把锅集合在一起集中处理)")])])])}),[],!1,null,null,null);a.default=r.exports}}]);