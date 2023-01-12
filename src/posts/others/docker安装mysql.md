---
title: docker安装mysql
icon: docker
category:
  - docker
tag:
  - docker
  - mysql
---

# docker安装mysql

## 简单安装使用
- 镜像
```shell
docker pull mysql:8.0.31
```
- 运行镜像
> -e :环境
```shell
docker run -p 3306:3306 --name=mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.31
```

- 进入容器
```shell
docker exec -it mysql /bin/bash
```

- 进入mysql
```shell
mysql -uroot -p 
```
- 使用mysql
```sql
show databases;
creat database db01;
use db01;
create table t1(id int,name vachar(20));
insert into t1 values(1,'zs');
select * from t1;
```
::: tip
注意: 简单版安装删除容器后数据会丢失,所以需要[挂载容器数据卷,映射数据到宿主机]
:::
### 挂载容器数据卷,映射数据到宿主机
- 运行容器
::: tip
挂载多个容器数据卷
:::
```shell
docker run -d -p 3306:3306 --privileged=true -v ~/docker_cp/mysql/log:/var/log/mysql -v ~/docker_cp/mysql/data:/var/lib/mysql -v ~/docker_cp/mysql/conf:/etc/mysql/conf.d -e  MYSQL_ROOT_PASSWORD=123456 --name=mysql  mysql:8.0.31
```
- 进入容器

```shell
docker exec a01761d8734d /bin/bash
```
- 进入mysql
```shell
mysql -uroot -p 
```
- 使用mysql
```sql
show databases;
creat database db01;
use db01;
create table t1(id int,name vachar(20));
insert into t1 values(1,'zs');
select 
```

