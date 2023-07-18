/* 
HMR - Hot Module Reloading 
File Watcher Algorith (written in C++)
    1. When we run npx parcel index.html , it just created the development build and it hosts it on our server which in our case is localhost:1234
    2. main in package.json bascially specifies the entry point of our app.
    3. npx parcel build index.html build the production in the dist folder (all the JS code in file, CSS code in one file, index.html etc. also it minifies ) 
    4. Parcel does gives us production ready build minification, optimization, remove console log (Code cleaning)etc.
    5. What takes long on website. These are medias, images etc.
    6. Parcel does image optimization as well.
    7. Parcel does caching while development.  
    8. put .parcel-cache in .gitignore because the stuff that can be auto-generatd on server should be put inside .gitignore.
    9. Transitive Dependencies - We have our pkg manager which takes care and handles all the transitive dependencies of our project.

    Why is react fast ?
    1. It has virtual DOM but also it needs lot more things to make it fast. 

    https://stackoverflow.com/questions/40143357/do-you-put-babel-and-webpack-in-devdependencies-or-dependencies

    1. To remove the console logs from the production build we can install bable remove console package.
    2. About keys and reconciliation - https://legacy.reactjs.org/docs/reconciliation.html.
    3. const h1 = React.createElement("h1",{},"Heaindg - 1"); // It will be an object if we console log this and react puts this is in the DOM.
       const h2 = React.createElement("h2",{},"Heaindg - 2");
       const div = React.createElement("div", {}, [h1, h2]);
    4. JSX - Javascript XML. Simple HTML like syntax(or syntactic sugar) and not HTML that is used while writting react code. If JSX would not be there the react code would have been so messy.
        const heading = (
            <div className="heaindg-wrapper">
                <h1 tabIndex="1">Heading</h1>   // <------ JSX  // Babel basically converts this into browser understandable code.
            </div>
        ) 
        Also JSX uses React.createElement => Object => HTML(DOM).
        Play -> https://babeljs.io/

*/
// React Way
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const h2Tag = React.createElement("h2", {id: "h2"}, "H2 heading");
const h3Tag = React.createElement("h3", {role: "heading", id: "h2"}, "H3 heading");

const container = React.createElement("div", {
    className: "container-wrapper",
    id: "conatiner-div",
    hello: "world"
}, [h2Tag, h3Tag]);

console.log(h2Tag)
root.render(container);


// Javascript way
const rootElement = document.getElementById("root");
const h1Tag = document.createElement("h1");
h1Tag.innerText = "H1 Heading";
// rootElement.insertAdjacentElement("afterbegin", h1Tag);



