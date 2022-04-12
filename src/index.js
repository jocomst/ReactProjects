// don't have to import react anymore
//import React from 'react' - doesn't need to be included anymore
// hot reload might not work
import React from "react";
import { createRoot } from "react-dom/client";

//CSS
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

// stateless functional componenet
// always return JSX
// have to return a single element
//HTML attributes are camelCase
//className instead of class
//close every element even those without closing tag
//formatting

//JSX rules

//nested components, React tools

const container = document.getElementById("root");
const root = createRoot(container);

function BookList() {
  return (
    <section className="book-list">
      {books.map((x) => {
        return <Book key={x.id} {...x}></Book>;
      })}
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

root.render(<BookList />);
