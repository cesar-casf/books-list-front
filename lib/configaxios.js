import axios from 'axios'

export const fetchData = async (url) => await axios.get(url)
.then(function(response) 
{
 return response.data;
})
.catch(function(error){
    console.warn(error);
});

export const saveData = async (livro) => await axios.post('http://localhost:8080/api/book/', livro)
.then(function(response)
{
    console.log("Livro cadastrado!")
})
.catch(function(error){
    console.warn(error);
});

export const editData = async (livro) => await axios.put('http://localhost:8080/api/book/', livro)
.then(function(response)
{
    console.log("Livro editado")
})
.catch(function(error){
    console.warn(error);
});

export const deleteData = async (livro) => await axios.delete('http://localhost:8080/api/book/', {data: livro}).then(function(response)
{
    console.log("Livro deletado")
})
.catch(function(error){
    console.warn(error);
});

