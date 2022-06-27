---
title: java笔记hsp01
date: 2021-6-15
tags:
 - java
categories:
 - 学习笔记
---

#  枚举和注解 

## 枚举

+ 枚举对应英文(enumeration, 简写 enum)
+ 枚举是一组常量的集合。
+ 可以这里理解：枚举属于一种特殊的类，里面只包含一组有限的特定的对象。 

### 枚举的二种实现方式

1. 自定义类实现枚举 

2. 使用 enum 关键字实现枚 

#### 自定义类实现枚举  

1. 不需要提供setXxx方法，因为枚举类对象值通常为只读

2. 对枚举对象/属性使用final + static 共同修饰，实现底层优化

3. 枚举对象名通常使用全部大写，变量的命名规范

4. 枚举对象根据需要，也可以有多个属性

   ```java
   public class Enumeration02 {
       public static void main(String[] args) {
           System.out.println(Season.SPRING);
       }
   }
   class Season{
       private String name;
       private String desc;
       public static final Season SPRING = new Season("春天","温暖");
       public static final Season SUMMER = new Season("夏天", "炎热");
       public static final Season AUTUMN = new Season("秋天", "凉爽");
       public static final Season WINTER = new Season("冬天", "寒冷");
   //如何使用：
   //1. 将构造器私有化，防止直接new
   //2. 将set方法去掉，防止属性被修改
   //3. 在Season内，直接创建固定的对象
   //4. 优化，可以加入final修饰符
       private Season(String name, String desc) {
           this.name = name;
           this.desc = desc;
       }
       public String getName() {
           return name;
       }
       public String getDesc() {
           return desc;
       }
       @Override
       public String toString() {
           return "Season{" +
                   "name='" + name + '\'' +
                   ", desc='" + desc + '\'' +
                   '}';
       }
   }
   ```

    **小结**：进行自定义类实现枚举，有如下特点

   +  构造器私有化 
   + 本类内部创建一组对象[四个,春夏秋冬] 
   + 对外暴露对象（通过为对象添加 public final static 修饰符）
   + 可以提供 get 方法，但是不要提供 set 

#### 使用 enum 关键字实现枚

1.  当我们使用 enum 关键字开发一个枚举类时，默认会继承**Enum**类, 而且是一个**fina**l类

   > 证明：来到该类所在的文件夹，cmd，输入javap Season2.class，回车，就会显示编译自xxx，extends xxx

2. 传统的 public static final Season2 SPRING = new Season2("春天", "温暖"); 简化成 SPRING("春天", "温暖"),即，常量名(实参列表)

3. 如果使用无参构造器创建枚举对象，则实参列表和小括号都可以省略

4. 当有多个枚举对象时，使用 **,** 间隔，最后有一个;结尾

   > 在分号之前可以加上What()，表示此时调用的是无参构造器，甚至括号可以不写

5. **枚举对象必须放在枚举类的行首** 

   ```java
   enum  Season2{
    //    public static final Season2 SPRING = new Season2("春天","温暖");
    //    public static final Season2 SUMMER = new Season2("夏天", "炎热");
    //    public static final Season2 AUTUMN = new Season2("秋天", "凉爽");
    //    public static final Season2 WINTER = new Season2("冬天", "寒冷");
    //如果使用关键字enum替代class
    //2. public static final Season2 SPRING = new Season2("春天","温暖")
    // 直接使用SPRING("春天","温暖")替代
    //常量名(实参列表)
    //3. 如果有多个常量/对象, 使用, 间隔，最后使用; 结尾
    //4. 如果使用enum，来实现枚举，要求将定义常量对象，写在前面
    SPRING("春天","温暖++"),SUMMER("夏天", "炎热"),AUTUMN ("秋天", "凉爽"),WINTER("冬天", "寒冷"),What();
    private String name;
    private String desc;
    private Season2(){}
    private Season2(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }
    //还有无参构造器，对应的get方法
   }
   ```

### enum相关方法

> 使用关键字 **enum** 时，会隐式继承**Enum类**, 这样我们就可以使用Enum类相关的方法 

| 方法名            | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| valueOf           | 传递枚举类型的Class对象和枚举类常量名给静态方法valueOf<br />会得到与参数陪陪的枚举常量 |
| toString          | 得到当前枚举常量的名称                                       |
| equals            | 几乎等同于"=="，它的存在是为了在Set，List和Map中使用，equals()是不可变的 |
| hashCode          | Enum实现了hashCode()和equals()保持一致，也是不可变           |
| getDeclaringClass | 得到枚举常量所属枚举类型的Class对象。用于判断两个枚举类常量是否同属于一个枚举类类型 |
| name              | 得到当前枚举常量的名称。建议优先使用toString()               |
| ordinal           | 得到当前枚举常量的次序                                       |
| compareTo         | 枚举类型实现了comparable接口，可以比较两个枚举常量的大小(按照声明的顺序排序) |
| clone             | 枚举类型不能Clone，防止子类实现clone方法，Enum实现了一个仅抛出一个CloneNotSupportedException异常的不变Clone()。 |

```java
public class EnumMethod {
    public static void main(String[] args) {
        //使用Season2枚举类，演示各种方法
        Season2 automn = Season2.AUTUMN;
        //输出，枚举对象的名字
        System.out.println(automn.name());
        //ordinal()输出的是该枚举类的次序/编号，从0开始
        System.out.println(automn.ordinal());
        //values,含有定义的所有枚举类对象
        System.out.println("====取出枚举类对象(增强for循环)====");
        Season2[] values = Season2.values();
        for (Season2 season:values){
            //增强for循环，依次从values数组中取得一个数字，然后依次赋给season
            System.out.println("Season: " + season);
        }
        //注意，由于Season2中枚举类中有个What(),所以最后又出来一个name和desc都为null的枚举类对象
        //valueOf: 将字符串转换成枚举对象，要求字符串必须为已有的常量名，否则报错
        Season2 autumn1 = Season2.valueOf("AUTUMN");
        System.out.println("autumn1" + autumn1);
        System.out.println(automn == autumn1);
        //compareTo:比较两个枚举常量，比较的就是编号，就是Season2.SPRING减Season2.SUMMER
        System.out.println(Season2.SPRING.compareTo(Season2.WINTER));
    }
}
```

### enum 实现接口 

1. 使用 enum 关键字后，不可再继承其他类，因为enum会**隐式继承 Enum**，而Java是单继承机制。

2. enum实现的枚举类依然是个类，可以实现接口

   > enum 类名 implements 接口 1，接口 2{} 

```java
public class EnumDetail {
    public static void main(String[] args) {
        Music music = Music.CLASSICMUSIC;
        music.playing();
    }
}
class A{
}
//此处报错，因为使用enum关键字后，不可再继承其他类，因为enum会隐式继承 Enum，而Java是单继承机制
//enum Season3 extends A{
//}
interface IPlaying{
    public void playing();
}
enum Music implements IPlaying{
    CLASSICMUSIC,NORMALMUSIC,;
    @Override
    public void playing() {
        System.out.println("播放好听的音乐");
    }
}
```

## 注解

+ 注解(Annotation)也被称为元数据(Metadata)，用于修饰解释 包、类、方法、属性、构造器、局部变量等数据信息
+ 注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入在代码中的补充信息。
+ 在 JavaSE 中，注解用于标记过时的功能，忽略警告等
  在 JavaEE 中，注解用来配置应用程序的任何切面，代替 java EE 旧版中所遗留的繁冗代码和 XML 配置等。 

### 注解(Annotation)介绍

1. 使用 Annotation 时要在其前面增加 @ 符号, 用于修饰它支持的程序元素

2. 三个基本的 Annotation

   + @Override: 限定某个方法，用于重写父类方法, 该注解只能用于方法

     如果你写了@Override注解，则编译器就会去检查你是否真的重写了父类方法，如果的确重写了，则编译通过，如果没有构成重写，则报错

     如果你查看@Override的源码，就会发现
     
     ```java
     @Target(ElementType.METHOD)              // 此处表示，只能用来修饰方法
     @Retention(RetentionPolicy.SOURCE)
     public @interface Override {}
     ```
     
     这里的@interface不是interface，而是表示定义一个注解类
     
   + @Deprecated: 用于表示某个程序元素(类, 方法，字段，包，参数等)已过时

     过时不表示不能用，而是表示不推荐使用

     被修饰过的方法，参数等，被使用就会有删除线在
   
     通常用作新旧版本的升级和过渡

   + @SuppressWarnings: 抑制编译器警告

     当我们不想看到警告时，使用@SuppressWarnings注解来抑制警告信息

     在{""}中，可以写入你希望抑制(不显示)警告信息
   
     ```java
     @SuppressWarnings("")
     //all，抑制所有警告
     //生成@SuppressWarnings时，直接点击左侧黄色提示，就可以选择
     ```
   
     <img src="/ipic/1647312324365.png" alt="1647312324365" style="zoom: 80%;" />
   
     作用范围和放置位置有关，比如放在main方法，作用范围就是main(一般来说都是放在类上)
   
   + 其他：
   
     @Target是元注解，意思是注解的注解，在我理解来说，是注解的组成部分，用于修饰注解
     
     | 备选 | 范围 |
     | ---- | ---- |
     | CONSTRUCTOR | 用于描述构造器 |
| FIELD | 用于描述域 |
| LOCAL_VARIABLE | 用于描述局部变量 |
| METHOD | 用于描述方法 |
| PACKAGE | 用于描述包 |
| PARAMETER | 用于描述参数 |
| TYPE | 用于描述类、接口(包括注解类型) 或enum声明至运行时。所以我们可以通过反射去获取注解信息 |
     
     

### 元注解

| 元注解 | 作用 |
| ------ | ---- |
| Retention | 指定注解的作用范围，三种 SOURCE(编译器使用后，直接丢弃),<br />CLASS(把注解记录在class文件中, JVM 不会保留注解),<br />RUNTIME(把注解记录在class文件中, JVM会保留注解. 可以通过反射获取该注解) |
| Target | 指定注解可以在哪些地方使用 |
| Documented | 指定被修饰的注解被javadoc工具提取成文档时，可以看到该注解 |
| Inherited | 子类会继承父类注解 |

