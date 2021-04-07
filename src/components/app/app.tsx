import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../header'
import Footer from '../footer'
import SvgSprite from '../svg-sprite'
import { CatalogPage, MainPage } from '../../pages'

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Header/>
      <SvgSprite/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={MainPage}/>
          <Route path='/catalog' component={CatalogPage}/>
        </Switch>
      </AnimatePresence>
      <Footer/>
    </>
  )
}


export default App
