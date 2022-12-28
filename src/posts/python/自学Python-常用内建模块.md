---
title: 自学Python-常用内建模块
date: 2017-01-14 12:03:14
tags: Python
---
## Python内建模块 ##

### 关于时间 ###

	# 1. 获取当前时间
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
	r3 = datetime.strptime('2017-01-14 15:58:29','%Y-%m-%d %H:%M:%S')
	print(r3)

	# 5. datetime转换为str
	s1 = datetime.now()
	r4 = s1.strftime('%a, %b %d %H:%M')
	print(r4)

	# 6. 时间的加减
	n1 = datetime.now()
	print(n1)
	n2 =n1+timedelta(hours=10)  # 增加10小时
	print (n2)


### collections ###

> collections是Python的内建模块提供集合操作的类

		# Python的内建模块 - collections

		# 1. 使用namedtuple表示一个点的坐标

		from collections import namedtuple,deque,defaultdict,OrderedDict
		Point = namedtuple('point',['x','y'])
		p =Point(1,2)
		print(p.x)
		print(p.y)

		# 2. deque 高效的对list进行删除和插入

		d = deque(['a','b','c'])
		s = d.appendleft('x')
		d.append('z')
		d.pop()
		print(s)
		print(d)

		# 3 .defaultdict ,使用dict的时候如果应用的key不存在会抛出keyError ,使用defaultdict 返回一个默认值

		dd = defaultdict(lambda :'N/A')
		dd['key1'] ='anakin'
		s1 = dd['key1']
		s2 = dd['key2']
		print(s1)
		print(s2)

		# 4. 使用OrderedDict ,dict 是无序的,迭代的时候不能按照顺序取出数据,使用OrderedDict

		d1 = dict([('a','1'),('b','2'),('c','3')])
		print(d1)

		d2= OrderedDict([('a','1'),('b','2'),('c','3')])
		print (d2)
		#  注意 OrderedDict会按照插入的顺序排序,而不是按照key 的顺序

		d3 = OrderedDict()
		d3['x']=3
		d3['z']=6
		d3['d']=4
		print d3


### 计数函数Counter ###

- 统计字符出现的次数

		# Counter 计数的方法,可以统计字符出现的次数

		c = Counter()
		for ch in 'luoyang':
		    c[ch]= c[ch]+1
		print (c)
