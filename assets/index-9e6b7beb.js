import{_ as i}from"./index-0f22674b.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-b8729ab2.js"),["assets/LifeUpdater-b8729ab2.js","assets/ValueWithRandom-e8c233b1.js","assets/index-0f22674b.js","assets/index-28299b5b.css"]);return new r(e)},a)}export{d as loadLifeUpdater};
