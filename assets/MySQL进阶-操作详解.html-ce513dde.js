import{_ as e,V as t,W as a,a1 as l}from"./framework-5e2051d8.js";const s={},i=l('<h3 id="mysql基本操作" tabindex="-1"><a class="header-anchor" href="#mysql基本操作" aria-hidden="true">#</a> MySQL基本操作###</h3><ol><li><p>打开数据库 sudo service mysql start;</p></li><li><p>连接数据库 mysql -u root -p</p></li><li><p>查看数据库 show dabases</p></li><li><p>使用数据库 use 数据库名字</p></li><li><p>创建数据库 create database 数据库名 eg : create database test</p></li><li><p>创建表 create table 表名（列名 数据类型 约束） eg : create table pet(name VARCHAR(20),owner VARCHAR(20),species VARCHAR(20),sex CHAR(1),birth DATE , death DATE);</p></li><li><p>查看创建的表 DESCRIBE pet;</p></li><li><p>插入数据 insert into test VALUES(&#39;tom&#39;,&#39;panda&#39;,&#39;hamster&#39;,&#39;f&#39;,&#39;2017-02-06&#39;，NULL);</p></li><li><p>从表中检索数据 select * from pet;</p></li></ol>',2),r=[i];function p(o,c){return t(),a("div",null,r)}const n=e(s,[["render",p],["__file","MySQL进阶-操作详解.html.vue"]]);export{n as default};
