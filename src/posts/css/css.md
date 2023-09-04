---
title: Css
date: 2023-03-02 17:52:03
tag: [Css]
category: Css
---
# gird

gird 布局是将容器划分为“行”和“列”，产生单元格，可以看作 **二维布局**



```css
div{
  display: grid;
}

item{
  
}
```



## 容器属性

```css
 指定一个容器采用grid布局
div {
  display: grid;
  display: inline-block;
}
```

行和列

```css
div{
 gird-template-colmuns: repeat(3, 100px)
   
   repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

	 repeat()重复某种模式也是可以的。
   例如： gird-template-colmuns: repeat(3, 100px 200px 100px)
   会生成9列，
   
   
   有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
   gird-template-colmuns: repeat(auto-fill, 100px)
   
   
   minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
   grid-template-columns: 1fr 1fr minmax(100px, 1fr);
		minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。
}
```



**网格线的名称**

`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
>   grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
> }
> ```

上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。



### 行/列间距

```
div{
 row-gap: 15px;    设置行间距
 column-gap: 15px; 设置列间距
}
```





### grid-template-areas 属性

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。

```css
div{
	grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

当容器使用 `grid-template-areas`属性的时候，其**子元素要有对应**的 `grid-area: a`属性。否则不起作用



### grid-auto-flow 属性

> 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。

> 默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。

这个顺序由`grid-auto-flow`属性决定，

- 默认值是`row`，即"先行后列"。

- 也可以将它设成`column`，变成"先列后行"。

### 对齐方式

justify-items 属性

`justify-items`属性设置单元格内容的水平位置（左中右）

align-items 属性

`align-items`属性设置单元格内容的垂直位置（上中下）

**这两个属性的写法完全相同**，都可以取下面这些值。

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

place-items 属性

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。

​	place-items: column row

​	第一个值是上下对齐方式， 第二个是左右对齐方式



**justify-content** 属性， **align-content** 属性， **place-content** 属性

`justify-content`属性是整个内容区域在容器里面的水平位置（左中右）。

`align-content`属性是整个内容区域的垂直位置（上中下）。

`place-content: <align-content> <justify-content>` 前两个的合并写法。

取值范围

- start    对齐容器的起始边框。
- end     对齐容器的结束边框。
-  center     容器内部居中。
-  stretch    项目大小没有指定时，拉伸占据整个网格容器。
-  space-around   每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
-  space-between 项目与项目的间隔相等，项目与容器边框之间没有间隔。
-  space-evenly     项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。



### grid-auto-columns 属性， grid-auto-rows 属性

有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与`grid-template-columns`和`grid-template-rows`完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。



### grid-template 属性， grid 属性

`grid-template`属性是`grid-template-columns`、`grid-template-rows`和`grid-template-areas`这三个属性的合并简写形式。

`grid`属性是`grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`这六个属性的合并简写形式。





## 项目属性

grid-column-start 属性， grid-column-end 属性

- **简写为** grid-column: 2/ 4;

 grid-row-start 属性， grid-row-end 属性

- **简写为** grid-row: 2 /3;

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

> - `grid-column-start`属性：左边框所在的垂直网格线
> - `grid-column-end`属性：右边框所在的垂直网格线
> - `grid-row-start`属性：上边框所在的水平网格线
> - `grid-row-end`属性：下边框所在的水平网格线

### `grid-area`属性

`grid-area`属性指定项目放在哪一个区域。

配合 grid-template-areas 属性使用

```css
div{
	display: grid;
  grid-template-areas: 'a b c'
    									 'd e f'
    									 'g h i';  分为9个区域
}

.item-1 {
  grid-area: e;     该元素放到 e 区域
}
```

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。

> ```css
> .item {
>   grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
> }
> ```

下面是一个[例子](https://jsbin.com/duyafez/edit?css,output)。

> ```css
> .item-1 {
>   grid-area: 1 / 1 / 3 / 3;
> }
> ```

 

### 设置单元格内容对齐方式

justify-self 属性， align-self 属性

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

place-self 属性是 `justify-self` ， `align-self` **合并写法**