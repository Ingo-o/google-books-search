import React from "react";

const BookInfo = (props) => {
    const {books, bookId} = props;
    const properBook = books.filter(book => bookId === book.id)[0].volumeInfo;

    return (
        <h1>{properBook.title}</h1>
    )
}

export default BookInfo;

/*
{books: Array(2), bookId: 'WXBvDwAAQBAJ'}
bookId: "WXBvDwAAQBAJ"
books: Array(2)
0:
accessInfo: {country: 'RU', viewability: 'PARTIAL', embeddable: true, publicDomain: false, textToSpeechPermission: 'ALLOWED', …}
etag: "Lqu6e2V7+rk"
id: "WXBvDwAAQBAJ"
kind: "books#volume"
saleInfo: {country: 'RU', saleability: 'NOT_FOR_SALE', isEbook: false}
searchInfo: {textSnippet: 'The lazy <b>cat</b> doesn&#39;t any forget. The la…/b> It is gone catch some without anyone&nbsp;...'}
selfLink: "https://www.googleapis.com/books/v1/volumes/WXBvDwAAQBAJ"
volumeInfo:
    allowAnonLogging: false
authors: ['Catherine Zueva']
canonicalVolumeLink: "https://books.google.com/books/about/The_lazy_cat.html?hl=&id=WXBvDwAAQBAJ"
categories: ['Juvenile Nonfiction']
contentVersion: "preview-1.0.0"
description: "This one is the book for kids the cat one with. Занимательная книга в стихах для детей на английском про умного кота."
imageLinks: {smallThumbnail: 'http://books.google.com/books/content?id=WXBvDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', thumbnail: 'http://books.google.com/books/content?id=WXBvDwAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}
industryIdentifiers: (2) [{…}, {…}]
infoLink: "http://books.google.ru/books?id=WXBvDwAAQBAJ&dq=cat&hl=&source=gbs_api"
language: "ru"
maturityRating: "NOT_MATURE"
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
previewLink: "http://books.google.ru/books?id=WXBvDwAAQBAJ&pg=PP5&dq=cat&hl=&cd=1&source=gbs_api"
printType: "BOOK"
publishedDate: "2018-12-20"
publisher: "Litres"
readingModes: {text: true, image: true}
title: "The lazy cat"*/
