// Javascript way
const rootElement = document.getElementById("root");
const h1Tag = document.createElement("h1");
h1Tag.innerText = "H1 Heading";
rootElement.insertAdjacentElement("afterbegin", h1Tag);


// React Way
const root = ReactDOM.createRoot(document.getElementById("root"));

const h2Tag = React.createElement("h2", {id: "h2"}, "H2 heading");
const h3Tag = React.createElement("h3", {role: "heading", id: "h2"}, "H3 heading");

const container = React.createElement("div", {
    className: "container-wrapper",
    id: "conatiner-div",
    hello: "world"
}, [h2Tag, h3Tag]);

console.log(h1Tag)
root.render(container);

