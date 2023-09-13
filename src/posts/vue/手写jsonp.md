---
title: 手写jsonp
date: 2023-03-13 15:44:35
tag: [jsonp]
category: vue
---
```js
(function (global) {
    var id = 0,
    	container = document.getElementsByTagName("head")[0];
    
    function jsonp(options) {
    	if(!options || !options.url) return;
    	var scriptNode = document.createElement("script"),
    		data = options.data || {},
			url = options.url,
			callback = options.callback,
			fnName = "jsonp" + id++;
        
			// 添加回调函数
			data["callback"] = fnName;
        
			// 拼接url
			var params = [];
			for (var key in data) {
            	params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[
            }
            url = url.indexOf("?") > 0 ? (url + "&") : (url + "?");
            url += params.join("&");
            scriptNode.src = url;
                
            // 传递的是⼀个匿名的回调函数，要执⾏的话，暴露为⼀个全局⽅法
            global[fnName] = function (ret) {
                callback && callback(ret);
                container.removeChild(scriptNode);
                delete global[fnName];
            }
                
            // 出错处理
            scriptNode.onerror = function () {
                callback && callback({error:"error"});
                container.removeChild(scriptNode);
                global[fnName] && delete global[fnName];
            }
	
            scriptNode.type = "text/javascript";
            container.appendChild(scriptNode)
        }
        
        global.jsonp = jsonp;
        
 })(this)
```

