import{_ as e,V as n,W as r,a1 as i}from"./framework-5e2051d8.js";const o={},t=i(`<h2 id="读文件" tabindex="-1"><a class="header-anchor" href="#读文件" aria-hidden="true">#</a> 读文件</h2><ul><li>使用open(&#39;文件地址&#39;，&#39;标识符&#39;)函数</li><li>使用read()读取</li><li>最后一步使用close(关闭)</li></ul><p>使用**<code>with </code>**读取，自动关闭</p><pre><code>	# 使用with 读取，自动关闭
	with open(&#39;D:/pro/python/test.txt&#39;,&#39;r&#39;) as f:
	    print(f.read())
</code></pre><ul><li><p>调用readline() 可以一次读取一行内容</p></li><li><p>调用readlines() 一次读取所有的内容，并返回一个list</p></li><li><p>不能确定文件大小使用readlines()</p><pre><code>  with open(&#39;D:/pro/python/test.txt&#39;,&#39;r&#39;) as f:
      for line in f.readlines():
          print(line.strip())
</code></pre></li></ul><h3 id="读取二进制文件" tabindex="-1"><a class="header-anchor" href="#读取二进制文件" aria-hidden="true">#</a> 读取二进制文件</h3><ul><li><p>打开模式使用&#39;rb&#39;</p><pre><code>  # 读取二进制文件
  with open(&#39;D:/pro/python/img.png&#39;,&#39;rb&#39;) as f:
      for line in f.readlines():
          print(line.strip())
</code></pre></li></ul><h3 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h3><ul><li><p>要读取非UTF-8编码的文本文件，需要给open()函数传入encoding参数</p><pre><code>  f = open(&#39;/Users/michael/gbk.txt&#39;, &#39;r&#39;, encoding=&#39;gbk&#39;)
</code></pre></li><li><p>遇到非法编码文件，open函数还接受一个errors参数，表示遇到编码错误后如何处理，最简单的方式就直接忽略</p><pre><code>  f = open(&#39;/Users/michael/gbk.txt&#39;, &#39;r&#39;,
  encoding=&#39;gbk&#39;,errors = &#39;ignore&#39;)
</code></pre></li></ul><h2 id="写文件" tabindex="-1"><a class="header-anchor" href="#写文件" aria-hidden="true">#</a> 写文件</h2><blockquote><p>与读文件的区别open() 函数的的标识符，传入&#39;w&#39;,&#39;wb&#39;表示写文件和二进制文件</p></blockquote><ul><li><p>写文件</p><pre><code>  with open(&#39;D:/pro/python/write.txt&#39;,&#39;w&#39;) as f:
      f.write(&#39;hello write new file... &#39;)
</code></pre></li></ul><h2 id="stringio-和bytesio" tabindex="-1"><a class="header-anchor" href="#stringio-和bytesio" aria-hidden="true">#</a> StringIO 和BytesIO</h2><h3 id="stringio" tabindex="-1"><a class="header-anchor" href="#stringio" aria-hidden="true">#</a> StringIO</h3><p>很多时候，数据读写不一定是文件，也可以在内存中读写</p><ul><li><p>在内存中写str，使用<code>getvalue()</code>获取写入的内容</p><pre><code>   from io import StringIO
  f = StringIO()
  f.write(&#39;hello&#39;)
  f.write(&#39;hello&#39;)
  f.write(&#39;hello&#39;)
  print(f.getvalue())
</code></pre></li><li><p>读取StringIO</p><pre><code>  while True:
      s =f.readline()
      if s ==&#39;&#39;:
          print(&#39;s ==&#39;+ s)
          break
      print(s.strip())
</code></pre></li></ul><h3 id="bytesio" tabindex="-1"><a class="header-anchor" href="#bytesio" aria-hidden="true">#</a> BytesIO###</h3><ul><li><p>内存中读写二进制文件</p><pre><code>  # 写入二进制文件
  from io import BytesIO
  f = BytesIO()
  f.write(&#39;你好&#39;.encode(&#39;utf-8&#39;))
  s= f.getvalue()
  print(s)
</code></pre></li><li><p>读取二进制文件</p><pre><code>  # 读取二进制文件
  from io import BytesIO
  f = BytesIO(b&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;)
  s= f.read()
  print(s)
</code></pre></li></ul><h3 id="操作文件和目录" tabindex="-1"><a class="header-anchor" href="#操作文件和目录" aria-hidden="true">#</a> 操作文件和目录</h3><ul><li><p><strong>查看当前目录的绝对路径</strong></p><pre><code>  import os
  v= os.path.abspath(&#39;&#39;) # 查看当前目录的绝对路径
  print(v)
</code></pre></li><li><p>在某个路径下创建一个新目录,首页把新路径目录表示出来</p><pre><code>  # 删除一个文件夹
  os.rmdir(&#39;D:/pro/python/testdir&#39;)

  # 对文章重命名
  a = os.rename(&#39;test.txt&#39;,&#39;test.py&#39;)

  #删除文件
  d = os.remove(&#39;test.py&#39;)
</code></pre></li><li><p>过滤文件</p><pre><code>  # 过滤文件,比如列出当前目录下的所有文件夹
  s = [x for x in os.listdir(&#39;.&#39;) if os.path.isdir(x)]
  print(s)

  # 过滤文件 ,获得所有的.py文件
  s = [ x for x  in os.listdir(&#39;.&#39;) if os.path.isfile(x) and
  os.path.splitext(x)[1]==&#39;.py&#39;]
  print(s)
</code></pre></li></ul><h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h3><blockquote><p>我们把变量从内存中变成可存储的过程称为序列化 序列化后的内容可以写到磁盘上或者通过网络传输</p></blockquote><ul><li><p>将对象序列化</p><pre><code>  import pickle
  d = dict(name=&#39;zhanghua&#39;,age=18,score=100)
  s =pickle.dumps(d)
  print(s)
</code></pre></li><li><p>将对象写入文件中</p><pre><code> import pickle
 d = dict(name=&#39;zhanghua&#39;,age=18,score=100)
 s =pickle.dumps(d)
 print(s)
 f= open(&#39;dump.txt&#39;,&#39;wb&#39;)
 pickle.dump(d,f)
 f.close()
</code></pre></li><li><p>读取存储在文件中的对象</p><pre><code>  # 读取存储的对象
  r= open(&#39;dump.txt&#39;,&#39;rb&#39;)
  o = pickle.load(r)
  r.close()
  print(o)
</code></pre></li></ul><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3><p>我们要在不同的编程语言中传递对象,就必须把对象序列化为标准格式,如xml 和json</p><ul><li><p>序列化json和反序列化json</p><pre><code>  import json
  # 序列化
  d = dict(name=&#39;Bob&#39;,age=20,score=88)
  j = json.dumps(d)
  print(j)

  # 反序列化
  json_str = &#39;{&quot;age&quot;: 20, &quot;score&quot;: 88, &quot;name&quot;: &quot;Bob&quot;}&#39;
  s =json.loads(json_str)
  print(s)
</code></pre></li><li><p>将实例对象序列化</p><pre><code>  class Student(object):
      def __init__(self, name,age,score):
          self.name = name
          self.age = age
          self.score = score
  s = Student(&#39;anakin&#39;,18,100)
  # 将实例转换为json
  j = json.dumps(s,default=lambda obj : obj.__dict__)
  print(j)
</code></pre></li><li><p>json反序列化成对象</p><pre><code>  # json 反序列化成对象
  def dict2student(d):
      return Student(d[&#39;name&#39;],d[&#39;age&#39;],d[&#39;score&#39;])
  json_str = &#39;{&quot;score&quot;: 100, &quot;name&quot;: &quot;anakin&quot;, &quot;age&quot;: 18}&#39;
  r = json.loads(json_str, object_hook=dict2student)
  print(r)
</code></pre></li></ul>`,26),p=[t];function s(d,a){return n(),r("div",null,p)}const c=e(o,[["render",s],["__file","自学Python-IO编程.html.vue"]]);export{c as default};
