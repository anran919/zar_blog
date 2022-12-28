---
title: MySQL使用.md
date: 2017-01-20 10:22:04
tags: MySQL
---

##ubuntu下使用MySQL##

###安装MySQL###
- 安装核心服务 sudo apt-get install mysql-server
- 安装客户端   sudo apt-get install mysql-client

###创蚩菘獾幕静僮?##
1. 打开MySQL :sudo service mysql start
2. 使用root:mysql -u root -p
3. 查看数据库 :show databases;
4. 连接数据库:use<数据库名>
5. 查看表:show tables;
6. 退出:quit 或者exit

###创建数据库和表###
1. 创建数据库: CREATE DATABASES <数据库名?
2. 创建表 : CAEATE TABLE <表名>(?...);

###查询表###
1. 查询全部select * from 表名
2. 条件查询: select 要查询的列名 from where 限制条件

###条件查询###
1. where后面限制条件可以有数学符号= ,<,>,>=,<=
2. and or : select * from employee where age<25 or >30;
3. in 和not in:表示在或者不在某个范围内的结果,select name,age,in_dpt FROM employee WHERE in_dpt IN('dpt3,dpt4');
4. LIKE 通配符 '_' 匹配任意字符一个'_'匹配一个字符,'%'匹配不定个字符eg: select name,age FROM employee WHERE phone LIKE '11%'
###对结果排序###
> 为了对结果排序,使用ORDER BY排序关键词,默认是升序,使用ASC的DESC可以指定升序或者降序,比如按salary降序排列
1. 降序排列:SELECT name,age,salary,phone FROM employee ORDER BY salary DESC;

###SQL内置函数和计算###
1. COUNT SUM AVG MAX MIN 分别为计数 求和 求平均 最大值 最小值
2. 使用AS关键字给值重命名
eg :
1. select max(salary),min(salary) from employee;
2. select count(sum) as salary_count from emplary;

###子查询###
1. 处理多个表才能获取信息,如获取name ='Tom'所在的in_dpt,做了几个project
eg: select count(proj_name) from project where of_dpt in(select in_dpt from employee where name ='Tom')

###插入语句###
1. insert into 表名(键名) values(值)
2. insert into 表名 values(值)

##约束##
**常见的约束**
1. 主键 PRIMARY KEY
2. 默认值 DEFAULT
3. 唯一UNIQUE
4. 外键FOREIGN KEY
5. 非空 NOT NULL
###建立含约束的表###
