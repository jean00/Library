import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import BooksCard from "./BooksCard";
import BookForm from "./BookForm";
import { IBook } from "../Interface/Interface";

const Main = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const submitBook = (book: IBook): void => {
    setBooks([...books, book]);
  };

  const removeBook = (bookToRemove: string): void => {
    setBooks(books.filter((book) => book.title !== bookToRemove));
  };

  useEffect((): void => {
    const localStorageData = localStorage.getItem("books");
    if (localStorageData) setBooks(JSON.parse(localStorageData)); //retrieving item from the localstorage if it's not empty
  }, []);

  useEffect((): void => {
    localStorage.setItem("books", JSON.stringify(books)); //setting item to the local storage
  });

  return (
    <main style={{ display: "flex" }}>
      <Container
        sx={{
          //style the component using mui system
          width: "13%",
          minWidth: "150px",
          position: "fixed",
          backgroundColor: "#424242",
          minHeight: "100%",
          height: "auto",
          overflowX: "hidden",
          paddingTop: "20px",
          color: "#fff",
        }}
      >
        <BookForm onSubmit={submitBook} />
      </Container>

      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          marginLeft: "100px",
          padding: "0px 100px",
          gap: "20px",
          width: "90%",
          maxWidth: "90%",
          flexWrap: "wrap",
        }}
      >
        {books.map((book: IBook, index: number) => (
          <BooksCard key={index} book={book} removeBook={removeBook} />
        ))}
      </Container>
    </main>
  );
};

export default Main;
