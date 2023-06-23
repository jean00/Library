import React, { ChangeEvent, FC, useState, useEffect } from "react";
import {
  Button,
  FormControl,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";

interface BookFormProps {
  onSubmit: (book: BookFormData) => void;
}

interface BookFormData {
  title: string;
  author: string;
  pages: number;
  read: string;
}

const BookForm: FC<BookFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [read, setRead] = useState<string>("yes");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newBook: BookFormData = {
      title: title,
      author: author,
      pages: pages,
      read: read,
    };

    onSubmit(newBook);
    setTitle("");
    setAuthor("");
    setPages(1);
    setRead("yes");
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <Typography> Title </Typography>
      <TextField
        sx={{ input: { color: "#ffff" } }}
        value={title}
        onChange={handleChange}
        name="title"
        variant="filled"
        required
      />

      <Typography> Author </Typography>
      <TextField
        sx={{ input: { color: "#ffff" } }}
        value={author}
        onChange={handleChange}
        name="author"
        variant="filled"
        required
      />

      <Typography> Total pages </Typography>
      <TextField
        sx={{ input: { color: "#ffff" } }}
        value={pages}
        onChange={handleChange}
        name="pages"
        type="number"
        variant="filled"
        placeholder="number of pages"
        required
      />

      <Typography> Read? </Typography>
      <NativeSelect
        value={read}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setRead(e.target.value)
        }
        name="read"
        sx={{
          color: "#ffff",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
        required
      >
        <option style={{ color: "#000" }}> Yes </option>
        <option style={{ color: "#000" }}> No</option>
      </NativeSelect>

      <Button type="submit" variant="contained">
        Add book
      </Button>
    </FormControl>
  );
};

export default BookForm;
