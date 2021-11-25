import React from "react";

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
        <div className="card-container">
            <img src={thumbnail} alt=""/>
            <div className="desc">
                <p>{categories[0]}</p>
                <h2>{title}</h2>
                <h3>Authors: {authorsList(authors)}</h3>
            </div>
        </div>
    )
}

export default BookCard;