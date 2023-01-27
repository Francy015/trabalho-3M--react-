import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home/Home"
import Feed from "./pages/Feed/Feed";
import Post from './pages/Post/Post'
import Edit from './pages/Edit/Edit'
import LerMais from './pages/LerMais/LerMais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/feed/:selectRota" element={<Feed />} />
          <Route path="post/:selectRota" element={<Post />} />
          <Route path="edit/:selectRota/:id" element={<Edit />} />
          <Route path="lermais/:selectRota/:id" element={<LerMais />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
