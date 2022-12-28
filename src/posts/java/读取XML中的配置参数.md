---
title: Android-读取XML中的配置参数工具类XMLUtil
date: 2017-01-20 10:22:04
tags: 
  - Android
---
## 一个读取xml文件中配置文件的工具类XMLUtil

### 代码如下：
```java
import javax.xml.parsers.*;  
    import org.w3c.dom.*;  
    import org.xml.sax.SAXException;  
    import java.io.*;  

    public class XMLUtil {  
        //该方法用于从XML配置文件中提取配置文件
        public static String getChartType() {  
            try {  
                //创建文档对象  
                DocumentBuilderFactory dFactory = DocumentBuilderFactory.newInstance();  
                DocumentBuilder builder = dFactory.newDocumentBuilder();  
                Document doc;                             
                doc = builder.parse(new File("config.xml"));   

                //获取包含配置文件的文本节点  
                NodeList nl = doc.getElementsByTagName("chartType");  
                Node classNode = nl.item(0).getFirstChild();  
                String chartType = classNode.getNodeValue().trim();  
                return chartType;  
            }     
            catch(Exception e) {  
                e.printStackTrace();  
                return null;  
            }  
        }  
    }
```


### XML 文件代码
```xml
<?xml version="1.0"?>  
    <config>  
        <chartType>histogram</chartType>  
</config>
```
