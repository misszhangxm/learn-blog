import{_ as t,F as i,V as p,W as o,X as n,Y as s,$ as l,Z as c,a0 as a}from"./framework-fd1dac66.js";const r={},d={href:"https://reactnative.cn/docs/0.46/navigation.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>在安装几个库：(不要问为什么，我也不知道。如果有知道的请告知。万分感谢！！！)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>react-navigation
react-native-reanimated 
react-native-gesture-handler 
react-native-screens
react-navigation-stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>react-navigation-stack</code></p>`,3),v=a(`<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h3><p>路由配置对象是从路由名称到路由配置的映射，它告诉导航器针对该路由显示什么内容</p><p><code>createStackNavigator(RouteConfigs, StackNavigatorConfig);</code><code>RouteConfigs</code>: 路由配置对象中的键是路由名称，值是该路由的配置。配置上唯一需要的属性是screen（用于路由的组件）。 <code>StackNavigatorConfig</code>: <code>createStackNavigator</code> 是一个函数，它接受一个路由配置对象和一个选项对象，并返回一个React组件。 例子:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation-stack&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  Text<span class="token punctuation">,</span> 
  View<span class="token punctuation">,</span> 
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DetailsScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Details Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AppNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">Detailss</span><span class="token operator">:</span> DetailsScreen
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个的时候呢~</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation-stack&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  Text<span class="token punctuation">,</span> 
  View<span class="token punctuation">,</span> 
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DetailsScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Details Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HomeScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Home Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AppNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">Detailss</span><span class="token operator">:</span> DetailsScreen<span class="token punctuation">,</span>   <span class="token comment">// 堆栈导航器上定义路由</span>
  <span class="token literal-property property">Home</span><span class="token operator">:</span> HomeScreen           <span class="token comment">// 堆栈导航器上定义路由</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">initialRouteName</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span>   <span class="token comment">// 初始化的时候要显示的路由</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的跳转" tabindex="-1"><a class="header-anchor" href="#路由的跳转" aria-hidden="true">#</a> 路由的跳转:</h3><ul><li><code>this.props.navigation.navigate(&#39;RouteName&#39;)</code> 只能导航到堆栈导航器上定义好的路由，如果不在堆栈上则不会有反应。</li><li><code>this.props.navigation.push(&#39;RouteName&#39;)</code> 将新路由添加到堆栈导航器。</li><li><code>this.props.navigation.goBack();</code> 返回上一个路由(与设备的返回键相同作用) 在Android上，React Navigation会挂接到硬件后退按钮，并goBack()在用户按下它时为您触发该功能 ，因此其行为与用户期望的一样。</li><li><code>this.props.navigation.popToTop()</code> 返回到堆栈中的第一个路由。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-navigation-stack&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  Text<span class="token punctuation">,</span> 
  View<span class="token punctuation">,</span> 
  Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DetailsScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Details Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>Button 
		          title<span class="token operator">=</span><span class="token string">&#39;add screen&#39;</span>
		          onPress<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Details&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// 跳转至DEtails</span>
		        <span class="token operator">/</span><span class="token operator">&gt;</span>
		        <span class="token operator">&lt;</span>Button 
		          title<span class="token operator">=</span><span class="token string">&#39;Go to Home&#39;</span>
		          onPress<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// 返回home路由</span>
		        <span class="token operator">/</span><span class="token operator">&gt;</span>
		        <span class="token operator">&lt;</span>Button 
		          title<span class="token operator">=</span><span class="token string">&#39;Go back&#39;</span>
		          onPress<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>  <span class="token comment">// 返回上一个路由</span>
		        <span class="token operator">/</span><span class="token operator">&gt;</span>
		        <span class="token operator">&lt;</span>Button 
		          title<span class="token operator">=</span><span class="token string">&#39;one&#39;</span>
		          onPress<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">popToTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>  <span class="token comment">// 返回第一个路由</span>
		        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HomeScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Home Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>Button
		  title<span class="token operator">=</span><span class="token string">&#39;Go to detail&#39;</span>
		  onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;Details&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>  <span class="token comment">// 跳到Details路由</span>
		<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AppNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">Detailss</span><span class="token operator">:</span> DetailsScreen<span class="token punctuation">,</span>   <span class="token comment">// 堆栈导航器上定义路由</span>
  <span class="token literal-property property">Home</span><span class="token operator">:</span> HomeScreen           <span class="token comment">// 堆栈导航器上定义路由</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">initialRouteName</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span>   <span class="token comment">// 初始化的时候要显示的路由</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的生命周期" tabindex="-1"><a class="header-anchor" href="#路由的生命周期" aria-hidden="true">#</a> 路由的生命周期</h3><p>待整理..</p><h3 id="路由的参数传递" tabindex="-1"><a class="header-anchor" href="#路由的参数传递" aria-hidden="true">#</a> 路由的参数传递.</h3><ul><li><code>this.props.navigation.navigate(&#39;Details&#39;, {})</code> 第二个参数就是要传递的参数。</li><li><code>this.props.navigation.getParam(&#39;name&#39;, &#39;NO-ID&#39;)</code> 接收参数，第一个参数是要接收的<code>key</code> 还可以通过 <code>this.props.navigation.state.params</code> 拿到所有的参数</li><li><code>this.props.navigation.setParams({ name: &#39;Updated!&#39; })</code> // 更新接收到的值 (把<code>name:</code>原值修改为 <code>Updated!</code>)</li></ul><p>基于原来的例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;;
import { createAppContainer } from &#39;react-navigation&#39;;
import { createStackNavigator } from &#39;react-navigation-stack&#39;;

import { 
  Text, 
  View, 
  Button,
} from &#39;react-native&#39;;


class HomeScreen extends Component {

  render() {
    return (
      &lt;View style={{ flex: 1, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39; }}&gt;
        &lt;Text&gt;Home Screen&lt;/Text&gt;
        &lt;Button
          title=&#39;Go to detail&#39;
          onPress={
            () =&gt; {
              this.props.navigation.navigate(&#39;Details&#39;, {
                number: 568,
                name: &#39;mrceel&#39;
              })  // 第二个参数就是要传递的参数。
              
            }
          }
        /&gt;
      &lt;/View&gt;
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      
      &lt;View style={{ flex: 1, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39; }}&gt;
        &lt;Text&gt;Details Screen&lt;/Text&gt;
        &lt;Text&gt;
          参数: {JSON.stringify(navigation.state.params)}   //拿到所有的参数
        &lt;/Text&gt;
        &lt;Text&gt;
          name:
          {JSON.stringify(navigation.getParam(&#39;name&#39;, &#39;default value&#39;))}     // 接收参数
        &lt;/Text&gt;
        &lt;Button 
          title=&#39;add screen&#39;
          onPress={ () =&gt; {this.props.navigation.push(&#39;Details&#39;, {
            number: Math.floor(Math.random() * 100), // 传递参数
          })} }
        /&gt;
		&lt;Button
		  title=&quot;Update the title&quot;
		  onPress={() =&gt; this.props.navigation.setParams({ name: &#39;Updated!&#39; })}  // 更新接收到的值
		/&gt;
      &lt;/View&gt;
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: &#39;Home&#39;,
});

// export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return &lt;AppContainer /&gt;;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传递给navigationOptions函数的参数是具有以下属性的对象：</p><ul><li><code>navigation</code>- 屏幕的导航道具，屏幕的路径为<code>navigation.state</code>。</li><li><code>screenProps</code> -从导航器组件上方传递的道具</li><li><code>navigationOptions</code> -如果未提供新值，则将使用默认或先前的选项</li><li><code>navigation</code>在上面的示例中，我们只需要<code>prop</code>。但是在某些情况下，您可能想使用<code>screenPropsor</code> <code>navigationOptions</code>。</li></ul><h3 id="调整标题样式" tabindex="-1"><a class="header-anchor" href="#调整标题样式" aria-hidden="true">#</a> 调整标题样式</h3><p>关键性能用途：<code>headerStyle</code>，<code>headerTintColor</code>，和<code>headerTitleStyle</code>。</p><ul><li><code>headerStyle</code>：设置标题行的样式。</li><li><code>headerTintColor</code>：后退按钮和标题都使用此属性作为其颜色。在下面的示例中，我们将颜色设置为白色（#fff）， 因此后退按钮和标题标题将为白色。</li><li><code>headerTitleStyle</code>：如果要自定义标题的fontFamily，fontWeight以及其他Text样式属性，可以使用它来完成。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class HomeScreen extends Component {

// 定义单个组件的样式
  static navigationOptions = {
    title: &#39;Home&#39;,
    headerStyle: {
      backgroundColor: &#39;#f4511e&#39;,  // 设置标题行的背景颜色
    },
    headerTintColor: &#39;#fff&#39;,  // 标题颜色
    headerTitleStyle: {
      fontWeight: &#39;bold&#39;, // 其它样式
    },
  }

  render() {
    return (
      &lt;View style={{ flex: 1, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39; }}&gt;
        &lt;Text&gt;Home Screen&lt;/Text&gt;
        &lt;Button
          title=&#39;Go to detail&#39;
          onPress={
            () =&gt; {
              this.props.navigation.navigate(&#39;Details&#39;, {
                number: 568,
                name: &#39;mrceel&#39;
              })
              
            }
          }
        /&gt;


      &lt;/View&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要定义多个组件的样式可以直接写在 <code>createStackNavigator()</code> 里面。 例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: &#39;Home&#39;,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: &#39;#f4511e&#39;,
    },
    headerTintColor: &#39;#fff&#39;,
    headerTitleStyle: {
      fontWeight: &#39;bold&#39;,
    },
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样所有的标题头部样式都一样了。 如果想某一个的样式不一样呢？也是可以的。如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation, navigationOptions}) =&gt; {
    return {
      title: navigation.getParam(&#39;name&#39;, &#39;a test deetails screen&#39;),
      headerStyle: {
        backgroundColor: &#39;red&#39;,  // 样式覆盖
      },
      headerTintColor: &#39;yellow&#39;, // 样式覆盖
    }
  }

  render() {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此便成功了。 那如果我想用图片或者自定义的组件代替标题能行吗？！答案是肯定的。 如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建一个图片&#39;组件&#39;   (自定义组件) 
class ImageTitle extends Component {
  render(){
    return(
      &lt;Image 
        source={require(&#39;./source/img/title.jpg&#39;)}
        style={{ width: 30, height: 30 }}
      /&gt;
    )
  }
}

class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: () =&gt; &lt;ImageTitle /&gt;,   // 直接使用即可
	headerRight: () =&gt; &lt;Button onPress={() =&gt; alert(&#39;This is a button!&#39;)} title=&quot;Infos&quot; color=&quot;#fff&quot;/&gt;,  // 右边增加按钮
	headerLeft: () =&gt; &lt;Button onPress={() =&gt; alert(&#39;This is a button!&#39;)} title=&quot;Infos&quot; color=&quot;#fff&quot;/&gt;, // 左边增加按钮
	  
  }

  render() {
	  // ....
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>onNavigationStateChange(prevState, newState, action)</code> 每次由导航器管理的导航状态更改时都会调用的函数。它接收先前的状态，导航的新状态以及发出状态更改的动作。 默认情况下，它将状态更改打印到控制台。</p>`,29);function k(m,b){const e=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[s("官方网址： "),n("a",d,[s("传送门"),l(e)])]),u,c(" more "),v])}const y=t(r,[["render",k],["__file","react-native路由的使用.html.vue"]]);export{y as default};
