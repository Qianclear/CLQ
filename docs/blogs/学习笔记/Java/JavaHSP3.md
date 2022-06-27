---
title: java笔记hsp03
date: 2021-6-17
tags:
 - java
categories:
 - 学习笔记
---

# 集合

## 一、集合的理解和好处

1. 数组

   + 长度一开始必须指定，而且一旦指定，就不能更改

   + 保存的必须是同一类型的元素

   + 使用数组进行增加/删除元素的示意代码比较麻烦

     ```java
     //Person数组扩容示意代码
     Person[] pers = new Person[1];//大小是1
     per[0] = new Person();
     //增加新的Person对象
     Person[] per2 = new Person[pers.length + 1];//新创建数组
     for(){}//拷贝pers数组的元素到pers2
     pers2[pers2.length-1] = new Person();//添加新的对象
     ```

2. 集合

   + 可以动态保存任意多个对象，使用方便
   + 提供了一系列方便的操作对象的方法：add、remove、set、get等
   + 使用集合添加，删除新元素的示意代码 简洁

## 二、集合的框架体系

集合主要是两组(单列集合，双列集合)

Collection 接口有两个重要的子接口 List Set , 他们的实现子类都是单列集合

Map 接口的实现子类 是双列集合，存放的 K-V

+ Collection
+ Map

<img src="/ipic/1652258954411.png" alt="1652258954411" style="zoom:67%;" />

<img src="/ipic/1652268004558.png" alt="1652268004558" style="zoom:67%;" />

### 1. Collection接口和常用方法

特点：

+ collection实现子类可以存放多个元素，每个元素可以是Object

+ 有些Collection的实现类可以存放重复元素，有些不可以

  有些是有序的(List)，有些不是有序的(Set)

+ Collection接口没有直接实现的子类，是通过子接口Set和List来实现

方法：

| 方法名      | 作用                 | 实例                                         |
| ----------- | -------------------- | -------------------------------------------- |
| add         | 添加单个元素         | list.add("Elysia");                          |
| addAll      | 添加多个元素         | list.addAll(list1);                          |
| remove      | 删除指定元素         | list.remove(1);<br />list.add(true);         |
| removeAll   | 删除多个元素         | list.removeAll(list1);                       |
| contains    | 查看某元素是否存在   | System.out.println(list.contains("Elysia")); |
| size        | 获取元素个数         | System.out.println(list.size());             |
| isEmpty     | 判断是否为空         | System.out.println(list.isEmpty());          |
| clear       | 清空                 | list.clear();                                |
| containsAll | 查找多个元素是否存在 | System.out.println(list.containsAll(list1)); |

```java
List list = new ArrayList();
//add 添加单个元素
list.add("Elysia");
list.add(10);//list.add(new Integer(10))
list.add(true);
System.out.println("list = " + list);
//remove:删除指定元素
list.remove(1);//删除第二个元素
System.out.println("list = " + list);
//contains:查看某元素是否存在
System.out.println(list.contains("Elysia"));
//size获取元素个数
System.out.println(list.size());
//isEmpty:判断是否为空
System.out.println(list.isEmpty());
//clear清空
list.clear();
System.out.println("list = " + list);
//addall添加多个元素
ArrayList list1 = new ArrayList();
list1.add("Kamisato Ayaka");
list1.add("Ganyu");
list.addAll(list1);
System.out.println("list = "+ list1);
//containsAll：查找多个元素是否存在
System.out.println(list.containsAll(list1));//T
//removeAll:删除多个元素
list.removeAll(list1);
list.add("running sun");
System.out.println(list);
```

### 2. 遍历

#### Iterator

+ Iterator对象为迭代器，实现了Collection接口的集合类都有该方法，用来返回一个实现了Iterator接口的对象，即可以返回一个迭代器
+ Iterator仅用于遍历集合，Iterator本身不存放对象
+ 使用next()方法返回下一个元素时必须使用iterator.hasNext()方法进行检测，如果不调用且下一条无效，就会报错```NoSuchElementException```

```java
Collection col = new ArrayList();
col.add(new Book_("BengHuai3", "Elysia", 10.1));
col.add(new Book_("GenShin", "Paimon", 5.1));
col.add(new Book_("Zero", "Eight", 34.6));
//遍历
//1. 先得到col对应的迭代器
Iterator iterable = col.iterator();
//2. 使用while循环遍历
while (iterable.hasNext()){//判断是否还有数据
    //返回下一个元素，类型是Object
    Object obj = iterable.next();
    System.out.println("obj = " + obj);
}
//3. 退·出while循环后，这时iterator迭代器，指向最后的元素
//4. 如果希望再次遍历，需要重置我们的迭代器
iterable = col.iterator();
System.out.println("===第二次遍历===");
while (iterable.hasNext()){//判断是否还有数据
    //返回下一个元素，类型是Object
    Object obj = iterable.next();
    System.out.println("obj = " + obj);
}
```

#### 增强for循环

+ 相当于简化版的iterator，本质相同，只能用于遍历集合或数组

+ 语法：

  for(元素类型   元素名  :    集合名或数组名){访问元素}

```java
List list = new ArrayList();
list.add(new Dog("BLACK",3));
list.add(new Dog("BLUE",33));
list.add(new Dog("YELLOW",333));
//增强for循环
for(Object obj : list){
    System.out.println("dog = " + obj);
}
```

### 3. List 接口和常用方法

+ List集合类中元素有序(即添加顺序和取出顺序一致)、且可重复
+ List集合中的每个元素都有对应的顺序索引，即支持索引
+ List容器中的元素都对应一个整数型的序号记载其所在位置，可以根据序号存取容器中的元素
+ 常用的ArrayList、LinkedList和Vector

| 函数                                | 作用                                           |
| ----------------------------------- | ---------------------------------------------- |
| add(int index, Object ele)          | 在 index 位置插入 ele 元素                     |
| addAll(int index, Collection eles)  | 从 index 位置开始将 eles 中的所有元素添加进来  |
| get(int index)                      | 获取指定 index 位置的元素                      |
| indexOf(Object obj)/lastIndexOf     | 返回 obj 在集合中首次/最后一次出现的位置       |
| remove(int index)                   | 移除指定 index 位置的元素，并返回此元素        |
| set(int index, Object ele)          | 设置指定 index 位置的元素为 ele , 相当于是替换 |
| subList(int fromIndex, int toIndex) | 返回从 fromIndex 到 toIndex 位置的子集合       |

```java
List list = new ArrayList();
list.add("Elysia");
list.add("Ayaka");
list.add(2,"abcd");
System.out.println("List  =" + list);
List list1 = new ArrayList();
list1.add("111111");
list1.add("222222");
list.addAll(2,list1);//如果这里用add方法，则加入的是一个list集合而不是两个元素
System.out.println("List = " + list);
System.out.println(list1.indexOf("222222"));
list.remove(0);
System.out.println("list=" + list);
list.set(1, "新位置1");
//如果set的位置不存在，就会报IndexOutOfBoundsException错
System.out.println("list=" + list);
List returnlist = list.subList(0, 4);//左闭右开
System.out.println("returnlist=" + returnlist);
```

### 4. 遍历

#### ArrayList/LinkedList/Vector

```java
List list = new LinkedList();
list.add("Ayaka");
list.add("Elysia");
list.add("鱼香肉丝");
list.add("清蒸馒头");
//迭代器
Iterator iterator = list.iterator();
while (iterator.hasNext()){
    Object obj = iterator.next();
    System.out.println(obj);
}
//iterator = list.iterator();跟Collection里面一样，如果要再次遍历，需要先重置迭代器
//使用LinkedList和ArrayList的使用方法一样，使用Vector也一样
```

### 5. ArrayList 底层结构和源码分析 

+ permits all elements, include null. ArrayList 可以加入null并且可以多个

+ ArrayList是由数组来实现数据存储的

+ ArrayList基本等同于Vector，除了ArrayList是线程不安全的

  多线程情况下不建议使用ArrayList

```java
//ArrayList线程是不安全的，没有synchronized
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    elementData[size++] = e;
    return true;
}
```

+ ArrayList中维护了一个Object类型的数组elementData

  ```java
  transient Object[] elementData;//transient 表示瞬间，短暂的，表示该属性不会被序列号
  ```

+ 当创建ArrayList对象时，使用无参构造器则初始elementData容量为0，第一次添加扩充为10，当需要再次扩充时扩充为elementData为1.5倍

```java
public ArrayList() {this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;}
//使用无参构造器创建了一个空的elmentData
//注意，当需要扩容时，会调用grow函数
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1);//这里直接采用位运算，扩大为原来的1.5倍
    if (newCapacity - minCapacity < 0)//如果说，newCapacity比minCapacity小
        newCapacity = minCapacity;	  //就把minCapacity赋给new
    if (newCapacity - MAX_ARRAY_SIZE > 0)//如果新容量比最大容量还大
        newCapacity = hugeCapacity(minCapacity);//就
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);//扩容使用Arrays.copyOf
}
```

+ 如果使用的是指定大小的构造器，则初始elementData容量为指定大小，需扩容时变为1.5倍

```java
public ArrayList(int initialCapacity) {//使用有参构造，
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity];//创建指定大小的elementData数组
    } else if (initialCapacity == 0) {
        this.elementData = EMPTY_ELEMENTDATA;
    } else {
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);
    }
}
```

> 如果是使用IDEA的话，实际大小可能不会完全显示出来，需要去特别设置
>
> settings --> Build, Execution, Deployment --> Debuger --> Date Views --> Java 去掉勾选Hide null elements in arrays and collections

### 6. Vector 底层结构和源码剖析

1. 类定义说明

   + ```public class Vector<E>```
   + ```extends AbstractList<E>```
   + ```implements List<E>, RandomAccess,Cloneable,Serializable```

2. Vector底层也是一个对象数组，```protected Object[] elementData;```

3. Vector是线程同步的，即线程安全，Vector类的操作方法带有synchronized

   ```java
   public synchronized E get(int index){
       if(index >= elementCount)
           throw new ArrayIndexOutOfBoundsException(index);
       return elementData(index);
   }
   ```

4. 开发中需要线程安全时，考虑使用Vector

5. 源码

```java
//new Vector()底层
public Vector(){
    this(10);
}
//如果时Vector vector = new Vector(8);
public Vector(int initialCapacity){
    this(initialCapacity,0);
}
```

```java
//vector.add(i)
public synchronized boolean add(E e){
    modCount ++;
    ensureCapacityHelper(elementCount + 1);
    elementData[elementCount++] = e;
    return true;
}
```

```java
//确定是否需要扩容 条件 ： minCapacity - elementData.length>0
private void ensureCapacityHelper(int minCapacity) {
    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}
```

```java
//如果 需要的数组大小 不够用，就扩容 , 扩容的算法
//newCapacity = oldCapacity + ((capacityIncrement > 0) ? capacityIncrement : oldCapacity);
//就是扩容两倍
private void grow(int minCapacity) {
    // overflow-conscious code 
    int oldCapacity = elementData.length; int newCapacity = oldCapacity + ((capacityIncrement > 0) ? capacityIncrement : oldCapacity);
    if (newCapacity - minCapacity < 0) 
        newCapacity = minCapacity; 
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

#### Vector 和 ArrayList 的比较

|           | 底层结构               | 版本   | 线程安全(同步)效率 | 扩容倍率                                       |
| --------- | ---------------------- | ------ | ------------------ | ---------------------------------------------- |
| ArrayList | 可变数组               | jdk1.2 | 不安全，效率高     | 有参构造，1.5倍<br />无参构造，10，之后为1.5倍 |
| Vector    | 可变数组<br />Object[] | jdk1.0 | 安全，效率不高     | 有参构造，2倍<br />无参构造，10，之后为2倍     |

### 7. LinkedList底层结构

+ LinkedList底层实现了双向链表和双端队列特点
+ 可以添加任意元素，包括null
+ 线程不安全，没有实现同步

LinkedList的底层操作机制

+ 底层维护了一个双向链表
+ 又两个属性first和last分别指向首节点和尾节点
+ 每个节点(Node对象)，里面又维护了prev、next、item三个属性，其中prev指向前一个，next指向后一个，进而实现双向链表