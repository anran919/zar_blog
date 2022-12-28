---
title: 自学Python-面向对象编程
date: 2017-01-11 19:38:56
tags: Python
---

### 类 ###

	class Student(object):
	    def __init__(self, name,score):
	        self.name = name
	        self.score = score
	    def print_score(self):
	        print('%s: %s' % (self.name,self.score))
	s1 = Student('anakin',18)
	s2 = Student('anran',18)
	s1.print_score()
	s2.print_score()

- 定义类以`class`开头,后买年跟类名,类名后面的括号中写继承的类(一般默认继承Object)
- 和普通函数相比,在类中定义函数,第一个变量永远是实例变量`self`,但是调用的时候不用传入,Python解释器会自动把实例变量传进去

### 数据封装 ###

- 我们直接擦操作了对象内部数据,但无法知道方法内部的实现细节


### 访问限制 ###

- 在Class内部,有属性和方法,而外部代码通过直接调用实例变量的方法来操作数据,这样就隐藏了内部的复杂逻辑
- 如果要想是内部属性不被外部访问,在属性名称前面加__,在Python中如果变量名以__开头,就变成了私有变量,只有内部可以访问,外部不能访问

不能被直接访问

		class Student(object):
		    def __init__(self, name,score):
		        self.__name = name
		        self.__score = score
		    def print_score(self):
		        print('%s: %s' % (self.__name,self.__score))
		s1 = Student('anakin',18)

		print(s1.__name);

- 外部如果想访问和修改实例的,可以通过get和set方法

		class Student(object):
	    def __init__(self, name,score):
	        self.__name = name
	        self.__score = score
	    def print_score(self):
	        print('%s: %s' % (self.__name,self.__score))
	    def get_name(self):
	        return self.__name
	    def set_name(self,name):
	        self.__name=name
		s1 = Student('anakin',18)
		print(s1.get_name())
		s1.set_name('change')
		print(s1.get_name());
		print(s1.print_score())

**注意 :**

- 类似__xxx___ ,双下划线开头,双下划线结尾属于特殊变量,特殊变量可以直接访问,所以在命名变量名的时候不要使用__xxx__ 这样的变量名

- 类似_name的实例变量,外部是可以访问的,但是按照约定俗成的固定,这样的实例看作是私有的


### 继承 ###

- 继承的好处,子类可以获得父类的全部功能
- 子类和父类存在同样的方法,这时我们说子类覆盖了父类的方法,运行时会调用子类的方法,这样我们就获得了继承的另外一个好处:**多态**

		class Animal(object):
		    def run(self):
		        print('aninmal is running....')

		class Dog(Animal):
		    def run(self):
		        print('Dog is running....')

		class Cat(Animal):
		        def run(self):
		            print('Cat is running....')

		d = Dog()
		c = Cat()
		d.run()
		c.run()

### 多态 ###
- 对于静态语言像java ,如果需要传入Anima类型,则传入的对象必须是Animal类型或者它的子类,否则无法调用run方法

- 对于动态语言想Python,则不一定要传入Animal类型,只需要保证传入的对象有一个run方法就可以了

> 动态语言的的"鸭子类型",比要求严格的继承体系,一个对象只要"看起来像鸭子",那它就可以被看作是鸭子.

### 获取对象信息 ###

- 判断基本数据类型

		s= type('123')
		print(s)

- 判断一个对象是否是函数,使用types提供的函数

		import types
		'判断对象是否是函数'
		def fn():
		    pass
		s= types.FunctionType
		print(s)



		'判断对象是否是函数'
		def fn():
		    pass
		s= types.FunctionType
		s2 =types.BuiltinFunctionType
		s3 = type(abs)==s2
		print(s3)
		print(s)

 **isinstance()函数**

	'isinstance()函数'
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

- 判断是否是其中一种

		s=isinstance([1,2,3],(list,tuple))
		print(s)

**使用dir()**

- 获得一个对象的所有属性和方法使用`dir()`

- 配合使用`getattr(),setattr(),hasattr()`,可以直接操作一个对象的状态

		class Animal(object):
		    def __init__(self):
		        self.x= 9
		    def power(self):
		        return self.x*self.x
		a = Animal()
		s1 =hasattr(a,'x')
		s2 =hasattr(a,'y')
		s3 =getattr(a,'x')
		s4 =setattr(a,'x',4)
		s5= getattr(a,'x')
		print(s1)
		print(s2)
		print(s3)
		print(s4)
		print(s5)

### 实例属性和类属性 ###

- Python是动态语言,根据类创建的实例可以绑定任意属性,可以删除
- 如果类中存在这个属性,绑定新的属性,会得到新绑定的属性,如果删除就得到类的属性,绑定的属性只能通过类的实例调用,不能通过类名获取
