import{_ as e,V as t,W as s,X as a,Y as i,$ as r,a1 as c,D as o}from"./framework-5e2051d8.js";const d={},l={href:"https://github.com/GeniusVJR/LearningNotes",target:"_blank",rel:"noopener noreferrer"},p=c(`<h2 id="五种布局" tabindex="-1"><a class="header-anchor" href="#五种布局" aria-hidden="true">#</a> 五种布局</h2><h3 id="linearlayout-线性布局" tabindex="-1"><a class="header-anchor" href="#linearlayout-线性布局" aria-hidden="true">#</a> LinearLayout(线性布局)</h3><ol><li>一行或者一列值放置一个控件的布局,可以设置方向,垂直排列或者水平排列,适用于简单的布局</li><li>适用场景:水平或者垂直的简单排列,如登录界面</li></ol><h3 id="relativelayout-相对布局" tabindex="-1"><a class="header-anchor" href="#relativelayout-相对布局" aria-hidden="true">#</a> RelativeLayout(相对布局)</h3><ol><li>是一个相对自由的布局, 由一个view作为参照,来定位下一个view的摆放位置,可以实现比较复杂的布局</li><li>应用场景:适合比较复杂的布局,LinearLayouy能实现的它也能实现</li></ol><h3 id="framelayout-框架布局" tabindex="-1"><a class="header-anchor" href="#framelayout-框架布局" aria-hidden="true">#</a> FrameLayout(框架布局)</h3><ol><li>所有的子view都会放在左上角,无法指定位置,后面的子view会放在前一个view上.</li><li>使用场景: 放置单一的view,如放置Fragment,显示一张图片</li></ol><h3 id="tablelayout-表格布局" tabindex="-1"><a class="header-anchor" href="#tablelayout-表格布局" aria-hidden="true">#</a> TableLayout(表格布局)</h3><ol><li>类似HTML中的table,使用tableRow来布局,tableRow代表一行,其中的每个视图组件代表一个单元格</li><li>使用场景:空间之间存在相应关系</li></ol><h3 id="absolutelayout-绝对布局" tabindex="-1"><a class="header-anchor" href="#absolutelayout-绝对布局" aria-hidden="true">#</a> AbsoluteLayout (绝对布局)</h3><ol><li>采用坐标轴的方式来定位view,左上角坐标为(0,0),x轴向右递增,y轴向下递增</li><li>使用场景:准确定位控件位置,但是Android设备的屏幕尺寸,分辨率差别很大,无法解决适配问题,该布局已经过时</li></ol><h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h2><h3 id="activity的生命周期" tabindex="-1"><a class="header-anchor" href="#activity的生命周期" aria-hidden="true">#</a> - Activity的生命周期</h3><ol><li>正常的生命周期:onCreate -&gt; onStart -&gt; onResume -&gt; onPause -&gt; onStop -&gt; onDestory</li><li>转到其他Activity或者按下home键 执行onPause() -&gt; onStop 进入停滞状态</li><li>Activity返回前台:onRestart() -&gt; onStart() -&gt; onResume()</li><li>当系统内存不足会将后台的Activity杀死,此时这个Activity任然在任务栈中只是引用指向的对象已经为空,若再次回到这个Activity会重新走一遍生命周期</li><li>锁屏: onPause -&gt; onStop</li><li>解锁: onStart -&gt; onResume</li></ol><figure><img src="http://oje1oqb9c.bkt.clouddn.com/activity_life.pngactivity_life.png" alt="生命周期图" tabindex="0" loading="lazy"><figcaption>生命周期图</figcaption></figure><h3 id="activty任务栈" tabindex="-1"><a class="header-anchor" href="#activty任务栈" aria-hidden="true">#</a> Activty任务栈</h3><blockquote><p>任务栈是一种先进后出的结构,每个app默认只有一个任务栈以包名命名,位于栈顶的Activity处于焦点状态,当按下back键时,栈内的Activity会一个一个出栈,调用onDestory()方法,如果栈内没有Activity,系统就会回收这个栈.</p></blockquote><h3 id="启动模式" tabindex="-1"><a class="header-anchor" href="#启动模式" aria-hidden="true">#</a> 启动模式:</h3><ul><li><p>standard :默认的启动模式,每次创建一个新的Activity实例,将其压入任务栈栈顶,不管栈内是否存在这个Activity.Activity启动三次就会调用三次Activity的生命周期.</p></li><li><p>singleTop:栈顶复用模式,启动一个Activity,如果栈顶存在这个Activity的实例,就不在创建新的Activity实例,启动多次也不会创建新的实例,会调用Activity的newIntance()方法,如果栈内存在这个Activity的实例,但不是在栈顶,作用与standard模式一样</p></li><li><p>singleTask:栈内复用模式,创建Activity的时候,系统会确认它需要的任务栈是否已经创建,否则再创建任务栈,然后放入Activity,如果栈内有一个Activity实例,那么这个Activity会被调到栈顶,调用newInstance()方法,并且会清理这个实例上面的所有Activity</p></li><li><p>singleInstance:加强版的singleTask模式,这种模式Activity实例会单独存在一个任务栈中,由于栈内复用的特性,以后不会再创建新的实例,除非任务栈被销毁</p></li></ul><blockquote><p>Activity的堆栈管理是以ActivityRecord为单位的,所有的ActivityRecord都放在一个list中,可以认为一个ActivityRecord就是一个Activity栈</p></blockquote><hr><h3 id="activity的缓存" tabindex="-1"><a class="header-anchor" href="#activity的缓存" aria-hidden="true">#</a> Activity的缓存</h3><ul><li><p>有两个Activity A,B ,从A进入B,一段时间后,系统可能叫A回收,这时在按back键回到A,会重新走A的生命周期方法onCreate -&gt; onStart -&gt; onResume ,A被重新创建了一次,这时A中保存的数据和状态就会丢失</p></li><li><p>为了恢复状态,使用onSaveInstanceState()方法保存临时数据和状态,此方法会在Activity销毁前调用,方法中有Bundle参数保存,putString(),putInt()等方法,方法中传入一个参数好一个值,数据保存后会在onCreate()中恢复</p></li><li><p>onSaveInstanceState调用时机:即系统未经你允许销毁了你的Activity,这是系统的责任，因为它必须要提供一个机会让你保存你的数据</p></li><li><p>onSaveInstanceState() 会在onStop()前执行,但不保证是在onPause之前还是之后触发</p></li></ul><p><strong>代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">TAG</span> <span class="token operator">=</span> <span class="token string">&quot;MainActivity&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SAVE_KEY</span> <span class="token operator">=</span><span class="token string">&quot;save_key&quot;</span> <span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">// 恢复保存的内容</span>
           <span class="token class-name">String</span> save <span class="token operator">=</span> savedInstanceState<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token constant">SAVE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">,</span><span class="token string">&quot;=== 恢复保存的内容 ==&quot;</span><span class="token operator">+</span>save<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
        <span class="token function">initEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存Activity的状态
     * <span class="token keyword">@param</span> <span class="token parameter">outState</span>
     * <span class="token keyword">@param</span> <span class="token parameter">outPersistentState</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSaveInstanceState</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> outState<span class="token punctuation">,</span> <span class="token class-name">PersistableBundle</span> outPersistentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onSaveInstanceState</span><span class="token punctuation">(</span>outState<span class="token punctuation">,</span> outPersistentState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        outState<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token constant">SAVE_KEY</span><span class="token punctuation">,</span><span class="token string">&quot;保存字符串&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><ul><li>Intent可以传递的数据类型: 可以传递基本数据类型好基本数据类型的数组,以及实现需序列化接口的飞基本数据类型</li></ul><h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2><h3 id="fragment的生命周期和activity的关系" tabindex="-1"><a class="header-anchor" href="#fragment的生命周期和activity的关系" aria-hidden="true">#</a> Fragment的生命周期和Activity的关系</h3><p>onAttach() -&gt; onCreate() -&gt; onCreateView() -&gt; onViewCreatd() -&gt; Activity onCreated() .....</p><figure><img src="http://oje1oqb9c.bkt.clouddn.com/image/fragment_and_activity.jpg" alt="Fragment的生命周期和Activity的关系" tabindex="0" loading="lazy"><figcaption>Fragment的生命周期和Activity的关系</figcaption></figure><h3 id="fragment的生命周期" tabindex="-1"><a class="header-anchor" href="#fragment的生命周期" aria-hidden="true">#</a> Fragment的生命周期</h3><figure><img src="http://oje1oqb9c.bkt.clouddn.com/image/fragment_life.png" alt="Fragment的生命周期图" tabindex="0" loading="lazy"><figcaption>Fragment的生命周期图</figcaption></figure><h2 id="broadcast-receiver" tabindex="-1"><a class="header-anchor" href="#broadcast-receiver" aria-hidden="true">#</a> Broadcast Receiver</h2><h3 id="的两种动态注册和静态注册有什么区别" tabindex="-1"><a class="header-anchor" href="#的两种动态注册和静态注册有什么区别" aria-hidden="true">#</a> 的两种动态注册和静态注册有什么区别</h3><ul><li>动态注册: 在代码中注册,app退出就不能接收到广播</li><li>静态注册: 在清单文件中注册,app退出依旧可以接受到广播</li></ul><h2 id="contentprovider" tabindex="-1"><a class="header-anchor" href="#contentprovider" aria-hidden="true">#</a> ContentProvider</h2><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h2><h3 id="为什么在service中创建子线程" tabindex="-1"><a class="header-anchor" href="#为什么在service中创建子线程" aria-hidden="true">#</a> 为什么在Service中创建子线程</h3><ul><li>在Activity中创建一个子线程,但Activity被销毁后,就不能获取子线程的实例,而且在在其他Activity中无法对其操作</li><li>在Service创建中就不同,所有的Activity都可以对其进行操作,即使Activity 被销毁后,重新与Service进行关联,就可以获取Binder的实例.因此使用Service做后台处理,Activity可以放心的finish ,不用担心对后台任务无法控制的情况</li></ul><h3 id="service的两种启动方法-有什么区别" tabindex="-1"><a class="header-anchor" href="#service的两种启动方法-有什么区别" aria-hidden="true">#</a> Service的两种启动方法,有什么区别</h3><ul><li>Context bindService 启动Service 生命周期好Context 绑定在一起</li><li>Context startService 启动Service 生命周期和context 无关</li></ul><h3 id="如何保证service不被杀死" tabindex="-1"><a class="header-anchor" href="#如何保证service不被杀死" aria-hidden="true">#</a> 如何保证Service不被杀死</h3><h2 id="动画有哪几类-各有什么特点-有什么区别" tabindex="-1"><a class="header-anchor" href="#动画有哪几类-各有什么特点-有什么区别" aria-hidden="true">#</a> 动画有哪几类,各有什么特点,有什么区别</h2><h2 id="android的数据存储形式" tabindex="-1"><a class="header-anchor" href="#android的数据存储形式" aria-hidden="true">#</a> Android的数据存储形式</h2><h2 id="sqlite的基本操作" tabindex="-1"><a class="header-anchor" href="#sqlite的基本操作" aria-hidden="true">#</a> Sqlite的基本操作</h2><h2 id="如何判断应用被强杀" tabindex="-1"><a class="header-anchor" href="#如何判断应用被强杀" aria-hidden="true">#</a> 如何判断应用被强杀</h2><h2 id="json有什么优劣势" tabindex="-1"><a class="header-anchor" href="#json有什么优劣势" aria-hidden="true">#</a> Json有什么优劣势</h2><h2 id="asset目录与res目录的区别" tabindex="-1"><a class="header-anchor" href="#asset目录与res目录的区别" aria-hidden="true">#</a> Asset目录与res目录的区别</h2><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><h3 id="android怎么加速启动activity" tabindex="-1"><a class="header-anchor" href="#android怎么加速启动activity" aria-hidden="true">#</a> Android怎么加速启动Activity</h3><h3 id="android内存优化方法" tabindex="-1"><a class="header-anchor" href="#android内存优化方法" aria-hidden="true">#</a> Android内存优化方法</h3><h2 id="自定义view的流程" tabindex="-1"><a class="header-anchor" href="#自定义view的流程" aria-hidden="true">#</a> 自定义View的流程</h2><h2 id="android长连接-怎样处理心跳机制" tabindex="-1"><a class="header-anchor" href="#android长连接-怎样处理心跳机制" aria-hidden="true">#</a> Android长连接,怎样处理心跳机制</h2><h2 id="view的绘制流程" tabindex="-1"><a class="header-anchor" href="#view的绘制流程" aria-hidden="true">#</a> View的绘制流程</h2><h2 id="下拉刷新的实现原理" tabindex="-1"><a class="header-anchor" href="#下拉刷新的实现原理" aria-hidden="true">#</a> 下拉刷新的实现原理</h2><h2 id="常用框架和源码分析-底层原理" tabindex="-1"><a class="header-anchor" href="#常用框架和源码分析-底层原理" aria-hidden="true">#</a> 常用框架和源码分析，底层原理</h2><h2 id="android新特性" tabindex="-1"><a class="header-anchor" href="#android新特性" aria-hidden="true">#</a> Android新特性</h2><h3 id="_5-0" tabindex="-1"><a class="header-anchor" href="#_5-0" aria-hidden="true">#</a> 5.0</h3><h3 id="_6-0" tabindex="-1"><a class="header-anchor" href="#_6-0" aria-hidden="true">#</a> 6.0</h3><h3 id="_7-0" tabindex="-1"><a class="header-anchor" href="#_7-0" aria-hidden="true">#</a> 7.0</h3><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><h2 id="intenservice" tabindex="-1"><a class="header-anchor" href="#intenservice" aria-hidden="true">#</a> IntenService</h2><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><h2 id="图片缓存" tabindex="-1"><a class="header-anchor" href="#图片缓存" aria-hidden="true">#</a> 图片缓存</h2><h3 id="查看程序可用最高内存" tabindex="-1"><a class="header-anchor" href="#查看程序可用最高内存" aria-hidden="true">#</a> 查看程序可用最高内存</h3><h2 id="gradle" tabindex="-1"><a class="header-anchor" href="#gradle" aria-hidden="true">#</a> Gradle</h2><h3 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具" aria-hidden="true">#</a> 构建工具</h3>`,69);function h(u,v){const n=o("ExternalLinkIcon");return t(),s("div",null,[a("blockquote",null,[a("p",null,[a("a",l,[i("Android学习笔记"),r(n)])])]),p])}const b=e(d,[["render",h],["__file","Android基础知识.html.vue"]]);export{b as default};
