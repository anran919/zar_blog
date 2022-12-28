---
icon: Android
date: 2022-01-09
category:
  - Android
tag:
  - Android
---
> [Android学习笔记](https://github.com/GeniusVJR/LearningNotes)

## 五种布局
###  LinearLayout(线性布局)
1. 一行或者一列值放置一个控件的布局,可以设置方向,垂直排列或者水平排列,适用于简单的布局
2. 适用场景:水平或者垂直的简单排列,如登录界面

###  RelativeLayout(相对布局)
1. 是一个相对自由的布局, 由一个view作为参照,来定位下一个view的摆放位置,可以实现比较复杂的布局
2. 应用场景:适合比较复杂的布局,LinearLayouy能实现的它也能实现

###  FrameLayout(框架布局)
1. 所有的子view都会放在左上角,无法指定位置,后面的子view会放在前一个view上.
2. 使用场景: 放置单一的view,如放置Fragment,显示一张图片

###  TableLayout(表格布局)
1. 类似HTML中的table,使用tableRow来布局,tableRow代表一行,其中的每个视图组件代表一个单元格
2. 使用场景:空间之间存在相应关系

###  AbsoluteLayout (绝对布局)
1. 采用坐标轴的方式来定位view,左上角坐标为(0,0),x轴向右递增,y轴向下递增
2. 使用场景:准确定位控件位置,但是Android设备的屏幕尺寸,分辨率差别很大,无法解决适配问题,该布局已经过时

## Activity
### - Activity的生命周期
1. 正常的生命周期:onCreate -> onStart -> onResume -> onPause -> onStop -> onDestory  
2. 转到其他Activity或者按下home键 执行onPause() -> onStop 进入停滞状态
3. Activity返回前台:onRestart() -> onStart() -> onResume()
3. 当系统内存不足会将后台的Activity杀死,此时这个Activity任然在任务栈中只是引用指向的对象已经为空,若再次回到这个Activity会重新走一遍生命周期
4. 锁屏: onPause -> onStop
5. 解锁: onStart -> onResume

![生命周期图](http://oje1oqb9c.bkt.clouddn.com/activity_life.pngactivity_life.png)

###  Activty任务栈
> 任务栈是一种先进后出的结构,每个app默认只有一个任务栈以包名命名,位于栈顶的Activity处于焦点状态,当按下back键时,栈内的Activity会一个一个出栈,调用onDestory()方法,如果栈内没有Activity,系统就会回收这个栈.

### 启动模式:

- standard :默认的启动模式,每次创建一个新的Activity实例,将其压入任务栈栈顶,不管栈内是否存在这个Activity.Activity启动三次就会调用三次Activity的生命周期.

- singleTop:栈顶复用模式,启动一个Activity,如果栈顶存在这个Activity的实例,就不在创建新的Activity实例,启动多次也不会创建新的实例,会调用Activity的newIntance()方法,如果栈内存在这个Activity的实例,但不是在栈顶,作用与standard模式一样

- singleTask:栈内复用模式,创建Activity的时候,系统会确认它需要的任务栈是否已经创建,否则再创建任务栈,然后放入Activity,如果栈内有一个Activity实例,那么这个Activity会被调到栈顶,调用newInstance()方法,并且会清理这个实例上面的所有Activity

- singleInstance:加强版的singleTask模式,这种模式Activity实例会单独存在一个任务栈中,由于栈内复用的特性,以后不会再创建新的实例,除非任务栈被销毁

> Activity的堆栈管理是以ActivityRecord为单位的,所有的ActivityRecord都放在一个list中,可以认为一个ActivityRecord就是一个Activity栈


---

###  Activity的缓存

- 有两个Activity A,B ,从A进入B,一段时间后,系统可能叫A回收,这时在按back键回到A,会重新走A的生命周期方法onCreate -> onStart -> onResume ,A被重新创建了一次,这时A中保存的数据和状态就会丢失

- 为了恢复状态,使用onSaveInstanceState()方法保存临时数据和状态,此方法会在Activity销毁前调用,方法中有Bundle参数保存,putString(),putInt()等方法,方法中传入一个参数好一个值,数据保存后会在onCreate()中恢复

- onSaveInstanceState调用时机:即系统未经你允许销毁了你的Activity,这是系统的责任，因为它必须要提供一个机会让你保存你的数据

- onSaveInstanceState() 会在onStop()前执行,但不保证是在onPause之前还是之后触发


** 代码 **

    private static final String TAG = "MainActivity";
    private static final String SAVE_KEY ="save_key" ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
       if(savedInstanceState!=null){
           // 恢复保存的内容
           String save = savedInstanceState.getString(SAVE_KEY);
           Log.d(TAG,"=== 恢复保存的内容 =="+save);
       }
        initEvent();
    }

    /**
     * 保存Activity的状态
     * @param outState
     * @param outPersistentState
     */
    @Override
    public void onSaveInstanceState(Bundle outState, PersistableBundle outPersistentState) {
        super.onSaveInstanceState(outState, outPersistentState);
        outState.putString(SAVE_KEY,"保存字符串");
    }

----

###  Intent
 - Intent可以传递的数据类型:
 可以传递基本数据类型好基本数据类型的数组,以及实现需序列化接口的飞基本数据类型

## Fragment

###  Fragment的生命周期和Activity的关系

onAttach() -> onCreate() -> onCreateView() -> onViewCreatd() -> Activity onCreated() .....

![Fragment的生命周期和Activity的关系](http://oje1oqb9c.bkt.clouddn.com/image/fragment_and_activity.jpg)

###  Fragment的生命周期
![Fragment的生命周期图](http://oje1oqb9c.bkt.clouddn.com/image/fragment_life.png)

## Broadcast Receiver
### 的两种动态注册和静态注册有什么区别
- 动态注册: 在代码中注册,app退出就不能接收到广播
- 静态注册: 在清单文件中注册,app退出依旧可以接受到广播


## ContentProvider
### 使用方法



## Service
###  为什么在Service中创建子线程
- 在Activity中创建一个子线程,但Activity被销毁后,就不能获取子线程的实例,而且在在其他Activity中无法对其操作
- 在Service创建中就不同,所有的Activity都可以对其进行操作,即使Activity 被销毁后,重新与Service进行关联,就可以获取Binder的实例.因此使用Service做后台处理,Activity可以放心的finish ,不用担心对后台任务无法控制的情况


###  Service的两种启动方法,有什么区别
- Context bindService 启动Service 生命周期好Context 绑定在一起
- Context startService 启动Service 生命周期和context 无关

###  如何保证Service不被杀死

## 动画有哪几类,各有什么特点,有什么区别

## Android的数据存储形式

## Sqlite的基本操作

## 如何判断应用被强杀

## Json有什么优劣势

## Asset目录与res目录的区别

## 优化
###  Android怎么加速启动Activity
###  Android内存优化方法

## 自定义View的流程

## Android长连接,怎样处理心跳机制

## View的绘制流程

## 下拉刷新的实现原理

## 常用框架和源码分析，底层原理

## Android新特性
### 5.0
### 6.0
### 7.0

## Context

## IntenService
###  使用场景

## 图片缓存
###  查看程序可用最高内存

## Gradle
###  构建工具
