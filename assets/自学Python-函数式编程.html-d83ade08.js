import{_ as e,V as r,W as n,a1 as d}from"./framework-5e2051d8.js";const a={},o=d(`<h2 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h2><blockquote><p>变量可以指向函数，函数的参数能接收变量，那么一个函数可以接收另一 个函数作为参数，这种函数就称为高阶函数</p></blockquote><ol><li><p>变量可以指向函数</p></li><li><p>函数也是变量</p></li><li><p>传入函数</p><pre><code> def add(x,y,f):
     return f(x)+f(y)
 s= add(2,3,abs)
 print(s)
</code></pre></li></ol><h3 id="map-reduce" tabindex="-1"><a class="header-anchor" href="#map-reduce" aria-hidden="true">#</a> map/reduce</h3><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h4><blockquote><p>map 接收两个参数，一个函数，一个<code>Iterabale</code>,map将传入的函数依 次祖作用到序列的每个元素，并把结果作为新的<code>Iterator</code>返回</p></blockquote><pre><code>def f(x):
    return x*x
L=[1,2,3,4,5]
m=map(f,L)
s=list(m)
print(s)
</code></pre><p>一个集合中的元素转换成字符串</p><pre><code>m=map(str,[1,2,3,45])
s=list(m)
print(s)
</code></pre><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h3><blockquote><p><code>reduce</code>的用法，把一个函数作用在一个序列[x1,x2,x3...],必须接&gt;收两个参数,<code>return</code>结果继续和序列的下一个元素做累积运算</p></blockquote><pre><code>from functools import reduce
def fn(x,y):
    return x*10+y
s=reduce(fn,[1,2,3,4])
print(s)
</code></pre><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><p>filter()函数用于过滤序列</p><blockquote><p>和<code>map()</code>不同的是<code>filter()</code>,接收两个参数,一个函数和一个序列, &gt; 依次将函数作用序列的每一个元素,根据返回值是<code>ture</code> 还是<code>false</code> 决定保留还是丢弃该元素</p></blockquote><p>筛选出奇数</p><pre><code>def is_odd(n):
    return n%2==1
f =filter(is_odd,[1,2,3,4,5,6])
s = list(f)
print(s)
</code></pre><h3 id="sorted" tabindex="-1"><a class="header-anchor" href="#sorted" aria-hidden="true">#</a> sorted</h3><ul><li><p>对list进行排序</p><pre><code>  s= sorted([1,2,3,53,21,0,3])
  print(s)
</code></pre></li><li><p>可以接收一个key进行自定义排序</p><pre><code>  s= sorted([1,-2,-3,-53,21,0,3],key=abs)
  print(s)
</code></pre></li><li><p>根据字母顺序排列</p><pre><code>  L =[&#39;bob&#39;, &#39;about&#39;, &#39;Zoo&#39;, &#39;Credit&#39;]
  s =sorted(L,key=str.lower)
  print(s)
</code></pre></li></ul><h2 id="返回函数" tabindex="-1"><a class="header-anchor" href="#返回函数" aria-hidden="true">#</a> 返回函数</h2><p>返回一个函数</p><pre><code>def lazy_sum(*arg):
    def sum():
        temp =0
        for i in arg:
            temp = i+ temp
        return temp
    return sum
f= lazy_sum(1,2,3,4)
print(f)
s = f()
print(s)
</code></pre><p><strong>总结</strong></p><ul><li>函数可以返回一个结果,也可以返回一个函数</li><li>返回函数时,函数并未执行,返回函数中不要应用任何可能会变化的变量</li></ul><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3><p>匿名函数使用Lambda 表达式</p><pre><code>L = [1,2,3,4]
m = map(lambda x : x*x,L)
s = list(m)
print(s)
</code></pre><ul><li><p>关键字lambda表示匿名函数,冒号前面的x就是参数</p></li><li><p>限制:只能有一个表达式,不用写retuen ,结果就为返回值</p></li><li><p>好处:不用担心命名冲突,可以把匿名函数赋值给一个变量,通过变量调用函数</p></li><li><p>同样,匿名函数也可以作为返回值返回</p><pre><code>  def build(x,y):
      return lambda:x*x+y*y
  f = build(1,2);
  print(f)
</code></pre></li></ul><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>代码中<code>*arg</code>可变参数,<code>**kw</code> 关键字参数</p><pre><code>def log(func):
    def wrapper(*arg,**kw):
        print(&#39;call :&#39;+func.__name__)
        return func(*arg,**kw)
    return wrapper
@log
def now():
    print(&#39;print log&#39;)
now()
</code></pre><h3 id="偏函数" tabindex="-1"><a class="header-anchor" href="#偏函数" aria-hidden="true">#</a> 偏函数</h3><pre><code>import functools
int2 = functools.partial(int,base=2)
s =int2(&#39;10000&#39;)
print(s)
</code></pre><ul><li>当函数的参数太多需要简化时,<code>functools.partial()</code>创建一个新的函数,这个函数可以固定原函数的部分参数,是函数调用更简单</li></ul>`,34),t=[o];function i(p,c){return r(),n("div",null,t)}const s=e(a,[["render",i],["__file","自学Python-函数式编程.html.vue"]]);export{s as default};
