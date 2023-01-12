const t=JSON.parse(`{"key":"v-caabd36c","path":"/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F.html","title":"模版模式.md","lang":"zh-CN","frontmatter":{"title":"模版模式.md","date":"2017-02-17T11:25:59.000Z","category":["Java"],"tags":["设计模式"],"description":"##模版模式 定义 : 定一个操作中的算法框架,而将一些步骤延迟到子类中,使子类不用改变算法的结构重新定义算法中的步骤. 使用场景 多个子类共有方法并且逻辑基本相同 重要,复杂的核心算法,可以把核心算法设计成模版方法,周边的具体细节由子类去实现 重构时,将相同的代码抽取到父类中,然后通过子函数约束其行为 使用示例 以电脑开机为例,基本过程相同,不同的电脑具体细节不同 ** 开机的父类定义模版方法,调用开机的过程 **","head":[["meta",{"property":"og:url","content":"https://github.com/zar_blog/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Anakin's blog"}],["meta",{"property":"og:title","content":"模版模式.md"}],["meta",{"property":"og:description","content":"##模版模式 定义 : 定一个操作中的算法框架,而将一些步骤延迟到子类中,使子类不用改变算法的结构重新定义算法中的步骤. 使用场景 多个子类共有方法并且逻辑基本相同 重要,复杂的核心算法,可以把核心算法设计成模版方法,周边的具体细节由子类去实现 重构时,将相同的代码抽取到父类中,然后通过子函数约束其行为 使用示例 以电脑开机为例,基本过程相同,不同的电脑具体细节不同 ** 开机的父类定义模版方法,调用开机的过程 **"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T13:57:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2017-02-17T11:25:59.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T13:57:20.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/zar_blog/enposts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F.html"}]]},"headers":[{"level":3,"title":"定义 :","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}],"git":{"createdTime":1672233821000,"updatedTime":1672322240000,"contributors":[{"name":"张安然","email":"anran0919@163.com","commits":2}]},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"posts/java/设计模式-模版模式.md","localizedDate":"2017年2月17日","excerpt":"<p>##模版模式</p>\\n<h3> 定义 :</h3>\\n<p>定一个操作中的算法框架,而将一些步骤延迟到子类中,使子类不用改变算法的结构重新定义算法中的步骤.</p>\\n<h3> 使用场景</h3>\\n<ol>\\n<li>多个子类共有方法并且逻辑基本相同</li>\\n<li>重要,复杂的核心算法,可以把核心算法设计成模版方法,周边的具体细节由子类去实现</li>\\n<li>重构时,将相同的代码抽取到父类中,然后通过子函数约束其行为</li>\\n</ol>\\n<h3> 使用示例</h3>\\n<ol>\\n<li>以电脑开机为例,基本过程相同,不同的电脑具体细节不同</li>\\n</ol>\\n<p>** 开机的父类定义模版方法,调用开机的过程 **</p>","autoDesc":true}`);export{t as data};
