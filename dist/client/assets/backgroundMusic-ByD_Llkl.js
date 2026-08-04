let o=null;function c(u){o||(o=new Audio(u),o.loop=!0),o.src=u,o.play().catch(console.error)}function n(){o&&(o.pause(),o.currentTime=0)}export{c as a,n as s};
