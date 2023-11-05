import React from "react";
import ReactDOM from 'react-dom/client';

const domNode = document.getElementById('root');

const heading = React.createElement("h1", { className: "heading" }, "I love react");

const h1 = React.createElement("h1", {}, "Grapes")

const h2 = React.createElement("h2", {}, "Mango");

const cDiv = React.createElement("div", {
    id: "child"
}, [h1, h2])

const pDiv = React.createElement("div", {
    id: "parent"
}, cDiv);

const root = ReactDOM.createRoot(domNode);

console.log(root);
console.log(pDiv)


root.render(pDiv);

/*
<div id="parent">
    <div id="child">
        <h1>I AM LOST</h1>
        <h2>OOTY</h2>
    </div>
</div>

1) WHAT IS CDN

2) WHAT IS crossorigin
*/
