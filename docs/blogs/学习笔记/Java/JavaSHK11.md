---
title: java笔记shk11
date: 2021-6-11
tags:
 - java
categories:
 - 学习笔记
---

# 多线程

## 基础知识

+ 程序：一段静态代码，是一组指令的集合    静态
+ 进程：程序的一次执行过程，或者说是正在运行的一个程序    动态
+ 线程：进程可进一步细化为线程，是一个程序内部的一条执行路径

**优点**

1. 提高应用程序的响应。对图形化界面更有意义，可增强用户体验。

2. 提高计算机系统CPU的利用率 

3. 改善程序结构

   将既长又复杂的进程分为多个线程，独立运行，利于理解和修改 

 **何时需要多线程** 

1.  程序需要**同时**执行两个或多个任务
2. 程序需要实现一些**需要等待**的任务时，如用户输入、文件读写 操作、网络操作、搜索等。
3. 需要一些后台运行的程序时 

## 线程的创建和使用

> 它通过java.lang.Thread 类来体现 

1. 创建一个继承于Thread类的子类

2. 重写Thread类的run()

   即：将此线程执行的操作声明在run()中

3. 创建Thread类的子类对象

4. 通过此对象调用start()

注意：

1. 我们不能通过直接调用run()的方式启动线程
   这样还是在主程序里运行的，必须用start()方法

2. 我们不能通过让已经start()的线程再次start()，去再启动一个线程。会报```IllegalThreadStateException``` 

   此时需要再new一个

## Thread类的有关方法

| 函数 | 作用 |
| ----- | -----|
| void start | 启动线程，并执行对象的run()方法 |
| run | 线程在被调度时执行的操作<br />通常需要重写，写需要的操作 |
| getName | 获取当前线程名称 |
| setName | 设置当前线程名称 |
| currentThread() | 静态方法，返回执行当前代码的线程。 |
| yield() | 释放当前的CPU执行权<br />相当于"让步" |
| join() | "插队"执行，在a中执行b的jion，那么直到b执行结束才继续执行a |
| stop | 强制结束线程的生命期(**不推荐**使用) |
| isAlive | boolean类型，判断线程是否还活着 |
| sleep(long millitime) | 让当前线程"睡眠"指定的millitime毫秒 |

## 线程的调度

1. 线程优先等级

   + MAX_PRIORITY ：10
   
   +  MIN _PRIORITY ：1
   +  NORM_PRIORITY： 5 
   
2. 方法

   +  getPriority()： 返回线程优先值
   +  setPriority(int newPriority) ：改变线程的优先级 

3. 说明

   > 线程创建时继承父线程的优先级
   >
   > 低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调用

## 多线程的创建

方法二：

1. 创建一个实现了Runnable接口的类

2. 实现类去实现Runnable中的接口抽象方法：run()

3. 创建实现类的对象

4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象

5. 通过Thread类的对象调用start()

   ```java
   class Window1 implements Runnable{
       public int ticket = 100;
    @Override
       public void run() {
           while (true){
               if(ticket > 0){
                   System.out.println(Thread.currentThread().getName() + "卖票，票号为：" + ticket);
                   ticket --;
               }else {
                   break;
               }
           }
       }
   }
   public class WindowsTest1 {
       public static void main(String[] args) {
           Window w = new Window();
   
           Thread t1 = new Thread(w);
           Thread t2 = new Thread(w);
           Thread t3 = new Thread(w);
   
           t1.setName("窗口1");
           t2.setName("窗口2");
           t3.setName("窗口3");
   
           t1.start();
           t2.start();
           t3.start();
   
       }
   }
   ```
   

##  线程的生命周期

完整的生命周期有一下五种状态

1. 新建：当一个Thread类或其子类的对象被声明并创建时，新生的线程对象处于新建状态
2. 就绪：start()后，将进入线程队列等待CPU时间片，当分配到资源后即可运行 
3. 运行：就绪的线程被调度并获得CPU资源时，便进入运行状态
4. 阻塞： 人为挂起或执行输入输出操作时，让出CPU并临时中止自己的执行 
5. 死亡： 完成了它的全部工作或被提前强制结束

<img src="ipic\1630994968675.png" alt="1630994968675" style="zoom:80%;" />

## 线程的同步

背景：以卖票为例，线程A查询余1张票，线程B查询也为一张票，故A进行出票操作，B也进行出票，最终导致票数为-1。此时出现错误，即：线程不安全

> 理解：这个跟学的操作系统里的问题很相似，解决方法是"加锁"，即加一个"临界区"。继续看后续解决吧

出现了：同步机制

**方式一**：同步代码块synchronized

```java
synchronized (同步监视器){
// 需要被同步的代码；
}
```

1. 操作共享数据的代码，即为"需要被同步的代码"

2. 共享数据：多个线程共同操作的变量，比如"ticket"

3. 同步监视器：俗称：锁
   任何一个类的对象，都可以充当这个锁

   要求：多个线程必须用同一把锁

> 如果还是出现了"错票"，注意一下看看是不是"同一把锁"

**重点** ：

在继承Thread类创建多线程的方式中，慎用this充当同步监视器，考虑使用当前类充当同步监视器

在实现Runnable接口创建多线程的方式中，可以考虑使用this充当同步监视器

**方式二**：同步方法

如果此操作共享数据的代码完整的声明在一个方法中，我们可以将此方法声明为同步的。

```java
public synchronized void show (String name){
    //需要被同步的代码
}
```

**方式三**：lock锁

```java
import java.util.concurrent.locks.ReentrantLock;

class Window implements Runnable{

    private int ticket = 100;
    //1.实例化ReentrantLock对象
    private ReentrantLock lock = new ReentrantLock(true);

    @Override
    public void run() {
        while (true){
            try {
                //调用lock方法，锁住
                lock.lock();
                if(ticket > 0){
                    System.out.println(Thread.currentThread().getName() + ": 售票，票号为：" + ticket);
                    ticket--;
                }else {
                    break;
                }
            }finally {
                //调用解锁方法：unlock
                lock.unlock();
            }
        }
    }
}
public class LockTest {
    public static void main(String[] args) {
        Window w = new Window();
        Thread t1 = new Thread(w);
        Thread t2 = new Thread(w);
        Thread t3 = new Thread(w);

        t1.setName("窗口1");
        t2.setName("窗口2");
        t3.setName("窗口3");

        t1.start();
        t2.start();
        t3.start();
    }
}
```

> lock与synchronize的异同
>
> 相同：都是用来解决线程安全问题
>
> 不同：synchronize机制在执行完相应的同步代码块之后，自动释放同步监视器
>
> ​			lock需要手动启动同步(lock()),同时结束同步也需要手动实现(unlock())

### 同步优缺

好处：解决了线程的安全问题

局限：操作同步代码是，只能有一个线程参与，其他线程等待，相当于是单线程的过程，效率低

## 死锁

 不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁。

> 跟操作系统里讲的不能说很相似，只能说完全一样

## 线程的通信

| 方法        | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| wait()      | 调用之后，当前线程进入阻塞状态，并释放同步监视器             |
| notify()    | 一旦执行此方法，就会唤醒被wait的一个线程，如果多个被wait，就唤醒优先级高的那个 |
| notifyAll() | 一旦执行此方法，就会唤醒被wait的所有线程                     |

注意：以上3个方法只能出现在**同步代码块**或者**同步方法**中，并且，调用者必须是**同步监视器这个对象**，否则，会出现```IllegalMonitorStateException``` 

> 这3个方法都是定义在java.long.Object类中的

> sleep() 和wait()方法的异同
>
> 相同：一旦执行，都可以使当前线程进入阻塞
>
> 不同：一）两个方法声明位置不同，Thread类中声明sleep(),Object类中声明wait()
>
> ​			二）调用的要求不同：sleep()可以自任何需要的情况下调用，wait()必须使用在同步代码块或同步方法中
>
> ​			三）关于是否释放同步监视器：如果两个方法都使用在同步代码快或者同步方法中，sleep()不会释放锁，wait()会释放

## 生产者消费者问题

> 问题一听，好，操作系统讲过啊
>
> 生产者A和消费者B，空Buffer，A生产Buffer+1，B取走Buffer-1，Buffer满无法生产，Buffer空无法取走，同时只能一个操作，用到了信号互斥量(感觉和synchronize有异曲同工之妙)，妙啊。

> 很好，跟我想的差不多

```java
class Clerk{
    private int productcount = 0;
    //生产产品
    public synchronized void produceProduct() {
        if(productcount < 20){
            productcount ++;
            System.out.println(Thread.currentThread().getName() + "：开始生产第" + productcount + "个产品");
            notify();
        }else{
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    //消费产品
    public synchronized void consumProduct() {
        if(productcount > 0){
            productcount --;
            System.out.println(Thread.currentThread().getName() + ": 开始消费第" + productcount + "个产品");
            notify();
        }else{
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
class Producer extends Thread{//生产者
    private Clerk clerk;

    public Producer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() +"开始生产产品。。。");
        while (true){
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            clerk.produceProduct();
        }
    }
}
class Consumer extends Thread{
    private Clerk clerk;

    public Consumer(Clerk clerk) {
        this.clerk = clerk;
    }
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() +"开始消费产品。。。");
        while (true){
            try {
                Thread.sleep(20);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            clerk.consumProduct();
        }
    }
}
public class ProducerTest {
    public static void main(String[] args) {
        Clerk clerk = new Clerk();
        Producer p1 = new Producer(clerk);
        p1.setName("生产者1");
        Producer p2 = new Producer(clerk);
        p2.setName("生产者2");
        Consumer c1 = new Consumer(clerk);
        c1.setName("消费者1");

        p1.start();
        p2.start();
        c1.start();
    }
}
```

## 创建线程的方式三

实现Callable接口

如何理解实现Callable接口的方式创建多线程比Runnable接口强大

+ call() 可以有返回值
+ call() 可以抛出异常，被外面的操作捕获，获取异常信息
+ Callable支持泛型

```java
//1. 创建一个实现Callable的实现类
class NumThread implements Callable{
//2. 实现call方法，将此线程需要执行的操作声明在call()方法中
    @Override
    public Object call() throws Exception {
        int sum = 0;
        for (int i = 1; i <=100 ; i++) {
            if(i % 2 == 0){
                System.out.println(i);
                sum = sum + i;
            }
        }
        return sum;
    }
}
public class ThreadNew {
    public static void main(String[] args) {
        //3. 创建Callable接口实现类的对象
        NumThread numThread = new NumThread();
        //4. 将此Callable接口实现类的对象作为参数传递到FutureTask构造器中，创建FutureTask的对象
        FutureTask futureTask = new FutureTask(numThread);
        //5. 将FutureTask的对象，作为参数传递给Thread类的构造器，创建Thread对象，并调用start()
        new Thread(futureTask).start();
        try {
            Object sum = futureTask.get();
            System.out.println("总和为：" + sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

## 创建线程方式四

**线程池** ：提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中

可以避免频繁创建销毁、实现重复利用。类似生活中的公共交通工具。  

**好处：**

+ 提高响应速度（减少了创建新线程的时间）
+ 降低资源消耗（重复利用线程池中线程，不需要每次都创建）
+ 便于线程管理 
  + corePoolSize：核心池的大小
  + maximumPoolSize：最大线程数
  + keepAliveTime：线程没有任务时最多保持多长时间后会终止 