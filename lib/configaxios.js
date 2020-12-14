import axios from 'axios'

export const fetchData = async (url) => await axios.get(url)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.warn(error);
    });

export const saveData = async (livro) => await axios.post('https://books-listapi.herokuapp.com/api/book', livro)
    .then(function (response) {
        console.log("save")
    })
    .catch(function (error) {
        console.warn(error);
    });

export const editData = async (livro) => await axios.put('https://books-listapi.herokuapp.com/api/book', livro)
    .then(function (response) {
        console.log("put")
    })
    .catch(function (error) {
        console.warn(error);
    });

export const deleteData = async (livro) => await axios.delete('https://books-listapi.herokuapp.com/api/book', { data: livro }).then(function (response) {
    console.log("delete")
})
    .catch(function (error) {
        console.warn(error);
    });

