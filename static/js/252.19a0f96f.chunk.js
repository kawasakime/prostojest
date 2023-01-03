"use strict";(self.webpackChunkstroy=self.webpackChunkstroy||[]).push([[252],{7252:function(a,A,e){e.r(A),e.d(A,{default:function(){return p}});var i=e(9439),m=e(2791),n=e(3433),t=e(4328),r=[{hex:"#8D1D2D",name:"RAL-3005"},{hex:"#EBDEBC",name:"RAL-1015"},{hex:"#F3E03A",name:"RAL-1018"},{hex:"#3A2420",name:"RAL-8017"},{hex:"#16478A",name:"RAL-5005"},{hex:"#F3F8F4",name:"RAL-9003"},{hex:"#276232",name:"RAL-6002"},{hex:"#0F4336",name:"RAL-6005"},{hex:"#9FA0A2",name:"RAL-7004"},{hex:"#474A51",name:"RAL-7024"}],s=e(184),o=m.memo((function(a){var A=a.position,e=a.setColor;return(0,s.jsx)("div",{className:"palette",style:{left:A},children:r.map((function(a,A){return(0,s.jsx)("div",{className:"color",style:{background:a.hex},onClick:function(){e(a)}},A)}))})})),l=e(9015),c=e(3520),g=e(5892),R=e(1413),h=e(6590),u=e(6145),E=m.memo((function(a){var A="./assets/models/".concat(a.model),e=(0,h.D)(u.E,A),i=e.nodes,n=e.materials,t=m.useMemo((function(){return i}),[i]),r=m.useMemo((function(){return n}),[n]);return(0,s.jsx)("group",(0,R.Z)((0,R.Z)({},a),{},{dispose:null,children:(0,s.jsxs)("group",{dispose:null,children:[(0,s.jsx)("mesh",{geometry:t["w1ll-k"].geometry,material:r.k,children:(0,s.jsx)("meshStandardMaterial",{color:a.color})}),(0,s.jsx)("mesh",{geometry:t["w1ll-b"].geometry,material:r.b,children:(0,s.jsx)("meshStandardMaterial",{color:"#fff"})})]})}))})),w=m.forwardRef((function(a,A){var e=a.item,i=a.currentColor,n=a.changeOnLoaded;return(0,s.jsx)(m.Suspense,{fallback:(0,s.jsx)("div",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026"}),children:(0,s.jsxs)(g.Xz,{resize:{scroll:!1},style:{height:"140px"},camera:{fov:10,near:.1,far:5e3,position:e.cameraPosition,rotation:e.cameraRotation},children:[(0,s.jsx)("ambientLight",{intensity:.75}),(0,s.jsx)("rectAreaLight",{width:400,height:400,intensity:.75,color:"white",position:[-165,100,0],rotation:[0,180,0],castShadow:!0}),(0,s.jsx)(E,{model:e.model,color:i.hex,scale:e.scale?e.scale:[.1,.1,.1],rotation:e.rotation,changeOnLoaded:n}),(0,s.jsx)(c.z,{ref:A})]})})})),d=m.memo(w),x=function(a){var A=a.item,e=a.index,c=a.onAnimation,g=a.setOnAnimation,R=m.useState(5),h=(0,i.Z)(R,2),u=h[0],E=h[1],w=m.useState(!1),x=(0,i.Z)(w,2),j=x[0],C=x[1],p=m.useState(r[0]),B=(0,i.Z)(p,2),f=B[0],N=B[1],U=m.useState("0.4mm"),H=(0,i.Z)(U,2),O=H[0],k=H[1],Z=m.useState(!1),z=(0,i.Z)(Z,2),V=(z[0],z[1]),Y=m.useState(!1),v=(0,i.Z)(Y,2),F=v[0],I=v[1],P=m.createRef(),S=m.useContext(t.A).setCart;return(0,s.jsxs)("article",{className:"catalog__item",children:[(0,s.jsx)("div",{className:"catalog__item-img",children:(0,s.jsx)(d,{setOnLoaded:function(){V(!0)},item:A,currentColor:f,ref:P})}),(0,s.jsx)("p",{className:"name",children:A.name}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("p",{children:"2 \u043c.\u043f."}),(0,s.jsx)(l.Z,{value:O,setValue:k}),(0,s.jsxs)("p",{className:"price",children:[A.prices[O]," \u20bd"]})]}),j?(0,s.jsxs)("div",{className:"razmetka",children:["\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u043a\u0430 ",A.razmetka]}):(0,s.jsx)("span",{className:"color-name",children:f.name}),(0,s.jsx)("button",{className:F?"disable":void 0,onClick:function(){!function(a){I(!0),S((function(A){return[].concat((0,n.Z)(A),[a])})),setTimeout((function(){I(!1)}),2e3)}({name:A.name,selected:O,prices:A.prices,count:1})},children:F?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),(0,s.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"change-color",onClick:function(){E((function(a){return 5===a?-35:5}))}}),(0,s.jsx)("img",{src:j?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeoSURBVHgB5VptiBRlHP/PzM7u7e3e3Xq7p95xYmhaRF6ooNaHsg8ZFRck2IcgfKEiKkWQtKQPIVdCcERg3+qDlBoKpUWKfYgQIiohiEhL0DO811XvbXfnZXfm6f9/9vZuvZ3deWZfblf8wbC7z87zzPzm/3/+ryMBY9Lz54ffsxnbLQF0wAwkWXri26e7LkAd8NzZwV0ywPsgs05gyjkFYM/pZzoHoAqQe88P9jHGDuWTrSd6z93YIUvwOUiwDJjkA7B7LbB/3/zNtQhUATIuugMaCQy2OozGQqqyEaoA1BzoggYCk+RWp3HZJy2GKkCGBoMEtYUPGgyHVupSxoG2wUD+DiqH1HtukDn9MX5D+1NP2BOwwPjoSeWRFRGpbf74ZxcTf33/b2ZcUgNM9qlCa+FzG7y4d/VL+UNFJWzb0EMWZKFhHT8FAWO4YDwZfuxhFrofOdA9id0XA+nv+WMNp9LS6CjIEwOF4yvXAoSgYjSc0ao17jnCwiqtBiRoXuSHasDULNAmM1APCBNuWRyAQKg6W745oiLhBNQDnhno02lIazYEwj7wNytgJi0wkmLSwoQEwrHqaEm5KIMwquMUhgY+OUtYtyBxOy00V1buQsJNYYXiWvA3VWbvQu3OwYOiOAeXpFGhdj/IqgrFAg99OgNWurSP9k64VcUDKkYr2gQn+PzODzLYokBLBxEOgKI6E1ZRCBNDBpSCZ8JGygIrM/MU8SM1IabO85Gact73ts2KXNfmll3GBxIIyUhO4dI00OL7SONwe0mSe+rhmbCGBLWp8lyKGpiT3uSQ7nhO2rAdx7XJNEyqOkqYocdQOGEjlYHJYQOCbVkDKoKah5b01Gm/0iEr1U3+SP2JbECQLJ8DNYSCqrZoWXBWsrbFIK3bWEarTlLiDyr88IKaEl7U3cTJWmkbEnGz6L71CgOtsYYqnUubaQ+rwTqrNEVTtM9sNHC3/tNc3YUXZHCtiTwbQGodESRcs+QhHM26jumbZlXJVoqaSJj8oaJiQRRdjImWVFELjVW9HkJNCMu+rOJQ7NyxwjlrH758lyQPIkhjfJ1Bfyo7SFaWa12XLI2aECZDFb+WKhgnP7xkVRXqNBXgnqp4sLPrPvAs4UhXEx5zv8k9uIWaEkp28X1BVPG559v5YJj75/jVFLAFsF9EFi900DPh/CiJwkYKLHSXbUmBQY5sbj7NJUtOho1Zc2vaigy2r3BBVoEusrPrD6HLOMjvBTyCgnWSKJV8whQjR/38EAGFlqNXkvw7SdgJA5vb4anojwXj/1zqxGIYaYu3UDIr2SxZQsPt4RPjz8JIOnbH2BfxLTBkxtDo+VAzxG/5zejxh0iN88c8S7itMwCtSwOQSz2TWN5JYDRVCgpWPGPLm7NWenVpKz1tN0Pf6GtwpPtD/nvIjMKRkRdoD4CkipeH3oidgJ3tZwrGPUuY9h750lyynTYsnrSXOizshNmZbJ5Lc3O+mIwWc0j4f031wG+pNfz7keGtYNpU1vELS7cYWYJnCU+NGaAnrNnflmm7ziHS8WsaKJi/xpYH+dgYWWf018UsdH98O+zrOAo/JB/Hp2yCaAOtFFmCZ8IUVIiQLJhHljhvntsaV41u2Du4H6ujKlp5sdt8tfkYbAudKXlOQwceaZaTqns4+jI7CtukU67n1Y0wlXurhZ2B47CNuZMl1I3wou4g389OqaMX8D0b+Vr4/AUlTFHW+KDOS7sWWm0qyxBpX6A80m4GqgCWscCE7Wx3YHLEgFvXNV6Spdy5HaXtNW30TNbGeF8frZ9KU8Xj9vUUr2JSTB2KCr63AeVJFrRhUrHyCVMJlupWVG9Wg+UtY6PEc1GaaCtWhOxoOpp3EZJsPKteUIYfDrb6eDXSjyTzS6O8FIs3nyrR6KZAqSV2Z09JmlmC6mAUetpW8VxRhOxPiQ1wamILfNrdl5UsqnF+dOOZMHXx8m+ZiFKUSWrZ1tmEnyavVDoh14UoBh45Ws7/vR496Ur2gr4B3h3eAz1NV1Cy2PPSb8L8UM57fziRwXoVm21oUao4jUX2MKaI1N2j/i9JKTleusmWuHXn/5ZpFa1kikj2F+lROGztgwxDDWPp2T07H94JI0Fe4ZACnPAcARObiQxaOwKcNHX6inUCCdNxA0QgQvbnzCbo9x+YUQ5s1tO+LRKke1fpkMJVL78TmEMSpRZsye7x1iV+/vJKPvLbmc0R90vv8n8J2yMuZK1N0Ke/Daqf1nNv5fCrkiToXY18icxP22aMHLY1VH4UgzZtccJu57UtbYJS4LExO13ynD9gLfSr74CqisvNR0aHgoDZJncRJG+bjjF8Zl4/N40Nc9rnleCV4DHXROCCvhEO2/tn1Zg0WJsQkPDUmOlKlmBqNpg3dIHzLDzPgnJBe/bFZhcDleyBA0O70UCR4fP2BoKvUmlUE6J+llxPhpXXQ/CBzUbQmiyFOkPEzw6YXXASg4o16GcllC63xg5YpV4puoa0vv/yHqwNfwJ1RFmJgDYE5VTwuRla9/GlHQrIu9CPtsMC463YVw9sbz8jrp88XBybcxseUddWXq79ITyhAsnmULcXxD2TnZVsZY2ouuTDZUk2L8WrBAuu0uVJdrRiyebwP4CEOIB5VKx9AAAAAElFTkSuQmCC",style:{animation:c?"drawing 2.5s ease-in infinite":"none"},alt:"",className:"drawing",onClick:function(){C((function(a){return!a})),g(!1)}}),(0,s.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"reset",onClick:function(){return P.current.reset()}}),(0,s.jsx)(o,{position:u,setColor:N}),(0,s.jsx)("div",{className:"bg"})]},e)},j=m.memo(x),C=[{model:"planksneg.gltf",drawing:"item-5.png",name:"\u0421\u043d\u0435\u0433\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044c",rotation:[-Math.PI/2,Math.PI,0],scale:[.11,.11,.11],cameraPosition:[392.5175344695613,155.97656844456884,-656.9636939970045],cameraRotation:[-2.9084882250855135,.5265656732221096,3.022834428596405],razmetka:.23,prices:{"0.4mm":382,"0.45mm":414,"0.5mm":442,"0.7mm":575}},{model:"plankygolnar.gltf",drawing:"item-6.png",name:"\u0423\u0433\u043e\u043b\u043e\u043a \u043d\u0430\u0440\u0443\u0436\u043d\u044b\u0439",rotation:[-Math.PI/2,Math.PI,0],cameraPosition:[392.5175344695613,155.97656844456884,-656.9636939970045],cameraRotation:[-2.9084882250855135,.5265656732221096,3.022834428596405],razmetka:.12,scale:[.12,.12,.12],prices:{"0.4mm":199,"0.45mm":216,"0.5mm":230,"0.7mm":300}},{model:"plankygolvnytr.gltf",drawing:"item-7.png",name:"\u0423\u0433\u043e\u043b\u043e\u043a \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439",rotation:[Math.PI/2,Math.PI,0],scale:[.12,.12,.12],cameraPosition:[449.90215854748647,155.34909635950973,-619.2371968757851],cameraRotation:[-2.8957937230869497,.6138767118585737,2.998073908650509],razmetka:.12,prices:{"0.4mm":199,"0.45mm":216,"0.5mm":230,"0.7mm":300}},{model:"planprimnizh.gltf",drawing:"item-8.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u043f\u0440\u0438\u043c\u044b\u043a\u0430\u043d\u0438\u044f \u043d\u0438\u0436\u043d\u044f\u044f",rotation:[Math.PI,0,0],cameraPosition:[417.31729518741196,190.15378360638573,-632.208678932547],cameraRotation:[-2.8494232346463604,.5637031296789827,2.982244078351434],razmetka:.415,prices:{"0.4mm":689,"0.45mm":747,"0.5mm":797,"0.7mm":1038}},{model:"planprimverx.gltf",drawing:"item-9.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u043f\u0440\u0438\u043c\u044b\u043a\u0430\u043d\u0438\u044f \u0432\u0435\u0440\u0445\u043d\u044f\u044f",rotation:[0,0,Math.PI],cameraPosition:[-305.0909089483637,86.11205224183927,713.7956652542398],cameraRotation:[-.12005943837250582,-.40131465271304784,-.047090488789580796],razmetka:.415,prices:{"0.4mm":689,"0.45mm":747,"0.5mm":797,"0.7mm":1038}},{model:"planvetrdoski.gltf",drawing:"item-10.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u0432\u0435\u0442\u0440\u043e\u0432\u0430\u044f",rotation:[Math.PI,0,0],scale:[.12,.12,.12],cameraPosition:[-305.0909089483637,86.11205224183927,713.7956652542398],cameraRotation:[-.12005943837250582,-.40131465271304784,-.047090488789580796],razmetka:.275,prices:{"0.4mm":457,"0.45mm":495,"0.5mm":529,"0.7mm":688}},{model:"plankarniz.gltf",drawing:"item-1.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u043a\u0430\u0440\u043d\u0438\u0437\u043d\u0430\u044f",rotation:[-Math.PI,0,0],cameraPosition:[-367.2249469460739,86.69175720008684,683.8350514371298],cameraRotation:[-.1261002432041784,-.4894985286953317,-.05953606919934107],razmetka:.17,prices:{"0.4mm":282,"0.45mm":306,"0.5mm":326,"0.7mm":425}},{model:"plankendvnesh.gltf",drawing:"item-2.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u0435\u043d\u0434\u043e\u0432\u044b \u043d\u0438\u0436\u043d\u044f\u044f",razmetka:.62,rotation:[Math.PI,0,0],cameraPosition:[-240.81781600067268,51.83734581199078,741.1610277637645],cameraRotation:[-.06982702373142462,-.3134429070745399,-.021561877137544514],scale:[.14,.14,.14],prices:{"0.4mm":1029,"0.45mm":1116,"0.5mm":1190,"0.7mm":1550}},{model:"plankendverx.gltf",drawing:"item-3.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u0435\u043d\u0434\u043e\u0432\u044b \u0432\u0435\u0440\u0445\u043d\u044f\u044f",rotation:[Math.PI,0,0],scale:[.13,.13,.13],cameraPosition:[-362.6477307533651,155.97656844456918,673.912407865958],cameraRotation:[-.22744445432547897,-.48286988025066024,-.10705632877142561],razmetka:.31,prices:{"0.4mm":515,"0.45mm":558,"0.5mm":595,"0.7mm":775}},{model:"plankonkplosk190.gltf",drawing:"item-4.png",name:"\u041f\u043b\u0430\u043d\u043a\u0430 \u043a\u043e\u043d\u044c\u043a\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0433\u043e",rotation:[Math.PI,0,0],scale:[.12,.12,.12],cameraPosition:[-370.0174025620202,16.821860118769848,687.6075529132917],cameraRotation:[-.024459454046032524,-.49355401943412447,-.011589672556499361],razmetka:.39,prices:{"0.4mm":647,"0.45mm":702,"0.5mm":749,"0.7mm":975}}],p=function(){var a=m.useState(!0),A=(0,i.Z)(a,2),e=A[0],n=A[1];return(0,s.jsx)("section",{id:"catalog",children:(0,s.jsxs)("div",{className:"wrapper",children:[(0,s.jsx)("h1",{children:"\u041a\u0410\u0422\u0410\u041b\u041e\u0413"}),(0,s.jsx)("span",{children:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044c"}),(0,s.jsx)("div",{className:"catalog",children:C.map((function(a,A){return(0,s.jsx)(j,{onAnimation:e,setOnAnimation:n,item:a,index:A},A)}))})]})})}}}]);
//# sourceMappingURL=252.19a0f96f.chunk.js.map