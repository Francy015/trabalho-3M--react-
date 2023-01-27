import React, {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom'

import './HeaderMain.css'

function HeaderHome() {

    const { selectRota } = useParams()

    return(
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <h1>Livraria CodeMore</h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome
