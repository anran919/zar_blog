---
title: 自学Python-Python基础二
date: 2017-01-10 15:06:47
tags: Python
---
## 使用list和tuple ##
### list集合 ###
> list 是一种有序集合,可以随时添加和删除元素

    classmates =['xxx','yyyy','zzzz']
	print(classmate)
> 使用索引获取每个位置的元素,索引从0开始

    classmates[1] # 结果'l'

> 当索引超出边界会报IndexError

**增加元素**
- classmates.append('Adam')

**插入元素**
- classmates.insert(1,'ankain'),(插入的位置,插入的元素)

**删除末尾的元素**
- classmats.pop()

**删除指定位置元素**
- classmates.pop(1) ,(删除元素的索引)

**替换元素**
- classmats[1]='直接给索引赋值'

> list 中的元素也可以是list


### tuple有序列列表叫做元组  

tuple与list类似,但是tuple一旦初始化就不能被修改,没有增加和删除的等方法,获取元素方式和list一样

	初始化:f=()

## 条件判断 ##

    age =3
    if age >= 18:
    	print('年轻人')
    elif age>=6:
    	print('小孩子')
    else:
    	print('其他')

### input ###
录入用户的输入到年龄 使用birth接收
    birth = input('borth')
    if birth>=18:
    	print('chengnianren')
    elif birth>=60:
    	print('old man')
    else:
    	print('hahhahhh')

### 循环 ###
Python有两种循环

1. for ..in
	sum =0
	for x in range(101):
	sum+=x
	print(sum)
2. while
    n= 101
    sum =0
    sum=sum+n
    n=n-2
    print(sum)

### dict和set ###
dict 就像java 中的map使用键值对key - velues 存储,查找速度快
set 也是一组key的集合,但是没有value ,而且不能存储重复的元素

### dict ###
    map ={'xiaoming':90,'xiaohong':100,'laowang':99}
    print(map['xiaoming'])

- 一个key只能对应一个value 重复放入同一个key会把前面的value冲掉
- 如果key不存在,会报错
- 判断key是否存在一种方法 : `'anakin' in map`
- 另外一种方法 : `map.get("key")` 返回None 或者对应的value

**删除key**
- `key.pop('key')` 对应的value也会被删除
**dict和list的区别**
1. 查找和插入速度快,不会随着key的增加而变慢
2. 需要占用大量内存
3. list则相反

### set ###
是一个无序,不重复的集合
**创建set**
- 创建set需要提供一个list : `s =set([1,2,3])`

**增加元素**
- 通过add('add') 重复添加没有效果

**删除元素**
- 通过remove(key) 删除元素

**交集和并集运算**
    s1 = set([1,2,3])
    s2 = set([1,2,4])
    print(s1&s2)
    print(s1|s2)

### 可变对象和不可变对象 ###
- str 是不可变对象
- list 是可变对象
