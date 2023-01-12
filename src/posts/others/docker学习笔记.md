---
title: docker学习笔记
icon: docker 
category: 
  - docker
tag:
  - docker
---

### 常用命令
- 容器重命名 ```docker rename 旧名字 新名字```

### 使用示例
#### 安装Nginx,映射本地文件
##### 下载镜像
```shell
docker pull nginx
```
##### 启动镜像
```shell
docker run -p 6666:80 --name nginx -d nginx
```
##### 将容器内的配置文件拷贝到当前目录
```shell
docker container cp nginx:/etc/nginx .
```
##### 终止Nginx容器,并删除容器
```shell
docker stop Nginx
docker  rm nginx 
```

##### 修改当前目录名称为conf，然后把conf移动到需要映射的目录
```shell
mv nginx conf
mkdir nginx 
mv conf ./nginx
```

##### 重新创建容器
```shell
docker run -p 6666:80 --name nginx -v ~/docker_cp/nginx/html:/usr/share/nginx/html -v ~/docker_cp/nginx/logs:/var/log/nginx -v ~/docker_cp/nginx/conf:/etc/nginx -d nginx
```
 #### 参考文章
> [docker安装Nginx，映射本地文件](https://blog.csdn.net/DPXXMT/article/details/117914728)


