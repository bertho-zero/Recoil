(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),c=(n(0),n(149)),a={title:"\uc8fc\uc694 \uac1c\ub150"},i={unversionedId:"introduction/core-concepts",id:"introduction/core-concepts",isDocsHomePage:!1,title:"\uc8fc\uc694 \uac1c\ub150",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/core-concepts.md",slug:"/introduction/core-concepts",permalink:"/ko/docs/introduction/core-concepts",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/introduction/core-concepts.md",version:"current",sidebar:"docs",previous:{title:"\ub3d9\uae30",permalink:"/ko/docs/introduction/motivation"},next:{title:"\uc124\uce58",permalink:"/ko/docs/introduction/installation"}},l=[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"Atoms",id:"atoms",children:[]},{value:"Selectors",id:"selectors",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),Object(c.b)("p",null,"Recoil\uc744 \uc0ac\uc6a9\ud558\uba74 ",Object(c.b)("em",{parentName:"p"},"atoms")," (\uacf5\uc720 \uc0c1\ud0dc)\uc5d0\uc11c ",Object(c.b)("em",{parentName:"p"},"selectors")," (\uc21c\uc218 \ud568\uc218)\ub97c \uac70\uccd0 React \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub0b4\ub824\uac00\ub294 data-flow graph\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4. Atoms\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uad6c\ub3c5\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc\uc758 \ub2e8\uc704\ub2e4. Selectors\ub294 atoms \uc0c1\ud0dc\uac12\uc744 \ub3d9\uae30 \ub610\ub294 \ube44\ub3d9\uae30 \ubc29\uc2dd\uc744 \ud1b5\ud574 \ubcc0\ud658\ud55c\ub2e4."),Object(c.b)("h2",{id:"atoms"},"Atoms"),Object(c.b)("p",null,"Atoms\ub294 \uc0c1\ud0dc\uc758 \ub2e8\uc704\uc774\uba70, \uc5c5\ub370\uc774\ud2b8\uc640 \uad6c\ub3c5\uc774 \uac00\ub2a5\ud558\ub2e4. atom\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 \uac01\uac01\uc758 \uad6c\ub3c5\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc0c8\ub85c\uc6b4 \uac12\uc744 \ubc18\uc601\ud558\uc5ec \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ub41c\ub2e4. atoms\ub294 \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc0dd\uc131\ub420 \uc218\ub3c4 \uc788\ub2e4. Atoms\ub294 React\uc758 \ub85c\uceec \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc \ub300\uc2e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \ub3d9\uc77c\ud55c atom\uc774 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc0c1\ud0dc\ub97c \uacf5\uc720\ud55c\ub2e4."),Object(c.b)("p",null,"Atoms\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"atom"),"\ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \uc0dd\uc131\ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const fontSizeState = atom({\n  key: 'fontSizeState',\n  default: 14,\n});\n")),Object(c.b)("p",null,"Atoms\ub294 \ub514\ubc84\uae45, \uc9c0\uc18d\uc131 \ubc0f \ubaa8\ub4e0 atoms\uc758 map\uc744 \ubcfc \uc218 \uc788\ub294 \ud2b9\uc815 \uace0\uae09 API\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uace0\uc720\ud55c \ud0a4\uac00 \ud544\uc694\ud558\ub2e4. \ub450\uac1c\uc758 atom\uc774 \uac19\uc740 \ud0a4\ub97c \uac16\ub294 \uac83\uc740 \uc624\ub958\uc774\uae30 \ub54c\ubb38\uc5d0 \ud0a4\uac12\uc740 \uc804\uc5ed\uc801\uc73c\ub85c \uace0\uc720\ud558\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.\nReact \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc\ucc98\ub7fc \uae30\ubcf8\uac12\ub3c4 \uac00\uc9c4\ub2e4."),Object(c.b)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c atom\uc744 \uc77d\uace0 \uc4f0\ub824\uba74 ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilState"),"\ub77c\ub294 \ud6c5\uc744 \uc0ac\uc6a9\ud55c\ub2e4. React\uc758 ",Object(c.b)("inlineCode",{parentName:"p"},"useState"),"\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \uc0c1\ud0dc\uac00 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc5d0 \uacf5\uc720\ub420 \uc218 \uc788\ub2e4\ub294 \ucc28\uc774\uac00 \uc788\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return (\n    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>\n      Click to Enlarge\n    </button>\n  );\n}\n")),Object(c.b)("p",null,"\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ubc84\ud2bc\uc758 \uae00\uaf34 \ud06c\uae30\uac00 1\ub9cc\ud07c \uc99d\uac00\ud558\uba70, fontSizeState atom\uc744 \uc0ac\uc6a9\ud558\ub294 \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uae00\uaf34 \ud06c\uae30\ub3c4 \uac19\uc774 \ubcc0\ud654\ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function Text() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return <p style={{fontSize}}>This text will increase in size too.</p>;\n}\n")),Object(c.b)("h2",{id:"selectors"},"Selectors"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Selector"),"\ub294 atoms\ub098 \ub2e4\ub978 selectors\ub97c \uc785\ub825\uc73c\ub85c \ubc1b\uc544\ub4e4\uc774\ub294 \uc21c\uc218 \ud568\uc218(pure function)\ub2e4. \uc0c1\uc704\uc758 atoms \ub610\ub294 selectors\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 \ud558\uc704\uc758 selector \ud568\uc218\ub3c4 \ub2e4\uc2dc \uc2e4\ud589\ub41c\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 selectors\ub97c atoms\ucc98\ub7fc \uad6c\ub3c5\ud560 \uc218 \uc788\uc73c\uba70 selectors\uac00 \ubcc0\uacbd\ub418\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\ub3c4 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub41c\ub2e4."),Object(c.b)("p",null,"Selectors\ub294 \uc0c1\ud0dc\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ub294 \ud30c\uc0dd \ub370\uc774\ud130\ub97c \uacc4\uc0b0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub41c\ub2e4. \ucd5c\uc18c\ud55c\uc758 \uc0c1\ud0dc \uc9d1\ud569\ub9cc atoms\uc5d0 \uc800\uc7a5\ud558\uace0 \ub2e4\ub978 \ubaa8\ub4e0 \ud30c\uc0dd\ub418\ub294 \ub370\uc774\ud130\ub294 selectors\uc5d0 \uba85\uc2dc\ud55c \ud568\uc218\ub97c \ud1b5\ud574 \ud6a8\uc728\uc801\uc73c\ub85c \uacc4\uc0b0\ud568\uc73c\ub85c\uc368 \uc4f8\ubaa8\uc5c6\ub294 \uc0c1\ud0dc\uc758 \ubcf4\uc874\uc744 \ubc29\uc9c0\ud55c\ub2e4."),Object(c.b)("p",null,"Selectors\ub294 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2e0\uc744 \ud544\uc694\ub85c\ud558\ub294\uc9c0, \ub610 \uc790\uc2e0\uc740 \uc5b4\ub5a4 \uc0c1\ud0dc\uc5d0 \uc758\uc874\ud558\ub294\uc9c0\ub97c \ucd94\uc801\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \ud568\uc218\uc801\uc778 \uc811\uadfc\ubc29\uc2dd\uc744 \ub9e4\uc6b0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e0\ub2e4."),Object(c.b)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uad00\uc810\uc5d0\uc11c \ubcf4\uba74 selectors\uc640 atoms\ub294 \ub3d9\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc9c0\ubbc0\ub85c \uc11c\ub85c \ub300\uccb4\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("p",null,"Selectors\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),"\ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \uc815\uc758\ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const fontSizeLabelState = selector({\n  key: 'fontSizeLabelState',\n  get: ({get}) => {\n    const fontSize = get(fontSizeState);\n    const unit = 'px';\n\n    return `${fontSize}${unit}`;\n  },\n});\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"get")," \uc18d\uc131\uc740 \uacc4\uc0b0\ub420 \ud568\uc218\ub2e4. \uc804\ub2ec\ub418\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"get")," \uc778\uc790\ub97c \ud1b5\ud574 atoms\uc640 \ub2e4\ub978 selectors\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4. \ub2e4\ub978 atoms\ub098 selectors\uc5d0 \uc811\uadfc\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \uc885\uc18d \uad00\uacc4\uac00 \uc0dd\uc131\ub418\ubbc0\ub85c, \ucc38\uc870\ud588\ub358 \ub2e4\ub978 atoms\ub098 selectors\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 \uc774 \ud568\uc218\ub3c4 \ub2e4\uc2dc \uc2e4\ud589\ub41c\ub2e4."),Object(c.b)("p",null,"\uc774 ",Object(c.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," \uc608\uc2dc\uc5d0\uc11c selector\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"fontSizeState"),"\ub77c\ub294 \ud558\ub098\uc758 atom\uc5d0 \uc758\uc874\uc131\uc744 \uac16\ub294\ub2e4. \uac1c\ub150\uc801\uc73c\ub85c ",Object(c.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," selector\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"fontSizeState"),"\ub97c \uc785\ub825\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0 \ud615\uc2dd\ud654\ub41c \uae00\uaf34 \ud06c\uae30 \ub808\uc774\ube14\uc744 \ucd9c\ub825\uc73c\ub85c \ubc18\ud658\ud558\ub294 \uc21c\uc218 \ud568\uc218\ucc98\ub7fc \ub3d9\uc791\ud55c\ub2e4."),Object(c.b)("p",null,"Selectors\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),"\ub97c \uc0ac\uc6a9\ud574 \uc77d\uc744 \uc218 \uc788\ub2e4. ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),"\ub294 \ud558\ub098\uc758 atom\uc774\ub098 selector\ub97c \uc778\uc790\ub85c \ubc1b\uc544 \ub300\uc751\ud558\ub294 \uac12\uc744 \ubc18\ud658\ud55c\ub2e4. ",Object(c.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," selector\ub294 writable\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilState()"),"\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4. (writable\ud55c selectors\uc5d0 \ub300\ud55c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub294 ",Object(c.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector API reference"),"\uc5d0 \uc790\uc138\ud788 \uae30\uc220\ub418\uc5b4 \uc788\ub2e4.)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  const fontSizeLabel = useRecoilValue(fontSizeLabelState);\n\n  return (\n    <>\n      <div>Current font size: ${fontSizeLabel}</div>\n\n      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>\n        Click to Enlarge\n      </button>\n    </>\n  );\n}\n")),Object(c.b)("p",null,"\ubc84\ud2bc\ub97c \ud074\ub9ad\ud558\uba74 \ubc84\ud2bc\uc758 \uae00\uaf34 \ud06c\uae30\uac00 \uc99d\uac00\ud558\ub294 \ub3d9\uc2dc\uc5d0 \ud604\uc7ac \uae00\uaf34 \ud06c\uae30\ub97c \ubc18\uc601\ud558\ub3c4\ub85d \uae00\uaf34 \ud06c\uae30 \ub808\uc774\ube14\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub450 \uac00\uc9c0 \uc791\uc5c5\uc774 \uc218\ud589\ub41c\ub2e4."))}p.isMDXComponent=!0}}]);