import{a8 as n}from"./index-b39dd122.js";class s extends n{async show(e){if(typeof document<"u"){let a=2e3;e.duration&&(a=e.duration==="long"?3500:2e3);const t=document.createElement("pwa-toast");t.duration=a,t.message=e.text,document.body.appendChild(t)}}}export{s as ToastWeb};
