---
title: 'MySQL学习记录'
icon: MySQL
date: 2022年12月28日19:35:06
category:
  - MySQL
tag:
  - MySQL
---

# MySQl语句练习
```mysql
### 使用数据库
show databases;
use atguigudb;

### 重置密码
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

show tables;
select *, first_name as f_name, last_name as l_name
from employees;

select distinct department_id
from employees;

-- 计算年工资
select employee_id, salary "月工资", salary * (1 + IFNULL(commission_pct, 0)) * 12 "年工资", commission_pct
from employees;

select *
from `order`;

--   查询常量
select *, 'hello'
from `order`;

-- 显示表结构
describe employees;
DESC `employees`;

-- 去重
select distinct job_id
from `employees`;

-- where

select *
from employees;
select *
from employees
where last_name = 'king'
  and first_name = 'Steven';

-- 练习 -------------------

-- 计算12个月的总工资
select *, salary * 12 * (1 + IFNULL(commission_pct, 0)) "12月基本工资"
from employees;

--  去除重复job_id
select distinct job_id
from employees;

--  查询工资大于12000 的员工的工资和姓名
select *
from employees
where salary > 12000;

-- 查询工号为167的员工的姓名和部门号
select first_name, last_name, department_id
from employees
where employee_id = 167;

-- 显示departments的表结构,并查询全部数据
desc departments;
select *
from departments;

### 运算符
select 1 + 1, 4 * 5;
select 1 + 1, 4 * 5
from dual;
select count(*)
from employees
where department_id % 2 = 0;
select 1 <=> '1', NULL <=> NULL;
select 1 = '1', NULL = NULL;

-- 最小 /最大
select LEAST(first_name, last_name)
from employees;
-- 范围查询
select *
from employees
where salary >= 6000 && salary <= 8000
order by salary;

-- 模糊查询
select first_name
from employees
where first_name like '%ab%';
select first_name
from employees
where first_name like '%a%e%';
select last_name
from employees
where last_name like '%a%'
  and last_name like '%e%';
-- _ 代表一个字符
-- 查询第二个字符是a的last_name
select first_name
from employees
where first_name like '_a%';
-- 查询第三个字符是c的last_name
select first_name
from employees
where first_name like '__c%';
-- 转义字符\,查询第二个字符是_,第三个字符是o
select last_name
from employees
where last_name like '_\_o%';

-- in(set) / not in(set)

select *
from employees
where salary in (12000, 13000, 14000)
order by salary;
select *
from employees
where salary not in (12000, 13000, 14000)
order by salary;

### 运算符

### 运算符练习
-- 1. 选择工资不在5000到12000的员工的姓名和工资
select first_name, salary
from employees
where not (salary > 5000 and salary < 12000)
order by salary desc;
-- 2 查询 20号或者50号部门工作的员工,姓名和部门号
select first_name, department_id
from employees
where department_id in (20, 50);
-- 3 选择公司中没有管理者的员工的姓名和job_id
select job_id, first_name, department_id
from employees
where department_id <=> null;
-- 4. 选择公司中有奖金的员工姓名,工资和奖金级别
select last_name, salary, commission_pct
from employees
where not commission_pct <=> null;
select last_name, salary, commission_pct
from employees
where commission_pct is not null;
-- 5. 查询员工姓名第三个字母是a的员工
select *
from employees
where last_name like '__a%';
-- 6. 查询员工姓名中有字母a和k的员工的姓名
select last_name
from employees
where last_name like '%a%k%'
   or last_name like '%k%a%';
select last_name
from employees
where last_name like '%a%'
  and last_name like '%k%';
-- 7 查询表employees first_name 以e结尾的员工信息
select first_name
from employees
where first_name like '%e';
-- 8 查询表employees 部门编号在80-100之间的姓名和工种
select department_id, last_name, job_id
from employees
where department_id >= 80
  and department_id <= 100
order by department_id;
-- 9. 查询表employees中manger_id是100,101,110的员工的姓名,工资,管理者id
select last_name, salary, manager_id
from employees
where manager_id in (100, 101, 110);
### 运算符练习

###  排序和分页
select *
from employees
order by employee_id, department_id desc;
--  limit (pageNo-1)*pageSize ,pageSize
select *
from employees
order by employee_id, department_id desc
limit 0,10;

select *
from employees
where employee_id > 110
order by employee_id desc
limit 0,10;

-- 查询第100 ,101条数据
select *
from employees
limit 99 ,2;

-- 查询工资最高的员工
select *
from employees
order by salary desc
limit 0,1;

###  排序和分页

### 练习
-- 1. 查询员工的姓名部门你年薪,按照年薪降序,姓名升序
select salary * 12 as y_salary, last_name
from employees
order by y_salary desc, last_name asc;

-- 2. 查询工资不在8000 到17000 的员工,按照工资降序,显示21 到40位置的数据
select *
from employees
where not salary > 8000
  and salary < 17000
order by salary desc, last_name asc
limit 20 ,40;
-- 3. 查询邮箱中包含e的员工,并且按照邮箱的字节数降序,再按照部门号升序
select email, department_id
from employees
where email like '%e%'
order by length(email) desc, department_id asc;
### 练习

### 多表查询
select *
from employees;
select *
from departments;
select *
from locations;

select *
from employees
where last_name = 'Abel';

select *
from departments
where department_id = 80;

select *
from locations
where location_id = 2500;

--  联合查询
select employee_id, department_name, departments.department_id
from employees
         join departments
where employees.department_id = departments.department_id;

-- 表的别名
select e.employee_id, d.department_name, e.department_id
from employees as e
         join departments as d
where e.department_id = d.department_id;

-- 练习
-- 1. 查询员工的employee_id,last_name,department_name,city
select e.employee_id, e.last_name, d.department_name, l.city
from employees as e,
     departments as d,
     locations as l
where e.department_id = d.department_id
  and d.location_id = l.location_id;

-- 非等值连接
select *
from job_grades;
-- 查询员工的工资和对应的等级
select e.last_name, e.salary, j.grade_level
from employees as e,
     job_grades as j
where e.salary between j.lowest_sal and j.highest_sal
order by grade_level;

-- 自连接
-- 练习: 查询员工id,员工姓名及管理者的id和姓名
select t1.employee_id as '员工id', t1.last_name as '员工姓名', t2.employee_id as '管理者id', t2.last_name as '管理者姓名'
from employees as t1,
     employees as t2
where t1.manager_id = t2.employee_id;

-- 内连接和外连接
-- 内连接 相当于交集
-- 外连接相当于并集
-- 外连接分:左外,右外 ,满外

## 练习: 查询所有的员工的last_name,department_name信息,
select e.last_name, d.department_name
from employees as e,
     departments as d
where e.department_id = d.department_id;

-- 99 语法
select e.last_name, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id;

-- 内连接
select e.employee_id, e.last_name, d.department_name, l.city
from employees as e
         join departments as d
              on e.department_id = d.department_id
         join locations as l
              on d.location_id = l.location_id;

-- 左外连接

select e.employee_id, e.last_name, d.department_name, l.city
from employees as e
         left outer join departments as d
                         on e.department_id = d.department_id
         left outer join locations as l
                         on d.location_id = l.location_id
order by e.employee_id;

-- 右外连接 outer inner 可以省略
select e.employee_id, e.last_name, d.department_name, l.city
from employees as e
         right outer join departments as d
                          on e.department_id = d.department_id
         join locations as l
              on d.location_id = l.location_id
order by e.employee_id;

### union  和 union all 联合查询

### 7中join 实现

-- 内连接
select last_name, department_name
from employees as t1,
     departments as t2
where t1.department_id = t2.department_id;

-- 左外连接
select last_name, department_name
from employees as t1
         left join departments as t2
                   on t1.department_id = t2.department_id;
-- 右外连接
select last_name, department_name
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id;

-- 左外连接 去掉交集
select last_name, department_name
from employees as t1
         left join departments as t2
                   on t1.department_id = t2.department_id
where t2.department_id <=> null;

-- 右外连接 去掉交集
select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id
where t1.department_id <=> null;

-- 满外连接
select last_name, department_name, t2.department_id
from employees as t1
         left join departments as t2
                   on t1.department_id = t2.department_id
union all
select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id
where t1.department_id <=> null;


-- 去除交集对应sql joins 的右下图

select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         left join departments as t2
                   on t1.department_id = t2.department_id
where t2.department_id <=> null
union all
select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id
where t1.department_id <=> null;

### 自然连接

-- 原有方式
select e.employee_id, e.last_name, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id
                  and e.manager_id = d.manager_id;
-- 99新特性 自然连接 自动查询两个/多个表中相同的字段
select e.employee_id, e.last_name, d.department_name
from employees as e
         natural join departments as d;

select e.employee_id, e.last_name, d.department_name, l.city
from employees as e
         natural join departments as d
         natural join locations as l;

### 练习
-- 1. 显示'所有'的员工的姓名,部门号和部门名称
select last_name, d.department_id, d.department_name
from employees as e
         left join departments as d
                   on e.department_id = d.department_id;

-- 2. 查询90号部门员工的job_id 和90号部门的location_id
select e.job_id, e.department_id, d.location_id
from employees as e,
     departments as d
where e.department_id = 90
  and e.department_id = d.department_id;

-- 3. 查询'所有'有奖金的员工的last_name,department_name,location_id,city
select e.last_name, e.commission_pct, d.department_name, l.location_id, l.city
from employees as e
         left join departments as d
                   on e.department_id = d.department_id
         left join locations as l
                   on d.location_id = l.location_id
where e.commission_pct is not null;

-- 4. 选择city在Toronto工作的员工的last_name,job_id, department_id,department_name
select e.last_name, e.job_id, d.department_name, e.department_id, l.location_id, l.city
from employees as e,
     departments as d,
     locations as l
where e.department_id = d.department_id
  and d.location_id = l.location_id
  and l.city = 'Toronto';

-- 5. 查询员工所在的部门名称,部门地址,姓名,工作,工资,其中员工所在部门的部门名称为'Executive'
select d.department_name, e.last_name, e.job_id, e.salary, l.street_address
from employees as e
         left join departments as d
                   on e.department_id = d.department_id
         left join locations as l
                   on d.location_id = l.location_id
where d.department_name = 'Executive';

-- 6. 查询指定员工的姓名,员工号,以及他他他的管理者的姓名员工号(需要起别名)
select t1.last_name as '姓名', t1.employee_id as '员工号', t2.last_name as '管理者', t2.employee_id as '管理者员工号'
from employees as t1
         left join employees as t2
                   on t1.manager_id = t2.employee_id;

-- 7. 查询哪些部门没有员工
select *
from departments as d
         left join employees as e
                   on d.department_id = e.department_id
where e.department_id is null;

-- 8. 查询哪些城市没有部门
select l.city, d.department_id, d.department_name
from locations as l
         left join departments as d
                   on l.location_id = d.location_id
where d.department_id is null;

-- 9. 查询部门名为Sales 或 IT的员工信息
select *
from employees as e,
     departments as d
where e.department_id = d.department_id
  and d.department_name in ('Sales', 'IT');

### 练习

### 单行函数


### 字符串函数


### 日期函数
select unix_timestamp(), from_unixtime(unix_timestamp());

### 流程控制函数

-- if
select last_name, salary, if(salary > 6000, '高工资', '低工资') as '工资水平'
from employees
order by salary;

select last_name, if(commission_pct is not null, commission_pct, 0) as "奖金"
from employees
order by commission_pct;

-- ifnull
select last_name, ifnull(commission_pct, 0) as "奖金"
from employees
order by commission_pct;

-- case when then else end
select last_name,
       salary,
       case
           when salary > 15000 then '白骨精'
           when salary > 10000 then '潜力股'
           when salary > 20000 then '潜力股'
           else '前途无限'
           end as "段位"
from employees
order by salary;

# 练习1 .查询部门号为10,20,30 的员工信息 , 若部门号为 10 ,咋打印其工资的1.1倍, 20号工资1.2倍,30号 1.3倍,其他部门为1.4倍
select last_name,
       department_id,
       salary  as '基本工资',
       case department_id
           when 10 then salary * 1.1
           when 20 then salary * 1.2
           when 30 then salary * 1.3
           end as '加奖金工资'
from employees
where department_id in (10, 20, 30);


### 练习

-- 1. 显示系统时间(日期+时间)
select now();

-- 2. 查询员工号,姓名,工资, 以及工资提高20%后的结果
select employee_id, salary, salary * (1 + 0.2)
from employees;

-- 3. 将员工的姓名,按照首字母排序,并显示姓名的长度
select last_name, length(last_name) as '长度'
from employees
order by last_name;

-- 4. 查询员工的id,last_name, salary ,并作为一个列输出,别名为out_put
select concat_ws('-', employee_id, last_name, salary) as 'out_put'
from employees
order by salary;

-- 5.查询公司员工的工作年数,工作天数,并按照工作年数降序排序
select timestampdiff(YEAR, hire_date, now()) as '工作年数',
       timestampdiff(DAY, hire_date, now())  as '工作天数',
       hire_date,
       now()
from employees
order by timestampdiff(YEAR, hire_date, now()) desc;

-- 6. 查询员工姓名,hire_date,department_id ,满足以下条件: 雇用时间在1997年之后,department_id 为 80 90或110,commission_pct不为空
select last_name, hire_date, department_id, commission_pct
from employees
where department_id in (80, 90, 110)
  and commission_pct is not null
  and unix_timestamp(hire_date) > unix_timestamp('1997-1-1')
order by hire_date;

-- 7. 查询入职超过10000天的员工的姓名,入职时间
select last_name, hire_date, timestampdiff(DAY, hire_date, now()) as '入职天数'
from employees
where timestampdiff(DAY, hire_date, now()) > 10000
order by timestampdiff(DAY, hire_date, now());

-- 8. 查询产生一下结果 <last_name> earns <salary> ,'monthly but wants ' <salary*3>
select concat_ws(' ', last_name, 'earns', truncate(salary, 0), 'monthly but wants ',
                 truncate(salary * 3, 0)) as 'dream salary'
from employees;

-- 9. 使用case-when ,按照下面条件查询
-- job      grade
-- AD_PRES  A
-- ST_MAN   B
-- IT_PROG  C
-- SA_REP   D
-- ST_CLERK E
select job_id,
       case job_id
           when 'AD_PRES ' then 'A'
           when 'ST_MAN ' then 'B'
           when 'IT_PROG ' then 'C'
           when 'SA_REP ' then 'D'
           when 'ST_CLERK ' then 'E'
           else 'F'
           end as grade
from employees
order by grade asc;

### 单行函数
### ---- 聚合函数 -----
-- 平均值 ,总数
select AVG(salary), sum(salary)
from employees;

-- count 计算指定字段在查询结果中出现的个数
select count(job_id), job_id
from employees
group by job_id;

select count(1)
from employees;

select avg(commission_pct), sum(commission_pct) / count(commission_pct), sum(commission_pct) / count(1)
from employees;

-- 计算平均奖金率
select sum(commission_pct) / count(ifnull(commission_pct, 0)) as '平均奖金率'
from employees;

###  group by

-- 查询各个部门的平均工资,最高工资
select d.department_id, d.department_name, min(salary), avg(salary), max(salary)
from employees as e
         right join departments as d
                    on e.department_id = d.department_id
group by department_id;

-- 查询各个department_id,job_id的平均工资
select avg(salary), department_id, job_id
from employees
group by department_id, job_id;

-- with rollup
select department_id, avg(salary)
from employees
where department_id in (80, 90, 110)
group by department_id
with rollup;

-- having 用来过滤数据 ,如果过滤条件中使用了聚合函数,则必须使用having来替代where
-- 查询各个部门中最高工资比10000高的部门信息
select max(salary), d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id
group by e.department_id
having max(salary) > 10000;

-- 练习: 查询部门id为10,20,30 40这四个部门中最高工资比10000高的部门信息
-- 第一种方式 ,推荐使用
select max(salary), d.department_id, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id and d.department_id in (10, 20, 30, 40)
group by e.department_id
having max(salary) > 10000;
-- 第二种方式
select max(salary), d.department_id, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id
group by e.department_id
having max(salary) > 10000
   and department_id in (10, 20, 30, 40);


##  练习
-- 1. where子句是否可以使用组函数进行过滤 ?
# 不可以,需要使用having
-- 2. 查询公司员工工资的最大值,最小值,平均值,求和
select max(salary), min(salary), avg(salary), sum(salary)
from employees;
-- 3. 查询各job_id的员工的工资的最大值,最小值,平均值,总和
select job_id, max(salary), min(salary), avg(salary), sum(salary)
from employees
group by job_id;
-- 4. 选择具有各个job_id的员工的工人数
select job_id, count(*)
from employees
group by job_id;
-- 5. 查询员工最高工资和最低工资的的差距(difference)
select max(salary), min(salary), (max(salary) - min(salary)) as 'difference'
from employees;
-- 6. 查询各个管理者手下员工的最低工资,其中最低工资不能低于6000,没有管理者的员工不计算在内
select manager_id, min(salary)
from employees
where salary >= 6000
  and manager_id is not null
group by manager_id;
-- 7. 查询所有部门的名字,location_id,员工数量和平均工资,按照平均工资降序
select d.department_name, d.location_id, min(e.salary), count(e.employee_id), avg(e.salary)
from employees as e
         right join departments as d
                    on e.department_id = d.department_id
group by d.department_id
order by avg(e.salary);

-- 8. 查询每个工种,每个部门的的部门名,工种名和最低工资
select min(salary), d.department_name, j.job_title
from employees as e
         right join departments as d
                    on e.department_id = d.department_id
         join jobs as j
              on e.job_id = j.job_id
group by d.department_id, j.job_id;

### ---- 聚合函数 -----

### ---- 子查询 -----

-- 练习
-- 1. 谁比Abel工资高
-- 方式 1,使用子查询
select last_name, salary
from employees
where salary >= (select salary from employees where last_name = 'Abel')
order by salary;
-- 方式2 ,使用自连接
select t1.last_name, t1.salary
from employees as t1
         join employees as t2
where t1.salary >= t2.salary
  and t2.last_name = 'Abel';
-- 2. 查询大于公司平均工资的员工
select salary, last_name
from employees
where salary > (select avg(salary)
                from employees);

-- 2. 查询大于部门平均工资的员工
select salary, last_name, department_id
from employees as t1
where salary >= (select avg(salary) from employees where department_id = t1.department_id)
order by salary;

-- 3. 查询工资大于149号员工工资的员工信息
select *
from employees
where salary > (select salary from employees where employee_id = 149);

-- 4. 查询job_id与141号员工相同,salary 比143号员工多的员工信息
select *
from employees
where job_id = (select job_id from employees where employee_id = 141)
  and salary > (select salary from employees where employee_id = 143);

-- 5. 查询与141号或174号员工的manager_id和department_id相同的,其他员工的employee_id,manager_id,department_id
select employee_id, manager_id, department_id
from employees
where (manager_id, department_id)
    in (select manager_id, department_id from employees where employee_id in (141, 174))
  and employee_id not in (141, 174);

select employee_id, manager_id, department_id
from employees
where manager_id in (select manager_id from employees where employee_id in (141, 174))
  and department_id in (select department_id
                        from employees
                        where employee_id in (141,
                                              174))
  and employee_id not in (141, 174);

-- 6. 查询最低工资大于50号部门最低工资的部门id和最低工资
select department_id, min(salary)
from employees
group by department_id
having min(salary) > (select min(salary) from employees where department_id = 50)
order by min(salary);

-- 7. 查询员工的employee_id,last_name和location,
-- 若员工的department_id 和 location_id为1800department_id相同
-- 则country为'Canada',其余则为'USA'
select employee_id,
       last_name,
       l.location_id,
       e.department_id,
       l.street_address,
       if(e.department_id in (select department_id
                              from employees
                              where department_id = (select department_id
                                                     from departments
                                                     where location_id = 1800)), 'Canada', 'USA') as country
from employees as e
         left join departments as d
                   on e.department_id = d.department_id
         left join locations as l
                   on d.location_id = l.location_id;

### 多行子查询
-- in
-- 1. 查询工资是各部门最低工资的员工
select *
from employees
where salary in (select min(salary)
                 from employees
                 group by department_id);
-- any /some
-- all
-- 1. 返回其他job_id中比job_id为'IT_PROG'部门任一工资低的员工信息
select last_name, job_id, salary
from employees
where salary < some (select salary from employees where job_id = 'IT_PROG')
  and job_id != 'IT_PROG'; -- 76 rows

select last_name, job_id, salary
from employees
where salary < all (select salary from employees where job_id = 'IT_PROG')
  and job_id != 'IT_PROG'; -- 1 rows

select last_name, job_id, salary
from employees
where salary in (select salary from employees where job_id = 'IT_PROG')
  and job_id != 'IT_PROG';
-- 10 rows

-- 查询平均工资最低的部门id
-- 方法1
select department_id, avg(salary)
from employees
group by department_id
order by avg(salary)
limit 0,1;

-- 方法2
select department_id
from employees
group by department_id
having avg(salary) = (select min(avg_salary)
                      from (select avg(salary) as avg_salary
                            from employees
                            group by department_id) as t_dep_avg);

-- 方法3
select department_id
from employees
group by department_id
having avg(salary) <= all (select avg(salary) as avg_salary
                           from employees
                           group by department_id);


### 相关子查询
-- 1. 查询员工中工资大于本部门平均工资的员工的信息

-- 方式1
select t1.last_name, t1.salary, t1.department_id
from atguigudb.employees as t1
where salary >
      (select avg(salary)
       from employees as t2
       where t1.department_id = t2.department_id);

-- 方式2,在from 中使用子查询
select t1.last_name, t1.salary, t1.department_id
from atguigudb.employees as t1,
     (select department_id, avg(salary) as dept_avg_salary from atguigudb.employees group by department_id) as t2
where t1.department_id = t2.department_id
  and t1.salary > t2.dept_avg_salary;


-- 2. 查询员工的id,salary 按照department_name排序
-- 方式一
select e.department_id, e.salary, department_name
from atguigudb.employees as e
         left join atguigudb.departments as d
                   on e.department_id = d.department_id
order by d.department_name;
-- 方式2
select e.department_id,
       e.salary,
       (select d.department_name
        from atguigudb.departments as d
        where e.department_id = d.department_id) as department_name
from atguigudb.employees as e
order by (select d.department_name from atguigudb.departments as d where e.department_id = d.department_id);

-- 3. 若employees表中的employee_id 与 job_history表中的employee_id相同的数目不小于2,
-- 输出这些相同id的员工的employee_id,last_name和其job_id
select e.employee_id, e.last_name, e.job_id
from atguigudb.employees as e
where (select count(*) from atguigudb.job_history as j where j.employee_id = e.employee_id) >= 2;

-- 4. 查询公司管理者的employee_id,last_name,job_id,department_id 信息
-- 方式1 自连接
select e.employee_id, e.last_name, e.job_id, e.department_id
from atguigudb.employees as e
where e.employee_id in (select distinct manager_id from atguigudb.employees);
-- 方式2 子查询
select distinct m.employee_id, m.last_name, m.job_id, m.department_id
from atguigudb.employees as e
         join atguigudb.employees as m
              on e.manager_id = m.employee_id;
-- 方式3 使用exists
select e.employee_id, e.last_name, e.job_id, e.department_id
from atguigudb.employees as e
where exists(
              select * from atguigudb.employees as m where e.employee_id = m.manager_id
          );

-- 5.查询departments表中,不存在于employees表中的 department_id,department_name
-- 方法1
select d.department_id, d.department_name
from atguigudb.departments as d
         left join atguigudb.employees as e
                   on d.department_id = e.department_id
where e.department_id is null;

-- 方法2
select department_id, department_name
from atguigudb.departments as e
where not exists(select * from atguigudb.employees as d where e.department_id = d.department_id);

### 练习

-- 1. 查询和Zlotkey 相同部门的员工姓名和工资
select last_name, salary, department_id
from atguigudb.employees
where department_id = (select department_id
                       from atguigudb.employees
                       where last_name = 'Zlotkey');

-- 2. 查询工资比公司平均工资高的员工的员工号,姓名,和工资
select t.last_name, t.employee_id, t.salary
from atguigudb.employees as t
where salary > (select avg(salary)
                from atguigudb.employees)
order by salary;

-- 3. 查询工资大于所有job_id ='SA_MAN'的员工的工资定的员工的last_name,job_id, salary
select last_name, job_id, salary
from atguigudb.employees
where salary > (select max(salary)
                from (select salary
                      from atguigudb.employees
                      where job_id = 'SA_MAN') as t)
order by salary;


select last_name, job_id, salary
from atguigudb.employees
where salary > all (select salary
                    from atguigudb.employees
                    where job_id = 'SA_MAN')
order by salary;

-- 4. 查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名
select employee_id, last_name
from atguigudb.employees
where department_id in (select department_id
                        from atguigudb.employees
                        where last_name like '%u%'
                           or '%U%');

-- 5. 查询在部门的location_id为1700的部门工作的员工和员工号
select last_name, employee_id, department_id
from atguigudb.employees
where department_id in (select department_id
                        from atguigudb.departments
                        where location_id = 1700);
-- 6. 查询管理者是King的员工的姓名和工资
select last_name, salary, manager_id
from atguigudb.employees
where manager_id in (select employee_id from atguigudb.employees where last_name = 'King');

-- 7. 查询公司最低的员工信息,last_name ,salary
select last_name, salary
from atguigudb.employees
where salary = (select min(salary)
                from employees);

-- 8. 查询平均工资最低的部门信息
select *
from atguigudb.departments
where department_id = (select department_id
                       from atguigudb.employees
                       group by department_id
                       having avg(salary) = (select min(avg_salary)
                                             from (select avg(salary) as avg_salary, department_id as dpt_id
                                                   from atguigudb.employees
                                                   group by department_id) as t));
-- 方法2 <= all
select *
from atguigudb.departments
where department_id = (select department_id
                       from atguigudb.employees
                       group by department_id
                       having avg(salary) <= all (select avg(salary)
                                                  from atguigudb.employees
                                                  group by department_id));

-- 方法3 使用limit

-- 9. 查询平均工资最低的部门信息,和该部门的平均工资(相关子查询)
select *, (select avg(salary) from atguigudb.employees where departments.department_id = employees.department_id)
from atguigudb.departments
where department_id = (select department_id
                       from atguigudb.employees
                       group by department_id
                       having avg(salary) = (select min(avg_salary)
                                             from (select avg(salary) as avg_salary, department_id as dpt_id
                                                   from atguigudb.employees
                                                   group by department_id) as t));
-- 10. 查询平均工资最高的job 信息
select *
from atguigudb.jobs
where job_id = (select job_id
                from atguigudb.employees
                group by job_id
                having avg(salary) = (select max(avg_salary)
                                      from (select avg(salary) as avg_salary
                                            from atguigudb.employees
                                            group by job_id) as t1));


-- 11. 查询平均工资高于公司平均工资的部门
select department_id
from atguigudb.employees
where department_id is not null
group by department_id
having avg(salary) > (select avg(salary)
                      from atguigudb.employees);

-- 12. 查询公司中所有manager的详细信息
-- 方式1
select last_name, employee_id, manager_id
from atguigudb.employees
where employee_id in (select manager_id
                      from atguigudb.employees);
-- 方式2 自连接
select last_name, employee_id, manager_id
from atguigudb.employees
where employee_id in (select manager_id
                      from atguigudb.employees);
-- 方式3 使用exists

-- 13. 各个部门中 最高工资最低的那个部门的最低工资是多少
-- 方法1
select department_id, min(salary)
from atguigudb.employees
group by department_id
having max(salary) = (select min(max_salry)
                      from (select max(salary) as max_salry
                            from atguigudb.employees
                            group by department_id
                            having max(salary)) as t);


-- 方式2
select department_id, min(salary)
from atguigudb.employees
group by department_id
having max(salary) <= all (select max(salary)
                           from atguigudb.employees
                           group by department_id);


-- 方法3
select department_id, min(salary)
from atguigudb.employees
group by department_id
having department_id = (select department_id
                        from atguigudb.employees
                        group by department_id
                        order by max(salary) asc
                        limit 1);

-- 方式4
select *
from atguigudb.employees as e,
     (select department_id, max(salary)
      from atguigudb.employees
      group by department_id
      order by max(salary) asc
      limit 1) as t
where e.department_id = t.department_id;

-- 14.查询平均工资最高的部门的manager 的详细信息,last_name,department_id ,email , salary
select last_name, department_id, email, salary
from atguigudb.employees
where employee_id = (select distinct manager_id
                     from atguigudb.employees
                     where department_id = (select department_id
                                            from atguigudb.employees
                                            group by department_id
                                            having avg(salary) = (select avg(salary)
                                                                  from atguigudb.employees
                                                                  group by department_id
                                                                  order by avg(salary) desc
                                                                  limit 1))
                       and manager_id is not null);

-- 15. 查询部门的部门号,其中不包括job_id是'ST_CLERK'的部门号
select department_id
from atguigudb.departments
where department_id not in (select distinct department_id
                            from atguigudb.employees
                            where job_id = 'ST_CLERK');

-- 16. 查询所有没有管理者的的员工的last_name
select last_name
from atguigudb.employees
where manager_id is null;

-- 17.查询员工号,姓名,雇佣时间,工资,其中员工的管理者为'De Haan'
select employee_id, last_name, hire_date, salary
from atguigudb.employees
where manager_id = (select employee_id
                    from atguigudb.employees
                    where last_name = 'De Haan');

-- 18.查询各个部门中工资比本部门平均工资高的员工的员工号,姓名和工资(相关子查询)
select employee_id, last_name, salary
from atguigudb.employees as e
where salary >
      (select avg(salary) from atguigudb.employees group by department_id having department_id = e.department_id);

-- 19. 查询每个部门下的部门人数大于 5的部门名称(相关子查询)
select *
from atguigudb.departments
where department_id in (select department_id
                        from atguigudb.employees
                        group by department_id
                        having count(employee_id) > 5);

-- 方式2
select *
from atguigudb.departments as d
where 5 < (select count(*) from atguigudb.employees as e where e.department_id = d.department_id);

-- 20. 查询每个国家下的部门个数大于 2 的国家编号(相关子查询)
select distinct country_id
from atguigudb.locations as l
         join departments as d
              on l.location_id = d.location_id
         join atguigudb.employees as e
              on e.department_id = d.department_id
group by e.department_id
having count(e.department_id) > 2;


### ---- 子查询 -----

show databases;
use my_atguigudb;
show tables;
select *
from employees;

#  添加一个字段
alter table empl
    add employee_id int;
-- 指定添加的位置 first after
alter table empl
    add phone_number varchar(20) after salary;
alter table empl
    add last_name varchar(20) first;
desc empl;

#  修改表,修改字段的数据类型,和长度
alter table empl
    modify employee_id varchar(15) not null default 0;
desc empl;
#  重命名表字段
alter table empl
    change e_mail email varchar(30);
desc empl;
#  删除表字段
alter table empl
    add id varchar(25);
alter table empl
    drop column id;

# 重命名表
-- 方式1
rename table employees1 to employees_1;
desc employees_1;
-- 方式2
alter table employees_1 rename to employees1;
show tables;
#  删除表
drop table if exists employees1;
#  清空表
truncate table employees1;
delete
from employees1;

# DCL 中commit  和rollback
# commit:提交数据,一旦执行,则数据被永久保存在数据库中,意味着不可回滚
# rollback :回滚数据,一旦执行rollback ,则可实现数据的回滚,回滚到最近一次commit之后
# truncate table 和 delete from;
-- truncate table,一旦执行,数据全部清除,同时数据是不可以回滚的
-- delete from 清除数据,但是数据可以实现回滚

commit;
select *
from employees;
set autocommit = false;
delete
from employees;
select *
from employees;
rollback;
select *
from employees;

# 删除表,并从另一个表中复制数据
drop table employees;
create table employees as
select *
from atguigudb.employees;
select *
from employees;

-- 提交和回滚
commit;
select *
from employees;
set autocommit = 0;
delete
from employees;
select *
from employees;
rollback;
select *
from employees;


# 课后练习
-- 1. 创建数据库test01_office ,指明字符集为utf8,并在此数据库下执行一下操作
create database if not exists test01_office character set 'utf8';
show databases;
-- 创建表dept01
# 字段  类型
# id    int(7)
# name  varchar(25)
use test01_office;
show tables;
create table if not exists dept01
(
    id   tinyint,
    name varchar(25)
);
desc dept01;

-- 3.将表departments终端数据插入新表dept02中
create table if not exists dept02 as
select *
from atguigudb.departments;
select *
from dept02;

-- 4. 创建表emp01
# 字段        类型
# id         int(7)
# first_name varchar(25)
# last_name  varchar(25)
# dept_id    int(7)
create table if not exists emp01
(
    id         tinyint,
    first_name varchar(25),
    last_name  varchar(25),
    dept_id    tinyint
);
desc emp01;
-- 5. 将last_name的长度增加到50
alter table emp01
    modify last_name varchar(50);
desc emp01;
-- 6. 根据表employees创建emp02
create table if not exists emp02 as
select *
from atguigudb.employees
where 1 = 2;
desc emp02;
-- 7. 删除表emp01
drop table emp01;
show tables;
-- 8. 将表emp02重命名为emp01
rename table emp02 to emp01;
show tables;
-- 9. 在表dept02和emp01中添加新列test_column ,并检查所有的操作
alter table dept02
    add column test_column varchar(25);
desc dept02;
alter table emp01
    add column test_column varchar(25);
desc emp01;
-- 10. 删除表emp01中的列department_id
alter table emp01
    drop column department_id;
desc emp01;

-- 11. 创建数据库test02_market
create database if not exists test02_market;
show databases;
use test02_market;
-- 12. 创建数据表customers
# c_num,int
# c_name,varchar(50)
# c_concat, varchar(50)
# c_city, varchar(50)
# c_birth, date
create table if not exists customers
(
    c_num    int,
    c_name   varchar(50),
    c_concat varchar(50),
    c_city   varchar(50),
    c_birth  date
);
desc customers;
-- 13. 将c_contact字段移动到c_birth字段后面
alter table customers
    modify c_concat varchar(50) after c_birth;
-- 14. 将c_name字段数据类型改为varchar(70)
alter table customers
    modify c_name varchar(70);
desc customers;
-- 15. 将c_concat字段改名为c_phone
alter table customers rename column c_concat to c_phone;
desc customers;
-- 16. 增加c_gender字段到c_name后面,数据类型为char(1)
alter table customers
    add c_gender char(1) after c_name;
desc customers;
-- 17. 将表名改为customers_info
rename table customers to customers_info;
show tables;
-- 18. 删除字段_city
alter table customers
    drop column c_city;
desc customers;

## 数据的处理-增删改
use atguigudb;
show tables;
create table emp
(
    id        int,
    name      varchar(15),
    hire_date date,
    salary    decimal
);
show tables;
select *
from emp;
### 添加数据
-- 方式1,按照表字段顺序添加
insert into emp
values (1, 'Tom', '2021-11-11', 3400.12);
select *
from emp;
-- 方式2,没有赋值的字段值为null
insert into emp(id, name, hire_date, salary)
VALUES (2, 'Jerry', '1992-09-12', 9999.99);
select *
from emp;
-- 方式3,同时插入多条
insert into emp(id, name, hire_date, salary)
VALUES (3, '俊杰', '1992-09-12', 9999.99),
       (4, '德华', '1992-09-12', 9999.99);
select *
from emp;
-- 方式4,从其他表查询插入
insert into emp(id, name, hire_date, salary)
select department_id, last_name, hire_date, salary
from atguigudb.employees;
select *
from emp;

# 删除数据,某一行,或者多行
delete
from emp
where id in (50, 60, 80);
select *
from emp;
delete
from emp
where id is null;
select *
from emp
order by id;


# 更新数据/更新数据
update emp
set hire_date = curdate()
where id = 1;
select *
from emp
where id = 1;

-- 同时修改一行数据的多个字段
update emp
set id   =10,
    name ='王'
where id = 1;
select *
from emp
order by id;

## 计算列
create table test
(
    a int,
    b int,
    c int generated always as (a + b) virtual # c为计算列
);
select *
from test;
insert into test(a, b)
values (2, 2);
select *
from test;
update test
set b =2;
select *
from test;

drop table test;
select database();
show tables;
# DDL DML综合练习
-- 1.创建数据库library
show databases;
use my_atguigudb;
show tables;
create database if not exists library character set 'utf8';
show databases;
-- 2.创建表books,表结构如下
use library;
show tables;
create table if not exists books
(
    id       int,
    name     varchar(50),
    authors  varchar(100),
    price    float,
    pub_date year,
    note     varchar(100),
    num      int
);
desc books;
-- 3.插入数据
insert into books (id, name, authors, price, pub_date, note, num)
values (1, 'Tal of AAA', 'Dickes', 23, 1995, 'novel', 11),
       (2, 'EmmaT', 'Jane lura', 35, 1993, 'joke', 22),
       (3, 'Story of Jane', 'Jane Tim', 40, 2001, 'novel', 0),
       (4, 'Lovey day', 'Grorge Byron', 20, 2005, 'novel', 30),
       (5, 'Old land', 'Honere Blade', 30, 2010, 'law', 0),
       (6, 'The Battle', 'Upton Sara', 30, 1999, 'medicine', 40),
       (7, 'Rose Hood', 'Richard haggard', 28, 2008, 'cartoon', 28);

select *
from books;

-- 4.将小说类型(novel) 的书的价格都增加5
update books
set price =price + 5
where note = 'novel';
select *
from books;

-- 5.将名称为EmmaT的书的价格改为40,并将说明改为drama
update books
set price = 40
where name = 'EmmaT';
select *
from books
where name = 'EmmaT';

-- 6.删除库存为0的记录
delete
from books
where num = 0;
select *
from books;

-- 7.统计书名中包含字母a字母的书
select *
from books
where name like '%a%';
select count(1)
from books
where name like '%a%';
-- 8.统计书名中包含字母a的书的数量和库存总量
select count(1), sum(num) as '库存总量'
from books
where name like '%a%';
-- 9.找出'novel'类型的书,按照价格降序排序
select *
from books
where note = 'novel'
order by price desc;
-- 10.查询图书信息,按照库存量降序排序,如果库存量相同按照note升序排序
select *
from books
order by num desc, note asc;
-- 11.按照note分类统计书的数量
select note, count(1)
from books
group by note;
-- 12.按照note分类统计书的库存量,显示库存超过30本的
select note, sum(num)
from books
group by note
having sum(num) > 30;

-- 13.查询所有图书,每页显示5本,显示第二页
select *
from books
limit 5,5;

-- 14.按照note分类统计书的库存量,显示库存量最多的
select note, sum(num)
from books
group by note
having sum(num) >= all (select sum(num)
                        from books
                        group by note);

select note, sum(num)
from books
group by note
order by sum(num) desc
limit 0,1;

-- 15.查询书名达到10个字符的书,不包括里面的空格
select *
from books
where char_length(replace(name, ' ', '')) > 10;

-- 16.查询书名和类型,其中note值为novel显示小说,law显示法律,medicine显示医药,
-- cartoon显示卡通,joke显示笑话
select name,
       note,
       case
           when note = 'novel' then '小说'
           when note = 'law' then '法律'
           when note = 'medicine' then '医药'
           when note = 'cartoon' then '卡通'
           when note = 'joke' then '笑话'
           else '其他'
           end
from books;
-- 17.查询书名,库存,其中num值超过30本的,显示滞销,大于0,并低于10的显示畅销,为0的显示无库存
select name,
       num,
       case num
           when num > 10 then '滞销'
           when num > 0 and num < 10 then '畅销'
           when num = 0 then '无库存'
           else '其他'
           end as '状态'
from books;
-- 18.统计每一种note的库存量,并合计总量
select ifnull(note, '总库存'), sum(num)
from books
group by note
with rollup;
-- 19. 统计每一种note的数量,并合计总量
select ifnull(note, '总量'), count(1) as '数量'
from books
group by note
with rollup;

-- 20.统计库存量前三名的图书
select *
from books
order by num desc
limit 0,3;

-- 21,找出最早出版的一本书
select *
from books
order by year(pub_date)
limit 0,1;

-- 22.找出novel中价格最高的一本书
select *
from books
order by price desc
limit 0,1;

-- 23.找出书名中字数最多的一本书,不含空格
select *
from books
order by char_length(replace(name, ' ', '')) desc
limit 0,1;

## 数据处理之增删改
select database();
show tables;

### 练习
-- 1.创建数据库dbtest11
create database if not exists db_test_11 character set 'utf8';
-- 2.运行以下脚本创建表my_employees;
use db_test_11;
create table if not exists my_employees
(
    id         int(10),
    first_name varchar(10),
    last_name  varchar(10),
    user_id    varchar(10),
    salary     double(10, 2)
);
desc my_employees;

create table if not exists users
(
    id            int,
    user_id       varchar(10),
    department_id int
);
desc users;

-- 3.显示表my_employees的结构
desc my_employees;
-- 4.向my_employees表中插入下列数据
insert into my_employees(id, first_name, last_name, user_id, salary)
VALUES (1, 'patel', 'Ralph', 'Rpatel', 896),
       (2, 'Dancs', 'Betty', 'Bdancs', 860),
       (3, 'Biri', 'Ben', 'Bbiri', 1100),
       (4, 'Newman', 'Chad', 'Cnewman', 750),
       (5, 'Kopeburn', 'Audrey', 'Aropebur', 1550);

select *
from my_employees;

-- 5.向users表中插入数据
insert into users (id, user_id, department_id)
values (1, 'Rpatel', 10),
       (2, 'Bdancs', 10),
       (3, 'Bbiri', 20),
       (4, 'Cnewman', 30),
       (5, 'Aropebur', 40);
select *
from users;
-- 6.将3号员工的last_name修改为'drelxer'
update my_employees
set last_name ='drelxer'
where id = 3;
select *
from my_employees;

--  7. 将所有工资少于900的员工的工资修改为1000
update my_employees
set salary =1000
where salary < 900;
select *
from my_employees;

-- 8.将user_id为Bbiri的user表和my_employees表的记录全部删除
delete
from users
where user_id = 'Bbiri';
delete
from my_employees
where user_id = 'Bbiri';

-- 方式二
delete m,u
from my_employees m
         join users u
              on m.user_id = u.user_id
where m.user_id = 'Bbiri';

select *
from users;
select *
from my_employees;

-- 9.删除my_employees,users表中所有的数据
delete
from my_employees;
delete
from users;
select *
from users;
select *
from my_employees;
-- 10.检查所做的修正
select *
from users;
select *
from my_employees;
-- 11.清空表my_employees
truncate table my_employees;

### 练习2
-- 1.使用现有数据库
use db_test_11;
-- 2.创建表pet
create table pet
(
    name    varchar(20) comment '宠物名称',
    owner   varchar(20) comment '宠物主人',
    species varchar(30) comment '种类',
    sex     char(1) comment '性别',
    birth   Year comment '出生日期',
    death   YEAR comment '死亡日期'
);
desc pet;
show full columns from pet;
-- 3.添加记录
insert into pet (name, owner, species, sex, birth, death)
VALUES ('Fluffy', 'harold', 'Cat', 'f', '2003', '2010'),
       ('Claws', 'gwen', 'Cat', 'm', '2004', null),
       ('Buffy', null, 'Dog', 'f', '2009', null),
       ('Fang', 'benny', 'Dog', 'm', '2000', null),
       ('bowser', 'diane', 'Dog', 'm', '2003', '2009'),
       ('Chirpy', null, 'Bird', 'f', '2008', null);
select *
from pet;
-- 4.添加字段:主人的生日owner_birth DATE类型
alter table pet
    add owner_birth date;
desc pet;
-- 5.将名称为Claws的猫的主人改为kevin
update pet
set owner = 'kevin'
where species = 'Cat'
  and name = 'Claws';
select *
from pet;

-- 6.将没有死的狗的主人改为duck
update pet
set owner = 'duck'
where death is null
  and species = 'Dog';

select *
from pet;

-- 7.查询没有主人的宠物的名字
select *
from pet
where owner is null;

-- 8.查询已经死了的cat的姓名,主人,以及去世时间
select *
from pet
where species = 'Cat'
  and death is not null;

-- 9.查询已经死亡的狗
select *
from pet
where species = 'Dog'
  and death is not null;

-- 10.查询所有的宠物信息
select *
from pet;

### 练习3
-- 1.使用数据库db_test_11
select database();
use db_test_11;
-- 2.创建表employees,并添加记录
create table if not exists employees
(
    id     int,
    name   varchar(15),
    sex    char(2),
    tel    varchar(20),
    addr   varchar(25),
    salary double(10, 2)
);
desc employees;
insert into db_test_11.employees(id, name, sex, tel, addr, salary)
VALUES (10001, '张一一', '男', '1357777345', '山东青岛', 1001.58),
       (10002, '刘小红', '女', '13477879867', '河北保定', 1201.21),
       (10003, '李四', '男', '0751-1234567', '广东佛山', 1004.11),
       (10004, '刘小强', '男', '0755-5555555', '广东深圳', 1501.23),
       (10005, '王艳', '女', '020-1232133', '广东广州', 1405.16);
select *
from employees;
-- 3. 查询出薪资在1200-1300之间的员工向信息
select *
from employees
where salary between 1200 and 1300;
-- 4.查询出姓"刘"的员工的工号,姓名,家庭住址
select *
from employees
where `name` like '刘%';
-- 5.将李四的家庭地址改为广东韶关
update employees
set addr ='广东韶关'
where name = '李四';

-- 6.查询名字中带'小'的员工
select *
from employees
where name like '%小%';

# 数据类型概述
-- 1.创建数据库指定字符集
create database if not exists db_test_11 character set 'utf8';
-- 2.整形数据类型
use db_test_11;
create table if not exists test_int1
(
    f1 tinyint,
    f2 smallint,
    f3 mediumint,
    f4 int,
    f5 bigint
);
desc test_int1;

-- 定点数decimal ,解决浮点数精度问题.高精度小时,decimal(M,D),M精度,D标度
show tables;
alter table employees
    add create_time timestamp;
desc employees;
-- 获取时间戳
select unix_timestamp();
-- 外键约束
-- 先创建主表
show tables;
show databases;
use db_test_11;
show tables;
select *
from employees;
select *
from my_employees;

drop table my_employees;
show tables;
# 创建主表
create table if not exists my_departments
(
    department_id   int primary key auto_increment,
    department_name varchar(15)
);
# 再创建从表
create table if not exists my_employees
(
    employee_id   int primary key auto_increment,
    employee_name varchar(15),
    department_id int,
    # 表级约束
    constraint fk_empl_dept_id foreign key (department_id) references my_departments (department_id),
    foreign key (department_id) references my_departments (department_id) on update cascade on delete set null
);

desc my_employees;
desc my_departments;

-- 查询所有约束
select *
from information_schema.TABLE_CONSTRAINTS
where TABLE_NAME = 'my_employees';

-- 先在主表插入数据
insert into my_departments (department_id, department_name)
VALUES (10, 'IT');
select *
from my_departments;
-- 再在从表插入数据
insert into my_employees(employee_id, employee_name, department_id)
values (1001, '宋红康', 10);
select *
from my_employees;

-- 删除数据要先删除从表的数据,再删除主表数据

-- 外键同步更新/删除 ,建议使用同步更新,并且使用'on update cascade on delete restrict '
# 从表中设置
# foreign key (department_id) references  my_departments(department_id) on update cascade on delete set null
# 示例: 从表
drop table my_employees;
create table if not exists my_employees
(
    employee_id   int primary key auto_increment,
    employee_name varchar(15),
    department_id int,
    # 表级约束,外键同步更新/删除
#     foreign key (department_id) references my_departments (department_id) on update cascade on delete set null,
    foreign key (department_id) references my_departments (department_id) on update cascade on delete restrict
);
-- 删除外键约束
select *
from information_schema.TABLE_CONSTRAINTS
where TABLE_NAME = 'my_employees';
alter table my_employees
    drop foreign key fk_empl_dept_id;

-- 查看表的索引
show index from my_employees;
# alter table  my_employees drop index <索引名>

## 练习
# 已经存在数据库test04_emp，两张表emp2和dept2
CREATE DATABASE test04_emp;
use test04_emp;
CREATE TABLE emp2
(
    id       INT,
    emp_name VARCHAR(15)
);
CREATE TABLE dept2
(
    id        INT,
    dept_name VARCHAR(15)
);

# 1.向表emp2的id列中添加PRIMARY KEY约束
alter table emp2
    modify id int primary key;

alter table emp2
    add primary key (id);
desc emp2;
# 2. 向表dept2的id列中添加PRIMARY KEY约束
alter table dept2
    modify id int primary key;
alter table dept2
    add primary key (id);
desc dept2;
# 3. 向表emp2中添加列dept_id，并在其中定义FOREIGN KEY约束，与之相关联的列是dept2表中的id列。
alter table emp2
    add column dept_id int;
alter table emp2
    add constraint fk_emp2_dept_id foreign key (dept_id) references dept2 (id);
select *
from information_schema.TABLE_CONSTRAINTS
where TABLE_NAME = 'emp2';

# 练习2
# 承接《第11章_数据处理之增删改》的综合案例。
# 1、创建数据库test01_library
create database if not exists test01_library character set 'utf8';
# 2、创建表 books，表结构如下：
use test01_library;
create table if not exists books
(
    id      int,
    name    varchar(50),
    authors varchar(100),
    price   decimal(10, 2),
    pubdate year,
    note    varchar(100),
    num     int
);
desc books;
# 3、使用ALTER语句给books按如下要求增加相应的约束
alter table books
    modify id int not null primary key auto_increment unique;
desc books;
alter table books
    modify name varchar(50) not null;
alter table books
    modify authors varchar(100) not null;
alter table books
    modify price decimal(10, 2) not null;
alter table books
    modify pubdate varchar(100) not null;
alter table books
    modify num int not null;

# 练习3
#1. 创建数据库test04_company
create database if not exists test04_company character set 'utf8';
use;
#2. 按照下表给出的表结构在test04_company数据库中创建两个数据表offices和employees
create table if not exists offices
(
    officeCode int(10) primary key not null unique,
    city       varchar(50)         not null,
    address    varchar(50),
    country    varchar(50)         not null,
    postalCode varchar(50) unique
);
desc offices;
create table if not exists employees
(
    employeeNumber int(11) primary key not null unique auto_increment,
    last_name      varchar(50)         not null,
    first_name     varchar(50)         not null,
    mobile         varchar(25) unique,
    officeCode     int(10) unique,
    job_title      varchar(50)         not null,
    birth          datetime            not null,
    note           varchar(255),
    sex            varchar(5),
    constraint fk_employees_officeCode foreign key (officeCode) references offices (officeCode)
);

#3. 将表employees的mobile字段修改到officeCode字段后面 #
alter table employees
    modify mobile varchar(25) unique after officeCode;
desc employees;
# 4. 将表employees的birth字段改名为employee_birth #
alter table employees
    modify employee_birth datetime not null;
# 5. 修改sex字段，数据类型为CHAR(1)，非空约束 #
alter table employees
    modify sex char(1) not null;
# 6. 删除字段note #
alter table employees
    drop column note;
# 7. 增加字段名favorite_activity，数据类型为VARCHAR(100) #
alter table employees
    add favorite_activity varchar(100);
# 8. 将表employees名称修改为employees_info
# alter table employees rename employees_info;
# alter table employees_info rename employees;
# desc employees_info;

## 视图
show tables;
create view view_emp
as
select *
from employees;

show databases;
use my_atguigudb;
show tables;
select *
from employees;
create view v_employees as
select *
from employees;
select *
from v_employees;

desc employees;
update employees
set phone_number = '5386112'
where employee_id = 100;

select *
from employees
where employee_id = 100;
select *
from v_employees
where employee_id = 100;

create view v1_employees(id, name, year_salary) as
select department_id, last_name, salary * 12
from employees;
select *
from v1_employees;

# 针对多表
show tables;
create table departments as
select *
from atguigudb.departments;
create view v_empl_dept as
select department_name, last_name
from employees as e
         join departments as d
              on e.department_id = d.department_id;
select *
from v_empl_dept;
# 利用视图对数据进行格式化
create view v1_empl_dept(name, department_id, department_name) as
select concat_ws(',', e.first_name, e.last_name) as name, d.department_id, department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id
where e.department_id > 80;

select *
from v1_empl_dept;

# 基于视图创建视图
create view v2_empt_dept as
select *
from v1_empl_dept;
select *
from v2_empt_dept;

# 查看视图结构
desc v2_empt_dept;

# 查看视图属性信息
show table status like 'v2_empt_dept';

# 查看视图定义信息
show create view v2_empt_dept;

# 修改和删除视图中的数据,不建议更新和删除视图中的数据
# 可以更新
update v2_empt_dept
set department_id =100
where department_id = 90;
select *
from v2_empt_dept;
# 更新失败
update v2_empt_dept
set name ='Hello,word'
where name = 'Nancy,Greenberg';
select *
from v2_empt_dept;

# 删除失败
delete
from v2_empt_dept
where name = 'Nancy,Greenberg';
delete
from v2_empt_dept
where department_name = 'Executive';
delete
from v2_empt_dept
where department_id = 100;


# 存储过程与函数
# 创建存储过程
delimiter $
create procedure select_all_data()
begin
    select * from employees;
end $
delimiter ;

select database();
# 调用存储过程
call select_all_data();


# 查询employees最高薪资
delimiter $
create procedure select_emp_avg_salary()
begin
    select max(salary) from employees;
end $
delimiter ;

call select_emp_avg_salary();

# 带out参数
delimiter $
create procedure select_min_salary(out ms double)
begin
    select min(salary) into ms from employees;
end $
delimiter ;
call select_min_salary(@ms);
select @ms;

# 带in参数,
# 查询某个员工的的工资
delimiter $
create procedure select_salary_by_name(in name varchar(20))
begin
    select salary from employees where last_name = name;
end $
delimiter ;
call select_salary_by_name('King');

# 带in和out
# 查询employees中某个员工的工资,用out参数输出工资
delimiter $
create procedure select_salary_by_id(in id int, out sal double(8, 2))
begin
    select salary into sal from employees where employee_id = id;
end $
delimiter ;
desc employees;
call select_salary_by_id(103, @sal);
select @sal as sal;

# into
# 练习
delimiter $
create procedure select_manager_name_by_employee_name(inout employee_name varchar(25))
begin
    select last_name
    into employee_name
    from employees
    where employee_id = (select manager_id
                         from employees
                         where last_name = employee_name);
end $
delimiter ;
set @employee_name = 'Kochhar';
call select_manager_name_by_employee_name(@employee_name);
select @employee_name;

# 存储函数
# 练习,创建存储函数,参数为空,查询Abel的email
delimiter $
create function select_email()
    returns varchar(25)
    deterministic
    contains sql
    reads sql data
begin
    return (select email from employees where last_name = 'Abel');
end $
delimiter ;
select select_email();

# 练习,通过employee_id查询email
delimiter $
create function select_email_by_id(id int)
    returns varchar(25)
    reads sql data
begin
    return (select email from employees where id = employee_id);
end $
delimiter ;

select select_email_by_id(103) as email;

# 系统变量和会话变量

show global variables;
show session variables;

select @@global.admin_port;

select @@session.binlog_row_image;

# 自定义变量
# 方式一
set @m1 = 10;
set @m2 := 20;
set @m3 := @m1 + @m2;
select @m3;

# 方式2
set @sum_salary = 0;
select @sum_salary := sum(salary)
from employees;
select @sum_salary;

select avg(salary)
into @avg_salary
from employees;
select @avg_salary;

# 局部变量
delimiter $
create procedure select_emp_info()
begin
    declare a int default 0;
    declare b int;
    declare emp_name varchar(25);
    select last_name into emp_name from employees where employee_id = 101;
    set a = 2;
    set b = 3;
    set b = a + b;
    select a, b, emp_name;
end $
delimiter ;
call select_emp_info();

# 流程控制
# 分支结构之if
delimiter $
create procedure select_salary_info()
begin
    declare emp_name varchar(25);
    if emp_name is null
    then
        select 'emp_name is null';
    end if;
end $
delimiter ;
call select_salary_info();

# 练习1
delimiter $
create procedure test_if01()
begin
    declare age int default 20;
    if age < 6
    then
        select '婴儿';
    elseif age >= 6 and age < 12
    then
        select '儿童';
    elseif age > 12 and age < 18
    then
        select '少年';
    elseif age > 18 and age < 60
    then
        select '中年';
    elseif age > 60
    then
        select '老年';
    else
        select '其他';
    end if;

end $
delimiter ;

call test_if01();

# 游标使用
# 申明,打开,使用,关闭

#创建存储过程“get_count_by_limit_total_salary()”，声明IN参数 limit_total_salary，DOUBLE类型；声明
# OUT参数total_count，INT类型。函数的功能可以实现累加薪资最高的几个员工的薪资值，直到薪资总和
# 达到limit_total_salary参数的值，返回累加的人数给total_count。

delimiter $
create procedure get_count_by_limit_total_salary(in limit_total_salary double, out total_count int)
begin
    #  申明局部变量
    declare sum_salary double default 0; # 记录累加的总工资
    declare cursor_salary double default 0;# 每次游标的工资
    declare emp_count int default 0;
#  申明游标
    declare emp_salary_cursor cursor for select salary from employees order by salary desc;
#  打开游标
    open emp_salary_cursor;
#  获取游标数据
    repeat
        fetch emp_salary_cursor into cursor_salary;
        set sum_salary = sum_salary + cursor_salary;
        set emp_count = emp_count + 1;
    until sum_salary >= limit_total_salary end repeat;

    set total_count = emp_count;
#  关闭游标
    close emp_salary_cursor;
end $
delimiter ;

call get_count_by_limit_total_salary(100000, @total_count);
select @total_count;

# 创建触发器
# 定义触发器“salary_check_trigger”，基于员工表“employees”的INSERT事件，在INSERT之前检查
# 将要添加的新员工薪资是否大于他领导的薪资，如果大于领导薪资，则报sqlstate_value为'HY000'的错
# 误，从而使得添加失败。
show tables;

delimiter $
create trigger salary_check_trigger
    before insert
    on employees
    for each row
begin
    declare manager_salary double;
    select salary into manager_salary from employees where employee_id = NEW.manager_id;
    if NEW.salary > manager_salary then
        signal sqlstate 'HY000' set MESSAGE_TEXT = '薪资高于领导薪资错误';
    end if;
end $
delimiter ;

show triggers ;
desc employees;

insert into employees(employee_id, last_name, salary,
                      manager_id,email,hire_date,job_id)
VALUES (207, 'Jerry', 1000, 147,'haha@163.com','2017-01-01','IT_PROG');
insert into employees(employee_id, last_name, salary,
                      manager_id,email,hire_date,job_id)
VALUES (207, 'Tom', 20000, 147,'haha@163.com',curdate(),'IT_PROG');
select *
from employees;

use spider;
show tables ;
create table books(id int primary key auto_increment,src varchar(256),name varchar(256));

select * from books;
delete from books;

create database  if not exists python_test character set 'utf8';

```
