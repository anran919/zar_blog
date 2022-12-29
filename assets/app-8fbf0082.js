import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$5,k as isLinkHttp,l as removeLeadingSlash,m as inject,u as unref,w as watch,n as getCurrentInstance,p as nextTick,q as getCurrentScope,s as onScopeDispose,t as shallowRef,v as watchEffect,x as camelize,y as capitalize,z as isFunction$1,T as Transition,A as useRouter,B as onBeforeUnmount,C as useRoute,D as resolveComponent,E as toRef,R as RouterLink,F as isLinkMailto,G as isLinkTel,H as isLinkExternal,I as removeEndingSlash,J as ensureEndingSlash,K as isPlainObject,L as provide,M as TransitionGroup,N as useLink,O as createSSRApp,P as RouterView,Q as createRouter,S as START_LOCATION_NORMALIZED,U as createWebHistory}from"./framework-5e2051d8.js";const scriptRel="modulepreload",assetsURL=function(b){return"/zar_blog/"+b},seen={},__vitePreload=function(T,j,ie){if(!j||j.length===0)return T();const le=document.getElementsByTagName("link");return Promise.all(j.map(de=>{if(de=assetsURL(de),de in seen)return;seen[de]=!0;const ce=de.endsWith(".css"),ve=ce?'[rel="stylesheet"]':"";if(!!ie)for(let pe=le.length-1;pe>=0;pe--){const be=le[pe];if(be.href===de&&(!ce||be.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${de}"]${ve}`))return;const me=document.createElement("link");if(me.rel=ce?"stylesheet":scriptRel,ce||(me.as="script",me.crossOrigin=""),me.href=de,document.head.appendChild(me),ce)return new Promise((pe,be)=>{me.addEventListener("load",pe),me.addEventListener("error",()=>be(new Error(`Unable to preload CSS for ${de}`)))})})).then(()=>T())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-0d5236a9.js"),[]).then(({data:b})=>b),"v-184f4da6":()=>__vitePreload(()=>import("./intro.html-2e78da83.js"),[]).then(({data:b})=>b),"v-2e3eac9e":()=>__vitePreload(()=>import("./slides.html-4c48106a.js"),[]).then(({data:b})=>b),"v-1473bf53":()=>__vitePreload(()=>import("./index.html-7639721f.js"),[]).then(({data:b})=>b),"v-4e65ec78":()=>__vitePreload(()=>import("./disable.html-24fad4ed.js"),[]).then(({data:b})=>b),"v-c151bf32":()=>__vitePreload(()=>import("./encrypt.html-6b63227a.js"),[]).then(({data:b})=>b),"v-438ffe52":()=>__vitePreload(()=>import("./markdown.html-196b4eac.js"),[]).then(({data:b})=>b),"v-6e19edb7":()=>__vitePreload(()=>import("./page.html-026f2765.js"),[]).then(({data:b})=>b),"v-2d0a870d":()=>__vitePreload(()=>import("./index.html-84c91860.js"),[]).then(({data:b})=>b),"v-5aa3d8ba":()=>__vitePreload(()=>import("./intro.html-22249fec.js"),[]).then(({data:b})=>b),"v-367b840a":()=>__vitePreload(()=>import("./slides.html-6cf90dc4.js"),[]).then(({data:b})=>b),"v-4ddb96f4":()=>__vitePreload(()=>import("./怎样选择基金.html-2db5a5c7.js"),[]).then(({data:b})=>b),"v-395cd082":()=>__vitePreload(()=>import("./index.html-df62c601.js"),[]).then(({data:b})=>b),"v-70eda030":()=>__vitePreload(()=>import("./disable.html-d687ae76.js"),[]).then(({data:b})=>b),"v-3777b6d3":()=>__vitePreload(()=>import("./encrypt.html-13ab01ef.js"),[]).then(({data:b})=>b),"v-4a2a37eb":()=>__vitePreload(()=>import("./markdown.html-9c804e9b.js"),[]).then(({data:b})=>b),"v-0e4acecb":()=>__vitePreload(()=>import("./page.html-de42f233.js"),[]).then(({data:b})=>b),"v-fb852992":()=>__vitePreload(()=>import("./cherry.html-a0612ae5.js"),[]).then(({data:b})=>b),"v-4fd051a1":()=>__vitePreload(()=>import("./dragonfruit.html-937c64bd.js"),[]).then(({data:b})=>b),"v-57615dc1":()=>__vitePreload(()=>import("./strawberry.html-af7e2a9f.js"),[]).then(({data:b})=>b),"v-285adf66":()=>__vitePreload(()=>import("./tomato.html-afc1f519.js"),[]).then(({data:b})=>b),"v-bc2682d8":()=>__vitePreload(()=>import("./Android基础知识.html-a22d7791.js"),[]).then(({data:b})=>b),"v-7fc937ae":()=>__vitePreload(()=>import("./Android日常记录.html-c82e4f93.js"),[]).then(({data:b})=>b),"v-23bac6bf":()=>__vitePreload(()=>import("./Java设计模式.html-02176ab3.js"),[]).then(({data:b})=>b),"v-1f37820e":()=>__vitePreload(()=>import("./文件操作的工具类.html-437fc44a.js"),[]).then(({data:b})=>b),"v-25e47600":()=>__vitePreload(()=>import("./设计模式-Builder模式.html-f296c1ae.js"),[]).then(({data:b})=>b),"v-d1280c4e":()=>__vitePreload(()=>import("./设计模式-代理模式.html-37a7b2fe.js"),[]).then(({data:b})=>b),"v-dfca70ca":()=>__vitePreload(()=>import("./设计模式-单例模式.html-e2204c47.js"),[]).then(({data:b})=>b),"v-5717f9dc":()=>__vitePreload(()=>import("./设计模式-工厂方法模式.html-57d7f670.js"),[]).then(({data:b})=>b),"v-75c6bce4":()=>__vitePreload(()=>import("./设计模式-桥接模式.html-fbd0d021.js"),[]).then(({data:b})=>b),"v-caabd36c":()=>__vitePreload(()=>import("./设计模式-模版模式.html-9f688356.js"),[]).then(({data:b})=>b),"v-24913129":()=>__vitePreload(()=>import("./设计模式-简单工厂模式.html-5415114d.js"),[]).then(({data:b})=>b),"v-f537cc42":()=>__vitePreload(()=>import("./设计模式-观察者模式.html-1be35f0b.js"),[]).then(({data:b})=>b),"v-6fc15e29":()=>__vitePreload(()=>import("./读取XML中的配置参数.html-10aa444a.js"),[]).then(({data:b})=>b),"v-dfefb10e":()=>__vitePreload(()=>import("./1.html-b7c65925.js"),[]).then(({data:b})=>b),"v-00cab512":()=>__vitePreload(()=>import("./自学Python-IO编程.html-5295f7d6.js"),[]).then(({data:b})=>b),"v-4ceaa060":()=>__vitePreload(()=>import("./自学Python-Python基础.html-9a60a55a.js"),[]).then(({data:b})=>b),"v-5f6c3872":()=>__vitePreload(()=>import("./自学Python-Python基础二.html-db407e73.js"),[]).then(({data:b})=>b),"v-8f2096f8":()=>__vitePreload(()=>import("./自学Python-函数.html-5b1357ae.js"),[]).then(({data:b})=>b),"v-4f505016":()=>__vitePreload(()=>import("./自学Python-函数式编程.html-26f23611.js"),[]).then(({data:b})=>b),"v-46ece9fd":()=>__vitePreload(()=>import("./自学Python-常用内建模块.html-fa6d5603.js"),[]).then(({data:b})=>b),"v-0fe7edfb":()=>__vitePreload(()=>import("./自学Python-模块.html-d11a1a8c.js"),[]).then(({data:b})=>b),"v-62d694f6":()=>__vitePreload(()=>import("./自学Python-正则表达式.html-bd6ba0f8.js"),[]).then(({data:b})=>b),"v-336cfd98":()=>__vitePreload(()=>import("./自学Python-线程和进程.html-ecb98b6f.js"),[]).then(({data:b})=>b),"v-7ff89994":()=>__vitePreload(()=>import("./自学Python-面向对象编程.html-ec7f5e5f.js"),[]).then(({data:b})=>b),"v-1202e086":()=>__vitePreload(()=>import("./自学Python-面向对象高级编程.html-df70e5fb.js"),[]).then(({data:b})=>b),"v-0e9dadd6":()=>__vitePreload(()=>import("./自学Python-高级特性.html-89a7d564.js"),[]).then(({data:b})=>b),"v-d01394f2":()=>__vitePreload(()=>import("./MYSQL的修改和删除.html-0ab77e06.js"),[]).then(({data:b})=>b),"v-de9741e0":()=>__vitePreload(()=>import("./MySQL使用.html-5c3d3808.js"),[]).then(({data:b})=>b),"v-3f1edcbb":()=>__vitePreload(()=>import("./MySQL学习记录.html-4d6e96aa.js"),[]).then(({data:b})=>b),"v-79c4cae9":()=>__vitePreload(()=>import("./MySQL进阶-操作详解.html-3b3887d2.js"),[]).then(({data:b})=>b),"v-a278d5a4":()=>__vitePreload(()=>import("./Vim基本操作.html-4cca0dc1.js"),[]).then(({data:b})=>b),"v-d6a6efb0":()=>__vitePreload(()=>import("./webpack5_base.html-381168d2.js"),[]).then(({data:b})=>b),"v-58aa03b4":()=>__vitePreload(()=>import("./1.html-06f5e20e.js"),[]).then(({data:b})=>b),"v-55405276":()=>__vitePreload(()=>import("./2.html-4f97f1c1.js"),[]).then(({data:b})=>b),"v-51d6a138":()=>__vitePreload(()=>import("./3.html-169733b6.js"),[]).then(({data:b})=>b),"v-4e6ceffa":()=>__vitePreload(()=>import("./4.html-18d42b59.js"),[]).then(({data:b})=>b),"v-e748286e":()=>__vitePreload(()=>import("./1.html-225ee988.js"),[]).then(({data:b})=>b),"v-e3de7730":()=>__vitePreload(()=>import("./2.html-709bbc57.js"),[]).then(({data:b})=>b),"v-e074c5f2":()=>__vitePreload(()=>import("./3.html-9d4e6598.js"),[]).then(({data:b})=>b),"v-dd0b14b4":()=>__vitePreload(()=>import("./4.html-052df750.js"),[]).then(({data:b})=>b),"v-3706649a":()=>__vitePreload(()=>import("./404.html-58460453.js"),[]).then(({data:b})=>b),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-b496a18c.js"),[]).then(({data:b})=>b),"v-744d024e":()=>__vitePreload(()=>import("./index.html-56ad1f9d.js"),[]).then(({data:b})=>b),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-0b98c778.js"),[]).then(({data:b})=>b),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-97a55f0d.js"),[]).then(({data:b})=>b),"v-01560935":()=>__vitePreload(()=>import("./index.html-44667d5a.js"),[]).then(({data:b})=>b),"v-03d57386":()=>__vitePreload(()=>import("./index.html-a3707cbc.js"),[]).then(({data:b})=>b),"v-83e1f92e":()=>__vitePreload(()=>import("./index.html-12054fca.js"),[]).then(({data:b})=>b),"v-c58f154a":()=>__vitePreload(()=>import("./index.html-76954ed9.js"),[]).then(({data:b})=>b),"v-0b1aabfb":()=>__vitePreload(()=>import("./index.html-f60cb1ef.js"),[]).then(({data:b})=>b),"v-29430628":()=>__vitePreload(()=>import("./index.html-e933836c.js"),[]).then(({data:b})=>b),"v-13b66e9c":()=>__vitePreload(()=>import("./index.html-a777c69a.js"),[]).then(({data:b})=>b),"v-1e447d61":()=>__vitePreload(()=>import("./index.html-db0243a7.js"),[]).then(({data:b})=>b),"v-29da37b8":()=>__vitePreload(()=>import("./index.html-aaa4569d.js"),[]).then(({data:b})=>b),"v-484552dc":()=>__vitePreload(()=>import("./index.html-91af788b.js"),[]).then(({data:b})=>b),"v-4c41ef7e":()=>__vitePreload(()=>import("./index.html-42ba5a66.js"),[]).then(({data:b})=>b),"v-a378ad66":()=>__vitePreload(()=>import("./index.html-5a79702e.js"),[]).then(({data:b})=>b),"v-12590846":()=>__vitePreload(()=>import("./index.html-42b228a1.js"),[]).then(({data:b})=>b),"v-7b167472":()=>__vitePreload(()=>import("./index.html-cc09c0a2.js"),[]).then(({data:b})=>b),"v-9717cc36":()=>__vitePreload(()=>import("./index.html-89159157.js"),[]).then(({data:b})=>b),"v-03b53f28":()=>__vitePreload(()=>import("./index.html-f643de09.js"),[]).then(({data:b})=>b),"v-378faa7a":()=>__vitePreload(()=>import("./index.html-47523c75.js"),[]).then(({data:b})=>b),"v-55636bee":()=>__vitePreload(()=>import("./index.html-b06b88cd.js"),[]).then(({data:b})=>b),"v-45d1abcf":()=>__vitePreload(()=>import("./index.html-c2fba3a2.js"),[]).then(({data:b})=>b),"v-0da0cef8":()=>__vitePreload(()=>import("./index.html-5a5a8690.js"),[]).then(({data:b})=>b),"v-2b347942":()=>__vitePreload(()=>import("./index.html-d4676035.js"),[]).then(({data:b})=>b),"v-3aafda76":()=>__vitePreload(()=>import("./index.html-da1efabc.js"),[]).then(({data:b})=>b),"v-5160fb07":()=>__vitePreload(()=>import("./index.html-f22fe3c5.js"),[]).then(({data:b})=>b),"v-624a9248":()=>__vitePreload(()=>import("./index.html-2f37ee7c.js"),[]).then(({data:b})=>b),"v-77c20c26":()=>__vitePreload(()=>import("./index.html-86665ca3.js"),[]).then(({data:b})=>b),"v-1bee38ca":()=>__vitePreload(()=>import("./index.html-0c9798ee.js"),[]).then(({data:b})=>b),"v-295ae32a":()=>__vitePreload(()=>import("./index.html-b2ca38ce.js"),[]).then(({data:b})=>b),"v-0002f839":()=>__vitePreload(()=>import("./index.html-bc7fe4ae.js"),[]).then(({data:b})=>b),"v-8b0314de":()=>__vitePreload(()=>import("./index.html-106bb259.js"),[]).then(({data:b})=>b),"v-374a2e4c":()=>__vitePreload(()=>import("./index.html-138f9581.js"),[]).then(({data:b})=>b),"v-a8b7dd86":()=>__vitePreload(()=>import("./index.html-868ae205.js"),[]).then(({data:b})=>b),"v-7c3ad837":()=>__vitePreload(()=>import("./index.html-0ad24c19.js"),[]).then(({data:b})=>b),"v-20b43ca4":()=>__vitePreload(()=>import("./index.html-b86df12c.js"),[]).then(({data:b})=>b),"v-4abceb7e":()=>__vitePreload(()=>import("./index.html-153a8c7e.js"),[]).then(({data:b})=>b),"v-10ffdabb":()=>__vitePreload(()=>import("./index.html-6ee3c49d.js"),[]).then(({data:b})=>b),"v-1b439075":()=>__vitePreload(()=>import("./index.html-718a69b3.js"),[]).then(({data:b})=>b),"v-3ef1d26e":()=>__vitePreload(()=>import("./index.html-83d99cb9.js"),[]).then(({data:b})=>b),"v-65e12cb4":()=>__vitePreload(()=>import("./index.html-97815afb.js"),[]).then(({data:b})=>b),"v-3e94b7aa":()=>__vitePreload(()=>import("./index.html-d00ed14f.js"),[]).then(({data:b})=>b),"v-93698316":()=>__vitePreload(()=>import("./index.html-ff6eb861.js"),[]).then(({data:b})=>b),"v-529a9eff":()=>__vitePreload(()=>import("./index.html-c2e27615.js"),[]).then(({data:b})=>b),"v-510b1358":()=>__vitePreload(()=>import("./index.html-c4b8a3b6.js"),[]).then(({data:b})=>b),"v-9377f034":()=>__vitePreload(()=>import("./index.html-57107a91.js"),[]).then(({data:b})=>b),"v-3112f624":()=>__vitePreload(()=>import("./index.html-45b46c2a.js"),[]).then(({data:b})=>b),"v-37c58cf9":()=>__vitePreload(()=>import("./index.html-957dc5ed.js"),[]).then(({data:b})=>b),"v-12ccbb5c":()=>__vitePreload(()=>import("./index.html-447d8280.js"),[]).then(({data:b})=>b)},siteData$1=JSON.parse(`{"base":"/zar_blog/","lang":"zh-CN","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"Anakin's blog","description":"张安然的博客记录"},"/en":{"lang":"en-US","title":"Anakin's blog","description":"Anakin's blog"}}}`),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-308c2117.js"),["assets/index.html-308c2117.js","assets/framework-5e2051d8.js"])),"v-184f4da6":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-e18d78a7.js"),["assets/intro.html-e18d78a7.js","assets/framework-5e2051d8.js"])),"v-2e3eac9e":defineAsyncComponent(()=>__vitePreload(()=>import("./slides.html-caf1299d.js"),["assets/slides.html-caf1299d.js","assets/framework-5e2051d8.js"])),"v-1473bf53":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3d4583c3.js"),["assets/index.html-3d4583c3.js","assets/framework-5e2051d8.js"])),"v-4e65ec78":defineAsyncComponent(()=>__vitePreload(()=>import("./disable.html-af7eb118.js"),["assets/disable.html-af7eb118.js","assets/framework-5e2051d8.js"])),"v-c151bf32":defineAsyncComponent(()=>__vitePreload(()=>import("./encrypt.html-e3f9ea16.js"),["assets/encrypt.html-e3f9ea16.js","assets/framework-5e2051d8.js"])),"v-438ffe52":defineAsyncComponent(()=>__vitePreload(()=>import("./markdown.html-59b1635c.js"),["assets/markdown.html-59b1635c.js","assets/framework-5e2051d8.js"])),"v-6e19edb7":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-1a71ba90.js"),["assets/page.html-1a71ba90.js","assets/framework-5e2051d8.js"])),"v-2d0a870d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b0ee096f.js"),["assets/index.html-b0ee096f.js","assets/framework-5e2051d8.js"])),"v-5aa3d8ba":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-b7c74e63.js"),["assets/intro.html-b7c74e63.js","assets/framework-5e2051d8.js"])),"v-367b840a":defineAsyncComponent(()=>__vitePreload(()=>import("./slides.html-5b5b8f2a.js"),["assets/slides.html-5b5b8f2a.js","assets/framework-5e2051d8.js"])),"v-4ddb96f4":defineAsyncComponent(()=>__vitePreload(()=>import("./怎样选择基金.html-74d74f9d.js"),["assets/怎样选择基金.html-74d74f9d.js","assets/framework-5e2051d8.js"])),"v-395cd082":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-35ba537b.js"),["assets/index.html-35ba537b.js","assets/framework-5e2051d8.js"])),"v-70eda030":defineAsyncComponent(()=>__vitePreload(()=>import("./disable.html-c235c18a.js"),["assets/disable.html-c235c18a.js","assets/framework-5e2051d8.js"])),"v-3777b6d3":defineAsyncComponent(()=>__vitePreload(()=>import("./encrypt.html-6473a039.js"),["assets/encrypt.html-6473a039.js","assets/framework-5e2051d8.js"])),"v-4a2a37eb":defineAsyncComponent(()=>__vitePreload(()=>import("./markdown.html-4e89a57f.js"),["assets/markdown.html-4e89a57f.js","assets/framework-5e2051d8.js"])),"v-0e4acecb":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-295ffc06.js"),["assets/page.html-295ffc06.js","assets/framework-5e2051d8.js"])),"v-fb852992":defineAsyncComponent(()=>__vitePreload(()=>import("./cherry.html-acbe75b5.js"),["assets/cherry.html-acbe75b5.js","assets/framework-5e2051d8.js"])),"v-4fd051a1":defineAsyncComponent(()=>__vitePreload(()=>import("./dragonfruit.html-d6f6b724.js"),["assets/dragonfruit.html-d6f6b724.js","assets/framework-5e2051d8.js"])),"v-57615dc1":defineAsyncComponent(()=>__vitePreload(()=>import("./strawberry.html-3f119128.js"),["assets/strawberry.html-3f119128.js","assets/framework-5e2051d8.js"])),"v-285adf66":defineAsyncComponent(()=>__vitePreload(()=>import("./tomato.html-dd10ebed.js"),["assets/tomato.html-dd10ebed.js","assets/framework-5e2051d8.js"])),"v-bc2682d8":defineAsyncComponent(()=>__vitePreload(()=>import("./Android基础知识.html-8fa75165.js"),["assets/Android基础知识.html-8fa75165.js","assets/framework-5e2051d8.js"])),"v-7fc937ae":defineAsyncComponent(()=>__vitePreload(()=>import("./Android日常记录.html-f917e5ed.js"),["assets/Android日常记录.html-f917e5ed.js","assets/framework-5e2051d8.js"])),"v-23bac6bf":defineAsyncComponent(()=>__vitePreload(()=>import("./Java设计模式.html-59548e9e.js"),["assets/Java设计模式.html-59548e9e.js","assets/framework-5e2051d8.js"])),"v-1f37820e":defineAsyncComponent(()=>__vitePreload(()=>import("./文件操作的工具类.html-61e904c6.js"),["assets/文件操作的工具类.html-61e904c6.js","assets/framework-5e2051d8.js"])),"v-25e47600":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-Builder模式.html-83e428cf.js"),["assets/设计模式-Builder模式.html-83e428cf.js","assets/framework-5e2051d8.js"])),"v-d1280c4e":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-代理模式.html-33c87320.js"),["assets/设计模式-代理模式.html-33c87320.js","assets/framework-5e2051d8.js"])),"v-dfca70ca":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-单例模式.html-2cdb72b1.js"),["assets/设计模式-单例模式.html-2cdb72b1.js","assets/framework-5e2051d8.js"])),"v-5717f9dc":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-工厂方法模式.html-d2312bd9.js"),["assets/设计模式-工厂方法模式.html-d2312bd9.js","assets/framework-5e2051d8.js"])),"v-75c6bce4":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-桥接模式.html-c2a552d8.js"),["assets/设计模式-桥接模式.html-c2a552d8.js","assets/framework-5e2051d8.js"])),"v-caabd36c":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-模版模式.html-68ff9763.js"),["assets/设计模式-模版模式.html-68ff9763.js","assets/framework-5e2051d8.js"])),"v-24913129":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-简单工厂模式.html-c075e320.js"),["assets/设计模式-简单工厂模式.html-c075e320.js","assets/framework-5e2051d8.js"])),"v-f537cc42":defineAsyncComponent(()=>__vitePreload(()=>import("./设计模式-观察者模式.html-6524fae2.js"),["assets/设计模式-观察者模式.html-6524fae2.js","assets/framework-5e2051d8.js"])),"v-6fc15e29":defineAsyncComponent(()=>__vitePreload(()=>import("./读取XML中的配置参数.html-4a70c3bf.js"),["assets/读取XML中的配置参数.html-4a70c3bf.js","assets/framework-5e2051d8.js"])),"v-dfefb10e":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-3ecfc33c.js"),["assets/1.html-3ecfc33c.js","assets/framework-5e2051d8.js"])),"v-00cab512":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-IO编程.html-d1ee3c1a.js"),["assets/自学Python-IO编程.html-d1ee3c1a.js","assets/framework-5e2051d8.js"])),"v-4ceaa060":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-Python基础.html-c9047e54.js"),["assets/自学Python-Python基础.html-c9047e54.js","assets/framework-5e2051d8.js"])),"v-5f6c3872":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-Python基础二.html-69ee6dd5.js"),["assets/自学Python-Python基础二.html-69ee6dd5.js","assets/framework-5e2051d8.js"])),"v-8f2096f8":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-函数.html-358e8818.js"),["assets/自学Python-函数.html-358e8818.js","assets/framework-5e2051d8.js"])),"v-4f505016":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-函数式编程.html-d83ade08.js"),["assets/自学Python-函数式编程.html-d83ade08.js","assets/framework-5e2051d8.js"])),"v-46ece9fd":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-常用内建模块.html-4e87211b.js"),["assets/自学Python-常用内建模块.html-4e87211b.js","assets/framework-5e2051d8.js"])),"v-0fe7edfb":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-模块.html-407df823.js"),["assets/自学Python-模块.html-407df823.js","assets/framework-5e2051d8.js"])),"v-62d694f6":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-正则表达式.html-bdcb5f17.js"),["assets/自学Python-正则表达式.html-bdcb5f17.js","assets/framework-5e2051d8.js"])),"v-336cfd98":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-线程和进程.html-9d46270a.js"),["assets/自学Python-线程和进程.html-9d46270a.js","assets/framework-5e2051d8.js"])),"v-7ff89994":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-面向对象编程.html-363f92e7.js"),["assets/自学Python-面向对象编程.html-363f92e7.js","assets/framework-5e2051d8.js"])),"v-1202e086":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-面向对象高级编程.html-c4bdf735.js"),["assets/自学Python-面向对象高级编程.html-c4bdf735.js","assets/framework-5e2051d8.js"])),"v-0e9dadd6":defineAsyncComponent(()=>__vitePreload(()=>import("./自学Python-高级特性.html-b90b297b.js"),["assets/自学Python-高级特性.html-b90b297b.js","assets/framework-5e2051d8.js"])),"v-d01394f2":defineAsyncComponent(()=>__vitePreload(()=>import("./MYSQL的修改和删除.html-ebe3eef4.js"),["assets/MYSQL的修改和删除.html-ebe3eef4.js","assets/framework-5e2051d8.js"])),"v-de9741e0":defineAsyncComponent(()=>__vitePreload(()=>import("./MySQL使用.html-65932ef6.js"),["assets/MySQL使用.html-65932ef6.js","assets/framework-5e2051d8.js"])),"v-3f1edcbb":defineAsyncComponent(()=>__vitePreload(()=>import("./MySQL学习记录.html-64ffccbb.js"),["assets/MySQL学习记录.html-64ffccbb.js","assets/framework-5e2051d8.js"])),"v-79c4cae9":defineAsyncComponent(()=>__vitePreload(()=>import("./MySQL进阶-操作详解.html-ce513dde.js"),["assets/MySQL进阶-操作详解.html-ce513dde.js","assets/framework-5e2051d8.js"])),"v-a278d5a4":defineAsyncComponent(()=>__vitePreload(()=>import("./Vim基本操作.html-bfaf110d.js"),["assets/Vim基本操作.html-bfaf110d.js","assets/framework-5e2051d8.js"])),"v-d6a6efb0":defineAsyncComponent(()=>__vitePreload(()=>import("./webpack5_base.html-c50c2dd9.js"),["assets/webpack5_base.html-c50c2dd9.js","assets/framework-5e2051d8.js"])),"v-58aa03b4":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-55091478.js"),["assets/1.html-55091478.js","assets/framework-5e2051d8.js"])),"v-55405276":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-ffe35890.js"),["assets/2.html-ffe35890.js","assets/framework-5e2051d8.js"])),"v-51d6a138":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-dd05bb22.js"),["assets/3.html-dd05bb22.js","assets/framework-5e2051d8.js"])),"v-4e6ceffa":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-5272085c.js"),["assets/4.html-5272085c.js","assets/framework-5e2051d8.js"])),"v-e748286e":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-fa460777.js"),["assets/1.html-fa460777.js","assets/framework-5e2051d8.js"])),"v-e3de7730":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-2ad52ac4.js"),["assets/2.html-2ad52ac4.js","assets/framework-5e2051d8.js"])),"v-e074c5f2":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-474d1f57.js"),["assets/3.html-474d1f57.js","assets/framework-5e2051d8.js"])),"v-dd0b14b4":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-5c5a1ab2.js"),["assets/4.html-5c5a1ab2.js","assets/framework-5e2051d8.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-bf708293.js"),["assets/404.html-bf708293.js","assets/framework-5e2051d8.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eeebcda8.js"),["assets/index.html-eeebcda8.js","assets/framework-5e2051d8.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-fd068d59.js"),["assets/index.html-fd068d59.js","assets/framework-5e2051d8.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-41df11af.js"),["assets/index.html-41df11af.js","assets/framework-5e2051d8.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2b80bab3.js"),["assets/index.html-2b80bab3.js","assets/framework-5e2051d8.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-efd6f91a.js"),["assets/index.html-efd6f91a.js","assets/framework-5e2051d8.js"])),"v-03d57386":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ce49c71f.js"),["assets/index.html-ce49c71f.js","assets/framework-5e2051d8.js"])),"v-83e1f92e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b7101448.js"),["assets/index.html-b7101448.js","assets/framework-5e2051d8.js"])),"v-c58f154a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b173dce9.js"),["assets/index.html-b173dce9.js","assets/framework-5e2051d8.js"])),"v-0b1aabfb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3b10d84c.js"),["assets/index.html-3b10d84c.js","assets/framework-5e2051d8.js"])),"v-29430628":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dec0d6e1.js"),["assets/index.html-dec0d6e1.js","assets/framework-5e2051d8.js"])),"v-13b66e9c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-55eafdd3.js"),["assets/index.html-55eafdd3.js","assets/framework-5e2051d8.js"])),"v-1e447d61":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-43592ed1.js"),["assets/index.html-43592ed1.js","assets/framework-5e2051d8.js"])),"v-29da37b8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7de7de26.js"),["assets/index.html-7de7de26.js","assets/framework-5e2051d8.js"])),"v-484552dc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-21679ea6.js"),["assets/index.html-21679ea6.js","assets/framework-5e2051d8.js"])),"v-4c41ef7e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7428946c.js"),["assets/index.html-7428946c.js","assets/framework-5e2051d8.js"])),"v-a378ad66":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3755973f.js"),["assets/index.html-3755973f.js","assets/framework-5e2051d8.js"])),"v-12590846":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eb1f5ccd.js"),["assets/index.html-eb1f5ccd.js","assets/framework-5e2051d8.js"])),"v-7b167472":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-813b5f11.js"),["assets/index.html-813b5f11.js","assets/framework-5e2051d8.js"])),"v-9717cc36":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2ecc28bd.js"),["assets/index.html-2ecc28bd.js","assets/framework-5e2051d8.js"])),"v-03b53f28":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-564a4a72.js"),["assets/index.html-564a4a72.js","assets/framework-5e2051d8.js"])),"v-378faa7a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-99ec343c.js"),["assets/index.html-99ec343c.js","assets/framework-5e2051d8.js"])),"v-55636bee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b2ed9930.js"),["assets/index.html-b2ed9930.js","assets/framework-5e2051d8.js"])),"v-45d1abcf":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a665f8b5.js"),["assets/index.html-a665f8b5.js","assets/framework-5e2051d8.js"])),"v-0da0cef8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0d7c2831.js"),["assets/index.html-0d7c2831.js","assets/framework-5e2051d8.js"])),"v-2b347942":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-33385d96.js"),["assets/index.html-33385d96.js","assets/framework-5e2051d8.js"])),"v-3aafda76":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6823e3ff.js"),["assets/index.html-6823e3ff.js","assets/framework-5e2051d8.js"])),"v-5160fb07":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5b9c1721.js"),["assets/index.html-5b9c1721.js","assets/framework-5e2051d8.js"])),"v-624a9248":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c63b50ff.js"),["assets/index.html-c63b50ff.js","assets/framework-5e2051d8.js"])),"v-77c20c26":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-17066301.js"),["assets/index.html-17066301.js","assets/framework-5e2051d8.js"])),"v-1bee38ca":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-39193931.js"),["assets/index.html-39193931.js","assets/framework-5e2051d8.js"])),"v-295ae32a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-49d23803.js"),["assets/index.html-49d23803.js","assets/framework-5e2051d8.js"])),"v-0002f839":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6d083358.js"),["assets/index.html-6d083358.js","assets/framework-5e2051d8.js"])),"v-8b0314de":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-212b3a47.js"),["assets/index.html-212b3a47.js","assets/framework-5e2051d8.js"])),"v-374a2e4c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-61b9cd61.js"),["assets/index.html-61b9cd61.js","assets/framework-5e2051d8.js"])),"v-a8b7dd86":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7af1ed8e.js"),["assets/index.html-7af1ed8e.js","assets/framework-5e2051d8.js"])),"v-7c3ad837":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d26df785.js"),["assets/index.html-d26df785.js","assets/framework-5e2051d8.js"])),"v-20b43ca4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f2981bd2.js"),["assets/index.html-f2981bd2.js","assets/framework-5e2051d8.js"])),"v-4abceb7e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9b916530.js"),["assets/index.html-9b916530.js","assets/framework-5e2051d8.js"])),"v-10ffdabb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-176a5f3d.js"),["assets/index.html-176a5f3d.js","assets/framework-5e2051d8.js"])),"v-1b439075":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-859e5880.js"),["assets/index.html-859e5880.js","assets/framework-5e2051d8.js"])),"v-3ef1d26e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f64195aa.js"),["assets/index.html-f64195aa.js","assets/framework-5e2051d8.js"])),"v-65e12cb4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-11ed61a8.js"),["assets/index.html-11ed61a8.js","assets/framework-5e2051d8.js"])),"v-3e94b7aa":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-60ba922a.js"),["assets/index.html-60ba922a.js","assets/framework-5e2051d8.js"])),"v-93698316":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a3eb2bc6.js"),["assets/index.html-a3eb2bc6.js","assets/framework-5e2051d8.js"])),"v-529a9eff":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ad2c4627.js"),["assets/index.html-ad2c4627.js","assets/framework-5e2051d8.js"])),"v-510b1358":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bf4c51dd.js"),["assets/index.html-bf4c51dd.js","assets/framework-5e2051d8.js"])),"v-9377f034":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a48acf41.js"),["assets/index.html-a48acf41.js","assets/framework-5e2051d8.js"])),"v-3112f624":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dec9edec.js"),["assets/index.html-dec9edec.js","assets/framework-5e2051d8.js"])),"v-37c58cf9":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-369cf95f.js"),["assets/index.html-369cf95f.js","assets/framework-5e2051d8.js"])),"v-12ccbb5c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0154c87e.js"),["assets/index.html-0154c87e.js","assets/framework-5e2051d8.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const b=inject(pageFrontmatterSymbol);if(!b)throw new Error("usePageFrontmatter() is called without provider.");return b},pageHeadSymbol=Symbol(""),usePageHead=()=>{const b=inject(pageHeadSymbol);if(!b)throw new Error("usePageHead() is called without provider.");return b},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const b=inject(pageHeadTitleSymbol);if(!b)throw new Error("usePageHeadTitle() is called without provider.");return b},pageLangSymbol=Symbol(""),usePageLang=()=>{const b=inject(pageLangSymbol);if(!b)throw new Error("usePageLang() is called without provider.");return b},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const b=inject(pageLayoutSymbol);if(!b)throw new Error("usePageLayout() is called without provider.");return b},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const b=inject(routeLocaleSymbol);if(!b)throw new Error("useRouteLocale() is called without provider.");return b},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const b=inject(siteLocaleDataSymbol);if(!b)throw new Error("useSiteLocaleData() is called without provider.");return b},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:b=>b.reduce((T,j)=>({...T,...j.layouts}),{}),resolvePageData:async b=>{const T=pagesData.value[b];return await(T==null?void 0:T())??pageDataEmpty},resolvePageFrontmatter:b=>b.frontmatter,resolvePageHead:(b,T,j)=>{const ie=isString$1(T.description)?T.description:j.description,le=[...isArray(T.head)?T.head:[],...j.head,["title",{},b],["meta",{name:"description",content:ie}]];return dedupeHead(le)},resolvePageHeadTitle:(b,T)=>`${b.title?`${b.title}`:""}${T.title?` | ${T.title}`:""}`,resolvePageLang:b=>b.lang||"en",resolvePageLayout:(b,T)=>{let j;if(b.path){const ie=b.frontmatter.layout;isString$1(ie)?j=ie:j=LAYOUT_NAME_DEFAULT}else j=LAYOUT_NAME_NOT_FOUND;return T[j]},resolveRouteLocale:(b,T)=>resolveLocalePath(b,T),resolveSiteLocaleData:(b,T)=>({...b,...b.locales[T]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(b,T){const j=ref(!1);return onMounted(()=>{j.value=!0}),()=>{var ie,le;return j.value?(le=(ie=T.slots).default)==null?void 0:le.call(ie):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(b){const T=usePageData(),j=computed(()=>pagesComponents[b.pageKey||T.value.key]);return()=>j.value?h$5(j.value):h$5("div","404 Not Found")}}),defineClientConfig=(b={})=>b,withBase=b=>isLinkHttp(b)?b:`/zar_blog/${removeLeadingSlash(b)}`;const hopeInject="",clientConfig0={};var _a$1;const isClient=typeof window<"u",isFunction=b=>typeof b=="function",isString=b=>typeof b=="string",noop=()=>{};isClient&&((_a$1=window==null?void 0:window.navigator)!=null&&_a$1.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(b){return typeof b=="function"?b():unref(b)}function createFilterWrapper(b,T){function j(...ie){b(()=>T.apply(this,ie),{fn:T,thisArg:this,args:ie})}return j}const bypassFilter=b=>b();function debounceFilter(b,T={}){let j,ie;return de=>{const ce=resolveUnref(b),ve=resolveUnref(T.maxWait);if(j&&clearTimeout(j),ce<=0||ve!==void 0&&ve<=0)return ie&&(clearTimeout(ie),ie=null),de();ve&&!ie&&(ie=setTimeout(()=>{j&&clearTimeout(j),ie=null,de()},ve)),j=setTimeout(()=>{ie&&clearTimeout(ie),ie=null,de()},ce)}}function throttleFilter(b,T=!0,j=!0){let ie=0,le,de=!0;const ce=()=>{le&&(clearTimeout(le),le=void 0)};return ue=>{const me=resolveUnref(b),pe=Date.now()-ie;if(ce(),me<=0)return ie=Date.now(),ue();pe>me&&(j||!de)?(ie=Date.now(),ue()):T&&(le=setTimeout(()=>{ie=Date.now(),de=!0,ce(),ue()},me-pe)),!j&&!le&&(le=setTimeout(()=>de=!0,me)),de=!1}}function pausableFilter(b=bypassFilter){const T=ref(!0);function j(){T.value=!1}function ie(){T.value=!0}return{isActive:T,pause:j,resume:ie,eventFilter:(...de)=>{T.value&&b(...de)}}}function identity(b){return b}function tryOnScopeDispose(b){return getCurrentScope()?(onScopeDispose(b),!0):!1}function useDebounceFn(b,T=200,j={}){return createFilterWrapper(debounceFilter(T,j),b)}function useThrottleFn(b,T=200,j=!1,ie=!0){return createFilterWrapper(throttleFilter(T,j,ie),b)}function resolveRef(b){return typeof b=="function"?computed(b):ref(b)}function tryOnMounted(b,T=!0){getCurrentInstance()?onMounted(b):T?b():nextTick(b)}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(b,T)=>{var j={};for(var ie in b)__hasOwnProp$6.call(b,ie)&&T.indexOf(ie)<0&&(j[ie]=b[ie]);if(b!=null&&__getOwnPropSymbols$6)for(var ie of __getOwnPropSymbols$6(b))T.indexOf(ie)<0&&__propIsEnum$6.call(b,ie)&&(j[ie]=b[ie]);return j};function watchWithFilter(b,T,j={}){const ie=j,{eventFilter:le=bypassFilter}=ie,de=__objRest$5(ie,["eventFilter"]);return watch(b,createFilterWrapper(le,T),de)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(b,T,j)=>T in b?__defProp$2(b,T,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[T]=j,__spreadValues$2=(b,T)=>{for(var j in T||(T={}))__hasOwnProp$2.call(T,j)&&__defNormalProp$2(b,j,T[j]);if(__getOwnPropSymbols$2)for(var j of __getOwnPropSymbols$2(T))__propIsEnum$2.call(T,j)&&__defNormalProp$2(b,j,T[j]);return b},__spreadProps$2=(b,T)=>__defProps$2(b,__getOwnPropDescs$2(T)),__objRest$1=(b,T)=>{var j={};for(var ie in b)__hasOwnProp$2.call(b,ie)&&T.indexOf(ie)<0&&(j[ie]=b[ie]);if(b!=null&&__getOwnPropSymbols$2)for(var ie of __getOwnPropSymbols$2(b))T.indexOf(ie)<0&&__propIsEnum$2.call(b,ie)&&(j[ie]=b[ie]);return j};function watchPausable(b,T,j={}){const ie=j,{eventFilter:le}=ie,de=__objRest$1(ie,["eventFilter"]),{eventFilter:ce,pause:ve,resume:ue,isActive:me}=pausableFilter(le);return{stop:watchWithFilter(b,T,__spreadProps$2(__spreadValues$2({},de),{eventFilter:ce})),pause:ve,resume:ue,isActive:me}}function unrefElement(b){var T;const j=resolveUnref(b);return(T=j==null?void 0:j.$el)!=null?T:j}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0;isClient&&window.navigator;isClient&&window.location;function useEventListener(...b){let T,j,ie,le;if(isString(b[0])||Array.isArray(b[0])?([j,ie,le]=b,T=defaultWindow):[T,j,ie,le]=b,!T)return noop;Array.isArray(j)||(j=[j]),Array.isArray(ie)||(ie=[ie]);const de=[],ce=()=>{de.forEach(pe=>pe()),de.length=0},ve=(pe,be,he)=>(pe.addEventListener(be,he,le),()=>pe.removeEventListener(be,he,le)),ue=watch(()=>unrefElement(T),pe=>{ce(),pe&&de.push(...j.flatMap(be=>ie.map(he=>ve(pe,be,he))))},{immediate:!0,flush:"post"}),me=()=>{ue(),ce()};return tryOnScopeDispose(me),me}function onClickOutside(b,T,j={}){const{window:ie=defaultWindow,ignore:le=[],capture:de=!0,detectIframe:ce=!1}=j;if(!ie)return;let ve=!0,ue;const me=fe=>le.some(ye=>{if(typeof ye=="string")return Array.from(ie.document.querySelectorAll(ye)).some(_e=>_e===fe.target||fe.composedPath().includes(_e));{const _e=unrefElement(ye);return _e&&(fe.target===_e||fe.composedPath().includes(_e))}}),pe=fe=>{ie.clearTimeout(ue);const ye=unrefElement(b);if(!(!ye||ye===fe.target||fe.composedPath().includes(ye))){if(fe.detail===0&&(ve=!me(fe)),!ve){ve=!0;return}T(fe)}},be=[useEventListener(ie,"click",pe,{passive:!0,capture:de}),useEventListener(ie,"pointerdown",fe=>{const ye=unrefElement(b);ye&&(ve=!fe.composedPath().includes(ye)&&!me(fe))},{passive:!0}),useEventListener(ie,"pointerup",fe=>{if(fe.button===0){const ye=fe.composedPath();fe.composedPath=()=>ye,ue=ie.setTimeout(()=>pe(fe),50)}},{passive:!0}),ce&&useEventListener(ie,"blur",fe=>{var ye;const _e=unrefElement(b);((ye=ie.document.activeElement)==null?void 0:ye.tagName)==="IFRAME"&&!(_e!=null&&_e.contains(ie.document.activeElement))&&T(fe)})].filter(Boolean);return()=>be.forEach(fe=>fe())}function useSupported(b,T=!1){const j=ref(),ie=()=>j.value=Boolean(b());return ie(),tryOnMounted(ie,T),j}function useMediaQuery(b,T={}){const{window:j=defaultWindow}=T,ie=useSupported(()=>j&&"matchMedia"in j&&typeof j.matchMedia=="function");let le;const de=ref(!1),ce=()=>{le&&("removeEventListener"in le?le.removeEventListener("change",ve):le.removeListener(ve))},ve=()=>{ie.value&&(ce(),le=j.matchMedia(resolveRef(b).value),de.value=le.matches,"addEventListener"in le?le.addEventListener("change",ve):le.addListener(ve))};return watchEffect(ve),tryOnScopeDispose(()=>ce()),de}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(b,T){return handlers[b]||T}function guessSerializerType(b){return b==null?"any":b instanceof Set?"set":b instanceof Map?"map":b instanceof Date?"date":typeof b=="boolean"?"boolean":typeof b=="string"?"string":typeof b=="object"?"object":Number.isNaN(b)?"any":"number"}var __defProp$j=Object.defineProperty,__getOwnPropSymbols$l=Object.getOwnPropertySymbols,__hasOwnProp$l=Object.prototype.hasOwnProperty,__propIsEnum$l=Object.prototype.propertyIsEnumerable,__defNormalProp$j=(b,T,j)=>T in b?__defProp$j(b,T,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[T]=j,__spreadValues$j=(b,T)=>{for(var j in T||(T={}))__hasOwnProp$l.call(T,j)&&__defNormalProp$j(b,j,T[j]);if(__getOwnPropSymbols$l)for(var j of __getOwnPropSymbols$l(T))__propIsEnum$l.call(T,j)&&__defNormalProp$j(b,j,T[j]);return b};const StorageSerializers={boolean:{read:b=>b==="true",write:b=>String(b)},object:{read:b=>JSON.parse(b),write:b=>JSON.stringify(b)},number:{read:b=>Number.parseFloat(b),write:b=>String(b)},any:{read:b=>b,write:b=>String(b)},string:{read:b=>b,write:b=>String(b)},map:{read:b=>new Map(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b.entries()))},set:{read:b=>new Set(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b))},date:{read:b=>new Date(b),write:b=>b.toISOString()}};function useStorage(b,T,j,ie={}){var le;const{flush:de="pre",deep:ce=!0,listenToStorageChanges:ve=!0,writeDefaults:ue=!0,mergeDefaults:me=!1,shallow:pe,window:be=defaultWindow,eventFilter:he,onError:fe=ke=>{console.error(ke)}}=ie,ye=(pe?shallowRef:ref)(T);if(!j)try{j=getSSRHandler("getDefaultStorage",()=>{var ke;return(ke=defaultWindow)==null?void 0:ke.localStorage})()}catch(ke){fe(ke)}if(!j)return ye;const _e=resolveUnref(T),Ee=guessSerializerType(_e),Ae=(le=ie.serializer)!=null?le:StorageSerializers[Ee],{pause:ge,resume:$e}=watchPausable(ye,()=>De(ye.value),{flush:de,deep:ce,eventFilter:he});return be&&ve&&useEventListener(be,"storage",Te),Te(),ye;function De(ke){try{if(ke==null)j.removeItem(b);else{const Ie=Ae.write(ke),xe=j.getItem(b);xe!==Ie&&(j.setItem(b,Ie),be&&(be==null||be.dispatchEvent(new StorageEvent("storage",{key:b,oldValue:xe,newValue:Ie,storageArea:j}))))}}catch(Ie){fe(Ie)}}function Ce(ke){const Ie=ke?ke.newValue:j.getItem(b);if(Ie==null)return ue&&_e!==null&&j.setItem(b,Ae.write(_e)),_e;if(!ke&&me){const xe=Ae.read(Ie);return isFunction(me)?me(xe,_e):Ee==="object"&&!Array.isArray(xe)?__spreadValues$j(__spreadValues$j({},_e),xe):xe}else return typeof Ie!="string"?Ie:Ae.read(Ie)}function Te(ke){if(!(ke&&ke.storageArea!==j)){if(ke&&ke.key==null){ye.value=_e;return}if(!(ke&&ke.key!==b)){ge();try{ye.value=Ce(ke)}catch(Ie){fe(Ie)}finally{ke?nextTick($e):$e()}}}}}function usePreferredDark(b){return useMediaQuery("(prefers-color-scheme: dark)",b)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(b,T={}){const{document:j=defaultDocument,autoExit:ie=!1}=T,le=b||(j==null?void 0:j.querySelector("html")),de=ref(!1);let ce=functionsMap[0];const ve=useSupported(()=>{if(j){for(const _e of functionsMap)if(_e[1]in j)return ce=_e,!0}else return!1;return!1}),[ue,me,pe,,be]=ce;async function he(){ve.value&&(j!=null&&j[pe]&&await j[me](),de.value=!1)}async function fe(){if(!ve.value)return;await he();const _e=unrefElement(le);_e&&(await _e[ue](),de.value=!0)}async function ye(){de.value?await he():await fe()}return j&&useEventListener(j,be,()=>{de.value=!!(j!=null&&j[pe])},!1),ie&&tryOnScopeDispose(he),{isSupported:ve,isFullscreen:de,enter:fe,exit:he,toggle:ye}}function useLocalStorage(b,T,j={}){const{window:ie=defaultWindow}=j;return useStorage(b,T,ie==null?void 0:ie.localStorage,j)}var SwipeDirection;(function(b){b.UP="UP",b.RIGHT="RIGHT",b.DOWN="DOWN",b.LEFT="LEFT",b.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));function useSessionStorage(b,T,j={}){const{window:ie=defaultWindow}=j;return useStorage(b,T,ie==null?void 0:ie.sessionStorage,j)}let _id=0;function useStyleTag(b,T={}){const j=ref(!1),{document:ie=defaultDocument,immediate:le=!0,manual:de=!1,id:ce=`vueuse_styletag_${++_id}`}=T,ve=ref(b);let ue=()=>{};const me=()=>{if(!ie)return;const be=ie.getElementById(ce)||ie.createElement("style");be.isConnected||(be.type="text/css",be.id=ce,T.media&&(be.media=T.media),ie.head.appendChild(be)),!j.value&&(ue=watch(ve,he=>{be.textContent=he},{immediate:!0}),j.value=!0)},pe=()=>{!ie||!j.value||(ue(),ie.head.removeChild(ie.getElementById(ce)),j.value=!1)};return le&&!de&&tryOnMounted(me),de||tryOnScopeDispose(pe),{id:ce,css:ve,unload:pe,load:me,isLoaded:readonly(j)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(b,T,j)=>T in b?__defProp(b,T,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[T]=j,__spreadValues=(b,T)=>{for(var j in T||(T={}))__hasOwnProp.call(T,j)&&__defNormalProp(b,j,T[j]);if(__getOwnPropSymbols)for(var j of __getOwnPropSymbols(T))__propIsEnum.call(T,j)&&__defNormalProp(b,j,T[j]);return b};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const badge="",t$2=({type:b="info",text:T="",vertical:j="top",color:ie},{slots:le})=>{var de;return h$5("span",{class:["badge",b,{diy:ie}],style:{verticalAlign:j,...ie?{backgroundColor:ie}:{}}},T||((de=le.default)==null?void 0:de.call(le)))};t$2.displayName="Badge";const fontIcon="";var s$2=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(b){const T=computed(()=>{const j={};return b.color&&(j.color=b.color),b.size&&(j["font-size"]=Number.isNaN(Number(b.size))?b.size:`${b.size}px`),Object.keys(j).length?j:null});return()=>b.icon?h$5("span",{class:["font-icon icon",`iconfont icon-${b.icon}`],style:T.value}):null}}),u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(b,T){for(var j=new u16(31),ie=0;ie<31;++ie)j[ie]=T+=1<<b[ie-1];for(var le=new u32(j[30]),ie=1;ie<30;++ie)for(var de=j[ie];de<j[ie+1];++de)le[de]=de-j[ie]<<5|ie;return[j,le]},_a=freb(fleb,2),fl=_a[0],revfl=_a[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$3=0;i$3<32768;++i$3){var x$1=(i$3&43690)>>>1|(i$3&21845)<<1;x$1=(x$1&52428)>>>2|(x$1&13107)<<2,x$1=(x$1&61680)>>>4|(x$1&3855)<<4,rev[i$3]=((x$1&65280)>>>8|(x$1&255)<<8)>>>1}var hMap=function(b,T,j){for(var ie=b.length,le=0,de=new u16(T);le<ie;++le)b[le]&&++de[b[le]-1];var ce=new u16(T);for(le=0;le<T;++le)ce[le]=ce[le-1]+de[le-1]<<1;var ve;if(j){ve=new u16(1<<T);var ue=15-T;for(le=0;le<ie;++le)if(b[le])for(var me=le<<4|b[le],pe=T-b[le],be=ce[b[le]-1]++<<pe,he=be|(1<<pe)-1;be<=he;++be)ve[rev[be]>>>ue]=me}else for(ve=new u16(ie),le=0;le<ie;++le)b[le]&&(ve[le]=rev[ce[b[le]-1]++]>>>15-b[le]);return ve},flt=new u8(288);for(var i$3=0;i$3<144;++i$3)flt[i$3]=8;for(var i$3=144;i$3<256;++i$3)flt[i$3]=9;for(var i$3=256;i$3<280;++i$3)flt[i$3]=7;for(var i$3=280;i$3<288;++i$3)flt[i$3]=8;var fdt=new u8(32);for(var i$3=0;i$3<32;++i$3)fdt[i$3]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(b){for(var T=b[0],j=1;j<b.length;++j)b[j]>T&&(T=b[j]);return T},bits=function(b,T,j){var ie=T/8|0;return(b[ie]|b[ie+1]<<8)>>(T&7)&j},bits16=function(b,T){var j=T/8|0;return(b[j]|b[j+1]<<8|b[j+2]<<16)>>(T&7)},shft=function(b){return(b+7)/8|0},slc=function(b,T,j){(T==null||T<0)&&(T=0),(j==null||j>b.length)&&(j=b.length);var ie=new(b.BYTES_PER_ELEMENT==2?u16:b.BYTES_PER_ELEMENT==4?u32:u8)(j-T);return ie.set(b.subarray(T,j)),ie},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(b,T,j){var ie=new Error(T||ec[b]);if(ie.code=b,Error.captureStackTrace&&Error.captureStackTrace(ie,err),!j)throw ie;return ie},inflt=function(b,T,j){var ie=b.length;if(!ie||j&&j.f&&!j.l)return T||new u8(0);var le=!T||j,de=!j||j.i;j||(j={}),T||(T=new u8(ie*3));var ce=function(We){var Ze=T.length;if(We>Ze){var Ge=new u8(Math.max(Ze*2,We));Ge.set(T),T=Ge}},ve=j.f||0,ue=j.p||0,me=j.b||0,pe=j.l,be=j.d,he=j.m,fe=j.n,ye=ie*8;do{if(!pe){ve=bits(b,ue,1);var _e=bits(b,ue+1,3);if(ue+=3,_e)if(_e==1)pe=flrm,be=fdrm,he=9,fe=5;else if(_e==2){var $e=bits(b,ue,31)+257,De=bits(b,ue+10,15)+4,Ce=$e+bits(b,ue+5,31)+1;ue+=14;for(var Te=new u8(Ce),ke=new u8(19),Ie=0;Ie<De;++Ie)ke[clim[Ie]]=bits(b,ue+Ie*3,7);ue+=De*3;for(var xe=max(ke),Re=(1<<xe)-1,He=hMap(ke,xe,1),Ie=0;Ie<Ce;){var Je=He[bits(b,ue,Re)];ue+=Je&15;var Ee=Je>>>4;if(Ee<16)Te[Ie++]=Ee;else{var Be=0,Le=0;for(Ee==16?(Le=3+bits(b,ue,3),ue+=2,Be=Te[Ie-1]):Ee==17?(Le=3+bits(b,ue,7),ue+=3):Ee==18&&(Le=11+bits(b,ue,127),ue+=7);Le--;)Te[Ie++]=Be}}var we=Te.subarray(0,$e),Se=Te.subarray($e);he=max(we),fe=max(Se),pe=hMap(we,he,1),be=hMap(Se,fe,1)}else err(1);else{var Ee=shft(ue)+4,Ae=b[Ee-4]|b[Ee-3]<<8,ge=Ee+Ae;if(ge>ie){de&&err(0);break}le&&ce(me+Ae),T.set(b.subarray(Ee,ge),me),j.b=me+=Ae,j.p=ue=ge*8,j.f=ve;continue}if(ue>ye){de&&err(0);break}}le&&ce(me+131072);for(var Pe=(1<<he)-1,Me=(1<<fe)-1,Oe=ue;;Oe=ue){var Be=pe[bits16(b,ue)&Pe],je=Be>>>4;if(ue+=Be&15,ue>ye){de&&err(0);break}if(Be||err(2),je<256)T[me++]=je;else if(je==256){Oe=ue,pe=null;break}else{var Ve=je-254;if(je>264){var Ie=je-257,Fe=fleb[Ie];Ve=bits(b,ue,(1<<Fe)-1)+fl[Ie],ue+=Fe}var ze=be[bits16(b,ue)&Me],qe=ze>>>4;ze||err(3),ue+=ze&15;var Se=fd[qe];if(qe>3){var Fe=fdeb[qe];Se+=bits16(b,ue)&(1<<Fe)-1,ue+=Fe}if(ue>ye){de&&err(0);break}le&&ce(me+131072);for(var Ue=me+Ve;me<Ue;me+=4)T[me]=T[me-Se],T[me+1]=T[me+1-Se],T[me+2]=T[me+2-Se],T[me+3]=T[me+3-Se];me=Ue}}j.l=pe,j.p=Oe,j.b=me,j.f=ve,pe&&(ve=1,j.m=he,j.d=be,j.n=fe)}while(!ve);return me==T.length?T:slc(T,0,me)},et$1=new u8(0),zlv=function(b){((b[0]&15)!=8||b[0]>>>4>7||(b[0]<<8|b[1])%31)&&err(6,"invalid zlib data"),b[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(b,T){return inflt((zlv(b),b.subarray(2,-4)),T)}var te$1=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et$1,{stream:!0}),tds=1}catch{}var dutf8=function(b){for(var T="",j=0;;){var ie=b[j++],le=(ie>127)+(ie>223)+(ie>239);if(j+le>b.length)return[T,slc(b,j-1)];le?le==3?(ie=((ie&15)<<18|(b[j++]&63)<<12|(b[j++]&63)<<6|b[j++]&63)-65536,T+=String.fromCharCode(55296|ie>>10,56320|ie&1023)):le&1?T+=String.fromCharCode((ie&31)<<6|b[j++]&63):T+=String.fromCharCode((ie&15)<<12|(b[j++]&63)<<6|b[j++]&63):T+=String.fromCharCode(ie)}};function strToU8(b,T){if(T){for(var j=new u8(b.length),ie=0;ie<b.length;++ie)j[ie]=b.charCodeAt(ie);return j}if(te$1)return te$1.encode(b);for(var le=b.length,de=new u8(b.length+(b.length>>1)),ce=0,ve=function(pe){de[ce++]=pe},ie=0;ie<le;++ie){if(ce+5>de.length){var ue=new u8(ce+8+(le-ie<<1));ue.set(de),de=ue}var me=b.charCodeAt(ie);me<128||T?ve(me):me<2048?(ve(192|me>>6),ve(128|me&63)):me>55295&&me<57344?(me=65536+(me&1023<<10)|b.charCodeAt(++ie)&1023,ve(240|me>>18),ve(128|me>>12&63),ve(128|me>>6&63),ve(128|me&63)):(ve(224|me>>12),ve(128|me>>6&63),ve(128|me&63))}return slc(de,0,ce)}function strFromU8(b,T){if(T){for(var j="",ie=0;ie<b.length;ie+=16384)j+=String.fromCharCode.apply(null,b.subarray(ie,ie+16384));return j}else{if(td)return td.decode(b);var le=dutf8(b),de=le[0],ce=le[1];return ce.length&&err(8),de}}const ct=({name:b="",color:T="currentColor"},{slots:j})=>{var ie;return h$5("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${b}-icon`],viewBox:"0 0 1024 1024",fill:T,"aria-label":`${b} icon`},(ie=j.default)==null?void 0:ie.call(j))};ct.displayName="IconBase";const wt=(b,{slots:T})=>{var j;return((j=T.default)==null?void 0:j.call(T))||null},St=b=>{const T=getCurrentInstance();return typeof(T==null?void 0:T.appContext.components)=="object"&&(b in T.appContext.components||camelize(b)in T.appContext.components||capitalize(camelize(b))in T.appContext.components)},Mt=b=>{const T=useRouteLocale();return computed(()=>b[T.value])},Ot=b=>/\b(?:Android|iPhone)/i.test(b),Ut=(b,T)=>{let j=1;for(let ie=0;ie<b.length;ie++)j+=b.charCodeAt(ie),j+=j<<10,j^=j>>6;return j+=j<<3,j^=j>>11,j%T};class kt{constructor(){this.messageElements={};const T="message-container",j=document.getElementById(T);j?this.containerElement=j:(this.containerElement=document.createElement("div"),this.containerElement.id=T,document.body.appendChild(this.containerElement))}pop(T,j=2e3){const ie=document.createElement("div"),le=Date.now();return ie.className="message move-in",ie.innerHTML=T,this.containerElement.appendChild(ie),this.messageElements[le]=ie,j>0&&setTimeout(()=>{this.close(le)},j),le}close(T){if(T){const j=this.messageElements[T];j.className=j.className.replace("move-in",""),j.className+="move-out",j.addEventListener("animationend",()=>{j.remove(),delete this.messageElements[T]})}else Object.keys(this.messageElements).forEach(j=>this.close(Number(j)))}destroy(){document.body.removeChild(this.containerElement)}}const ft=/#.*$/u,ht=b=>{const T=ft.exec(b);return T?T[0]:""},G$1=b=>decodeURI(b).replace(ft,"").replace(/(index)?\.(md|html)$/,""),Ht=(b,T)=>{if(T===void 0)return!1;const j=G$1(b.path),ie=G$1(T),le=ht(T);return le?le===b.hash&&(!ie||j===ie):j===ie},Lt=b=>{const T=atob(b);return strFromU8(unzlibSync(strToU8(T,!0)))},lt=(b,...T)=>{const j=b.resolve(...T),ie=j.matched[j.matched.length-1];if(!(ie!=null&&ie.redirect))return j;const{redirect:le}=ie,de=isFunction$1(le)?le(j):le,ce=isString$1(de)?{path:de}:de;return lt(b,{hash:j.hash,query:j.query,params:j.params,...ce})};var J$2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q$1={},Nt={get exports(){return Q$1},set exports(b){Q$1=b}};(function(b,T){(function(j,ie){b.exports=ie()})(J$2,function(){var j=1e3,ie=6e4,le=36e5,de="millisecond",ce="second",ve="minute",ue="hour",me="day",pe="week",be="month",he="quarter",fe="year",ye="date",_e="Invalid Date",Ee=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Ae=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ge={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Be){var Le=["th","st","nd","rd"],we=Be%100;return"["+Be+(Le[(we-20)%10]||Le[we]||Le[0])+"]"}},$e=function(Be,Le,we){var Se=String(Be);return!Se||Se.length>=Le?Be:""+Array(Le+1-Se.length).join(we)+Be},De={s:$e,z:function(Be){var Le=-Be.utcOffset(),we=Math.abs(Le),Se=Math.floor(we/60),Pe=we%60;return(Le<=0?"+":"-")+$e(Se,2,"0")+":"+$e(Pe,2,"0")},m:function Be(Le,we){if(Le.date()<we.date())return-Be(we,Le);var Se=12*(we.year()-Le.year())+(we.month()-Le.month()),Pe=Le.clone().add(Se,be),Me=we-Pe<0,Oe=Le.clone().add(Se+(Me?-1:1),be);return+(-(Se+(we-Pe)/(Me?Pe-Oe:Oe-Pe))||0)},a:function(Be){return Be<0?Math.ceil(Be)||0:Math.floor(Be)},p:function(Be){return{M:be,y:fe,w:pe,d:me,D:ye,h:ue,m:ve,s:ce,ms:de,Q:he}[Be]||String(Be||"").toLowerCase().replace(/s$/,"")},u:function(Be){return Be===void 0}},Ce="en",Te={};Te[Ce]=ge;var ke=function(Be){return Be instanceof He},Ie=function Be(Le,we,Se){var Pe;if(!Le)return Ce;if(typeof Le=="string"){var Me=Le.toLowerCase();Te[Me]&&(Pe=Me),we&&(Te[Me]=we,Pe=Me);var Oe=Le.split("-");if(!Pe&&Oe.length>1)return Be(Oe[0])}else{var je=Le.name;Te[je]=Le,Pe=je}return!Se&&Pe&&(Ce=Pe),Pe||!Se&&Ce},xe=function(Be,Le){if(ke(Be))return Be.clone();var we=typeof Le=="object"?Le:{};return we.date=Be,we.args=arguments,new He(we)},Re=De;Re.l=Ie,Re.i=ke,Re.w=function(Be,Le){return xe(Be,{locale:Le.$L,utc:Le.$u,x:Le.$x,$offset:Le.$offset})};var He=function(){function Be(we){this.$L=Ie(we.locale,null,!0),this.parse(we)}var Le=Be.prototype;return Le.parse=function(we){this.$d=function(Se){var Pe=Se.date,Me=Se.utc;if(Pe===null)return new Date(NaN);if(Re.u(Pe))return new Date;if(Pe instanceof Date)return new Date(Pe);if(typeof Pe=="string"&&!/Z$/i.test(Pe)){var Oe=Pe.match(Ee);if(Oe){var je=Oe[2]-1||0,Ve=(Oe[7]||"0").substring(0,3);return Me?new Date(Date.UTC(Oe[1],je,Oe[3]||1,Oe[4]||0,Oe[5]||0,Oe[6]||0,Ve)):new Date(Oe[1],je,Oe[3]||1,Oe[4]||0,Oe[5]||0,Oe[6]||0,Ve)}}return new Date(Pe)}(we),this.$x=we.x||{},this.init()},Le.init=function(){var we=this.$d;this.$y=we.getFullYear(),this.$M=we.getMonth(),this.$D=we.getDate(),this.$W=we.getDay(),this.$H=we.getHours(),this.$m=we.getMinutes(),this.$s=we.getSeconds(),this.$ms=we.getMilliseconds()},Le.$utils=function(){return Re},Le.isValid=function(){return this.$d.toString()!==_e},Le.isSame=function(we,Se){var Pe=xe(we);return this.startOf(Se)<=Pe&&Pe<=this.endOf(Se)},Le.isAfter=function(we,Se){return xe(we)<this.startOf(Se)},Le.isBefore=function(we,Se){return this.endOf(Se)<xe(we)},Le.$g=function(we,Se,Pe){return Re.u(we)?this[Se]:this.set(Pe,we)},Le.unix=function(){return Math.floor(this.valueOf()/1e3)},Le.valueOf=function(){return this.$d.getTime()},Le.startOf=function(we,Se){var Pe=this,Me=!!Re.u(Se)||Se,Oe=Re.p(we),je=function(Ge,Ne){var Ye=Re.w(Pe.$u?Date.UTC(Pe.$y,Ne,Ge):new Date(Pe.$y,Ne,Ge),Pe);return Me?Ye:Ye.endOf(me)},Ve=function(Ge,Ne){return Re.w(Pe.toDate()[Ge].apply(Pe.toDate("s"),(Me?[0,0,0,0]:[23,59,59,999]).slice(Ne)),Pe)},Fe=this.$W,ze=this.$M,qe=this.$D,Ue="set"+(this.$u?"UTC":"");switch(Oe){case fe:return Me?je(1,0):je(31,11);case be:return Me?je(1,ze):je(0,ze+1);case pe:var We=this.$locale().weekStart||0,Ze=(Fe<We?Fe+7:Fe)-We;return je(Me?qe-Ze:qe+(6-Ze),ze);case me:case ye:return Ve(Ue+"Hours",0);case ue:return Ve(Ue+"Minutes",1);case ve:return Ve(Ue+"Seconds",2);case ce:return Ve(Ue+"Milliseconds",3);default:return this.clone()}},Le.endOf=function(we){return this.startOf(we,!1)},Le.$set=function(we,Se){var Pe,Me=Re.p(we),Oe="set"+(this.$u?"UTC":""),je=(Pe={},Pe[me]=Oe+"Date",Pe[ye]=Oe+"Date",Pe[be]=Oe+"Month",Pe[fe]=Oe+"FullYear",Pe[ue]=Oe+"Hours",Pe[ve]=Oe+"Minutes",Pe[ce]=Oe+"Seconds",Pe[de]=Oe+"Milliseconds",Pe)[Me],Ve=Me===me?this.$D+(Se-this.$W):Se;if(Me===be||Me===fe){var Fe=this.clone().set(ye,1);Fe.$d[je](Ve),Fe.init(),this.$d=Fe.set(ye,Math.min(this.$D,Fe.daysInMonth())).$d}else je&&this.$d[je](Ve);return this.init(),this},Le.set=function(we,Se){return this.clone().$set(we,Se)},Le.get=function(we){return this[Re.p(we)]()},Le.add=function(we,Se){var Pe,Me=this;we=Number(we);var Oe=Re.p(Se),je=function(ze){var qe=xe(Me);return Re.w(qe.date(qe.date()+Math.round(ze*we)),Me)};if(Oe===be)return this.set(be,this.$M+we);if(Oe===fe)return this.set(fe,this.$y+we);if(Oe===me)return je(1);if(Oe===pe)return je(7);var Ve=(Pe={},Pe[ve]=ie,Pe[ue]=le,Pe[ce]=j,Pe)[Oe]||1,Fe=this.$d.getTime()+we*Ve;return Re.w(Fe,this)},Le.subtract=function(we,Se){return this.add(-1*we,Se)},Le.format=function(we){var Se=this,Pe=this.$locale();if(!this.isValid())return Pe.invalidDate||_e;var Me=we||"YYYY-MM-DDTHH:mm:ssZ",Oe=Re.z(this),je=this.$H,Ve=this.$m,Fe=this.$M,ze=Pe.weekdays,qe=Pe.months,Ue=function(Ne,Ye,Ke,Qe){return Ne&&(Ne[Ye]||Ne(Se,Me))||Ke[Ye].slice(0,Qe)},We=function(Ne){return Re.s(je%12||12,Ne,"0")},Ze=Pe.meridiem||function(Ne,Ye,Ke){var Qe=Ne<12?"AM":"PM";return Ke?Qe.toLowerCase():Qe},Ge={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Fe+1,MM:Re.s(Fe+1,2,"0"),MMM:Ue(Pe.monthsShort,Fe,qe,3),MMMM:Ue(qe,Fe),D:this.$D,DD:Re.s(this.$D,2,"0"),d:String(this.$W),dd:Ue(Pe.weekdaysMin,this.$W,ze,2),ddd:Ue(Pe.weekdaysShort,this.$W,ze,3),dddd:ze[this.$W],H:String(je),HH:Re.s(je,2,"0"),h:We(1),hh:We(2),a:Ze(je,Ve,!0),A:Ze(je,Ve,!1),m:String(Ve),mm:Re.s(Ve,2,"0"),s:String(this.$s),ss:Re.s(this.$s,2,"0"),SSS:Re.s(this.$ms,3,"0"),Z:Oe};return Me.replace(Ae,function(Ne,Ye){return Ye||Ge[Ne]||Oe.replace(":","")})},Le.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},Le.diff=function(we,Se,Pe){var Me,Oe=Re.p(Se),je=xe(we),Ve=(je.utcOffset()-this.utcOffset())*ie,Fe=this-je,ze=Re.m(this,je);return ze=(Me={},Me[fe]=ze/12,Me[be]=ze,Me[he]=ze/3,Me[pe]=(Fe-Ve)/6048e5,Me[me]=(Fe-Ve)/864e5,Me[ue]=Fe/le,Me[ve]=Fe/ie,Me[ce]=Fe/j,Me)[Oe]||Fe,Pe?ze:Re.a(ze)},Le.daysInMonth=function(){return this.endOf(be).$D},Le.$locale=function(){return Te[this.$L]},Le.locale=function(we,Se){if(!we)return this.$L;var Pe=this.clone(),Me=Ie(we,Se,!0);return Me&&(Pe.$L=Me),Pe},Le.clone=function(){return Re.w(this.$d,this)},Le.toDate=function(){return new Date(this.valueOf())},Le.toJSON=function(){return this.isValid()?this.toISOString():null},Le.toISOString=function(){return this.$d.toISOString()},Le.toString=function(){return this.$d.toUTCString()},Be}(),Je=He.prototype;return xe.prototype=Je,[["$ms",de],["$s",ce],["$m",ve],["$H",ue],["$W",me],["$M",be],["$y",fe],["$D",ye]].forEach(function(Be){Je[Be[1]]=function(Le){return this.$g(Le,Be[0],Be[1])}}),xe.extend=function(Be,Le){return Be.$i||(Be(Le,He,xe),Be.$i=!0),xe},xe.locale=Ie,xe.isDayjs=ke,xe.unix=function(Be){return xe(1e3*Be)},xe.en=Te[Ce],xe.Ls=Te,xe.p={},xe})})(Nt);var F$3=Q$1,K$1={},Wt={get exports(){return K$1},set exports(b){K$1=b}};(function(b,T){(function(j,ie){b.exports=ie()})(J$2,function(){return function(j,ie,le){var de=ie.prototype,ce=function(he){var fe,ye=he.date,_e=he.utc,Ee={};if(!((fe=ye)instanceof Date||fe instanceof Array||de.$utils().u(fe)||fe.constructor.name!=="Object")){if(!Object.keys(ye).length)return new Date;var Ae=_e?le.utc():le();Object.keys(ye).forEach(function(xe){var Re,He;Ee[Re=xe,He=de.$utils().p(Re),He==="date"?"day":He]=ye[xe]});var ge=Ee.day||(Ee.year||Ee.month>=0?1:Ae.date()),$e=Ee.year||Ae.year(),De=Ee.month>=0?Ee.month:Ee.year||Ee.day?0:Ae.month(),Ce=Ee.hour||0,Te=Ee.minute||0,ke=Ee.second||0,Ie=Ee.millisecond||0;return _e?new Date(Date.UTC($e,De,ge,Ce,Te,ke,Ie)):new Date($e,De,ge,Ce,Te,ke,Ie)}return ye},ve=de.parse;de.parse=function(he){he.date=ce.bind(this)(he),ve.bind(this)(he)};var ue=de.set,me=de.add,pe=de.subtract,be=function(he,fe,ye,_e){_e===void 0&&(_e=1);var Ee=Object.keys(fe),Ae=this;return Ee.forEach(function(ge){Ae=he.bind(Ae)(fe[ge]*_e,ge)}),Ae};de.set=function(he,fe){return fe=fe===void 0?he:fe,he.constructor.name==="Object"?be.bind(this)(function(ye,_e){return ue.bind(this)(_e,ye)},fe,he):ue.bind(this)(he,fe)},de.add=function(he,fe){return he.constructor.name==="Object"?be.bind(this)(me,he,fe):me.bind(this)(he,fe)},de.subtract=function(he,fe){return he.constructor.name==="Object"?be.bind(this)(me,he,fe,-1):pe.bind(this)(he,fe)}}})})(Wt);var Zt=K$1,X$1={},Ft={get exports(){return X$1},set exports(b){X$1=b}};(function(b,T){(function(j,ie){b.exports=ie()})(J$2,function(){var j={year:0,month:1,day:2,hour:3,minute:4,second:5},ie={};return function(le,de,ce){var ve,ue=function(he,fe,ye){ye===void 0&&(ye={});var _e=new Date(he),Ee=function(Ae,ge){ge===void 0&&(ge={});var $e=ge.timeZoneName||"short",De=Ae+"|"+$e,Ce=ie[De];return Ce||(Ce=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:Ae,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:$e}),ie[De]=Ce),Ce}(fe,ye);return Ee.formatToParts(_e)},me=function(he,fe){for(var ye=ue(he,fe),_e=[],Ee=0;Ee<ye.length;Ee+=1){var Ae=ye[Ee],ge=Ae.type,$e=Ae.value,De=j[ge];De>=0&&(_e[De]=parseInt($e,10))}var Ce=_e[3],Te=Ce===24?0:Ce,ke=_e[0]+"-"+_e[1]+"-"+_e[2]+" "+Te+":"+_e[4]+":"+_e[5]+":000",Ie=+he;return(ce.utc(ke).valueOf()-(Ie-=Ie%1e3))/6e4},pe=de.prototype;pe.tz=function(he,fe){he===void 0&&(he=ve);var ye=this.utcOffset(),_e=this.toDate(),Ee=_e.toLocaleString("en-US",{timeZone:he}),Ae=Math.round((_e-new Date(Ee))/1e3/60),ge=ce(Ee).$set("millisecond",this.$ms).utcOffset(15*-Math.round(_e.getTimezoneOffset()/15)-Ae,!0);if(fe){var $e=ge.utcOffset();ge=ge.add(ye-$e,"minute")}return ge.$x.$timezone=he,ge},pe.offsetName=function(he){var fe=this.$x.$timezone||ce.tz.guess(),ye=ue(this.valueOf(),fe,{timeZoneName:he}).find(function(_e){return _e.type.toLowerCase()==="timezonename"});return ye&&ye.value};var be=pe.startOf;pe.startOf=function(he,fe){if(!this.$x||!this.$x.$timezone)return be.call(this,he,fe);var ye=ce(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return be.call(ye,he,fe).tz(this.$x.$timezone,!0)},ce.tz=function(he,fe,ye){var _e=ye&&fe,Ee=ye||fe||ve,Ae=me(+ce(),Ee);if(typeof he!="string")return ce(he).tz(Ee);var ge=function(Te,ke,Ie){var xe=Te-60*ke*1e3,Re=me(xe,Ie);if(ke===Re)return[xe,ke];var He=me(xe-=60*(Re-ke)*1e3,Ie);return Re===He?[xe,Re]:[Te-60*Math.min(Re,He)*1e3,Math.max(Re,He)]}(ce.utc(he,_e).valueOf(),Ae,Ee),$e=ge[0],De=ge[1],Ce=ce($e).utcOffset(De);return Ce.$x.$timezone=Ee,Ce},ce.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},ce.tz.setDefault=function(he){ve=he}}})})(Ft);var Pt=X$1,tt={},Rt={get exports(){return tt},set exports(b){tt=b}};(function(b,T){(function(j,ie){b.exports=ie()})(J$2,function(){var j="minute",ie=/[+-]\d\d(?::?\d\d)?/g,le=/([+-]|\d\d)/g;return function(de,ce,ve){var ue=ce.prototype;ve.utc=function(_e){var Ee={date:_e,utc:!0,args:arguments};return new ce(Ee)},ue.utc=function(_e){var Ee=ve(this.toDate(),{locale:this.$L,utc:!0});return _e?Ee.add(this.utcOffset(),j):Ee},ue.local=function(){return ve(this.toDate(),{locale:this.$L,utc:!1})};var me=ue.parse;ue.parse=function(_e){_e.utc&&(this.$u=!0),this.$utils().u(_e.$offset)||(this.$offset=_e.$offset),me.call(this,_e)};var pe=ue.init;ue.init=function(){if(this.$u){var _e=this.$d;this.$y=_e.getUTCFullYear(),this.$M=_e.getUTCMonth(),this.$D=_e.getUTCDate(),this.$W=_e.getUTCDay(),this.$H=_e.getUTCHours(),this.$m=_e.getUTCMinutes(),this.$s=_e.getUTCSeconds(),this.$ms=_e.getUTCMilliseconds()}else pe.call(this)};var be=ue.utcOffset;ue.utcOffset=function(_e,Ee){var Ae=this.$utils().u;if(Ae(_e))return this.$u?0:Ae(this.$offset)?be.call(this):this.$offset;if(typeof _e=="string"&&(_e=function(Ce){Ce===void 0&&(Ce="");var Te=Ce.match(ie);if(!Te)return null;var ke=(""+Te[0]).match(le)||["-",0,0],Ie=ke[0],xe=60*+ke[1]+ +ke[2];return xe===0?0:Ie==="+"?xe:-xe}(_e),_e===null))return this;var ge=Math.abs(_e)<=16?60*_e:_e,$e=this;if(Ee)return $e.$offset=ge,$e.$u=_e===0,$e;if(_e!==0){var De=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();($e=this.local().add(ge+De,j)).$offset=ge,$e.$x.$localOffset=De}else $e=this.utc();return $e};var he=ue.format;ue.format=function(_e){var Ee=_e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return he.call(this,Ee)},ue.valueOf=function(){var _e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*_e},ue.isUTC=function(){return!!this.$u},ue.toISOString=function(){return this.toDate().toISOString()},ue.toString=function(){return this.toDate().toUTCString()};var fe=ue.toDate;ue.toDate=function(_e){return _e==="s"&&this.$offset?ve(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():fe.call(this)};var ye=ue.diff;ue.diff=function(_e,Ee,Ae){if(_e&&this.$u===_e.$u)return ye.call(this,_e,Ee,Ae);var ge=this.local(),$e=ve(_e).local();return ye.call(ge,$e,Ee,Ae)}}})})(Rt);var Bt=tt;F$3.extend(Zt),F$3.extend(Bt),F$3.extend(Pt);const et=(b,T)=>{if(b){if(F$3(b instanceof Date?b:b.trim()).isValid()){const ie=T?F$3(b).tz(T):F$3(b),le=ie.year(),de=ie.month()+1,ce=ie.date(),ve=ie.hour(),ue=ie.minute(),me=ie.second(),pe=ie.millisecond(),be=ve===0&&ue===0&&me===0&&pe===0;return{value:ie.toDate(),info:{year:le,month:de,day:ce,...be?{}:{hour:ve,minute:ue,second:me}},type:be?"date":"full"}}const j=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(b.trim());if(j){const[,ie,le,de,ce,ve,ue]=j,me=Ee=>typeof Ee>"u"?void 0:Number(Ee),pe=Ee=>Ee&&Ee<100?Ee+2e3:Ee,be=Ee=>ce&&ve&&!ue?0:Ee,he={year:pe(me(ie)),month:me(le),day:me(de),hour:me(ce),minute:me(ve),second:be(me(ue))},fe=ie===void 0&&le===void 0&&de===void 0,ye=ce===void 0&&ve===void 0&&ue===void 0,_e=F$3({...he,month:he.month-1}).toDate();return{value:fe?void 0:_e,info:ye?{year:he.year,month:he.month,day:he.day}:fe?{hour:he.hour,minute:he.minute,second:he.second}:he,type:fe?"time":ye?"date":"full"}}}return null},nt=(b,...T)=>{if(T.length===0)return b;const j=T.shift()||{};return Object.keys(j).forEach(ie=>{typeof b[ie]=="object"&&!Array.isArray(b[ie])&&typeof j[ie]=="object"&&!Array.isArray(j[ie])?nt(b[ie],j[ie]):typeof j[ie]=="object"?Array.isArray(j[ie])?b[ie]=[...j[ie]]:b[ie]={...j[ie]}:b[ie]=j[ie]}),nt(b,...T)},Jt=(b,T=!1)=>b?Array.isArray(b)?b.map(j=>typeof j=="string"?{name:j}:j):typeof b=="string"?[{name:b}]:typeof b=="object"&&b.name?[b]:(console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${T?"":"| false"} | undefined\`, but got`,b),[]):[],rt=(b,T)=>{if(b){if(Array.isArray(b))return b;if(typeof b=="string")return[b];console.error(`Expect ${T||"value"} to be \`string[] | string | undefined\`, but got`,b)}return[]},qt=b=>rt(b,"category"),Gt=b=>rt(b,"tag"),backToTop="",a$2=()=>h$5(ct,{name:"back-to-top"},()=>[h$5("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$5("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$2.displayName="BackToTopIcon";var h$4=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(b){const T=usePageFrontmatter(),j=Mt({"/en":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}}),ie=ref(0),le=computed(()=>T.value.backToTop!==!1&&ie.value>b.threshold),de=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{ie.value=de()}),useEventListener("scroll",useDebounceFn(()=>{ie.value=de()},100)),()=>h$5(Transition,{name:"fade"},()=>le.value?h$5("button",{class:"back-to-top","aria-label":j.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),ie.value=0}},h$5(a$2)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:b})=>{b.component("Badge",t$2),b.component("FontIcon",s$2)},setup:()=>{useStyleTag('@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");',{id:"icon-assets"})},rootComponents:[()=>h$5(h$4,{threshold:300})]});function r$3(b,T,j){var ie,le,de;T===void 0&&(T=50),j===void 0&&(j={});var ce=(ie=j.isImmediate)!=null&&ie,ve=(le=j.callback)!=null&&le,ue=j.maxWait,me=Date.now(),pe=[];function be(){if(ue!==void 0){var fe=Date.now()-me;if(fe+T>=ue)return ue-fe}return T}var he=function(){var fe=[].slice.call(arguments),ye=this;return new Promise(function(_e,Ee){var Ae=ce&&de===void 0;if(de!==void 0&&clearTimeout(de),de=setTimeout(function(){if(de=void 0,me=Date.now(),!ce){var $e=b.apply(ye,fe);ve&&ve($e),pe.forEach(function(De){return(0,De.resolve)($e)}),pe=[]}},be()),Ae){var ge=b.apply(ye,fe);return ve&&ve(ge),_e(ge)}pe.push({resolve:_e,reject:Ee})})};return he.cancel=function(fe){de!==void 0&&clearTimeout(de),pe.forEach(function(ye){return(0,ye.reject)(fe)}),pe=[]},he}const useActiveHeaderLinks=({headerLinkSelector:b,headerAnchorSelector:T,delay:j,offset:ie=5})=>{const le=useRouter(),ce=r$3(()=>{var _e,Ee;const ve=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(ve-0)<ie){updateHash(le,"");return}const me=window.innerHeight+ve,pe=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),be=Math.abs(pe-me)<ie,he=Array.from(document.querySelectorAll(b)),ye=Array.from(document.querySelectorAll(T)).filter(Ae=>he.some(ge=>ge.hash===Ae.hash));for(let Ae=0;Ae<ye.length;Ae++){const ge=ye[Ae],$e=ye[Ae+1],De=ve>=(((_e=ge.parentElement)==null?void 0:_e.offsetTop)??0)-ie,Ce=!$e||ve<(((Ee=$e.parentElement)==null?void 0:Ee.offsetTop)??0)-ie;if(!(De&&Ce))continue;const ke=decodeURIComponent(le.currentRoute.value.hash),Ie=decodeURIComponent(ge.hash);if(ke===Ie)return;if(be){for(let xe=Ae+1;xe<ye.length;xe++)if(ke===decodeURIComponent(ye[xe].hash))return}updateHash(le,Ie);return}},j);onMounted(()=>{window.addEventListener("scroll",ce)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",ce)})},updateHash=async(b,T)=>{const{scrollBehavior:j}=b.options;b.options.scrollBehavior=void 0,await b.replace({query:b.currentRoute.value.query,hash:T,force:!0}).finally(()=>b.options.scrollBehavior=j)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),vars$1="",externalLinkIcon="",svg=h$5("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$5("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$5("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(b){const T=useRouteLocale(),j=computed(()=>b.locales[T.value]??{openInNewWindow:"open in new window"});return()=>h$5("span",[svg,h$5("span",{class:"external-link-icon-sr-only"},j.value.openInNewWindow)])}}),locales={},clientConfig3=defineClientConfig({enhance({app:b}){b.component("ExternalLinkIcon",h$5(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:b=>{const T=nprogress$1.isStarted();b=clamp(b,nprogress$1.settings.minimum,1),nprogress$1.status=b===1?null:b;const j=nprogress$1.render(!T),ie=j.querySelector(nprogress$1.settings.barSelector),le=nprogress$1.settings.speed,de=nprogress$1.settings.easing;return j.offsetWidth,queue(ce=>{css(ie,{transform:"translate3d("+toBarPerc(b)+"%,0,0)",transition:"all "+le+"ms "+de}),b===1?(css(j,{transition:"none",opacity:"1"}),j.offsetWidth,setTimeout(function(){css(j,{transition:"all "+le+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),ce()},le)},le)):setTimeout(()=>ce(),le)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const b=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),b())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&b(),nprogress$1},done:b=>!b&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:b=>{let T=nprogress$1.status;return T?(typeof b!="number"&&(b=(1-T)*clamp(Math.random()*T,.1,.95)),T=clamp(T+b,0,.994),nprogress$1.set(T)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:b=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const T=document.createElement("div");T.id="nprogress",T.innerHTML=nprogress$1.settings.template;const j=T.querySelector(nprogress$1.settings.barSelector),ie=b?"-100":toBarPerc(nprogress$1.status||0),le=document.querySelector(nprogress$1.settings.parent);return css(j,{transition:"all 0 linear",transform:"translate3d("+ie+"%,0,0)"}),le!==document.body&&addClass(le,"nprogress-custom-parent"),le==null||le.appendChild(T),T},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const b=document.getElementById("nprogress");b&&removeElement(b)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(b,T,j)=>b<T?T:b>j?j:b,toBarPerc=b=>(-1+b)*100,queue=function(){const b=[];function T(){const j=b.shift();j&&j(T)}return function(j){b.push(j),b.length===1&&T()}}(),css=function(){const b=["Webkit","O","Moz","ms"],T={};function j(ce){return ce.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(ve,ue){return ue.toUpperCase()})}function ie(ce){const ve=document.body.style;if(ce in ve)return ce;let ue=b.length;const me=ce.charAt(0).toUpperCase()+ce.slice(1);let pe;for(;ue--;)if(pe=b[ue]+me,pe in ve)return pe;return ce}function le(ce){return ce=j(ce),T[ce]||(T[ce]=ie(ce))}function de(ce,ve,ue){ve=le(ve),ce.style[ve]=ue}return function(ce,ve){for(const ue in ve){const me=ve[ue];me!==void 0&&Object.prototype.hasOwnProperty.call(ve,ue)&&de(ce,ue,me)}}}(),hasClass=(b,T)=>(typeof b=="string"?b:classList(b)).indexOf(" "+T+" ")>=0,addClass=(b,T)=>{const j=classList(b),ie=j+T;hasClass(j,T)||(b.className=ie.substring(1))},removeClass=(b,T)=>{const j=classList(b);if(!hasClass(b,T))return;const ie=j.replace(" "+T+" "," ");b.className=ie.substring(1,ie.length-1)},classList=b=>(" "+(b.className||"")+" ").replace(/\s+/gi," "),removeElement=b=>{b&&b.parentNode&&b.parentNode.removeChild(b)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const b=useRouter(),T=new Set;T.add(b.currentRoute.value.path),b.beforeEach(j=>{T.has(j.path)||nprogress$1.start()}),b.afterEach(j=>{T.add(j.path),nprogress$1.done()})})},clientConfig4=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse(`{"blog":{"medias":{"Gmail":"https://www.google.com.hk/","BiliBili":"https://www.bilibili.com/","GitHub":"https://github.com/anran919","Email":"https://163.com","张安然":"https://github.com/anran919"}},"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$Pz6tA0rEzW8pECf8CqZy8e5IcsDcVEpHUc6MWbgKpAJjc5rWSiVFq"],"/zh/demo/encrypt.html":["$2a$10$RkU0ruB2UwdG.JT2PBnRRuJPiJUTmXMjB.gN1lEdJJr5qmBaRaytC"]}},"pure":false,"darkmode":"switch","themeColor":false,"fullscreen":false,"locales":{"/en":{"blog":{},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":"structure","sidebarIcon":true,"headerDepth":2,"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"}},"/":{"blog":{"description":"一个前端开发者","intro":"/zh/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/":["",{"text":"如何使用","icon":"creative","prefix":"guide/","link":"guide/","children":"structure"},{"text":"文章","icon":"note","prefix":"posts/","children":"structure"},"intro","slides"]},"sidebarIcon":true,"headerDepth":2,"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"张安然","url":"https://github.com/anran919"},"logo":"/logo.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"docs","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/",{"text":"演示","icon":"discover","link":"/demo/"},{"text":"Java","icon":"java","prefix":"/posts/java/","children":[{"text":"Java设计模式","icon":"java","link":"Java设计模式"},{"text":"文件操作的工具类","icon":"java","link":"文件操作的工具类"},{"text":"设计模式-Builder模式","icon":"java","link":"设计模式-Builder模式"},{"text":"设计模式-代理模式","icon":"java","link":"设计模式-代理模式"},{"text":"设计模式-单例模式","icon":"java","link":"设计模式-单例模式"},{"text":"设计模式-工厂方法模式","icon":"java","link":"设计模式-工厂方法模式"},{"text":"设计模式-简单工厂模式","icon":"java","link":"设计模式-简单工厂模式"},{"text":"设计模式-桥接模式","icon":"java","link":"设计模式-桥接模式"},{"text":"设计模式-模版模式","icon":"java","link":"设计模式-模版模式"},{"text":"设计模式-观察者模式","icon":"java","link":"设计模式-观察者模式"},{"text":"读取XML中的配置参数","icon":"java","link":"读取XML中的配置参数"}]},{"text":"Python","icon":"python","prefix":"/posts/python/","children":[{"text":"自学Python-Python基础","icon":"python","link":"自学Python-Python基础"},{"text":"自学Python-Python基础二","icon":"python","link":"自学Python-Python基础二"},{"text":"自学Python-IO编程","icon":"python","link":"自学Python-IO编程"},{"text":"自学Python-函数","icon":"python","link":"自学Python-函数"},{"text":"自学Python-函数式编程","icon":"python","link":"自学Python-函数式编程"},{"text":"自学Python-常用内建模块","icon":"python","link":"自学Python-常用内建模块"},{"text":"自学Python-模块","icon":"python","link":"自学Python-模块"},{"text":"自学Python-正则表达式","icon":"python","link":"自学Python-正则表达式"},{"text":"自学Python-线程和进程","icon":"python","link":"自学Python-线程和进程"},{"text":"自学Python-面向对象编程","icon":"python","link":"自学Python-面向对象编程"},{"text":"自学Python-面向对象高级编程","icon":"python","link":"自学Python-面向对象高级编程"},{"text":"自学Python-高级特性","icon":"python","link":"自学Python-高级特性"}]},{"text":"博文","icon":"edit","prefix":"/posts/","children":[{"text":"Android","icon":"android","prefix":"android/","children":[{"text":"Android基础知识","icon":"android","link":"Android基础知识"},{"text":"Android日常记录","icon":"android","link":"Android日常记录"}]},{"text":"JavaScript","icon":"js","prefix":"js/","children":[{"text":"香蕉","icon":"edit","link":"1"}]},{"text":"Webpack","icon":"webpack","prefix":"webpack/","children":[{"text":"webpack5的常用配置示例","icon":"webpack5","link":"webpack5_base"}]},{"text":"数据库","icon":"sql","prefix":"sql/","children":[{"text":"MySQL学习记录","icon":"MySQL","link":"MySQL学习记录"}]},{"text":"怎样选择基金","icon":"edit","link":"怎样选择基金"}]},{"text":"V2 文档","icon":"note","link":"https://vuepress-theme-hope.github.io/v2/zh/"}],"footer":"默认页脚","displayFooter":true}}}`),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const b=inject(themeLocaleDataSymbol);if(!b)throw new Error("useThemeLocaleData() is called without provider.");return b},resolveThemeLocaleData=(b,T)=>{var j;return{...b,...(j=b.locales)==null?void 0:j[T]}},clientConfig5=defineClientConfig({enhance({app:b}){const T=useThemeData$1(),j=b._context.provides[routeLocaleSymbol],ie=computed(()=>resolveThemeLocaleData(T.value,j.value));b.provide(themeLocaleDataSymbol,ie),Object.defineProperties(b.config.globalProperties,{$theme:{get(){return T.value}},$themeLocale:{get(){return ie.value}}})}}),giscus="",e$2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"},k$5=Boolean(e$2.categoryId),i$2=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"];var P$3=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup(b){const T=usePageFrontmatter(),j=useRoute(),ie=ref(!1),le=computed(()=>{const ve=usePageLang().value;if(i$2.includes(ve))return ve;const ue=ve.split("-")[0];return i$2.includes(ue)?ue:"en"}),de=computed(()=>{if(!k$5)return!1;const ve=e$2.comment!==!1,ue=T.value.comment;return Boolean(ue)||ve!==!1&&ue!==!1}),ce=computed(()=>({repo:e$2.repo,repoId:e$2.repoId,category:e$2.category,categoryId:e$2.categoryId,lang:le.value,theme:b.darkmode?e$2.darkTheme:e$2.lightTheme,mapping:e$2.mapping||"pathname",term:withBase(j.path),inputPosition:e$2.inputPosition||"top",reactionsEnabled:e$2.reactionsEnabled!==!1?"1":"0",strict:e$2.strict!==!1?"1":"0",loading:e$2.lazyLoading!==!1?"lazy":"eager",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-cb5b3b13.js"),[]),ie.value=!0}),()=>h$5("div",{class:["giscus-wrapper",{"input-top":e$2.inputPosition!=="bottom"}],style:{display:de.value?"block":"none"}},ie.value?h$5("giscus-widget",ce.value):h$5("div",{style:"text-align:center"},"Loading..."))}});const l$2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"}.comment!==!1;var s$1=defineClientConfig({enhance:({app:b})=>{const T=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup(j){const ie=usePageFrontmatter(),le=computed(()=>ie.value.comment||l$2&&ie.value.comment!==!1);return()=>h$5(P$3,{darkmode:j.darkmode,style:{display:le.value?"block":"none"}})}});b.component("CommentService",T)}});const message="",balloon="",button="",O$3=500,A$1=2e3,L$1={"/en":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"},"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},d$3='.theme-hope-content div[class*="language-"] pre',g$3=!1,S$3=async b=>{try{return navigator.clipboard.writeText(b)}catch{const T=document.createElement("textarea"),j=document.activeElement;T.value=b,T.setAttribute("readonly",""),T.style.contain="strict",T.style.position="absolute",T.style.left="-9999px",T.style.fontSize="12pt";const ie=document.getSelection(),le=ie?ie.rangeCount>0&&ie.getRangeAt(0):null;document.body.appendChild(T),T.select(),T.selectionStart=0,T.selectionEnd=b.length,document.execCommand("copy"),document.body.removeChild(T),le&&(ie.removeAllRanges(),ie.addRange(le)),j&&j.focus()}},_$4='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',y$3=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$2=new Map,w$3=()=>{const b=useRoute(),T=Mt(L$1);let j;const ie=ce=>{if(!ce.hasAttribute("copy-code-registered")){const ve=document.createElement("button");ve.classList.add("copy-code-button"),ve.innerHTML='<div class="copy-icon" />',ve.setAttribute("aria-label",T.value.copy),ve.setAttribute("data-copied",T.value.copied),ve.setAttribute("data-balloon-pos","left"),ce.parentElement&&ce.parentElement.insertBefore(ve,ce),ce.setAttribute("copy-code-registered","")}},le=()=>{setTimeout(()=>{document.querySelectorAll(d$3).forEach(ie)},O$3)},de=(ce,ve,ue)=>{let{innerText:me=""}=ve;/language-(shellscript|shell|bash|sh|zsh)/.test(ce.classList.toString())&&(me=me.replace(/^ *(\$|>) /gm,"")),S$3(me).then(()=>{ue.classList.add("copied"),clearTimeout(p$2.get(ue));const pe=setTimeout(()=>{ue.classList.remove("copied"),ue.blur(),p$2.delete(ue)},2e3);p$2.set(ue,pe),j.pop(`${_$4}<span>${T.value.hint} 🎉</span>`,A$1)})};onMounted(()=>{j=new kt,(!y$3()||g$3)&&le(),window.addEventListener("click",ce=>{const ve=ce.target;if(ve.matches('div[class*="language-"] > button.copy')){const ue=ve.parentElement,me=ve.nextElementSibling;me&&de(ue,me,ve)}else if(ve.matches('div[class*="language-"] div.copy-icon')){const ue=ve.parentElement,me=ue.parentElement,pe=ue.nextElementSibling;pe&&de(me,pe,ue)}})}),watch(()=>b.path,()=>{(!y$3()||g$3)&&le()})};var P$2=defineClientConfig({setup:()=>{w$3()}});const chart="",LoadingIcon$1=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const T=ref(),j=ref(),ie=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-bcb4bc66.js"),[]),new Promise(le=>setTimeout(le,500))]).then(([{default:le}])=>{le.defaults.maintainAspectRatio=!1;const de=parseChartConfig(Lt(b.config),b.type),ce=j.value.getContext("2d");new le(ce,de),ie.value=!1})}),()=>[b.title?h$5("div",{class:"chart-title"},decodeURIComponent(b.title)):null,ie.value?h$5("div",{class:"chart-loading-wrapper"},h$5(LoadingIcon$1)):null,h$5("div",{ref:T,class:"chart-wrapper",id:b.id,style:{display:ie.value?"none":"block"}},h$5("canvas",{ref:j,height:400}))]}});const codeTabs="",o$2=useStorage("VUEPRESS_CODE_TAB_STORE",{});var h$3=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:T}){const j=ref((()=>{if(b.tabId){const ue=b.data.findIndex(({title:me,value:pe=me})=>o$2.value[b.tabId]===pe);if(ue!==-1)return ue}return b.active})()),ie=ref([]),le=()=>{if(b.tabId){const{title:ue,value:me=ue}=b.data[j.value];o$2.value[b.tabId]=me}},de=(ue=j.value)=>{j.value=ue<ie.value.length-1?ue+1:0,ie.value[j.value].focus()},ce=(ue=j.value)=>{j.value=ue>0?ue-1:ie.value.length-1,ie.value[j.value].focus()},ve=(ue,me)=>{if(ue.key===" "||ue.key==="Enter"?(ue.preventDefault(),j.value=me):ue.key==="ArrowRight"?(ue.preventDefault(),de()):ue.key==="ArrowLeft"&&(ue.preventDefault(),ce()),b.tabId){const{title:pe,value:be=pe}=b.data[j.value];o$2.value[b.tabId]=be}};return watch(()=>o$2.value[b.tabId],(ue,me)=>{if(b.tabId&&ue!==me){const pe=b.data.findIndex(({title:be,value:he=be})=>he===ue);pe!==-1&&(j.value=pe)}}),()=>h$5(ClientOnly,()=>b.data.length?h$5("div",{class:"code-tabs"},[h$5("div",{class:"code-tabs-nav",role:"tablist"},b.data.map(({title:ue},me)=>{const pe=me===j.value;return h$5("button",{ref:be=>{be&&(ie.value[me]=be)},class:["code-tabs-nav-tab",{active:pe}],role:"tab","aria-controls":`codetab-${b.id}-${me}`,"aria-selected":pe,onClick:()=>{j.value=me,le()},onKeydown:be=>ve(be,me)},ue)})),b.data.map(({title:ue,value:me=ue},pe)=>{var be;const he=pe===j.value;return h$5("div",{class:["code-tab",{active:he}],id:`codetab-${b.id}-${pe}`,role:"tabpanel","aria-expanded":he},(be=T[`tab${pe}`])==null?void 0:be.call(T,{title:ue,value:me,isActive:he}))})]):null)}});const index$2="",codeDemo="",M$2=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),O$2='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$2={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A=(b,T,j)=>{const ie=document.createElement(b);return T&&Object.keys(T).forEach(le=>{if(le.indexOf("data"))ie[le]=T[le];else{const de=le.replace("data","");ie.dataset[de]=T[le]}}),j&&j.forEach(le=>{ie.appendChild(le)}),ie},w$2=b=>({...L,...b,jsLib:Array.from(new Set([...L.jsLib||[],...b.jsLib||[]])),cssLib:Array.from(new Set([...L.cssLib||[],...b.cssLib||[]]))}),v=(b,T)=>{if(b[T]!==void 0)return b[T];const j=new Promise(ie=>{var le;const de=document.createElement("script");de.src=T,(le=document.querySelector("body"))==null||le.appendChild(de),de.onload=()=>{ie()}});return b[T]=j,j},k$4=(b,T)=>{if(T.css&&Array.from(b.childNodes).every(j=>j.nodeName!=="STYLE")){const j=A("style",{innerHTML:T.css});b.appendChild(j)}},D$1=(b,T,j)=>{const ie=j.getScript();if(ie&&Array.from(T.childNodes).every(le=>le.nodeName!=="SCRIPT")){const le=document.createElement("script");le.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${b} .code-demo-container').shadowRoot;
${ie}}`)),T.appendChild(le)}},R=b=>{const T=Object.keys(b),j={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(ie=>{const le=T.filter(de=>C$2[ie].types.includes(de));if(le.length){const de=le[0];j[ie]=[b[de].replace(/^\n|\n$/g,""),C$2[ie].map[de]||de]}}),j.isLegal=(!j.html.length||j.html[1]==="none")&&(!j.js.length||j.js[1]==="none")&&(!j.css.length||j.css[1]==="none"),j},x=b=>b.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$3=b=>`<div id="app">
${x(b)}
</div>`,B=b=>`${b.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V$1=b=>b.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q$1=b=>`(function(exports){var module={};module.exports=exports;${b};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z$1=(b,T)=>{const j=w$2(T),ie=b.js[0]||"";return{...j,html:x(b.html[0]||""),js:ie,css:b.css[0]||"",isLegal:b.isLegal,getScript:()=>{var le;return j.useBabel?((le=window.Babel.transform(ie,{presets:["es2015"]}))==null?void 0:le.code)||"":ie}}},P$1=(b,T)=>{const j=w$2(T),ie=b.html[0]||"",le=/<template>([\s\S]+)<\/template>/u.exec(ie),de=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(ie),ce=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(ie),ve=le?le[1].replace(/^\n|\n$/g,""):"",[ue="",me=""]=de?[de[4].replace(/^\n|\n$/g,""),de[3]]:[],[pe="",be=""]=ce?[ce[4].replace(/^\n|\n$/g,""),ce[3]]:[],he=me===""&&(be===""||be==="css");return{...j,html:_$3(ve),js:V$1(ue),css:pe,isLegal:he,jsLib:[j.vue,...j.jsLib],getScript:()=>{var fe,ye;const _e=T.useBabel?((ye=(fe=window.Babel)==null?void 0:fe.transform(ue,{presets:["es2015"]}))==null?void 0:ye.code)||"":ue.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q$1(_e)};appOptions.template=\`${ve.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$1=(b,T)=>{const j=w$2(T);return{...j,html:_$3(""),js:B(b.js[0]||""),css:b.css[0]||(b.js[0]?b.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:b.isLegal,jsLib:[j.react,j.reactDOM,...j.jsLib],jsx:!0,getScript:()=>{var ie,le;const de=((le=(ie=window.Babel)==null?void 0:ie.transform(b.js[0]||"",{presets:["es2015","react"]}))==null?void 0:le.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q$1(de)}))`}}},h$2={},I$2=b=>Promise.all([v(h$2,b.babel),v(h$2,b.react),v(h$2,b.reactDOM)]),J$1=b=>{const T=[v(h$2,b.vue)];return b.useBabel&&T.push(v(h$2,b.babel)),Promise.all(T)},Q=b=>b.useBabel?v(h$2,b.babel):Promise.resolve();var F$2=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(b,{slots:T}){const j=ref(!1),ie=ref(),le=ref(),de=ref("0"),ce=ref(!1),ve=computed(()=>JSON.parse(b.config?Lt(b.config):"{}")),ue=computed(()=>{const fe=JSON.parse(Lt(b.code));return R(fe)}),me=computed(()=>b.type==="react"?H$1(ue.value,ve.value):b.type==="vue"?P$1(ue.value,ve.value):z$1(ue.value,ve.value)),pe=computed(()=>me.value.isLegal),be=(fe=!1)=>{const ye=ie.value.attachShadow({mode:"open"}),_e=document.createElement("div");_e.classList.add("code-demo-app"),ye.appendChild(_e),pe.value?(fe&&(_e.innerHTML=me.value.html),k$4(ye,me.value),D$1(b.id,ye,me.value),de.value="0"):de.value="auto",ce.value=!0},he=()=>{switch(b.type){case"react":return I$2(me.value).then(()=>be());case"vue":return J$1(me.value).then(()=>be());default:return Q(me.value).then(()=>be(!0))}};return onMounted(()=>{setTimeout(()=>{he()},500)}),()=>{var fe;return h$5("div",{class:"code-demo-wrapper",id:b.id},[ce.value?null:h$5("div",{class:"loading"},h$5(M$2)),h$5("div",{class:"code-demo-header"},[me.value.isLegal?h$5("button",{class:["toggle-button",j.value?"down":"right"],onClick:()=>{de.value=j.value?"0":`${le.value.clientHeight+13.8}px`,j.value=!j.value}}):null,b.title?h$5("span",{class:"title"},decodeURIComponent(b.title)):null,me.value.isLegal&&me.value.jsfiddle!==!1?h$5("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$5("input",{type:"hidden",name:"html",value:me.value.html}),h$5("input",{type:"hidden",name:"js",value:me.value.js}),h$5("input",{type:"hidden",name:"css",value:me.value.css}),h$5("input",{type:"hidden",name:"wrap",value:"1"}),h$5("input",{type:"hidden",name:"panel_js",value:"3"}),h$5("input",{type:"hidden",name:"resources",value:[...me.value.cssLib,...me.value.jsLib].join(",")}),h$5("button",{type:"submit",class:"jsfiddle-button",innerHTML:N,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!me.value.isLegal||me.value.codepen!==!1?h$5("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$5("input",{type:"hidden",name:"data",value:JSON.stringify({html:me.value.html,js:me.value.js,css:me.value.css,js_external:me.value.jsLib.join(";"),css_external:me.value.cssLib.join(";"),layout:me.value.codepenLayout,html_pre_processor:ue.value?ue.value.html[1]:"none",js_pre_processor:ue.value?ue.value.js[1]:me.value.jsx?"babel":"none",css_pre_processor:ue.value?ue.value.css[1]:"none",editors:me.value.codepenEditors})}),h$5("button",{type:"submit",innerHTML:O$2,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$5("div",{ref:ie,class:"code-demo-container",style:{display:pe.value&&ce.value?"block":"none"}}),h$5("div",{class:"code-demo-code-wrapper",style:{height:de.value}},h$5("div",{ref:le,class:"code-demo-codes"},(fe=T.default)==null?void 0:fe.call(T)))])}}});const echarts="",LoadingIcon=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const T=ref();let j;const ie=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-63dde3cb.js"),[]),new Promise(le=>setTimeout(le,500))]).then(([le])=>{const de=parseEChartsConfig(Lt(b.config),b.type);j=le.init(T.value),j.showLoading(),j.setOption(de),j.hideLoading(),ie.value=!1}),useEventListener("resize",useDebounceFn(()=>j==null?void 0:j.resize(),100))}),onBeforeUnmount(()=>{j==null||j.dispose()}),()=>[b.title?h$5("div",{class:"echarts-title"},decodeURIComponent(b.title)):null,ie.value?h$5("div",{class:"echarts-loading-wrapper"},h$5(LoadingIcon)):null,h$5("div",{ref:T,class:"echarts-wrapper",id:b.id})]}});const figure="",flowchart="",y$2=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var a$1={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F$1={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C$1={...a$1,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g$2={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p$1={ant:F$1,vue:g$2,pie:C$1},k$3=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(b){let T;const j=ref(),ie=ref(!0),le=ref(1),de=computed(()=>p$1[b.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${b.preset}`),p$1.vue)),ce=ve=>ve<419?.8:ve>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart.parse-0007e96c.js").then(ve=>ve.f),[]),new Promise(ve=>setTimeout(ve,500))]).then(([{default:ve}])=>{T=ve(Lt(b.code)),le.value=ce(window.innerWidth),ie.value=!1,T.drawSVG(b.id,{...de.value,scale:le.value}),useEventListener("resize",useDebounceFn(()=>{const ue=ce(window.innerWidth);le.value!==ue&&(le.value=ue,T.drawSVG(b.id,{...de.value,scale:ue}))},100))})}),()=>[ie.value?h$5("div",{class:"flowchart-loading-wrapper"},h$5(y$2)):null,h$5("div",{ref:j,class:["flowchart-wrapper",b.preset],id:b.id,style:{display:ie.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M$1=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),k$2=b=>({dark:b,background:b?"#1e1e1e":"#fff",primaryColor:b?"#389d70":"#4abf8a",primaryBorderColor:b?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:b?"#fff":"#000",secondaryTextColor:b?"#ddd":"#333",tertiaryColor:b?"#282828":"#efeef4",tertiaryBorderColor:b?"#bbb":"#242424",tertiaryTextColor:b?"#ddd":"#333",noteBkgColor:b?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:b?"#f6d365":"#333",lineColor:b?"#d3d3d3":"#333",textColor:b?"#fff":"#242424",mainBkg:b?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:b?"#389d70":"#4abf8a",nodeTextColor:b?"#fff":"#242424",signalTextColor:b?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:b?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w$1=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(b){const T=ref(""),j=ref(),ie=ref(!1);let le=null;return onMounted(()=>{const de=document.querySelector("html"),ce=Lt(b.code),ve=()=>de.classList.contains("dark")||de.getAttribute("data-theme")==="dark";ie.value=ve(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-bc08675d.js"),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-067663b2.js"),["assets/mermaid-mindmap.esm.min-067663b2.js","assets/framework-5e2051d8.js"]),new Promise(ue=>setTimeout(ue,500))]).then(async([{default:ue},{default:me}])=>{try{await ue.registerExternalDiagrams([me])}catch{}const pe=async()=>{const be=document.createElement("div");be.style.position="relative",be.style.top="-9999px";const he=fe=>{T.value=fe,document.body.removeChild(be)};ue.initialize({theme:"base",themeVariables:k$2(ie.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),T.value="",document.body.appendChild(be),await nextTick(),await ue.renderAsync(b.id,ce,he,be)};await pe(),le=new MutationObserver(()=>{ie.value=ve()}),le.observe(de,{attributeFilter:["class","data-theme"],attributes:!0}),watch(ie,pe)})}),onBeforeUnmount(()=>{le==null||le.disconnect()}),()=>h$5("div",{ref:j,class:["mermaid-wrapper",{loading:!T.value}]},T.value?h$5("div",{class:"content",innerHTML:T.value}):h$5(M$1))}});const o$1=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t$1=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e$1=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$2=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i$1=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c$1=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a(),t$1(),o$1(),e$1(),i$1(),r$2(),c$1()],index$1="",leagueGothic="",sourceSansPro="",k$1=()=>h$5(ct,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var S$2=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(b){const T=usePageFrontmatter(),j=ref(""),ie=ref(!1),le=ref(),de=ref();let ce;return onMounted(()=>{if(de.value){j.value=Lt(b.code),de.value.setAttribute("id",b.id),de.value.setAttribute("data-theme",b.theme);const ve=[new Promise(ue=>setTimeout(ue,500)),...useReveal()];Promise.all(ve).then(([,ue,...me])=>{ce=new ue.default(de.value,{plugins:me.map(pe=>pe.default)}),ce.initialize({backgroundTransition:"slide",hash:T.value.layout==="Slide",mouseWheel:T.value.layout==="Slide",transition:"slide",slideNumber:!0,...T.value.reveal||{},embedded:T.value.layout!=="Slide"}).then(()=>{ie.value=!1,ce.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{ce==null||ce.destroy()}),()=>h$5("div",{ref:le,class:{"md-enhance-presentation":!0,loading:ie.value}},[ie.value?h$5(k$1):null,h$5("div",{ref:de,class:["reveal","reveal-viewport"]},h$5("div",{class:"slides",style:{display:ie.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${j.value}<\/script></section>`}))])}});const playground="",n$1='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r$1=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(b){return()=>[h$5("div",{class:"playground-wrapper"},[h$5("div",{class:"title-wrapper"},[b.title?h$5("div",{class:"title"},decodeURIComponent(b.title)):null,h$5("div",{class:"actions"},[h$5("a",{class:"action",href:decodeURIComponent(b.link),target:"_blank",innerHTML:n$1})])]),h$5("div",{class:"preview-container"},h$5("iframe",{class:"iframe-preview",src:decodeURIComponent(b.link)}))])]}});const tabs="",d$2=useStorage("VUEPRESS_TAB_STORE",{});var S$1=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:T}){const j=ref((()=>{if(b.tabId){const ue=b.data.findIndex(({title:me,value:pe=me})=>d$2.value[b.tabId]===pe);if(ue!==-1)return ue}return b.active})()),ie=ref([]),le=()=>{if(b.tabId){const{title:ue,value:me=ue}=b.data[j.value];d$2.value[b.tabId]=me}},de=(ue=j.value)=>{j.value=ue<ie.value.length-1?ue+1:0,ie.value[j.value].focus()},ce=(ue=j.value)=>{j.value=ue>0?ue-1:ie.value.length-1,ie.value[j.value].focus()},ve=(ue,me)=>{ue.key===" "||ue.key==="Enter"?(ue.preventDefault(),j.value=me):ue.key==="ArrowRight"?(ue.preventDefault(),de()):ue.key==="ArrowLeft"&&(ue.preventDefault(),ce()),le()};return watch(()=>d$2.value[b.tabId],(ue,me)=>{if(b.tabId&&ue!==me){const pe=b.data.findIndex(({title:be,value:he=be})=>he===ue);pe!==-1&&(j.value=pe)}}),()=>h$5(ClientOnly,()=>h$5("div",{class:"tab-list"},[h$5("div",{class:"tab-list-nav",role:"tablist"},b.data.map(({title:ue},me)=>{const pe=me===j.value;return h$5("button",{ref:be=>{be&&(ie.value[me]=be)},class:["tab-list-nav-item",{active:pe}],role:"tab","aria-controls":`tab-${b.id}-${me}`,"aria-selected":pe,onClick:()=>{j.value=me,le()},onKeydown:be=>ve(be,me)},ue)})),b.data.map(({title:ue,value:me=ue},pe)=>{var be;const he=pe===j.value;return h$5("div",{class:["tab-item",{active:he}],id:`tab-${b.id}-${pe}`,role:"tabpanel","aria-expanded":he},(be=T[`tab${pe}`])==null?void 0:be.call(T,{title:ue,value:me,isActive:he}))})]))}});const tasklist="",katex="",clientConfig8=defineClientConfig({enhance:({app:b})=>{b.component("ChartJS",ChartJS),b.component("CodeTabs",h$3),b.component("CodeDemo",F$2),b.component("ECharts",ECharts),b.component("FlowChart",k$3),b.component("Mermaid",w$1),b.component("Presentation",S$2),b.component("Playground",r$1),b.component("Tabs",S$1),b.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-3db71fdc.js"),["assets/VuePlayground-3db71fdc.js","assets/framework-5e2051d8.js"])))}}),photoswipe="",_$2=".theme-hope-content :not(a) > img",E$1={"/en":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},P=500,O$1={},d$1=b=>({src:b.src,width:b.naturalWidth,height:b.naturalHeight,alt:b.alt}),H=b=>{const T=typeof b=="string"?Array.from(document.querySelectorAll(b)):b.map(j=>Array.from(document.querySelectorAll(j))).flat();return Promise.all(T.map(j=>new Promise((ie,le)=>{j.complete?ie(d$1(j)):(j.onload=()=>ie(d$1(j)),j.onerror=de=>le(de))}))).then(j=>({elements:T,infos:j}))},I$1=()=>{const{isSupported:b,toggle:T}=useFullscreen(),j=Mt(E$1),ie=useRoute(),le=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-a9093b7c.js"),[]),new Promise(de=>setTimeout(de,P)).then(()=>H(_$2))]).then(([de,ce])=>{ce.elements.forEach((ve,ue)=>{const me=()=>{const pe=new de.default({dataSource:ce.infos,...j.value,...O$1,index:ue});pe.on("uiRegister",()=>{b&&pe.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{T()}}),pe.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(be,he)=>{be.setAttribute("download",""),be.setAttribute("target","_blank"),be.setAttribute("rel","noopener"),he.on("change",()=>{be.href=he.currSlide.data.src})}})}),pe.init()};ve.style.cursor="zoom-in",ve.addEventListener("click",me),ve.addEventListener("keypress",({key:pe})=>{pe==="Enter"&&me()})})})};watch(()=>ie.path,()=>le()),onMounted(()=>le())};var y$1=defineClientConfig({setup:()=>{I$1()}});const useAutoLink=(b,T=!1)=>{const j=useRouter(),{fullPath:ie,meta:le,name:de}=lt(j,encodeURI(b));return{text:!T&&le.s?le.s:le.title||b,link:de==="404"?b:ie,...le.i?{icon:le.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useMobile=()=>{const b=useThemeData(),T=ref(!1),j=()=>{T.value=window.innerWidth<(b.value.mobileBreakPoint||719)};return onMounted(()=>{j(),useEventListener("resize",j,!1),useEventListener("orientationchange",j,!1)}),T},useNavigate=()=>{const b=useRouter(),T=useRoute();return j=>{if(j)if(j.startsWith("/"))T.path!==j&&b.push(j);else if(j.startsWith("http://")||j.startsWith("https://")||j.startsWith("mailto:"))window&&window.open(j);else{const ie=T.path.slice(0,T.path.lastIndexOf("/"));b.push(`${ie}/${encodeURI(j)}`)}}},usePageAuthor=()=>{const b=useThemeLocaleData(),T=usePageFrontmatter();return computed(()=>{const{author:j}=T.value;return j?Jt(j):j===!1?[]:Jt(b.value.author,!1)})},usePageCategory=()=>{const b=usePageFrontmatter();return computed(()=>qt(b.value.category).map(T=>{var j,ie;return{name:T,path:((ie=(j=inject(Symbol.for("categoryMap")))==null?void 0:j.value.map[T])==null?void 0:ie.path)||""}}))},usePageTag=()=>{const b=usePageFrontmatter();return computed(()=>Gt(b.value.tag).map(T=>{var j,ie;return{name:T,path:((ie=(j=inject(Symbol.for("tagMap")))==null?void 0:j.value.map[T])==null?void 0:ie.path)||""}}))},usePageDate=()=>{const b=usePageFrontmatter(),T=usePageData();return computed(()=>{const{date:j}=b.value;if(j)return et(j);const{createdTime:ie}=T.value.git||{};return ie?et(new Date(ie)):null})},usePageInfo=()=>{const b=useThemeLocaleData(),T=usePageData(),j=usePageFrontmatter(),ie=usePageAuthor(),le=usePageCategory(),de=usePageTag(),ce=usePageDate(),ve=computed(()=>({author:ie.value,category:le.value,date:ce.value,localizedDate:T.value.localizedDate,tag:de.value,isOriginal:j.value.isOriginal||!1,readingTime:T.value.readingTime||null,pageview:"pageview"in j.value?j.value.pageview:!0})),ue=computed(()=>"pageInfo"in j.value?j.value.pageInfo:"pageInfo"in b.value?b.value.pageInfo:null);return{info:ve,items:ue}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(b=>promiseResolve=b)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const b=usePageFrontmatter(),T=useThemeLocaleData(),j=usePageAuthor(),ie=computed(()=>{const{copyright:ce,footer:ve}=b.value;return ve!==!1&&Boolean(ce||ve||T.value.displayFooter)}),le=computed(()=>{const{footer:ce}=b.value;return ce===!1?!1:typeof ce=="string"?ce:T.value.footer||""}),de=computed(()=>"copyright"in b.value?b.value.copyright:"copyright"in T.value?T.value.copyright:j.value.length?`Copyright © ${new Date().getFullYear()} ${j.value[0].name}`:!1);return()=>ie.value?h$5("footer",{class:"footer-wrapper"},[h$5("div",{class:"footer",innerHTML:le.value}),de.value?h$5("div",{class:"copyright",innerHTML:de.value}):null]):null}}),I18nIcon=()=>h$5(ct,{name:"i18n"},()=>[h$5("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const GitHubIcon=()=>h$5(ct,{name:"github"},()=>h$5("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));GitHubIcon.displayName="GitHubIcon";const GitlabIcon=()=>h$5(ct,{name:"gitlab"},()=>h$5("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));GitlabIcon.displayName="GitlabIcon";const GiteeIcon=()=>h$5(ct,{name:"gitee"},()=>h$5("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));GiteeIcon.displayName="GiteeIcon";const BitbucketIcon=()=>h$5(ct,{name:"bitbucket"},()=>h$5("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));BitbucketIcon.displayName="BitbucketIcon";const SourceIcon=()=>h$5(ct,{name:"source"},()=>h$5("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));SourceIcon.displayName="SourceIcon";const Icon=b=>{const{icon:T=""}=b;return isLinkHttp(T)?h$5("img",{class:"icon",src:T}):T.startsWith("/")?h$5("img",{class:"icon",src:withBase(T)}):h$5(resolveComponent("FontIcon"),b)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(b,{attrs:T,emit:j,slots:ie}){const le=useRoute(),de=useSiteData(),ce=toRef(b,"config"),ve=computed(()=>isLinkHttp(ce.value.link)),ue=computed(()=>isLinkMailto(ce.value.link)||isLinkTel(ce.value.link)),me=computed(()=>ue.value?void 0:ce.value.target||(ve.value?"_blank":void 0)),pe=computed(()=>me.value==="_blank"),be=computed(()=>!ve.value&&!ue.value&&!pe.value),he=computed(()=>ue.value?void 0:ce.value.rel||(pe.value?"noopener noreferrer":void 0)),fe=computed(()=>ce.value.ariaLabel||ce.value.text),ye=computed(()=>{if(b.exact)return!1;const Ee=Object.keys(de.value.locales);return Ee.length?Ee.every(Ae=>Ae!==ce.value.link):ce.value.link!=="/"}),_e=computed(()=>be.value?ce.value.activeMatch?new RegExp(ce.value.activeMatch).test(le.path):ye.value?le.path.startsWith(ce.value.link):le.path===ce.value.link:!1);return()=>{var $e,De,Ce;const{text:Ee,icon:Ae,link:ge}=ce.value;return be.value?h$5(RouterLink,{to:ge,"aria-label":fe.value,...T,class:["nav-link",{active:_e.value},T.class],onFocusout:()=>j("focusout")},()=>{var Te,ke,Ie;return((Te=ie.default)==null?void 0:Te.call(ie))||[((ke=ie.before)==null?void 0:ke.call(ie))||h$5(Icon,{icon:Ae}),Ee,(Ie=ie.after)==null?void 0:Ie.call(ie)]}):h$5("a",{href:ge,rel:he.value,target:me.value,"aria-label":fe.value,...T,class:["nav-link",T.class],onFocusout:()=>j("focusout")},(($e=ie.default)==null?void 0:$e.call(ie))||[((De=ie.before)==null?void 0:De.call(ie))||h$5(Icon,{icon:Ae}),Ee,b.noExternalLinkIcon?null:h$5(ExternalLinkIcon),(Ce=ie.after)==null?void 0:Ce.call(ie)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(b,{slots:T}){const j=useRoute(),ie=toRef(b,"config"),le=computed(()=>ie.value.ariaLabel||ie.value.text),de=ref(!1);watch(()=>j.path,()=>{de.value=!1});const ce=ve=>{ve.detail===0&&(de.value=!de.value)};return()=>{var ve;return h$5("div",{class:["dropdown-wrapper",{open:de.value}]},[h$5("button",{class:"dropdown-title",type:"button","aria-label":le.value,onClick:ce},[((ve=T.title)==null?void 0:ve.call(T))||h$5("span",{class:"title"},[h$5(Icon,{icon:ie.value.icon}),b.config.text]),h$5("span",{class:"arrow"}),h$5("ul",{class:"nav-dropdown"},ie.value.children.map((ue,me)=>{const pe=me===ie.value.children.length-1;return h$5("li",{class:"dropdown-item"},"children"in ue?[h$5("h4",{class:"dropdown-subtitle"},ue.link?h$5(AutoLink,{config:ue,onFocusout:()=>{ue.children.length===0&&pe&&(de.value=!1)}}):h$5("span",ue.text)),h$5("ul",{class:"dropdown-subitem-wrapper"},ue.children.map((be,he)=>h$5("li",{class:"dropdown-subitem"},h$5(AutoLink,{config:be,onFocusout:()=>{he===ue.children.length-1&&pe&&(de.value=!1)}}))))]:h$5(AutoLink,{config:ue,onFocusout:()=>{pe&&(de.value=!1)}}))}))])])}}}),resolveNavbarItem=(b,T="")=>isString$1(b)?useAutoLink(`${T}${b}`):"children"in b?{...b,...b.link&&!isLinkExternal(b.link)?useAutoLink(`${T}${b.link}`):{},children:b.children.map(j=>resolveNavbarItem(j,`${T}${b.prefix||""}`))}:{...b,link:isLinkExternal(b.link)?b.link:useAutoLink(`${T}${b.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(b=>resolveNavbarItem(b))),useNavbarLanguageDropdown=()=>{const b=useRouter(),T=useRouteLocale(),j=useSiteLocaleData(),ie=useThemeData(),le=useThemeLocaleData();return computed(()=>{const de=Object.keys(j.value.locales);if(de.length<2)return null;const{path:ce,hash:ve}=b.currentRoute.value,{navbarLocales:ue}=le.value;return{text:"",ariaLabel:ue==null?void 0:ue.selectLangAriaLabel,children:de.map(pe=>{var Ee,Ae,ge;const be=((Ee=j.value.locales)==null?void 0:Ee[pe])??{},he=((Ae=ie.value.locales)==null?void 0:Ae[pe])??{},fe=be.lang||"",ye=((ge=he.navbarLocales)==null?void 0:ge.langName)??fe;let _e;if(fe===j.value.lang)_e=ce;else{const $e=ce.replace(T.value,pe);_e=b.getRoutes().some(De=>De.path===$e)?`${$e}${ve}`:he.home??pe}return{text:ye,link:_e}})}})},getAncestorLinks=(b,T)=>{const j=b.path.replace(T,"/").split("/"),ie=[];let le=removeEndingSlash(T);return j.forEach((de,ce)=>{ce!==j.length-1?(le+=`${de}/`,ie.push(le)):de!==""&&(le+=de,ie.push(le))}),ie},resolveRepoType=b=>!isLinkHttp(b)||/github\.com/.test(b)?"GitHub":/bitbucket\.org/.test(b)?"Bitbucket":/gitlab\.com/.test(b)?"GitLab":/gitee\.com/.test(b)?"Gitee":null,useNavbarRepo=()=>{const b=useThemeLocaleData(),T=computed(()=>b.value.repo||null),j=computed(()=>T.value?resolveRepoType(T.value):null),ie=computed(()=>T.value&&!isLinkHttp(T.value)?`https://github.com/${T.value}`:T.value),le=computed(()=>ie.value?b.value.repoLabel??(j.value===null?"Source":j.value):null);return computed(()=>!ie.value||!le.value||b.value.repoDisplay===!1?null:{type:j.value||"Source",label:le.value,link:ie.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const b=useNavbarLanguageDropdown();return()=>b.value?h$5("div",{class:"nav-item"},h$5(DropdownLink,{class:"i18n-dropdown",config:b.value},{title:()=>{var T;return h$5(I18nIcon,{"aria-label":(T=b.value)==null?void 0:T.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const b=useRouteLocale(),T=useSiteLocaleData(),j=useThemeLocaleData(),ie=computed(()=>j.value.home||b.value),le=computed(()=>T.value.title),de=computed(()=>j.value.logo?withBase(j.value.logo):null),ce=computed(()=>j.value.logoDark?withBase(j.value.logoDark):null);return()=>h$5(RouterLink,{to:ie.value,class:"brand"},()=>[de.value?h$5("img",{class:["logo",{light:Boolean(ce.value)}],src:de.value,alt:le.value}):null,ce.value?h$5("img",{class:["logo dark"],src:ce.value,alt:le.value}):null,le.value?h$5("span",{class:["site-name",{"hide-in-pad":de.value}]},le.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$5("nav",{class:"nav-links"},[...b.value.map(T=>h$5("div",{class:"nav-item hide-in-mobile"},"children"in T?h$5(DropdownLink,{config:T}):h$5(AutoLink,{config:T})))]):null}});function _toConsumableArray(b){if(Array.isArray(b)){for(var T=0,j=Array(b.length);T<b.length;T++)j[T]=b[T];return j}else return Array.from(b)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function b(T){return locks.some(function(j){return!!(j.options.allowTouchMove&&j.options.allowTouchMove(T))})},preventDefault=function b(T){var j=T||window.event;return allowTouchMove(j.target)||j.touches.length>1?!0:(j.preventDefault&&j.preventDefault(),!1)},setOverflowHidden=function b(T){if(previousBodyPaddingRight===void 0){var j=!!T&&T.reserveScrollBarGap===!0,ie=window.innerWidth-document.documentElement.clientWidth;j&&ie>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=ie+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function b(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function b(T){return T?T.scrollHeight-T.scrollTop<=T.clientHeight:!1},handleScroll=function b(T,j){var ie=T.targetTouches[0].clientY-initialClientY;return allowTouchMove(T.target)?!1:j&&j.scrollTop===0&&ie>0||isTargetElementTotallyScrolled(j)&&ie<0?preventDefault(T):(T.stopPropagation(),!0)},disableBodyScroll=function b(T,j){if(!T){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function(le){return le.targetElement===T})){var ie={targetElement:T,options:j||{}};locks=[].concat(_toConsumableArray(locks),[ie]),isIosDevice?(T.ontouchstart=function(le){le.targetTouches.length===1&&(initialClientY=le.targetTouches[0].clientY)},T.ontouchmove=function(le){le.targetTouches.length===1&&handleScroll(le,T)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(j)}},clearAllBodyScrollLocks=function b(){isIosDevice?(locks.forEach(function(T){T.targetElement.ontouchstart=null,T.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(b){const T=useRoute(),j=toRef(b,"config"),ie=computed(()=>j.value.ariaLabel||j.value.text),le=ref(!1);watch(()=>T.path,()=>{le.value=!1});const de=(ce,ve)=>ve[ve.length-1]===ce;return()=>[h$5("button",{class:["nav-screen-dropdown-title",{active:le.value}],type:"button","aria-label":ie.value,onClick:()=>{le.value=!le.value}},[h$5("span",{class:"title"},[h$5(Icon,{icon:j.value.icon}),b.config.text]),h$5("span",{class:["arrow",le.value?"down":"right"]})]),h$5("ul",{class:["nav-screen-dropdown",{hide:!le.value}]},j.value.children.map(ce=>h$5("li",{class:"dropdown-item"},"children"in ce?[h$5("h4",{class:"dropdown-subtitle"},ce.link?h$5(AutoLink,{config:ce,onFocusout:()=>{de(ce,j.value.children)&&ce.children.length===0&&(le.value=!1)}}):h$5("span",ce.text)),h$5("ul",{class:"dropdown-subitem-wrapper"},ce.children.map(ve=>h$5("li",{class:"dropdown-subitem"},h$5(AutoLink,{config:ve,onFocusout:()=>{de(ve,ce.children)&&de(ce,j.value.children)&&(le.value=!1)}}))))]:h$5(AutoLink,{config:ce,onFocusout:()=>{de(ce,j.value.children)&&(le.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$5("nav",{class:"nav-screen-links"},b.value.map(T=>h$5("div",{class:"navbar-links-item"},"children"in T?h$5(NavScreenDropdown,{config:T}):h$5(AutoLink,{config:T})))):null}}),DarkIcon=()=>h$5(ct,{name:"dark"},()=>h$5("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$5(ct,{name:"light"},()=>h$5("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$5(ct,{name:"auto"},()=>h$5("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$5(ct,{name:"enter-fullscreen"},()=>h$5("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$5(ct,{name:"cancel-fullscreen"},()=>h$5("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$5(ct,{name:"outlook"},()=>[h$5("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const darkModeSymbol=Symbol.for("darkMode"),useDarkMode=()=>{const b=inject(darkModeSymbol);if(!b)throw new Error("useDarkMode() is called without provider.");return b},injectDarkMode=b=>{const T=useThemeData(),j=usePreferredDark(),ie=useStorage("vuepress-theme-hope-scheme","auto"),le=computed(()=>{const{darkmode:de}=T.value;return de==="disable"?!1:de==="enable"?!0:de==="auto"?j.value:de==="toggle"?ie.value==="dark":ie.value==="dark"||ie.value==="auto"&&j.value});b.provide(darkModeSymbol,{isDarkMode:le,status:ie}),Object.defineProperties(b.config.globalProperties,{$isDarkMode:{get:()=>le.value}})},setupDarkMode=()=>{const{isDarkMode:b}=useDarkMode(),T=(j=b.value)=>{const ie=window==null?void 0:window.document.querySelector("html");ie==null||ie.setAttribute("data-theme",j?"dark":"light")};onMounted(()=>{watch(b,T,{immediate:!0})})},appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const b=useThemeData(),{status:T}=useDarkMode(),j=computed(()=>b.value.darkmode),ie=()=>{j.value==="switch"?T.value={light:"dark",dark:"auto",auto:"light"}[T.value]:T.value=T.value==="light"?"dark":"light"};return()=>h$5("button",{id:"appearance-switch",onClick:()=>ie()},[h$5(AutoIcon,{style:{display:T.value==="auto"?"block":"none"}}),h$5(DarkIcon,{style:{display:T.value==="dark"?"block":"none"}}),h$5(LightIcon,{style:{display:T.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const b=useThemeData(),T=useThemeLocaleData(),j=computed(()=>T.value.outlookLocales.darkmode),ie=computed(()=>b.value.darkmode),le=computed(()=>ie.value==="switch"||ie.value==="toggle");return()=>le.value?h$5("div",{class:"appearance-wrapper"},[h$5("label",{class:"appearance-title",for:"appearance-switch"},j.value),h$5(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(b){const T=(j="")=>{const ie=document.documentElement.classList,le=Object.keys(b.themeColor).map(de=>`theme-${de}`);if(!j){localStorage.removeItem("theme"),ie.remove(...le);return}ie.remove(...le.filter(de=>de!==`theme-${j}`)),ie.add(`theme-${j}`),localStorage.setItem("theme",j)};return onMounted(()=>{const j=localStorage.getItem("theme");j&&T(j)}),()=>h$5("ul",{id:"theme-color-picker"},[h$5("li",h$5("span",{class:"theme-color",onClick:()=>T()})),...Object.entries(b.themeColor).map(([j,ie])=>h$5("li",h$5("span",{style:{background:ie},onClick:()=>T(j)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const b=useThemeData(),T=useThemeLocaleData(),j=computed(()=>T.value.outlookLocales.themeColor),ie=computed(()=>{const{themeColor:le}=b.value;return le===!1?null:le});return()=>ie.value?h$5("div",{class:"theme-color-wrapper"},[h$5("label",{class:"theme-color-title",for:"theme-color-picker"},j.value),h$5(ThemeColorPicker,{themeColor:ie.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const b=useThemeLocaleData(),{isSupported:T,isFullscreen:j,toggle:ie}=useFullscreen(),le=computed(()=>b.value.outlookLocales.fullscreen);return()=>T?h$5("div",{class:"fullscreen-wrapper"},[h$5("label",{class:"full-screen-title",for:"full-screen-switch"},le.value),h$5("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:j.value,onClick:()=>ie()},j.value?h$5(CancelFullScreenIcon):h$5(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const b=useThemeData(),T=usePure(),j=computed(()=>b.value.darkmode!=="disable"&&b.value.darkmode!=="enable"),ie=computed(()=>!T.value&&Boolean(b.value.themeColor)),le=computed(()=>!T.value&&b.value.fullscreen);return()=>h$5(ClientOnly,()=>[ie.value?h$5(ThemeColor):null,j.value?h$5(AppearanceMode):null,le.value?h$5(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(b,{emit:T,slots:j}){const ie=useRoute(),le=useMobile(),de=ref();return watch(le,ce=>{!ce&&b.show&&(clearAllBodyScrollLocks(),T("close"))}),watch(()=>ie.path,()=>{clearAllBodyScrollLocks(),T("close")}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$5(Transition,{name:"fade",onEnter:()=>disableBodyScroll(de.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var ce,ve;return b.show?h$5("div",{id:"nav-screen",ref:de},h$5("div",{class:"container"},[(ce=j.before)==null?void 0:ce.call(j),h$5(NavScreenLinks),h$5("div",{class:"outlook-wrapper"},h$5(OutlookSettings)),(ve=j.after)==null?void 0:ve.call(j)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:b}=useFullscreen(),T=useThemeData(),j=usePure(),ie=useRoute(),le=ref(!1),de=computed(()=>T.value.darkmode!=="disable"&&T.value.darkmode!=="enable"),ce=computed(()=>!j.value&&Boolean(T.value.themeColor)),ve=computed(()=>!j.value&&T.value.fullscreen&&b);return watch(()=>ie.path,()=>{le.value=!1}),()=>de.value||ve.value||ce.value?h$5("div",{class:"nav-item hide-in-mobile"},de.value&&!ve.value&&!ce.value?h$5(AppearanceSwitch):ve.value&&!de.value&&!ce.value?h$5(ToggleFullScreenButton):h$5("button",{class:["outlook-button",{open:le.value}],tabindex:"-1",ariaHidden:!0},[h$5(OutlookIcon),h$5("div",{class:"outlook-dropdown"},h$5(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:b=!1},{emit:T})=>h$5("button",{class:["toggle-navbar-button",{"is-active":b}],"aria-label":"Toggle Navbar","aria-expanded":b,"aria-controls":"nav-screen",onClick:()=>T("toggle")},h$5("span",{class:"button-container"},[h$5("span",{class:"button-top"}),h$5("span",{class:"button-middle"}),h$5("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(b,{emit:T})=>h$5("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>T("toggle")},h$5("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon,GiteeIcon,GitHubIcon,GitlabIcon,SourceIcon},setup(){const b=useNavbarRepo();return()=>b.value?h$5("div",{class:"nav-item"},h$5("a",{class:"repo-link",href:b.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":b.value.label},h$5(resolveComponent(`${b.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(b,{emit:T,slots:j}){const ie=useThemeLocaleData(),le=useMobile(),de=ref(!1),ce=computed(()=>{const{navbarAutoHide:ue}=ie.value;return ue!=="none"&&(ue==="always"||le.value)}),ve=computed(()=>ie.value.navbarLayout||{left:["Brand"],center:["Links"],right:["Language","Repo","Outlook","Search"]});return()=>{var me,pe,be,he,fe,ye;const ue={Brand:h$5(NavbarBrand),Language:h$5(LanguageDropdown),Links:h$5(NavbarLinks),Repo:h$5(RepoLink),Outlook:h$5(OutlookButton),Search:St("Docsearch")?h$5(resolveComponent("Docsearch")):St("SearchBox")?h$5(resolveComponent("SearchBox")):St("SearchBox")?h$5(resolveComponent("SearchBox")):null};return[h$5("header",{class:["navbar",{"auto-hide":ce.value,"hide-icon":!ie.value.navbarIcon}]},[h$5("div",{class:"navbar-left"},[h$5(ToggleSidebarButton,{onToggle:()=>{de.value&&(de.value=!1),T("toggleSidebar")}}),(me=j.leftStart)==null?void 0:me.call(j),...ve.value.left.map(_e=>ue[_e]),(pe=j.leftEnd)==null?void 0:pe.call(j)]),h$5("div",{class:"navbar-center"},[(be=j.centerStart)==null?void 0:be.call(j),...ve.value.center.map(_e=>ue[_e]),(he=j.centerEnd)==null?void 0:he.call(j)]),h$5("div",{class:"navbar-right"},[(fe=j.rightStart)==null?void 0:fe.call(j),...ve.value.right.map(_e=>ue[_e]),(ye=j.rightEnd)==null?void 0:ye.call(j),h$5(ToggleNavbarButton,{active:de.value,onToggle:()=>{de.value=!de.value}})])]),h$5(NavScreen,{show:de.value,onClose:()=>{de.value=!1}},{before:()=>{var _e;return(_e=j.screenTop)==null?void 0:_e.call(j)},after:()=>{var _e;return(_e=j.screenBottom)==null?void 0:_e.call(j)}})]}}}),isActiveSidebarItem=(b,T,j=!1)=>"activeMatch"in T?new RegExp(T.activeMatch).test(b.path):Ht(b,T.link)?!0:T.children&&!j?T.children.some(ie=>isActiveSidebarItem(b,ie)):!1,isMatchedSidebarItem=(b,T)=>T.type==="group"?T.children.some(j=>j.type==="group"?isMatchedSidebarItem(b,j):j.type==="page"&&isActiveSidebarItem(b,j,!0))||"prefix"in T&&Ht(b,T.prefix):!1,renderItem=(b,T)=>b.link?h$5(AutoLink,{...T,config:b}):h$5("p",T,[h$5(Icon,{icon:b.icon}),b.text]),renderChildren$1=b=>{const T=useRoute();return b?h$5("ul",{class:"sidebar-sub-headers"},b.map(j=>{const ie=isActiveSidebarItem(T,j,!0);return h$5("li",{class:"sidebar-sub-header"},[renderItem(j,{class:["sidebar-link","heading",{active:ie}]}),renderChildren$1(j.children)])})):null},sidebarData={"/en":["README.md",{text:"Features Demo",prefix:"demo/",collapsible:!0,icon:"discover",children:["page.md","markdown.md","disable.md","encrypt.md"]},"intro.md",{text:"Posts",prefix:"posts/",collapsible:!0,children:[{text:"Apple",prefix:"apple/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]},{text:"Banana",prefix:"banana/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]},"cherry.md","dragonfruit.md","strawberry.md","tomato.md"]},"slides.md"],"/guide/":[],"/posts/":[{text:"Android",prefix:"android/",collapsible:!0,children:["Android基础知识.md","Android日常记录.md"]},{text:"Java",prefix:"java/",collapsible:!0,children:["读取XML中的配置参数.md","设计模式-Builder模式.md","Java设计模式.md","设计模式-代理模式.md","设计模式-单例模式.md","设计模式-工厂方法模式.md","文件操作的工具类.md","设计模式-桥接模式.md","设计模式-模版模式.md","设计模式-简单工厂模式.md","设计模式-观察者模式.md"]},{text:"Js",prefix:"js/",collapsible:!0,children:["1.md"]},{text:"Python",prefix:"python/",collapsible:!0,children:["自学Python-函数.md","自学Python-IO编程.md","自学Python-Python基础.md","自学Python-Python基础二.md","自学Python-函数式编程.md","自学Python-常用内建模块.md","自学Python-模块.md","自学Python-正则表达式.md","自学Python-线程和进程.md","自学Python-面向对象编程.md","自学Python-面向对象高级编程.md","自学Python-高级特性.md"]},{text:"Sql",prefix:"sql/",collapsible:!0,children:["MySQL使用.md","MySQL进阶-操作详解.md","MySQL学习记录.md","MYSQL的修改和删除.md"]},{text:"Vim",prefix:"vim/",collapsible:!0,children:["Vim基本操作.md"]},{text:"Webpack",prefix:"webpack/",collapsible:!0,children:["webpack5_base.md"]},"怎样选择基金.md"]},resolvePrefix=(b="",T="")=>T.startsWith("/")?T:`${ensureEndingSlash(b)}${T}`,headerToSidebarItem=(b,T)=>{const j=usePageData();return{type:"heading",text:b.title,link:`${j.value.path}#${b.slug}`,children:headersToSidebarItemChildren(b.children,T)}},headersToSidebarItemChildren=(b,T)=>T>0?b.map(j=>headerToSidebarItem(j,T-1)):[],resolveHeadingSidebarItems=b=>{const T=usePageData();return headersToSidebarItemChildren(T.value.headers,b)},resolveArraySidebarItems=(b,T,j="")=>{const ie=usePageData(),le=useRoute(),de=(ce,ve=j)=>{var me;const ue=isString$1(ce)?useAutoLink(resolvePrefix(ve,ce)):ce.link?{...ce,...isLinkExternal(ce.link)?{}:{link:useAutoLink(resolvePrefix(ve,ce.link)).link}}:ce;if("children"in ue){const pe=resolvePrefix(ve,ue.prefix),be=ue.children==="structure"?sidebarData[pe]:ue.children;return{type:"group",...ue,prefix:pe,children:be.map(he=>de(he,pe))}}return{type:"page",...ue,children:ue.link===le.path?headersToSidebarItemChildren(((me=ie.value.headers[0])==null?void 0:me.level)===1?ie.value.headers[0].children:ie.value.headers,T):[]}};return b.map(ce=>de(ce))},resolveMultiSidebarItems=(b,T)=>{const j=useRoute(),ie=Object.keys(b).sort((le,de)=>de.length-le.length);for(const le of ie)if(decodeURI(j.path).startsWith(le)){const de=b[le];return de?resolveArraySidebarItems(de==="structure"?sidebarData[le]:de,T,le):[]}return console.warn(`${j.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const b=useRouteLocale(),T=usePageFrontmatter(),j=useThemeLocaleData(),ie=T.value.home?!1:T.value.sidebar??j.value.sidebar??"structure",le=T.value.headerDepth??j.value.headerDepth??2;return ie===!1?[]:ie==="heading"?resolveHeadingSidebarItems(le):ie==="structure"?resolveArraySidebarItems(sidebarData[b.value],le,b.value):isArray(ie)?resolveArraySidebarItems(ie,le):isPlainObject(ie)?resolveMultiSidebarItems(ie,le):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const b=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,b)},useSidebarItems=()=>{const b=inject(sidebarItemsSymbol);if(!b)throw new Error("useSidebarItems() is called without provider.");return b},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(b){const T=useRoute();return()=>[renderItem(b.config,{class:["sidebar-link",`sidebar-${b.config.type}`,{active:isActiveSidebarItem(T,b.config,!0)}],exact:!0}),renderChildren$1(b.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(b,{emit:T}){const j=useRoute(),ie=computed(()=>isActiveSidebarItem(j,b.config)),le=computed(()=>isActiveSidebarItem(j,b.config,!0));return()=>{const{collapsible:de,children:ce=[],icon:ve,prefix:ue,link:me,text:pe}=b.config;return h$5("section",{class:"sidebar-group"},[h$5(de?"button":"p",{class:["sidebar-heading",{clickable:de||me,exact:le.value,active:ie.value}],...de?{onClick:()=>T("toggle"),onKeydown:be=>{be.key==="Enter"&&T("toggle")}}:{}},[h$5(Icon,{icon:ve}),me?h$5(RouterLink,{to:me,class:"title"},()=>pe):h$5("span",{class:"title"},pe),de?h$5("span",{class:["arrow",b.open?"down":"right"]}):null]),b.open||!de?h$5(SidebarLinks,{key:ue,config:ce}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(b){const T=useRoute(),j=ref(-1),ie=le=>{j.value=le===j.value?-1:le};return watch(()=>T.path,()=>{const le=b.config.findIndex(de=>isMatchedSidebarItem(T,de));j.value=le},{immediate:!0,flush:"post"}),()=>h$5("ul",{class:"sidebar-links"},b.config.map((le,de)=>h$5("li",le.type==="group"?h$5(SidebarGroup,{config:le,open:de===j.value,onToggle:()=>ie(de)}):h$5(SidebarChild,{config:le}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(b,{slots:T}){const j=useRoute(),ie=useThemeLocaleData(),le=useSidebarItems(),de=ref();return onMounted(()=>{watch(()=>j.hash,ce=>{const ve=document.querySelector(`.sidebar a.sidebar-link[href="${j.path}${ce}"]`);if(!ve)return;const{top:ue,height:me}=de.value.getBoundingClientRect(),{top:pe,height:be}=ve.getBoundingClientRect();pe<ue?ve.scrollIntoView(!0):pe+be>ue+me&&ve.scrollIntoView(!1)})}),()=>{var ce,ve,ue;return h$5("aside",{class:["sidebar",{"hide-icon":!ie.value.sidebarIcon}],ref:de},[(ce=T.top)==null?void 0:ce.call(T),((ve=T.default)==null?void 0:ve.call(T))||h$5(SidebarLinks,{config:le.value}),(ue=T.bottom)==null?void 0:ue.call(T)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(b,{slots:T}){const j=useRouter(),ie=usePageData(),le=usePageFrontmatter(),de=useThemeLocaleData(),ce=useMobile(),ve=ref(!1),ue=computed(()=>b.noNavbar||le.value.navbar===!1||de.value.navbar===!1?!1:Boolean(ie.value.title||de.value.logo||de.value.repo||de.value.navbar)),me=useSidebarItems(),pe=computed(()=>b.noSidebar?!1:le.value.sidebar!==!1&&me.value.length!==0&&!le.value.home),be=ref(!1),he=ref(!1),fe=Te=>{be.value=typeof Te=="boolean"?Te:!be.value},ye=Te=>{he.value=typeof Te=="boolean"?Te:!he.value},_e={x:0,y:0},Ee=Te=>{_e.x=Te.changedTouches[0].clientX,_e.y=Te.changedTouches[0].clientY},Ae=Te=>{const ke=Te.changedTouches[0].clientX-_e.x,Ie=Te.changedTouches[0].clientY-_e.y;Math.abs(ke)>Math.abs(Ie)*1.5&&Math.abs(ke)>40&&(ke>0&&_e.x<=80?fe(!0):fe(!1))},ge=computed(()=>le.value.home?!1:le.value.toc||de.value.toc!==!1&&le.value.toc!==!1),$e=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let De,Ce=0;return useEventListener("scroll",useThrottleFn(()=>{const Te=$e();Ce<Te&&Te>58?be.value||(ve.value=!0):ve.value=!1,Ce=Te},300,!0)),watch(ce,Te=>{Te||fe(!1)}),onMounted(()=>{De=j.afterEach(()=>{fe(!1)})}),onBeforeUnmount(()=>{De()}),()=>h$5("div",{class:["theme-container",{"no-navbar":!ue.value,"no-sidebar":!pe.value&&!(T.sidebar||T.sidebarTop||T.sidebarBottom),"has-toc":ge.value,"hide-navbar":ve.value,"sidebar-collapsed":!ce.value&&he.value,"sidebar-open":ce.value&&be.value},le.value.containerClass||""],onTouchStart:Ee,onTouchEnd:Ae},h$5(St("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):wt,()=>{var Te;return[ue.value?h$5(Navbar,{onToggleSidebar:()=>fe()},{leftStart:()=>{var ke;return(ke=T.navbarLeftStart)==null?void 0:ke.call(T)},leftEnd:()=>{var ke;return(ke=T.navbarLeftEnd)==null?void 0:ke.call(T)},centerStart:()=>{var ke;return(ke=T.navbarCenterStart)==null?void 0:ke.call(T)},centerEnd:()=>{var ke;return(ke=T.navbarCenterEnd)==null?void 0:ke.call(T)},rightStart:()=>{var ke;return(ke=T.navbarRightStart)==null?void 0:ke.call(T)},rightEnd:()=>{var ke;return(ke=T.navbarRightEnd)==null?void 0:ke.call(T)},screenTop:()=>{var ke;return(ke=T.navScreenTop)==null?void 0:ke.call(T)},screenBottom:()=>{var ke;return(ke=T.navScreenBottom)==null?void 0:ke.call(T)}}):null,h$5(Transition,{name:"fade"},()=>be.value?h$5("div",{class:"sidebar-mask",onClick:()=>fe(!1)}):null),h$5(Transition,{name:"fade"},()=>ce.value?null:h$5("div",{class:"toggle-sidebar-wrapper",onClick:()=>ye()},h$5("span",{class:["arrow",he.value?"right":"left"]}))),h$5(Sidebar,{},{...T.sidebar?{default:()=>{var ke;return(ke=T.sidebar)==null?void 0:ke.call(T)}}:{},top:()=>{var ke;return(ke=T.sidebarTop)==null?void 0:ke.call(T)},bottom:()=>{var ke;return(ke=T.sidebarBottom)==null?void 0:ke.call(T)}}),(Te=T.default)==null?void 0:Te.call(T),h$5(PageFooter)]}))}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(b,{slots:T}){const j=le=>{le.style.transition=`transform ${b.duration}s ease-in-out ${b.delay}s, opacity ${b.duration}s ease-in-out ${b.delay}s`,le.style.transform="translateY(-20px)",le.style.opacity="0"},ie=le=>{le.style.transform="translateY(0)",le.style.opacity="1"};return()=>h$5(b.type==="single"?Transition:TransitionGroup,{name:"drop",appear:b.appear,onAppear:j,onAfterAppear:ie,onEnter:j,onAfterEnter:ie,onBeforeLeave:j},()=>{var le;return(le=T.default)==null?void 0:le.call(T)})}}),HomeFeatures=defineComponent({name:"HomeFeatures",setup(){const b=usePageFrontmatter(),T=computed(()=>isArray(b.value.features)?b.value.features:[]);return()=>{var j;return T.value.length?h$5("div",{class:"features"},(j=b.value.features)==null?void 0:j.map(ie=>{const le=[h$5("h2",[h$5(Icon,{icon:ie.icon}),h$5("span",{innerHTML:ie.title})]),h$5("p",{innerHTML:ie.details})];return ie.link?isLinkExternal(ie.link)?h$5("a",{class:"feature link",href:ie.link,role:"navigation","aria-label":ie.title,target:"_blank"},le):h$5(RouterLink,{class:"feature link",to:ie.link,role:"navigation","aria-label":ie.title},()=>le):h$5("div",{class:"feature"},le)})):null}}}),MarkdownContent=({custom:b})=>h$5(Content,{class:["theme-hope-content",{custom:b}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const HomeHero=defineComponent({name:"HomeHero",setup(b,{slots:T}){const j=usePageFrontmatter(),ie=useSiteLocaleData(),le=computed(()=>j.value.heroText===!1?!1:j.value.heroText||ie.value.title||"Hello"),de=computed(()=>j.value.tagline===!1?!1:j.value.tagline||ie.value.description||"Welcome to your VuePress site"),ce=computed(()=>j.value.heroImage?withBase(j.value.heroImage):null),ve=computed(()=>j.value.heroImageDark?withBase(j.value.heroImageDark):null),ue=computed(()=>j.value.heroAlt||le.value||"hero"),me=computed(()=>j.value.actions??[]);return()=>{var pe,be;return h$5("header",{class:"hero"},[((pe=T.heroImage)==null?void 0:pe.call(T))||h$5(DropTransition,{appear:!0,type:"group"},()=>[ce.value?h$5("img",{key:"light",class:{light:ve.value},src:ce.value,alt:ue.value}):null,ve.value?h$5("img",{key:"dark",class:"dark",src:ve.value,alt:ue.value}):null]),((be=T.heroInfo)==null?void 0:be.call(T))||h$5("div",{class:"hero-info"},[le.value?h$5(DropTransition,{appear:!0,delay:.04},()=>h$5("h1",{id:"main-title"},le.value)):null,de.value?h$5(DropTransition,{appear:!0,delay:.08},()=>h$5("p",{class:"description"},de.value)):null,me.value.length?h$5(DropTransition,{appear:!0,delay:.12},()=>h$5("p",{class:"actions"},me.value.map(he=>h$5(AutoLink,{class:["action-button",he.type||"default"],config:he,noExternalLinkIcon:!0})))):null])])}}}),homePage="",HomePage=defineComponent({name:"HopePage",setup(b,{slots:T}){const j=usePure(),ie=usePageFrontmatter();return()=>{var le,de,ce;return h$5("main",{class:["home project",{pure:j.value}],id:"main-content","aria-labelledby":ie.value.heroText===null?void 0:"main-title"},[(le=T.top)==null?void 0:le.call(T),h$5(HomeHero),h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(HomeFeatures)),(de=T.center)==null?void 0:de.call(T),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(MarkdownContent,{custom:!0})),(ce=T.bottom)==null?void 0:ce.call(T)])}}}),breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const b=useRouter(),T=useRoute(),j=useRouteLocale(),ie=usePageFrontmatter(),le=useThemeLocaleData(),de=ref([]),ce=computed(()=>(ie.value.breadcrumb||ie.value.breadcrumb!==!1&&le.value.breadcrumb!==!1)&&de.value.length>1),ve=computed(()=>ie.value.breadcrumbIcon||ie.value.breadcrumbIcon!==!1&&le.value.breadcrumbIcon!==!1),ue=()=>{const me=b.getRoutes(),pe=getAncestorLinks(T,j.value).map(be=>{const he=me.find(fe=>fe.path===be);if(he){const{meta:fe,path:ye}=lt(b,he.path),_e=fe.s||fe.title;if(_e)return{title:_e,icon:fe.i,path:ye}}return null}).filter(be=>be!==null);pe.length>1&&(de.value=pe)};return onMounted(()=>{ue(),watch(()=>T.path,ue)}),()=>h$5("nav",{class:["breadcrumb",{disable:!ce.value}]},ce.value?h$5("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},de.value.map((me,pe)=>h$5("li",{class:{"is-active":de.value.length-1===pe},property:"itemListElement",typeof:"ListItem"},[h$5(RouterLink,{to:me.path,property:"item",typeof:"WebPage"},()=>[ve.value?h$5(Icon,{icon:me.icon}):null,h$5("span",{property:"name"},me.title||"Unknown")]),h$5("meta",{property:"position",content:pe+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=b=>b===!1?!1:isString$1(b)?useAutoLink(b,!0):isPlainObject(b)?b:null,resolveFromSidebarItems=(b,T,j)=>{const ie=b.findIndex(le=>le.link===T);if(ie!==-1){const le=b[ie+j];return le!=null&&le.link?le:null}for(const le of b)if(le.children){const de=resolveFromSidebarItems(le.children,T,j);if(de)return de}return null},PageNav=defineComponent({name:"PageNav",setup(){const b=useThemeLocaleData(),T=usePageFrontmatter(),j=useSidebarItems(),ie=useRoute(),le=useNavigate(),de=computed(()=>{const ve=resolveFromFrontmatterConfig(T.value.prev);return ve===!1?null:ve||(b.value.prevLink===!1?null:resolveFromSidebarItems(j.value,ie.path,-1))}),ce=computed(()=>{const ve=resolveFromFrontmatterConfig(T.value.next);return ve===!1?null:ve||(b.value.nextLink===!1?null:resolveFromSidebarItems(j.value,ie.path,1))});return useEventListener("keydown",ve=>{ve.altKey&&(ve.key==="ArrowRight"?ce.value&&(le(ce.value.link),ve.preventDefault()):ve.key==="ArrowLeft"&&de.value&&(le(de.value.link),ve.preventDefault()))}),()=>de.value||ce.value?h$5("nav",{class:"page-nav"},[de.value?h$5(AutoLink,{class:"prev",config:de.value},()=>{var ve,ue;return[h$5("div",{class:"hint"},[h$5("span",{class:"arrow left"}),b.value.metaLocales.prev]),h$5("div",{class:"link"},[h$5(Icon,{icon:(ve=de.value)==null?void 0:ve.icon}),(ue=de.value)==null?void 0:ue.text])]}):null,ce.value?h$5(AutoLink,{class:"next",config:ce.value},()=>{var ve,ue;return[h$5("div",{class:"hint"},[b.value.metaLocales.next,h$5("span",{class:"arrow right"})]),h$5("div",{class:"link"},[(ve=ce.value)==null?void 0:ve.text,h$5(Icon,{icon:(ue=ce.value)==null?void 0:ue.icon})])]}):null]):null}}),AuthorIcon=()=>h$5(ct,{name:"author"},()=>h$5("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$5(ct,{name:"calendar"},()=>h$5("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$5(ct,{name:"category"},()=>h$5("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$5(ct,{name:"eye"},()=>h$5("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$5(ct,{name:"fire"},()=>h$5("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const TagIcon$1=()=>h$5(ct,{name:"tag"},()=>h$5("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$5(ct,{name:"timer"},()=>h$5("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$5(ct,{name:"word"},()=>[h$5("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$5("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const b=useThemeLocaleData();return computed(()=>b.value.metaLocales)},readingTimeLocales={"/en":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:b,docsBranch:T,docsDir:j,filePathRelative:ie,editLinkPattern:le})=>{if(!ie)return null;const de=resolveRepoType(b);let ce;return le?ce=le:de!==null&&(ce=editLinkPatterns[de]),ce?ce.replace(/:repo/,isLinkHttp(b)?b:`https://github.com/${b}`).replace(/:branch/,T).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(j)}/${ie}`)):null},useEditLink=()=>{const b=useThemeLocaleData(),T=usePageData(),j=usePageFrontmatter();return computed(()=>{const{repo:ie,docsRepo:le=ie,docsBranch:de="main",docsDir:ce="",editLink:ve,editLinkPattern:ue=""}=b.value;if(!(j.value.editLink??ve??!0)||!le)return null;const pe=resolveEditLink({docsRepo:le,docsBranch:de,docsDir:ce,editLinkPattern:ue,filePathRelative:T.value.filePathRelative});return pe?{text:b.value.metaLocales.editLink,link:pe}:null})},useUpdateTime=()=>{const b=useSiteLocaleData(),T=useThemeLocaleData(),j=usePageData(),ie=usePageFrontmatter();return computed(()=>{var ce,ve;return!(ie.value.lastUpdated??T.value.lastUpdated??!0)||!((ce=j.value.git)!=null&&ce.updatedTime)?null:new Date((ve=j.value.git)==null?void 0:ve.updatedTime).toLocaleString(b.value.lang)})},useContributors=()=>{const b=useThemeLocaleData(),T=usePageData(),j=usePageFrontmatter();return computed(()=>{var le;return j.value.contributors??b.value.contributors??!0?((le=T.value.git)==null?void 0:le.contributors)??null:null})},AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(b){const T=useMetaLocale();return()=>b.author.length?h$5("span",{class:"author-info","aria-label":`${T.value.author}${b.pure?"":"🖊"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(AuthorIcon),h$5("span",b.author.map(j=>j.url?h$5("a",{class:"author-item",href:j.url,target:"_blank",rel:"noopener noreferrer"},j.name):h$5("span",{class:"author-item"},j.name))),h$5("span",{property:"author",content:b.author.map(j=>j.name).join(", ")})]):null}}),category="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(b){const T=useRouter(),j=useRoute(),ie=useMetaLocale(),le=(de,ce="")=>{ce&&j.path!==ce&&(de.preventDefault(),T.push(ce))};return()=>b.category.length?h$5("span",{class:"category-info","aria-label":`${ie.value.category}${b.pure?"":"🌈"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(CategoryIcon$1),...b.category.map(({name:de,path:ce})=>h$5("span",{class:["category-item",{[`category${Ut(de,9)}`]:!b.pure,clickable:ce}],role:ce?"navigation":"",onClick:ve=>le(ve,ce)},de)),h$5("meta",{property:"articleSection",content:b.category.map(({name:de})=>de).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(b){const T=usePageLang(),j=useMetaLocale();return()=>{var ie,le;return b.date?h$5("span",{class:"date-info","aria-label":`${j.value.date}${b.pure?"":"📅"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(CalendarIcon),h$5("span",h$5(ClientOnly,()=>{var de;return b.localizedDate||((de=b.date.value)==null?void 0:de.toLocaleDateString(T.value))})),h$5("meta",{property:"datePublished",content:((le=(ie=b.date)==null?void 0:ie.value)==null?void 0:le.toISOString())||""})]):null}}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(b){const T=useRoute(),j=useMetaLocale(),ie=ref(0),le=()=>{const de=document.querySelector(".waline-pageview-count");if(de){const ce=de.textContent;ce&&!isNaN(Number(ce))?ie.value=Number(ce):setTimeout(le,500)}};return onMounted(()=>{setTimeout(le,1500)}),watch(()=>T.path,(de,ce)=>{de!==ce&&setTimeout(le,500)}),()=>b.pageview?h$5("span",{class:"visitor-info","aria-label":`${j.value.views}${b.pure?"":"🔢"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(ie.value<1e3?EyeIcon:FireIcon),h$5("span",{class:"waline-pageview-count","data-path":typeof b.pageview=="string"?b.pageview:withBase(T.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const T=useMetaLocale(),j=Mt(readingTimeLocales),ie=computed(()=>{if(!b.readingTime)return null;const{minutes:le}=b.readingTime;return le<1?{text:j.value.less1Minute,time:"PT1M"}:{text:j.value.time.replace("$time",Math.round(le).toString()),time:`PT${Math.round(le)}M`}});return()=>ie.value?h$5("span",{class:"reading-time-info","aria-label":`${T.value.readingTime}${b.pure?"":"⌛"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(TimerIcon),h$5("span",ie.value.text),h$5("meta",{property:"timeRequired",content:ie.value.time})]):null}}),tag="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(b){const T=useRouter(),j=useRoute(),ie=useMetaLocale(),le=(de,ce="")=>{ce&&j.path!==ce&&(de.preventDefault(),T.push(ce))};return()=>b.tag.length?h$5("span",{class:"tag-info","aria-label":`${ie.value.tag}${b.pure?"":"🏷"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(TagIcon$1),...b.tag.map(({name:de,path:ce})=>h$5("span",{class:["tag-item",{[`tag-item${Ut(de,9)}`]:!b.pure,clickable:ce}],role:ce?"navigation":"",onClick:ve=>le(ve,ce)},de)),h$5("meta",{property:"keywords",content:b.tag.map(({name:de})=>de).join(",")})]):null}}),OriginalInfo=defineComponent({name:"OriginalMark",inheritAttrs:!1,props:{isOriginal:Boolean},setup(b){const T=useMetaLocale();return()=>b.isOriginal?h$5("span",{class:"origin"},T.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const T=useMetaLocale(),j=Mt(readingTimeLocales),ie=computed(()=>{var de;return(de=b.readingTime)==null?void 0:de.words.toString()}),le=computed(()=>j.value.word.replace("$word",ie.value||""));return()=>ie.value?h$5("span",{class:"words-info","aria-label":`${T.value.words}${b.pure?"":"🔠"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$5(WordIcon),h$5("span",le.value),h$5("meta",{property:"wordCount",content:ie.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","Category","Tag","ReadingTime"]},info:{type:Object,required:!0}},setup(b){const T=usePure();return()=>b.items?h$5("div",{class:"page-info"},b.items.map(j=>h$5(resolveComponent(`${j}Info`),{...b.info,pure:T.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const b=usePageData(),T=usePageFrontmatter(),j=useThemeLocaleData(),{info:ie,items:le}=usePageInfo();return()=>h$5("div",{class:"page-title"},[h$5("h1",[j.value.titleIcon!==!1?h$5(Icon,{icon:T.value.icon}):null,b.value.title]),h$5(PageInfo,{info:ie.value,...le.value===null?{}:{items:le.value}}),h$5("hr")])}}),EditIcon=()=>h$5(ct,{name:"edit"},()=>[h$5("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$5("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$5("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const b=useThemeLocaleData(),T=useEditLink(),j=useUpdateTime(),ie=useContributors();return()=>{const{metaLocales:le}=b.value;return h$5("footer",{class:"page-meta"},[T.value?h$5("div",{class:"meta-item edit-link"},h$5(AutoLink,{class:"label",config:T.value},{before:()=>h$5(EditIcon)})):null,j.value?h$5("div",{class:"meta-item update-time"},[h$5("span",{class:"label"},`${le.lastUpdated}: `),h$5(ClientOnly,()=>h$5("span",{class:"info"},j.value))]):null,ie.value&&ie.value.length?h$5("div",{class:"meta-item contributors"},[h$5("span",{class:"label"},`${le.contributors}: `),ie.value.map(({email:de,name:ce},ve)=>[h$5("span",{class:"contributor",title:`email: ${de}`},ce),ve!==ie.value.length-1?",":""])]):null])}}}),toc="",renderHeader=({title:b,level:T,slug:j})=>h$5(RouterLink,{to:`#${j}`,class:["toc-link",`level${T}`]},()=>b),renderChildren=(b,T)=>{const j=useRoute();return b.length&&T>0?h$5("ul",{class:"toc-list"},b.map(ie=>[h$5("li",{class:["toc-item",{active:Ht(j,`#${ie.slug}`)}]},renderHeader(ie)),renderChildren(ie.children,T-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(b){const T=useRoute(),j=usePageData(),ie=useMetaLocale(),le=ref(),de=ce=>{var ve;(ve=le.value)==null||ve.scrollTo({top:ce,behavior:"smooth"})};return onMounted(()=>{watch(()=>T.hash,ce=>{if(le.value){const ve=document.querySelector(`#toc a.toc-link[href$="${ce}"]`);if(!ve)return;const{top:ue,height:me}=le.value.getBoundingClientRect(),{top:pe,height:be}=ve.getBoundingClientRect();pe<ue?de(le.value.scrollTop+pe-ue):pe+be>ue+me&&de(le.value.scrollTop+pe+be-ue-me)}})}),()=>{const ce=b.items.length?renderChildren(b.items,b.headerDepth):j.value.headers?renderChildren(j.value.headers,b.headerDepth):null;return ce?h$5("div",{class:"toc-place-holder"},[h$5("aside",{id:"toc"},[h$5("div",{class:"toc-header"},ie.value.toc),h$5("div",{class:"toc-wrapper",ref:le},[ce])])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(b,{slots:T}){const j=usePageFrontmatter(),{isDarkMode:ie}=useDarkMode(),le=useThemeLocaleData(),de=computed(()=>j.value.toc||j.value.toc!==!1&&le.value.toc!==!1);return()=>h$5("main",{class:"page",id:"main-content"},h$5(St("LocalEncrypt")?resolveComponent("LocalEncrypt"):wt,()=>{var ce,ve,ue,me;return[(ce=T.top)==null?void 0:ce.call(T),h$5(BreadCrumb),h$5(PageTitle),de.value?h$5(TOC,{headerDepth:j.value.headerDepth??le.value.headerDepth??2}):null,(ve=T.contentBefore)==null?void 0:ve.call(T),h$5(MarkdownContent),(ue=T.contentAfter)==null?void 0:ue.call(T),h$5(PageMeta),h$5(PageNav),St("CommentService")?h$5(resolveComponent("CommentService"),{darkmode:ie.value}):null,(me=T.bottom)==null?void 0:me.call(T)]}))}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(b,{slots:T}){const j=useScrollPromise(),ie=j.resolve,le=j.pending;return()=>h$5(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:ie,onBeforeLeave:le},()=>{var de;return(de=T.default)==null?void 0:de.call(T)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(b){const T=useRoute(),j=useThemeLocaleData(),ie=ref();watch(()=>T.path,()=>ie.value.focus());const le=({target:de})=>{const ce=document.querySelector(de.hash);if(ce){const ve=()=>{ce.removeAttribute("tabindex"),ce.removeEventListener("blur",ve)};ce.setAttribute("tabindex","-1"),ce.addEventListener("blur",ve),ce.focus(),window.scrollTo(0,0)}};return()=>[h$5("span",{ref:ie,tabindex:"-1"}),h$5("a",{href:`#${b.content}`,class:"skip-link sr-only",onClick:le},j.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const b=useThemeData(),T=useThemeLocaleData(),j=usePageData(),ie=usePageFrontmatter(),le=useMobile(),de=computed(()=>T.value.blog.sidebarDisplay||b.value.blog.sidebarDisplay||"mobile");return()=>[h$5(SkipLink),h$5(CommonWrapper,{},{default:()=>ie.value.home?h$5(HomePage):h$5(FadeSlideY,()=>h$5(NormalPage,{key:j.value.path})),...de.value!=="none"?{navScreenBottom:()=>h$5(resolveComponent("BloggerInfo"))}:{},...!le.value&&de.value==="always"?{sidebar:()=>h$5(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const b=useRouteLocale(),T=useThemeLocaleData(),j=()=>{const le=T.value.routeLocales.notFoundMsg;return le[Math.floor(Math.random()*le.length)]},{navigate:ie}=useLink({to:T.value.home??b.value});return()=>[h$5(SkipLink),h$5(CommonWrapper,{noSidebar:!0},()=>h$5("main",{class:"page not-found",id:"main-content"},[h$5(NotFoundIcon),h$5("blockquote",j()),h$5("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},T.value.routeLocales.back),h$5("button",{class:"action-button",onClick:()=>ie()},T.value.routeLocales.home)]))]}}),index="",icons={Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>',BiliBili:'<svg class="icon bilibili-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#1296db"/><path d="M745.363 177.725a46.875 46.875 0 0 1 0 66.3L702.5 286.85h43.875A140.625 140.625 0 0 1 887 427.512v281.25a140.625 140.625 0 0 1-140.625 140.626h-468.75A140.625 140.625 0 0 1 137 708.763v-281.25a140.625 140.625 0 0 1 140.625-140.625h43.725l-42.788-42.825a46.875 46.875 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a46.875 46.875 0 0 1 66.3 0zm1.012 203.25h-468.75a46.875 46.875 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a46.875 46.875 0 0 0 46.763-43.387l.112-3.487v-281.25c0-25.875-21-46.875-46.875-46.876zm-375 93.75c25.875 0 46.875 21 46.875 46.875v46.875a46.875 46.875 0 1 1-93.75 0V521.6c0-25.875 21-46.875 46.875-46.875zm281.25 0c25.875 0 46.875 21 46.875 46.875v46.875a46.875 46.875 0 1 1-93.75 0V521.6c0-25.875 21-46.875 46.875-46.875z" fill="#fff"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 0 1-12.682 0L246.7 415.274z"/></svg>',张安然:'<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{使用指南:{path:"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-6e19edb7","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52"]},其他:{path:"/category/%E5%85%B6%E4%BB%96/",keys:["v-4ddb96f4"]},Android:{path:"/category/android/",keys:["v-bc2682d8","v-1f37820e"]},香蕉:{path:"/category/%E9%A6%99%E8%95%89/",keys:["v-dfefb10e"]},水果:{path:"/category/%E6%B0%B4%E6%9E%9C/",keys:["v-dfefb10e"]},MySQL:{path:"/category/mysql/",keys:["v-3f1edcbb"]},webpack:{path:"/category/webpack/",keys:["v-d6a6efb0"]}}},"/en":{path:"/encategory/",map:{Guide:{path:"/encategory/guide/",keys:["v-0e4acecb","v-395cd082","v-70eda030","v-3777b6d3","v-4a2a37eb"]},Cherry:{path:"/encategory/cherry/",keys:["v-fb852992"]},"Dragon Fruit":{path:"/encategory/dragon-fruit/",keys:["v-4fd051a1"]},Fruit:{path:"/encategory/fruit/",keys:["v-57615dc1","v-4fd051a1","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138"]},Strawberry:{path:"/encategory/strawberry/",keys:["v-57615dc1"]},Vegetable:{path:"/encategory/vegetable/",keys:["v-285adf66"]},Apple:{path:"/encategory/apple/",keys:["v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},Banana:{path:"/encategory/banana/",keys:["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]}}}},tag:{"/":{path:"/tag/",map:{禁用:{path:"/tag/%E7%A6%81%E7%94%A8/",keys:["v-4e65ec78"]},文章加密:{path:"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",keys:["v-c151bf32"]},Markdown:{path:"/tag/markdown/",keys:["v-438ffe52"]},页面配置:{path:"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",keys:["v-6e19edb7"]},使用指南:{path:"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-6e19edb7"]},理财:{path:"/tag/%E7%90%86%E8%B4%A2/",keys:["v-4ddb96f4"]},Android:{path:"/tag/android/",keys:["v-bc2682d8"]},js:{path:"/tag/js/",keys:["v-dfefb10e"]},弯曲的:{path:"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",keys:["v-dfefb10e"]},长:{path:"/tag/%E9%95%BF/",keys:["v-dfefb10e"]},MySQL:{path:"/tag/mysql/",keys:["v-3f1edcbb"]},webpack5:{path:"/tag/webpack5/",keys:["v-d6a6efb0"]},配置文件API示例:{path:"/tag/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6api%E7%A4%BA%E4%BE%8B/",keys:["v-d6a6efb0"]}}},"/en":{path:"/entag/",map:{disable:{path:"/entag/disable/",keys:["v-70eda030"]},encryption:{path:"/entag/encryption/",keys:["v-3777b6d3"]},Markdown:{path:"/entag/markdown/",keys:["v-4a2a37eb"]},"Page config":{path:"/entag/page-config/",keys:["v-0e4acecb"]},Guide:{path:"/entag/guide/",keys:["v-0e4acecb"]},red:{path:"/entag/red/",keys:["v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},small:{path:"/entag/small/",keys:["v-57615dc1","v-fb852992"]},round:{path:"/entag/round/",keys:["v-285adf66","v-fb852992","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},big:{path:"/entag/big/",keys:["v-4fd051a1","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},yellow:{path:"/entag/yellow/",keys:["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]},curly:{path:"/entag/curly/",keys:["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]},long:{path:"/entag/long/",keys:["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]}}}}},typeMap={article:{"/":{path:"/article/",keys:["v-6e19edb7","v-d6a6efb0","v-184f4da6","v-2e3eac9e","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52","v-bc2682d8","v-dfefb10e","v-4ddb96f4","v-a278d5a4","v-1f37820e","v-23bac6bf","v-25e47600","v-d1280c4e","v-dfca70ca","v-5717f9dc","v-75c6bce4","v-caabd36c","v-24913129","v-f537cc42","v-d01394f2","v-79c4cae9","v-6fc15e29","v-de9741e0","v-46ece9fd","v-62d694f6","v-336cfd98","v-00cab512","v-1202e086","v-4ceaa060","v-7ff89994","v-0fe7edfb","v-4f505016","v-0e9dadd6","v-8f2096f8","v-5f6c3872","v-7fc937ae","v-3f1edcbb"]},"/en":{path:"/enarticle/",keys:["v-285adf66","v-0e4acecb","v-5aa3d8ba","v-367b840a","v-395cd082","v-70eda030","v-3777b6d3","v-4a2a37eb","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]}},star:{"/":{path:"/star/",keys:["v-6e19edb7","v-d6a6efb0"]},"/en":{path:"/enstar/",keys:["v-e3de7730","v-285adf66","v-55405276","v-0e4acecb"]}},timeline:{"/":{path:"/timeline/",keys:["v-184f4da6","v-2e3eac9e","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52","v-bc2682d8","v-dfefb10e","v-6e19edb7","v-4ddb96f4","v-a278d5a4","v-1f37820e","v-23bac6bf","v-25e47600","v-d1280c4e","v-dfca70ca","v-5717f9dc","v-75c6bce4","v-caabd36c","v-24913129","v-f537cc42","v-d01394f2","v-79c4cae9","v-6fc15e29","v-de9741e0","v-46ece9fd","v-62d694f6","v-336cfd98","v-00cab512","v-1202e086","v-4ceaa060","v-7ff89994","v-0fe7edfb","v-4f505016","v-0e9dadd6","v-8f2096f8","v-5f6c3872","v-7fc937ae"]},"/en":{path:"/entimeline/",keys:["v-5aa3d8ba","v-367b840a","v-395cd082","v-70eda030","v-3777b6d3","v-4a2a37eb","v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-0e4acecb"]}}},l$1=ref(categoryMap),k=(b="")=>{const T=useRouter(),j=useRoute(),ie=useRouteLocale();return computed(()=>{var le;const de=b||((le=usePageFrontmatter().value.blog)==null?void 0:le.key)||"";if(!de)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const ce=T.getRoutes();if(!l$1.value[de])throw new Error(`useBlogCategory: key ${de} is invalid`);const ve=l$1.value[de][ie.value],ue={path:ve.path,map:{}};for(const me in ve.map){const pe=ve.map[me];ue.map[me]={path:pe.path,items:[]};for(const be of pe.keys){const he=ce.find(({name:fe})=>fe===be);if(he){const fe=lt(T,he.path);ue.map[me].items.push({path:fe.path,info:fe.meta})}}j.path===pe.path&&(ue.currentItems=ue.map[me].items)}return ue})},_$1=ref(typeMap),C=(b="")=>{const T=useRouter(),j=useRouteLocale();return computed(()=>{var ie;const le=b||((ie=usePageFrontmatter().value.blog)==null?void 0:ie.key)||"";if(!le)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!_$1.value[le])throw new Error(`useBlogType: key ${b} is invalid`);const de=T.getRoutes(),ce=_$1.value[le][j.value],ve={path:ce.path,items:[]};for(const ue of ce.keys){const me=de.find(({name:pe})=>pe===ue);if(me){const pe=lt(T,me.path);ve.items.push({path:pe.path,info:pe.meta})}}return ve})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const b=inject(categoryMapSymbol);if(!b)throw new Error("useCategoryMap() is called without provider.");return b},setupCategoryMap=()=>{const b=k("category");provide(categoryMapSymbol,b)},useBlogOptions=()=>{const b=useThemeData(),T=useThemeLocaleData();return computed(()=>({...b.value.blog,...T.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const b=inject(tagMapSymbol);if(!b)throw new Error("useTagMap() is called without provider.");return b},setupTagMap=()=>{const b=k("tag");provide(tagMapSymbol,b)},useArticleAuthor=b=>{const T=useThemeLocaleData();return computed(()=>{const{["a"]:j}=b.value;return j?Jt(j):j===!1?[]:Jt(T.value.author,!1)})},useArticleCategory=b=>{const T=useCategoryMap();return computed(()=>qt(b.value.c).map(j=>({name:j,path:T.value.map[j].path})))},useArticleTag=b=>{const T=useTagMap();return computed(()=>Gt(b.value.g).map(j=>({name:j,path:T.value.map[j].path})))},useArticleDate=b=>computed(()=>{const{["d"]:T}=b.value;return T?et(T):null}),useArticleInfo=b=>{const T=toRef(b,"info"),j=useBlogOptions(),ie=useArticleAuthor(T),le=useArticleCategory(T),de=useArticleTag(T),ce=useArticleDate(T),ve=computed(()=>({author:ie.value,category:le.value,date:ce.value,localizedDate:T.value.l||"",tag:de.value,isOriginal:T.value.o||!1,readingTime:T.value.r||null,pageview:b.path})),ue=computed(()=>j.value.articleInfo);return{info:ve,items:ue}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const b=inject(articlesSymbol);if(!b)throw new Error("useArticles() is called without provider.");return b},setupArticles=()=>{const b=C("article");provide(articlesSymbol,b)},starsSymbol=Symbol.for("stars"),useStars=()=>{const b=inject(starsSymbol);if(!b)throw new Error("useStars() is called without provider.");return b},setupStars=()=>{const b=C("star");provide(starsSymbol,b)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const b=inject(timelinesSymbol);if(!b)throw new Error("useTimelines() is called without provider.");return b},setupTimelines=()=>{const b=C("timeline"),T=computed(()=>{const j=[];return b.value.items.forEach(({info:ie,path:le})=>{var ue;const{year:de,month:ce,day:ve}=((ue=et(ie.d))==null?void 0:ue.info)||{};de&&ce&&ve&&((!j[0]||j[0].year!==de)&&j.unshift({year:de,items:[]}),j[0].items.push({date:`${ce}/${ve}`,info:ie,path:le}))}),{...b.value,config:j.reverse()}});provide(timelinesSymbol,T)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const b=useBlogOptions(),T=usePure(),j=computed(()=>{const ie=b.value.medias;return ie?Object.entries(ie).map(([le,de])=>({name:le,icon:icons[le],url:de})):[]});return()=>j.value.length?h$5("div",{class:"social-media-wrapper"},j.value.map(({name:ie,icon:le,url:de})=>h$5("a",{class:"social-media",href:de,rel:"noopener noreferrer",target:"_blank","aria-label":ie,...T.value?{}:{"data-balloon-pos":"up"},innerHTML:le}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const b=useBlogOptions(),T=useSiteLocaleData(),j=useThemeLocaleData(),ie=useArticles(),le=useCategoryMap(),de=useTagMap(),ce=useTimelines(),ve=useNavigate(),ue=computed(()=>{var he;return b.value.name||((he=Jt(j.value.author)[0])==null?void 0:he.name)||T.value.title}),me=computed(()=>b.value.avatar||j.value.logo),pe=computed(()=>j.value.blogLocales),be=computed(()=>b.value.intro);return()=>h$5("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$5("div",{class:"blogger",...be.value?{style:{cursor:"pointer"},"aria-label":pe.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>ve(be.value)}:{}},[me.value?h$5("img",{class:["blogger-avatar",{round:b.value.roundAvatar}],src:withBase(me.value),property:"image",alt:"Blogger Avatar"}):null,ue.value?h$5("div",{class:"blogger-name",property:"name"},ue.value):null,b.value.description?h$5("div",{class:"blogger-description",innerHTML:b.value.description}):null,be.value?h$5("meta",{property:"url",content:withBase(be.value)}):null]),h$5("div",{class:"num-wrapper"},[h$5("div",{onClick:()=>ve(ie.value.path)},[h$5("div",{class:"num"},ie.value.items.length),h$5("div",pe.value.article)]),h$5("div",{onClick:()=>ve(le.value.path)},[h$5("div",{class:"num"},Object.keys(le.value.map).length),h$5("div",pe.value.category)]),h$5("div",{onClick:()=>ve(de.value.path)},[h$5("div",{class:"num"},Object.keys(de.value.map).length),h$5("div",pe.value.tag)]),h$5("div",{onClick:()=>ve(ce.value.path)},[h$5("div",{class:"num"},ce.value.items.length),h$5("div",pe.value.timeline)])]),h$5(SocialMedia)])}}),CategoryIcon=()=>h$5(ct,{name:"category"},()=>h$5("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$5(ct,{name:"tag"},()=>h$5("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$5(ct,{name:"timeline"},()=>h$5("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$5(ct,{name:"slides"},()=>h$5("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$5(ct,{name:"sticky"},()=>[h$5("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$5(ct,{name:"article"},()=>h$5("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$5(ct,{name:"book"},()=>h$5("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$5(ct,{name:"link"},()=>h$5("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$5(ct,{name:"project"},()=>h$5("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$5(ct,{name:"friend"},()=>h$5("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$5(ct,{name:"slide-down"},()=>h$5("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$5("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$5(ct,{name:"lock"},()=>h$5("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(b){const T=toRef(b,"info"),{info:j,items:ie}=useArticleInfo(b);return()=>h$5("div",{class:"article-item"},h$5("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[T.value.u?h$5(StickyIcon):null,h$5(RouterLink,{to:b.path},()=>[h$5("header",{class:"title"},[T.value.n?h$5(LockIcon):null,T.value.y==="s"?h$5(SlideIcon):null,h$5("span",{property:"headline"},T.value.title),T.value.v?h$5("meta",{property:"image",content:withBase(T.value.v)}):null])]),T.value.e?h$5("div",{class:"article-excerpt",innerHTML:T.value.e}):null,h$5("hr",{class:"hr"}),h$5(PageInfo,{info:j.value,...ie.value?{items:ie.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:b=>!0},setup(b,{emit:T}){let j;const ie=useThemeLocaleData(),le=ref(""),de=computed(()=>ie.value.paginationLocales),ce=computed(()=>Math.ceil(b.total/b.perPage)),ve=computed(()=>Boolean(ce.value)&&ce.value!==1),ue=computed(()=>ce.value<7?!1:b.current>4),me=computed(()=>ce.value<7?!1:b.current<ce.value-3),pe=computed(()=>{const{current:fe}=b;let ye=1,_e=ce.value;const Ee=[];ce.value>=7&&(fe<=4&&fe<ce.value-3?(ye=1,_e=5):fe>4&&fe>=ce.value-3?(_e=ce.value,ye=ce.value-4):ce.value>7&&(ye=fe-2,_e=fe+2));for(let Ae=ye;Ae<=_e;Ae++)Ee.push(Ae);return Ee}),be=fe=>T("updateCurrentPage",fe),he=fe=>{const ye=parseInt(fe);ye<=ce.value&&ye>0?be(ye):j.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${de.value.errorText.replace(/\$page/g,ce.value.toString())}`)};return onMounted(()=>{j=new kt}),()=>h$5("div",{class:"pagination-wrapper"},ve.value?h$5("div",{class:"pagination-list"},[h$5("div",{class:"page-number"},[b.current>1?h$5("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>be(b.current-1)},de.value.prev):null,...ue.value?[h$5("div",{role:"navigation",onClick:()=>be(1)},1),h$5("div",{class:"ellipsis"},"...")]:[],...pe.value.map(fe=>h$5("div",{key:fe,class:{active:b.current===fe},role:"navigation",onClick:()=>be(fe)},fe)),...me.value?[h$5("div",{class:"ellipsis"},"..."),h$5("div",{role:"navigation",onClick:()=>be(ce.value)},ce.value)]:[],b.current<ce.value?h$5("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>be(b.current+1)},de.value.next):null]),h$5("div",{class:"navigate-wrapper"},[h$5("label",{for:"navigation-text"},`${de.value.navigate}: `),h$5("input",{id:"navigation-text",value:le.value,onInput:({target:fe})=>{le.value=fe.value},onKeydown:fe=>{fe.key==="Enter"&&(fe.preventDefault(),he(le.value))}}),h$5("button",{class:"navigate",role:"navigation",title:de.value.action,onClick:()=>he(le.value)},de.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(b){const T=useRoute(),j=useRouter(),ie=useBlogOptions(),le=ref(1),de=computed(()=>ie.value.articlePerPage||10),ce=computed(()=>b.items.slice((le.value-1)*de.value,le.value*de.value)),ve=ue=>{le.value=ue;const me={...T.query};me.page===ue.toString()||ue===1&&!me.page||(ue===1?delete me.page:me.page=ue.toString(),j.push({path:T.path,query:me}))};return watch(le,()=>{const ue=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,ue)},100)}),onMounted(()=>{const{page:ue}=T.query;ve(ue?Number(ue):1)}),()=>h$5("div",{id:"article-list",class:"article-wrapper"},ce.value.length?[...ce.value.map(({info:ue,path:me},pe)=>h$5(DropTransition,{appear:!0,delay:pe*.04},()=>h$5(ArticleItem,{key:me,info:ue,path:me}))),h$5(Pagination,{current:le.value,perPage:de.value,total:b.items.length,onUpdateCurrentPage:ve})]:h$5(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const b=useRoute(),T=useCategoryMap();return()=>h$5("ul",{class:"category-list-wrapper"},Object.entries(T.value.map).map(([j,{path:ie,items:le}])=>h$5("li",{class:["category",`category${Ut(j,9)}`,{active:ie===b.path}]},h$5(RouterLink,{to:ie},()=>[j,h$5("span",{class:"category-num"},le.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const b=usePageFrontmatter(),T=useTagMap(),j=ie=>{var le;return ie===((le=b.value.blog)==null?void 0:le.name)};return()=>h$5("ul",{class:"tag-list-wrapper"},Object.entries(T.value.map).map(([ie,{path:le,items:de}])=>h$5("li",{class:["tag",`tag${Ut(ie,9)}`,{active:j(ie)}]},h$5(RouterLink,{to:le},()=>[ie,h$5("span",{class:"tag-num"},de.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const b=useThemeLocaleData(),T=useTimelines(),j=useNavigate(),ie=computed(()=>b.value.blogLocales.timeline);return()=>h$5("div",{class:"timeline-list-wrapper"},[h$5("div",{class:"timeline-list-title",onClick:()=>j(T.value.path)},[h$5(TimelineIcon),h$5("span",{class:"num"},T.value.items.length),ie.value]),h$5("hr"),h$5("div",{class:"timeline-content"},h$5("ul",{class:"timeline-list"},T.value.config.map(({year:le,items:de},ce)=>h$5(DropTransition,{appear:!0,delay:.08*(ce+1)},()=>h$5("li",[h$5("h3",{class:"timeline-year"},le),h$5("ul",{class:"timeline-year-wrapper"},de.map(({date:ve,info:ue,path:me})=>h$5("li",{class:"timeline-item"},[h$5("span",{class:"timeline-date"},ve),h$5(RouterLink,{class:"timeline-title",to:me},()=>ue.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const b=useThemeLocaleData(),T=useArticles(),j=useCategoryMap(),ie=computed(()=>Object.keys(j.value.map).length),le=useStars(),de=useTagMap(),ce=computed(()=>Object.keys(de.value.map).length),ve=useNavigate(),ue=ref("article"),me=computed(()=>b.value.blogLocales),pe=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$5("div",{class:"blog-info-list"},[h$5("div",{class:"blog-type-wrapper"},pe.map(([be,he])=>h$5("button",{class:"blog-type-button",onClick:()=>{ue.value=be}},h$5("div",{class:["icon-wrapper",{active:ue.value===be}],"aria-label":me.value[be],"data-balloon-pos":"up"},h$5(he))))),ue.value==="article"?h$5(DropTransition,()=>[h$5("div",{class:"sticky-article-wrapper"},[h$5("div",{class:"title",onClick:()=>ve(T.value.path)},[h$5(ArticleIcon),h$5("span",{class:"num"},T.value.items.length),me.value.article]),h$5("hr"),h$5("ul",{class:"sticky-article-list"},le.value.items.map(({info:be,path:he},fe)=>h$5(DropTransition,{appear:!0,delay:.08*(fe+1)},()=>h$5("li",{class:"sticky-article"},h$5(RouterLink,{to:he},()=>be.title)))))])]):null,ue.value==="category"?h$5(DropTransition,()=>[h$5("div",{class:"category-wrapper"},[ie.value?h$5("div",{class:"title",onClick:()=>ve(j.value.path)},[h$5(CategoryIcon),h$5("span",{class:"num"},ie.value),me.value.category]):null,h$5("hr"),h$5(DropTransition,{delay:.04},()=>h$5(CategoryList))])]):null,ue.value==="tag"?h$5(DropTransition,()=>[h$5("div",{class:"tag-wrapper"},[ce.value?h$5("div",{class:"title",onClick:()=>ve(de.value.path)},[h$5(TagIcon),h$5("span",{class:"num"},ce.value),me.value.tag]):null,h$5("hr"),h$5(DropTransition,{delay:.04},()=>h$5(TagList))])]):null,ue.value==="timeline"?h$5(DropTransition,()=>h$5(TimelineList)):null])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup(b,{slots:T}){const j=useMobile();return()=>[h$5(SkipLink),h$5(CommonWrapper,{noSidebar:!0},{default:()=>{var ie;return(ie=T.default)==null?void 0:ie.call(T)},navScreenBottom:()=>h$5(BloggerInfo),...j.value?{sidebar:()=>h$5(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$5("aside",{class:"blog-info-wrapper"},[h$5(DropTransition,()=>h$5(BloggerInfo)),h$5(DropTransition,{delay:.04},()=>h$5(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const b=usePageFrontmatter(),T=useRoute(),j=useCategoryMap(),ie=useTagMap(),le=computed(()=>b.value.blog||{}),de=computed(()=>{const{key:ve=""}=le.value;return ve==="category"?"CategoryList":ve==="tag"?"TagList":null}),ce=computed(()=>{const{name:ve="",key:ue=""}=le.value;return ue==="category"?ve?j.value.map[ve].items:[]:ue==="tag"?ve?ie.value.map[ve].items:[]:[]});return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,()=>de.value?h$5(resolveComponent(de.value)):null),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{key:T.path,items:ce.value}))]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),defaultHeroBgImagePath="/zar_blog/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const b=usePageHeadTitle(),T=usePageFrontmatter(),j=ref(),ie=computed(()=>T.value.heroImage||null),le=computed(()=>T.value.heroFullScreen||!1),de=computed(()=>({...{maxHeight:"180px",margin:T.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...T.value.heroImageStyle})),ce=computed(()=>T.value.bgImage?withBase(T.value.bgImage):T.value.bgImage??defaultHeroBgImagePath),ve=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...T.value.bgImageStyle}));return()=>T.value.hero!==!1?h$5("div",{ref:j,class:["blog-hero",{fullscreen:le.value}],style:ve.value},[ce.value?h$5("div",{class:"mask",style:{background:`url(${ce.value}) center/cover no-repeat`}}):null,h$5(DropTransition,{appear:!0,delay:.04},()=>ie.value?h$5("img",{class:"hero-image",style:de.value,src:withBase(ie.value),alt:T.value.heroAlt||"hero image"}):null),h$5(DropTransition,{appear:!0,delay:.08},()=>T.value.heroText!==!1?h$5("h1",T.value.heroText||b.value):null),h$5(DropTransition,{appear:!0,delay:.12},()=>T.value.tagline?h$5("p",{class:"description",innerHTML:T.value.tagline}):null),le.value?h$5("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:j.value.clientHeight,behavior:"smooth"})}},[h$5(SlideDownIcon),h$5(SlideDownIcon)]):null]):null}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const b=usePageFrontmatter(),T=usePure(),j=useNavigate(),ie=(le="",de="icon")=>AVAILABLE_PROJECT_TYPES.includes(le)?h$5(resolveComponent(`${le}-icon`)):le.match(/^https?:\/\//)?h$5("img",{src:le,alt:de,class:"image"}):le.startsWith("/")?h$5("img",{src:withBase(le),alt:de,class:"image"}):h$5(Icon,{icon:le});return()=>{var le;return(le=b.value.projects)!=null&&le.length?h$5("div",{class:"project-panel"},b.value.projects.map(({icon:de,link:ce,name:ve,desc:ue},me)=>h$5("div",{class:["project",{[`project${me%9}`]:!T.value}],onClick:()=>j(ce)},[ie(de,ve),h$5("div",{class:"name"},ve),h$5("div",{class:"desc"},ue)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const b=useArticles();return()=>h$5("div",{class:"page blog"},[h$5(BlogHero),h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-home",id:"main-content"},[h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(ProjectPanel)),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{items:b.value.items}))]),h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(InfoPanel))]),h$5(DropTransition,{appear:!0,delay:.28},()=>h$5(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$5(BlogWrapper,()=>h$5(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const b=useRouteLocale(),T=useThemeLocaleData(),j=useRoute(),ie=useArticles(),le=useStars(),de=computed(()=>{const ce=T.value.blogLocales;return[{text:ce.all,path:ie.value.path},{text:ce.star,path:le.value.path},...[].map(({key:ve,path:ue})=>({text:ce[ve],path:ue.replace(/^\//,b.value)}))]});return()=>h$5("ul",{class:"article-type-wrapper"},de.value.map(ce=>h$5("li",{class:["article-type",{active:ce.path===j.path}]},h$5(RouterLink,{to:ce.path},()=>ce.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const b=C(),T=usePageFrontmatter(),j=useRoute(),ie=useArticles(),le=useStars(),de=computed(()=>{const{key:ce="",type:ve}=T.value.blog||{};return ce==="star"?le.value.items:ve==="type"&&ce?b.value.items:ie.value.items});return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,()=>h$5(ArticleType)),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{key:j.path,items:de.value}))]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const b=useBlogOptions(),T=useThemeLocaleData(),j=useTimelines(),ie=computed(()=>b.value.timeline||T.value.blogLocales.timelineTitle),le=computed(()=>j.value.config.map(({year:de})=>({title:de.toString(),level:2,slug:de.toString(),children:[]})));return()=>h$5("div",{class:"timeline-wrapper"},h$5("ul",{class:"timeline-content"},[h$5(DropTransition,()=>h$5("li",{class:"motto"},ie.value)),h$5(TOC,{items:le.value}),...j.value.config.map(({year:de,items:ce},ve)=>h$5(DropTransition,{appear:!0,delay:.08*(ve+1),type:"group"},()=>[h$5("h3",{key:"title",id:de,class:"timeline-year-title"},h$5("span",de)),h$5("li",{key:"content",class:"timeline-year-list"},[h$5("ul",{class:"timeline-year-wrapper"},ce.map(({date:ue,info:me,path:pe})=>h$5("li",{class:"timeline-item"},[h$5("span",{class:"timeline-date"},ue),h$5(RouterLink,{class:"timeline-title",to:pe},()=>me.title)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(TimelineItems))]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),layout="",passwordModal="",PasswordModal=defineComponent({name:"PasswordModal",props:{full:Boolean},emits:{verify:(b,T)=>!0},setup(b,{emit:T}){const j=usePageFrontmatter(),ie=useThemeLocaleData(),le=ref(""),de=ref(!1),ce=ref(!1),ve=computed(()=>ie.value.encryptLocales);let ue=null;const me=()=>{ue&&clearTimeout(ue),de.value=!1,T("verify",le.value,ce.value),nextTick().then(()=>{de.value=!0,ue=setTimeout(()=>{de.value=!1},1e3)})};return()=>h$5("div",{class:["password-layer",{expand:b.full||j.value.home}]},h$5("div",{class:"password-modal"},[h$5("div",{class:["hint",{tried:de.value}]},de.value?ve.value.errorHint:h$5(LockIcon,{"aria-label":ve.value.iconLabel})),h$5("div",{class:"password"},[h$5("input",{type:"password",value:le.value,placeholder:ve.value.placeholder,onInput:({target:pe})=>{le.value=pe.value},onKeydown:({key:pe})=>{pe==="Enter"&&me()}})]),h$5("div",{class:"remember-password"},[h$5("input",{type:"checkbox",value:ce.value,onChange:()=>ce.value=!ce.value}),ve.value.remember]),h$5("button",{class:"submit",onClick:()=>me()},"OK")]))}}),r="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],e=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],n=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],o=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],s=(b,T)=>{if(T<=0||T>b.length)throw Error(`Illegal len: ${T}`);let j,ie,le=0;const de=[];for(;le<T;){if(j=255&b[le++],de.push(r[j>>2&63]),j=(3&j)<<4,le>=T){de.push(r[63&j]);break}if(ie=255&b[le++],j|=ie>>4&15,de.push(r[63&j]),j=(15&ie)<<2,le>=T){de.push(r[63&j]);break}ie=255&b[le++],j|=ie>>6&3,de.push(r[63&j]),de.push(r[63&ie])}return de.join("")},l=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,f$2=(b,T,j,ie)=>{let le,de=b[T],ce=b[T+1];return de^=j[0],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[1],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[2],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[3],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[4],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[5],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[6],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[7],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[8],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[9],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[10],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[11],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[12],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[13],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[14],le=ie[de>>>24],le+=ie[256|de>>16&255],le^=ie[512|de>>8&255],le+=ie[768|255&de],ce^=le^j[15],le=ie[ce>>>24],le+=ie[256|ce>>16&255],le^=ie[512|ce>>8&255],le+=ie[768|255&ce],de^=le^j[16],b[T]=ce^j[17],b[T+1]=de,b},i=(b,T)=>{let j=0;for(let ie=0;ie<4;++ie)j=j<<8|255&b[T],T=(T+1)%b.length;return{key:j,offp:T}},u$1=(b,T,j)=>{const ie=T.length,le=j.length;let de,ce=0,ve=[0,0];for(let ue=0;ue<ie;ue++)de=i(b,ce),ce=de.offp,T[ue]=T[ue]^de.key;for(let ue=0;ue<ie;ue+=2)ve=f$2(ve,0,T,j),T[ue]=ve[0],T[ue+1]=ve[1];for(let ue=0;ue<le;ue+=2)ve=f$2(ve,0,T,j),j[ue]=ve[0],j[ue+1]=ve[1]},h$1=(b,T,j,ie,le)=>{const de=o.slice(),ce=de.length;if(j<4||j>31){const he=new Error(`Illegal number of rounds (4-31): ${j}`);if(ie===!1)return Promise.reject(he);throw he}if(T.length!==16){const he=new Error(`Illegal salt length: ${T.length} != 16`);if(ie===!1)return Promise.reject(he);throw he}let ve,ue;j=1<<j>>>0;let me,pe=0;Int32Array?(ve=new Int32Array(e),ue=new Int32Array(n)):(ve=e.slice(),ue=n.slice()),((he,fe,ye,_e)=>{const Ee=ye.length,Ae=_e.length;let ge,$e=0,De=[0,0];for(let Ce=0;Ce<Ee;Ce++)ge=i(fe,$e),$e=ge.offp,ye[Ce]=ye[Ce]^ge.key;$e=0;for(let Ce=0;Ce<Ee;Ce+=2)ge=i(he,$e),$e=ge.offp,De[0]^=ge.key,ge=i(he,$e),$e=ge.offp,De[1]^=ge.key,De=f$2(De,0,ye,_e),ye[Ce]=De[0],ye[Ce+1]=De[1];for(let Ce=0;Ce<Ae;Ce+=2)ge=i(he,$e),$e=ge.offp,De[0]^=ge.key,ge=i(he,$e),$e=ge.offp,De[1]^=ge.key,De=f$2(De,0,ye,_e),_e[Ce]=De[0],_e[Ce+1]=De[1]})(T,b,ve,ue);const be=()=>{if(le&&le(pe/j),!(pe<j)){for(pe=0;pe<64;pe++)for(me=0;me<ce>>1;me++)f$2(de,me<<1,ve,ue);const he=[];for(pe=0;pe<ce;pe++)he.push((de[pe]>>24&255)>>>0),he.push((de[pe]>>16&255)>>>0),he.push((de[pe]>>8&255)>>>0),he.push((255&de[pe])>>>0);return ie===!1?Promise.resolve(he):he}{const he=Date.now();for(;pe<j&&(pe+=1,u$1(b,ve,ue),u$1(T,ve,ue),!(Date.now()-he>100)););}if(ie===!1)return new Promise(he=>l(()=>{be().then(he)}))};if(ie===!1)return be();{let he;for(;;)if((he=be())!==void 0)return he||[]}},p=(b=10)=>{if(typeof b!="number")throw Error("Illegal arguments: "+typeof b);b<4?b=4:b>31&&(b=31);const T=[];return T.push("$2a$"),b<10&&T.push("0"),T.push(b.toString()),T.push("$"),T.push(s((j=>{try{let ie;return(self.crypto||self.msCrypto).getRandomValues(ie=new Uint32Array(j)),Array.prototype.slice.call(ie)}catch{throw Error("WebCryptoAPI is not available")}})(16),16)),T.join("")};function g$1(b,T,j,ie){if(typeof b!="string"||typeof T!="string"){const be=new Error("Invalid string / salt: Not a string");if(j===!1)return Promise.reject(be);throw be}let le,de;if(T.charAt(0)!=="$"||T.charAt(1)!=="2"){const be=new Error("Invalid salt version: "+T.substring(0,2));if(j===!1)return Promise.reject(be);throw be}if(T.charAt(2)==="$")le=String.fromCharCode(0),de=3;else{if(le=T.charAt(2),le!=="a"&&le!=="b"&&le!=="y"||T.charAt(3)!=="$"){const be=Error("Invalid salt revision: "+T.substring(2,4));if(j===!1)return Promise.reject(be);throw be}de=4}if(T.charAt(de+2)>"$"){const be=new Error("Missing salt rounds");if(j===!1)return Promise.reject(be);throw be}const ce=10*parseInt(T.substring(de,de+1),10)+parseInt(T.substring(de+1,de+2),10),ve=T.substring(de+3,de+25),ue=(be=>{const he=[];let fe=0;var ye;return ye=_e=>{he.push(_e)},((_e,Ee)=>{let Ae,ge=null;for(;(Ae=ge!==null?ge:_e())!==null;)Ae>=55296&&Ae<=57343&&(ge=_e())!==null&&ge>=56320&&ge<=57343?(Ee(1024*(Ae-55296)+ge-56320+65536),ge=null):Ee(Ae);ge!==null&&Ee(ge)})(()=>fe>=be.length?null:be.charCodeAt(fe++),function(_e){((Ee,Ae)=>{let ge=null;for(typeof Ee=="number"&&(ge=Ee,Ee=()=>null);ge!==null||(ge=Ee())!==null;)ge<128?Ae(127&ge):ge<2048?(Ae(ge>>6&31|192),Ae(63&ge|128)):ge<65536?(Ae(ge>>12&15|224),Ae(ge>>6&63|128),Ae(63&ge|128)):(Ae(ge>>18&7|240),Ae(ge>>12&63|128),Ae(ge>>6&63|128),Ae(63&ge|128)),ge=null})(_e,ye)}),he})(b+=le>="a"?"\0":""),me=((be,he)=>{if(he<=0)throw Error(`Illegal len: ${he}`);const fe=be.length;let ye,_e,Ee,Ae,ge,$e,De=0,Ce=0;const Te=[];for(;De<fe-1&&Ce<he&&($e=be.charCodeAt(De++),ye=$e<t.length?t[$e]:-1,$e=be.charCodeAt(De++),_e=$e<t.length?t[$e]:-1,ye!=-1&&_e!=-1)&&(ge=ye<<2>>>0,ge|=(48&_e)>>4,Te.push(String.fromCharCode(ge)),!(++Ce>=he||De>=fe))&&($e=be.charCodeAt(De++),Ee=$e<t.length?t[$e]:-1,Ee!=-1)&&(ge=(15&_e)<<4>>>0,ge|=(60&Ee)>>2,Te.push(String.fromCharCode(ge)),!(++Ce>=he||De>=fe));)$e=be.charCodeAt(De++),Ae=$e<t.length?t[$e]:-1,ge=(3&Ee)<<6>>>0,ge|=Ae,Te.push(String.fromCharCode(ge)),++Ce;return Te.map(ke=>ke.charCodeAt(0))})(ve,16),pe=be=>{const he=[];return he.push("$2"),le>="a"&&he.push(le),he.push("$"),ce<10&&he.push("0"),he.push(ce.toString()),he.push("$"),he.push(s(me,me.length)),he.push(s(be,4*o.length-1)),he.join("")};return j===!1?h$1(ue,me,ce,!1,ie).then(be=>pe(be)):pe(h$1(ue,me,ce,!0,ie))}const c=(b,T=10)=>{if(typeof T=="number"&&(T=p(T)),typeof b!="string"||typeof T!="string")throw Error("Illegal arguments: "+typeof b+", "+typeof T);return g$1(b,T,!0)},m$1=(b,T)=>{if(typeof b!="string"||typeof T!="string")throw Error("Illegal arguments: "+typeof b+", "+typeof T);return T.length===60&&c(b,T.substring(0,T.length-31))===T},useEncryptData=()=>{const b=useThemeData();return computed(()=>b.value.encrypt||{})},STORAGE_KEY$1="VUEPRESS_HOPE_GLOBAL_TOKEN",useGlobalEncrypt=()=>{const b=useEncryptData(),T=useStorage(STORAGE_KEY$1,""),j=useSessionStorage(STORAGE_KEY$1,"");return{isGlobalEncrypted:computed(()=>b.value.global&&b.value.admin?T.value?b.value.admin.every(de=>!m$1(T.value,de)):j.value?b.value.admin.every(de=>!m$1(j.value,de)):!0:!1),validateGlobalToken:(de,ce=!1)=>{(ce?T:j).value=de}}},checkToken=(b="",T)=>Boolean(b)&&m$1(b,T),STORAGE_KEY="VUEPRESS_HOPE_PATH_TOKEN",usePathEncrypt=()=>{const b=useRoute(),T=useEncryptData(),j=useStorage(STORAGE_KEY,{}),ie=useSessionStorage(STORAGE_KEY,{}),le=ue=>typeof T.value.config=="object"?Object.keys(T.value.config).filter(me=>decodeURI(ue).startsWith(me)).sort((me,pe)=>pe.length-me.length):[],de=ue=>{const me=le(ue);if(me.length!==0){const{config:pe={}}=T.value;return!me.some(be=>j.value[be]&&pe[be].some(he=>checkToken(j.value[be],he))||ie.value[be]&&pe[be].some(he=>checkToken(ie.value[be],he)))}return!1};return{isEncrypted:computed(()=>de(b.path)),getPathEncryptStatus:de,validateToken:(ue,me=!1)=>{const{config:pe={}}=T.value,be=le(b.path);for(const he of be)if(pe[he].filter(fe=>checkToken(ue,fe))){(me?j:ie).value[he]=ue;break}}}},GlobalEncrypt=defineComponent({name:"GlobalEncrypt",setup(b,{slots:T}){const{isGlobalEncrypted:j,validateGlobalToken:ie}=useGlobalEncrypt();return()=>{var le;return j.value?h$5(PasswordModal,{full:!0,onVerify:ie}):((le=T.default)==null?void 0:le.call(T))||null}}}),LocalEncrypt=defineComponent({name:"LocalEncrypt",setup(b,{slots:T}){const{isEncrypted:j,validateToken:ie}=usePathEncrypt();return()=>{var le;return j.value?h$5(PasswordModal,{full:!0,onVerify:ie}):((le=T.default)==null?void 0:le.call(T))||null}}}),slidePage="",d=()=>h$5(ct,{name:"back"},()=>h$5("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h=()=>h$5(ct,{name:"home"},()=>h$5("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f$1=defineComponent({name:"SlidePage",setup(){const b=useRouter(),T=ref(!1),j=ref(),ie=()=>{T.value=!T.value},le=()=>{T.value=!1},de=()=>{le(),window.history.go(-1)},ce=()=>{le(),b.push("/")};return onClickOutside(j,le),()=>h$5("div",{class:"presentation"},[h$5(Content),h$5("div",{ref:j,class:["menu",{active:T.value}]},[h$5("button",{class:"menu-button",onClick:()=>ie()},h$5("span",{class:"icon"})),h$5("button",{class:"back-button",onClick:()=>de()},h$5(d)),h$5("button",{class:"home-button",onClick:()=>ce()},h$5(h))])])}});const clientConfig10=defineClientConfig({enhance:({app:b,router:T})=>{const{scrollBehavior:j}=T.options;T.options.scrollBehavior=async(...ie)=>(await useScrollPromise().wait(),j(...ie)),injectDarkMode(b),b.component("BloggerInfo",BloggerInfo),b.component("GlobalEncrypt",GlobalEncrypt),b.component("LocalEncrypt",LocalEncrypt)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:f$1}}),searchBox="",searchModal="";var O;const u=typeof window<"u",K=b=>typeof b=="string",U=()=>{};u&&(O=window==null?void 0:window.navigator)!=null&&O.userAgent&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function W(b){return typeof b=="function"?b():unref(b)}function F(b){return b}function D(b){return getCurrentScope()?(onScopeDispose(b),!0):!1}function G(b){var T;const j=W(b);return(T=j==null?void 0:j.$el)!=null?T:j}const Y=u?window:void 0;function E(...b){let T,j,ie,le;if(K(b[0])||Array.isArray(b[0])?([j,ie,le]=b,T=Y):[T,j,ie,le]=b,!T)return U;Array.isArray(j)||(j=[j]),Array.isArray(ie)||(ie=[ie]);const de=[],ce=()=>{de.forEach(pe=>pe()),de.length=0},ve=(pe,be,he)=>(pe.addEventListener(be,he,le),()=>pe.removeEventListener(be,he,le)),ue=watch(()=>G(T),pe=>{ce(),pe&&de.push(...j.flatMap(be=>ie.map(he=>ve(pe,be,he))))},{immediate:!0,flush:"post"}),me=()=>{ue(),ce()};return D(me),me}const f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g="__vueuse_ssr_handlers__";f[g]=f[g]||{},f[g];var I;(function(b){b.UP="UP",b.RIGHT="RIGHT",b.DOWN="DOWN",b.LEFT="LEFT",b.NONE="NONE"})(I||(I={}));var $=Object.defineProperty,_=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,M=(b,T,j)=>T in b?$(b,T,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[T]=j,X=(b,T)=>{for(var j in T||(T={}))q.call(T,j)&&M(b,j,T[j]);if(_)for(var j of _(T))V.call(T,j)&&M(b,j,T[j]);return b};const z={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};X({linear:F},z);const m=()=>h$5(ct,{name:"search"},()=>h$5("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));m.displayName="SearchIcon";const y=Symbol.for("search-pro"),J=()=>{const b=ref(!1);provide(y,b)},Z=[{key:"k",ctrl:!0}],w={"/en":{cancel:"Cancel",placeholder:"Search",search:"Search",select:"to select",navigate:"to navigate",exit:"to exit",history:"Search History",emptyHistory:"Empty Search History",emptyResult:"No results found",loading:"Loading search indexes..."},"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},ee=b=>b instanceof Element?document.activeElement===b&&(["TEXTAREA","SELECT","INPUT"].includes(b.tagName)||b.hasAttribute("contenteditable")):!1,te=b=>Z.some(T=>{const{key:j,ctrl:ie=!1,shift:le=!1,alt:de=!1}=T;return j===b.key&&ie===b.ctrlKey&&le===b.shiftKey&&de===b.altKey});var ne=defineComponent({name:"SearchBox",setup(){const b=Mt(w),T=inject(y);return E("keydown",j=>{!T.value&&te(j)&&!ee(j.target)&&(j.preventDefault(),T.value=!0)}),()=>[h$5("div",{class:"search-pro-button",role:"search","aria-label":b.value.search,onClick:()=>{T.value=!0}},h$5(m))]}});const S=()=>h$5("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[h$5("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},h$5("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),h$5("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},h$5("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),h$5("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},h$5("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);S.displayName="LoadingIcon";const ae=defineComponent({name:"SearchLoading",setup(){const b=Mt(w);return()=>h$5("div",{class:"search-pro-result loading"},[h$5(S),b.value.loading])}}),oe=defineAsyncComponent({loader:()=>__vitePreload(()=>import("./SearchResult-14241f8c.js"),["assets/SearchResult-14241f8c.js","assets/framework-5e2051d8.js"]),loadingComponent:ae});var re=defineComponent({name:"SearchModal",setup(){const b=inject(y),T=Mt(w),j=ref(""),ie=ref(!1),le=ref();return E("keydown",de=>{b.value&&de.key==="Escape"&&(b.value=!1)}),onMounted(()=>{ie.value=Ot(navigator.userAgent),watch(b,de=>{var ce;de&&((ce=le.value)==null||ce.focus())})}),()=>b.value?h$5("div",{class:"search-pro-modal-wrapper"},[h$5("div",{class:"background",onClick:()=>{b.value=!1,j.value=""}}),h$5("div",{class:"search-pro-modal"},[h$5("div",{class:"search-pro-box"},[h$5(m),h$5("input",{ref:le,type:"text",class:"search-pro-input",placeholder:T.value.placeholder,spellcheck:"false",value:j.value,onInput:({target:de})=>{j.value=de.value}}),h$5("button",{class:"close-button",onClick:()=>{b.value=!1,j.value=""}},T.value.cancel)]),h$5(oe,{query:j.value,onClose:()=>{b.value=!1},onUpdateQuery:de=>{j.value=de}}),ie.value?null:h$5("div",{class:"search-pro-hints"},[h$5("span",{class:"search-pro-hint"},[h$5("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>'}),T.value.select]),h$5("span",{class:"search-pro-hint"},[h$5("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>'}),h$5("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>'}),T.value.navigate]),h$5("span",{class:"search-pro-hint"},[h$5("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>'}),T.value.exit])])])]):null}}),se=defineClientConfig({enhance({app:b}){b.component("SearchBox",ne)},setup(){J()},rootComponents:[re]});const clientConfigs=[clientConfig0,clientConfig1,clientConfig2,clientConfig3,clientConfig4,clientConfig5,s$1,P$2,clientConfig8,y$1,clientConfig10,se],pagesRoutes=[["v-8daa1a0e","/",{y:"h",title:"博客主页",i:"home"},["/index.html","/README.md"]],["v-184f4da6","/intro.html",{d:"2022-12-28T13:23:41.000Z",e:`<h1> 介绍页</h1>
<p>将你的个人介绍和档案放置在此处。</p>
`,r:{minutes:.07,words:20},y:"a",title:"介绍页",i:"info"},["/intro","/intro.md"]],["v-2e3eac9e","/slides.html",{d:"2022-12-28T13:23:41.000Z",e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:4.51,words:1352},y:"s",title:"幻灯片页",i:"slides"},["/slides","/slides.md"]],["v-1473bf53","/demo/",{d:"2022-12-28T13:23:41.000Z",c:["使用指南"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/zar_blog/demo/markdown.html" target="blank">Markdown 展示</a></p>
</li>
<li>
<p><a href="/zar_blog/demo/page.html" target="blank">页面展示</a></p>
</li>
<li>
<p><a href="/zar_blog/demo/disable.html" target="blank">禁用展示</a></p>
</li>
<li>
<p><a href="/zar_blog/demo/encrypt.html" target="blank">加密展示</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},y:"a",title:"主要功能与配置演示",i:"discover"},["/demo/index.html","/demo/README.md"]],["v-4e65ec78","/demo/disable.html",{d:"2022-12-28T13:23:41.000Z",c:["使用指南"],g:["禁用"],e:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,r:{minutes:.42,words:127},y:"a",title:"布局与功能禁用",i:"config"},["/demo/disable","/demo/disable.md"]],["v-c151bf32","/demo/encrypt.html",{d:"2022-12-28T13:23:41.000Z",c:["使用指南"],g:["文章加密"],n:!0,r:{minutes:.52,words:156},y:"a",title:"密码加密的文章",i:"lock"},["/demo/encrypt","/demo/encrypt.md"]],["v-438ffe52","/demo/markdown.html",{d:"2022-12-28T13:23:41.000Z",c:["使用指南"],g:["Markdown"],e:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,r:{minutes:3.87,words:1161},y:"a",title:"Markdown 展示",i:"markdown"},["/demo/markdown","/demo/markdown.md"]],["v-6e19edb7","/demo/page.html",{a:"Ms.Hope",d:"2020-01-01T00:00:00.000Z",l:"2020年1月1日",c:["使用指南"],g:["页面配置","使用指南"],u:!0,e:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,r:{minutes:1.58,words:475},y:"a",title:"页面配置",i:"page"},["/demo/page","/demo/page.md"]],["v-2d0a870d","/en/",{y:"h",title:"Blog Home",i:"home"},["/en/index.html","/en/README.md"]],["v-5aa3d8ba","/en/intro.html",{d:"2022-12-28T13:23:41.000Z",e:`<h1> Intro Page</h1>
<p>Place your introduction and profile here.</p>
`,r:{minutes:.03,words:10},y:"a",title:"Intro Page",i:"info"},["/en/intro","/en/intro.md"]],["v-367b840a","/en/slides.html",{d:"2022-12-28T13:23:41.000Z",e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:3.25,words:975},y:"s",title:"Slide page",i:"slides"},["/en/slides","/en/slides.md"]],["v-4ddb96f4","/posts/%E6%80%8E%E6%A0%B7%E9%80%89%E6%8B%A9%E5%9F%BA%E9%87%91.html",{d:"2017-02-22T11:41:02.000Z",l:"2017年2月22日",c:["其他"],g:["理财"],e:`<h3> 一. 看收益</h3>
<ul>
<li>两年中排名前十位</li>
<li>同类排名靠前</li>
<li>超过同类平均</li>
</ul>
<h3> 二.看波动(波动率)</h3>
<ul>
<li>看最大回馈</li>
<li>晨星评级</li>
</ul>
<h3> 三.看投向</h3>
<ul>
<li>谨慎选择房地产，创业板中小板（重仓持股）</li>
</ul>
<h3> 四.看基金经理</h3>
<ul>
<li>尽量一年以上，无频繁更换</li>
</ul>
<h3> 五.基金公司</h3>
<ul>
<li>从大公司中选择</li>
</ul>
<h3> <a href="https://www.zhihu.com/question/22774011" target="_blank" rel="noopener noreferrer">参考地址</a></h3>`,r:{minutes:.42,words:125},y:"a",title:"怎样选择基金",i:"edit"},["/posts/怎样选择基金.html","/posts/%E6%80%8E%E6%A0%B7%E9%80%89%E6%8B%A9%E5%9F%BA%E9%87%91","/posts/怎样选择基金.md","/posts/%E6%80%8E%E6%A0%B7%E9%80%89%E6%8B%A9%E5%9F%BA%E9%87%91.md"]],["v-395cd082","/en/demo/",{d:"2022-12-28T13:23:41.000Z",c:["Guide"],e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/zar_blog/en/demo/markdown.html" target="blank">Markdown Enhance</a></p>
</li>
<li>
<p><a href="/zar_blog/en/demo/page.html" target="blank">Page Config</a></p>
</li>
<li>
<p><a href="/zar_blog/en/demo/disable.html" target="blank">Function Disable</a></p>
</li>
<li>
<p><a href="/zar_blog/en/demo/encrypt.html" target="blank">Encryption Demo</a></p>
</li>
</ul>`,r:{minutes:.07,words:22},y:"a",title:"Features Demo",i:"discover"},["/en/demo/index.html","/en/demo/README.md"]],["v-70eda030","/en/demo/disable.html",{d:"2022-12-28T13:23:41.000Z",c:["Guide"],g:["disable"],e:`<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>
`,r:{minutes:.28,words:84},y:"a",title:"Disabling layout and features",i:"config"},["/en/demo/disable","/en/demo/disable.md"]],["v-3777b6d3","/en/demo/encrypt.html",{d:"2022-12-28T13:23:41.000Z",c:["Guide"],g:["encryption"],e:`<h1> Encryption Article</h1>
<p>The actual article content.</p>
<p>Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.</p>
<p>Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.</p>`,r:{minutes:.3,words:90},y:"a",title:"Encryption Article",i:"lock"},["/en/demo/encrypt","/en/demo/encrypt.md"]],["v-4a2a37eb","/en/demo/markdown.html",{d:"2022-12-28T13:23:41.000Z",c:["Guide"],g:["Markdown"],e:`<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>
<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>
`,r:{minutes:3.04,words:911},y:"a",title:"Markdown Enhance",i:"markdown"},["/en/demo/markdown","/en/demo/markdown.md"]],["v-0e4acecb","/en/demo/page.html",{a:"Ms.Hope",d:"2020-01-01T00:00:00.000Z",l:"January 1, 2020",c:["Guide"],g:["Page config","Guide"],u:!0,e:`<p>Content before <code>more</code> comment is regarded as page excerpt.</p>
`,r:{minutes:1.02,words:307},y:"a",title:"Page Config",i:"page"},["/en/demo/page","/en/demo/page.md"]],["v-fb852992","/en/posts/cherry.html",{d:"2022-01-09T00:00:00.000Z",l:"January 9, 2022",c:["Cherry"],g:["red","small","round"],e:`<h1> Cherry</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.08,words:25},y:"a",title:"Cherry",i:"edit"},["/en/posts/cherry","/en/posts/cherry.md"]],["v-4fd051a1","/en/posts/dragonfruit.html",{d:"2022-01-10T00:00:00.000Z",l:"January 10, 2022",c:["Dragon Fruit","Fruit"],g:["red","big"],e:`<h1> Dragon Fruit</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:27},y:"a",title:"Dragon Fruit",i:"edit"},["/en/posts/dragonfruit","/en/posts/dragonfruit.md"]],["v-57615dc1","/en/posts/strawberry.html",{d:"2022-01-11T00:00:00.000Z",l:"January 11, 2022",c:["Fruit","Strawberry"],g:["red","small"],e:`<h1> Strawberry</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.08,words:25},y:"a",title:"Strawberry",i:"edit"},["/en/posts/strawberry","/en/posts/strawberry.md"]],["v-285adf66","/en/posts/tomato.html",{d:"2022-01-12T00:00:00.000Z",l:"January 12, 2022",c:["Vegetable"],g:["red","round"],u:!0,e:`<h1> Tomato</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:28},y:"a",title:"Tomato",i:"edit"},["/en/posts/tomato","/en/posts/tomato.md"]],["v-bc2682d8","/posts/android/Android%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html",{d:"2022-01-09T00:00:00.000Z",l:"2022年1月9日",c:["Android"],g:["Android"],e:`<blockquote>
<p><a href="https://github.com/GeniusVJR/LearningNotes" target="_blank" rel="noopener noreferrer">Android学习笔记</a></p>
</blockquote>
<h2> 五种布局</h2>
<h3> LinearLayout(线性布局)</h3>
<ol>
<li>一行或者一列值放置一个控件的布局,可以设置方向,垂直排列或者水平排列,适用于简单的布局</li>
<li>适用场景:水平或者垂直的简单排列,如登录界面</li>
</ol>
<h3> RelativeLayout(相对布局)</h3>`,r:{minutes:5.83,words:1750},y:"a",title:"",i:"Android"},["/posts/android/Android基础知识.html","/posts/android/Android%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86","/posts/android/Android基础知识.md","/posts/android/Android%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md"]],["v-7fc937ae","/posts/android/Android%E6%97%A5%E5%B8%B8%E8%AE%B0%E5%BD%95.html",{d:"2017-01-09T17:59:29.000Z",l:"2017年1月9日",e:`<h2> 遇到的问题</h2>
<h3> 方法</h3>
<pre><code>1 .使用mainup 解决左边不显示焦点框
2 .使用boderview 解决recyclerview 滑动中焦点的错位
3 .使用recylcerviewtv 控制焦点在中间
4 .recyclerview 显示左边复杂布局
</code></pre>
<h4> 选择方法  1  ， 3</h4>
<pre><code>	问题 了解框架
</code></pre>
<h3> 焦点框错位</h3>
<pre><code>1. 焦点框图片     
2. 计算方法
3. 布局文件问题
</code></pre>
<h4> 选择方法</h4>`,r:{minutes:16.25,words:4874},y:"a",title:"日常笔记.md"},["/posts/android/Android日常记录.html","/posts/android/Android%E6%97%A5%E5%B8%B8%E8%AE%B0%E5%BD%95","/posts/android/Android日常记录.md","/posts/android/Android%E6%97%A5%E5%B8%B8%E8%AE%B0%E5%BD%95.md"]],["v-23bac6bf","/posts/java/Java%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 设计原则</h2>
<h3> 1.单一职责原则 :###</h3>
<blockquote>
<p>一个类只负责一个功能领域中的相应职责</p>
</blockquote>
<h3> 2. 开闭原则 :</h3>
<blockquote>
<p>一个软件实体应当对扩展开放，对修改关闭</p>
</blockquote>
<h3> 3. 里氏代换原则 :</h3>
<blockquote>
<p>所有应用基类（父类）的地方，必须能透明的使用其子类对象</p>
</blockquote>
<ol>
<li>使用原则 : 在程序设计时,尽量使用基类类型对对象进行定义,而在运行时再确定子类类型,用子类对象替换父类对象</li>
</ol>`,r:{minutes:.96,words:287},y:"a",title:"Java设计模式.md"},["/posts/java/Java设计模式.html","/posts/java/Java%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F","/posts/java/Java设计模式.md","/posts/java/Java%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md"]],["v-1f37820e","/posts/java/%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C%E7%9A%84%E5%B7%A5%E5%85%B7%E7%B1%BB.html",{d:"2017-02-22T11:04:08.000Z",l:"2017年2月22日",c:["Android"],e:`<ol>
<li>
<p>判断文件类型</p>
</li>
<li>
<p>判断打开方式</p>
</li>
<li>
<p>Android中对多媒体文件的打开操作，图片，视屏，音乐，文本</p>
</li>
</ol>
<h3> 判断文件类型</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dy<span class="token punctuation">.</span>explorer<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 获取文件的类型
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TypeUtils</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isTxt</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".txt"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".log"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".rtf"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".conf"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".xml"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isImage</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".jpg"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".png"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"jpeg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isVideo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".mp4"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".avi"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".flv"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".rmvb"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"wmv"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".mkv"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">".mov"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".mpeg"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"mpg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isAudio</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".mp3"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"wav"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".wma"</span><span class="token punctuation">)</span><span class="token operator">||</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">".midi"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.19,words:356},y:"a",title:"文件操作的工具类"},["/posts/java/文件操作的工具类.html","/posts/java/%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C%E7%9A%84%E5%B7%A5%E5%85%B7%E7%B1%BB","/posts/java/文件操作的工具类.md","/posts/java/%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C%E7%9A%84%E5%B7%A5%E5%85%B7%E7%B1%BB.md"]],["v-25e47600","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> Builder模式</h2>
<h3> 定义:</h3>
<p>将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示</p>
<h3> 设计的步骤:</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppleBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"linux"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">,</span><span class="token string">"test result &gt;&gt;&gt;&gt;&gt; :: "</span> <span class="token operator">+</span>builder<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.76,words:527},y:"a",title:"Builder模式.md"},["/posts/java/设计模式-Builder模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-Builder模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-Builder%E6%A8%A1%E5%BC%8F.md"]],["v-d1280c4e","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 代理模式</h2>
<h3> 定义</h3>
<p>代理模式是对象结构模式,代理模式给某个对象提供一个代理对象,并由代理对象控制控制原对象的引用.</p>
<h3> 使用场景</h3>
<h3> 简单实现</h3>
<p>定义抽象类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>anakin<span class="token punctuation">.</span>design_pattern_test<span class="token punctuation">.</span>proxy_method</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Created by demo on 2017/2/8 0008
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractObject</span> <span class="token punctuation">{</span>

        <span class="token comment">// 需要的操作</span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.76,words:229},y:"a",title:"代理模式.md"},["/posts/java/设计模式-代理模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-代理模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.md"]],["v-dfca70ca","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 单例设计模式</h2>
<h3> 定义:</h3>
<p>确保某一类只有一个实例，而且自行实例化并向整个系统提供这个实例</p>
<h3> 使用场景:</h3>
<p>确保某个类只存在一个对象,当创建这个对象需要消耗过多的资源时,例如IO 的读取数据库等操作</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 第二种方法
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">CEO</span> mInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token function">CEO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CEO</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token constant">CEO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    mInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CEO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.45,words:135},y:"a",title:"单例设计模式.md"},["/posts/java/设计模式-单例模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-单例模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.md"]],["v-5717f9dc","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 工厂方法模式</h2>
<p>和简单工厂模式不同是,简单工厂模式,实例都由一个工厂类创建,工厂类的代码量会比较多,而且增加新的对象需要修改工厂类的代码,增加if else 的判断.</p>
<p>工厂模式,创建产品的抽象类和实现类,以及工厂的抽象类和实现类.</p>
<p>以打印log为例,log的存储方式可以是db也可以是file中,需要创建Logger的抽象类,具体是FileLogger实现类和DbLogger的实现类,工厂的抽象类LoggerFactory,和具体的实现类DbLoggerFactory,FileLoggerFactory</p>
<ol>
<li>在抽象Logger类中定义公共的抽象方法writeLog()</li>
<li>在具体实现类DbLogger和FileLogger中实现各自的具体的writeLog方法</li>
<li>在抽象的工厂类中定义抽象的创建对象的方法creatLogger()</li>
<li>在具体的实类DbLoggerFactory,FileLoggerFactory中实现方法,创建DbLogger和FileLogger的实例,并返回其父类Logger</li>
<li>客户端的使用 : 根据需要创建工厂的实例,调用实例中创建对象的方法creatLogger返回具体log存放的实例对象,在调用具体打印log的方法writeLog()</li>
</ol>`,r:{minutes:1.12,words:336},y:"a",title:"工厂方法模式.md"},["/posts/java/设计模式-工厂方法模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-工厂方法模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.md"]],["v-75c6bce4","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 桥接模式</h2>
<h3> 使用实例</h3>
<p>以两个程序绘制圆形和方形为例</p>
<ol>
<li>定义两个绘图程序类 DP1,DP2,定义绘制方法</li>
<li>抽象两个形状的派生类 shape</li>
</ol>
`,r:{minutes:.23,words:69},y:"a",title:"桥接模式.md"},["/posts/java/设计模式-桥接模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-桥接模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F.md"]],["v-caabd36c","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<p>##模版模式</p>
<h3> 定义 :</h3>
<p>定一个操作中的算法框架,而将一些步骤延迟到子类中,使子类不用改变算法的结构重新定义算法中的步骤.</p>
<h3> 使用场景</h3>
<ol>
<li>多个子类共有方法并且逻辑基本相同</li>
<li>重要,复杂的核心算法,可以把核心算法设计成模版方法,周边的具体细节由子类去实现</li>
<li>重构时,将相同的代码抽取到父类中,然后通过子函数约束其行为</li>
</ol>
<h3> 使用示例</h3>
<ol>
<li>以电脑开机为例,基本过程相同,不同的电脑具体细节不同</li>
</ol>
<p>** 开机的父类定义模版方法,调用开机的过程 **</p>`,r:{minutes:1.95,words:586},y:"a",title:"模版模式.md"},["/posts/java/设计模式-模版模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-模版模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E6%A8%A1%E7%89%88%E6%A8%A1%E5%BC%8F.md"]],["v-24913129","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<p>##　简单工厂模式</p>
<ol>
<li>定义抽象的工厂类</li>
<li>工厂类包定义公共的方法实现，和不同实现的抽象方法</li>
<li>定义根据参数创建实例对象，返回抽象类的静态方法</li>
<li>使用静态方法传入要获取对象的tag,获取对象的实例，调用实例的方法</li>
</ol>
`,r:{minutes:.37,words:112},y:"a",title:"简单工厂模式.md"},["/posts/java/设计模式-简单工厂模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-简单工厂模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.md"]],["v-f537cc42","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h2> 观察者模式</h2>
<h3> 实现过程</h3>
<ol>
<li>观察者模式基本组成是，观察者Observer和被观察者（观察目标）Subject,当目标发生改变的时候，观察者会随之改变</li>
<li>一个被观察者可以被多个观察者观察</li>
<li>被观察者一般提供一个集合保存观察者，提供对观察者的管理，删除和增加观察者，提供一个抽象的notify方法，由具体的被观察者实现，实现方式为，遍历观察者的集合，调用观察者的update()方法，通知每一个观察者</li>
<li>观察者申明为一个接口，一般提供update()方法，由不同的观察者去实现，具体的观察者在接收到观察者的notify()后做出相应的更新</li>
</ol>`,r:{minutes:2.32,words:697},y:"a",title:"观察者模式.md"},["/posts/java/设计模式-观察者模式.html","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F","/posts/java/设计模式-观察者模式.md","/posts/java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.md"]],["v-6fc15e29","/posts/java/%E8%AF%BB%E5%8F%96XML%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0.html",{d:"2017-01-20T10:22:04.000Z",l:"2017年1月20日",e:`<h2> 一个读取xml文件中配置文件的工具类XMLUtil</h2>
<h3> 代码如下：</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>  
    <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>  
    <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span></span><span class="token class-name">SAXException</span></span><span class="token punctuation">;</span>  
    <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XMLUtil</span> <span class="token punctuation">{</span>  
        <span class="token comment">//该方法用于从XML配置文件中提取配置文件</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getChartType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">try</span> <span class="token punctuation">{</span>  
                <span class="token comment">//创建文档对象  </span>
                <span class="token class-name">DocumentBuilderFactory</span> dFactory <span class="token operator">=</span> <span class="token class-name">DocumentBuilderFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token class-name">DocumentBuilder</span> builder <span class="token operator">=</span> dFactory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token class-name">Document</span> doc<span class="token punctuation">;</span>                             
                doc <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

                <span class="token comment">//获取包含配置文件的文本节点  </span>
                <span class="token class-name">NodeList</span> nl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"chartType"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token class-name">Node</span> classNode <span class="token operator">=</span> nl<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFirstChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token class-name">String</span> chartType <span class="token operator">=</span> classNode<span class="token punctuation">.</span><span class="token function">getNodeValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token keyword">return</span> chartType<span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>     
            <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.49,words:147},y:"a",title:"Android-读取XML中的配置参数工具类XMLUtil"},["/posts/java/读取XML中的配置参数.html","/posts/java/%E8%AF%BB%E5%8F%96XML%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0","/posts/java/读取XML中的配置参数.md","/posts/java/%E8%AF%BB%E5%8F%96XML%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0.md"]],["v-dfefb10e","/posts/js/1.html",{d:"2022-01-05T00:00:00.000Z",l:"2022年1月5日",c:["香蕉","水果"],g:["js","弯曲的","长"],e:`<h1> 香蕉 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",title:"香蕉 1",i:"edit"},["/posts/js/1","/posts/js/1.md"]],["v-00cab512","/posts/python/%E8%87%AA%E5%AD%A6Python-IO%E7%BC%96%E7%A8%8B.html",{d:"2017-01-13T09:30:18.000Z",l:"2017年1月13日",e:`<h2> 读文件</h2>
<ul>
<li>使用open('文件地址'，'标识符')函数</li>
<li>使用read()读取</li>
<li>最后一步使用close(关闭)</li>
</ul>
<p>使用**<code>with </code>**读取，自动关闭</p>
<pre><code>	# 使用with 读取，自动关闭
	with open('D:/pro/python/test.txt','r') as f:
	    print(f.read())
</code></pre>
<ul>
<li>
<p>调用readline() 可以一次读取一行内容</p>
</li>
<li>
<p>调用readlines() 一次读取所有的内容，并返回一个list</p>
</li>
<li>
<p>不能确定文件大小使用readlines()</p>
<pre><code>  with open('D:/pro/python/test.txt','r') as f:
      for line in f.readlines():
          print(line.strip())
</code></pre>
</li>
</ul>`,r:{minutes:2.99,words:897},y:"a",title:"自学Python-IO编程"},["/posts/python/自学Python-IO编程.html","/posts/python/%E8%87%AA%E5%AD%A6Python-IO%E7%BC%96%E7%A8%8B","/posts/python/自学Python-IO编程.md","/posts/python/%E8%87%AA%E5%AD%A6Python-IO%E7%BC%96%E7%A8%8B.md"]],["v-4ceaa060","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80.html",{d:"2017-01-11T19:38:56.000Z",l:"2017年1月11日",e:`<h3> 注释</h3>
<ol>
<li>以#开头作为注释右面的代码不会被执行</li>
</ol>
<h3> 代码格式</h3>
<ul>
<li>语法比较简单,不同于java以分号作为结束,Python采用缩进的方式,所以代码格式非常重要</li>
</ul>
<h2> 数据类型和变量</h2>
<h3> 数据类型</h3>
<ul>
<li>整数:可以处理任意大小的整数</li>
<li>浮点数 : 1.11, -3.15,,对于很大和很小的浮点数需要用科学计数法</li>
</ul>
<blockquote>
<p>注意:证书和浮点数在计算机内部存储方式是不同的,整数永远是精确的(除法也是精确的),浮点可能会四舍五入</p>
</blockquote>`,r:{minutes:1.64,words:492},y:"a",title:"自学Python-Python基础.md"},["/posts/python/自学Python-Python基础.html","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80","/posts/python/自学Python-Python基础.md","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80.md"]],["v-5f6c3872","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80%E4%BA%8C.html",{d:"2017-01-10T15:06:47.000Z",l:"2017年1月10日",e:`<h2> 使用list和tuple</h2>
<h3> list集合</h3>
<blockquote>
<p>list 是一种有序集合,可以随时添加和删除元素</p>
</blockquote>
<pre><code>classmates =['xxx','yyyy','zzzz']
print(classmate)
</code></pre>
<blockquote>
<p>使用索引获取每个位置的元素,索引从0开始</p>
</blockquote>
<pre><code>classmates[1] # 结果'l'
</code></pre>
<blockquote>
<p>当索引超出边界会报IndexError</p>
</blockquote>`,r:{minutes:1.99,words:596},y:"a",title:"自学Python-Python基础二"},["/posts/python/自学Python-Python基础二.html","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80%E4%BA%8C","/posts/python/自学Python-Python基础二.md","/posts/python/%E8%87%AA%E5%AD%A6Python-Python%E5%9F%BA%E7%A1%80%E4%BA%8C.md"]],["v-8f2096f8","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0.html",{d:"2017-01-10T16:30:36.000Z",l:"2017年1月10日",e:`<h3> 调用函数</h3>
<p>Python内置了很多有用的函数，我们可以直接调用。</p>
<p>要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数abs，只有一个参数</p>
<p>调用函数的要传入正确的参数个数和参数类型</p>
<h4> 数据类型转换</h4>
<ul>
<li>比如int() 把其他类型转换为整数</li>
</ul>
<h3> 定义函数</h3>
<p>定义函数使用 <code>def</code> 后面依次跟 函数名 括号() 冒号: 然后在缩进语句块中写函数体,函数返回值用<code>retun</code>返回</p>
<p><strong>导入函数</strong></p>`,r:{minutes:2.67,words:800},y:"a",title:"自学Python- 函数"},["/posts/python/自学Python-函数.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0","/posts/python/自学Python-函数.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0.md"]],["v-4f505016","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",{d:"2017-01-11T14:01:12.000Z",l:"2017年1月11日",e:`<h2> 高阶函数</h2>
<blockquote>
<p>变量可以指向函数，函数的参数能接收变量，那么一个函数可以接收另一
个函数作为参数，这种函数就称为高阶函数</p>
</blockquote>
<ol>
<li>
<p>变量可以指向函数</p>
</li>
<li>
<p>函数也是变量</p>
</li>
<li>
<p>传入函数</p>
<pre><code> def add(x,y,f):
     return f(x)+f(y)
 s= add(2,3,abs)
 print(s)
</code></pre>
</li>
</ol>
<h3> map/reduce</h3>
`,r:{minutes:2.46,words:738},y:"a",title:"自学Python-函数式编程.md"},["/posts/python/自学Python-函数式编程.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B","/posts/python/自学Python-函数式编程.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.md"]],["v-46ece9fd","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%B8%B8%E7%94%A8%E5%86%85%E5%BB%BA%E6%A8%A1%E5%9D%97.html",{d:"2017-01-14T12:03:14.000Z",l:"2017年1月14日",e:`<h2> Python内建模块</h2>
<h3> 关于时间</h3>
<pre><code># 1. 获取当前时间
from datetime import datetime,timedelta
r =datetime.now()
print (r)

# 2. 获取指定的时间和日期
r1 = datetime(2017,1,14,12,53)
print (r1)

# 3. 将datetime转换为datestamp
t= 12345645.12
r2 = datetime.fromtimestamp(t)
print(r2)

# 4. str转换为datetime
r3 = datetime.strptime('2017-01-14 15:58:29','%Y-%m-%d %H:%M:%S')
print(r3)

# 5. datetime转换为str
s1 = datetime.now()
r4 = s1.strftime('%a, %b %d %H:%M')
print(r4)

# 6. 时间的加减
n1 = datetime.now()
print(n1)
n2 =n1+timedelta(hours=10)  # 增加10小时
print (n2)
</code></pre>`,r:{minutes:1.37,words:411},y:"a",title:"自学Python-常用内建模块"},["/posts/python/自学Python-常用内建模块.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%B8%B8%E7%94%A8%E5%86%85%E5%BB%BA%E6%A8%A1%E5%9D%97","/posts/python/自学Python-常用内建模块.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E5%B8%B8%E7%94%A8%E5%86%85%E5%BB%BA%E6%A8%A1%E5%9D%97.md"]],["v-0fe7edfb","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97.html",{d:"2017-01-11T17:35:35.000Z",l:"2017年1月11日",e:`<h3> 使用模块</h3>
<p><strong>标准注释</strong></p>
<pre><code>#!/usr/bin/env python3
# -*- coding: utf-8 -*-
</code></pre>
<ul>
<li>
<p>test_1.py</p>
<pre><code> #!/usr/bin/env python3
 # -*- coding: utf-8 -*-
 'a test module'
 ___author__='anakin'

 import sys

 def test():
     args = sys.argv
     if len(args)==1:
         print('hello,world')
     elif len(args)==2:
         print('hello :'+ args[1])
     else:
         print('too many argument!')

 if __name__=='__main__':
     test()
</code></pre>
</li>
<li>
<p>test_2.py</p>
<pre><code>  import test_1

  test_1.test()
</code></pre>
</li>
</ul>`,r:{minutes:.64,words:191},y:"a",title:"自学Python-模块"},["/posts/python/自学Python-模块.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97","/posts/python/自学Python-模块.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%A8%A1%E5%9D%97.md"]],["v-62d694f6","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html",{d:"2017-01-14T10:46:38.000Z",l:"2017年1月14日",e:`<h2> 正则表达式</h2>
<ul>
<li>[0-9a-zA-Z_]匹配任意数字字母和下划线</li>
<li>[0-9a-zA-Z_]+ 匹配至少一个字母数字下划线组成的字符串</li>
<li>[a-zA-Z_][0-9a-zA-Z_]* 匹配以字母或者下划线开头，后面跟任意个字母或数字</li>
<li>[a-zA-Z_][0-9a-zA-Z_]{0，19} 匹配一字母或者下划线开头，后面0到19个数字或者字母下划线</li>
<li>A|B 可以匹配 A或者B ，（P\\p)ython可以匹配python,或者Python</li>
<li>^ 表示行的开头</li>
<li>^\\d表示以数字开头</li>
<li>$ 表示行的末尾</li>
</ul>`,r:{minutes:1.3,words:389},y:"a",title:"自学Python-正则表达式"},["/posts/python/自学Python-正则表达式.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F","/posts/python/自学Python-正则表达式.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.md"]],["v-336cfd98","/posts/python/%E8%87%AA%E5%AD%A6Python-%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B.html",{d:"2017-01-13T15:05:52.000Z",l:"2017年1月13日",e:`<h3> multiprocessing</h3>
<p>windows 创建多线程使用 <code>multiprocessing</code>
linux unix 使用<code>fork()</code></p>
<ul>
<li>
<p>创建子线程的时候,只需要传入一个函数,和一个参数,创建一个<code>Process</code>实例,用<code>start()</code>方法启动,这样创建进程比<code>fork()</code>简单</p>
<pre><code>  from multiprocessing import Process
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
</code></pre>
</li>
</ul>`,r:{minutes:2.57,words:771},y:"a",title:"自学Python-线程和进程"},["/posts/python/自学Python-线程和进程.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B","/posts/python/自学Python-线程和进程.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B.md"]],["v-7ff89994","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html",{d:"2017-01-11T19:38:56.000Z",l:"2017年1月11日",e:`<h3> 类</h3>
<pre><code>class Student(object):
    def __init__(self, name,score):
        self.name = name
        self.score = score
    def print_score(self):
        print('%s: %s' % (self.name,self.score))
s1 = Student('anakin',18)
s2 = Student('anran',18)
s1.print_score()
s2.print_score()
</code></pre>`,r:{minutes:3.49,words:1047},y:"a",title:"自学Python-面向对象编程"},["/posts/python/自学Python-面向对象编程.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B","/posts/python/自学Python-面向对象编程.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.md"]],["v-1202e086","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B.html",{d:"2017-01-12T14:30:26.000Z",l:"2017年1月12日",e:`<h2> 使用__slots__</h2>
<ul>
<li>
<p>正常情况下定义一个class,创建class实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性</p>
</li>
<li>
<p>绑定属性</p>
<pre><code>  class Student(object):
      def __init__(self, name):
          super(Student, self).__init__()
          self.name = name

  s = Student('anakin')
  s.age = 10
  print(s.age)  # 给对象绑定属性
  print(s)
</code></pre>
</li>
</ul>`,r:{minutes:2.74,words:822},y:"a",title:"自学Python-面向对象高级编程"},["/posts/python/自学Python-面向对象高级编程.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B","/posts/python/自学Python-面向对象高级编程.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B.md"]],["v-0e9dadd6","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7.html",{d:"2017-01-11T09:23:15.000Z",l:"2017年1月11日",e:`<h2> 切片</h2>
<p>使用场景： 取一个list或者tuple的部分元素</p>
<pre><code>L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
r=L[0:3]
print(r)
</code></pre>
<p>[X:Y] X:代表开始的角标，Y:结束的角标，可以是负数，从后向前取</p>
<p>tuple 与list 的区别是tuple是不可变的</p>
<p>tupel也可以切片操作，只是结果仍然是tuple</p>
<pre><code>T= (1,2,3,4,5)
print(T)
r= T[:3]
print(r)
print(T)

结果：

(1, 2, 3, 4, 5)
(1, 2, 3)
(1, 2, 3, 4, 5)
</code></pre>`,r:{minutes:2.62,words:786},y:"a",title:"自学Python-高级特性"},["/posts/python/自学Python-高级特性.html","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7","/posts/python/自学Python-高级特性.md","/posts/python/%E8%87%AA%E5%AD%A6Python-%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7.md"]],["v-d01394f2","/posts/sql/MYSQL%E7%9A%84%E4%BF%AE%E6%94%B9%E5%92%8C%E5%88%A0%E9%99%A4.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h3> 数据库的修改和删除</h3>
<ol>
<li>打开数据库 'sudo service mysql start'</li>
<li>登录数据库 'mysql -u root -p'</li>
<li>查看数据卡 show databsaes</li>
<li>删除数据库 drop databsaes 数据库名</li>
<li>连接数据库 use 数据库名</li>
<li>显示数据库中的表 show tables</li>
<li>查看表中的类容 select * from 表名</li>
<li>修改表的名字 rename table 旧表名 to 新表名</li>
<li>删除一张表 drop table 表名</li>
<li>增加列 alter table 表名 add column 列名字 数据类型 约束 eg: alter table employee add height int(4) default 170  (给employee 表增加height列 )</li>
<li>增加列并指定新增列的位置 使用after  eg: alter table employee add height int(4) dafault 170 after age ; 新增加列放在第一个使用 first</li>
<li>删除一列 alter table 表名 drop column 列名字</li>
<li>修改表中的某个值 update 表名 set 列1=值1，列2=值2 where 条件 eg: update employee set age=24,salary=300 where name = 'Tom'</li>
<li>根据条件删除一列 delete table from employee where name='Tom';</li>
</ol>`,r:{minutes:1.88,words:564},y:"a",title:"MySql的修改和删除.md"},["/posts/sql/MYSQL的修改和删除.html","/posts/sql/MYSQL%E7%9A%84%E4%BF%AE%E6%94%B9%E5%92%8C%E5%88%A0%E9%99%A4","/posts/sql/MYSQL的修改和删除.md","/posts/sql/MYSQL%E7%9A%84%E4%BF%AE%E6%94%B9%E5%92%8C%E5%88%A0%E9%99%A4.md"]],["v-de9741e0","/posts/sql/MySQL%E4%BD%BF%E7%94%A8.html",{d:"2017-01-20T10:22:04.000Z",l:"2017年1月20日",e:`<p>##ubuntu下使用MySQL##</p>
<p>###安装MySQL###</p>
<ul>
<li>安装核心服务 sudo apt-get install mysql-server</li>
<li>安装客户端   sudo apt-get install mysql-client</li>
</ul>
<p>###创蚩菘獾幕静僮?##</p>
<ol>
<li>打开MySQL :sudo service mysql start</li>
<li>使用root:mysql -u root -p</li>
<li>查看数据库 :show databases;</li>
<li>连接数据库:use&lt;数据库名&gt;</li>
<li>查看表:show tables;</li>
<li>退出:quit 或者exit</li>
</ol>`,r:{minutes:1.62,words:487},y:"a",title:"MySQL使用.md"},["/posts/sql/MySQL使用.html","/posts/sql/MySQL%E4%BD%BF%E7%94%A8","/posts/sql/MySQL使用.md","/posts/sql/MySQL%E4%BD%BF%E7%94%A8.md"]],["v-3f1edcbb","/posts/sql/MySQL%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.html",{c:["MySQL"],g:["MySQL"],e:`<h1> MySQl语句练习</h1>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>### 使用数据库
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
from \`order\`;

--   查询常量
select *, 'hello'
from \`order\`;

-- 显示表结构
describe employees;
DESC \`employees\`;

-- 去重
select distinct job_id
from \`employees\`;

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
where salary &gt; 12000;

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
select 1 &lt;=&gt; '1', NULL &lt;=&gt; NULL;
select 1 = '1', NULL = NULL;

-- 最小 /最大
select LEAST(first_name, last_name)
from employees;
-- 范围查询
select *
from employees
where salary &gt;= 6000 &amp;&amp; salary &lt;= 8000
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
-- 转义字符\\,查询第二个字符是_,第三个字符是o
select last_name
from employees
where last_name like '_\\_o%';

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
where not (salary &gt; 5000 and salary &lt; 12000)
order by salary desc;
-- 2 查询 20号或者50号部门工作的员工,姓名和部门号
select first_name, department_id
from employees
where department_id in (20, 50);
-- 3 选择公司中没有管理者的员工的姓名和job_id
select job_id, first_name, department_id
from employees
where department_id &lt;=&gt; null;
-- 4. 选择公司中有奖金的员工姓名,工资和奖金级别
select last_name, salary, commission_pct
from employees
where not commission_pct &lt;=&gt; null;
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
where department_id &gt;= 80
  and department_id &lt;= 100
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
where employee_id &gt; 110
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
where not salary &gt; 8000
  and salary &lt; 17000
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
where t2.department_id &lt;=&gt; null;

-- 右外连接 去掉交集
select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id
where t1.department_id &lt;=&gt; null;

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
where t1.department_id &lt;=&gt; null;


-- 去除交集对应sql joins 的右下图

select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         left join departments as t2
                   on t1.department_id = t2.department_id
where t2.department_id &lt;=&gt; null
union all
select t1.last_name, t2.department_name, t2.department_id
from employees as t1
         right join departments as t2
                    on t1.department_id = t2.department_id
where t1.department_id &lt;=&gt; null;

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
select last_name, salary, if(salary &gt; 6000, '高工资', '低工资') as '工资水平'
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
           when salary &gt; 15000 then '白骨精'
           when salary &gt; 10000 then '潜力股'
           when salary &gt; 20000 then '潜力股'
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
  and unix_timestamp(hire_date) &gt; unix_timestamp('1997-1-1')
order by hire_date;

-- 7. 查询入职超过10000天的员工的姓名,入职时间
select last_name, hire_date, timestampdiff(DAY, hire_date, now()) as '入职天数'
from employees
where timestampdiff(DAY, hire_date, now()) &gt; 10000
order by timestampdiff(DAY, hire_date, now());

-- 8. 查询产生一下结果 &lt;last_name&gt; earns &lt;salary&gt; ,'monthly but wants ' &lt;salary*3&gt;
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
having max(salary) &gt; 10000;

-- 练习: 查询部门id为10,20,30 40这四个部门中最高工资比10000高的部门信息
-- 第一种方式 ,推荐使用
select max(salary), d.department_id, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id and d.department_id in (10, 20, 30, 40)
group by e.department_id
having max(salary) &gt; 10000;
-- 第二种方式
select max(salary), d.department_id, d.department_name
from employees as e
         join departments as d
              on e.department_id = d.department_id
group by e.department_id
having max(salary) &gt; 10000
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
where salary &gt;= 6000
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
where salary &gt;= (select salary from employees where last_name = 'Abel')
order by salary;
-- 方式2 ,使用自连接
select t1.last_name, t1.salary
from employees as t1
         join employees as t2
where t1.salary &gt;= t2.salary
  and t2.last_name = 'Abel';
-- 2. 查询大于公司平均工资的员工
select salary, last_name
from employees
where salary &gt; (select avg(salary)
                from employees);

-- 2. 查询大于部门平均工资的员工
select salary, last_name, department_id
from employees as t1
where salary &gt;= (select avg(salary) from employees where department_id = t1.department_id)
order by salary;

-- 3. 查询工资大于149号员工工资的员工信息
select *
from employees
where salary &gt; (select salary from employees where employee_id = 149);

-- 4. 查询job_id与141号员工相同,salary 比143号员工多的员工信息
select *
from employees
where job_id = (select job_id from employees where employee_id = 141)
  and salary &gt; (select salary from employees where employee_id = 143);

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
having min(salary) &gt; (select min(salary) from employees where department_id = 50)
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
where salary &lt; some (select salary from employees where job_id = 'IT_PROG')
  and job_id != 'IT_PROG'; -- 76 rows

select last_name, job_id, salary
from employees
where salary &lt; all (select salary from employees where job_id = 'IT_PROG')
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
having avg(salary) &lt;= all (select avg(salary) as avg_salary
                           from employees
                           group by department_id);


### 相关子查询
-- 1. 查询员工中工资大于本部门平均工资的员工的信息

-- 方式1
select t1.last_name, t1.salary, t1.department_id
from atguigudb.employees as t1
where salary &gt;
      (select avg(salary)
       from employees as t2
       where t1.department_id = t2.department_id);

-- 方式2,在from 中使用子查询
select t1.last_name, t1.salary, t1.department_id
from atguigudb.employees as t1,
     (select department_id, avg(salary) as dept_avg_salary from atguigudb.employees group by department_id) as t2
where t1.department_id = t2.department_id
  and t1.salary &gt; t2.dept_avg_salary;


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
where (select count(*) from atguigudb.job_history as j where j.employee_id = e.employee_id) &gt;= 2;

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
where salary &gt; (select avg(salary)
                from atguigudb.employees)
order by salary;

-- 3. 查询工资大于所有job_id ='SA_MAN'的员工的工资定的员工的last_name,job_id, salary
select last_name, job_id, salary
from atguigudb.employees
where salary &gt; (select max(salary)
                from (select salary
                      from atguigudb.employees
                      where job_id = 'SA_MAN') as t)
order by salary;


select last_name, job_id, salary
from atguigudb.employees
where salary &gt; all (select salary
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
-- 方法2 &lt;= all
select *
from atguigudb.departments
where department_id = (select department_id
                       from atguigudb.employees
                       group by department_id
                       having avg(salary) &lt;= all (select avg(salary)
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
having avg(salary) &gt; (select avg(salary)
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
having max(salary) &lt;= all (select max(salary)
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
where salary &gt;
      (select avg(salary) from atguigudb.employees group by department_id having department_id = e.department_id);

-- 19. 查询每个部门下的部门人数大于 5的部门名称(相关子查询)
select *
from atguigudb.departments
where department_id in (select department_id
                        from atguigudb.employees
                        group by department_id
                        having count(employee_id) &gt; 5);

-- 方式2
select *
from atguigudb.departments as d
where 5 &lt; (select count(*) from atguigudb.employees as e where e.department_id = d.department_id);

-- 20. 查询每个国家下的部门个数大于 2 的国家编号(相关子查询)
select distinct country_id
from atguigudb.locations as l
         join departments as d
              on l.location_id = d.location_id
         join atguigudb.employees as e
              on e.department_id = d.department_id
group by e.department_id
having count(e.department_id) &gt; 2;


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
having sum(num) &gt; 30;

-- 13.查询所有图书,每页显示5本,显示第二页
select *
from books
limit 5,5;

-- 14.按照note分类统计书的库存量,显示库存量最多的
select note, sum(num)
from books
group by note
having sum(num) &gt;= all (select sum(num)
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
where char_length(replace(name, ' ', '')) &gt; 10;

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
           when num &gt; 10 then '滞销'
           when num &gt; 0 and num &lt; 10 then '畅销'
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
where salary &lt; 900;
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
where \`name\` like '刘%';
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
# alter table  my_employees drop index &lt;索引名&gt;

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
where e.department_id &gt; 80;

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
    if age &lt; 6
    then
        select '婴儿';
    elseif age &gt;= 6 and age &lt; 12
    then
        select '儿童';
    elseif age &gt; 12 and age &lt; 18
    then
        select '少年';
    elseif age &gt; 18 and age &lt; 60
    then
        select '中年';
    elseif age &gt; 60
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
    until sum_salary &gt;= limit_total_salary end repeat;

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
    if NEW.salary &gt; manager_salary then
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:34.93,words:10480},y:"a",title:"MySQL学习记录",i:"MySQL"},["/posts/sql/MySQL学习记录.html","/posts/sql/MySQL%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95","/posts/sql/MySQL学习记录.md","/posts/sql/MySQL%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.md"]],["v-79c4cae9","/posts/sql/MySQL%E8%BF%9B%E9%98%B6-%E6%93%8D%E4%BD%9C%E8%AF%A6%E8%A7%A3.html",{d:"2017-02-17T11:25:59.000Z",l:"2017年2月17日",e:`<h3> MySQL基本操作###</h3>
<ol>
<li>
<p>打开数据库 sudo service mysql start;</p>
</li>
<li>
<p>连接数据库 mysql -u root -p</p>
</li>
<li>
<p>查看数据库 show dabases</p>
</li>
<li>
<p>使用数据库 use 数据库名字</p>
</li>
<li>
<p>创建数据库 create database 数据库名 eg : create database test</p>
</li>
<li>
<p>创建表 create table 表名（列名 数据类型 约束）
eg : create table pet(name VARCHAR(20),owner VARCHAR(20),species VARCHAR(20),sex CHAR(1),birth DATE , death DATE);</p>
</li>
<li>
<p>查看创建的表 DESCRIBE pet;</p>
</li>
<li>
<p>插入数据 insert into test VALUES('tom','panda','hamster','f','2017-02-06'，NULL);</p>
</li>
<li>
<p>从表中检索数据 select * from pet;</p>
</li>
</ol>`,r:{minutes:.52,words:155},y:"a",title:"MySQL基本操作.md"},["/posts/sql/MySQL进阶-操作详解.html","/posts/sql/MySQL%E8%BF%9B%E9%98%B6-%E6%93%8D%E4%BD%9C%E8%AF%A6%E8%A7%A3","/posts/sql/MySQL进阶-操作详解.md","/posts/sql/MySQL%E8%BF%9B%E9%98%B6-%E6%93%8D%E4%BD%9C%E8%AF%A6%E8%A7%A3.md"]],["v-a278d5a4","/posts/vim/Vim%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html",{d:"2017-02-22T11:33:14.000Z",l:"2017年2月22日",e:`<h2> vim的基本操作</h2>
<ul>
<li>在普通模式.重复上一次操作</li>
<li>执行制定次数相同的命令</li>
</ul>
<h3> 游标的快速跳转</h3>
<p>** 行间跳转 😗*</p>
<ol>
<li>nG表示跳转到地n行</li>
<li>gg游标移动到第一行</li>
<li>G跳转到行尾</li>
<li>ctrl 回到游标跳转前的位置</li>
</ol>
<h3> 复制粘贴和剪切</h3>
<ul>
<li>复制和粘贴文本
<ol>
<li>yy表示复制整行</li>
<li>yw：复制一个单词</li>
<li>y$复制到行尾</li>
<li>y^复制到行头</li>
<li>y^复制到行头</li>
</ol>
</li>
</ul>`,r:{minutes:1.39,words:418},y:"a",title:"Vim基本操作"},["/posts/vim/Vim基本操作.html","/posts/vim/Vim%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C","/posts/vim/Vim基本操作.md","/posts/vim/Vim%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.md"]],["v-d6a6efb0","/posts/webpack/webpack5_base.html",{c:["webpack"],g:["webpack5","配置文件API示例"],u:!0,e:`<h1> webpack5_base</h1>
<h3> <a href="https://webpack.docschina.org/" target="_blank" rel="noopener noreferrer">webpack5参考文档地址</a></h3>
<h3> oneOf</h3>
<p>每个文件只被一个loader配置处理</p>
<h3> include, exclude</h3>
<p>包含和排除文文件,只在js loader中配置 babel和 eslint,一般不处理css等</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_modules)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除node_modules,</span>
 <span class="token comment">// include :resolve(__dirname,'../src'),</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.53,words:1658},y:"a",title:"webpack5_base",i:"webpack"},["/posts/webpack/webpack5_base","/posts/webpack/webpack5_base.md"]],["v-58aa03b4","/en/posts/apple/1.html",{d:"2022-01-01T00:00:00.000Z",l:"January 1, 2022",c:["Apple"],g:["red","big","round"],e:`<h1> Apple 1</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:26},y:"a",title:"Apple 1",i:"edit"},["/en/posts/apple/1","/en/posts/apple/1.md"]],["v-55405276","/en/posts/apple/2.html",{d:"2022-01-02T00:00:00.000Z",l:"January 2, 2022",c:["Apple"],g:["red","big","round"],e:`<h1> Apple 2</h1>
<p>A apple article being stared.</p>
`,r:{minutes:.11,words:34},y:"a",title:"Apple 2",i:"edit"},["/en/posts/apple/2","/en/posts/apple/2.md"]],["v-51d6a138","/en/posts/apple/3.html",{d:"2022-01-03T00:00:00.000Z",l:"January 3, 2022",c:["Apple","Fruit"],g:["red","big","round"],e:`<h1> Apple 3</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:27},y:"a",title:"Apple 3",i:"edit"},["/en/posts/apple/3","/en/posts/apple/3.md"]],["v-4e6ceffa","/en/posts/apple/4.html",{d:"2022-01-04T00:00:00.000Z",l:"January 4, 2022",c:["Apple","Fruit"],g:["red","big","round"],e:`<h1> Apple 4</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:27},y:"a",title:"Apple 4",i:"edit"},["/en/posts/apple/4","/en/posts/apple/4.md"]],["v-e748286e","/en/posts/banana/1.html",{d:"2022-01-05T00:00:00.000Z",l:"January 5, 2022",c:["Banana","Fruit"],g:["yellow","curly","long"],e:`<h1> Banana 1</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:27},y:"a",title:"Banana 1",i:"edit"},["/en/posts/banana/1","/en/posts/banana/1.md"]],["v-e3de7730","/en/posts/banana/2.html",{d:"2022-01-06T00:00:00.000Z",l:"January 6, 2022",c:["Banana","Fruit"],g:["yellow","curly","long"],e:`<h1> Banana 2</h1>
<p>A banana article being stared with number <code>10</code>.</p>
`,r:{minutes:.13,words:39},y:"a",title:"Banana 2",i:"edit"},["/en/posts/banana/2","/en/posts/banana/2.md"]],["v-e074c5f2","/en/posts/banana/3.html",{d:"2022-01-07T00:00:00.000Z",l:"January 7, 2022",c:["Banana"],g:["yellow","curly","long"],e:`<h1> Banana 3</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:26},y:"a",title:"Banana 3",i:"edit"},["/en/posts/banana/3","/en/posts/banana/3.md"]],["v-dd0b14b4","/en/posts/banana/4.html",{d:"2022-01-08T00:00:00.000Z",l:"January 8, 2022",c:["Banana"],g:["yellow","curly","long"],e:`<h1> Banana 4</h1>
<h2> Heading 2</h2>
<p>Here is the content.</p>
<h3> Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:26},y:"a",title:"Banana 4",i:"edit"},["/en/posts/banana/4","/en/posts/banana/4.md"]],["v-3706649a","/404.html",{y:"p",title:""},["/404"]],["v-5bc93818","/category/",{y:"p",title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",title:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",title:"时间轴"},["/timeline/index.html"]],["v-03d57386","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{y:"p",title:"使用指南 分类"},["/category/使用指南/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-83e1f92e","/tag/%E7%A6%81%E7%94%A8/",{y:"p",title:"禁用 标签"},["/tag/禁用/","/tag/%E7%A6%81%E7%94%A8/index.html"]],["v-c58f154a","/enarticle/",{y:"p",title:"Articles"},["/enarticle/index.html"]],["v-0b1aabfb","/enstar/",{y:"p",title:"Star"},["/enstar/index.html"]],["v-29430628","/entimeline/",{y:"p",title:"Timeline"},["/entimeline/index.html"]],["v-13b66e9c","/category/%E5%85%B6%E4%BB%96/",{y:"p",title:"其他 分类"},["/category/其他/","/category/%E5%85%B6%E4%BB%96/index.html"]],["v-1e447d61","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",{y:"p",title:"文章加密 标签"},["/tag/文章加密/","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/index.html"]],["v-29da37b8","/category/android/",{y:"p",title:"Android 分类"},["/category/android/index.html"]],["v-484552dc","/tag/markdown/",{y:"p",title:"Markdown 标签"},["/tag/markdown/index.html"]],["v-4c41ef7e","/category/%E9%A6%99%E8%95%89/",{y:"p",title:"香蕉 分类"},["/category/香蕉/","/category/%E9%A6%99%E8%95%89/index.html"]],["v-a378ad66","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{y:"p",title:"页面配置 标签"},["/tag/页面配置/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],["v-12590846","/category/%E6%B0%B4%E6%9E%9C/",{y:"p",title:"水果 分类"},["/category/水果/","/category/%E6%B0%B4%E6%9E%9C/index.html"]],["v-7b167472","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{y:"p",title:"使用指南 标签"},["/tag/使用指南/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-9717cc36","/category/mysql/",{y:"p",title:"MySQL 分类"},["/category/mysql/index.html"]],["v-03b53f28","/tag/%E7%90%86%E8%B4%A2/",{y:"p",title:"理财 标签"},["/tag/理财/","/tag/%E7%90%86%E8%B4%A2/index.html"]],["v-378faa7a","/category/webpack/",{y:"p",title:"webpack 分类"},["/category/webpack/index.html"]],["v-55636bee","/tag/android/",{y:"p",title:"Android 标签"},["/tag/android/index.html"]],["v-45d1abcf","/encategory/",{y:"p",title:"Category"},["/encategory/index.html"]],["v-0da0cef8","/tag/js/",{y:"p",title:"js 标签"},["/tag/js/index.html"]],["v-2b347942","/encategory/guide/",{y:"p",title:"Guide Category"},["/encategory/guide/index.html"]],["v-3aafda76","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",{y:"p",title:"弯曲的 标签"},["/tag/弯曲的/","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/index.html"]],["v-5160fb07","/encategory/cherry/",{y:"p",title:"Cherry Category"},["/encategory/cherry/index.html"]],["v-624a9248","/tag/%E9%95%BF/",{y:"p",title:"长 标签"},["/tag/长/","/tag/%E9%95%BF/index.html"]],["v-77c20c26","/encategory/dragon-fruit/",{y:"p",title:"Dragon Fruit Category"},["/encategory/dragon-fruit/index.html"]],["v-1bee38ca","/tag/mysql/",{y:"p",title:"MySQL 标签"},["/tag/mysql/index.html"]],["v-295ae32a","/encategory/fruit/",{y:"p",title:"Fruit Category"},["/encategory/fruit/index.html"]],["v-0002f839","/tag/webpack5/",{y:"p",title:"webpack5 标签"},["/tag/webpack5/index.html"]],["v-8b0314de","/encategory/strawberry/",{y:"p",title:"Strawberry Category"},["/encategory/strawberry/index.html"]],["v-374a2e4c","/tag/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6api%E7%A4%BA%E4%BE%8B/",{y:"p",title:"配置文件API示例 标签"},["/tag/配置文件api示例/","/tag/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6api%E7%A4%BA%E4%BE%8B/index.html"]],["v-a8b7dd86","/encategory/vegetable/",{y:"p",title:"Vegetable Category"},["/encategory/vegetable/index.html"]],["v-7c3ad837","/entag/",{y:"p",title:"Tag"},["/entag/index.html"]],["v-20b43ca4","/encategory/apple/",{y:"p",title:"Apple Category"},["/encategory/apple/index.html"]],["v-4abceb7e","/entag/disable/",{y:"p",title:"disable Tag"},["/entag/disable/index.html"]],["v-10ffdabb","/encategory/banana/",{y:"p",title:"Banana Category"},["/encategory/banana/index.html"]],["v-1b439075","/entag/encryption/",{y:"p",title:"encryption Tag"},["/entag/encryption/index.html"]],["v-3ef1d26e","/entag/markdown/",{y:"p",title:"Markdown Tag"},["/entag/markdown/index.html"]],["v-65e12cb4","/entag/page-config/",{y:"p",title:"Page config Tag"},["/entag/page-config/index.html"]],["v-3e94b7aa","/entag/guide/",{y:"p",title:"Guide Tag"},["/entag/guide/index.html"]],["v-93698316","/entag/red/",{y:"p",title:"red Tag"},["/entag/red/index.html"]],["v-529a9eff","/entag/small/",{y:"p",title:"small Tag"},["/entag/small/index.html"]],["v-510b1358","/entag/round/",{y:"p",title:"round Tag"},["/entag/round/index.html"]],["v-9377f034","/entag/big/",{y:"p",title:"big Tag"},["/entag/big/index.html"]],["v-3112f624","/entag/yellow/",{y:"p",title:"yellow Tag"},["/entag/yellow/index.html"]],["v-37c58cf9","/entag/curly/",{y:"p",title:"curly Tag"},["/entag/curly/index.html"]],["v-12ccbb5c","/entag/long/",{y:"p",title:"long Tag"},["/entag/long/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const b=usePageLayout();return()=>h$5(b.value)}}),createRoutes=()=>pagesRoutes.reduce((b,[T,j,ie,le])=>(b.push({name:T,path:j,component:Vuepress,meta:ie},...le.map(de=>({path:de,redirect:j}))),b),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const b=createRouter({history:historyCreator(removeEndingSlash("/zar_blog/")),routes:createRoutes(),scrollBehavior:(T,j,ie)=>ie||(T.hash?{el:T.hash}:{top:0})});return b.beforeResolve(async(T,j)=>{var ie;(T.path!==j.path||j===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(T.name),(ie=pagesComponents[T.name])==null?void 0:ie.__asyncLoader()]))}),b},setupGlobalComponents=b=>{b.component("ClientOnly",ClientOnly),b.component("Content",Content)},setupGlobalComputed=(b,T,j)=>{const ie=computed(()=>resolvers.resolveLayouts(j)),le=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,T.currentRoute.value.path)),de=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,le.value)),ce=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),ve=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,de.value)),ue=computed(()=>resolvers.resolvePageHead(ve.value,ce.value,de.value)),me=computed(()=>resolvers.resolvePageLang(pageData.value)),pe=computed(()=>resolvers.resolvePageLayout(pageData.value,ie.value));return b.provide(layoutsSymbol,ie),b.provide(pageFrontmatterSymbol,ce),b.provide(pageHeadTitleSymbol,ve),b.provide(pageHeadSymbol,ue),b.provide(pageLangSymbol,me),b.provide(pageLayoutSymbol,pe),b.provide(routeLocaleSymbol,le),b.provide(siteLocaleDataSymbol,de),Object.defineProperties(b.config.globalProperties,{$frontmatter:{get:()=>ce.value},$head:{get:()=>ue.value},$headTitle:{get:()=>ve.value},$lang:{get:()=>me.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>le.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>de.value},$withBase:{get:()=>withBase}}),{layouts:ie,pageData,pageFrontmatter:ce,pageHead:ue,pageHeadTitle:ve,pageLang:me,pageLayout:pe,routeLocale:le,siteData,siteLocaleData:de}},setupUpdateHead=()=>{const b=useRoute(),T=usePageHead(),j=usePageLang(),ie=ref([]),le=()=>{T.value.forEach(ce=>{const ve=queryHeadTag(ce);ve&&ie.value.push(ve)})},de=()=>{document.documentElement.lang=j.value,ie.value.forEach(ce=>{ce.parentNode===document.head&&document.head.removeChild(ce)}),ie.value.splice(0,ie.value.length),T.value.forEach(ce=>{const ve=createHeadTag(ce);ve!==null&&(document.head.appendChild(ve),ie.value.push(ve))})};provide(updateHeadSymbol,de),onMounted(()=>{le(),de(),watch(()=>b.path,()=>de())})},queryHeadTag=([b,T,j=""])=>{const ie=Object.entries(T).map(([ve,ue])=>isString$1(ue)?`[${ve}=${JSON.stringify(ue)}]`:ue===!0?`[${ve}]`:"").join(""),le=`head > ${b}${ie}`;return Array.from(document.querySelectorAll(le)).find(ve=>ve.innerText===j)||null},createHeadTag=([b,T,j])=>{if(!isString$1(b))return null;const ie=document.createElement(b);return isPlainObject(T)&&Object.entries(T).forEach(([le,de])=>{isString$1(de)?ie.setAttribute(le,de):de===!0&&ie.setAttribute(le,"")}),isString$1(j)&&ie.appendChild(document.createTextNode(j)),ie},appCreator=createSSRApp,createVueApp=async()=>{var j;const b=appCreator({name:"VuepressApp",setup(){var ie;setupUpdateHead();for(const le of clientConfigs)(ie=le.setup)==null||ie.call(le);return()=>[h$5(RouterView),...clientConfigs.flatMap(({rootComponents:le=[]})=>le.map(de=>h$5(de)))]}}),T=createVueRouter();setupGlobalComponents(b),setupGlobalComputed(b,T,clientConfigs);for(const ie of clientConfigs)await((j=ie.enhance)==null?void 0:j.call(ie,{app:b,router:T,siteData}));return b.use(T),{app:b,router:T}};createVueApp().then(({app:b,router:T})=>{T.isReady().then(()=>{b.mount("#app")})});export{Lt as L,Mt as M,__vitePreload as _,useRouteLocale as a,useEventListener as b,ct as c,createVueApp,disableBodyScroll as d,clearAllBodyScrollLocks as e,useDebounceFn as f,nt as n,useLocalStorage as u};
