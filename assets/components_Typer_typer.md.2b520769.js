import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7404742a.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/Typer/typer.md","lastUpdated":1680266397000}'),p={name:"components/Typer/typer.md"},e=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#adbac7;">{</span></span>
<span class="line"><span style="color:#adbac7;">  strings: [], // 要打字的字符串数组</span></span>
<span class="line"><span style="color:#adbac7;">  stringsElement: null, // 包含字符串子元素的元素的 ID</span></span>
<span class="line"><span style="color:#adbac7;">  typeSpeed: 0, // 打字速度，以毫秒为单位</span></span>
<span class="line"><span style="color:#adbac7;">  startDelay: 0, // 打字前的延迟时间，以毫秒为单位</span></span>
<span class="line"><span style="color:#adbac7;">  backSpeed: 0, // 回退速度，以毫秒为单位</span></span>
<span class="line"><span style="color:#adbac7;">  smartBackspace: true, // 只回退与前一个字符串不匹配的部分</span></span>
<span class="line"><span style="color:#adbac7;">  shuffle: false, // 是否打乱字符串</span></span>
<span class="line"><span style="color:#adbac7;">  backDelay: 700, // 回退前的等待时间，以毫秒为单位</span></span>
<span class="line"><span style="color:#adbac7;">  fadeOut: false, // 是否淡出而不是回退</span></span>
<span class="line"><span style="color:#adbac7;">  fadeOutClass: &#39;typed-fade-out&#39;, // 淡出动画的 CSS 类</span></span>
<span class="line"><span style="color:#adbac7;">  fadeOutDelay: 500, // 淡出延迟时间，以毫秒为单位</span></span>
<span class="line"><span style="color:#adbac7;">  loop: false, // 是否循环字符串</span></span>
<span class="line"><span style="color:#adbac7;">  loopCount: Infinity, // 循环次数</span></span>
<span class="line"><span style="color:#adbac7;">  showCursor: true, // 是否显示光标</span></span>
<span class="line"><span style="color:#adbac7;">  cursorChar: &#39;|&#39;, // 光标字符</span></span>
<span class="line"><span style="color:#adbac7;">  autoInsertCss: true, // 是否将 CSS 插入到 HTML &lt;head&gt; 中</span></span>
<span class="line"><span style="color:#adbac7;">  attr: null, // 用于打字的属性，例如输入占位符、值或 HTML 文本</span></span>
<span class="line"><span style="color:#adbac7;">  bindInputFocusEvents: false, // 如果元素是文本输入，则绑定到焦点和模糊</span></span>
<span class="line"><span style="color:#adbac7;">  contentType: &#39;html&#39;, // 内容类型，&#39;html&#39; 或 &#39;null&#39; 表示纯文本</span></span>
<span class="line"><span style="color:#adbac7;">  onBegin: (self) =&gt; {}, // 开始打字前</span></span>
<span class="line"><span style="color:#adbac7;">  onComplete: (self) =&gt; {}, // 所有打字完成后</span></span>
<span class="line"><span style="color:#adbac7;">  preStringTyped: (arrayPos, self) =&gt; {}, // 每个字符串打字前</span></span>
<span class="line"><span style="color:#adbac7;">  onStringTyped: (arrayPos, self) =&gt; {}, // 每个字符串打字后</span></span>
<span class="line"><span style="color:#adbac7;">  onLastStringBackspaced: (self) =&gt; {}, // 循环时，在最后一个字符串被删除后</span></span>
<span class="line"><span style="color:#adbac7;">  onTypingPaused: (arrayPos, self) =&gt; {}, // 打字被暂停时</span></span>
<span class="line"><span style="color:#adbac7;">  onTypingResumed: (arrayPos, self) =&gt; {}, // 打字被恢复后</span></span>
<span class="line"><span style="color:#adbac7;">  onReset: (self) =&gt; {}, // 重置后</span></span>
<span class="line"><span style="color:#adbac7;">  onStop: (arrayPos, self) =&gt; {}, // 停止打字后</span></span>
<span class="line"><span style="color:#adbac7;">  onStart: (arrayPos, self) =&gt; {}, // 开始打字后</span></span>
<span class="line"><span style="color:#adbac7;">  onDestroy: (self) =&gt; {}, // 销毁后</span></span>
<span class="line"><span style="color:#adbac7;">}</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div>`,1),c=[e];function o(t,r,d,i,y,b){return a(),n("div",null,c)}const _=s(p,[["render",o]]);export{u as __pageData,_ as default};
