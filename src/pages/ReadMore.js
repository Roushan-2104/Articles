import {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default function ReadMore() {
    const {id} = useParams()
    const url =`http://localhost:3000/articles/${id}`
    const { data: articles, isPending, error } = useFetch(url)
    const history = useNavigate()

    useEffect(() => {
        if(error){
            // history.goBack()
            setTimeout(() => {
                history('/')
            }, 2000);
        }
    },[error, history])
    
    return (
        <div>
            {isPending && 
                <div>
                    <em><b>Loading ...</b></em>
                </div>
            }
            {error &&
                <div>
                    <b>Errorrrrrr !!!!</b>
                </div>
            }
            {articles && (
                <div>
                    <h2>{articles.title}</h2>
                    <span>By <em>{articles.author}</em></span>
                    <p>{articles.body}</p>
                </div>
            )}
           <h2></h2>
        </div>
    )
}
