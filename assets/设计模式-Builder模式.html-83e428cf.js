import{_ as n,V as s,W as a,a1 as e}from"./framework-5e2051d8.js";const p={},t=e(`<h2 id="builder模式" tabindex="-1"><a class="header-anchor" href="#builder模式" aria-hidden="true">#</a> Builder模式</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义:</h3><p>将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示</p><h3 id="设计的步骤" tabindex="-1"><a class="header-anchor" href="#设计的步骤" aria-hidden="true">#</a> 设计的步骤:</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppleBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">,</span><span class="token string">&quot;test result &gt;&gt;&gt;&gt;&gt; :: &quot;</span> <span class="token operator">+</span>builder<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>以组装电脑为例,创建电脑的抽象类,包含os ram,core定义,提供设置的抽象方法</p></li><li><p>创建要组装的具体电脑类AppleComputer,继承Computer类,实现所用方法</p></li><li><p>创建抽象的Builder类,提供builder的设置方法,另外提供返回Computer的create的抽象方法</p></li><li><p>创建具体的AppleBuilder类实现抽象方法,创建AppleComputer 实例对象,并设置数据,返回AppleComputer的实例</p></li><li><p>创建具体的Director类,构造方法中接受builder对象,提供接受数据的construct 方法,将参数传递给builder对象</p></li><li><p>传递的参数最终被AppleBuilder接收,并返回一个具体的AppleComputer对象</p></li></ol><h3 id="具体代码" tabindex="-1"><a class="header-anchor" href="#具体代码" aria-hidden="true">#</a> 具体代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>singel_instance<span class="token punctuation">.</span>builder</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Created by demo on 2017/2/8 0008
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
        <span class="token keyword">protected</span> <span class="token keyword">int</span> mCore <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">protected</span> <span class="token keyword">int</span> mRam <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">protected</span> <span class="token class-name">String</span> mOs <span class="token operator">=</span> <span class="token string">&quot;dos&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">protected</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setCore</span><span class="token punctuation">(</span><span class="token keyword">int</span> core<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token keyword">int</span> rem<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setOs</span><span class="token punctuation">(</span><span class="token class-name">String</span> os<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;Computer{&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;mCore=&quot;</span> <span class="token operator">+</span> mCore <span class="token operator">+</span>
                    <span class="token string">&quot;, mRam=&quot;</span> <span class="token operator">+</span> mRam <span class="token operator">+</span>
                    <span class="token string">&quot;, mOs=&#39;&quot;</span> <span class="token operator">+</span> mOs <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                    <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>singel_instance<span class="token punctuation">.</span>builder</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Created by demo on 2017/2/8 0008
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppleComputer</span> <span class="token keyword">extends</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>


        <span class="token keyword">protected</span> <span class="token class-name">AppleComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCore</span><span class="token punctuation">(</span><span class="token keyword">int</span> core<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>mCore <span class="token operator">=</span> core<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token keyword">int</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>mRam <span class="token operator">=</span> ram<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOs</span><span class="token punctuation">(</span><span class="token class-name">String</span> os<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>mOs <span class="token operator">=</span> os<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>singel_instance<span class="token punctuation">.</span>builder</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
    * Created by demo on 2017/2/8 0008
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppleBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span>  <span class="token class-name">Computer</span> mApplePc <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">AppleComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildCore</span><span class="token punctuation">(</span><span class="token keyword">int</span> core<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mApplePc<span class="token punctuation">.</span><span class="token function">setCore</span><span class="token punctuation">(</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildRam</span><span class="token punctuation">(</span><span class="token keyword">int</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mApplePc<span class="token punctuation">.</span><span class="token function">setRem</span><span class="token punctuation">(</span>ram<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildOs</span><span class="token punctuation">(</span><span class="token class-name">String</span> os<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mApplePc<span class="token punctuation">.</span><span class="token function">setOs</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
            <span class="token keyword">return</span> mApplePc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>singel_instance<span class="token punctuation">.</span>builder</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created by demo on 2017/2/8 0008
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildCore</span><span class="token punctuation">(</span><span class="token keyword">int</span> core<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildRam</span><span class="token punctuation">(</span><span class="token keyword">int</span> ram<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">buildOs</span><span class="token punctuation">(</span><span class="token class-name">String</span> os<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Computer</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>singel_instance<span class="token punctuation">.</span>builder</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Created by demo on 2017/2/8 0008
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
        <span class="token class-name">Builder</span> mBuilder<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mBuilder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">construct</span><span class="token punctuation">(</span><span class="token keyword">int</span> core<span class="token punctuation">,</span><span class="token keyword">int</span> ram<span class="token punctuation">,</span> <span class="token class-name">String</span> os<span class="token punctuation">)</span><span class="token punctuation">{</span>
            mBuilder<span class="token punctuation">.</span><span class="token function">buildCore</span><span class="token punctuation">(</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mBuilder<span class="token punctuation">.</span><span class="token function">buildRam</span><span class="token punctuation">(</span>ram<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mBuilder<span class="token punctuation">.</span><span class="token function">buildOs</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// 测试运行效果</span>
 <span class="token class-name">Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppleBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
 director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">,</span><span class="token string">&quot;test result &gt;&gt;&gt;&gt;&gt; :: &quot;</span> <span class="token operator">+</span>builder<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","设计模式-Builder模式.html.vue"]]);export{d as default};
