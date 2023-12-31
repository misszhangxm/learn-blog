---
title: String字符串方法
date: 2017-02-08 19:47:29
tag: [ String]
category: JavaScript
---
<center> 

# 1. charAt() # 
</center>
```
str.charAt(n)
```
返回字符串的第 n 个字符，如果不在 0~str.length-1之间，则返回一个空字符串。

# 2. indexOf() #
```
indexOf(substr[,start])
```
返回 substr 在字符串 str 中首次出现的位置,从 start 位置开始查找，如果不存在，则返回 -1。

start可以是任意整数，默认值为 0。如果 start < 0 则查找整个字符串（如同传进了 0）。如果 start >= str.length，则该方法返回 -1，除非被查找的字符串是一个空字符串，此时返回 str.length.
```
var str = "javascript";
str.indexOf('s'); // 1
str.indexOf('s',6); // -1
str.indexOf('',11); // 10
str.indexOf('',8); // 8
```

# 3. lastIndexOf() #
```
lastIndexOf(substr[,start])
```
返回 substr 在字符串 str 中最后出现的位置,从 start 位置 向前开始查找，如果不存在，则返回 -1。
```
'lastindex'.lastIndexOf('a'); // 1
```
# 4. substring() #
```
str.substring(start[, end])
```
返回从 start 到 end（不包括）之间的字符，start、end均为 非负整数。若结束参数(end)省略，则表示从start位置一直截取到最后。
```
var str = 'abcdefg';
str.substring(1, 4); //"bcd"
str.substring(1); // "bcdefg"
str.substring(-1); //"abcdefg" 传入负值时会视为0
```

# 5. slice() #
```
str.slice(start[,end])
```
返回从 start 到 end （不包括）之间的字符，可传负值
```
var str = 'this is awesome';
str.slice(4, -1); //" is awesom"
```

#  6. substr() #
```
str.slice(start[,end])
```
返回 str 中从指定位置开始到指定长度的子字符串，start可为负值

```
var str = "Just give me a reason";
str.substr(5, 10); // "give me a "
str.substr(-4, 2); // "as"
```

# 7.replace() #
```
str.replace(regexp|substr, newSubStr|function)
```
替换 str 的子字符串
```
var str = "do you love me";
str.replace('love','hate'); // "do you hate me"
```

# 8. search() #
```
str.search(regexp)
```
查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
```
var str = 'I love JavaScript!';
str.search(/java/); // -1
str.search(/Java/); // 7
str.search(/java/i); // 7
str.search('Java'); // 7
```

# 9. match() #
```
str.match(regexp)
```
返回一个包含匹配结果的数组，如果没有匹配项，则返回 null。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
```
var str = 'Javascript java';
str.match(/Java/); // ["Java"]
str.match(/Java/gi); // ["java", "Java"]
str.match(/ab/g); // null
```
# 10. split() #
```
str.split([separator][, limit])
```
返回一个数组，分隔符 separator 可以是一个字符串或正则表达式
```
var str = "Hello?World!";
str.split(); // ["Hello?World!"]
str.split(''); // ["H", "e", "l", "l", "o", "?", "W", "o", "r", "l", "d", "!"]
str.split('?'); // ["Hello", "World!"]
str.split('',5); // ["H", "e", "l", "l", "o"]
```

# 11. trim() #
```
str.trim()
```
去除 str 开头和结尾处的空白字符，返回 str 的一个副本，不影响字符串本身的值
```
var str = ' abc ';
str.trim(); // 'abc'
console.log(str); // ' abc '
```

# 12. toLowerCase() #
```
str.toLowerCase()
```
将 str 转换为小写，并返回 str 的一个副本，不影响字符串本身的值
```
var str = 'JavaScript';
str.toLowerCase(); // 'javascript'
console.log(str); // 'JavaScript'
```

# 13. toUpperCase() #
```
str.toUpperCase()
```
将 str 转换为大写，并返回 str 的一个副本，不影响字符串本身的值
```
var str = 'JavaScript';
str.toUpperCase(); // 'JAVASCRIPT'
console.log(str); // 'JavaScript'
```