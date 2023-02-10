(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{593:function(t,e,_){"use strict";_.r(e);var s=_(17),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"第11章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第11章"}},[t._v("#")]),t._v(" 第11章")]),t._v(" "),_("h2",{attrs:{id:"输出流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输出流"}},[t._v("#")]),t._v(" 输出流")]),t._v(" "),_("p",[_("strong",[t._v("最重要的三个输出流")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("code",[t._v("ostream")])]),t._v(" "),_("li",[_("code",[t._v("ofstream")])]),t._v(" "),_("li",[_("code",[t._v("ostringstream")])])])]),t._v(" "),_("p",[_("strong",[t._v("预定义好的输出流对象")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("code",[t._v("cout")]),t._v("标准输出")]),t._v(" "),_("li",[_("code",[t._v("cerr")]),t._v("标准错误输出，没有缓冲，发送给它的内容立即被输出")]),t._v(" "),_("li",[_("code",[t._v("clog")]),t._v("类似于"),_("code",[t._v("cerr")]),t._v("，但是有缓冲，缓冲区满是被输出")])])]),t._v(" "),_("p",[_("strong",[t._v("构造输出流对象")])]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("ofstream")]),t._v("类支持磁盘文件输出")])]),t._v(" "),_("li",[_("p",[t._v("如果在构造函数中指定一个文件名 ，当构造这个文件时该文件是自动打开的\n"),_("code",[t._v('ofstream myFile(" filename");')])])]),t._v(" "),_("li",[_("p",[t._v("可以在调用默认构造函数之后使用open成员函数打开文件")]),t._v(" "),_("p",[_("code",[t._v("ofstream myFile; //声明-个静态文件输出流对象")])]),t._v(" "),_("p",[_("code",[t._v('myFile.open("filename"); //打开文件，使流对象与文件建立联系')])])]),t._v(" "),_("li",[_("p",[t._v("在构造对象或用open打开文件时可以指定模式")]),t._v(" "),_("p",[_("code",[t._v('ofstream myFile(" filename", ios_base:out | ios_base::binary);')])]),t._v(" "),_("blockquote",[_("p",[t._v("不太懂输出模式，只知道用|（或）来同时使用多个模式")])])])]),t._v(" "),_("p",[_("strong",[t._v("文件输出流成员函数的三种类型")])]),t._v(" "),_("ul",[_("li",[t._v("与操纵符等价的成员函数")]),t._v(" "),_("li",[t._v("执行非格式化写操作的成员函数")]),t._v(" "),_("li",[t._v("其它修改流状态且不同于操纵符或插入运算符的成员函数")])]),t._v(" "),_("p",[_("strong",[t._v("文件输出流成员函数")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("open")]),t._v("函数：把流与一个特定的磁盘文件关联起来;    需要指定打开模式。")]),t._v(" "),_("li",[_("code",[t._v("put")]),t._v("函数：把一个字符写到输出流中。")]),t._v(" "),_("li",[_("code",[t._v("write")]),t._v("函数：将内存中的一块内容写到-个文件输出流中。")]),t._v(" "),_("li",[_("code",[t._v("seekp")]),t._v("和"),_("code",[t._v("tellp")]),t._v("函数：操作文件流的内部指针。")]),t._v(" "),_("li",[_("code",[t._v("close")]),t._v("函数：关闭与一个文件输出流关联的磁盘文件。")]),t._v(" "),_("li",[t._v("错误处理函数：在写到一个流时进行错误处理。")])]),t._v(" "),_("p",[_("strong",[t._v("操纵符( manipulator )")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("插入运算符与操纵符一起工作")]),t._v(" "),_("p",[t._v("控制输出格式。")])]),t._v(" "),_("li",[_("p",[t._v("很多操纵符都定义在"),_("code",[t._v("ios_base")]),t._v("类中(如"),_("code",[t._v("hex()")]),t._v("、"),_("code",[t._v("<iomanip>")]),t._v("头文件(如"),_("code",[t._v("setprecision()")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("控制输出宽度\n在流中放入"),_("code",[t._v("setw")]),t._v("操纵符或调用width成员函数为每 个项指定输出宽度。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("setw")]),t._v("和"),_("code",[t._v("width")]),t._v("仅影响紧随其后的输出项，但其它流格式操纵符保持\n有效直到发生改变。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dec、oct和hex")]),t._v("操纵符设 置输入和输出的默认进制。")])])]),t._v(" "),_("h3",{attrs:{id:"setiosflags的参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#setiosflags的参数"}},[t._v("#")]),t._v(" setiosflags的参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::skipws")]),t._v(" "),_("td",[t._v("在输入中跳过空白。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::left")]),t._v(" "),_("td",[t._v("左对齐值，用填充字符填充右边。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::right")]),t._v(" "),_("td",[t._v("右对齐值，用填充字符填充左边(默认对齐方式)。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::internal")]),t._v(" "),_("td",[t._v("在规定的宽度内，指定前缀符号之后，数值之前，插入指定的填充字符。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::dec")]),t._v(" "),_("td",[t._v("以十进制形式格式化数值(默认进制)。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::oct")]),t._v(" "),_("td",[t._v("以八进制形式格式化数值。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::hex")]),t._v(" "),_("td",[t._v("以十六进制形式格式化数值。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::showbase")]),t._v(" "),_("td",[t._v("插入前缀符号以表明整数的数制。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::showpoint")]),t._v(" "),_("td",[t._v("对浮点数值显示小数点和尾部的0。")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("ios_base::uppercase")]),t._v(" "),_("th",[t._v("对于十六进制数值显示大写字母A到F，对于科学格式显示大写字母E")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::showpos")]),t._v(" "),_("td",[t._v("对于非负数显示正号（“ + ”）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::scientific")]),t._v(" "),_("td",[t._v("以科学计数法显示浮点数值")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::fixed")]),t._v(" "),_("td",[t._v("以定点格式显示浮点数值(没有指数部分)")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("ios_base::unitbuf")]),t._v(" "),_("td",[t._v("在每次插入之后转储并清除缓冲区内容。")])])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('代码演示：\n#include<iostream>\n#include<iomanip>//是setiosflags操作符的头文件\n#include<string>\nusing namespace std;\ncout << setiosflags(ios_base::fixed);//①\nint main(){\n\tdouble values[] = {1.23,35.36,653.7,4358.24};\n\tstring names[] = {"Zoot","Jimmy","AL","Stan"};\n\tfor(int i = 0;i< 4;i++){\n\tcout << setiosflags(ios_base::left)//表示设置左对齐\n\t<< setw(6)//表示设置宽度\n\t<<names[i]\n\t<<resetiosflags(ios_base::left)//表示重新设置为右对齐\n\t<<setw(10) << setprecision(1) // 正常情况表示精度为1，但是当有①存在时\n\t                              // 表示保留小数点后1位有效数字\n\t<< values[i] << endl;\n\t}\n\treturn 0;\n}\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br")])]),_("h3",{attrs:{id:"二进制文件流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二进制文件流"}},[t._v("#")]),t._v(" 二进制文件流")]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("ofstream")]),t._v("构造函数中的模式参量指定二进制输出模式 ;\n以通常方式构造一个流 ，然后使用"),_("code",[t._v("setmode")]),t._v("成员函数，在文件打开后改变模式;\n通过二进制文件输出流对象完成输出。")]),t._v(" "),_("h2",{attrs:{id:"输入流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输入流"}},[t._v("#")]),t._v(" 输入流")]),t._v(" "),_("p",[_("code",[t._v("istream")]),t._v("类最适合用于顺序文本模式输入。"),_("code",[t._v("cin")]),t._v("是例子")]),t._v(" "),_("p",[_("code",[t._v("ifstream")]),t._v("类支出磁盘文件输入")]),t._v(" "),_("p",[_("code",[t._v("istringstream")])]),t._v(" "),_("h3",{attrs:{id:"构造输入流对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构造输入流对象"}},[t._v("#")]),t._v(" 构造输入流对象")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("如果在构造函数中指定一个文件名 ， 在构造该对象时该文件便自动打开。\n"),_("code",[t._v('ifstream myFile("filename");')])])]),t._v(" "),_("li",[_("p",[t._v("在调用默认构造函数之后使用open函数来打开文件。\n"),_("code",[t._v("ifstream myFile; //建立一个文件流对象")]),t._v(" "),_("code",[t._v('myFile.open(" filename"); //打开文件" filename"')])])]),t._v(" "),_("li",[_("p",[t._v("打开文件时可以指定模式\n"),_("code",[t._v('ifstream myFile("filename", ios. base:in | ios_ base:binary);')])])])]),t._v(" "),_("h3",{attrs:{id:"使用提取运算符从文本文件输入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用提取运算符从文本文件输入"}},[t._v("#")]),t._v(" 使用提取运算符从文本文件输入")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("提取运算符(> > )对于所有标准C + +数据类型都是预先设计好的。")])]),t._v(" "),_("li",[_("p",[t._v("是从一个输入流对象获取字节最容易的方法。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("ios")]),t._v("类中的很多操纵符都可以应用于输入流。但是只有少数几个对输入流对象具有实际影响，其中最重要的是进制操纵符"),_("code",[t._v("dec")]),t._v("、"),_("code",[t._v("oct")]),t._v("和"),_("code",[t._v("hex")]),t._v("。")])])]),t._v(" "),_("h3",{attrs:{id:"输入流相关函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输入流相关函数"}},[t._v("#")]),t._v(" 输入流相关函数")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("open函数把该流与一个特定磁盘文件相关联。")])]),t._v(" "),_("li",[_("p",[t._v("get函数的功能与提取运算符( >> )很相像，主要的不同点是get函数在读入数据时包括空白字符。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("getline")]),t._v("的功能是从输入流中读取多个字符，并且允许指定输入终止字符，读取完成后，从读取的内容中删除终止字符。")])]),t._v(" "),_("li",[_("p",[t._v("read成员函数从一个文件读字节到一个指定的内存区域,由长度参数确定要读的字节数。当遇到文件结束或者在文本模式文件中遇到文件结束标记字符时结束读取。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("seekg")]),t._v("函数用来设置文件输入流中读取数据位置的指针。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("tellg")]),t._v("函数返回当前文件读指针的位置。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("close")]),t._v("函数关闭与-个文件输入流关联的磁盘文件。")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);