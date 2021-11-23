import React from "react";

const BookCard = (props) => {
    const {image, categories, title, authors, publishedDate} = props;
    return (
        <div className="card-container">
            <img src={image} alt=""/>
            <div className="desc">
                <p>{categories}</p>
                <h2>{title}</h2>
                <h3>Authors: {authors}</h3>
                <p>Year of publish: {publishedDate.substring(0, 4)}</p>
            </div>
        </div>
    )
}

export default BookCard;