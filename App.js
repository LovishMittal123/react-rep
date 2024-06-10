
/*
If we want to do it like this in react then must follow from line 15
<div id="parent">
<div id="child">
<h1>I am a heading</h1>
</div>
</div>

*/

// const heading= React.createElement("h1",{id:"heading"},"Hello world from react!")// Heading is an object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an heading")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);