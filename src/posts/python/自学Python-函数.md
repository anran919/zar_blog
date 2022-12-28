---
title: 自学Python- 函数
date: 2017-01-10 16:30:36
tags: Python
---
### 调用函数 ###
Python内置了很多有用的函数，我们可以直接调用。

要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数abs，只有一个参数

调用函数的要传入正确的参数个数和参数类型

#### 数据类型转换 ####
- 比如int() 把其他类型转换为整数

### 定义函数 ###

定义函数使用 `def` 后面依次跟 函数名 括号() 冒号: 然后在缩进语句块中写函数体,函数返回值用`retun`返回

**导入函数**

- 定义函数run保存为functions.py ,在test.py 中调用run函数,需要使用`from functions import run`导入函数run()

### 空函数 ###

定意一个函数什么也不做

`def nullFun():
	pres`

### 参数检查 ###

- 调用函数时如果参数的个数不对,会抛出异常
- 如果参数类型不对,不会被检查出来

检查参数:

	def my_abs(x):
	if not isinstance (x,(int,float)):
		raise TypeError('bad operand type')
	if x>0:
		return x
	else :
		return -x
	print(my_abs(4))

### 返回多个值 ###

	import math
	def move(x, y, step, angle=0):
	    nx = x + step * math.cos(angle)
	    ny = y - step * math.sin(angle)
	    return nx, ny
	x,y = move(100,100,60,math.pi/6)
	print(x,y)

实质是返回了一个tuple

## 函数的参数 ##
Python 可以使用默认参数,可变参数,关键字参数
### 位置参数 ###
	def power(x):
		return x*x
	print(power(2))

### 默认参数 ###
- 必选参数在前面,默认参数在后面

- 函数有多个函数时,把变化大的放在前面,变化小的放在后面


	def power(x, n=2):
	    s = 1
	    while n > 0:
	        n = n - 1
	        s = s * x
	    return s
	print(power(6))  # 36
	print(power(6,2))# 36
	print(power(2,3))# 8
- 添加一个list 并在最后加上"END",默认参数初始赋值为None

	    def add_end(L=None):
    		L.append('END')
    		return L

    	print(add_end([1,2,3]))


### 可变参数 ###

定义可变参数在参数前面加一个*

	def calc(*number):
		sum =0
		for n in number:
			sum = sum+n*n
		return sum
	print(calc(1,2,3,4))
	print(calc(1,2))

	#传入一个集合,在集合前面加上一个*
	nums =[1,2,3]
	print(calc(*nums))

### 关键字参数 ###
- 可变参数允许传入0个或者任意个参数,这些可变参数在函数中会自动组装为一个tuple
- 关键字参数允许你传入0个或者任意个参数名的参数,这些关键字参数在函数内部自动组装为一个dict

当有多个参数时使用dict 进行组合,作为参数

	def person(name,age,**kw):
		print('name',name,'age',age,'other',kw)

	extra ={'city':'beijing','job':'enginner'}
	person('ankin',24)
	person('ankin',24,city=extra['city'],job=extra['job'])

### 命名关键字参数 ###
- 关键字参数,函数的调用者可以传入任意不受限制的关键字参数,至于传入哪些,需要再函数的内部通过`kw` 检查
- 命名关键字必须传入参数名

		def person(name, age, *, city, job):
		    print(name, age, city, job)
		person('Jack', 24, city='Beijing', job='Engineer')

## 递归函数 ##
以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。

	def fact(n):
	    if n==1:
	        return 1
	    return n * fact(n - 1)
