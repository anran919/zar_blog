---
title: 日常笔记.md
date: 2017-01-09 17:59:29
tags: 笔记
---
## 遇到的问题 ##

### 方法 ###
	1 .使用mainup 解决左边不显示焦点框
	2 .使用boderview 解决recyclerview 滑动中焦点的错位
	3 .使用recylcerviewtv 控制焦点在中间
	4 .recyclerview 显示左边复杂布局
#### 选择方法  1  ， 3 ####
		问题 了解框架
### 焦点框错位 ###
	1. 焦点框图片     
	2. 计算方法
	3. 布局文件问题

#### 选择方法 ####
	1. 布局问题
    package com.dy.dyth.view;

    import android.content.Context;
    import android.support.annotation.Nullable;
    import android.support.v7.widget.RecyclerView;
    import android.util.AttributeSet;

    /**
     * Created by lph on 2016/8/17.
     * adapter TV
     */
    public class TvRecyclerView extends RecyclerView {
    public TvRecyclerView(Context context) {
        this(context,null);
    }

    public TvRecyclerView(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs,0);
    }

    public TvRecyclerView(Context context, @Nullable AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    private void init(){
        setChildrenDrawingOrderEnabled(true);
    }


    //设置当前选中条目显示在最前面
    @Override
    protected int getChildDrawingOrder(int childCount, int i) {
        int currentPos = getChildAdapterPosition(findFocus());
        if(i==childCount-1){
            return currentPos;
        }
        if(i==currentPos){
            return childCount - 1;
        }
        return super.getChildDrawingOrder(childCount, i);
    }
}

## 问题
#### 首页焦点在滑动过程中错位 ####
####解决办法  ####
	1. 修改本来布局 在layoutmanger中找到问题
	2. 使用新的框架
#### 分析
	1. 新框架需要改动的东西太多
	2. 原有框架不明确出问题的地方
#### 综合考虑 ####
	1 .半天时间在原有框架上找出解决方法
	2 .无法解决，则使用新的框架

###超出边界分析
	1. 为什么滑动的过程中会超出边界
		1. recycler View  或者gridLyaoutManger 本身的问题
		2. 或者 我自己布局的问题

----------
**解决方法**

- ***当滑动停止的时候 recyclerView 向右移动***
- ***使recyclerview的滑动不超过边界***

**原因确认**

- view放大没有超出边界

**解决方法**

- 手动当view获取焦点手懂控制recycler 向右移动10dp

**头大**

----------
*2016年9月5日09:51:14*

### 问题 ###
- 焦点框
### 方法 ###
- 修改布局

***坚持一种方法 不要一直换***

***使用框架，了解基本用法***

**记住**

- clipToPadding就是说控件的绘制区域是否在padding里面的

- clipChildren是指子控件是否超过padding区域

----------

###初始化显示焦点框##
- 隐藏不了

### 显示时间天气 wifi ###

### 显示圆角图片 ###



----------
*2016年9月7日10:56:09*

### 待解决 ###
- 页面切换焦点的问题
- 分类和首页item 在没有焦点的情况下隐藏焦点框
- 首页appinfo 按下鼠标下键的焦点切换


----------

*2016年9月9日 14:30:46*
### 解决方法 ###
- 在第三方库中找到焦点框的变化,设置显示影藏


----------
*2016年9月12日09:43:33*

### 模拟网络请求显示图片 ###
-  使用okhttp
-  使用rxjava
-  修改坑位命名 homekw_1;

-  [ http://192.168.1.119:8080/home/home.json](  http://192.168.1.119:8080/home/home.json "json")
- 	[http://192.168.1.119:8080/home/kw1.png](  http://192.168.1.119:8080/home/home.json "图片地址")
- 	解决打开app 应用崩溃的问题


----------
*2016年9月13日10:28:43*
### 设置launcher ###
 **添加下面属性**

    <category android:name="ansroid.intent.category.HOME"/>
    <category android:name="ansroid.intent.category.DEFAULT"/>`


### 问题 ： 打开app后laucnher崩溃 ###
#### 原因 ： ####
1. bean中的Drawable没有序列化
####解决办法####
1. 修改bean中的Bean
2. 重写home中的app管理逻辑
3. 360的实现方法

## 	Bugly 日志: ##

#### 帐号:2014161860####
#### 密码:dyth123456####

#### Bugly崩溃日志 : [https://bugly.qq.com/issueIndex?app=900052943&pid=1](https://bugly.qq.com/issueIndex?app=900052943&pid=1 "Bugly崩溃日志")

## git命令： ##
### 提交到远程服务器 ###

	git remote add origin git@github.com:AnCorleone/TvVertiacalViewPager.git关联一个远程库
	git remote rm origin   // 添加错误清楚仓储
	git push -u origin master  //第一次推送master分支的所有内容
	git push origin master   //推送最新修改
### 同步代码 合并 解决冲突 ###
    git fetch origin master:temp  
	git merge temp
### 查看分支  
	git branch
### Git忽略规则及.gitignore规则不生效的解决办法 ###
Git忽略规则及.gitignore规则不生效的解决办法 :[http://www.pfeng.org/archives/840](http://www.pfeng.org/archives/840)

## 解决打开app launcher崩溃##

*2016年9月14日16:41:05*

- 将Drawable 从bean 中移除


----------
*2016年9月18日13:51:15*
###  monkey 测试  ##
    adb shell monkey -p com.dy.dyth –-throttle 300 500  // monkey 测试命令
### app 管理 ###
- **卸载app**
	1. 判断用户是否卸载成功
	2.

- 影梭购买地址 ：[https://shadowsocks.com/](https://shadowsocks.com/ "影梭地址")

- 服务器搭建 ：  [https://www.loyalsoldier.me/fuck-the-gfw-with-my-own-shadowsocks-server/](https://www.loyalsoldier.me/fuck-the-gfw-with-my-own-shadowsocks-server/ "服务器搭建")

- 服务器搭建(大胡子) :[http://www.barretlee.com/blog/2016/08/03/shadowsocks/](http://www.barretlee.com/blog/2016/08/03/shadowsocks/)
- 搬瓦工 :[http://banwagong.cn/](http://banwagong.cn/)

- 阿里服务器网址 ：[https://account.aliyun.com/alipay/quick_login_return.htm?email=1018966939%40qq.com&is_success=T&notify_id=RqPnCoPT3K9%252Fvwbh3InWesh3oVFcSYEmWEsOrU6Ju2PrpgPSTlRM7rUmqTlV9kW%252F9%252B99&real_name=%E5%BC%A0%E5%AE%89%E7%84%B6&token=20160918d1f108c5face4ef69365c381a89a0X20&user_id=2088602257446202&sign=37548480cde2b1f14e73a5c3dc51220d&sign_type=MD5](https://account.aliyun.com/alipay/quick_login_return.htm?email=1018966939%40qq.com&is_success=T&notify_id=RqPnCoPT3K9%252Fvwbh3InWesh3oVFcSYEmWEsOrU6Ju2PrpgPSTlRM7rUmqTlV9kW%252F9%252B99&real_name=%E5%BC%A0%E5%AE%89%E7%84%B6&token=20160918d1f108c5face4ef69365c381a89a0X20&user_id=2088602257446202&sign=37548480cde2b1f14e73a5c3dc51220d&sign_type=MD5)
- 影梭指南 :[http://www.auooo.com/2015/06/26/shadowsocks%EF%BC%88%E5%BD%B1%E6%A2%AD%EF%BC%89%E4%B8%8D%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97/](http://www.auooo.com/2015/06/26/shadowsocks%EF%BC%88%E5%BD%B1%E6%A2%AD%EF%BC%89%E4%B8%8D%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97/ "影梭指南")


----------
*2016年9月19日 09:43:17*

## 路线 ##
	深圳 ——> 南昌（10.1 5：13）——>长沙 ——> 武昌（10.1 9：31） ——> 襄阳——>南漳（签证）
### 电子地图  ：###
[http://poi.mapbar.com/](http://poi.mapbar.com/ "地图")


----------
*2016年9月20日09:42:44*

## 安装和卸载软件更新界面 ##
- 监听广播，有软件安装获取安装的软件信息，或者重新查询一遍获取所有的app重新加入集合
- notify adapter
- 卸载软件 获取卸载的软件信息 ，从mall集合中移除或者重新查询，notify()
### 问题 ： ###
- **安装软件空指针异常，软件崩溃**
- **安装和卸载软件后焦点跑到home 上了 ，并显示了焦点框**

### adb path ###
adb path :
[C:\DevTools\Android\Sdk\platform-tools](C:\DevTools\Android\Sdk\platform-tools)
### 脚本代码 ： ###
	    @ECHO off  
    	@REM 无限循环的标签  
    	:LOOP  
    	ECHO 请插入手机…  
    	adb wait-for-device  
    	@REM 循环安装本目录下的APK文件  
    	FOR %%i IN (*.apk) DO (   
    	ECHO 正在安装：%%i  
    	adb install "%%i"  
    	)  
    	ECHO 安装完毕；请更换下一台手机！
    	PAUSE  
    	GOTO LOOP  
    	@ECHO on
9/21/2016 11:22:57 AM
### 问题 ： ###
####  *dialog  dismiss 焦点跑到home* ####
RecyclerView进行数据更新时焦点丢失的解决方案 : [http://www.jianshu.com/p/749c0c91eb9c](http://www.jianshu.com/p/749c0c91eb9c)

    android:descendantFocusability="afterDescendants"
    android:duplicateParentState="true"

### 大数据 ###
### 优达学院  ###
>网址 :[https://cn.udacity.com/](https://cn.udacity.com/)

>*"我是一名码农,请尊重我的职业"*

### 问题 ： ###
-  notify后可以获取焦点，但不显示焦点框



----------
 9/22/2016 10:47:37 AM

## 问题 ： ##
### dilog 在卸软件卸载后弹出位置错位 ###

#### 解决方法：
1. 重新计算dilog 弹出的位置 x 轴计算问题 没有发现规律 可能是软件卸载后,布局跟新


##  微信公众平台 ##
> [https://mp.weixin.qq.com/cgi-bin/home?token=511173594](https://mp.weixin.qq.com/cgi-bin/home?token=511173594)

##  问题 : ##
### app移动过程的bug ###
####  解决方法:####
1. 调整移动的逻辑


----------
 9/23/2016 10:29:59 AM
## 问题 ： ##
###  学籍注册 ###
### 移动的逻辑 ：###
>### 微信公众平台,小程序开发文档 :[http://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432&token=&lang=zh_CN](http://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432&token=&lang=zh_CN)


>### 微信小程序：  [http://www.helloxcx.com/](http://www.helloxcx.com/)

>### 小程序api： [http://wxopen.notedown.cn/](http://wxopen.notedown.cn/)


----------
9/24/2016 9:36:06 AM
### 显示网络错误的占位图片　Fresco ##


----------
9/26/2016 9:47:03 AM
### 新建分类文件夹，显示预览效果 ##
1. 预览显示app icon从分类集合中获取显示，分类集合有多少显示多少
2. 数据回显，存储info 到数据库中，并对每个分类添加分类的名字，根据类名查询该分类下的 所有信息
3. 删除和替换，删除，从集合中删除，根据package name 从数据库删除 该app ； 替换：从集合中删除要替换的元素，并加入要替换的app ,从数据库中查找该分类删除该app，添加新的app info


----------
9/27/2016 10:15:47 AM
### 分类页面展示app,数据的回显，删除和替换 ###
1. 回显数据的问题，初始化界面的是时候从sp 中获取集合**mAddList**，在adapter中显示，并添加一个空的待添加item,加到集合，每次点击添加，把添加的应用加到**mAddList**,把集合加到sp 中。
2. 点击添加替换原来的坑位,增加一个坑位(*在倒数第二个位置插入一个元素*)

## 添加应用回显数据 ##

1. 添加到size-1 位置 ，notify

### 1. 替换回显会有问题  ###
### 2. 删除会回到主界面  ###


10/8/2016 9:55:34 AM
## 问题 ##
### app 长按弹出 ,移动 ,卸载,替换,新建分类逻辑的实现 ###
### *解决卸载  替换 打开应用  数据回显  新建分类*  ###

## 小程序教程网址
[http://www.helloxcx.com/article-20.php](http://www.helloxcx.com/article-20.php)
### PAC 翻墙
 [https://www.seavia.com/share/iphone-ipad-mac-firefox-chrome-proxy.html](https://www.seavia.com/share/iphone-ipad-mac-firefox-chrome-proxy.html)
### 小米mini 路由翻墙 ###
[https://seonoco.com/xiaomi-router-ss](https://seonoco.com/xiaomi-router-ss)
## 问题 ###
### app 移动和坑位焦点框出边界 ###

## 问题 #
10/11/2016 9:14:51 AM
### android官网镜像网站 [http://android.youdaxue.com/](http://android.youdaxue.com/) ###
### API 文档镜像 [http://developer.android.youdaxue.com/guide/index.html](http://developer.android.youdaxue.com/guide/index.html) ###
### 优达Android基础视屏 [https://classroom.udacity.com/courses/ud837/lessons/4027328704/concepts/43295507890923#](https://classroom.udacity.com/courses/ud837/lessons/4027328704/concepts/43295507890923#) ###

###  Google 优达资源 [https://discussions.youdaxue.com/t/android/84](https://discussions.youdaxue.com/t/android/84) ###
### Google Play下载apk [http://apps.evozi.com/apk-downloader](http://apps.evozi.com/apk-downloader) ###


----------
#### 解决问题  ####
1. App item 移动


----------

### 理财平台 [https://www.zhihu.com/question/24454597](https://www.zhihu.com/question/24454597) ###


## 问题  ##
10/12/2016 10:34:49 AM
1. app 移动dialog 没有一起移动

### 一个接口demo :  [http://www.jianshu.com/p/a28d4260a9d4](http://www.jianshu.com/p/a28d4260a9d4) ###

### View 的绘制流程 [http://www.idtkm.com/customview/customview1/](http://www.idtkm.com/customview/customview1/) ###
### 2016安卓开发资料大全 [http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2016/1007/6660.html](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2016/1007/6660.html) ###

##  ##
10/13/2016 11:23:27 AM
### 两步搞定Fragment的返回键 [http://blog.csdn.net/lx448593jp/article/details/51121581](http://blog.csdn.net/lx448593jp/article/details/51121581) ###


----------

### Android 中文文档  [http://hukai.me/android-training-course-in-chinese/basics/index.html](http://hukai.me/android-training-course-in-chinese/basics/index.html)###
10/14/2016 3:08:34 PM

## 数据 ##
10/17/2016 4:56:51 PM
      <ImageView
    android:id="@+id/iv_home_app_icon"
    style="@style/unFocusable"
    android:layout_width="143dp"
    android:layout_height="147dp"
    android:layout_centerHorizontal="true"
    android:layout_marginTop="5dp"
    />



##  首页问题 ##
1. 替换没有问题
2. 新建 卸载  移动 item 错乱

使用imageloader 加载图片


### *一切都可以被改变* ###
11/1/2016 10:11:35 AM



----------
**长记性**

### 获取view的位置  [https://my.oschina.net/u/1376187/blog/172792](https://my.oschina.net/u/1376187/blog/172792)###
### 获取view的坐标系：[http://blog.csdn.net/jason0539/article/details/42743531](http://blog.csdn.net/jason0539/article/details/42743531) ###

### 问题 1: 切换后来RecylerView 没有焦点框 ###

----------
11/4/2016 9:37:00 AM
### RecyclerView 局部刷新闪烁 [http://wetest.qq.com/lab/view/176.html?from=content_zhihuzhuanlan](http://wetest.qq.com/lab/view/176.html?from=content_zhihuzhuanlan) ###

### Google 镜像站 [http://xiaoyu2er.github.io/2016/03/16/google-mirror/](http://xiaoyu2er.github.io/2016/03/16/google-mirror/) ###

###  问题1 : 删除一个分类后焦点框不在正确的位置显示 (上面一行最后一个) ###
###  问题2 : 点击卸载,在弹出对话框的时候点击取消,或者返回,item放大正常不能缩小 ( *在弹出菜单时候设置的放大造成的影响*)###
###  问题3 : 在移动过程中操作item 位置不对应   （ 操纵的是前一个bean ）###
###  问题4 : 卸载应用后新的item不能缩小 ###


## 问题 ：  ###
11/8/2016 11:19:03 AM

- 软件安装和卸载后焦点丢失  
- 移动过程中的放大效果


## 问题 ##
11/10/2016 9:18:41 AM

1. 卸载后相同的应用没有卸载
2. 卸载失败，取消有放大效果
3. 移动过程中放大异常


----------
11/11/2016 3:54:01 PM
### 问题 : ###
1. 新建文件夹的逻辑问题 ,移动后新建退出 焦点异常

### 问题 ： ###
11/14/2016 10:19:52 AM
1. 判断记录head 的view 还是记录recyclerView 的view ，当Head 有焦点的时候将position置为-1 ，当RecyclerView 有焦点的时候将Head view 置为null

### 问题 : ###
11/15/2016 9:45:02 AM
1. 记录焦点的view 如果记录view 不为空让记录的view获取焦点，如果为menu 就让menu获取焦点
2. menu 有焦点就显示光圈 没有先不显示 （没有问题了 ）
3. 如果menu hasfocus 按上下键 重现的position 设置为 -1 ；

#### 快捷键: ####

- ctrl + p 参数提示
- ctrl + j 自动代码
- ctrl + n 查找类


### 自定义接口回掉 ###

1. 定义一个接口 OnxxListener  接口中的方法 onXxx()
2. 在需要的回调事件的类中声明接口对象 ， OnxxListener xxlistener ;定义回掉的方法 setOnxxListener(OnxxListener listenr) 将接口对象赋值给listener this.listenr =xxListener
3. 在事件发生的位置调用接口中的方法 xxlistener. onXxx();

### 知乎日报Api ###
[https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)
### gank io API [http://gank.io/api](http://gank.io/api) ###

### mvp 模式 ###
####  获取天气实例   [http://rocko.xyz/2015/02/06/Android%E4%B8%AD%E7%9A%84MVP/](http://rocko.xyz/2015/02/06/Android%E4%B8%AD%E7%9A%84MVP/)####
### [http://www.jianshu.com/p/9a6845b26856](http://www.jianshu.com/p/9a6845b26856) ###
### gank demo : [http://blog.csdn.net/castledrv/article/details/51396637](http://blog.csdn.net/castledrv/article/details/51396637) ###
-  model
	-  entity
	-  impl
-  view
	-  ui
		-  fragment
		-  activity
-  presenter
	-  impl
	-  listener

### 一个API [http://v3.wufazhuce.com:8000/api/hp/bymonth/20161125](http://v3.wufazhuce.com:8000/api/hp/bymonth/20161125)  ###
###[http://119.29.116.107:8088/fmms/](http://119.29.116.107:8088/fmms/) ###
### [http://rest.wufazhuce.com/OneForWeb/one/getHpinfo?strDate=2016-07-25](http://rest.wufazhuce.com/OneForWeb/one/getHpinfo?strDate=2016-11-25) ###
### 问答 [http://v3.wufazhuce.com:8000/api/question/1282](http://v3.wufazhuce.com:8000/api/question/1282)###
### 文章 [http://v3.wufazhuce.com:8000/api/essay/1339](http://v3.wufazhuce.com:8000/api/essay/1339) ###
### 首页 [http://v3.wufazhuce.com:8000/api/hp/idlist/0](http://v3.wufazhuce.com:8000/api/hp/idlist/0)###
### 首页详情 [http://v3.wufazhuce.com:8000/api/hp/detail/1275](http://v3.wufazhuce.com:8000/api/hp/detail/1275) ###

### 其他  ：###
### [http://v3.wufazhuce.com:8000/api/music/idlist/0](http://v3.wufazhuce.com:8000/api/music/idlist/0) ###
### [http://v3.wufazhuce.com:8000/api/movie/list/0](http://v3.wufazhuce.com:8000/api/movie/list/0) ###
### [http://v3.wufazhuce.com:8000/api/movie/detail/%1](http://v3.wufazhuce.com:8000/api/movie/detail/%1) ###
### [http://v3.wufazhuce.com:8000/api/reading/index/](http://v3.wufazhuce.com:8000/api/reading/index/) ###
### [http://v3.wufazhuce.com:8000/api/music/detail/%1](http://v3.wufazhuce.com:8000/api/music/detail/%1) ###

### 原网址[https://gist.github.com/0312birdzhang/6d2ed45457c908a0d290](https://gist.github.com/0312birdzhang/6d2ed45457c908a0d290) ###

### bing 每日图片 api [http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1](http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1) ###

### 混淆 ： ###
  **5分钟搞定android混淆 [http://blog.csdn.net/jdsjlzx/article/details/51853423](http://blog.csdn.net/jdsjlzx/article/details/51853423)**


----------
11/29/2016 10:27:39 AM
### 问题 ###
1. 页面切换，如果有选中item恢复焦点，左边menu会抢焦点

### 解决办法 ###
1. 页面显示的时候，如果记录的有item 就让让所有button 不能获取焦点，焦点移动到左边，需要button 获取焦点的时候，监听按键，使button可以获取焦点  
2. 当button 获取焦点的时候判断是否有item记录，如果有就让不显示焦点图片，没有则显示

### 问题  ###
1. 新建文件夹添加应用后，将首页显示的item移除
2. 从分类中删除，在首页恢复显示

### 解决办法 ###
1. getDatas setDatas


----------
11/30/2016 9:11:11 AM
重新运行程序的时候，应用列表会显示文件夹
### 问题： ###
1. <big> 重新运行程序的时候，应用列表会显示文件夹 </big>
2. 重新运行程序的时候，应用列表会显示文件夹

### 解决办法 ###
1. <font size= 4 color= black>判断类型再加入到集合中</font>
2.


----------
12/1/2016 2:47:38 PM

CSDN 投票 [http://blog.csdn.net/vote/candidate.html?username=lmj623565791](http://blog.csdn.net/vote/candidate.html?username=lmj623565791)
### 问题 ###
1. 最近使用
2. 应用收藏
### 解决办法 ###
1. 使用数据库存储数据 ORMLite


----------
12/2/2016 11:38:11 AM
##### 框架应用[https://bng86.gitbooks.io/android-third-party-/content/greendao.html](https://bng86.gitbooks.io/android-third-party-/content/greendao.html) ###

##### ORMlite 怎删改查 [http://www.cnblogs.com/alexthecoder/p/4277758.html](http://www.cnblogs.com/alexthecoder/p/4277758.html) ###



----------
12/3/2016 5:46:06 PM

### 问题  ###
1. 按下menu键 弹出管理应用的菜单 将移动变为收藏
2. 按下ok键 显示移动菜单
	1. 如果是上面一行，不显示向上移动，显示其他操作
	2. 如果是下面一行，不显示向下移动，显示其他操作


### 问题 ###
1. 按ok键弹出菜单，item 上下左右移动
2. 但


----------
12/7/2016 9:18:41 AM
### 组装配置 ###
1. cpu i5 6500        1200
2. 显卡 gtx1050         1299
3. 主板 华硕B150M-A M.2 500
4. 电源 全汉蓝暴450w    269
5. 机箱 金河田预见N6    169
6. 散热 九州玄冰智能版   49
7. 硬盘  
8. 内存 金士顿120G固态 299
9.<font color= red> 明年双11</font>
9. </br>

=================					<b>3486</b>
### 网盘搜索工具  [http://panc.cc/](http://panc.cc/)###

### 问题  ###
1. 焦点框的放大
2. 按下返回键，焦点丢失

### 问题 ###
1. 上下移动没有view没有放大效果
2. 删除文件夹焦点错乱
3. 新建文件夹错乱
4. 替换焦点框错乱
5. 弹出菜单消失,页面


----------
12/9/2016 1:58:46 PM
### 招商银行卡号  6214 8378 0241 2118###


----------
12/12/2016 10:43:30 AM
### Android 官方课程[http://hukai.me/android-training-course-in-chinese/](http://hukai.me/android-training-course-in-chinese/) ###


----------
12/15/2016 2:36:08 PM
### 重新写数据库 ###


----------
12/16/2016 11:11:40 AM


----------
12/19/2016 5:10:29 PM
流程图工具 亿图图示 :[http://www.edrawsoft.cn/](http://www.edrawsoft.cn/)


----------
12/21/2016 9:59:43 AM

1. 先进行移动操作，然后点击新建文件夹，分类会执行移动操作
2. `adb shell am start -n com.dy.dyth/.ui.activity.LaunchActivity`

### 问题 ###
1. 选择移动,再选择分类,然后返回,弹出框没有影藏
2. 保存移动和插入的数据(移动的数序,和插入的分类)
3. 移动item 选择分类,遥控器按返回 焦点丢失

### 问题 ###
1. 新建分类或者删除焦点错位
2. 移动到最后一个返回键，焦点框丢失
3.



----------
12/26/2016 5:16:48 PM
### 问题  ###
1. 移动到后面 页面切换的恢复错误
2. 移动 和分类的混乱
3. 加入分类的应用从首页删除

### 问题 ###
1. 选择新建分类,不输入名字,点击确定,焦点框错位
2. 在分类中增加应用,返回首页 ,焦点框丢失
3. 替换只显示首页的应用(就是不包括已经添加到分类)
4. 应用分类，替换应用替换掉的重新显示在首页，新的应用从首页删除




### adb截图命令 ###
    adb shell /system/bin/screencap -p /sdcard/image.png
	adb pull /sdcard/image.png c:\dir
### 问题  ###
1. 数据库内存泄露


### Monkey 命令 ###
    adb shell monkey -v -p  com.dy.dyth	 --monitor-native-crashes --throttle 500 10000	>D:/7.22-RK_1.LOG

    adb shell monkey -v -p com.dy.dyth --monitor-native-crashes --throttle 300 10000>D:/5.7-RK1.LOG

    adb shell monkey -v -p  com.dy.dyth --monitor-native-crashes --throttle 300 5000	>D:/NL1.LOG

    //优客超级直播 1万次测试
    adb shell monkey -v -p 	com.dy.dyth	 --monitor-native-crashes --throttle 300 1000

    ps | grep monkey    // 获取monkey 端口

	adb shell monkey -p com.dy.dyth –-throttle 300 5000  >D:/DYTH.LOG




    set rw.sw.defaultlauncherpackage com.dy.dyth
    set rw.sw.defaultlauncherclass com.dy.dyth.LaunchActivity
    set rw.sw.settofirstlauncher 0



----------
1/3/2017 3:44:11 PM
#### -

- <font size =4 color =black>用户卸载软件 从收藏和最近使用中删除</font>



----------
tiem : 2.5
火车 2.4 号
高铁 2.4 初八

### 问题  ###
1.按下菜单键 选择替换 选择点击返回,在按下菜单键,按下返回,焦点丢失

### 抢票时间 ###
1. 12.30  武汉到深圳 z
2. 13.30  武汉到深圳 高铁
3. 16：00 襄阳到深圳 z232
4. 16:00 襄阳东到广州 z124 z232

### 搭建个人博客 ###

教程地址[https://xuanwo.org/2015/03/26/hexo-intor/](https://xuanwo.org/2015/03/26/hexo-intor/)


教程[http://blog.fens.me/hexo-blog-github/](http://blog.fens.me/hexo-blog-github/)

### 我的博客地址
#### @gmail
https://anran0919.github.io/
#### @163 mail ####
https://ancorleone.github.io/
### github ip ###
ping username.github.io


### 域名 [https://dcc.godaddy.com/manage/](https://dcc.godaddy.com/manage/)

### [http://jiji262.github.io/2016/04/15/2016-04-15-hexo-github-pages-blog/](http://jiji262.github.io/2016/04/15/2016-04-15-hexo-github-pages-blog/) ###


### Hexo更新博客命令 ###
    hexo clean // 清空
    hexo g // 生成静态网页
	hexo s // 预览
    hexo d // 更新到github


### hexo 主题

> [github链接](https://github.com/litten/hexo-theme-yilia)

### 给博客添加相册

> [github链接](https://github.com/litten/zing-gallery)

### [GitHub上最火的Android开源项目持续更新中](https://github.com/open-android/Android)......

github最大的痛点在于，拿到开源项目不会用，导入各种报错，readme看不懂，推荐给大家一个链接，所有的 项目都亲测没有问题并且全部配置了详细的步骤和配套视频进行解说，欢迎大家star。
