---
title: java笔记shk07
date: 2021-6-7
tags:
 - java
categories:
 - 学习笔记
---

# day_14

## static



1. static:静态的

2. static可以用来修饰：属性、方法、代码块、内部类

3. 使用static修饰属性：静态变量（或类变量）
   + 属性，按是否使用static修饰，又分为：静态属性  vs 非静态属性(实例变量)
   + 实例变量：我们创建了类的多个对象，每个对象都独立的拥有一套类中的非静态属性。当修改其中一个对象中的非静态属性时，不会导致其他对象中同样的属性值的修改。
   + 静态变量：我们创建了类的多个对象，多个对象共享同一个静态变量。当通过某一个对象修改静态变量时，会导致其他对象调用此静态变量时，是修改过了的。

4. static修饰属性的其他说明：
   + 静态变量随着类的加载而加载。可以通过"类.静态变量"的方式进行调用
   + 静态变量的加载要早于对象的创建。
   + 由于类只会加载一次，则静态变量在内存中也只会存在一份：存在方法区的静态域中。

|      | 类变量 | 实例变量 |
| ---- | ------ | -------- |
| 类   | yes    | no       |
| 对象 | yes    | yes      |

5. 静态属性举例：System.out; Math.PI;

6. 使用static修饰方法：静态方法

   + 随着类的加载而加载，可以通过"类.静态方法"的方式进行调用

   |      | 静态方法 | 非静态方法 |
   | ---- | -------- | ---------- |
   | 类   | yes      | no         |
   | 对象 | yes      | yes        |

   + 静态方法中，只能调用静态的方法或属性
   + 非静态方法中，既可以调用非静态的方法或属性，也可以调用静态的方法或属性



6. static注意点：
   + 在静态的方法内，不能使用this关键字、super关键字
   + 关于静态属性和静态方法的使用，大家都从生命周期的角度去理解。

> 属性是可以被多个对象所共享的，不会随着对象的不同而不同的。
>
> 类中的常量也常常声明为static
>
> 操作静态属性的方法，通常设置为static的
>
> 工具类中的方法，习惯上声明为static的。 比如：Math、Arrays、Collections

## 单例设计模式

1. 所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例。

2. 如何实现？

   饿汉式     以及    懒汉式

3. 饿汉式：

   好处：饿汉式是现场安全的

   坏处：对象加载时间过长

   懒汉式：

   好处：延迟对象的创建

   目前坏处：线程不安全（到多线程内容时，再修改）

```
class Bank{
	//1.私有化类的构造器
	private Bank(){	
	}
	//2.内部创建类的对象
	//4.要求此对象也必须声明为静态的
	private static Bank instance = new Bank();
	//3.提供公共的静态的方法，返回类的对象
	public static Bank getInstance(){
		return instance;
	}
}

懒汉式
public class SingletonTest2 {
	public static void main(String[] args) {
		Order order1 = Order.getInstance();
		Order order2 = Order.getInstance();
		System.out.println(order1 == order2);
	}
}
class Order{
	//1.私有化类的构造器
	private Order(){
	}
	//2.声明当前类对象，没有初始化
	//4.此对象也必须声明为static的
	private static Order instance = null;
	//3.声明public、static的返回当前类对象的方法
	public static Order getInstance(){
		if(instance == null){
			instance = new Order();
		}
		return instance;
	}
}
```



## 类的成员之四：代码块（或初始化块）

1. 代码块的作用：用来初始化类、对象

2. 代码块如果有修饰的话，只能使用**static**

3. 分类：静态代码块  vs 非静态代码块



4. 静态代码块
   + 内部可以有输出语句
   + 随着**类的加载**而执行,而且只执行一次
   + 作用：初始化类的信息
   + 如果一个类中定义了多个静态代码块，则按照声明的先后顺序执行
   + **静态代码块的执行要优先于非静态代码块的执行**
   + 静态代码块内只能调用静态的属性、静态的方法，不能调用非静态的结构

5. 非静态代码块
   + 内部可以有输出语句
   + 随着**对象的创建**而执行
   + 每创建一个对象，就执行一次非静态代码块
   + 作用：可以在创建对象时，对对象的属性等进行初始化
   + 如果一个类中定义了多个非静态代码块，则按照声明的先后顺序执行
   + **非静态代码块内可以调用静态的属性、静态的方法，或非静态的属性、非静态的方法**

## final

final:最终的

1. final可以用来修饰的结构：类、方法、变量

2. final 用来修饰一个类:此类不能被其他类所继承。

   比如：String类、System类、StringBuffer类

3. final 用来修饰方法：表明此方法不可以被重写

   比如：Object类中getClass();

4. final 用来修饰变量：此时的"变量"就称为是一个常量

+ final修饰属性：可以考虑赋值的位置有：显式初始化、代码块中初始化、构造器中初始化

+ final修饰局部变量：尤其是使用final修饰形参时，表明此形参是一个常量。当我们调用此方法时，给常量形参赋一个实参。一旦赋值

以后，就只能在方法体内使用此形参，但不能进行重新赋值。

static final 用来修饰属性：全局常量