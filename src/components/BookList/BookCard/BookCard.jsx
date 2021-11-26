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
            <ul className={css.authorsList}>{listItems}</ul>
        );
    }

    return (
        <div className={css.bookCard}>
            <img className={css.bookCover} src={thumbnail} alt=""/>
            <div>
                <p className={css.category}>{categories[0]}</p>
                <p className={css.title}>{title}</p>
                <p>{authorsList(authors)}</p>
            </div>
        </div>
    )
}

export default BookCard;