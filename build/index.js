(()=>{var e,t={603:(e,t,r)=>{"use strict";const o=window.wp.blocks,l=window.React,a=window.wp.i18n,n=window.wp.element,c=window.wp.apiFetch;var u=r.n(c);const s=window.wp.url,i=window.wp.blockEditor,p=window.wp.components;r(184);const m=JSON.parse('{"u2":"create-block/custom-product-block"}');(0,o.registerBlockType)(m.u2,{edit:function({attributes:e,setAttributes:t}){const{products:r,orderBy:o,totalItems:c,itemsPerRow:m,toggleField:d}=e;return(0,n.useEffect)((()=>{(async()=>{try{const e={orderby:o,per_page:c,order:"asc"};"price-desc"!==e.orderby||(e.order="desc"),"price-desc"===e.orderby&&(e.orderby="price");const r=await u()({path:(0,s.addQueryArgs)("/wc/v3/products",e)});t({products:r})}catch(e){console.log("Error fetching products",e)}})()}),[o,c,m]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{...(0,i.useBlockProps)()},(0,l.createElement)(i.InspectorControls,null,(0,l.createElement)(p.PanelBody,{title:(0,a.__)("Settings")},(0,l.createElement)(p.RangeControl,{label:"Columns",value:m,onChange:function(e){t({itemsPerRow:e})},min:1,max:4}),(0,l.createElement)(p.SelectControl,{label:"Number of Products",value:c,options:[{value:"5",label:"5"},{value:"10",label:"10"},{value:"20",label:"20"},{value:"50",label:"50"}],onChange:e=>t({totalItems:e})}),(0,l.createElement)("label",null,(0,a.__)("Select Order","custom-product-block")),(0,l.createElement)(p.SelectControl,{className:"product-filter-sort",value:o,onChange:e=>t({orderBy:e}),options:[{value:"menu_order",label:"Default sorting (Menu Order)"},{value:"date",label:"Latest"},{value:"rating",label:"Rating"},{value:"popularity",label:"Popularity"},{value:"price",label:"Price: low to high"},{value:"price-desc",label:"Price: high to low"}]}),(0,l.createElement)(p.ToggleControl,{label:"Toggle Sorting",checked:d,onChange:function(e){t({toggleField:e})}}))),d&&(0,l.createElement)("div",{className:"products-header"},(0,l.createElement)(i.RichText,{tagName:"h2",value:e.content,onChange:e=>t({content:e}),placeholder:(0,a.__)("Enter content","custom-product-block")}),(0,l.createElement)("div",{className:"product-filter-area"},(0,l.createElement)("select",{className:"product-filter-sort",value:o,onChange:e=>t({orderBy:e.target.value})},(0,l.createElement)("option",null,"Select Sort Order"),(0,l.createElement)("option",{value:"menu_order"},(0,a.__)("Default sorting (Menu Order)","custom-product-block")),(0,l.createElement)("option",{value:"date"},(0,a.__)("Latest","custom-product-block")),(0,l.createElement)("option",{value:"rating"},(0,a.__)("Rating","custom-product-block")),(0,l.createElement)("option",{value:"popularity"},(0,a.__)("Popularity","custom-product-block")),(0,l.createElement)("option",{value:"price"},(0,a.__)("Price: low to high","custom-product-block")),(0,l.createElement)("option",{value:"price-desc"},(0,a.__)("Price: high to low","custom-product-block"))),(0,l.createElement)("select",{value:m,onChange:e=>t({itemsPerRow:parseInt(e.target.value,10)})},(0,l.createElement)("option",null,(0,a.__)("Items Per Row","custom-product-block")),(0,l.createElement)("option",{value:"1"},(0,a.__)("One Item","custom-product-block")),(0,l.createElement)("option",{value:"2"},(0,a.__)("Two Items","custom-product-block")),(0,l.createElement)("option",{value:"3"},(0,a.__)("Three Items","custom-product-block")),(0,l.createElement)("option",{value:"4"},(0,a.__)("Four Items","custom-product-block"))),(0,l.createElement)("select",{value:c,onChange:e=>t({totalItems:parseInt(e.target.value,10)})},(0,l.createElement)("option",null,(0,a.__)("Number of products","custom-product-block")),(0,l.createElement)("option",{value:"5"},"5"),(0,l.createElement)("option",{value:"10"},"10"),(0,l.createElement)("option",{value:"20"},"20"),(0,l.createElement)("option",{value:"50"},"50")))),(0,l.createElement)("ul",{className:`products grid grid-${m}`},r.map((e=>(0,l.createElement)("li",{key:e.id},(0,l.createElement)("a",{href:e.permalink},(0,l.createElement)("img",{className:"full",src:e.images[0].src}),(0,l.createElement)("div",{className:"product-content"},(0,l.createElement)("h3",null,e.name),(0,l.createElement)("div",{className:"",dangerouslySetInnerHTML:{__html:e.short_description}}),(0,l.createElement)("div",null,e.on_sale&&(0,l.createElement)("span",{className:"on-sale"},"On Sale"),"variable"===e.type?(0,l.createElement)("div",{dangerouslySetInnerHTML:{__html:e.price_html}}):e.on_sale?(0,l.createElement)("span",null,"$",(0,l.createElement)("del",null,e.regular_price)," -"," ",e.sale_price):(0,l.createElement)("span",null,"$",e.regular_price)),(0,l.createElement)("div",null,e.categories[0].name),(0,l.createElement)("a",{className:"components-button editor-post-publish-button editor-post-publish-button__button is-primary",href:`/shop?add-to-cart=${e.id}`},(0,a.__)("Add to cart","custom-product-block"))))))))))},save:function(){return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h1",null,"Hello world"),(0,l.createElement)("p",null,"Hello there"))}})},184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var n=l.apply(null,r);n&&e.push(n)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)o.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,l,a)=>{if(!r){var n=1/0;for(i=0;i<e.length;i++){for(var[r,l,a]=e[i],c=!0,u=0;u<r.length;u++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(c=!1,a<n&&(n=a));if(c){e.splice(i--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,l,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[n,c,u]=r,s=0;if(n.some((t=>0!==e[t]))){for(l in c)o.o(c,l)&&(o.m[l]=c[l]);if(u)var i=u(o)}for(t&&t(r);s<n.length;s++)a=n[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(i)},r=globalThis.webpackChunkfetch_json_data=globalThis.webpackChunkfetch_json_data||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[431],(()=>o(603)));l=o.O(l)})();