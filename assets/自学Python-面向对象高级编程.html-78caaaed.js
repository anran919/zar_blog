const t=JSON.parse(`{"key":"v-1202e086","path":"/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B.html","title":"自学Python-面向对象高级编程","lang":"zh-CN","frontmatter":{"title":"自学Python-面向对象高级编程","date":"2017-01-12T14:30:26.000Z","category":["Python"],"tag":["Python"],"description":"使用__slots__ 正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性 绑定属性 class Student(object): def __init__(self, name): super(Student, self).__init__() self.name = name s = Student('anakin') s.age = 10 print(s.age) # 给对象绑定属性 print(s)","head":[["meta",{"property":"og:url","content":"https://github.com/zar_blog/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Anakin's blog"}],["meta",{"property":"og:title","content":"自学Python-面向对象高级编程"}],["meta",{"property":"og:description","content":"使用__slots__ 正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性 绑定属性 class Student(object): def __init__(self, name): super(Student, self).__init__() self.name = name s = Student('anakin') s.age = 10 print(s.age) # 给对象绑定属性 print(s)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T13:57:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2017-01-12T14:30:26.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T13:57:20.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/zar_blog/enposts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B.html"}]]},"headers":[{"level":2,"title":"使用__slots__","slug":"使用-slots","link":"#使用-slots","children":[{"level":3,"title":"使用@property","slug":"使用-property","link":"#使用-property","children":[]},{"level":3,"title":"多重继承","slug":"多重继承","link":"#多重继承","children":[]},{"level":3,"title":"定制类","slug":"定制类","link":"#定制类","children":[]},{"level":3,"title":"__iter__","slug":"iter","link":"#iter","children":[]},{"level":3,"title":"__getitem__","slug":"getitem","link":"#getitem","children":[]},{"level":3,"title":"__getattr__ ###","slug":"getattr","link":"#getattr","children":[]},{"level":3,"title":"__call__","slug":"call","link":"#call","children":[]}]}],"git":{"createdTime":1672233821000,"updatedTime":1672322240000,"contributors":[{"name":"张安然","email":"anran0919@163.com","commits":2}]},"readingTime":{"minutes":2.75,"words":824},"filePathRelative":"posts/python/自学Python-面向对象高级编程.md","localizedDate":"2017年1月12日","excerpt":"<h2> 使用__slots__</h2>\\n<ul>\\n<li>\\n<p>正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性</p>\\n</li>\\n<li>\\n<p>绑定属性</p>\\n<pre><code>  class Student(object):\\n      def __init__(self, name):\\n          super(Student, self).__init__()\\n          self.name = name\\n\\n  s = Student('anakin')\\n  s.age = 10\\n  print(s.age)  # 给对象绑定属性\\n  print(s)\\n</code></pre>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
