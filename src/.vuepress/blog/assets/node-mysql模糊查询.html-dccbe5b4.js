import{_ as s,F as i,V as l,W as r,$ as d,a1 as t,Z as a,Y as e,a0 as o}from"./framework-fd1dac66.js";const v={},u=o(`<p>话不多说直接上代码.. app.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;);
// const bodyparser = require(&#39;body-parser&#39;);
const mysql = require(&#39;mysql&#39;);
const app = express();
const router = express.Router();

app.use(express.urlencoded({}));

let pool = mysql.createPool({
	host:&#39;localhost&#39;,
	user:&#39;root&#39;,
	password:&#39;root&#39;,
	database:&#39;query&#39;,
	port:3306
})

// 设置为可跨域
app.all(&#39;*&#39;, function(req, res, next) {
    res.header(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);
    res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;X-Requested-With&quot;);
    res.header(&quot;Access-Control-Allow-Methods&quot;,&quot;PUT,POST,GET,DELETE,OPTIONS&quot;);
    res.header(&quot;X-Powered-By&quot;,&#39; 3.2.1&#39;)
    res.header(&quot;Content-Type&quot;, &quot;application/json;charset=utf-8&quot;);
    next();
});

//这里是 /login  前端请求地址为 http://localhost:8001/login
app.get(&#39;/login&#39;,(req,res)=&gt;{
	var value = req.query.val;
	pool.query(\`SELECT * FROM students where name like &#39;%\${value}%&#39;\`, (qerr,vals,fields)=&gt;{
		let rows = JSON.stringify(vals);
		res.send(rows)
	})	
})

app.use(express.static(&#39;./&#39;))

app.listen(8001,() =&gt; {
	console.log(&#39;ok&#39;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(m,b){const n=i("center");return l(),r("div",null,[d(n,null,{default:t(()=>[e("** Node + express + mysql + Navicat for mysql 实现模糊查询 **")]),_:1}),a(" more "),e(" 仓库地址 -> [点击这里](https://github.com/Mrceel/VagueQuery.git) "),u])}const q=s(v,[["render",c],["__file","node-mysql模糊查询.html.vue"]]);export{q as default};
