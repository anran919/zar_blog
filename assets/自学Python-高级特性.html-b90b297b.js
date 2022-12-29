import{_ as e,V as n,W as r,a1 as o}from"./framework-5e2051d8.js";const t={},c=o(`<h2 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h2><p>使用场景： 取一个list或者tuple的部分元素</p><pre><code>L = [&#39;Michael&#39;, &#39;Sarah&#39;, &#39;Tracy&#39;, &#39;Bob&#39;, &#39;Jack&#39;]
r=L[0:3]
print(r)
</code></pre><p>[X:Y] X:代表开始的角标，Y:结束的角标，可以是负数，从后向前取</p><p>tuple 与list 的区别是tuple是不可变的</p><p>tupel也可以切片操作，只是结果仍然是tuple</p><pre><code>T= (1,2,3,4,5)
print(T)
r= T[:3]
print(r)
print(T)

结果：

(1, 2, 3, 4, 5)
(1, 2, 3)
(1, 2, 3, 4, 5)
</code></pre><p>字符串&#39;xxxx&#39;也可以看成是list,每个元素就是一个字符，字符串也可以切片操作，结果仍然是字符串</p><pre><code>	T= &#39;abcdefg&#39;
	print(T)
	r= T[:3]
	print(r)
	print(T)

	结果

	abcdefg
	abc
	abcdefg
</code></pre><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>通过<code>for in</code> 循环遍历list和tuple ,这种遍历称为迭代</p><p>可以对字符串，tuple ,list ,dict进行迭代</p><p><strong>迭代dict获取key:</strong></p><pre><code>d={&#39;1&#39;:&#39;a&#39;,&#39;2&#39;:&#39;b&#39;,&#39;3&#39;:&#39;c&#39;}
for x in d:
	print(x)
</code></pre><p><strong>迭代dict获取values</strong></p><pre><code>d={&#39;1&#39;:&#39;a&#39;,&#39;2&#39;:&#39;b&#39;,&#39;3&#39;:&#39;c&#39;}
for x in d.values():
	print(x)
</code></pre><p><strong>判断是否可以迭代</strong></p><pre><code>from collections import Iterable
r =isinstance(&#39;abc&#39;,Iterable)
print(r)
</code></pre><p><strong>迭代list 获取角标-元素对</strong></p><pre><code>L = [&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;]
for i,values in enumerate(L):
	print(i,values)
</code></pre><p><strong>python for 循环可以同时应用两个变量</strong></p><pre><code>L = [(1,1),(2,4),(3,9)]
for x,y in L:
	print(x,y)
结果
(1, 1)
(2, 4)
(3, 9)
</code></pre><h2 id="列表生成式" tabindex="-1"><a class="header-anchor" href="#列表生成式" aria-hidden="true">#</a> 列表生成式</h2><p>写列表生成式的时，把要生成的元素<code>x*x</code>放在前面，后面跟<code>for</code>循环，就可以创建list <strong>求偶数的平方和</strong></p><pre><code>L = [x*x for x in range(1,11) if x%2==0]
print (L)
</code></pre><p><strong>双层循环，生成全排列</strong></p><pre><code>L = [m+n for m in &#39;abc&#39; for n in &#39;xyz&#39;]
print(L)
[&#39;ax&#39;, &#39;ay&#39;, &#39;az&#39;, &#39;bx&#39;, &#39;by&#39;, &#39;bz&#39;, &#39;cx&#39;, &#39;cy&#39;, &#39;cz&#39;]
</code></pre><p><strong>for循环同时可以使用两个或者更多的个变量</strong><code>dict</code>的<code>items()</code>可以同时迭代key和value</p><pre><code>D = {1:&#39;A&#39;,2:&#39;B&#39;,3:&#39;C&#39;}
for x, y in D.items() :
	print(x,&#39;=&#39;,y)
</code></pre><p><strong>把集合中的元素都变成小写</strong></p><pre><code>L = [&#39;Hello&#39;, &#39;World&#39;, &#39;IBM&#39;, &#39;Apple&#39;]
r= [s.lower() for s in L]
print(r)
</code></pre><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><p>在Python中一边循环一边计算的机制，称为生成器：generator</p><p>创建generator</p><ul><li><p>把列表生成器的<code>[]</code>改成<code>（）</code>，就可以创建genetator</p><p>g= (x for x in range(100)) print(g)</p></li></ul><p>获取生成器中的元素，使用迭代的方式</p><pre><code>g= (x for x in range(100))
for y in g:
	print(y)
</code></pre><p>斐波拉契数列</p><pre><code>def fib(max):
	a,b,n= 0,1,0;
	while n &lt; max:
		print(b)
		a,b=b,a+b
		n=n+1
	return &#39;done&#39;
fib(100）
</code></pre><p>将打印斐波拉契数列改变成genetator 需要将<code>print</code>变成<code>yield</code></p><h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2><p><strong>可以直接作用于for 循环的的数据类型</strong></p><ol><li>集合数据类型，如 <code>list,tuple,set,str</code></li><li><code>generator </code>,包括生成器自带的<code>yield</code> 的generator funxtion</li></ol><p><strong>使用isinstance()判断对象是否是Iterable</strong></p><pre><code>from collections import Iterable
r =isinstance([],Iterable)
print(r)
</code></pre><blockquote><p>生成器不但可以作用于<code>for</code>循环，还可以调用<code>next()</code>,获取下一个值 可以被<code>next()</code>调用，并不断返回下一个值的对象称为<strong>迭代器</strong></p></blockquote><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h3><ul><li>凡是可以用于<code>for</code>循环的对象都是<code>Iterable</code>类型；</li><li>凡是可作用于<code>next()</code>函数的对象都是<code>Iterator</code>类型</li></ul>`,48),d=[c];function p(i,a){return n(),r("div",null,d)}const l=e(t,[["render",p],["__file","自学Python-高级特性.html.vue"]]);export{l as default};
