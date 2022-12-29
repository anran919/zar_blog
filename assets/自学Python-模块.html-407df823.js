import{_ as n,V as e,W as t,a1 as r}from"./framework-5e2051d8.js";const a={},i=r(`<h3 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h3><p><strong>标准注释</strong></p><pre><code>#!/usr/bin/env python3
# -*- coding: utf-8 -*-
</code></pre><ul><li><p>test_1.py</p><pre><code> #!/usr/bin/env python3
 # -*- coding: utf-8 -*-
 &#39;a test module&#39;
 ___author__=&#39;anakin&#39;

 import sys

 def test():
     args = sys.argv
     if len(args)==1:
         print(&#39;hello,world&#39;)
     elif len(args)==2:
         print(&#39;hello :&#39;+ args[1])
     else:
         print(&#39;too many argument!&#39;)

 if __name__==&#39;__main__&#39;:
     test()
</code></pre></li><li><p>test_2.py</p><pre><code>  import test_1

  test_1.test()
</code></pre></li></ul><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><ul><li><p>外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public。</p><pre><code>  #!/usr/bin/env python3
  # -*- coding: utf-8 -*-
  &#39;函数的作用域&#39;
  ___author__=&#39;anakin&#39;

  def _private_1(name):
      print(&#39;private 1 run&#39;)

  def _private_2(name):
      print(&#39;private 2 run&#39;)

  def greeting(name):
      if len(name)&gt;3:
          return _private_1(name)
      else :
          return _private_2(name)
</code></pre></li></ul><h3 id="安装第三方模块" tabindex="-1"><a class="header-anchor" href="#安装第三方模块" aria-hidden="true">#</a> 安装第三方模块</h3><p>安装Pillow</p><pre><code>安装Pillow
pip install Pillow

from PIL import Image
im = Image.open(&#39;img.png&#39;)
print(im.format,im.size,im.mode)
</code></pre><p>生成缩略图</p><pre><code>im.thumbnail((200, 100))
im.save(&#39;thmb.jpg&#39;,&#39;JPEG&#39;)
</code></pre>`,11),o=[i];function p(_,s){return e(),t("div",null,o)}const l=n(a,[["render",p],["__file","自学Python-模块.html.vue"]]);export{l as default};
