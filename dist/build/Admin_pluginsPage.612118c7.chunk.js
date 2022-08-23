"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[3677],{14928:(x,f,l)=>{l.r(f),l.d(f,{default:()=>F});var e=l(67294),c=l(68547),v=l(15482),h=l(97132),P=l(87751),T=l(84686),d=l(78862),y=l(62031),m=l(49425),n=l(41798),M=l(23724),L=l(23998),C=(t,s,o)=>new Promise((p,u)=>{var r=a=>{try{i(o.next(a))}catch(g){u(g)}},E=a=>{try{i(o.throw(a))}catch(g){u(g)}},i=a=>a.done?p(a.value):Promise.resolve(a.value).then(r,E);i((o=o.apply(t,s)).next())});const b=()=>C(void 0,null,function*(){const{data:t}=yield L.be.get("/admin/plugins");return t}),I=t=>{const s=(0,c.useNotification)();return(0,M.useQuery)("list-enabled-plugins",()=>b(),{onSuccess:()=>{t&&t()},onError:()=>{s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},N=()=>{const{formatMessage:t}=(0,h.useIntl)(),{notifyStatus:s}=(0,T.useNotifyAT)();(0,c.useFocusWhenNavigate)();const o=t({id:"global.plugins",defaultMessage:"Plugins"}),p=()=>{s(t({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:o}))},{status:u,data:r}=I(p);return u!=="success"&&u!=="error"?e.createElement(d.Layout,null,e.createElement(y.Main,{"aria-busy":!0},e.createElement(c.LoadingIndicatorPage,null))):e.createElement(d.Layout,null,e.createElement(y.Main,null,e.createElement(d.HeaderLayout,{title:o,subtitle:t({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(d.ContentLayout,null,e.createElement(n.Table,{colCount:2,rowCount:(r==null?void 0:r.plugins.length)+1},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},t({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},t({id:"global.description",defaultMessage:"description"}))))),e.createElement(n.Tbody,null,r.plugins.map(({name:i,displayName:a,description:g})=>e.createElement(n.Tr,{key:i},e.createElement(n.Td,null,e.createElement(m.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},t({id:`global.plugins.${i}`,defaultMessage:a}))),e.createElement(n.Td,null,e.createElement(m.Typography,{textColor:"neutral800"},t({id:`global.plugins.${i}.description`,defaultMessage:g}))))))))))},F=()=>{const{formatMessage:t}=(0,h.useIntl)(),s=t({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(c.CheckPagePermissions,{permissions:P.Z.marketplace.main},e.createElement(v.Helmet,{title:s}),e.createElement(N,null))}}}]);
