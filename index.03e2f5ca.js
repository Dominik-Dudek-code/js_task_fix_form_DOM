var t;function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}((function(t){if(Array.isArray(t))return e(t)})(t=document.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){var e=t.getAttribute("id"),r=t.getAttribute("name").replace(/([A-Z])/g," $1").toLocaleLowerCase();r=r.charAt(0).toUpperCase()+r.slice(1),t.setAttribute("placeholder",r);var n=document.createElement("label");n.textContent=r,n.className="field-label",n.setAttribute("for",e),t.parentNode.insertBefore(n,t)});
//# sourceMappingURL=index.03e2f5ca.js.map
