---
title: 自学Python-模块
date: 2017-01-11 17:35:35
tags: Python
---
### 使用模块 ###

**标准注释**

	#!/usr/bin/env python3
	# -*- coding: utf-8 -*-

 - test_1.py

		#!/usr/bin/env python3
		# -*- coding: utf-8 -*-
		'a test module'
		___author__='anakin'

		import sys

		def test():
		    args = sys.argv
		    if len(args)==1:
		        print('hello,world')
		    elif len(args)==2:
		        print('hello :'+ args[1])
		    else:
		        print('too many argument!')

		if __name__=='__main__':
		    test()


- test_2.py

		import test_1

		test_1.test()

### 作用域 ###

- 外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public。

		#!/usr/bin/env python3
		# -*- coding: utf-8 -*-
		'函数的作用域'
		___author__='anakin'

		def _private_1(name):
		    print('private 1 run')

		def _private_2(name):
		    print('private 2 run')

		def greeting(name):
		    if len(name)>3:
		        return _private_1(name)
		    else :
		        return _private_2(name)
### 安装第三方模块 ###

安装Pillow

	安装Pillow
    pip install Pillow

	from PIL import Image
	im = Image.open('img.png')
	print(im.format,im.size,im.mode)

生成缩略图

	im.thumbnail((200, 100))
	im.save('thmb.jpg','JPEG')
