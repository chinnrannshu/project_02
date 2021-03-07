# html基礎

### 1. imgタグ何かできる、どうやって
* &lt;img&gt;标签定义 HTML 页面中的图像。<br>
* &lt;img&gt; 标签有两个必需的属性：src 和 alt。<br>
* 注释: 从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML 页面上。&lt;img&gt; 标签的作用是为被引用的图像创建占位符。 <br> 
* 提示：通过在 &lt;a&gt; 标签中嵌套 &lt;img&gt; 标签，给图像添加到另一个文档的链接。<br>

    例：&lt;img src="xxx" alt="xxx"&gt;<br>
  <img src="https://image.huanghepiao.com/d/file/20200807/7438d5764874a30c4a5c0c8cf8e1b649.png" alt="苏醒"><br>

### 2. headタグ何かできる、どうやって
* &lt;head&gt;元素是所有头部元素的容器。

* &lt;head&gt;元素必须包含文档的标题（title），可以包含脚本、样式、meta 信息 以及其他更多的信息。
### 3.bodyタグ何かできる、どうやって 
* <body> 标签定义文档的主体。

* <body> 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等）。
### 4.strong､blockquote､hr､br何かできる、どうやって
* &lt;strong&gt; 标签是一个短语标签，用来定义计算机程序的样本重要的文本。<br>

* 提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。<br>
* &lt;blockquote&gt;标签定义摘自另一个源的块引用。

* 浏览器通常会对 &lt;blockquote&gt;元素进行缩进。
* &lt;hr&gt;标签定义 HTML 页面中的主题变化（比如话题的转移），并显示为一条水平线。

* &lt;hr&gt;元素被用来分隔 HTML 页面中的内容（或者定义一个变化）。
* &lt;br&gt;标签插入一个简单的换行符。

* &lt;br&gt;标签是一个空标签，意味着它没有结束标签。
### 5.リストどうやって 表現してみよう

* list是列表的意思。<br>
* 比如我们在用无序列表时：&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;.显示出来的时候前面都是带点的。我们去掉前面的点会用到： list-style-type:none;<br>
当然html5中也有list,是引用&lt;datalist&gt; 字面意思就是：数据列表。
* 语法：&lt;input list="value"&gt;
* list 属性引用 &lt;datalist&gt; 元素，其中包含 &lt;input&gt; 元素的预定义选项。<br>
&lt;input list="browsers"&gt;规定绑定到 &lt;input&gt; 元素的 browsers的 id。<br>
&lt;datalist id="browsers"&gt;<br>
&lt;option value="Internet Explorer"&gt;<br>
&lt;option value="Firefox"&gt;<br>
&lt;option value="Google Chrome"&gt;<br>
&lt;option value="Opera"&gt;<br>
&lt;option value="Safari"&gt;<br>
&lt;/datalist&gt;
* list 属性是 HTML5 中的新属性。

### 6.tableタグどうやって 表現してみよう 
* &lt;table&gt; 标签定义 HTML 表格

* 一个 HTML 表格包括 &lt;table&gt;元素，一个或多个&lt;tr&gt;、&lt;th&gt;以及 &lt;td&gt;元素。

* &lt;tr&gt;元素定义表格行，&lt;th&gt; 元素定义表头，&lt;td&gt;元素定义表格单元。
### 7.リンクどうやって 表現してみよう 
* &lt;link&gt;标签定义文档与外部资源的关系。

* &lt;link&gt;标签最常见的用途是链接样式表。

* 注意： link 元素是空元素，它仅包含属性。

* 注意： 此元素只能存在于 head 部分，不过它可出现任何次数。
### 8.div､spanタグ何かできる、どうやって
* &lt;div&gt; 标签定义 HTML 文档中的一个分隔区块或者一个区域部分。

* &lt;div&gt;标签常用于组合块级元素，以便通过 CSS 来对这些元素进行格式化。
* &lt;span&gt;用于对文档中的行内元素进行组合。

* &lt;span&gt;标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。如果不对&lt;span&gt;应用样式，那么&lt;span&gt;元素中的文本与其他文本不会任何视觉上的差异。

* &lt;span&gt;标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。
