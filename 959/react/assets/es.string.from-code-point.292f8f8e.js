var s=Object.defineProperty;var n=(a,t)=>s(a,"name",{value:t,configurable:!0});import{a8 as d,a9 as l,aa as f,ab as m}from"./iframe.e2d1fe79.js";var u=d,C=l,x=f,h=m,c=C.RangeError,i=String.fromCharCode,v=String.fromCodePoint,b=x([].join),E=!!v&&v.length!=1;u({target:"String",stat:!0,arity:1,forced:E},{fromCodePoint:n(function(t){for(var e=[],g=arguments.length,o=0,r;g>o;){if(r=+arguments[o++],h(r,1114111)!==r)throw c(r+" is not a valid code point");e[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return b(e,"")},"fromCodePoint")});
