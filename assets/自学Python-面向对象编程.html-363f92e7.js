import{_ as n,V as e,W as s,a1 as t}from"./framework-5e2051d8.js";const a={},i=t(`<h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><pre><code>class Student(object):
    def __init__(self, name,score):
        self.name = name
        self.score = score
    def print_score(self):
        print(&#39;%s: %s&#39; % (self.name,self.score))
s1 = Student(&#39;anakin&#39;,18)
s2 = Student(&#39;anran&#39;,18)
s1.print_score()
s2.print_score()
</code></pre><ul><li>定义类以<code>class</code>开头,后买年跟类名,类名后面的括号中写继承的类(一般默认继承Object)</li><li>和普通函数相比,在类中定义函数,第一个变量永远是实例变量<code>self</code>,但是调用的时候不用传入,Python解释器会自动把实例变量传进去</li></ul><h3 id="数据封装" tabindex="-1"><a class="header-anchor" href="#数据封装" aria-hidden="true">#</a> 数据封装</h3><ul><li>我们直接擦操作了对象内部数据,但无法知道方法内部的实现细节</li></ul><h3 id="访问限制" tabindex="-1"><a class="header-anchor" href="#访问限制" aria-hidden="true">#</a> 访问限制</h3><ul><li>在Class内部,有属性和方法,而外部代码通过直接调用实例变量的方法来操作数据,这样就隐藏了内部的复杂逻辑</li><li>如果要想是内部属性不被外部访问,在属性名称前面加__,在Python中如果变量名以__开头,就变成了私有变量,只有内部可以访问,外部不能访问</li></ul><p>不能被直接访问</p><pre><code>	class Student(object):
	    def __init__(self, name,score):
	        self.__name = name
	        self.__score = score
	    def print_score(self):
	        print(&#39;%s: %s&#39; % (self.__name,self.__score))
	s1 = Student(&#39;anakin&#39;,18)

	print(s1.__name);
</code></pre><ul><li><p>外部如果想访问和修改实例的,可以通过get和set方法</p><pre><code>  class Student(object):
  def __init__(self, name,score):
      self.__name = name
      self.__score = score
  def print_score(self):
      print(&#39;%s: %s&#39; % (self.__name,self.__score))
  def get_name(self):
      return self.__name
  def set_name(self,name):
      self.__name=name
  s1 = Student(&#39;anakin&#39;,18)
  print(s1.get_name())
  s1.set_name(&#39;change&#39;)
  print(s1.get_name());
  print(s1.print_score())
</code></pre></li></ul><p><strong>注意 :</strong></p><ul><li><p>类似__xxx___ ,双下划线开头,双下划线结尾属于特殊变量,特殊变量可以直接访问,所以在命名变量名的时候不要使用__xxx__ 这样的变量名</p></li><li><p>类似_name的实例变量,外部是可以访问的,但是按照约定俗成的固定,这样的实例看作是私有的</p></li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><ul><li><p>继承的好处,子类可以获得父类的全部功能</p></li><li><p>子类和父类存在同样的方法,这时我们说子类覆盖了父类的方法,运行时会调用子类的方法,这样我们就获得了继承的另外一个好处:<strong>多态</strong></p><pre><code>  class Animal(object):
      def run(self):
          print(&#39;aninmal is running....&#39;)

  class Dog(Animal):
      def run(self):
          print(&#39;Dog is running....&#39;)

  class Cat(Animal):
          def run(self):
              print(&#39;Cat is running....&#39;)

  d = Dog()
  c = Cat()
  d.run()
  c.run()
</code></pre></li></ul><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><ul><li><p>对于静态语言像java ,如果需要传入Anima类型,则传入的对象必须是Animal类型或者它的子类,否则无法调用run方法</p></li><li><p>对于动态语言想Python,则不一定要传入Animal类型,只需要保证传入的对象有一个run方法就可以了</p></li></ul><blockquote><p>动态语言的的&quot;鸭子类型&quot;,比要求严格的继承体系,一个对象只要&quot;看起来像鸭子&quot;,那它就可以被看作是鸭子.</p></blockquote><h3 id="获取对象信息" tabindex="-1"><a class="header-anchor" href="#获取对象信息" aria-hidden="true">#</a> 获取对象信息</h3><ul><li><p>判断基本数据类型</p><pre><code>  s= type(&#39;123&#39;)
  print(s)
</code></pre></li><li><p>判断一个对象是否是函数,使用types提供的函数</p><pre><code>  import types
  &#39;判断对象是否是函数&#39;
  def fn():
      pass
  s= types.FunctionType
  print(s)



  &#39;判断对象是否是函数&#39;
  def fn():
      pass
  s= types.FunctionType
  s2 =types.BuiltinFunctionType
  s3 = type(abs)==s2
  print(s3)
  print(s)
</code></pre></li></ul><p><strong>isinstance()函数</strong></p><pre><code>&#39;isinstance()函数&#39;
class Animal(object):
    pass
class Dog(Animal):
    pass
class Cat(Animal):
    pass
a =Animal()
d =Dog()
c = Cat()
s = isinstance(d,Animal)
print(s)
</code></pre><ul><li><p>判断是否是其中一种</p><pre><code>  s=isinstance([1,2,3],(list,tuple))
  print(s)
</code></pre></li></ul><p><strong>使用dir()</strong></p><ul><li><p>获得一个对象的所有属性和方法使用<code>dir()</code></p></li><li><p>配合使用<code>getattr(),setattr(),hasattr()</code>,可以直接操作一个对象的状态</p><pre><code>  class Animal(object):
      def __init__(self):
          self.x= 9
      def power(self):
          return self.x*self.x
  a = Animal()
  s1 =hasattr(a,&#39;x&#39;)
  s2 =hasattr(a,&#39;y&#39;)
  s3 =getattr(a,&#39;x&#39;)
  s4 =setattr(a,&#39;x&#39;,4)
  s5= getattr(a,&#39;x&#39;)
  print(s1)
  print(s2)
  print(s3)
  print(s4)
  print(s5)
</code></pre></li></ul><h3 id="实例属性和类属性" tabindex="-1"><a class="header-anchor" href="#实例属性和类属性" aria-hidden="true">#</a> 实例属性和类属性</h3><ul><li>Python是动态语言,根据类创建的实例可以绑定任意属性,可以删除</li><li>如果类中存在这个属性,绑定新的属性,会得到新绑定的属性,如果删除就得到类的属性,绑定的属性只能通过类的实例调用,不能通过类名获取</li></ul>`,26),r=[i];function l(c,o){return e(),s("div",null,r)}const d=n(a,[["render",l],["__file","自学Python-面向对象编程.html.vue"]]);export{d as default};
