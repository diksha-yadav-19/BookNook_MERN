import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Navbar from "./Navbar";
import Books from "./Books";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#478CCF",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#478CCF",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const SearchBooks = ({ steps }) => {
  const query = steps.search_input.value;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://book-nook-api-tawny.vercel.app/book/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, [query]);

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.img}
                  alt={book.title}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                {book.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found for "{query}".</p>
      )}
    </div>
  );
};

const BookNookChatBot = () => {
  const steps = [
    {
      id: "1",
      message: "Welcome to BookNook! How can I help you today?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "search", label: "Search for a book", trigger: "search" },
        {
          value: "recommendation",
          label: "Get book recommendations",
          trigger: "recommendation",
        },
        { value: "contact", label: "Contact us", trigger: "contact" },
      ],
    },
    {
      id: "search",
      message:
        "Please enter the title or category of the book you are looking for:",
      trigger: "search_input",
    },
    {
      id: "search_input",
      user: true,
      trigger: "search_result",
    },
    {
      id: "search_result",
      component: <Books />,
      asMessage: true,
      end: true,
    },
    {
      id: "recommendation",
      message: "Sure! Here are some book recommendations:",
      trigger: "recommendation_list",
    },
    {
      id: "recommendation_list",
      component: (
        <div>
          <ul>
            <li>
              <a
                href="https://www.amazon.in/dp/0340750154/ref=asc_df_0340750154/?tag=googleshopmob-21&gad_source=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE ART OF HAPPINESS
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.in/dp/0143444344/ref=asc_df_0143444344/?tag=googleshopmob-21&gad_source=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                HereThere and Everywhere
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.in/dp/0143452126/ref=asc_df_0143452126/?tag=googleshopmob-21&gad_source=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Do It Today
              </a>
            </li>
          </ul>
        </div>
      ),
      asMessage: true,
      end: true,
    },
    {
      id: "contact",
      message: "You can reach us at support@booknook.com",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
};

export default BookNookChatBot;
