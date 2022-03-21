import { Button, Card, CardContent, Typography } from "@mui/material";
import { IBook } from "../Interface/Interface";
import React from "react";

interface Props {
  //props validation
  book: IBook;
  removeBook(bookToRemove: string): void;
}

const BooksCard = ({
  book: { title, author, pages, read },
  removeBook,
}: Props) => {
  //destructuring the book props
  return (
    <Card
      sx={{
        position: "relative",
        left: "10%",
        top: "20px",
        height: "20rem",
        width: "18rem",
        minwidth: "10rem",
      }}
    >
      {" "}
      {/* creating the card with book informations */}
      <CardContent sx={{ padding: "20px", whiteSpace: "nowrap" }}>
        <Typography
          sx={{
            marginTop: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h4"
        >
          {" "}
          {title}
        </Typography>
        <Typography
          sx={{
            marginTop: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h6"
        >
          Author: {author}
        </Typography>
        <Typography variant="h6">Pages: {pages}</Typography>
        <Typography variant="h6">read: {read}</Typography>
        <Button
          sx={{
            position: "relative",
            width: "100%",
            marginTop: "30px",
          }}
          variant="contained"
          onClick={() => removeBook(title)}
        >
          {" "}
          Remove book{" "}
        </Button>{" "}
        {/* when the button is clicked, the removeBook from is called from his parent passing the props.title as argument */}
      </CardContent>
    </Card>
  );
};

export default BooksCard;
