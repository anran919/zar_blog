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
- mac系统查看docker服务名
```shell
launchctl list | grep docker
```
- 关闭并重新启动
```shell
# 如果这条命令没有启动,使用app图形界面重启
launchctl stop com.docker.docker.1376 && launchctl start com.docker.docker.1376
```

### 镜像commit 
> 在原有的ubuntu容器的基础上保存一个自己的安装有vim的镜像

1. 录取镜像
```shell
docker pull ubuntu
```
2. 启动镜像
```shell
docker run -it --name ubuntu ba6acccedd29  /bin/bash
```
3. 安装vim
```shell
apt-get update 
apt-get install vim
```
4. commit 保存镜像
> commit一个名叫``zar/ubuntu:1.0``镜像,备注为``安装了vim``,作者:``张安然``
```shell
#docker commit -m"备注" -a="作者" 容器ID 创建的目标镜像名字:[标签名]
docker commit -m"安装了vim" -a="张安然" b495980aba6b zar/ubuntu:1.0
```
5. 查看镜像
```shell
docker ps 
```

### 新镜像推送到私服仓库
1. 拉取registry镜像
```shell
docker pull registry
```
2. 运行私有仓库命令
> -  -d : 后台运行 
> - -v : 宿主机映射
```shell
docker run -d -p 5000:5000 -v ~/docker_cp/zar_registry/:/tmp/registry --privileged=true registry
````
3. 修改容器的名字(可以不做修改)
```shell
docker rename condescending_snyder rigistry
```
4. curl验证私服库中有哪些镜像
```shell
curl -XGET http://localhost:5000/v2/_catalog
```
5. 将镜像修改成符合私服规范的tag
```shell
#docker tag 镜像名:镜像tag host:port/存储到仓库的镜像名:tag
docker tag zar/ubuntu:1.0 localhost:5000/ubuntu:1.0
```
6. 修改配置文件,使其支持http
> 默认不支持http
```shell 
# 在mac系统下,查看daemon.json
cat .docker/daemon.json
# 修改daemon.json
vim .docker/daemon.json
{
#  "experimental" : false,
#  "insecure-registries" : [
#    "https://lepoazj6.mirror.aliyuncs.com"
#  ],
#  "debug" : true,
#  "registry-mirrors" : [
#    "https://lepoazj6.mirror.aliyuncs.com"
#  ],
  "insecure-registries" : ["localhost:5000"] # 增加这行配置
}
# 修改完后重启docker
```
7. 重启私服仓库
```shell
docker run -d -p 5000:5000 -v ~/docker_cp/zar_registry/:/tmp/registry --privileged=true registry
```
8. push 推送到私有服
```shell
docker push localhost:5000/ubuntu
```
9. curl 验证私有服有什么镜像
```shell
ni$ curl -XGET http://localhost:5000/v2/_catalog
```
10. pull 本地并运行
```shell
# 删除本地镜像
docker rmi -f localhost:5000/ubuntu:1.0
# 拉取私有仓库镜像
docker pull localhost:5000/ubuntu:1.0
# 运行
docker run -it localhost:5000/ubuntu:1.0 /bin/bash
```

### 使用示例
#### 安装Nginx,映射本地文件
> [docker安装Nginx，映射本地文件](https://blog.csdn.net/DPXXMT/article/details/117914728)
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

### docker挂载宿主机目录
::: warning
>主要:如果在挂载宿主机目录访问出现权限拒绝,在挂载的命令后加上 --privileged=true
:::

#### 宿主机和容器卷挂载的命令
```shell
# [宿主机目录路径]如果不存在会自动创建
docker run -it --privileged=true -v [宿主机目录路径]:[容器内目录路径]:[rw(默认可以读写)或者ro(read only 只读)] [镜像名]
```
- 示例一
> 将镜像zar/ubuntu:1.0创建的容器的/tmp/docker_data目录,挂载到宿主机的~/docker_cp/tmpmul
```shell
#  启动容器.挂载目录到宿主机
docker run -it --privileged=true -v ~/docker_cp/tmp:/tmp/docker_data --name=u1 zar/ubuntu:1.0
# 退出容器,回到宿主机
cd ~/docker_cp/tmp
touch v.txt 
# 重新进入容器
docker exec -it e72248f59488 /bin/bash
cd /tmp/docker_data
# 查看,这时候docker_data目录下也有v.txt
ls
```
#### 容器卷的rw和ro读写规则
- 默认为rw,可读可写
- ro,为只读
```shell
# 只读:ro eg:
docker run -it --privileged=true -v ~/docker_cp/tmp/um:/tmp/um:ro --name=u1 zar/ubuntu:1.0
```

#### 容器卷的继承
1. 容器1完成宿主机的映射
```shell
docker run -it --privileged=true -v ~/docker_cp/tmp/u1:/tmp/u1 --name=u1 zar/ubuntu:1.0
cd /tmp/u1
touch log.txt
```
2. 容器2继承容器1的映射
```shell
#docker run -it --privileged=true --volumes-from 父类 --name=u2 zar/ubuntu:1.0
docker run -it --privileged=true --volumes-from u1 --name=u2 zar/ubuntu:1.0
ls tmp/ # 此时容器u2继承了u1的映射关系,/tmp 目录下也有u1目录
```
3. 

