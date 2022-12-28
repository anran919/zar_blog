---
title: 自学Python-函数式编程.md
date: 2017-01-11 14:01:12
tags: Python
---

## 高阶函数 ##
> 变量可以指向函数，函数的参数能接收变量，那么一个函数可以接收另一
> 个函数作为参数，这种函数就称为高阶函数


1. 变量可以指向函数
2. 函数也是变量
3. 传入函数

		def add(x,y,f):
		    return f(x)+f(y)
		s= add(2,3,abs)
		print(s)

### map/reduce ###

#### map ####
> map 接收两个参数，一个函数，一个`Iterabale`,map将传入的函数依
> 次祖作用到序列的每个元素，并把结果作为新的`Iterator`返回

	def f(x):
	    return x*x
	L=[1,2,3,4,5]
	m=map(f,L)
	s=list(m)
	print(s)

一个集合中的元素转换成字符串

	m=map(str,[1,2,3,45])
	s=list(m)
	print(s)

### reduce ###
>` reduce `的用法，把一个函数作用在一个序列[x1,x2,x3...],必须接>收两个参数,`return`结果继续和序列的下一个元素做累积运算

	from functools import reduce
	def fn(x,y):
	    return x*10+y
	s=reduce(fn,[1,2,3,4])
	print(s)

### filter ###

filter()函数用于过滤序列
> 和`map()`不同的是`filter()`,接收两个参数,一个函数和一个序列, > 依次将函数作用序列的每一个元素,根据返回值是`ture` 还是`false` 决定保留还是丢弃该元素

筛选出奇数

	def is_odd(n):
	    return n%2==1
	f =filter(is_odd,[1,2,3,4,5,6])
	s = list(f)
	print(s)

### sorted ###

- 对list进行排序

		s= sorted([1,2,3,53,21,0,3])
		print(s)
- 可以接收一个key进行自定义排序

		s= sorted([1,-2,-3,-53,21,0,3],key=abs)
		print(s)
- 根据字母顺序排列

		L =['bob', 'about', 'Zoo', 'Credit']
		s =sorted(L,key=str.lower)
		print(s)

## 返回函数 ##
返回一个函数

	def lazy_sum(*arg):
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

**总结**
- 函数可以返回一个结果,也可以返回一个函数
- 返回函数时,函数并未执行,返回函数中不要应用任何可能会变化的变量

### 匿名函数 ###

匿名函数使用Lambda 表达式

	L = [1,2,3,4]
	m = map(lambda x : x*x,L)
	s = list(m)
	print(s)

- 关键字lambda表示匿名函数,冒号前面的x就是参数
- 限制:只能有一个表达式,不用写retuen ,结果就为返回值
- 好处:不用担心命名冲突,可以把匿名函数赋值给一个变量,通过变量调用函数
- 同样,匿名函数也可以作为返回值返回

		def build(x,y):
		    return lambda:x*x+y*y
		f = build(1,2);
		print(f)

### 装饰器 ###

代码中` *arg `可变参数,` **kw ` 关键字参数

	def log(func):
	    def wrapper(*arg,**kw):
	        print('call :'+func.__name__)
	        return func(*arg,**kw)
	    return wrapper
	@log
	def now():
	    print('print log')
	now()

### 偏函数 ###

	import functools
	int2 = functools.partial(int,base=2)
	s =int2('10000')
	print(s)

- 当函数的参数太多需要简化时,`functools.partial()`创建一个新的函数,这个函数可以固定原函数的部分参数,是函数调用更简单
