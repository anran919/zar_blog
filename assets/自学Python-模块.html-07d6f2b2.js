const t=JSON.parse(`{"key":"v-0fe7edfb","path":"/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97.html","title":"自学Python-模块","lang":"zh-CN","frontmatter":{"title":"自学Python-模块","date":"2017-01-11T17:35:35.000Z","category":["Python"],"tag":["Python"],"description":"使用模块 标准注释 #!/usr/bin/env python3 # -*- coding: utf-8 -*- test_1.py #!/usr/bin/env python3 # -*- coding: utf-8 -*- 'a test module' ___author__='anakin' import sys def test(): args = sys.argv if len(args)==1: print('hello,world') elif len(args)==2: print('hello :'+ args[1]) else: print('too many argument!') if __name__=='__main__': test() test_2.py import test_1 test_1.test()","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zar_blog/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:site_name","content":"Anakin's blog"}],["meta",{"property":"og:title","content":"自学Python-模块"}],["meta",{"property":"og:description","content":"使用模块 标准注释 #!/usr/bin/env python3 # -*- coding: utf-8 -*- test_1.py #!/usr/bin/env python3 # -*- coding: utf-8 -*- 'a test module' ___author__='anakin' import sys def test(): args = sys.argv if len(args)==1: print('hello,world') elif len(args)==2: print('hello :'+ args[1]) else: print('too many argument!') if __name__=='__main__': test() test_2.py import test_1 test_1.test()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T13:57:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2017-01-11T17:35:35.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T13:57:20.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/zar_blog/enposts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97.html"}]]},"headers":[{"level":3,"title":"使用模块","slug":"使用模块","link":"#使用模块","children":[]},{"level":3,"title":"作用域","slug":"作用域","link":"#作用域","children":[]},{"level":3,"title":"安装第三方模块","slug":"安装第三方模块","link":"#安装第三方模块","children":[]}],"git":{"createdTime":1672233821000,"updatedTime":1672322240000,"contributors":[{"name":"张安然","email":"anran0919@163.com","commits":2}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"posts/python/自学Python-模块.md","localizedDate":"2017年1月11日","excerpt":"<h3> 使用模块</h3>\\n<p><strong>标准注释</strong></p>\\n<pre><code>#!/usr/bin/env python3\\n# -*- coding: utf-8 -*-\\n</code></pre>\\n<ul>\\n<li>\\n<p>test_1.py</p>\\n<pre><code> #!/usr/bin/env python3\\n # -*- coding: utf-8 -*-\\n 'a test module'\\n ___author__='anakin'\\n\\n import sys\\n\\n def test():\\n     args = sys.argv\\n     if len(args)==1:\\n         print('hello,world')\\n     elif len(args)==2:\\n         print('hello :'+ args[1])\\n     else:\\n         print('too many argument!')\\n\\n if __name__=='__main__':\\n     test()\\n</code></pre>\\n</li>\\n<li>\\n<p>test_2.py</p>\\n<pre><code>  import test_1\\n\\n  test_1.test()\\n</code></pre>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
