(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{595:function(_,v,e){"use strict";e.r(v);var t=e(17),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"第四章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四章"}},[_._v("#")]),_._v(" 第四章")]),_._v(" "),e("h3",{attrs:{id:"前向引用声明注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前向引用声明注意"}},[_._v("#")]),_._v(" 前向引用声明注意")]),_._v(" "),e("p",[_._v("前向引用声明注意事项：\n在提供一个完整的类声明之前，不能声明该类的对象，也不能在内联成员函数中使用该类的对象。\n当使用前向引用声明时，只能使用被声明的符号, 而不能涉及类的任何细节。")]),_._v(" "),e("h1",{attrs:{id:"第五章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第五章"}},[_._v("#")]),_._v(" 第五章")]),_._v(" "),e("p",[_._v("函数后面接"),e("code",[_._v("const")]),_._v(" 表示不改变参数状态")]),_._v(" "),e("h1",{attrs:{id:"第六章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六章"}},[_._v("#")]),_._v(" 第六章")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("static_cast< new_type >(expression)")]),_._v(" "),e("code",[_._v("dynamic_cast< new_type >(expression)")]),_._v(" "),e("strong",[_._v("备注")]),_._v("：")])]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("new_type")]),_._v("为目标数据类型，"),e("strong",[_._v("expression")]),_._v("为原始数据类型变量或者表达式。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("static_cast")]),_._v("相当于传统的C语言里的强制转换，该运算符把expression转换为new_type类型，用来强迫隐式转换如non-const对象转为const对象")])]),_._v(" "),e("li",[e("blockquote",[e("p",[_._v("①用于类层次结构中基类（父类）和派生类（子类）之间指针或引用的转换。\n进行上行转换（把派生类的指针或引用转换成基类表示）是安全的；\n进行下行转换（把基类指针或引用转换成派生类表示）时，由于没有动态类型检查，所以是不安全的。\n②用于基本数据类型之间的转换，如把int转换成char，把int转换成enum。\n③把空指针转换成目标类型的空指针。\n④把任何类型的表达式转换成void类型。\n注意：static_cast不能转换掉expression的const、volatile、或者__unaligned属性\n(这部分不是很懂，搜的)")])])])]),_._v(" "),e("blockquote",[e("p",[_._v("static_case(静态转换) "),e("strong",[_._v("不可以用于多态类型的转换.")]),_._v(" 也 "),e("strong",[_._v("不可以用于静态类型的转换.")])])]),_._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[_._v("动态申请内存操作符 "),e("strong",[_._v("new")]),_._v("~~~ "),e("code",[_._v("new 类型名T（初始化参数列表）")])]),_._v(" "),e("p",[_._v("功能：在程序执行期间，申请用于存放T类型对象的内存空间，并依初值列表赋以初值。")]),_._v(" "),e("p",[_._v("结果：")]),_._v(" "),e("p",[_._v("成功：T类型的指针，指向新分配的内存；")]),_._v(" "),e("p",[_._v("失败：抛出异常；")])]),_._v(" "),e("li",[e("p",[_._v("函数体中采用"),e("code",[_._v("delete 指针名")]),_._v(" 来释放内存，避免内存泄露。")]),_._v(" "),e("p",[_._v("同时，该指针必须是new操作的返回值；（感觉像是自己调用了析构函数，自己删自己）")])]),_._v(" "),e("li",[e("p",[_._v("分配和释放动态叔祖")]),_._v(" "),e("p",[_._v("分配："),e("code",[_._v("类型名T[数组长度]")]),_._v(" ~数组长度可以使任何整数类型表达式，在运行时计算")]),_._v(" "),e("p",[_._v("释放："),e("code",[_._v("delete[] 数组名p")]),_._v("  ~释放指针p所指向的数组(p必须是用new分配得到的数组首地址)")]),_._v(" "),e("blockquote",[e("p",[_._v("不写“[]”的话仅释放数组的首地址")])])]),_._v(" "),e("li",[e("p",[_._v("创建多维数组时，要用指向数组的指针作为接受new返回首地址的变量")]),_._v(" "),e("p",[_._v("例如："),e("code",[_._v("int (*cp)[9][8] = new int[7][9][8];")]),_._v(" (这像是7个9*8的房间)")])]),_._v(" "),e("li",[e("blockquote",[e("ul",[e("li",[e("p",[_._v("当一个对象被用作右值的时候，用的是对象的值（内容）；当对象被用作左值的时候，用的是对象的身份（在内存中的位置）")])]),_._v(" "),e("li",[e("p",[_._v("C++ 11的智能指针：")]),_._v(" "),e("p",[e("code",[_._v("unique_ptr")]),_._v(" : 不允许多个指针共享资源，可以用标准库中的move函数转移指针")]),_._v(" "),e("p",[e("code",[_._v("shared_ptr")]),_._v(" : 多个指针共享资源")]),_._v(" "),e("p",[e("code",[_._v("weak_ptr")]),_._v(" : 可复制"),e("code",[_._v("shared_ptr")]),_._v(" ，但其构造或者释放对资源不产生影响")])])])])]),_._v(" "),e("li",[e("p",[_._v("vector(C++标准库里的一个类模板)")]),_._v(" "),e("blockquote",[e("p",[_._v("注：需要添加头文件"),e("code",[_._v("#include<vector>")]),_._v(" 才可以使用")])]),_._v(" "),e("blockquote",[e("p",[_._v("据说与数组一样好用，但是比数组更加安全方便")])]),_._v(" "),e("ul",[e("li",[_._v("可以封装任何类型("),e("strong",[_._v("只要使用的时候说明类型即可")]),_._v(")的动态数组，自动创建和删除。")]),_._v(" "),e("li",[_._v("可以自己进行数组下标越界检查")])]),_._v(" "),e("p",[e("strong",[_._v("vector对象的定义")]),_._v("："),e("code",[_._v("vector<元素类型> 数组对象名(数组长度);")])]),_._v(" "),e("p",[_._v("例如："),e("code",[_._v("vector<int> arr(5)")]),_._v(" 就是建立大小为5的int数组")]),_._v(" "),e("p",[e("strong",[_._v("vector对象的使用")]),_._v("：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("对数组元素的引用（与普通数组具有相同的形式）：")]),_._v(" "),e("p",[e("code",[_._v("vector对象名[下标表达式]")])]),_._v(" "),e("blockquote",[e("p",[_._v("vector数组对象名不表示数组首地址")])])]),_._v(" "),e("li",[e("p",[_._v("获得数组长度")]),_._v(" "),e("p",[_._v("用size函数：vector对象名.size()")])])])])]),_._v(" "),e("p",[e("strong",[_._v("移动构造函数：")]),_._v(" "),e("code",[_._v("class_name(class_name &&)")]),_._v(" 如："),e("code",[_._v("intnum(intnum &&n)")])]),_._v(" "),e("blockquote",[e("p",[_._v("其中：")]),_._v(" "),e("ul",[e("li",[_._v("&&是右值引用")]),_._v(" "),e("li",[_._v("函数返回的临时变量是右值")]),_._v(" "),e("li",[_._v("即将消亡的值也称为右值")])])]),_._v(" "),e("p",[e("strong",[_._v("字符串常量")])]),_._v(" "),e("ul",[e("li",[_._v('例："program"')]),_._v(" "),e("li",[_._v("各字符连续，顺序存放，每个字符占一个字节以'\\0'结尾，相当于一个隐含创建的字符常量数组")]),_._v(" "),e("li",[_._v('"program" 出现在表达式中，表示这一char数组的首地址')]),_._v(" "),e("li",[_._v("首地址可以赋给char常量指针")]),_._v(" "),e("li",[e("code",[_._v('const char *STRING1 = "program"')])])]),_._v(" "),e("p",[e("strong",[_._v("输入正行字符串")])]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("getline")]),_._v(" 可以输入正行字符串（要包含string头文件）")]),_._v(" "),e("p",[_._v("例如："),e("code",[_._v("getline(cin,s2);")])])]),_._v(" "),e("li",[e("p",[_._v("输入字符串时，可以使用其他分隔符作为字符串结束的标志(如逗号，分号)， 将分隔符作为"),e("code",[_._v("getline")]),_._v(" 的第三个参数")]),_._v(" "),e("p",[_._v("例如："),e("code",[_._v('getline(cin,s2,",");')])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);