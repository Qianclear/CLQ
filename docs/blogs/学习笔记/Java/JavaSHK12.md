---
title: java笔记shk12
date: 2021-6-12
tags:
 - java
categories:
 - 学习笔记
---

# 反射 Java Reflection 

 **反射**：是被视为动态语言的关键，反射机制允许程序在执行期借助于```Reflection API```取得**任何类**的**内部信息**，并能**直接操作**任意对象的内部**属性及方法**。  

> 补充：
>
> 动态语言：在运行时可以改变其结构的语言：例如新的函数，对象，甚至代码可以被引入，已有的函数可以被删除或者其他结构上的变化。(运行时代码可以根据某些条件改变自身结构)
>
> ​				Object—C、C#、JavaScript、PHP、Python、Erlang
>
> 静态语言：运行时结构不可改变的语言。如：Java、C、C++
>
> > Java不是动态语言，但可以称之为"准动态语言"。Java可以通过反射机制、字节码操作获得类似动态语言的特性

加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个 类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射。 

## Java反射机制提供的功能

+ 在运行时判断任意一个对象所属的类
+ 在运行时构造任意一个类的对象
+ 在运行时判断任意一个类所具有的成员变量和方法
+ 在运行时获取泛型信息
+ 在运行时调用任意一个对象的成员变量和方法
+ 在运行时处理注解
+ 生成动态代理 

## 这是一段代码解析

person类的代码就不放了，就设置了name，age属性，对应的get，set，构造器，以及随便写的一个show。

对了，shownation是展示国籍的函数。

```java
public void test2() throws Exception {
        Class clazz = Person.class;//把Person类本身的class属性，作为Class的实例
        Constructor cons = clazz.getConstructor(String.class,int.class);//此处cons是构造器，根据构造器参数的类型选择了String和int(name是String类型，age是int类型)
        Object obj = cons.newInstance("Tom",12);//通过构造器造对象，但是此时是作为Person类造的对象，所以下面需要强制转换
        Person p = (Person) obj;
        System.out.println(p.toString());
        //2. 通过反射，调用对象指定的属性、方法
        //调用属性
        Field age = clazz.getDeclaredField("age");//调用指定的属性，name后面的是指定的属性名
        age.set(p,10);//对属性进行赋值，把对象p的age属性，设置为10
        System.out.println(p.toString());
        //调用方法
        Method show = clazz.getDeclaredMethod("show");//调用指定方法，调用的方法是"show"
        //这里甚至还可以跟参数，原因：你考虑到函数的重载了吗？？？？？当然，没写参数就是调用空参呗
        show.invoke(p);//invoke中文是调用的意思
        System.out.println("------------华丽分割线------------");

        //通过反射，调用Person类的私有结构，私有的构造器，方法，属性
        Constructor cons1 = clazz.getDeclaredConstructor(String.class);//本人在此声明一下，这个构造器是私有的
        //重点：
        cons1.setAccessible(true);//霍霍，想不到吧，这个函数作用我也不知道(根据后续盲猜一波，类似于解封装的作用吧，让你能调用私有的属性方法)
        //直接看函数名称的话，设置可进入性？，设置可通过性？意思差不多嘛
        Person p1 = (Person) cons1.newInstance("jerry");
        System.out.println(p1);
        //调用私有的属性
        Field name = clazz.getDeclaredField("name");//啊，同上，调用指定属性，不过这个是私有的
        name.setAccessible(true);//同上，将可进入性设置为true
        name.set(p1,"HanMeimei");
        System.out.println(p1);
        //调用私有方法
        Method shownation = clazz.getDeclaredMethod("shownation", String.class);//这里就是调用私有的方法，
        shownation.setAccessible(true);
        String invoke =(String) shownation.invoke(p1, "中国");
        System.out.println(invoke);
    }
```



Q与A

1. 通过直接new的方式或反射的方式都可以调用公共的结构，开发中到底用哪个？

   建议，直接用new的方式

   什么时候用反射？由于反射的特征之一就是动态性，像服务器上跑起来的代码，就用反射，因为你还不确定到底要造哪个对象(比如是要登录，还是注册)

2. 反射机制与面向对象中的封装性是不是矛盾的？如何看待两个技术

   不矛盾，面向对象现在看起来更多的是给你一个规范，也许它提供的公开函数会更好用，所以推荐你用，但是你非得要用反射机制来用它私有的函数，那它也没办法，只能说是给你个推荐了。

## 关于java.Lang.class类的理解

1. 类的加载过程:
   程序经过javac.exe命令以后，会生成一个或多个字节码文件(.class结尾)。
   接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。此过程就称为类的加载。加载到内存中的类，我们就称为运行时类，此运行时类，就作为Class的一个实例。
   
2. 换句话说，Class的实例就对应着一个运行时类

3. 加载到内存中的运行时类，会缓存一定的时间，在此时间内，我们可以通过不同的方式来获取次运行时类

   ```java
   public void test3() throws ClassNotFoundException {
           //方式一：调用运行时类的属性 .class
           Class clazz1 = Person.class;
           System.out.println(clazz1);
           //方式二：通过运行时类的对象，调用getClass()
           Person p1 = new Person();
           Class clazz2 = p1.getClass();
           System.out.println(clazz2);
           //方式三：调用Class的静态方法：forname(String classPath)
           Class clazz3 = Class.forName("java1.Person");
   //        clazz3 = Class.forName("java.lang.String");
           System.out.println(clazz3);
   
           System.out.println(clazz1 == clazz2);
           System.out.println(clazz1 == clazz3);
           //方式四：使用类的加载器ClassLoader
           ClassLoader classLoader = ReflectionTest.class.getClassLoader();
           Class clazz4 = classLoader.loadClass("java1.Person");
           System.out.println(clazz4);
           System.out.println(clazz1 == clazz4);
   //结果都是true
       }
   ```

那些类型可以有Class对象

+ class： 外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类
+ interface：接口 
+ []：数组 
+ enum：枚举 
+ annotation：注解@interface
+ primitive type：基本数据类型
+ void  

## 类的加载

### 加载过程

如果需要使用某个类，如果该类还没有被加载到内存，系统就会进行初始化

<img src="/ipic/1631611321312.png" alt="1631611321312" style="zoom:80%;" /> 

例如：

```java
public static void main(String[] args) {
        System.out.println(A.m);
    }
}
class A{
    static { 
        m = 300; 
    }
    static int m = 100;
}
//第二部：链接结束后 m=0
//第三部：初始化之后，m 的值由<clinit>()方法执行决定
//       这个A的类构造器<clinit>()方法由类变量的赋值和静态代码块中的语句按照顺序合并产生，由于静态代码块在前，故先执行静态代码块里的，再执行m=100
```

## 加载配置文件的方法

> tips：<img src="/ipic/1631614271039.png" alt="1631614271039" style="zoom:80%;" />

读取配置文件的方式一：

```java
	Properties pros = new Properties();
    //此时的文件默认在当前的module下(IDEA中)
    //读取配置文件的方法一：
    FileInputStream fis = new FileInputStream("jdbc.properties");
    pros.load(fis);
```
读取配置文件的方式二：

```java
    //配置文件默认在当前module下的src下
    ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
    InputStream is = classLoader.getResourceAsStream("jdbc1.properties");
    pros.load(is);
```

> 虽然两种方法读取配置文件都可以，但是我们还是最好用第二种，因为默认存放地方是src目录下，这样一般情况下，在打包发布的时候不会被忽略

## 创建运行时类

```java
Class clazz = Person.class;
Person obj = clazz.newInstance();
System.out.println(obj);
```

```newInstance()```调用此方法，创建对应的运行时类的对象，内部调用了运行时类的**空参构造器**

要求

+ 运行时类必须提供空参的构造器
+ 空参的构造器的访问权限得够，通常设置为public

## 获取运行时类的属性

1. getFields()：获取当前运行时类及其父类中声明为public访问权限的属性

   ```java
   Field[] fields = clazz.getFields();
   ```

2. getDeclareFields(): 获取当前运行时类中声明的所有属性。（不包含父类中声明的）
   
   ```java
   Field[] declaredFields = clazz.getDeclaredFields();
   ```
   
3. geiModifiers(): 获取权限修饰符

   ```java
   int modifiers = f.getModifiers();
   System.out.print(Modifier.toString(modifiers)+"\t");//这么写是为了直接显示public或者别的
   											//而不是显示0，2
   ```

4. getType()：获取数据类型

   ```java
   Class type = f.getType();
   System.out.print(type.getName() + "\t");
   ```

5. getName()：获取变量名

   ```java
   String fName = f.getName();
   System.out.print(fName);
   ```

6. getMethods()获取当前运行时类及其所有父类中声明为public权限的方法
   ```java
   Method[] methods = clazz.getMethods();
   ```

7.  getDeclaredMethods():获取当前运行时类中声明的所有方法(不包含父类中声明的方法)
   ```java
   Method[] declaredMethods = clazz.getDeclaredMethods();
   ```

   例子
   
   ```java
   //@Xxx
   //权限修饰符    返回值类型    方法名(参数类型1  形参名1，...) throws XxxException{}
   @Test
   public void test4(){
       Class clazz = Person.class;
       Method[] declaredMethods = clazz.getDeclaredMethods();
       for(Method m : declaredMethods){
           //1. 获取方法声明的注解
           Annotation[] annos = m.getAnnotations();
           for(Annotation a : annos){
               System.out.println(a);
           }
           //2. 权限修饰符
           System.out.print(Modifier.toString(m.getModifiers()) + "\t");
           //3. 返回值类型
           System.out.print(m.getReturnType().getName() + "\t");
           //4. 方法名
           System.out.print(m.getName());
           //5. 形参列表
           System.out.print("(");
           Class[] parameterTypes = m.getParameterTypes();
           if(!(parameterTypes == null && parameterTypes.length ==0)){
               for (int i = 0; i < parameterTypes.length; i++) {
                   if(i == parameterTypes.length -1){
                       System.out.print(parameterTypes[i].getName() + " args_" + i);
                       break;
                   }
                   System.out.print(parameterTypes[i].getName() + " args_" + i + ", ");
               }
           }
           System.out.print(")");
           //6. 抛出的异常
           Class[] exceptionTypes = m.getExceptionTypes();
           if(exceptionTypes.length > 0){
               System.out.print("throws");
               for (int i = 0; i < exceptionTypes.length; i++) {
                   if(i == exceptionTypes.length-1){
                       System.out.print(exceptionTypes[i].getName());
                       break;
                   }
                   System.out.print(exceptionTypes[i].getName() + ", ");
               }
           }
           System.out.println();
       }
   }
   ```

8. getConstructors()：获取当前运行时类中声明为public的构造器

   ```java
   Constructor[] constructors = clazz.getConstructors();
   ```

9. getDeclaredConstructors()：获取当前运行时类中声明的所有的构造器

   ```java
   Constructor[] declaredconstructors = clazz.getDeclaredConstructors();
   ```

10. getInterfaces()：获取运行时类实现的接口

    ```java
    Class[] interfaces = clazz.getInterfaces();
    ```

    > clazz.getSuperclass().getInterfaces()：获取运行时类实现的接口

11. getPackage()：获取运行时类所在的包

    ```java
    Package pack = clazz.getPackage();
    ```

12. getAnnotations()：获取运行时类的注解

    ```java
    Annotation[] annotation = clazz.getAnnotations();
    ```

## 调用运行时类的指定结构

emmm，我发现具体的方法我已经写过了，就在代码解析里面，那这里就不放了

## 动态代理

相较于静态代理的优点：抽象角色中(接口)的所有方法都被转移到调用处理器一个集中的方法中处理，这样，我们可以更加灵活个统一的处理众多方法

我们先来看一个静态代理

```java
interface ClothFactory{
    void produceCloth();
}
//被代理类
class NikeClothFactory implements ClothFactory{
    @Override
    public void produceCloth() {
        System.out.println("耐克工厂生产了一批运动服");
    }
}
//代理类
class ProxyClothFactory implements ClothFactory{
    private ClothFactory factory;//用被代理类对象进行实例化
    public ProxyClothFactory(ClothFactory factory){
        this.factory = factory;
    }
    @Override
    public void produceCloth() {
        System.out.println("代理工厂做一些准备工作");
        factory.produceCloth();
        System.out.println("代理工厂做一些后续的收尾工作");
    }
}
public class StaticProxyTest {
    public static void main(String[] args) {
        //创建被代理类的对象
        ClothFactory nike = new NikeClothFactory();
        //创建代理类的对象
        ClothFactory proxyClothFactory = new ProxyClothFactory(nike);
        proxyClothFactory.produceCloth();
    }
}
```

动态代理

```java
interface Human{
    String getBelief();
    void eat (String food);
}
//被代理类，重写方法
class SupreMan implements Human{
    @Override
    public String getBelief() {
        return "I believe I can fly!";
    }
    @Override
    public void eat(String food) {
        System.out.println("我喜欢吃" + food);
    }
}
/*想要实现动态代理，需要解决的问题
1. 如何根据加载到内存中的被代理类，动态的创建一个代理类及其对象
2. 当通过代理类的对象调用方法a时，如何动态的去调用被代理类中的同名方法a
 */
class ProxyFactory{
    //调用此方法，返回一个代理类的对象。解决问题1，因此需要知道该代理类代理的是哪一个被代理类
    public static Object getProxyInstance(Object obj){//因此，传进来的就是obj:被代理类的对象
        MyInvocationHandler handler = new MyInvocationHandler();//创建实例，
        handler.bind(obj);//使用handler对obj这个被代理类进行赋值
        return Proxy.newProxyInstance(obj.getClass().getClassLoader(),obj.getClass().getInterfaces(),handler);
        //这里return，它会给你提示，第一个是类的加载器，直接通过被代理类的对象得到，第二个是类的接口，通过被代理类的对象得到(因为被代理类需要实现跟代理类一样的接口)，第三个是InvocationHandler，本质上好像还是一个接口，因此声明MyInvocationHandler来实例化，
    }
}
//这个是为了返回对象时的第三个参数，
class MyInvocationHandler implements InvocationHandler{
    private Object obj;//调用方法invoke需要使用被代理类的对象，在此处声明
    public void bind(Object obj){//感觉这里像是提供一个连接操作，将代理类和被代理类最终连接起来
        this.obj = obj;
    }

    //当我们通过代理类的对象，调用方法a时，就会自动的调用如下的方法：invoke()
    //将被代理类要执行的方法a的功能声明在invoke()中
    @Override//第一个是代理类的对象，也就是上面返回的对象，第二个是代理类对象调用的方法
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //method:即为代理类对象调用的方法，此方法也就作为了被代理类对象要调用的方法
        //obj:被代理类的对象
        Object returnValue = method.invoke(obj,args);//invoke有返回值，用returnvalue接收
        return returnValue;
    }
}
public class ProxyTest {
    public static void main(String[] args) {
        
        SupreMan supreMan = new SupreMan();//被代理类对象来了
        //ProxyInstance：代理类的对象
        Human proxyInstance = (Human) ProxyFactory.getProxyInstance(supreMan);//创建代理类对象，然后传入一个被代理类对象
        //好像因为传入的是supreMan，所以前面的Object要改成Human
        
        //当通过代理类对象调用方法时，会自动的调用被代理类中同名的方法
        String s = proxyInstance.getBelief();
        System.out.println(s);
        proxyInstance.eat("四川麻辣烫");
        System.out.println("***************************");
        NikeClothFactory nikeClothFactory = new NikeClothFactory();
        ClothFactory proxyClothFactory = (ClothFactory) ProxyFactory.getProxyInstance(nikeClothFactory);
        proxyClothFactory.produceCloth();
    }
}
```

