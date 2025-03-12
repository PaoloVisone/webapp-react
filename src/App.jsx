// HomePage
import HomePage from './pages/HomePage';
// MoviePage
import MoviePage from './pages/MoviePage';

// Layout
import DefaultLayout from '../layouts/DefaultLayout';

// Routing gestione rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>

          <Route index path='/' element={<HomePage />} />
          <Route path='/movies/:id' element={<MoviePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
