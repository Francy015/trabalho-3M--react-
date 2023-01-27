import React, {useState, useEffect} from 'react'
import Footer from '../../components/Footer/Footer'

import HeaderMain from '../../components/HeaderMain/HeaderMain'
 
import { Link, useParams } from 'react-router-dom'

import './Feed.css'

import axios from 'axios'

const Feed = () => {

  const [ posts, setPosts ] = useState([])

  const { selectRota } = useParams()

  let url = `https://database-m5.vercel.app/${selectRota}`

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setPosts(response.data);
    })
    .catch(() => {
      console.log('Deu Errado');
    })
  }, [])

  function deletePost(id){

    axios.delete(`https://database-m5.vercel.app/${selectRota}/${id}`)

    setPosts(posts.filter(post => post.id !== id))

  }


  return (
    <div>
       <HeaderMain />  
      <main>
        <div className='cards'>
            {posts.map((post, key) => {
              return(
                <div className='card' key={key}>
                  <header>
                    <h2>{post.titulo}</h2>                    
                  </header>
                  <div className='line'></div>
                  <p>Autor: {post.autor}</p>
                  <div className='btns'>
                    <div className='btn-edit'>
                      <Link to={{pathname: `/edit/${selectRota}/${post.id}`}}>
                        <button>Editar</button>
                      </Link>
                    </div>
                    <div className='btn-readmore'>
                      <Link to={{pathname:`/lermais/${selectRota}/${post.id}`}}>
                        <button>Informações</button>
                      </Link>
                    </div>
                    <div className='btn-delete'>
                        <button onClick={() => deletePost(post.id)}>Remover</button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </main>
        <Footer />
    </div>
  )
}

export default Feed