import React from 'react'
import Footer from '../../components/Footer/Footer.js'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './Post.css'
import axios from 'axios';

import { useParams } from 'react-router-dom'
import HeaderMain from '../../components/HeaderMain/HeaderMain.js';

const validationPost = yup.object().shape({
  titulo: yup.string().required('O título é obrigatório'),
  autor: yup.string().required('O autor é obrigatório'),
  editora: yup.string().required('A editora é obrigatório'),
  sinopse: yup.string().required('A sinopse é obrigatório')
})

const Post = () => {

  const { selectRota } = useParams()

  console.log(selectRota);

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationPost)
  })

  let url = `https://database-m5.vercel.app/${selectRota}`
  console.log(url);

  const addPost = data => axios.post(url, data)
  .then(() => {
    console.log('Deu tudo certo');
  })
  .catch(() => {
    console.log('Deu Errado');
  })

  return (
    <div>
        <HeaderMain />
        <main>
          <div className='card-post'>
            <h1>Editar Informações</h1>
            <div className='line-post'></div>
            <div className='card-body-post'>
              <form onSubmit={handleSubmit(addPost)}>
                <div className='fields'>
                  <label>Título</label>
                  <input type='text' name='titulo' {...register('titulo')}/>
                  <p className='error-message'>{errors.titulo?.message}</p>
                </div>
                <div className='fields'>
                  <label>Autor</label>
                  <input type='text' name='autor' {...register('autor')}/>
                  <p className='error-message'>{errors.autor?.message}</p>
                </div>
                <div className='fields'>
                  <label>Editora</label>
                  <input type='text' name='editora' {...register('editora')}/>
                  <p className='error-message'>{errors.editora?.message}</p>
                </div>
                <div className='fields'>
                  <label>Conteúdo</label>
                  <textarea type='text' name='sinopse' {...register('sinopse')}></textarea>
                  <p className='error-message'>{errors.sinopse?.message}</p>
                </div>
                <div className='btn-post'>
                  <button type='submit'>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Post