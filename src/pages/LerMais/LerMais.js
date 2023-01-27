import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import HeaderMain from '../../components/HeaderMain/HeaderMain'

function LerMais() {

    const [ lermais, setLermais ] = useState([])

    const { id } = useParams()

    const { selectRota } = useParams()

    useEffect(() => {
        axios.get(`https://database-m5.vercel.app/${selectRota}/${id}`)
        .then((response) => {
            setLermais(response.data)
        })

    }, [])
    
    console.log(lermais);

    return(
    
        <div>
            <HeaderMain /> 
            <main>
                <div className="cards">
                    <div className="card" >
                        <header>
                          <h2>{lermais.titulo}</h2>
                        </header>
                            <div className="line"></div>
                            <p>Autor: {lermais.autor}</p>
                            <p>Editora: {lermais.editora}</p>
                            <p>Sinopse:</p>
                            <div className="line"></div>
                            <p>{lermais.sinopse}</p>
                            
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LerMais