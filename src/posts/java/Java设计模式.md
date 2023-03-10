---
title: Java设计模式.md
date: 2017-02-17 11:25:59
category:
  - Java
tag:
  - Java
---

## 设计原则 ##

### 1.单一职责原则 :###
> 一个类只负责一个功能领域中的相应职责

### 2. 开闭原则 : ###
> 一个软件实体应当对扩展开放，对修改关闭

### 3. 里氏代换原则 : ###
>　所有应用基类（父类）的地方，必须能透明的使用其子类对象

1. 使用原则 : 在程序设计时,尽量使用基类类型对对象进行定义,而在运行时再确定子类类型,用子类对象替换父类对象

### 4. 依赖倒转原则 ###
> 抽象不应该依赖于细节,细节应当依赖于抽象.换言之就是,要面向接口编程,而不是针对实现编程.

> 程序代码中传递参数或关联关系时,尽量应用层次高的抽象层类,既使用抽象类,接口进行变量类型声明,参数声明,返回值类型声明,以及数据类型的转换等,而不要用具体的类来做这些事.
