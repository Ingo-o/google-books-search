import axios from "axios";

export const getBooksAJAX = (searchField) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
            .then(response => {return response.data.items});
}
