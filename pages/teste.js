import Head from 'next/head'
import axios from 'axios'

const fetchData = async () => await axios.get('https://books-listapi.herokuapp.com/api/books')
.then(function(response) 
{
 return response.data;
})
.catch(function(error){
    console.warn(error);
});

export default function Teste({ dados }) {
    return (
        <div style={ {color: '#fff'} }>
            <h1>Teste</h1>

            <ul>
                {dados.map(({id, title, autor, category}) => (
                    <li key={id}>{title}</li>
                    ))}
            </ul>
        </div>
    )

}

export async function getStaticProps(){
    const dados = await fetchData();
    return {
        props: {dados}
    }
}