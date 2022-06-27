---
title: java笔记hsp02
date: 2021-6-16
tags:
 - java
categories:
 - 学习笔记
---



# 常用类

## 一、包装类

针对八种基本数据类型相应的引用类型

好处：有了类的特点之后，方便调用类的方法

1. 分类

   | 基本数据类型 | 包装类    |
   | ------------ | --------- |
   | boolean      | Boolean   |
   | char         | Character |
   | byte         | Byte      |
   | short        | Short     |
   | int          | Integer   |
   | long         | Long      |
   | float        | Float     |
   | double       | Double    |

2. 代码理解

   ```java
   public class Integer01 {
       public static void main(String[] args) {
           //手动装箱
           //个人理解，所谓装箱，就是将参数"对象化"的过程，
           int n1= 100;
           Integer integer = new Integer(n1);
           Integer integer1 = Integer.valueOf(n1);
           //手动拆箱
           int i = integer.intValue();
           //自动装箱
           int n2 = 200;
           Integer integer2 = n2;//底层使用的依然是Integer.valueOf(n2);
           //自动拆箱
           Integer n3 = integer2;
       }
   }
   ```

3. 习题

   ```java
   Object obj1 = true?new Integer(1):new Double(2.0);
   System.out.println(obj1);//1.0   为什么？因为三元运算符是一个整体，由于后面是double，所以自动提高了精度
   ```
   
   ```java
   Object obj2;
   if(true)
   	obj2 = new Integer(1);
   else
   	obj2 = new Double(2.0);
   System.out.println(obj2);//1
   //输出什么 1   分别计算
   ```
   
   ```java
   //示例一
           Integer i1 = new Integer(127);
           Integer i2 = new Integer(127);
           System.out.println(i1 == i2);//F
   //示例二
           Integer i3 = new Integer(128);
           Integer i4 = new Integer(128);
           System.out.println(i3 == i4);//F
   
   //示例三
           Integer i5 = 127;//底层Integer.valueOf(127)
           Integer i6 = 127;//-128~127
           System.out.println(i5 == i6); //T
   //示例四
           Integer i7 = 128;
           Integer i8 = 128;
           System.out.println(i7 == i8);//F
   //示例五
           Integer i9 = 127; //Integer.valueOf(127)
           Integer i10 = new Integer(127);
           System.out.println(i9 == i10);//F
   //示例六
           Integer i11=127;
           int i12=127;
   //只有有基本数据类型，判断的是
   //值是否相同
           System.out.println(i11==i12); //T
   //示例七
           Integer i13=128;
           int i14=128;
           System.out.println(i13==i14);//T
   ```
   

## 二、String类

1. String对象用于保存字符串，也就是一组字符序列

2. 字符串的字符使用Unicode字符编码，一个字符(不区分字母还是汉字)，占两个字节

3. String类有很多构造器，构造器的重载

4. 常用的有

   + String  s1 = new String();
   + String  s2 = new String(String original);
   + String  s3 = new String(char[] a);
   + String  s4 =  new String(char[] a,int startIndex,int count)
   + String s5 = new String(byte[] b)

5. String 类实现了接口 Serializable(String 可以串行化:可以在网络传输)
   String 类实现了接口 Comparable(String 对象可以比较大小)

6. String 是final 类，不能被其他的类继承

7. String 有属性 private final char value[]; 用于存放字符串内容

8. 注意，value是一个final类型，意味着不可被修改，即不可指向新的地址

   基本数据类型是值对应，final就是值不可修改，但是char数组是引用类型，引用类型是地址不可修改(好像类似于对象不可修改？)

### 1. 创建String对象

1. 直接赋值```String s = "hsp";```

2. 调用构造器```String s2 = new String("hsp");```

   区别在于：方式一先看常量池里是否有"hsp"数据空间，如果有，指向；如果没有，就先创建再指向。s最终指向是**常量池的空间地址**

   方式二先在堆中创建按空间，里面有value属性，指向常量池的hsp空间。如果常量池没有"hsp"，就重现创建，有就通过value指向，最终指向的是**堆中的地址空间**

<img src="/ipic/1650442178793.png" alt="1650442178793" style="zoom:67%;" />

代码理解

```java
String a = "str"; //a 指向 常量池的 “hsp”
String b =new String("str");//b 指向堆中对象
System.out.println(a.equals(b)); //T 此处比较的是字符串的内容
System.out.println(a==b); //F 此处比较的是两个对象指向地址是否一样
//b.intern() 方法返回常量池地址
System.out.println(a==b.intern()); //T intern返回一个字符串，内容与此字符串相同，但一定是来自唯一字符串池(返回池中的，和字符串内容相同的地址)
System.out.println(b==b.intern()); //F
```

```java
Person p1 = new Person();
p1.name = "hspedu";
Person p2 = new Person();
p2.name = "hspedu";
System.out.println(p1.name.equals(p2.name));//比较内容: True
System.out.println(p1.name == p2.name);  //T此处比较地址，p1.name和p2.name都是直接指向常量池中的hspedu，地址相同
System.out.println(p1.name == "hspedu");   //T
String s1 = new String("bcde");
String s2 = new String("bcde");
System.out.println(s1==s2); //False  指向不同的对象
```

```java
String a = "hello"; //创建 a对象
String b = "abc";//创建 b对象
//调试，进入源码
//1. 先 创建一个 StringBuilder sb = StringBuilder()
//2. 执行  sb.append("hello");
//3. sb.append("abc");
//4. String c= sb.toString()
//最后其实是 c 指向堆中的对象(String) value[] -> 池中 "helloabc"
String c = a + b;
String d = "helloabc";
System.out.println(c == d);//真还是假? 是false
String e = "hello" + "abc";//直接看池， e指向常量池
System.out.println(d == e);//真还是假? 是true
```

### 2. String类常见的方法

| 方法             | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| equals           | 比较内容是否相同，区分大小写                                 |
| equalsIgnoreCase | 忽略大小写的判断内容是否相等                                 |
| length           | 获取字符的个数，字符串的长度                                 |
| indexOf          | 字符对象第一次出现对应的索引，索引从 0 开始，如果找不到，返回-1 |
| lastIndexOf      | 字符最后一次出现的索引，索引从 0 开始，如果找不到，返回-1    |
| substring        | 截取指定范围的子串                                           |
| trim             | 去前后空格                                                   |
| charAt           | 获取某索引处的字符串，不能使用Str[index]这种方式             |
| concat           | 拼接字符串                                                   |
| compareTo        | 字符串的大小，比较两个字符串之间首个不同的字符对应的ASCII值  |
| format           | 格式字符串，                                                 |

```java
//1. equals 比较内容是否相同，区分大小写
String str1 = "hello";
String str2 = "Hello";
System.out.println(str1.equals(str2));//F
// 2.equalsIgnoreCase 忽略大小写的判断内容是否相等
String username = "johN";
if ("john".equalsIgnoreCase(username)) {
    System.out.println("Success!");//T
} else {
    System.out.println("Failure!");
}
//3.length 获取字符的个数，字符串的长度
System.out.println("韩顺平".length());//3
// 4.indexOf 获取字符在字符串对象中第一次出现的索引，索引从 0 开始，如果找不到，返回-1
String s1 = "wer@terwe@g";
int index = s1.indexOf('@');
System.out.println(index);//3
System.out.println("weIndex=" + s1.indexOf("r@"));//2 找到匹配的字符串后从返回开头字符的位置
// 5.lastIndexOf 获取字符在字符串中最后一次出现的索引，索引从 0 开始，如果找不到，返回-1
s1 = "wer@terwe@g@";
index = s1.lastIndexOf('@');
System.out.println(index);//11
System.out.println("ter 的位置=" + s1.lastIndexOf("ter"));//4
// 6.substring 截取指定范围的子串
String name = "hello,张三"; //下面 name.substring(6) 从索引 6 开始截取后面所有的内容
System.out.println(name.substring(6));//截取后面的字符
//name.substring(0,5)表示从索引 0 开始截取，截取到索引 5-1=4 位置
System.out.println(name.substring(2,5));//llo

String sa = "atd";
String sb = "asd";
System.out.println(sa.compareTo(sb));
String name = "llll";
char sex = '男';
String formatStr = "我的姓名是: %s,我的性别是：%c";
String info2 = String.format(formatStr,name,sex);
System.out.println(info2);
```

### 3. StringBuffer

```java
//1. 创建一个大小为16的char[] ，用于存放字符内容
StringBuffer stringBuffer = new StringBuffer();
//2. 通过构造器指定char[] 大小
StringBuffer stringBuffer1 = new StringBuffer(100);
//3. 通过给一个String创建StringBuffer，char[] 大小就是String.length + 16
StringBuffer stringBuffer = new StringBuffer();
```



> String 保存的是字符串常量，里面的值不能更改，每次String类的更新实际上就是更改地址，效率较低

> StringBuffer保存的是字符串变量，里面的值可以更改，每次StringBuffer的更新实际上可以更新内容，不用每次更新地址//char[] value;   这个放在堆

```java
//String --> StringBuffer
String str1 = "hello";
String str2 = "hi";
//1. 使用构造器，但是对原数据没影响，返回的才是转换的
StringBuffer stringBuffer = new StringBuffer(str1);
System.out.println(stringBuffer);
//2. 使用append
StringBuffer stringBuffer1 = new StringBuffer();
stringBuffer1 = stringBuffer1.append(str2);
System.out.println(stringBuffer1);

//StringBuffer --> String
StringBuffer stringBuffer3 = new StringBuffer("story");
//1. 使用StringBuffer提供的toString方法
String str3 = stringBuffer3.toString();
System.out.println(str3);
//2. 使用构造器
String str4 = new String(stringBuffer3);
System.out.println(str4);
```

### 4. StringBuffer常用方法

| 方法                              | 作用 |
| --------------------------------- | ---- |
| append                            | 增   |
| delete(index1, index2)            | 删   |
| replace(index1, index2, "字符串") | 改   |
| indexOf("字符串")                 | 查   |

```java
String str = null;// ok
StringBuffer sb = new StringBuffer(); //ok
sb.append(str);//需要看源码 , 底层调用的是 AbstractStringBuilder 的 appendNull
System.out.println(sb.length());//4
System.out.println(sb);//null
//下面的构造器，会抛出 NullpointerException
StringBuffer sb1 = new StringBuffer(str);//看底层源码 super(str.length() + 16);
System.out.println(sb1);
```

### 5. StringBuilder

> 可变字符序列，方法基本和StringBuffer，是StringBuffer的简易替换，比StringBuffer快，但是用于单线程

> StringBuilder上的主要操作时append和insert，可重载这些方法用于接收任意类型数据

### 6. 比较

+ String：不可变字符序列，效率低但复用率高
+ StringBuffer：可变字符序列，效率高(增删)、线程安全
+ StringBuilder：可变字符序列、效率最高，但线程不安全

> ```string s = "a"; s += "b"//实际上原来的"a"已经被丢弃了，然后又产生了新的字符产``` 
>
> 如果多次执行改变字符串内容的操作，会导致大量副本字符转对象留在内存中，降低效率
>
> 结论：如果我们对String做大量修改，就不要使用String

+ 效率测试  ```StringBuilder > StringBuffer > String```

  ```java
  long startTime = 0L;
  long endTime = 0L;
  StringBuffer buffer = new StringBuffer("");
  startTime = System.currentTimeMillis();
  for (int i = 0; i < 80000; i++) {//StringBuffer 拼接 20000 次
      buffer.append(String.valueOf(i));
  }
  endTime = System.currentTimeMillis();
  System.out.println("StringBuffer 的执行时间：" + (endTime - startTime));
  StringBuilder builder = new StringBuilder("");
  startTime = System.currentTimeMillis();
  for (int i = 0; i < 80000; i++) {//StringBuilder 拼接 20000 次
      builder.append(String.valueOf(i));
  }
  endTime = System.currentTimeMillis();
  System.out.println("StringBuilder 的执行时间：" + (endTime - startTime));
  String text = "";
  startTime = System.currentTimeMillis();
  for (int i = 0; i < 80000; i++) {//String 拼接 20000
      text = text + i;
  }
  endTime = System.currentTimeMillis();
  System.out.println("String 的执行时间：" + (endTime - startTime));
  ```

+ 结论

  + 字符串存在大量修改操作，一般使用StringBuffer或StringBuilder
  + 字符串存在大量修改操作，且为单线程，使用StringBuilder
  + 字符串存在大量修改操作，且为多线程，使用StringBuffer
  + 很少修改，被多个对象引用，使用String，比如配置信息

## 三、Math 类

Math 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数

| 方法     | 作用                              |
| -------- | --------------------------------- |
| abs      | 绝对值                            |
| pow(a,b) | a的b次方                          |
| ceil     | 向上取整(返回>= 该参数的最小整数) |
| floor    | 向下取整(返回<= 该参数的最大整数) |
| round    | 四舍五入                          |
| sqrt     | 求开方                            |
| random   | 求随机数(0<= x < 1)               |
| min/max  | 最小/大值                         |

## 四、Arrays

| 方法         | 作用                         |
| ------------ | ---------------------------- |
| toString     | 返回数组的字符串形式         |
| sort         | 自然排序和定制排序           |
| binarySearch | 通过二分法查找(必须是排好序) |
| copyOf       | 数组元素的复制               |
| fill         | 数组元素的填充               |
| equals       | 比较数组内容是否完全一致     |
| asList       | 转换成list                   |

```java
Integer[] arr = {1,2,90,234,879};
//使用binarySearch的话必须是有序的
//如果不存在该元素，则return -(low + 1);low是指假设存在时所处的位置
int index = Arrays.binarySearch(arr,23);
System.out.println("index = " + index);// index = -3
//从arr数组中，拷贝arr.length个元素到newArr数组中
//如果拷贝长度 > arr.length就在新数组的后面增加 null
//如果拷贝长度 < 0 就抛出异常 NegativeArraySizeException
Integer[] newArr = Arrays.copyOf(arr,arr.length-5);
System.out.println(Arrays.toString(newArr));//[]
//fill数组元素的填充
Integer[] num = new Integer[]{1,2,3,5,93,98};
//使用99 去填充num数组，相当于是全部替换
Arrays.fill(num,99);
System.out.println(Arrays.toString(num));
//asList 将一组值，转换成List
List asList = Arrays.asList(1,2,3,5,93,98);
System.out.println("asList = " + asList);
```

```java
//练习
/*案例：自定义 Book 类，里面包含 name 和 price，按 price 排序(从大到小)。
    要求使用两种方式排序 , 有一个 Book[] books = 4 本书对象.
    使用前面学习过的传递 实现 Comparator 接口匿名内部类，也称为定制排序。
    可以按照 price (1)从大到小 (2)从小到大 (3) 按照书名长度从大到小 */
    public static void main(String[] args) {
        Book[] books = new Book[4];
        books[0] = new Book("红楼梦", 100);
        books[1] = new Book("金瓶梅新", 90);
        books[2] = new Book("青年文摘 20 年", 5);
        books[3] = new Book("java 从入门到放弃~", 300);

//        //(1)price 从大到小
//        Arrays.sort(books, new Comparator() {
//            @Override
//            public int compare(Object o1, Object o2) {
//                Book book1 =(Book) o1;
//                Book book2 =(Book) o2;
//                double priceVal = book1.getPrice() - book2.getPrice();
//                if (priceVal > 0){
//                    return -1;
//                }else if (priceVal < 0){
//                    return 1;
//                }else {
//                    return 0;
//                }
//            }
//
//        });
        //(2)price 从小到大
//        Arrays.sort(books, new Comparator() {
//            @Override
//            public int compare(Object o1, Object o2) {
//                Book book1 =(Book) o1;
//                Book book2 =(Book) o2;
//                double priceVal = book1.getPrice() - book2.getPrice();
//                if (priceVal > 0){
//                    return 1;
//                }else if (priceVal < 0){
//                    return -1;
//                }else {
//                    return 0;
//                }
//            }
//        });
        //(3) 按照书名长度从大到小
        Arrays.sort(books, new Comparator() {
            @Override
            public int compare(Object o1, Object o2) {
                Book book1 =(Book) o1;
                Book book2 =(Book) o2;
                return book2.getName().length() - book2.getName().length();
            }
        });
        //这个练习包含了内部类 + 自定义排序
        System.out.println(Arrays.toString(books));
    }
}
class Book{
    private String name;
    private double price;
    public Book(String name, double price) {
        this.name = name;
        this.price = price;
    }
    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public double getPrice() {return price;}
    public void setPrice(double price) {this.price = price;}
```

## 五、System类

+ exit 退出当前程序

+ arraycopy：复制数组元素，适合底层调用，一般使用Arrays.copyOf完成复制数组

  ```int[] src = {1,2,3};  int[] dest = new int[3]; System.arraycopy(src,0,dest,0,3)```

  arraycopy(源数组,开始拷贝位置索引,目标数组,拷贝目标位置索引,拷贝数量)

+ currentTimeMillens：返回当前时间距离1970-1-1的毫秒数
+ gc：运行垃圾回收机制System.gc();

## 六、BigInteger和BigDecimal

+ BigInteger适合保存比较大的整数
  + add   加
  + subtract   减
  + multiply   乘
  + divide   除
+ BigDecimal适合保存精度更高的浮点数(小数)

```java
BigInteger bigInteger = new BigInteger("2378888889999999");
BigInteger bigInteger1 = new BigInteger("1000");
BigInteger add = bigInteger.add(bigInteger1);
System.out.println(add);
BigInteger subtract = bigInteger.subtract(bigInteger1);
System.out.println(subtract);
BigInteger multiply = bigInteger.multiply(bigInteger1);
System.out.println(multiply);
BigInteger divide = bigInteger.divide(bigInteger1);
System.out.println(divide);
//BigDecimal使用divide函数时，有可能会因为结果时无限循环小数而报ArithmeticException错
BigDecimal bigDecimal = new BigDecimal("2122.1111111111111111");
BigDecimal bigDecimal1 = new BigDecimal("3");
BigDecimal divideD = bigDecimal.divide(bigDecimal1);
//可以加上,BigDecimal.ROUND_CEILING来保留分子小数位的小数
BigDecimal divideD = bigDecimal.divide(bigDecimal1,BigDecimal.ROUND_CEILING);
System.out.println(divideD);
```

## 七、日期类

### 第一类时间类

+ Date类：精确到毫秒，代表特定的瞬间
+ SimpleDateFormat：格式和解析日期的类，允许格式化(日期->文本)、解析(文本->日期)和规范化

```java
Date d1 = new Date();//获取当前系统时间
//这里的date时属于util类
//默认输出格式是国外的，一般需要进行转化
Date d2 = new Date(4);//通过毫秒数得到时间
System.out.println(d2);
System.out.println("当前时间为：" + d1);
SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 hh:mm:ss E");
String format = sdf.format(d1);
System.out.println("当前日期为：" + format);
//y：年
//M：年中的月份  
//W：月中的周份 w：年中的周数 E星期
//d：月中的天数 D年中的天数
//H：日中的小时
//m：时中的分
//s：分中的秒
//S：毫秒
String s= "1999年2月21日 10:23:23 星期二";
Date parse = sdf.parse(s);
System.out.println(sdf.format(parse));
//把String->Date,使用的sdf格式需要和你给的String的格式一样，否则会报ParseException错
```

### 第二类时间类

+ Calendar类：抽象类，构造器是private
+ 可以通过getInstance()来获取实例

```java
Calendar c = Calendar.getInstance();
//创建日历类对象比较简单，自由
System.out.println("c=" + c);
//2.获取日历对象的某个日历字段
System.out.println("年：" + c.get(Calendar.YEAR));
// 这里为什么要 + 1, 因为 Calendar 返回月时候，是按照 0 开始编号
//如果我们需要按照 24 小时进制来获取时间， Calendar.HOUR ==改成=> Calendar.HOUR_OF_DAY
System.out.println("月：" + (c.get(Calendar.MONTH) + 1));
System.out.println("日：" + c.get(Calendar.DAY_OF_MONTH));
System.out.println("小时：" + c.get(Calendar.HOUR));
System.out.println("分钟：" + c.get(Calendar.MINUTE));
System.out.println("秒：" + c.get(Calendar.SECOND));
//Calender 没有专门的格式化方法，所以需要程序员自己来组合显示
System.out.println(c.get(Calendar.YEAR) + "-"
                   + (c.get(Calendar.MONTH) + 1) + "-"
                   + c.get(Calendar.DAY_OF_MONTH) + " "
                   + c.get(Calendar.HOUR_OF_DAY) + ":"
                   + c.get(Calendar.MINUTE) + ":"
                   + c.get(Calendar.SECOND) );
```

### 第三类时间类

> 前面两代日期类，jdk1.0包含了util.Date类，但大多数方法在1.1引入
>
> Calendar之后被弃用了，因为1. 日期可变2. 偏移性，Date中年份从1900开始，月份从0开始
>
> 3. 格式化只对Date有用 4. 线程不安全，不能处理闰秒

+ LocalDate(日期/年月日)、LocalTime(时间/时分秒)、LocalDateTime(日期时间/年月日时分秒)在jdk8加入

```java
//使用now()，返回表示当前日期时间的对象
LocalDateTime ldt = LocalDateTime.now();//LocalDate.now();//LocalTime.now();
System.out.println(ldt);
System.out.println("年 = " + ldt.getYear());
System.out.println("月 = " + ldt.getMonth());
System.out.println("月 = " + ldt.getMonthValue());
System.out.println("日=" + ldt.getDayOfMonth());
System.out.println("时=" + ldt.getHour());
System.out.println("分=" + ldt.getMinute());
System.out.println("秒=" + ldt.getSecond());
//使用plus和minus方法来对当前时间进行加减
LocalDateTime localDateTime = ldt.plusDays(2333);
//创建 DateTimeFormatter对象，格式日期类
DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy年MM月dd日 hh:mm:ss E");
System.out.println("2333天后是：" + dateTimeFormatter.format(localDateTime));
LocalDateTime localDateTime2 = ldt.minusMinutes(3456); 
System.out.println("3456 分钟前 日期=" + dateTimeFormatter.format(localDateTime2));
```

+ Instant 时间戳，类似于Date，提供了一系列和Date类转换的方法

  Instant -> Date: Date date = Date.from(instant);

  Date -> Instant: Instant instant = date.toInstant();