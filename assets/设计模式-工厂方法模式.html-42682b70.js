const e=JSON.parse(`{"key":"v-5717f9dc","path":"/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html","title":"工厂方法模式.md","lang":"zh-CN","frontmatter":{"title":"工厂方法模式.md","date":"2017-02-17T11:25:59.000Z","category":["Java"],"tags":["设计模式"],"description":"工厂方法模式 和简单工厂模式不同是,简单工厂模式,实例都由一个工厂类创建,工厂类的代码量会比较多,而且增加新的对象需要修改工厂类的代码,增加if else 的判断. 工厂模式,创建产品的抽象类和实现类,以及工厂的抽象类和实现类. 以打印log为例,log的存储方式可以是db也可以是file中,需要创建Logger的抽象类,具体是FileLogger实现类和DbLogger的实现类,工厂的抽象类LoggerFactory,和具体的实现类DbLoggerFactory,FileLoggerFactory 在抽象Logger类中定义公共的抽象方法writeLog() 在具体实现类DbLogger和FileLogger中实现各自的具体的writeLog方法 在抽象的工厂类中定义抽象的创建对象的方法creatLogger() 在具体的实类DbLoggerFactory,FileLoggerFactory中实现方法,创建DbLogger和FileLogger的实例,并返回其父类Logger 客户端的使用 : 根据需要创建工厂的实例,调用实例中创建对象的方法creatLogger返回具体log存放的实例对象,在调用具体打印log的方法writeLog()","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zar_blog/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Anakin's blog"}],["meta",{"property":"og:title","content":"工厂方法模式.md"}],["meta",{"property":"og:description","content":"工厂方法模式 和简单工厂模式不同是,简单工厂模式,实例都由一个工厂类创建,工厂类的代码量会比较多,而且增加新的对象需要修改工厂类的代码,增加if else 的判断. 工厂模式,创建产品的抽象类和实现类,以及工厂的抽象类和实现类. 以打印log为例,log的存储方式可以是db也可以是file中,需要创建Logger的抽象类,具体是FileLogger实现类和DbLogger的实现类,工厂的抽象类LoggerFactory,和具体的实现类DbLoggerFactory,FileLoggerFactory 在抽象Logger类中定义公共的抽象方法writeLog() 在具体实现类DbLogger和FileLogger中实现各自的具体的writeLog方法 在抽象的工厂类中定义抽象的创建对象的方法creatLogger() 在具体的实类DbLoggerFactory,FileLoggerFactory中实现方法,创建DbLogger和FileLogger的实例,并返回其父类Logger 客户端的使用 : 根据需要创建工厂的实例,调用实例中创建对象的方法creatLogger返回具体log存放的实例对象,在调用具体打印log的方法writeLog()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T13:57:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2017-02-17T11:25:59.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T13:57:20.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/zar_blog/enposts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html"}]]},"headers":[{"level":2,"title":"工厂方法模式","slug":"工厂方法模式","link":"#工厂方法模式","children":[]}],"git":{"createdTime":1672233821000,"updatedTime":1672322240000,"contributors":[{"name":"张安然","email":"anran0919@163.com","commits":2}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"posts/java/设计模式-工厂方法模式.md","localizedDate":"2017年2月17日","excerpt":"<h2> 工厂方法模式</h2>\\n<p>和简单工厂模式不同是,简单工厂模式,实例都由一个工厂类创建,工厂类的代码量会比较多,而且增加新的对象需要修改工厂类的代码,增加if else 的判断.</p>\\n<p>工厂模式,创建产品的抽象类和实现类,以及工厂的抽象类和实现类.</p>\\n<p>以打印log为例,log的存储方式可以是db也可以是file中,需要创建Logger的抽象类,具体是FileLogger实现类和DbLogger的实现类,工厂的抽象类LoggerFactory,和具体的实现类DbLoggerFactory,FileLoggerFactory</p>\\n<ol>\\n<li>在抽象Logger类中定义公共的抽象方法writeLog()</li>\\n<li>在具体实现类DbLogger和FileLogger中实现各自的具体的writeLog方法</li>\\n<li>在抽象的工厂类中定义抽象的创建对象的方法creatLogger()</li>\\n<li>在具体的实类DbLoggerFactory,FileLoggerFactory中实现方法,创建DbLogger和FileLogger的实例,并返回其父类Logger</li>\\n<li>客户端的使用 : 根据需要创建工厂的实例,调用实例中创建对象的方法creatLogger返回具体log存放的实例对象,在调用具体打印log的方法writeLog()</li>\\n</ol>","autoDesc":true}`);export{e as data};
