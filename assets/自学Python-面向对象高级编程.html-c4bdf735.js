import{_ as e,V as n,W as t,a1 as s}from"./framework-5e2051d8.js";const r={},a=s(`<h2 id="使用-slots" tabindex="-1"><a class="header-anchor" href="#使用-slots" aria-hidden="true">#</a> 使用__slots__</h2><ul><li><p>正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性</p></li><li><p>绑定属性</p><pre><code>  class Student(object):
      def __init__(self, name):
          super(Student, self).__init__()
          self.name = name

  s = Student(&#39;anakin&#39;)
  s.age = 10
  print(s.age)  # 给对象绑定属性
  print(s)
</code></pre></li></ul><p><strong>绑定方法</strong></p><ul><li><p>这样给实例绑定一个方法,对另外一个实例是不起作用的</p><pre><code>  class Student(object):
      def __init__(self, name):
          super(Student, self).__init__()
          self.name = name

  # 给实例绑定一个方法
  s = Student(&#39;anakin&#39;)
  def set_age(self,age):
      self.age= age
  from types import MethodType
  s.set_age= MethodType(set_age,s)
  s.set_age(25)
  print(s.age) # 25
</code></pre></li><li><p>为了给所有实例绑定方法,可以给class绑定方法</p><pre><code>  def set_score(self,score):
      self.score=score

  Student.set_score =set_score  # 给类绑定方法
  s.set_score(&#39;abc&#39;)
  print(s.score)
</code></pre></li><li><p>使用__slots__ 限制绑定的属性</p><pre><code>  class Student(object):
      __slots__ = (&#39;name&#39;,&#39;age&#39;) # 限制绑定的属性

  s  = Student()
  s.name= &#39;anakin&#39;
  print(s.name)
  # s.score =&#39;abc&#39;   #  绑定score会报错,因为限制了绑定的属性
  # print(s.score)
</code></pre></li></ul><blockquote><p>注意: <strong>slots</strong> 只对当前的类起作用,对子类没有作用</p></blockquote><h3 id="使用-property" tabindex="-1"><a class="header-anchor" href="#使用-property" aria-hidden="true">#</a> 使用@property</h3><ul><li><p>通过提供set和get方法,检查参数</p><p>class Student(object): # 提供getScore和setScore方法 def get_Score(self): return self._score</p><pre><code>  def set_Score(self,value):
      if not isinstance(value,int):
          print(&#39;输入数据类型错误&#39;)
      if value&lt; 0 or value &gt; 100:
          print(&#39;数据超出范围&#39;)
      self._score= value
</code></pre><p>s = Student() s.set_Score(105)</p></li><li><p>使用<code>@property</code> 对设置的属性进行检查<code>s.score=109</code> 相当于<code>s.set_score(109)\`\`,s.score</code> 相当于<code>s.get_score()</code></p><pre><code>  class Student(object):
      @property
      def score(self):
          return self._score

      @score.setter
      def score(self,value):
          if not isinstance (value,int):
              print(&#39;数据类型不合法&#39;)
          if value &lt; 0 or value &gt; 100:
              print(&#39;数据超出范围&#39;)
          self._score =value
  s= Student()
  s.score=109
  print(s.score)
</code></pre></li><li><p>定义只读属性，提供get方法，不提供set方法</p><pre><code>  class People(object):

      @property
      def birth(self):
          return self._birth

      @birth.setter
      def birth(self, value):
          self._birth = value

      @property
      def age(self):
          return 2015 - self._birth

  p = People()
  p.birth=1993
  print(p.birth)
  print(p.age)
</code></pre></li></ul><h3 id="多重继承" tabindex="-1"><a class="header-anchor" href="#多重继承" aria-hidden="true">#</a> 多重继承</h3><ul><li>Python支持多继承</li></ul><h3 id="定制类" tabindex="-1"><a class="header-anchor" href="#定制类" aria-hidden="true">#</a> 定制类</h3><p>Python 中有很多特殊用途的函数，帮助我们定制类</p><h4 id="str" tabindex="-1"><a class="header-anchor" href="#str" aria-hidden="true">#</a> <code>__str__()</code></h4><ul><li><p>作用：返回自定义的字符串</p><pre><code>  # 定制函数
  class Student(object):
      &quot;&quot;&quot;docstring forStudent.&quot;&quot;&quot;
      def __init__(self, name):
          self._name = name
      def __str__(self):
          return &#39;Student name :&#39;+self._name
  s =Student(&#39;anakin&#39;)
  print(s)
</code></pre></li><li><p>让用户看到的字符串和程序开发者看到的字符串是一样的使用<code>__repr__</code></p><pre><code>  # 定制函数
  class Student(object):
      def __init__(self, name):
          self._name = name
      def __str__(self):
          return &#39;Student name :&#39;+self._name
      __repr__ =__str__
  s =Student(&#39;anakin&#39;)
  print(s)
</code></pre></li></ul><h3 id="iter" tabindex="-1"><a class="header-anchor" href="#iter" aria-hidden="true">#</a> <code>__iter__</code></h3><ul><li><p>如果一个对象想被<code>for..in ...</code>循环 ，就要实现<code>__iter__</code>函数 ，返回self</p><pre><code>  class Fib(object):
      def __init__(self):
          self.a,self.b = 0,1

      def __iter__(self):
          return self

      def __next__(self):
          self.a ,self.b = self.b,self.a+self.b
          if self.a&gt;10000:
              raise StopIteration();
          return self.a

  for x in Fib():
      print(x)
</code></pre></li></ul><h3 id="getitem" tabindex="-1"><a class="header-anchor" href="#getitem" aria-hidden="true">#</a> <code>__getitem__</code></h3><ul><li><p>实现<code>__iter__</code> 方法可以使类<code>for.. in..</code>循环，实现<code>getitem</code>可以通过角标获取元素</p><pre><code> class Fib(object):
     def __init__(self):
         self.a,self.b = 0,1

     def __iter__(self):
         return self

     def __next__(self):
         self.a ,self.b = self.b,self.a+self.b
         if self.a&gt;10000:
             raise StopIteration();
         return self.a

     def __getitem__(self,n):
         a,b =1,1
         for x in range(n):
             a,b =b,a+b
         return a


 for x in Fib():
     print(x)
 f= Fib()
 print(f[20])
</code></pre></li></ul><h3 id="getattr" tabindex="-1"><a class="header-anchor" href="#getattr" aria-hidden="true">#</a> <code>__getattr__ </code>###</h3><ul><li><p>那就是写一个__getattr__()方法，动态返回一个属性</p><pre><code>  class Student(object):
      def __init__(self):
              self.name =&quot;anakin&quot;
      def __getattr__(self,attr):
          if attr == &#39;age&#39;:
              return 18
  s= Student()
  print(s.name)
  print(s.age)
</code></pre></li><li><p><code>__getattr__()</code>方法 也可以返回一个方法，调用方式对象.方法（）</p></li></ul><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> <code>__call__</code></h3><ul><li><p>调用类中的方法</p><pre><code> class Student(object):
     &quot;&quot;&quot;docstring forStudent.&quot;&quot;&quot;
     def __init__(self):
         self.name =&#39;anakin&#39;
     def __call__(self):
         print(&#39;调用自己的方法。。。。&#39;)
 s= Student()
 s()
</code></pre></li></ul>`,21),_=[a];function o(l,i){return n(),t("div",null,_)}const c=e(r,[["render",o],["__file","自学Python-面向对象高级编程.html.vue"]]);export{c as default};
