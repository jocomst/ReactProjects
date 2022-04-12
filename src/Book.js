import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Hello world!");
  };

  const example = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => example(author)}>
        More complex ex.
      </button>
    </article>
  );
};

export default Book;
