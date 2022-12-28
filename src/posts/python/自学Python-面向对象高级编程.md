---
title: 自学Python-面向对象高级编程
date: 2017-01-12 14:30:26
tags: Python
---
## 使用__slots__ ##

- 正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性


- 绑定属性

		class Student(object):
		    def __init__(self, name):
		        super(Student, self).__init__()
		        self.name = name

		s = Student('anakin')
		s.age = 10
		print(s.age)  # 给对象绑定属性
		print(s)

**绑定方法**

- 这样给实例绑定一个方法,对另外一个实例是不起作用的

		class Student(object):
		    def __init__(self, name):
		        super(Student, self).__init__()
		        self.name = name

		# 给实例绑定一个方法
		s = Student('anakin')
		def set_age(self,age):
		    self.age= age
		from types import MethodType
		s.set_age= MethodType(set_age,s)
		s.set_age(25)
		print(s.age) # 25

- 为了给所有实例绑定方法,可以给class绑定方法

		def set_score(self,score):
		    self.score=score

		Student.set_score =set_score  # 给类绑定方法
		s.set_score('abc')
		print(s.score)

- 使用__slots__ 限制绑定的属性


		class Student(object):
		    __slots__ = ('name','age') # 限制绑定的属性

		s  = Student()
		s.name= 'anakin'
		print(s.name)
		# s.score ='abc'   #  绑定score会报错,因为限制了绑定的属性
		# print(s.score)

> 注意: __slots__ 只对当前的类起作用,对子类没有作用


### 使用@property ###

- 通过提供set和get方法,检查参数

	class Student(object):
	    # 提供getScore和setScore方法
	    def get_Score(self):
	        return self._score

	    def set_Score(self,value):
	        if not isinstance(value,int):
	            print('输入数据类型错误')
	        if value< 0 or value > 100:
	            print('数据超出范围')
	        self._score= value
	s = Student()
	s.set_Score(105)

- 使用`@property` 对设置的属性进行检查`s.score=109` 相当于`s.set_score(109)``,s.score` 相当于`s.get_score()`

		class Student(object):
		    @property
		    def score(self):
		        return self._score

		    @score.setter
		    def score(self,value):
		        if not isinstance (value,int):
		            print('数据类型不合法')
		        if value < 0 or value > 100:
		            print('数据超出范围')
		        self._score =value
		s= Student()
		s.score=109
		print(s.score)

- 定义只读属性，提供get方法，不提供set方法

		class People(object):

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

### 多重继承 ###

 - Python支持多继承

### 定制类 ###

 Python 中有很多特殊用途的函数，帮助我们定制类

#### `__str__()` ####
- 作用：返回自定义的字符串

		# 定制函数
		class Student(object):
		    """docstring forStudent."""
		    def __init__(self, name):
		        self._name = name
		    def __str__(self):
		        return 'Student name :'+self._name
		s =Student('anakin')
		print(s)

- 让用户看到的字符串和程序开发者看到的字符串是一样的使用`__repr__`

		# 定制函数
		class Student(object):
		    def __init__(self, name):
		        self._name = name
		    def __str__(self):
		        return 'Student name :'+self._name
		    __repr__ =__str__
		s =Student('anakin')
		print(s)

### `__iter__` ###

- 如果一个对象想被`for..in ...`循环 ，就要实现`__iter__`函数 ，返回self

		class Fib(object):
		    def __init__(self):
		        self.a,self.b = 0,1

		    def __iter__(self):
		        return self

		    def __next__(self):
		        self.a ,self.b = self.b,self.a+self.b
		        if self.a>10000:
		            raise StopIteration();
		        return self.a

		for x in Fib():
		    print(x)

### `__getitem__` ###

 - 实现`__iter__` 方法可以使类`for.. in..`循环，实现`getitem`可以通过角标获取元素

		class Fib(object):
		    def __init__(self):
		        self.a,self.b = 0,1

		    def __iter__(self):
		        return self

		    def __next__(self):
		        self.a ,self.b = self.b,self.a+self.b
		        if self.a>10000:
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

### `__getattr__ `###

- 那就是写一个__getattr__()方法，动态返回一个属性

		class Student(object):
		    def __init__(self):
		            self.name ="anakin"
		    def __getattr__(self,attr):
		        if attr == 'age':
		            return 18
		s= Student()
		print(s.name)
		print(s.age)


- `__getattr__()`方法 也可以返回一个方法，调用方式对象.方法（）


### `__call__` ###

-  调用类中的方法

		class Student(object):
		    """docstring forStudent."""
		    def __init__(self):
		        self.name ='anakin'
		    def __call__(self):
		        print('调用自己的方法。。。。')
		s= Student()
		s()
