---
title: MySql的修改和删除.md
date: 2017-02-17 11:25:59
tags: MySQL
---

### 数据库的修改和删除 ###
1. 打开数据库 'sudo service mysql start'
2. 登录数据库 'mysql -u root -p'
3. 查看数据卡 show databsaes
4. 删除数据库 drop databsaes 数据库名
5. 连接数据库 use 数据库名
6. 显示数据库中的表 show tables
7. 查看表中的类容 select * from 表名
8. 修改表的名字 rename table 旧表名 to 新表名
9. 删除一张表 drop table 表名
10. 增加列 alter table 表名 add column 列名字 数据类型 约束 eg: alter table employee add height int(4) default 170  (给employee 表增加height列 )
11. 增加列并指定新增列的位置 使用after  eg: alter table employee add height int(4) dafault 170 after age ; 新增加列放在第一个使用 first
12. 删除一列 alter table 表名 drop column 列名字
13. 修改表中的某个值 update 表名 set 列1=值1，列2=值2 where 条件 eg: update employee set age=24,salary=300 where name = 'Tom'
14. 根据条件删除一列 delete table from employee where name='Tom';

### 索引 ###
1. 增加索引 create index 索引名字 on 表名（列名）
  eg : create index idx_id on employee(id)

### 视图 ###
视图是从一个或多个表中取出数据在窗口中展示，可以看作一张表，但数据依赖原表

1. 创建视图的语句: create view 视图名字（列a,列b，列c) as select 列1,列2,列3 from 表名
  eg : create view v_emp(v_name,v_age,v_salary) as select name,age,salary from employee;

### 导入 ####
> 把文件中的数据导入表中

1. 导入语句格式 load data infile '文件路径' to 表名
  eg: load data infile '/home/anakin/MySql/SQL6/in.txt' to employee

### 导出 ###
> 将表中的数据导出到文本中

1. 导出的语句格式：select name,age into outfile '文件路径和文件名' from 表名
  eg : select * into outfile '/tmp/out.txt' from employee

### 数据库备份 ###
> 使用mysqldump备份数据库，生成sql脚本文件

1. 备份整个数据库 mysqldump -u root 数据库名>备份文件名

2. 备份数据表 mysqldump -u root 数据库名 表名>备份文件名


eg : mysqldump -u root -p mysql_shiyanlou>bak.sql;

### 数据库恢复 ###

1. 恢复数据的语句：
  1. 使用source sql 脚本
  2. 新建一个数据库 create database test;  恢复数据 mysqldump -u root -p test<bak.sqp
