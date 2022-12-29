import{_ as e,V as r,W as n,a1 as i}from"./framework-5e2051d8.js";const a={},l=i(`<h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><ul><li>[0-9a-zA-Z_]匹配任意数字字母和下划线</li><li>[0-9a-zA-Z_]+ 匹配至少一个字母数字下划线组成的字符串</li><li>[a-zA-Z_][0-9a-zA-Z_]* 匹配以字母或者下划线开头，后面跟任意个字母或数字</li><li>[a-zA-Z_][0-9a-zA-Z_]{0，19} 匹配一字母或者下划线开头，后面0到19个数字或者字母下划线</li><li>A|B 可以匹配 A或者B ，（P\\p)ython可以匹配python,或者Python</li><li>^ 表示行的开头</li><li>^\\d表示以数字开头</li><li>$ 表示行的末尾</li></ul><h3 id="re模块" tabindex="-1"><a class="header-anchor" href="#re模块" aria-hidden="true">#</a> re模块</h3><ul><li><p>判断表达式是否匹配成功,如果成功,返回一个Match对象,失败返回None</p><pre><code>  # 判断一个电话号码
  s= re.match(r&#39;^\\d{3}-\\d{3,8}$&#39;,&#39;012-1234&#39;)
  print (s)
</code></pre></li><li><p>切割字符串</p><pre><code>  # 通过空格切割字符串
  str = &#39;q we r   t&#39;
  r =re.split(r&#39;[\\s]+&#39;,str);
  print (r)
</code></pre></li></ul><h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h3><ul><li><p>除了简单的匹配,正则表达式还可以提取子串,用()表示要提取的分组(Group)</p><pre><code>  # 提取分组
  # 提取区号和电话号码
  s = re.match(r&#39;^(\\d{3})-(\\d{3,8})$&#39;,&#39;021-5386112&#39;)
  print (s)
  g1 =s.group(1)
  g2 =s.group(2)
  print (g1)
  print (g2)
</code></pre></li></ul><h3 id="预编译" tabindex="-1"><a class="header-anchor" href="#预编译" aria-hidden="true">#</a> 预编译</h3><ul><li><p>如果执行横多次的正则匹配,每次执行都要对正则表达式进行编译,出于效率我们可以预编译正则表达式</p><pre><code>  # 编译
  re_tel = re.compile(r&#39;^(\\d{3})-(\\d{3,8})$&#39;)
  # 使用
  s = re_tel.match(&#39;021-5386112&#39;).group()
  print (s)
</code></pre></li></ul>`,8),t=[l];function d(h,o){return r(),n("div",null,t)}const p=e(a,[["render",d],["__file","自学Python-正则表达式.html.vue"]]);export{p as default};
