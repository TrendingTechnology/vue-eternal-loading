import{o as a,c as s,d as n}from"./app.420d0e57.js";const o='{"title":"Types","description":"","frontmatter":{},"headers":[{"level":2,"title":"LoadAction","slug":"loadaction"},{"level":2,"title":"LoadPayload","slug":"loadpayload"},{"level":2,"title":"Position","slug":"position"}],"relativePath":"api/types.md","lastUpdated":1627627617737}',p={},t=n('<h1 id="types"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h1><h2 id="loadaction"><a class="header-anchor" href="#loadaction" aria-hidden="true">#</a> LoadAction</h2><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">LoadAction</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">loaded</span><span class="token punctuation">(</span>count<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> pageSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function">noMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function">noResults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>Describes possible actions in <code>loaded</code> prop callback.</p><h2 id="loadpayload"><a class="header-anchor" href="#loadpayload" aria-hidden="true">#</a> LoadPayload</h2><div class="language-js"><pre><code>type LoadPayload <span class="token operator">=</span> <span class="token punctuation">{</span>\n  isFirstLoad<span class="token operator">:</span> boolean<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>Describes payload what we get in <code>loaded</code> prop callback.</p><h2 id="position"><a class="header-anchor" href="#position" aria-hidden="true">#</a> Position</h2><div class="language-js"><pre><code>type Position <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><p>Describes possible loader positions.</p>',10);p.render=function(n,o,p,e,c,l){return a(),s("div",null,[t])};export default p;export{o as __pageData};
