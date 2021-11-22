import "./echis.css";
export function AppWrapper() {
  var i = document.createElement("div");
  i.setAttribute("id", "app-holder");
  i.style.backgroundColor = "var(--background-light)";
  i.style.overflow = "hidden";
  i.style.position = "fixed";
  i.style.left = "0";
  i.style.top = "0";
  i.style.width = "100vw";
  i.style.height = "100vh";
  document.body.appendChild(i);
  return i;
}
export function Menu(parent) {
  var i = document.createElement("div");
  i.style.backgroundColor = "var(--background-light)";
  i.style.overflow = "auto";
  i.style.padding = "3.5rem 1rem 0.5rem";
  i.style.position = "absolute";
  i.style.left = "0";
  i.style.top = "0";
  i.style.width = "100%";
  i.style.height = "100%";
  parent.appendChild(i);
  return i;
}
export function Button(parent, text = "") {
  var i = document.createElement("button");
  i.innerText = text;
  parent.appendChild(i);
  return i;
}
export function Checkbox(parent, text = "") {
  var i = document.createElement("input");
  i.setAttribute("type", "checkbox");
  var j = document.createElement("label");
  j.for = i.getAttribute("id");
  j.innerText = text;
  parent.appendChild(i);
  return {
    label: j,
    obj: i
  };
}
export function Header(parent, text = "", color = "#00c0ff") {
  var i = document.createElement("div");
  i.style.backgroundColor = color;
  i.style.boxShadow = "0 2px 4px 0 var(--shadow)";
  i.style.zIndex = 1;
  i.style.position = "absolute";
  i.style.left = "0";
  i.style.top = "0";
  i.style.width = "100%";
  i.style.height = "3rem";
  var j = document.createElement("button");
  j.style.background = "url(\"modules/hamburger.png\") center no-repeat";
  j.style.backgroundColor = color;
  j.style.border = "none";
  j.style.borderRadius = "0.25rem";
  j.style.float = "var(--float-start)";
  j.style.margin = "0.5rem";
  j.style.width = "2rem";
  j.style.height = "2rem";
  j.onmouseleave = (event) => {
    j.style.filter = null;
  };
  j.onmouseover = (event) => {
    j.style.filter = "brightness(75%)";
  };
  j.onmousedown = (event) => {
    j.style.filter = "brightness(50%)";
  };
  j.onmouseup = (event) => {
    j.style.filter = "brightness(75%)";
  };
  var k = document.createElement("p");
  k.innerText = text;
  k.style.float = "var(--float-start)";
  k.style.fontWeight = "bold";
  k.style.margin = "0.75rem 0";
  k.style.textTransform = "uppercase";
  k.style.userSelect = "none";
  i.appendChild(j);
  i.appendChild(k);
  parent.appendChild(i);
  return {
    label: k,
    obj: i,
    button: j
  };
}
export function HeaderButton(parent, icon, color = parent.style.backgroundColor) {
  var i = document.createElement("button");
  i.style.background = "url(\"modules/hamburger.png\") center no-repeat";
  i.style.backgroundColor = color;
  i.style.border = "none";
  i.style.borderRadius = "0.25rem";
  i.style.float = "var(--float-end)";
  i.style.margin = "0.5rem";
  i.style.width = "2rem";
  i.style.height = "2rem";
  i.onmouseleave = (event) => {
    i.style.filter = null;
  };
  i.onmouseover = (event) => {
    i.style.filter = "brightness(75%)";
  };
  i.onmousedown = (event) => {
    i.style.filter = "brightness(50%)";
  };
  i.onmouseup = (event) => {
    i.style.filter = "brightness(75%)";
  };
  parent.appendChild(i);
}
export function Label(parent, text = "", size = 16) {
  var i = document.createElement("p");
  i.innerText = text;
  i.style.margin = "0.5rem 0";
  i.style.fontSize = `${size}px`;
  parent.appendChild(i);
  return i;
}
export function ListButton(parent, text = "") {
  var i = document.createElement("button");
  i.innerText = text;
  i.style.border = "none";
  i.style.padding = "8px";
  i.style.width = "100%";
  parent.appendChild(i);
  return i;
}
export function Radio(parent, text = "") {
  var i = document.createElement("input");
  i.setAttribute("type", "radio");
  i.setAttribute("checked", "false");
  var j = document.createElement("label");
  j.for = i.getAttribute("id");
  j.innerText = text;
  parent.appendChild(i);
  return {
    label: j,
    obj: i
  };
}
export function Sidebar(parent, text = "Sidebar", open = true) {
  var i = document.createElement("div");
  i.style.backgroundColor = "var(--background-medium)";
  i.style.setProperty("box-sizing", "border-box");
  i.style.transition = "375ms var(--anim)";
  i.style.position = "absolute";
  i.style.top = "3rem";
  i.style.width = "320px";
  i.style.height = "calc(100% - 3rem)";
  if(open) {
    i.style.boxShadow = "2px 0 4px 0 var(--shadow)";
    i.style.opacity = 1;
    i.style.padding = "0.5rem 1rem";
    i.style.left = "0";
    parent.style.paddingLeft = "calc(320px + 1rem)";
  } else {
    i.style.boxShadow = "none";
    i.style.opacity = 0;
    i.style.padding = "0.5rem 0";
    i.style.left = "-320px";
    parent.style.paddingLeft = "1rem";
  }
  var j = document.createElement("header");
  j.innerText = text;
  j.style.backgroundColor = "var(--background-medium)";
  j.style.userSelect = "none";
  i.appendChild(j);
  parent.appendChild(i);
  return {
    label: j,
    obj: i,
    toggle: () => {
      if(i.offsetLeft == 0) {
        i.style.boxShadow = "none";
        i.style.opacity = 0;
        i.style.padding = "0.5rem 0";
        i.style.left = "-320px";
        parent.style.paddingLeft = "1rem";
      } else {
        i.style.boxShadow = "2px 0 4px 0 var(--shadow)";
        i.style.opacity = 1;
        i.style.padding = "0.5rem 1rem";
        i.style.left = "0";
        parent.style.paddingLeft = "calc(320px + 1rem)";
      }
    },
    seperator: () => {
      var k = document.createElement("hr");
      k.style.float = "var(--float-start)";
      i.appendChild(k);
    }
  };
}
export function Slider(parent, text = "") {
  var i = document.createElement("p");
  i.innerText = text;
  var j = document.createElement("input");
  j.setAttribute("type", "range");
  j.setAttribute("min", 0);
  j.setAttribute("max", 100);
  j.setAttribute("value", 50);
  parent.appendChild(i);
  parent.appendChild(j);
  return {
    label: i,
    obj: j
  };
}
export function View(parent) {
  var i = document.createElement("div");
  parent.appendChild(i);
  return i;
}
