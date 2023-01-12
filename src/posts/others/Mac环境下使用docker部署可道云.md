---
title: Mac环境下使用docker部署可道云
icon: docker
date: 2023年01月11日23:39:57
category:
    - docker
tag:
    - 私有云
---
# Mac环境下使用docker部署可道云
### 拉取镜像
```shell
docker pull kodcloud/kodbox
```
### 在宿主机创建目录

```shell
cd ~/Documents
mkdir kod
```

### 启动容器
```shell
docker run -d -it --name kodcloud -p 9527:80 -v ~/Documents/kod:/var/www/html --restart=always kodcloud/kodbox
```

### 访问服务
```http request
http://192.168.10.109:9527/
```

### 配置可道云
- 数据库配置:选择SQLite
- 设置用户名和密码: admin ,123456

### 客户端下载
```http request
https://kodcloud.com/download/
```


