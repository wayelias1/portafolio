import{_ as e}from"./index-8a86992f.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-87881f92.js"),["assets/ColorUpdater-87881f92.js","assets/index-8a86992f.js","assets/index-a97dd64e.css"]);return new a(t)},o)}export{i as loadColorUpdater};