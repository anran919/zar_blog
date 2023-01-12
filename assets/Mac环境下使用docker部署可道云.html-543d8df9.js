import{_ as a,V as e,W as s,a1 as n}from"./framework-5e2051d8.js";const d={},r=n(`<h1 id="mac环境下使用docker部署可道云" tabindex="-1"><a class="header-anchor" href="#mac环境下使用docker部署可道云" aria-hidden="true">#</a> Mac环境下使用docker部署可道云</h1><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull kodcloud/kodbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在宿主机创建目录" tabindex="-1"><a class="header-anchor" href="#在宿主机创建目录" aria-hidden="true">#</a> 在宿主机创建目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/Documents
<span class="token function">mkdir</span> kod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> kodcloud <span class="token parameter variable">-p</span> <span class="token number">9527</span>:80 <span class="token parameter variable">-v</span> ~/Documents/kod:/var/www/html <span class="token parameter variable">--restart</span><span class="token operator">=</span>always kodcloud/kodbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="访问服务" tabindex="-1"><a class="header-anchor" href="#访问服务" aria-hidden="true">#</a> 访问服务</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//192.168.10.109:9527/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置可道云" tabindex="-1"><a class="header-anchor" href="#配置可道云" aria-hidden="true">#</a> 配置可道云</h3><ul><li>数据库配置:选择SQLite</li><li>设置用户名和密码: admin ,123456</li></ul><h3 id="客户端下载" tabindex="-1"><a class="header-anchor" href="#客户端下载" aria-hidden="true">#</a> 客户端下载</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//kodcloud.com/download/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),i=[r];function l(c,t){return e(),s("div",null,i)}const h=a(d,[["render",l],["__file","Mac环境下使用docker部署可道云.html.vue"]]);export{h as default};
