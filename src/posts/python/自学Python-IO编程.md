---
title: 自学Python-IO编程
date: 2017-01-13 09:30:18
tags: Python
---
## 读文件 ##

- 使用open('文件地址'，'标识符')函数
- 使用read()读取
- 最后一步使用close(关闭)

使用**`with `**读取，自动关闭


		# 使用with 读取，自动关闭
		with open('D:/pro/python/test.txt','r') as f:
		    print(f.read())

- 调用readline() 可以一次读取一行内容
- 调用readlines() 一次读取所有的内容，并返回一个list
- 不能确定文件大小使用readlines()

		with open('D:/pro/python/test.txt','r') as f:
		    for line in f.readlines():
		        print(line.strip())

### 读取二进制文件 ###

- 打开模式使用'rb'

		# 读取二进制文件
		with open('D:/pro/python/img.png','rb') as f:
		    for line in f.readlines():
		        print(line.strip())

### 字符编码 ###
- 要读取非UTF-8编码的文本文件，需要给open()函数传入encoding参数

		f = open('/Users/michael/gbk.txt', 'r', encoding='gbk')

- 遇到非法编码文件，open函数还接受一个errors参数，表示遇到编码错误后如何处理，最简单的方式就直接忽略

		f = open('/Users/michael/gbk.txt', 'r',
		encoding='gbk',errors = 'ignore')


## 写文件 ##

 > 与读文件的区别open() 函数的的标识符，传入'w','wb'表示写文件和二进制文件

- 写文件

		with open('D:/pro/python/write.txt','w') as f:
		    f.write('hello write new file... ')

## StringIO 和BytesIO ##

### StringIO  ###

很多时候，数据读写不一定是文件，也可以在内存中读写

- 在内存中写str，使用`getvalue()`获取写入的内容

		 from io import StringIO
		f = StringIO()
		f.write('hello')
		f.write('hello')
		f.write('hello')
		print(f.getvalue())

- 读取StringIO

		while True:
		    s =f.readline()
		    if s =='':
		        print('s =='+ s)
		        break
		    print(s.strip())

### BytesIO###

- 内存中读写二进制文件

		# 写入二进制文件
		from io import BytesIO
		f = BytesIO()
		f.write('你好'.encode('utf-8'))
		s= f.getvalue()
		print(s)

- 读取二进制文件

		# 读取二进制文件
		from io import BytesIO
		f = BytesIO(b'\xe4\xbd\xa0\xe5\xa5\xbd')
		s= f.read()
		print(s)

### 操作文件和目录 ###

- **查看当前目录的绝对路径**

		import os
		v= os.path.abspath('') # 查看当前目录的绝对路径
		print(v)
- 在某个路径下创建一个新目录,首页把新路径目录表示出来

		# 删除一个文件夹
		os.rmdir('D:/pro/python/testdir')

		# 对文章重命名
		a = os.rename('test.txt','test.py')

		#删除文件
		d = os.remove('test.py')

- 过滤文件

		# 过滤文件,比如列出当前目录下的所有文件夹
		s = [x for x in os.listdir('.') if os.path.isdir(x)]
		print(s)

		# 过滤文件 ,获得所有的.py文件
		s = [ x for x  in os.listdir('.') if os.path.isfile(x) and
		os.path.splitext(x)[1]=='.py']
		print(s)

### 序列化 ###

>我们把变量从内存中变成可存储的过程称为序列化
> 序列化后的内容可以写到磁盘上或者通过网络传输

- 将对象序列化

		import pickle
		d = dict(name='zhanghua',age=18,score=100)
		s =pickle.dumps(d)
		print(s)

-  将对象写入文件中

		import pickle
		d = dict(name='zhanghua',age=18,score=100)
		s =pickle.dumps(d)
		print(s)
		f= open('dump.txt','wb')
		pickle.dump(d,f)
		f.close()

- 读取存储在文件中的对象

		# 读取存储的对象
		r= open('dump.txt','rb')
		o = pickle.load(r)
		r.close()
		print(o)


### JSON  ###

我们要在不同的编程语言中传递对象,就必须把对象序列化为标准格式,如xml 和json

- 序列化json和反序列化json

		import json
		# 序列化
		d = dict(name='Bob',age=20,score=88)
		j = json.dumps(d)
		print(j)

		# 反序列化
		json_str = '{"age": 20, "score": 88, "name": "Bob"}'
		s =json.loads(json_str)
		print(s)

- 将实例对象序列化

		class Student(object):
		    def __init__(self, name,age,score):
		        self.name = name
		        self.age = age
		        self.score = score
		s = Student('anakin',18,100)
		# 将实例转换为json
		j = json.dumps(s,default=lambda obj : obj.__dict__)
		print(j)

- json反序列化成对象

		# json 反序列化成对象
		def dict2student(d):
		    return Student(d['name'],d['age'],d['score'])
		json_str = '{"score": 100, "name": "anakin", "age": 18}'
		r = json.loads(json_str, object_hook=dict2student)
		print(r)
