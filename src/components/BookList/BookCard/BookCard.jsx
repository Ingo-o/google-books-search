import React from "react";
import css from "./BookCard.module.css";

const BookCard = (props) => {
    const {categories, title, authors} = props.volumeInfo;
    const {thumbnail} = props.volumeInfo.imageLinks;

    const authorsList = (authors) => {
        const listItems = authors.map((author, index) =>
            <li key={index.toString()}>{author}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    return (
        <div>
            <img src={thumbnail} alt=""/>
            <div>
                <p>{categories[0]}</p>
                <h2>{title}</h2>
                <h3>Authors: {authorsList(authors)}</h3>
            </div>
        </div>
    )
}

export default BookCard;