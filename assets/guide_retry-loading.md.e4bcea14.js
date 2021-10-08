import{o as a,c as n,d as t}from"./app.451b6f6d.js";const s='{"title":"Retry loading","description":"","frontmatter":{},"relativePath":"guide/retry-loading.md","lastUpdated":1633668124525}',e={},o=t('<h1 id="retry-loading"><a class="header-anchor" href="#retry-loading" aria-hidden="true">#</a> Retry loading</h1><p>Normally if you reached states <code>no-more</code>, <code>no-results</code> or <code>error</code> you have the only choice to restart <code>vue-eternal-loading</code> - use <code>isInitial</code> prop. It will reset <code>isFirstLoad</code> state also, which might be not what you want. If you caught an error, or reached the end and want to retry loading - you can use <code>retry</code> method which is available in <code>no-more</code>, <code>no-results</code> and <code>error</code> slots. There is an example of how you can implement <code>retry</code> button if you caught an error:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueEternalLoading</span> <span class="token attr-name">:load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>load<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ retry }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        Oops. We&#39;ve got an error.\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>retry<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Try again<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueEternalLoading</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',3);e.render=function(t,s,e,p,c,l){return a(),n("div",null,[o])};export default e;export{s as __pageData};
