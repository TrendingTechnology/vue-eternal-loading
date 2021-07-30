import{o as n,c as s,a,b as t,d as e}from"./app.420d0e57.js";const o='{"title":"Loader positions","description":"","frontmatter":{},"relativePath":"guide/loader-positions.md","lastUpdated":1627627617737}',p={},l=a("h1",{id:"loader-positions"},[a("a",{class:"header-anchor",href:"#loader-positions","aria-hidden":"true"},"#"),t(" Loader positions")],-1),c=a("p",null,[a("strong",null,"vue-eternal-loading"),t(" offers 4 loader positions: top, left, right, bottom. We used bottom position in examples before ( means that "),a("strong",null,"vue-eternal-loading"),t(" component was below loaded items ). We shouldn't pass any prop to tell where our component is if we want to put it in the bottom or in the right. But we have to pass special props for top/left positions. Why that?")],-1),u=a("p",null,"It's because if you load new content which you put to the bottom or to the right of container, it doesn't affect scroll position towards our content.",-1),i=a("p",null,"In other words if you scroll 100 pixels down, and then put 200 pixels of new content to the end, it would be okay, because your top content and your scroll are in the same positions. Same rules can be applied to the right loader position:",-1),r=a("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gavrashenko/8u150Lpk/54/embedded/result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"},null,-1),d=e('<p>As you see, we just put loader to the right using css, nothing else, and everything works grate!</p><p>It won&#39;t work the same way if we just put loader to the top or to the left. Because if put some new content to the top / left - browser will preserve our scroll, but the content in the same scroll position will be different, and we need to change scroll position to the difference between old &amp; new scroll content sizes.</p><p>Luckily, all this calculations make <strong>vue-eternal-loading</strong>.</p><p>We need to pass prop <code>position</code>, which can accept following values:</p><ul><li><strong>default</strong> - it&#39;s a default value for bottom / right positions, you don&#39;t need to specify it manually</li><li><strong>top</strong> - if loader is above the items</li><li><strong>left</strong> - if loader is on the left of the items.</li></ul><p>If your scroll area is the whole document it&#39;s enough. But if your scroll area is a custom element you need to pass this element via prop <code>container</code>. It&#39;s required because we need to change scroll position and it&#39;s important to know where the scroll is:</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- Make container scrollable --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerRef<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span>auto</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    \n    <span class="token comment">&lt;!-- Pass `position` and `container` props --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEternalLoading</span> <span class="token attr-name">:load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>load<span class="token punctuation">&quot;</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEternalLoading</span><span class="token punctuation">&gt;</span></span>\n    \n    <span class="token comment">&lt;!-- Render items here --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Other props</span>\n    <span class="token comment">// ...</span>\n    <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// Other methods</span>\n    <span class="token comment">// ...</span>\n    <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> loaded <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// Load logic</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      load<span class="token punctuation">,</span>\n      containerRef<span class="token punctuation">,</span>\n      <span class="token comment">// Other data</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Top scroll example:</p>',9),k=a("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gavrashenko/j2ystkcf/19/embedded/result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"},null,-1),h=a("p",null,"Left scroll example:",-1),m=a("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gavrashenko/eLoqnbaz/29/embedded/result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"},null,-1);p.render=function(a,t,e,o,p,f){return n(),s("div",null,[l,c,u,i,r,d,k,h,m])};export default p;export{o as __pageData};
