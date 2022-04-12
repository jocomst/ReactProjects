// don't have to import react anymore
//import React from 'react' - doesn't need to be included anymore
// hot reload might not work
import React from "react";
import { createRoot } from "react-dom/client";

//CSS
import "./index.css";

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
const firstBook = {
  img: "https://m.media-amazon.com/images/I/A1b4pQu7qRL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Bookstores: A Celebration of Independent Booksellers",
  author: "Amelia Earhert",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71hExnA510L._AC_UL906_SR906,600_.jpg",
  title: "The Seven Husbands of Evelyn Hugo: A Novel",
  author: "Jenkins Reid",
};
function BookList() {
  return (
    <section className="book-list">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>lorem</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      {children}
      <h4>{author}</h4>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

root.render(<BookList />);
