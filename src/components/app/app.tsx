import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from '../header'
import Footer from '../footer'
import SvgSprite from '../svg-sprite'
import MainPage from '../../pages/main-page';


const App: React.FC = () => (
  <>
    <Header />
    <SvgSprite />
    <Switch>
      <Route path='/' exact component={MainPage} />
    </Switch>

    <Footer />
  </>
)

export default App
