import{_ as n}from"./index-399b0785.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-6165f375.js"),["assets/PolygonDrawer-6165f375.js","assets/PolygonDrawerBase-16008b36.js","assets/index-399b0785.js","assets/index-3f0b3583.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-3b73501d.js"),["assets/TriangleDrawer-3b73501d.js","assets/PolygonDrawerBase-16008b36.js","assets/index-399b0785.js","assets/index-3f0b3583.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
