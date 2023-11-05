import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
const para = <p>I am a para</p>;

// React Functional Component
const HeadingComponent = () => {
    return <h1>hello world</h1>
}

console.log(HeadingComponent());
console.log(<HeadingComponent/>);

const App = () => {
    return (<>
        <HeadingComponent/>
        {para}
        {HeadingComponent()}
    </>);
}

root.render(<App/>)
