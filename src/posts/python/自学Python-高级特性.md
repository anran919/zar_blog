---
title: 自学Python-高级特性
date: 2017-01-11 09:23:15
tags: Python
---
## 切片 ##
使用场景： 取一个list或者tuple的部分元素

	L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
	r=L[0:3]
	print(r)

[X:Y] X:代表开始的角标，Y:结束的角标，可以是负数，从后向前取

tuple 与list 的区别是tuple是不可变的

tupel也可以切片操作，只是结果仍然是tuple

	T= (1,2,3,4,5)
	print(T)
	r= T[:3]
	print(r)
	print(T)

	结果：

	(1, 2, 3, 4, 5)
	(1, 2, 3)
	(1, 2, 3, 4, 5)
字符串'xxxx'也可以看成是list,每个元素就是一个字符，字符串也可以切片操作，结果仍然是字符串

		T= 'abcdefg'
		print(T)
		r= T[:3]
		print(r)
		print(T)

		结果

		abcdefg
		abc
		abcdefg

## 迭代 ##

通过`for in` 循环遍历list和tuple ,这种遍历称为迭代

可以对字符串，tuple ,list ,dict进行迭代

**迭代dict获取key:**

	d={'1':'a','2':'b','3':'c'}
	for x in d:
		print(x)

**迭代dict获取values**

	d={'1':'a','2':'b','3':'c'}
	for x in d.values():
		print(x)
**判断是否可以迭代**

	from collections import Iterable
	r =isinstance('abc',Iterable)
	print(r)

**迭代list 获取角标-元素对**

	L = ['A','B','C','D']
	for i,values in enumerate(L):
		print(i,values)
**python for 循环可以同时应用两个变量**

	L = [(1,1),(2,4),(3,9)]
	for x,y in L:
		print(x,y)
	结果
	(1, 1)
	(2, 4)
	(3, 9)

## 列表生成式 ##
写列表生成式的时，把要生成的元素`x*x`放在前面，后面跟`for`循环，就可以创建list
**求偶数的平方和**

	L = [x*x for x in range(1,11) if x%2==0]
	print (L)

**双层循环，生成全排列**

	L = [m+n for m in 'abc' for n in 'xyz']
	print(L)
	['ax', 'ay', 'az', 'bx', 'by', 'bz', 'cx', 'cy', 'cz']

**for循环同时可以使用两个或者更多的个变量**
`dict`的`items()`可以同时迭代key和value

	D = {1:'A',2:'B',3:'C'}
	for x, y in D.items() :
		print(x,'=',y)

**把集合中的元素都变成小写**

	L = ['Hello', 'World', 'IBM', 'Apple']
	r= [s.lower() for s in L]
	print(r)

## 生成器 ##
在Python中一边循环一边计算的机制，称为生成器：generator

创建generator
- 把列表生成器的`[]`改成`（）`，就可以创建genetator

	g= (x for x in range(100))
	print(g)

获取生成器中的元素，使用迭代的方式

	g= (x for x in range(100))
	for y in g:
		print(y)

斐波拉契数列

	def fib(max):
		a,b,n= 0,1,0;
		while n < max:
			print(b)
			a,b=b,a+b
			n=n+1
		return 'done'
	fib(100）

将打印斐波拉契数列改变成genetator 需要将`print`变成`yield`


## 迭代器 ##
**可以直接作用于for 循环的的数据类型**

1. 集合数据类型，如 `list,tuple,set,str`
2. `generator `,包括生成器自带的`yield` 的generator funxtion

**使用isinstance()判断对象是否是Iterable**

	from collections import Iterable
	r =isinstance([],Iterable)
	print(r)

> 生成器不但可以作用于`for`循环，还可以调用`next()`,获取下一个值
> 可以被`next()`调用，并不断返回下一个值的对象称为**迭代器**


### 总结： ###
- 凡是可以用于`for`循环的对象都是`Iterable`类型；
- 凡是可作用于`next()`函数的对象都是`Iterator`类型
