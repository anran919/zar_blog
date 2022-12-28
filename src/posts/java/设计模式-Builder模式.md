---
title: Builder模式.md
date: 2017-02-17 11:25:59
tags: 
  - 设计模式
---

## Builder模式

### 定义:
将复杂的创建与他的表示分离,使同样的创建过程可以创建不同的表示

### 设计的步骤:

```java 
    Builder builder = new AppleBuilder();
    Director director = new Director(builder);
    director.construct(4,2,"linux");
    Log.d(TAG,"test result >>>>> :: " +builder.create().toString());
```

1. 以组装电脑为例,创建电脑的抽象类,包含os ram,core定义,提供设置的抽象方法

2. 创建要组装的具体电脑类AppleComputer,继承Computer类,实现所用方法

3. 创建抽象的Builder类,提供builder的设置方法,另外提供返回Computer的create的抽象方法

4. 创建具体的AppleBuilder类实现抽象方法,创建AppleComputer 实例对象,并设置数据,返回AppleComputer的实例

5. 创建具体的Director类,构造方法中接受builder对象,提供接受数据的construct 方法,将参数传递给builder对象

6. 传递的参数最终被AppleBuilder接收,并返回一个具体的AppleComputer对象


### 具体代码

```java 
    package com.anakin.design_pattern_test.demo.singel_instance.builder;

    /**
     * Created by demo on 2017/2/8 0008
     */
    public abstract class Computer {
        protected int mCore = 1;
        protected int mRam = 10;
        protected String mOs = "dos";

        protected Computer() {

        }

        public abstract void setCore(int core);

        public abstract void setRem(int rem);

        public abstract void setOs(String os);

        @Override
        public String toString() {
            return "Computer{" +
                    "mCore=" + mCore +
                    ", mRam=" + mRam +
                    ", mOs='" + mOs + '\'' +
                    '}';
        }
    }
```

```java
package com.anakin.design_pattern_test.demo.singel_instance.builder;

    /**
     * Created by demo on 2017/2/8 0008
     */
    public class AppleComputer extends Computer {


        protected AppleComputer() {

        }

        @Override
        public void setCore(int core) {
            this.mCore = core;
        }

        @Override
        public void setRem(int ram) {
            this.mRam = ram;
        }

        @Override
        public void setOs(String os) {
            this.mOs = os;
        }
    }
```

```java 
package com.anakin.design_pattern_test.demo.singel_instance.builder;

    /**
    * Created by demo on 2017/2/8 0008
    */
    public class AppleBuilder extends Builder {
        private  Computer mApplePc =new AppleComputer();
        @Override
        public void buildCore(int core) {
            mApplePc.setCore(core);
        }
    
        @Override
        public void buildRam(int ram) {
            mApplePc.setRem(ram);
        }
    
        @Override
        public void buildOs(String os) {
            mApplePc.setOs(os);
        }
    
        @Override
        public Computer create() {
    
            return mApplePc;
        }
    }
```

```java
package com.anakin.design_pattern_test.demo.singel_instance.builder;

/**
 * Created by demo on 2017/2/8 0008
 */
public abstract class Builder {


    public abstract void buildCore(int core);

    public abstract void buildRam(int ram);

    public abstract void buildOs(String os);

    public abstract Computer create();
}
```

```java 
package com.anakin.design_pattern_test.demo.singel_instance.builder;

    /**
     * Created by demo on 2017/2/8 0008
     */
    public class Director {
        Builder mBuilder=null;

        public Director(Builder builder) {
            mBuilder = builder;
        }

        public void construct(int core,int ram, String os){
            mBuilder.buildCore(core);
            mBuilder.buildRam(ram);
            mBuilder.buildOs(os);
        }
    }
```

 测试代码
```java 
 // 测试运行效果
 Builder builder = new AppleBuilder();
 Director director = new Director(builder);
 director.construct(4,2,"linux");
 Log.d(TAG,"test result >>>>> :: " +builder.create().toString());
```
