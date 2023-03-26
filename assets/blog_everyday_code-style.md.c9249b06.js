import{_ as s,o as a,c as n,a as l}from"./app.ed2a374b.js";const B=JSON.parse('{"title":"Code Style","description":"","frontmatter":{},"headers":[],"relativePath":"blog/everyday/code-style.md","lastUpdated":1679813736000}'),p={name:"blog/everyday/code-style.md"},o=l(`<h1 id="code-style" tabindex="-1">Code Style <a class="header-anchor" href="#code-style" aria-hidden="true">#</a></h1><h2 id="变量命名" tabindex="-1">变量命名 <a class="header-anchor" href="#变量命名" aria-hidden="true">#</a></h2><p>要写出好代码，变量命名至关重要。我们尽量采用富有表现力的词，英文不好多用翻译软件，保证不出现错误单词。编辑器可以安装相关的拼写检查、翻译插件。</p><ol><li>不要缩写/简写单词，除非这些单词已经公认可以被这样缩写/简写。这样做导致可读性下降，意义表达不明确。反例：<code>Association ass</code> 、<code>StringBuilder sb</code></li><li>普通变量命名则使用名词及名词短语。比如 <code>value</code>、<code>options</code>、<code>fileText</code>、<code>columnName</code> 等</li><li>boolean 命名，如果表示“是不是”用 <code>is...</code>，表示“有没有”用 <code>has...</code>，表示“能不能”用<code>can...</code>，表示“能不能怎么样”用 <code>...able</code></li><li>function 命名采用动词/宾语顺序。比如 <code>getUserInfo</code>、<code>insertRows</code>、<code>clearValue</code> 等</li><li>避免使用 <code>_</code> 开头、<code>temp</code>、<code>my</code> 之类命名临时变量，临时变量也是有意义的，这些都会增加阅读代码时的噪点</li><li>避免无意义的命名，你起的每一个名字都要能表明意思。比如<code>userInfo</code>、<code>clickCount</code> 反例 <code>info</code> 、<code>count</code></li></ol><h2 id="提前返回" tabindex="-1">提前返回 <a class="header-anchor" href="#提前返回" aria-hidden="true">#</a></h2><p>在 <code>function</code> 中经常会遇到变量值为 <code>undefined</code> 的情况，这个时候则需要提前判断并阻止执行，避免一些不必要的分支（无 <code>else</code>），让代码更精炼。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (userInfo) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;">// 执行业务逻辑</span></span>
<span class="line"><span style="color:#ADBAC7;">} </span><span style="color:#F47067;">else</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>提前返回：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (</span><span style="color:#F47067;">!</span><span style="color:#ADBAC7;">userInfo) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// 执行业务逻辑</span></span>
<span class="line"></span></code></pre></div><h2 id="可选链操作符" tabindex="-1">可选链操作符( <strong><code>?.</code></strong> ) <a class="header-anchor" href="#可选链操作符" aria-hidden="true">#</a></h2><p>如果我们有一个这样的对象：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">parent</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  child: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    child1: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      child2: {</span></span>
<span class="line"><span style="color:#ADBAC7;">        key: </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      },</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"></span></code></pre></div><p>很多时候我们会这样去写，避免某一层级不存在导致报错：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">parent </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> parent.child </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> parent.child.child1 </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> parent.child.child1.child2;</span></span>
<span class="line"></span></code></pre></div><p>这样代码看起来就会很臃肿，可以使用可选链运算符( <strong><code>?.</code></strong> )：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">parent?.child?.child1?.child2;</span></span>
<span class="line"></span></code></pre></div><p>这样实现和效果和上面的一大长串是一样的。</p><p>可选链运算符同样适用于数组：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">array</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> [</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">3</span><span style="color:#ADBAC7;">];</span></span>
<span class="line"><span style="color:#ADBAC7;">array?.[</span><span style="color:#6CB6FF;">5</span><span style="color:#ADBAC7;">];</span></span>
<span class="line"></span></code></pre></div><p>可选链运算符允许我们读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。在引用为空(<code>null</code> 或者 <code>undefined</code>) 的情况下不会引起错误，该表达式短路返回值是 <code>undefined</code>。与函数调用一起使用时，如果给定的函数不存在，则返回 <code>undefined</code>。</p><h2 id="空值合并运算符" tabindex="-1">空值合并运算符（<strong><code>??</code></strong>） <a class="header-anchor" href="#空值合并运算符" aria-hidden="true">#</a></h2><p>如果有这样一段代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">||</span><span style="color:#ADBAC7;"> a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">undefined</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#DCBDFB;">doSomething</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>也就是如果需要验证一个值如果等于<code>null</code>或者<code>undefined</code>时，需要执行一个操作时，可以使用空值合并运算符来简化上面的代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">a </span><span style="color:#F47067;">??</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">doSomething</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"></span></code></pre></div><p>这样，只有 a 是<code>null</code>或者<code>undefined</code>时，才会执行控制合并运算符后面的代码。空值合并运算符（<strong><code>??</code></strong>）是一个逻辑操作符，当左侧的操作数为<code>null</code>或者<code>undefined</code>时，返回其右侧操作数，否则返回左侧操作数。</p><h2 id="条件判断" tabindex="-1">条件判断 <a class="header-anchor" href="#条件判断" aria-hidden="true">#</a></h2><p>简单的判断 <code>if + return</code> 就提前返回了。复杂逻辑 <code>if else if</code> 面条式代码不够优雅，想用 <code>switch case</code>？实际情况看来 <code>if else</code> 和 <code>switch case</code> 用法区别不大。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#768390;">// if else</span></span>
<span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (status </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;processing&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">} </span><span style="color:#F47067;">else</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (status </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;fail&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">} </span><span style="color:#F47067;">else</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (status </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">3</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;success&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">} </span><span style="color:#F47067;">else</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (status </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;cancel&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">} </span><span style="color:#F47067;">else</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;other&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// switch case</span></span>
<span class="line"><span style="color:#F47067;">switch</span><span style="color:#ADBAC7;"> (status) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">case</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;processing&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">break</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">case</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;fail&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">break</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">case</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">3</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;success&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">break</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">case</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;cancel&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">break</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">default</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;other&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">break</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>在上面代码中可以看出 <code>switch case</code> 比 <code>if else</code> 代码行数还多，<code>break</code> 关键字也是必不可少，还不忘写 <code>default</code>。这里我们推荐用 <code>Object</code> 或 <code>Map</code> 作为条件存储。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">actions</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&#39;processing&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&#39;fail&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">3</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&#39;success&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&#39;cancel&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  default: </span><span style="color:#96D0FF;">&#39;other&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(actions[status] </span><span style="color:#F47067;">??</span><span style="color:#ADBAC7;"> actions.default);</span></span>
<span class="line"></span></code></pre></div><p><code>Map</code> 则更为强大，<code>Object</code> 的键必须是一个<code>String</code> 或是<code>Symbol</code>，但 Map 的键可以是<strong>任意值</strong>，包括函数、对象或任意基本类型。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">actions</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Map</span><span style="color:#ADBAC7;">([</span></span>
<span class="line"><span style="color:#ADBAC7;">  [</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;processing&#39;</span><span style="color:#ADBAC7;">],</span></span>
<span class="line"><span style="color:#ADBAC7;">  [</span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;fail&#39;</span><span style="color:#ADBAC7;">],</span></span>
<span class="line"><span style="color:#ADBAC7;">  [</span><span style="color:#6CB6FF;">3</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;success&#39;</span><span style="color:#ADBAC7;">],</span></span>
<span class="line"><span style="color:#ADBAC7;">  [</span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;cancel&#39;</span><span style="color:#ADBAC7;">],</span></span>
<span class="line"><span style="color:#ADBAC7;">  [</span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;other&#39;</span><span style="color:#ADBAC7;">],</span></span>
<span class="line"><span style="color:#ADBAC7;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">console.</span><span style="color:#DCBDFB;">log</span><span style="color:#ADBAC7;">(actions.</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(status) </span><span style="color:#F47067;">??</span><span style="color:#ADBAC7;"> actions.</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">)));</span></span>
<span class="line"></span></code></pre></div><h2 id="使用逻辑运算符" tabindex="-1">使用逻辑运算符 <a class="header-anchor" href="#使用逻辑运算符" aria-hidden="true">#</a></h2><p>如果有一段这样的代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (a </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#DCBDFB;">doSomething</span><span style="color:#ADBAC7;">(a);</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>可以使用逻辑运算符来改写：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">a </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&amp;&amp;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">doSomething</span><span style="color:#ADBAC7;">(a);</span></span>
<span class="line"></span></code></pre></div><p>这样写就会简洁很多，如果逻辑与<code>&amp;&amp;</code>操作符前面的值为假，就会发生短路操作，直接结束这一句的执行；如果为真，就会继续执行<code>&amp;&amp;</code>后面的代码，并返回后面代码的返回值。使用这种方式可以减少很多<code>if...else</code>判断。</p><h2 id="判断简化" tabindex="-1">判断简化 <a class="header-anchor" href="#判断简化" aria-hidden="true">#</a></h2><p>如果有下面的这样的一个判断：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">undefined</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">||</span><span style="color:#ADBAC7;"> a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">||</span><span style="color:#ADBAC7;"> a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">15</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">||</span><span style="color:#ADBAC7;"> a </span><span style="color:#F47067;">===</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>就可以使用数组来简化这个判断逻辑：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> ([</span><span style="color:#6CB6FF;">undefined</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">15</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">].</span><span style="color:#DCBDFB;">includes</span><span style="color:#ADBAC7;">(a)) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>这样代码就会简洁很多，并且便于扩展，如果还有需要等于 a 的判断，直接在数组中添加即可。</p><h2 id="函数参数" tabindex="-1">函数参数 <a class="header-anchor" href="#函数参数" aria-hidden="true">#</a></h2><p>如果当函数参数大于两个，就可以考虑使用对象的形式来传递参数，而不是参数列表。</p><p>对象的形式传递参数时，传递可选参数并不需要放在最后，并且参数的顺序不在重要。与参数列表相比，通过对象传递的内容也更容易阅读和理解。</p><p>下面来看一个例子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">function</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getUserInfo</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">name</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">age</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">sex</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">Address</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">phone</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCBDFB;">getUserInfo</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&#39;小明&#39;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">24</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;男&#39;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">undefined</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&#39;1388888&#39;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span></code></pre></div><p>下面来使用对象传参：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">function</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getUserInfo</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">args</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> { </span><span style="color:#6CB6FF;">name</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">age</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">sex</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">Address</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">phone</span><span style="color:#ADBAC7;"> } </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> args;</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCBDFB;">getUserInfo</span><span style="color:#ADBAC7;">({</span></span>
<span class="line"><span style="color:#ADBAC7;">  phone: </span><span style="color:#96D0FF;">&#39;1388888&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  sex: </span><span style="color:#96D0FF;">&#39;bananas&#39;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  age: </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  name: </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">});</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/airbnb/javascript" target="_blank" rel="noreferrer">https://github.com/airbnb/javascript</a></p><p><a href="https://mp.weixin.qq.com/s/bi2spjQh8s-Qel1LREOeFg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/bi2spjQh8s-Qel1LREOeFg</a></p><p><a href="https://mp.weixin.qq.com/s/FzAyEBz3Qs5qoVG04UOvFg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/FzAyEBz3Qs5qoVG04UOvFg</a></p></blockquote>`,54),e=[o];function c(t,r,A,y,i,d){return a(),n("div",null,e)}const D=s(p,[["render",c]]);export{B as __pageData,D as default};
