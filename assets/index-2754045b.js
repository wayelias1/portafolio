import{s as o,_ as r}from"./index-0f22674b.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-99131c98.js"),["assets/Remover-99131c98.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-0f22674b.js","assets/index-28299b5b.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
