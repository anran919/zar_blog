---
title: 自学Python-线程和进程
date: 2017-01-13 15:05:52
tags: Python
---
### multiprocessing ###
windows 创建多线程使用 `multiprocessing`
linux unix 使用`fork()`

- 创建子线程的时候,只需要传入一个函数,和一个参数,创建一个`Process`实例,用`start()`方法启动,这样创建进程比`fork()`简单


		from multiprocessing import Process
		import os
		# 子进程要执行的代码
		def run_proc(name):
		    print(os.getpid())
		    print(name)

		print(__name__)
		if __name__ == '__main__':
		    print('prent process %s'%os.getpid() )
		    # 创建一个子线程
		    p = Process(target = run_proc,args = ('test',))
		    print(' child process will start ')
		    # 开始子线程
		    p.start()
		    # 放如线程队列
		    p.join()
		    print(' child process end ')


### Pool ###

如果要开启大量子线程,可以用线程池批量化创建子线程


		from multiprocessing import Pool
		import os,time,random

		def long_time_task(name):
		    print(' 开启新的任务...'+name)
		    start = time.time()
		    time.sleep(random.random() * 3)
		    end = time.time()
		    s = end - start
		    print(s)
		    print(name)

		if __name__=='__main__':
		    p = Pool(4)
		    for i in range(5):
		        print('------------>>>> ')
		        p.apply_async(long_time_task, args=(i,))

		    print(' wait for process done...')
		    p.close()
		    p.join()
		    print('all progress done ..')

### 子进程 ###

- 启动一个子进程

		import subprocess

		print('$ nslookup www.python.org')
		r = subprocess.call(['nslookup','www.python.org'])
		print('exit code ', r)


### 进程间通信  ###

- 进程间传递数据

		from multiprocessing import Process,Queue
		import os,time,random

		# 写数据进程间执行代码
		def write_data(q):
		    print('  pid  :%s' %os.getpid())
		    for value in ['q','w','e','r']:
		        print(value)
		        q.put(value)
		        time.sleep(random.random())

		# 读数据进程间执行代码
		def read_data(q):
		    print(' read pid : %s' %os.getpid())
		    while True:
		        value =q.get(True)
		        print(' 读取的数据 : '+ value)

		if __name__ == '__main__':
		    # 父进程创建Quenu,并传递给子进程
		    q = Queue()
		    pw = Process(target = write_data,args = (q,))
		    pr = Process(target = read_data,args =(q,))
		    pw.start()
		    pr.start()
		    pw.join()
		    # pr 是死循环 无法等待其结束,只能强行终止
		    pr.terminate()


## 多线程 ##


- 启动一个线程就是把一个函数传入并创建`Thread`实例,然后调用`start()`开始执行


		# 创建一个线程,并执行
		import time,threading

		# 新线程的代码
		def loop():
		    print('线程%s is running ....'%threading.current_thread().name)
		    n =0
		    while n<5:
		        n=n+1
		        print('thread %s >>> %s'%(threading.current_thread().name,n))
		        time.sleep(1)
		    print('线程%s is running ....'%threading.current_thread().name)

		t =threading.Thread(target= loop,name= 'LoopThread')
		t.start()
		t.join()

### Lock ###

- 任何一个线程启动一个子线程,我们把该线程称为主线程
- 当多个线程共享一个变量并操作,导致内容错乱
- 使用lock.acquire(),当多个线程同时执行lock.acquire(),只有一个线程能成功获取锁,然后继续执行代码,其他线程就继续等待直到获得锁为止,获得锁的线程用完后一定要释放锁,否则会出现其他线程一直等待,成为死线程,所有使用try ... finally 确保锁一定会被释放


### ThreadLocal ###
- ThreadLocal 变量虽然是全局变量，但是每个线程都能读写自己线程的独立副本，互不干扰。ThreadLocal解决了参数在一个线程中各个参数之间互相传递的问题


		import threading
		# 获取全局的ThreadLocal对象
		local_school = threading.local()

		def process_student():
		    # 获取线程相关的student
		    std = local_school.student
		    print('hello ,%s(in %s)'%(std,threading.current_thread().name))

		def process_thread(name):
		    # 绑定ThreadLocal的student
		    local_school.student= name
		    process_student()

		# 开启两个线程
		t1 =threading.Thread(target= process_thread,args = ('anakin',),name='Thread -a')
		t2 =threading.Thread(target= process_thread,args = ('hahha',),name ='Thread -b ')
		t1.start()
		t2.start()
		t1.join()
		t2.join()
