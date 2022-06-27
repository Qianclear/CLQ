---
title: java笔记shk10
date: 2021-6-10
tags:
 - java
categories:
 - 学习笔记
---

# I/O流

## 基础知识

1. 路径

   相对路径：相较于某路径下，指明的路径

   绝对路径：包含盘符在内的文件或文件目录的路径

   

   IDEA中：如果使用Junit中的单元测试方法测试，相对路径即为当前Module下

   ​                如果使用main()测试，相对路径即为当前Project下

   Eclipse中：相对路径总是当前Project下。

2. 路径分隔符

   Windows：```\\```

   unix：/
   
3. 流的分类

   按操作数据**单位**不同分为：字节流(8 bit)(图片，视频)，字符流(16 bit)(.txt)

   按数据流的**流向**不同分为：输入流，输出流

   按流的**角色**的不同分为：节点流(直接作用于文件)，处理流(作用于节点流或处理流)
   
   | 抽象基类     | 节点流(文件流)   | 缓冲流             |
   | ------------ | ---------------- | ------------------ |
   | InputStream  | FileInputStream  | BufferdInputStream |
   | OutPutStream | FileOutPutStream | BufferOutPutStream |
   | Reader       | FileReader       | BufferReader       |
   | Writer       | FileWriter       | BufferWriter       |
   
   

## File类的获取功能

|                                  |                                                |
| -------------------------------- | ---------------------------------------------- |
| public String getAbsolutePaht(): | 获取绝对路径                                   |
| public String getPath()          | 获取路径                                       |
| public String getName()          | 获取名称                                       |
| public String getParent()        | 获取上层文件目录路径，若无返回null             |
| public long length()             | 获取文件长度(字节数)                           |
| public long lastModified()       | 获取最后一次的修改时间，毫秒                   |

| 适用于文件目录            |                                                |
| ------------------------- | ---------------------------------------------- |
| public String[] list()    | 获取指定目录下的所有文件或者文件目录的名称数组 |
| public File[] listFiles() | 获取指定目录下的所有文件或者文件目录的File数组 |

## File类的重命名

```java
public boolean renameTo(File dest):           //把文件重命名为指定的文件路径
//如 file1.renameTo(file2)
//但是我感觉这个函数功能就像是剪切加重命名
```

注：要想保证返回true，需要file1在硬盘中存在，且file2不存在

## File类的判断功能

|                                          |                    |
| ---------------------------------------- | ------------------ |
| public boolean isDirectory()             | 判断是否是文件目录 |
| public boolean isFile()                  | 判断是否是文件     |
| public boolean exists()                  | 判断是否存在       |
| public boolean canRead()                 | 判断是否可读       |
| public boolean canWrite()                | 判断是否可写       |
| public boolean isHidden()                | 判断是否隐藏       |
| public boolean endsWith(String 指定后缀) | 判断指定后缀       |

## File类的创建功能

```public boolean createNewFile():``` 创建文件，若文件存在则不创建且返回false

```public boolean mkdir():``` 创建文件目录，若文件目录存在，不创建。若上层目录不存在，就不创建

```public boolean mkdirs():``` 创建文件目录，若上层目录不存在，就一起创建

> 若创建文件或者文件目录没有写明盘符路径，就默认在项目路径下

## File类的删除功能

```public boolean delete():``` 删除文件或者文件夹

> tips：同一个目录下，不会存在文件夹和文件名字(带后缀)完全相同的情况，所以理论上来说不会出现删除文件时把同名称的文件夹删除	

## 字节流、字符流

> 对于文本文件(.txt,.java, .c, .cpp),使用字符流处理
>
> 对于非文本文件(.jpg, .mp3, .mp4, .avi, .doc, .ppt)，使用字节流处理(File)

### 字符流

通常是以reader和writer结尾

```java
@Test
public void testFileReader() {
    FileReader fr = null;
    try {
        File file1 = new File("hello.txt");//相较于当前module
        //提供具体的流
        fr = new FileReader(file1);
        //数据的读入
        //read返回读入的一个字符，如果到了文件末尾，就返回-1
        int data = fr.read();
        while(data != -1){
            System.out.print((char)data);
            data = fr.read();
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        try {
            if(fr != null){
                fr.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

read的重载

```java
public void testFileReader1()  {
        FileReader fr = null;
        try {
            File file = new File("hello.txt");
            //fileReader流的实例化
            fr = new FileReader(file);
            //读入操作
            //read(char[] cbuf):返回每次读入cbuf数组中的字符的个数。到文件末尾返回-1
            char[] cbuf = new char[5];
            int len;
            while ((len = fr.read(cbuf)) != -1){
                //错误的写法
//                for(int i = 0;i < cbuf.length;i++){
//                    System.out.print(cbuf[i]);
//                }
                //取几个就读几个
                for(int i = 0;i < len;i++){
                    System.out.print(cbuf[i]);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(fr != null){
                //资源的关闭
                try {
                    fr.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
```

> read重载读入char类型，当最后长度不够length时，是会出现问题的，所以for循环读数据时，直接用len

> 一定要注意关闭资源，写程序的时候要注意看看程序出异常时是否关闭了资源

1. write操作

   ```java
       @Test
       public void testFileWriter()  {
           FileWriter fw = null;
           try {
               File file = new File("hello1.txt");
               fw = new FileWriter(file,true);//false表示对原文件进行覆盖
               //写出操作
               fw.write("I have a dream!\n");
               fw.write("you need to have a dream!\n");
           } catch (IOException e) {
               e.printStackTrace();
           } finally {
               //流资源的关闭
               try {
                   if(fw != null)
                   fw.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
       }
   ```


### 字节流

通常是以stream结尾

```java
	public void testFileInputStream() {
        FileInputStream fis = null;
        try {
            File file = new File("hello.txt");
            //造流
            fis = new FileInputStream(file);
            //读数据
            byte[] buffer = new byte[5];//创建字节数组buffer来存放数据
            int len;//记录每次读取的字节个数
            while ((len = fis.read(buffer)) != -1){
                String str = new String(buffer,0,len);
                System.out.print(str);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(fis != null)
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
        }
    }
```

## 缓冲流

提升流的读取写入速度

原因：内部提供了一个缓冲区

```java
       public void copyFileWithBuffered(String srcPath, String destPath){
            //1.造文件
            BufferedInputStream bis = null;
            BufferedOutputStream bos = null;
            try {
                File srcFile = new File(srcPath);
                File destFile = new File(destPath);
                //2.造流
                FileInputStream fis = new FileInputStream((srcFile));
                FileOutputStream fos = new FileOutputStream((destFile));
                //2.造缓冲流
                bis = new BufferedInputStream(fis);
                bos = new BufferedOutputStream(fos);
                //3。复制的细节，读取写入
                byte[] buffer = new byte[1024];
                int len;
                while ((len = bis.read(buffer))!= -1){
                    bos.write(buffer,0,len);

                    bos.flush();//刷新缓冲区
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                //4.资源的关闭
                //先关闭外层，再关闭内层
                if(bos != null)
                    try {
                        bos.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                if(bis != null)
                    try {
                        bis.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                //说明，关闭外层流的时候，内层流就会自动关闭
//        fos.close();
//        fis.close();
            }
        }
        @Test
        public void testCopyFileWithBuffered(){
            long start = System.currentTimeMillis();
            String srcPath = "F:\\t\\01.flv";
            String destPath = "F:\\t\\03.flv";
            copyFileWithBuffered(srcPath,destPath);
            long end = System.currentTimeMillis();
            System.out.println("复制花费的时间为：" + (end - start));//200
        }
```

文件的复制

```java
public void testBufferedReaderBufferedWriter() {
        //创建文件和相应的流
        BufferedReader br = null;
        BufferedWriter bw = null;
        try {
            br = new BufferedReader(new FileReader("dbcp.txt"));
            bw = new BufferedWriter(new FileWriter("dbcp1.txt"));
            //读写操作
            //方式一：使用char[]数组
//            char[] cbuf = new char[1024];
//            int len;
//            while((len = br.read(cbuf))!= -1){
//                bw.write(cbuf,0,len);
//    //            bw.flush();
//            }
            //方式二：使用String
            String data;
            while((data = br.readLine()) != null){
                //方法一
                bw.write(data+"\n");//data中不包含换行符
                //方法二
                bw.write(data);//data中不包含换行符
                bw.newLine();//提供换行操作
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {//关闭资源
            if(bw!= null){
                try {
                    bw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(br!=null){
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
```

## 转换流

> 属于字符流

用于字节流和字符流之间的转换

+ InputStreamReader：将一个**字节**输入流转换为字符输入流
+ OutputStreamWriter：将一个字符输入流转换为**字节**输出流

解码：字节、字节数组-> 字符数组、字符串

编码：字符数组、字符串->字节、字节数组

实例

```java
    public void test2() throws IOException {
        File file1 = new File("dbcp.txt");
        File file2 = new File("dbcp_gbk.txt");
        
        FileInputStream fis = new FileInputStream(file1);
        FileOutputStream fos = new FileOutputStream(file2);

        InputStreamReader isr = new InputStreamReader(fis);
        OutputStreamWriter osw = new OutputStreamWriter(fos,"gbk");

        char[] cbuf = new char[20];
        int len;
        while((len = isr.read(cbuf))!= -1){
            osw.write(cbuf,0,len);
        } 
        isr.close();
        osw.close();

    }
```

## 其他流

### 标准的输入、输出()

```System.in``` :标准的输入流，默认从键盘输入

```System.out```:标准的输出流，默认从控制台输出

> System类的setIn(InputStream in)/setOut(PrintStream out) 方法重新制定输入和输出的

```java
//键盘读入，在e和exit之前都把输入转换为大写
//由于IDEA的test方法的不同，所以用test单元测试键盘不管用，所以用main
    public static void main(String[] args) {
        BufferedReader br = null;
        try {
            InputStreamReader isr = new InputStreamReader(System.in);
            br = new BufferedReader(isr);
            while (true){
                System.out.println("请输入字符串");
                String data = br.readLine();
                if("e".equalsIgnoreCase(data)||"exit".equalsIgnoreCase(data)){
                    System.out.println("程序结束");
                    break;
                }
                String upperCase = data.toUpperCase();
                System.out.println(upperCase);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(br!= null){
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
```

### 打印流()

将**基本数据类型**的数据格式转化为**字符串**输出

+ PrintStream
+ PrintWriter

### 数据流

用于读取或写出基本数据类型的变量或字符串

+ DataInputStream
+ DataOutputStream

```java
@Test
    public void test3() {
        DataOutputStream dos = null;
        try {
            dos = new DataOutputStream(new FileOutputStream("data.txt"));
            dos.writeUTF("吴迪");
            dos.flush();
            dos.writeInt(23);
            dos.flush();
            dos.writeBoolean(true);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(dos != null){
                try {
                    dos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        }
    }
    @Test
    public void test4(){
        String name = null;
        int age = 0;
        boolean isMale = false;
        try {
            DataInputStream dis = new DataInputStream(new FileInputStream("data.txt"));
            name = dis.readUTF();
            age = dis.readInt();
            isMale = dis.readBoolean();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
        }
        System.out.println("name " + name);
        System.out.println("age " + age);
        System.out.println("isMale " + isMale);
    }
```

### 对象流

用于存储和读取基本数据类型数据或对象的处理流，可以把Java中的对象写入到数据源中，也能把对象从数据源中还原

+ 序列化：用**ObjectOutputStream**类**保存**基本类型数据或对象的机制
+ 反序列化：用**ObjectInputStream**类**读取**基本类型数据或对象的机制

> ObjectOutputStream和ObjectInputStream不能序列化static和transient修饰的成员变量

> **对象序列化机制**允许把内存中的Java对象转换成平台无关的二进制流，从而允许把这种二进制流持久地保存在磁盘上，或通过网络将这种二进制流传输到另一个网络节点

> 凡是实现Serializable接口的类都有一个表示序列化版本标识符的静态变量：
>
> **private static final long serialVersionUID;** 



#### 对象的序列化

1. 需要实现**两个接口之一**

   + Serializable 
   + Externalizable

2. **serialVersionUID**

   ```java
   private static final long serialVersionUID = 475463534532L;
   //用来实现类似于版本控制的东西，如果类有修改，保证用这个UID序列化之后可以对应着反  序列回来
   ```

3. 只有内部所有属性都是可序列化，才可以序列化(基本数据类型都可序列化)

   > 不能序列化static和transient修饰的成员变量


   ```java
//序列化过程：将内存中的对象保存到磁盘中或者通过网络传播出去
    //使用ObjectOutputStream
	@Test
    public void testObjectOutputStream(){
        ObjectOutputStream oos = null;
        try {
            oos = new ObjectOutputStream(new FileOutputStream("object.dat"));
            oos.writeObject(new String("天青色等烟雨"));
            oos.flush();//刷新操作

            oos.writeObject(new Person("周杰伦", 23,123456));
            oos.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(oos!= null){
                try {
                    oos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    //反序列化，将磁盘文件中的对象还原为内存中的一个java对象
    //使用ObjectInputStream来实现
    @Test
    public void testObjectInputStream(){
        ObjectInputStream ois = null;
        try {
            ois = new ObjectInputStream(new FileInputStream("object.dat"));
            Object obj = ois.readObject();
            String str = (String) obj;
            Person p = (Person) ois.readObject();
            System.out.println(str);
            System.out.println(p);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(ois != null){
                try {
                    ois.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
   ```

```java
public class Person implements Serializable {
    private static final long serialVersionUID = 475463534532L;
    private String name;
    private int age;
    private int id;
    public Person(String name, int age, int id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", id=" + id +
                '}';
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}
```

### 随机存取文件流

+ RandomAccessFIle类声明在java.io包下，但直接继承于java.lang.Object类。这个类既可以读也可以写。

+ 创建 RandomAccessFile 类实例需要指定一个 mode 参数，该参数指定 RandomAccessFile 的访问模式

  | mode参数 | 作用                                         |
  | -------- | -------------------------------------------- |
  | r        | 以只读方式打开                               |
  | rw       | 打开以便读取和写入                           |
  | rwd      | 打开以便读取和写入，同步文件内容的更新       |
  | rws      | 打开一遍读取和写入，同步文件内容和元数据更新 |

  void seek(long pos)：将文件记录指针定位到 pos 位置(默认是0位置) ```raf1.seek(3)```  就是将指针调到角标为3的位置