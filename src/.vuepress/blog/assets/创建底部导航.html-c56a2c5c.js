import{_ as i,V as s,W as t,Z as l,X as e,Y as n,a0 as a}from"./framework-fd1dac66.js";const d={},r=e("p",null,[n("基于上篇 "),e("code",null,"路由"),n(" 首先需要安装新的插件")],-1),v=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`react-navigation-tabs
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),c=a(`<p>思路就是先创建2个路由。然后由 <code>createBottomTabNavigator()</code> 直接生成导航栏。 官网代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import { Text, View } from &#39;react-native&#39;;
import { createAppContainer } from &#39;react-navigation&#39;;
import { createBottomTabNavigator } from &#39;react-navigation-tabs&#39;;
// 路由  组件 HomeScreen
class HomeScreen extends React.Component {
  render() {
    return (
      &lt;View style={{ flex: 1, justifyContent: &#39;center&#39;, alignItems: &#39;center&#39; }}&gt;
        &lt;Text&gt;Home!&lt;/Text&gt;
      &lt;/View&gt;
    );
  }
}
// 路由  组件 SettingsScreen
class SettingsScreen extends React.Component {
  render() {
    return (
      &lt;View style={{ flex: 1, justifyContent: &#39;center&#39;, alignItems: &#39;center&#39; }}&gt;
        &lt;Text&gt;Settings!&lt;/Text&gt;
      &lt;/View&gt;
    );
  }
}
// 生成导航栏
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用图标icon， 这个就比较简单了，如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import { Text, View } from &#39;react-native&#39;;
import { createAppContainer } from &#39;react-navigation&#39;;
import { createBottomTabNavigator } from &#39;react-navigation-tabs&#39;;
import Icon from &#39;react-native-vector-icons/FontAwesome&#39;;

class HomeScreen extends React.Component {
  render() {
    return (
      &lt;View style={{ flex: 1, justifyContent: &#39;center&#39;, alignItems: &#39;center&#39; }}&gt;
        &lt;Text&gt;Home!&lt;/Text&gt;
      &lt;/View&gt;
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      &lt;View style={{ flex: 1, justifyContent: &#39;center&#39;, alignItems: &#39;center&#39; }}&gt;
        &lt;Text&gt;Settings!&lt;/Text&gt;
        
      &lt;/View&gt;
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) =&gt; ({
      tabBarIcon: ({ focused, horizontal, tintColor }) =&gt; {
        const { routeName } = navigation.state;
        let IconComponent = Icon;  // 更换引用
        let iconName;
        if (routeName === &#39;Home&#39;) {
          iconName = &#39;book&#39;
        } else if (routeName === &#39;Settings&#39;) {
          iconName = \`user\`;
        }

        return &lt;IconComponent name={iconName} size={25} color={tintColor} /&gt;;
      },
    }),
    tabBarOptions: {
      activeTintColor: &#39;yellow&#39;,  // 选中项的颜色
      inactiveTintColor: &#39;blue&#39;, // 未选中项的颜色
    },
  }
);

export default createAppContainer(TabNavigator);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(o,u){return s(),t("div",null,[r,v,l(" more "),c])}const g=i(d,[["render",m],["__file","创建底部导航.html.vue"]]);export{g as default};
