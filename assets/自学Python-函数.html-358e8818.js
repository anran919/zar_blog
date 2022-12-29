import{_ as i,V as d,W as o,X as n,Y as e,$ as a,a1 as t,D as p}from"./framework-5e2051d8.js";const c={},h=t('<h3 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h3><p>Python内置了很多有用的函数，我们可以直接调用。</p><p>要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数abs，只有一个参数</p><p>调用函数的要传入正确的参数个数和参数类型</p><h4 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h4><ul><li>比如int() 把其他类型转换为整数</li></ul><h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3><p>定义函数使用 <code>def</code> 后面依次跟 函数名 括号() 冒号: 然后在缩进语句块中写函数体,函数返回值用<code>retun</code>返回</p><p><strong>导入函数</strong></p>',9),s={href:"http://xn--runfunctions-1f5sog56uuxjo36b07a895j.py",target:"_blank",rel:"noopener noreferrer"},l={href:"http://xn--test-ft4g.py",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"from functions import run",-1),f=t(`<h3 id="空函数" tabindex="-1"><a class="header-anchor" href="#空函数" aria-hidden="true">#</a> 空函数</h3><p>定意一个函数什么也不做</p><p><code>def nullFun(): pres</code></p><h3 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查" aria-hidden="true">#</a> 参数检查</h3><ul><li>调用函数时如果参数的个数不对,会抛出异常</li><li>如果参数类型不对,不会被检查出来</li></ul><p>检查参数:</p><pre><code>def my_abs(x):
if not isinstance (x,(int,float)):
	raise TypeError(&#39;bad operand type&#39;)
if x&gt;0:
	return x
else :
	return -x
print(my_abs(4))
</code></pre><h3 id="返回多个值" tabindex="-1"><a class="header-anchor" href="#返回多个值" aria-hidden="true">#</a> 返回多个值</h3><pre><code>import math
def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny
x,y = move(100,100,60,math.pi/6)
print(x,y)
</code></pre><p>实质是返回了一个tuple</p><h2 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h2><p>Python 可以使用默认参数,可变参数,关键字参数</p><h3 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数" aria-hidden="true">#</a> 位置参数</h3><pre><code>def power(x):
	return x*x
print(power(2))
</code></pre><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><ul><li><p>必选参数在前面,默认参数在后面</p></li><li><p>函数有多个函数时,把变化大的放在前面,变化小的放在后面</p><p>def power(x, n=2): s = 1 while n &gt; 0: n = n - 1 s = s * x return s print(power(6)) # 36 print(power(6,2))# 36 print(power(2,3))# 8</p></li><li><p>添加一个list 并在最后加上&quot;END&quot;,默认参数初始赋值为None</p><pre><code>  def add_end(L=None):
  	L.append(&#39;END&#39;)
  	return L

  print(add_end([1,2,3]))
</code></pre></li></ul><h3 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h3><p>定义可变参数在参数前面加一个*</p><pre><code>def calc(*number):
	sum =0
	for n in number:
		sum = sum+n*n
	return sum
print(calc(1,2,3,4))
print(calc(1,2))

#传入一个集合,在集合前面加上一个*
nums =[1,2,3]
print(calc(*nums))
</code></pre><h3 id="关键字参数" tabindex="-1"><a class="header-anchor" href="#关键字参数" aria-hidden="true">#</a> 关键字参数</h3><ul><li>可变参数允许传入0个或者任意个参数,这些可变参数在函数中会自动组装为一个tuple</li><li>关键字参数允许你传入0个或者任意个参数名的参数,这些关键字参数在函数内部自动组装为一个dict</li></ul><p>当有多个参数时使用dict 进行组合,作为参数</p><pre><code>def person(name,age,**kw):
	print(&#39;name&#39;,name,&#39;age&#39;,age,&#39;other&#39;,kw)

extra ={&#39;city&#39;:&#39;beijing&#39;,&#39;job&#39;:&#39;enginner&#39;}
person(&#39;ankin&#39;,24)
person(&#39;ankin&#39;,24,city=extra[&#39;city&#39;],job=extra[&#39;job&#39;])
</code></pre><h3 id="命名关键字参数" tabindex="-1"><a class="header-anchor" href="#命名关键字参数" aria-hidden="true">#</a> 命名关键字参数</h3><ul><li><p>关键字参数,函数的调用者可以传入任意不受限制的关键字参数,至于传入哪些,需要再函数的内部通过<code>kw</code> 检查</p></li><li><p>命名关键字必须传入参数名</p><pre><code>  def person(name, age, *, city, job):
      print(name, age, city, job)
  person(&#39;Jack&#39;, 24, city=&#39;Beijing&#39;, job=&#39;Engineer&#39;)
</code></pre></li></ul><h2 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h2><p>以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</p><pre><code>def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
</code></pre>`,28);function x(_,m){const r=p("ExternalLinkIcon");return d(),o("div",null,[h,n("ul",null,[n("li",null,[n("a",s,[e("定义函数run保存为functions.py"),a(r)]),e(" ,"),n("a",l,[e("在test.py"),a(r)]),e(" 中调用run函数,需要使用"),u,e("导入函数run()")])]),f])}const y=i(c,[["render",x],["__file","自学Python-函数.html.vue"]]);export{y as default};
