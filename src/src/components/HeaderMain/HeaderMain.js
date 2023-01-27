import React, {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom'

import './HeaderMain.css'

function HeaderMain() {

    const { selectRota } = useParams()

    return(
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <h1>Livraria CodeMore</h1>
                    </Link>
                </div>
                <div className='btn'>
                    <div className='btn-newPost'>
                        <Link to={{pathname: `/feed/${selectRota}`}}>
                            <button>Exibir Livros</button>
                        </Link>
                    </div>
                    <div className='btn-newPost'>
                        <Link to={{pathname: `/post/${selectRota}`}}>
                            <button>Cadastrar Livros</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain
