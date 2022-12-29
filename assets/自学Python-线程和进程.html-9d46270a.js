import{_ as n,V as e,W as r,a1 as t}from"./framework-5e2051d8.js";const a={},o=t(`<h3 id="multiprocessing" tabindex="-1"><a class="header-anchor" href="#multiprocessing" aria-hidden="true">#</a> multiprocessing</h3><p>windows 创建多线程使用 <code>multiprocessing</code> linux unix 使用<code>fork()</code></p><ul><li><p>创建子线程的时候,只需要传入一个函数,和一个参数,创建一个<code>Process</code>实例,用<code>start()</code>方法启动,这样创建进程比<code>fork()</code>简单</p><pre><code>  from multiprocessing import Process
  import os
  # 子进程要执行的代码
  def run_proc(name):
      print(os.getpid())
      print(name)

  print(__name__)
  if __name__ == &#39;__main__&#39;:
      print(&#39;prent process %s&#39;%os.getpid() )
      # 创建一个子线程
      p = Process(target = run_proc,args = (&#39;test&#39;,))
      print(&#39; child process will start &#39;)
      # 开始子线程
      p.start()
      # 放如线程队列
      p.join()
      print(&#39; child process end &#39;)
</code></pre></li></ul><h3 id="pool" tabindex="-1"><a class="header-anchor" href="#pool" aria-hidden="true">#</a> Pool</h3><p>如果要开启大量子线程,可以用线程池批量化创建子线程</p><pre><code>	from multiprocessing import Pool
	import os,time,random

	def long_time_task(name):
	    print(&#39; 开启新的任务...&#39;+name)
	    start = time.time()
	    time.sleep(random.random() * 3)
	    end = time.time()
	    s = end - start
	    print(s)
	    print(name)

	if __name__==&#39;__main__&#39;:
	    p = Pool(4)
	    for i in range(5):
	        print(&#39;------------&gt;&gt;&gt;&gt; &#39;)
	        p.apply_async(long_time_task, args=(i,))

	    print(&#39; wait for process done...&#39;)
	    p.close()
	    p.join()
	    print(&#39;all progress done ..&#39;)
</code></pre><h3 id="子进程" tabindex="-1"><a class="header-anchor" href="#子进程" aria-hidden="true">#</a> 子进程</h3><ul><li><p>启动一个子进程</p><pre><code>  import subprocess

  print(&#39;$ nslookup www.python.org&#39;)
  r = subprocess.call([&#39;nslookup&#39;,&#39;www.python.org&#39;])
  print(&#39;exit code &#39;, r)
</code></pre></li></ul><h3 id="进程间通信" tabindex="-1"><a class="header-anchor" href="#进程间通信" aria-hidden="true">#</a> 进程间通信</h3><ul><li><p>进程间传递数据</p><pre><code>  from multiprocessing import Process,Queue
  import os,time,random

  # 写数据进程间执行代码
  def write_data(q):
      print(&#39;  pid  :%s&#39; %os.getpid())
      for value in [&#39;q&#39;,&#39;w&#39;,&#39;e&#39;,&#39;r&#39;]:
          print(value)
          q.put(value)
          time.sleep(random.random())

  # 读数据进程间执行代码
  def read_data(q):
      print(&#39; read pid : %s&#39; %os.getpid())
      while True:
          value =q.get(True)
          print(&#39; 读取的数据 : &#39;+ value)

  if __name__ == &#39;__main__&#39;:
      # 父进程创建Quenu,并传递给子进程
      q = Queue()
      pw = Process(target = write_data,args = (q,))
      pr = Process(target = read_data,args =(q,))
      pw.start()
      pr.start()
      pw.join()
      # pr 是死循环 无法等待其结束,只能强行终止
      pr.terminate()
</code></pre></li></ul><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><ul><li><p>启动一个线程就是把一个函数传入并创建<code>Thread</code>实例,然后调用<code>start()</code>开始执行</p><pre><code>  # 创建一个线程,并执行
  import time,threading

  # 新线程的代码
  def loop():
      print(&#39;线程%s is running ....&#39;%threading.current_thread().name)
      n =0
      while n&lt;5:
          n=n+1
          print(&#39;thread %s &gt;&gt;&gt; %s&#39;%(threading.current_thread().name,n))
          time.sleep(1)
      print(&#39;线程%s is running ....&#39;%threading.current_thread().name)

  t =threading.Thread(target= loop,name= &#39;LoopThread&#39;)
  t.start()
  t.join()
</code></pre></li></ul><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><ul><li>任何一个线程启动一个子线程,我们把该线程称为主线程</li><li>当多个线程共享一个变量并操作,导致内容错乱</li><li>使用lock.acquire(),当多个线程同时执行lock.acquire(),只有一个线程能成功获取锁,然后继续执行代码,其他线程就继续等待直到获得锁为止,获得锁的线程用完后一定要释放锁,否则会出现其他线程一直等待,成为死线程,所有使用try ... finally 确保锁一定会被释放</li></ul><h3 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h3><ul><li><p>ThreadLocal 变量虽然是全局变量，但是每个线程都能读写自己线程的独立副本，互不干扰。ThreadLocal解决了参数在一个线程中各个参数之间互相传递的问题</p><pre><code>  import threading
  # 获取全局的ThreadLocal对象
  local_school = threading.local()

  def process_student():
      # 获取线程相关的student
      std = local_school.student
      print(&#39;hello ,%s(in %s)&#39;%(std,threading.current_thread().name))

  def process_thread(name):
      # 绑定ThreadLocal的student
      local_school.student= name
      process_student()

  # 开启两个线程
  t1 =threading.Thread(target= process_thread,args = (&#39;anakin&#39;,),name=&#39;Thread -a&#39;)
  t2 =threading.Thread(target= process_thread,args = (&#39;hahha&#39;,),name =&#39;Thread -b &#39;)
  t1.start()
  t2.start()
  t1.join()
  t2.join()
</code></pre></li></ul>`,16),i=[o];function d(s,p){return e(),r("div",null,i)}const l=n(a,[["render",d],["__file","自学Python-线程和进程.html.vue"]]);export{l as default};
