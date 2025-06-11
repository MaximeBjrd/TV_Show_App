import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import { AppLayout } from './layout/app-layout'
import { HomePage } from './pages/home'
import { DetailPage } from './pages/detail'
import { NotFoundPage } from './pages/not-found'
import { ROUTES } from './config/routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout/>}>
            <Route path={ROUTES.HOME} element={<HomePage/>} />
            <Route path={ROUTES.DETAIL} element={<DetailPage/>} />
          </Route>
          
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
