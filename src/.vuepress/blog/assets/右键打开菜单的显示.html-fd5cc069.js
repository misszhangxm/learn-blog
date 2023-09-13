import{_ as o,V as d,W as n,Z as i,X as e,a0 as c}from"./framework-fd1dac66.js";const s={},t=e("p",null,[e("strong",null,"把 vs Code 添加到右键菜单 (文件或者文件夹的右键打开菜单的显示)")],-1),l=c(`<h2 id="第一种" tabindex="-1"><a class="header-anchor" href="#第一种" aria-hidden="true">#</a> 第一种</h2><p>首先 win + R 输入 regedit 回车打开注册表, 找到<code>HKEY_CLASSES_ROOT</code> ≷<code>*</code>≷<code> shell</code> /</p><p>在shell下新建 <code>项</code> 名字 <code>Open with VS Code</code></p><p>在 <code>Open with VS Code</code> 文件夹下 新建 项 名字为<code>command</code>(必须是这个名字) ** 例: **</p><p>点击<code>Open with VS Code</code> 会出现如图右侧 蓝色框内的文字是右击菜单所显示的文字,可更改.</p><p>在右侧空白处 右击新建 <code>可扩充字符串值</code> 名字为Icon 数据处写 <code>你自己的路径 + , + 0 </code>. 如绿色框...</p><p>点击 <code>command</code> , 在右侧右击 &#39;默认&#39; ≷ 修改 数值数据为 <code>&quot;D:\\LENOVOE\\Microsoft VS Code\\Code.exe&quot; &quot;%1&quot;</code> ** 路径改为自己的路径 **</p><hr><p>以上为右击文件时的菜单及图标 , 下面说下右击文件夹时的菜单.</p><hr><p>找到 <code>HKEY_CLASSES_ROOT</code> ≷<code>Directory </code>≷<code> shell</code> 具体操作同上...</p><h2 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种</h2><p>新建文本 把下面代码放进去 改名为 vsCodeOpenFolder.reg .</p><p><strong>注: 下面代码需把路径改为自己的路径.</strong> 改完后删除 <code>//改完请删掉此注释</code></p><p>一切改完,运行此文件即可.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00   
   
; Open files   
[HKEY_CLASSES_ROOT\\*\\shell\\Open with VS Code]   
@=&quot;Edit with VS Code&quot;   
&quot;Icon&quot;=&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe&quot;,0&quot;     //改完请删掉此注释
   
[HKEY_CLASSES_ROOT\\*\\shell\\Open with VS Code\\command]   
@=&quot;\\&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%1\\&quot;&quot;    //改完请删掉此注释
   
; This will make it appear when you right click ON a folder   
; The &quot;Icon&quot; line can be removed if you don&#39;t want the icon to appear   
   
[HKEY_CLASSES_ROOT\\Directory\\shell\\vscode]   
@=&quot;Open Folder as VS Code Project&quot;   
&quot;Icon&quot;=&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe&quot;,0&quot;     //改完请删掉此注释
   
[HKEY_CLASSES_ROOT\\Directory\\shell\\vscode\\command]   
@=&quot;\\&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%1\\&quot;&quot;    //改完请删掉此注释
   
   
; This will make it appear when you right click INSIDE a folder   
; The &quot;Icon&quot; line can be removed if you don&#39;t want the icon to appear   
   
[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\vscode]   
@=&quot;Open Folder as VS Code Project&quot;   
&quot;Icon&quot;=&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe&quot;,0&quot;      //改完请删掉此注释
   
[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\vscode\\command]   
@=&quot;\\&quot;D:\\\\LENOVOE\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%1\\&quot;&quot;    //改完请删掉此注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function r(a,u){return d(),n("div",null,[t,i(" more "),l])}const m=o(s,[["render",r],["__file","右键打开菜单的显示.html.vue"]]);export{m as default};
