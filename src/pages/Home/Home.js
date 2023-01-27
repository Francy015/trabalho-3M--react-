import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer'

import { Link, useParams } from 'react-router-dom'
import HeaderHome from '../../components/HeaderMain/HeaderHome'

import './Home.css'


const Feed = () => {


  const [selectRota, setSelectRota] = useState('Romance');  
    const list = [
        {id: 'Romance', name: 'Romance'},
        {id: 'Terror', name: 'Terror'},
        {id: 'Ficcao', name: 'Ficcao'},
        {id: 'Aventura', name: 'Aventura'},
        {id: 'Quadrinhos', name: 'Quadrinhos'},
        {id: 'Animes', name: 'Animes'},
        {id: 'Fantasia', name: 'Fantasia'},
        {id: 'Programacao', name: 'Programacao'},
    ];


    
    return (
    <div>
       <HeaderHome />  
      <main>
        <div className='cards-home'>
            <div className='card-home'>
                <select className='select' value={selectRota} onChange={e => setSelectRota(e.target.value)}>
                    {list.map((item, index) => (
                    <option value={item.id}>{item.name}</option>
                    ))}        
                </select> 
            <div className='btns'>
                <div className='btn-edit'>
                    <Link to={{pathname: `/feed/${selectRota}`}}>
                        <button>Mostrar Livros</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
      </main>
        <Footer />
    </div>
  )
}

export default Feed