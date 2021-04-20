import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../header'
import Footer from '../footer'
import SvgSprite from '../svg-sprite'
import { CatalogPage, MainPage, OrderPage } from '../../pages'
import { Url } from '../../constants';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Header/>
      <SvgSprite/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path={Url.Home} exact component={MainPage}/>
          <Route path={Url.Catalog} component={CatalogPage}/>
          <Route path={Url.Order} component={OrderPage}/>
        </Switch>
      </AnimatePresence>
      <Footer/>
    </>
  )
}


export default App
