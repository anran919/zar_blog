---
title: MySQL基本操作.md
date: 2017-02-17 11:25:59
tags: MySQL
---

### MySQL基本操作###
1. 打开数据库 sudo service mysql start;

2. 连接数据库 mysql -u root -p

3. 查看数据库 show dabases

4. 使用数据库 use 数据库名字

5. 创建数据库 create database 数据库名 eg : create database test

6. 创建表 create table 表名（列名 数据类型 约束）
  eg : create table pet(name VARCHAR(20),owner VARCHAR(20),species VARCHAR(20),sex CHAR(1),birth DATE , death DATE);

7. 查看创建的表 DESCRIBE pet;

8. 插入数据 insert into test VALUES('tom','panda','hamster','f','2017-02-06'，NULL);

9. 从表中检索数据 select * from pet;
