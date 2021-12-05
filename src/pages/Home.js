import React from 'react'
import useFetch from '../hooks/useFetch'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
    const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')

    return (
        <div className='home'>
            <h2>Articles</h2>
            {isPending && 
                <div>
                    <em><b>Loading !!</b></em>
                </div>
            }
            {error &&
                <div>
                    <em>Errorrrrrr !!!!</em>
                </div>
            }
            {articles && articles.map((article) => (
                <div key={article.id} className="card">
                    <h3>{article.title}</h3>
                    <p><em> - Written by {article.author}</em></p>
                    <p className='readmore'>
                        <Link to={`article/${article.id} `}>Read more ...</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}
