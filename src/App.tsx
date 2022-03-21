import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  FormControl,
  NativeSelect,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import BooksCard from "./Components/BooksCard";
import { IBook } from "./Interface/Interface";

const App: FC = () => {
  //FC = function component type
  //using usestate hook for handle user input in the handleChange function
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [read, setRead] = useState<string>("yes");
  const [books, setBook] = useState<IBook[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //specifying the types of the parameter passed and of the function
    switch (
      e.target.name //handle the inputs using the name attribute of the textfields
    ) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "pages":
        setPages(Number(e.target.value));
        break;
    }
  };

  useEffect(():void => {
    const localStorageData = localStorage.getItem("books");
    if (localStorageData) setBook(JSON.parse(localStorageData));//retrieving item from the localstorage if it's not empty
  }, []);

  useEffect(():void => {
    localStorage.setItem("books", JSON.stringify(books)); //setting item to the local storage
  });                                              

  const submitBook = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      pages: pages,
      read: read,
    };

    setBook([...books, newBook]);
    setTitle(""); //
    setAuthor(""); // resetting the states
    setPages(1); //
    setRead("yes"); //
  };

  const removeBook = (bookToRemove: string): void => {
    setBook(
      books.filter((book) => {
        return book.title != bookToRemove; //creates a new array with every element that meets the condition
      })
    );
  };

  return (
    <div className="App">
      <CssBaseline></CssBaseline>
      <header>
        <AppBar position="fixed" sx={{ backgroundColor: "#212121" }}>
          <Toolbar>
            <Typography> Library </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </header>
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
          <FormControl component="form" onSubmit={submitBook}>
            <Typography> Title </Typography>
            <TextField
              sx = {{input: {color: "#ffff"}}}
              value={title}
              onChange={handleChange}
              name="title"
              variant="filled"
              required
            ></TextField>

            <Typography> Author </Typography>
            <TextField
              sx = {{input: {color: "#ffff"}}}
              value={author}
              onChange={handleChange}
              name="author"
              variant="filled"
              required
            ></TextField>

            <Typography> Total pages </Typography>
            <TextField
              sx = {{input: {color: "#ffff"}}}
              value={pages}
              onChange={handleChange}
              name="pages"
              type="number"
              variant="filled"
              placeholder="number of pages"
              required
            ></TextField>

            <Typography> Read? </Typography>
            <NativeSelect
              value={read}
              onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
                setRead(e.target.value)
              }
              name="read"
              sx={{color: "#ffff", marginTop: "10px",marginBottom: "20px", display: "block" }}
              required
            >
              <option> Yes </option>
              <option> No</option>
            </NativeSelect>

            <Button type="submit" variant="contained">
              {" "}
              Add book
            </Button>
          </FormControl>
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
          {books.map((book: IBook, index: number) => {
            return (
              <BooksCard
                key={index}
                book={book}
                removeBook={removeBook}
              ></BooksCard>
            );
          })}
        </Container>
      </main>
    </div>
  );
};

export default App;
