const n=JSON.parse(`{"key":"v-25e47600","path":"/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F.html","title":"Builder模式.md","lang":"zh-CN","frontmatter":{"title":"Builder模式.md","date":"2017-02-17T11:25:59.000Z","category":["Java"],"tags":["设计模式"],"description":"Builder模式 定义: 将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示 设计的步骤: Builder builder = new AppleBuilder(); Director director = new Director(builder); director.construct(4,2,\\"linux\\"); Log.d(TAG,\\"test result &gt;&gt;&gt;&gt;&gt; :: \\" +builder.create().toString());","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zar_blog/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Anakin's blog"}],["meta",{"property":"og:title","content":"Builder模式.md"}],["meta",{"property":"og:description","content":"Builder模式 定义: 将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示 设计的步骤: Builder builder = new AppleBuilder(); Director director = new Director(builder); director.construct(4,2,\\"linux\\"); Log.d(TAG,\\"test result &gt;&gt;&gt;&gt;&gt; :: \\" +builder.create().toString());"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T13:57:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2017-02-17T11:25:59.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T13:57:20.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/zar_blog/enposts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F.html"}]]},"headers":[{"level":2,"title":"Builder模式","slug":"builder模式","link":"#builder模式","children":[{"level":3,"title":"定义:","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"设计的步骤:","slug":"设计的步骤","link":"#设计的步骤","children":[]},{"level":3,"title":"具体代码","slug":"具体代码","link":"#具体代码","children":[]}]}],"git":{"createdTime":1672233821000,"updatedTime":1672322240000,"contributors":[{"name":"张安然","email":"anran0919@163.com","commits":2}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"posts/java/设计模式-Builder模式.md","localizedDate":"2017年2月17日","excerpt":"<h2> Builder模式</h2>\\n<h3> 定义:</h3>\\n<p>将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示</p>\\n<h3> 设计的步骤:</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>    <span class=\\"token class-name\\">Builder</span> builder <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">AppleBuilder</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">Director</span> director <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Director</span><span class=\\"token punctuation\\">(</span>builder<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    director<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">construct</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"linux\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">Log</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">d</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">TAG</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"test result &gt;&gt;&gt;&gt;&gt; :: \\"</span> <span class=\\"token operator\\">+</span>builder<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
