import{_ as t,V as n,W as e,a1 as d}from"./framework-5e2051d8.js";const r={},i=d(`<h2 id="python内建模块" tabindex="-1"><a class="header-anchor" href="#python内建模块" aria-hidden="true">#</a> Python内建模块</h2><h3 id="关于时间" tabindex="-1"><a class="header-anchor" href="#关于时间" aria-hidden="true">#</a> 关于时间</h3><pre><code># 1. 获取当前时间
from datetime import datetime,timedelta
r =datetime.now()
print (r)

# 2. 获取指定的时间和日期
r1 = datetime(2017,1,14,12,53)
print (r1)

# 3. 将datetime转换为datestamp
t= 12345645.12
r2 = datetime.fromtimestamp(t)
print(r2)

# 4. str转换为datetime
r3 = datetime.strptime(&#39;2017-01-14 15:58:29&#39;,&#39;%Y-%m-%d %H:%M:%S&#39;)
print(r3)

# 5. datetime转换为str
s1 = datetime.now()
r4 = s1.strftime(&#39;%a, %b %d %H:%M&#39;)
print(r4)

# 6. 时间的加减
n1 = datetime.now()
print(n1)
n2 =n1+timedelta(hours=10)  # 增加10小时
print (n2)
</code></pre><h3 id="collections" tabindex="-1"><a class="header-anchor" href="#collections" aria-hidden="true">#</a> collections</h3><blockquote><p>collections是Python的内建模块提供集合操作的类</p></blockquote><pre><code>	# Python的内建模块 - collections

	# 1. 使用namedtuple表示一个点的坐标

	from collections import namedtuple,deque,defaultdict,OrderedDict
	Point = namedtuple(&#39;point&#39;,[&#39;x&#39;,&#39;y&#39;])
	p =Point(1,2)
	print(p.x)
	print(p.y)

	# 2. deque 高效的对list进行删除和插入

	d = deque([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;])
	s = d.appendleft(&#39;x&#39;)
	d.append(&#39;z&#39;)
	d.pop()
	print(s)
	print(d)

	# 3 .defaultdict ,使用dict的时候如果应用的key不存在会抛出keyError ,使用defaultdict 返回一个默认值

	dd = defaultdict(lambda :&#39;N/A&#39;)
	dd[&#39;key1&#39;] =&#39;anakin&#39;
	s1 = dd[&#39;key1&#39;]
	s2 = dd[&#39;key2&#39;]
	print(s1)
	print(s2)

	# 4. 使用OrderedDict ,dict 是无序的,迭代的时候不能按照顺序取出数据,使用OrderedDict

	d1 = dict([(&#39;a&#39;,&#39;1&#39;),(&#39;b&#39;,&#39;2&#39;),(&#39;c&#39;,&#39;3&#39;)])
	print(d1)

	d2= OrderedDict([(&#39;a&#39;,&#39;1&#39;),(&#39;b&#39;,&#39;2&#39;),(&#39;c&#39;,&#39;3&#39;)])
	print (d2)
	#  注意 OrderedDict会按照插入的顺序排序,而不是按照key 的顺序

	d3 = OrderedDict()
	d3[&#39;x&#39;]=3
	d3[&#39;z&#39;]=6
	d3[&#39;d&#39;]=4
	print d3
</code></pre><h3 id="计数函数counter" tabindex="-1"><a class="header-anchor" href="#计数函数counter" aria-hidden="true">#</a> 计数函数Counter</h3><ul><li><p>统计字符出现的次数</p><pre><code>  # Counter 计数的方法,可以统计字符出现的次数

  c = Counter()
  for ch in &#39;luoyang&#39;:
      c[ch]= c[ch]+1
  print (c)
</code></pre></li></ul>`,8),a=[i];function c(o,p){return n(),e("div",null,a)}const s=t(r,[["render",c],["__file","自学Python-常用内建模块.html.vue"]]);export{s as default};
