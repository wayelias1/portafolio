import{s as o,_ as r}from"./index-5ec98b1d.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-ebc4253d.js"),["assets/Remover-ebc4253d.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-5ec98b1d.js","assets/index-3dc1d2a8.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
