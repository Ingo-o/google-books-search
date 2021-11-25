import axios from "axios";

export const getBooksAJAX = (searchField, subject, sortingMethod, startIndex) => {
    const searchStr = searchField === '' ? 'books' : searchField;
    const subjectStr = subject === 'all' ? '' : `subject=${subject}`;
    const sortingStr = sortingMethod === 'relevance' ? '' : `&orderBy=${sortingMethod}`;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${subjectStr}${searchStr}${sortingStr}&maxResults=2&startIndex=${startIndex}`)
        .then(response => {
            const cleanData = (response) => {

                if (response.data.totalItems === 0 || response.data.hasOwnProperty('items') === false) {
                    return 'STOP';
                }

                return {
                    totalItems: response.data.totalItems, items:
                        response.data.items.map(book => {
                            if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                                book.volumeInfo['imageLinks'] = {thumbnail: 'https://1.downloader.disk.yandex.ru/preview/10608339e39ea796e17e43c8327980651f36cd35ad18a69f89ed08a560add4dc/inf/bCSk7ta7eGfGJ2aCt1fJwyViYLdYuPSbu5QjUYD9Lo7p7ZzgCA05yx0X8b1gchnLLjQWhQnAoeNCerD_aCs_Ew%3D%3D?uid=12379035&filename=no-image.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=12379035&tknv=v2&size=1279x538'};
                            }
                            if (book.volumeInfo.hasOwnProperty('categories') === false) {
                                book.volumeInfo['categories'] = [''];
                            }
                            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                                book.volumeInfo['authors'] = [''];
                            }
                            if (book.volumeInfo.hasOwnProperty('title') === false) {
                                book.volumeInfo['title'] = '';
                            }
                            return book;
                        })
                }
            }

            return cleanData(response);
        });
}
