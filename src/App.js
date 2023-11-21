import './App.css';
import { BrowserRouter as Router,Route,Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import Header from './layout';
import Footer from './layout/footer';
import Context from './components/context/context';
import { AnimatePresence } from 'framer-motion';
import './App.css'

// import backImage from './image/stone-wall.jpg'
// import Home from './page/Home';
function App() {
  const location= useLocation();
  return (
    <div className="App min-h-screen flex flex-col backimage relative" >
     
     <Context>
     <Header/>
     <div className={`w-full mx-auto flex-1 bg-transparent cursor-pointer flex pb-28`} >
     <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
      
      {routes.map((n)=>{
        return <Route element={n.element} path={n.path} key={n.path}></Route>
      })}
      
      </Routes>
      </AnimatePresence>
      </div>
      <div className='absolute w-full bottom-0'>
      <div className='w-4 h-4 fixed bg-red-400 right-36 top-44 -z-10'></div>
      <Footer/>
      </div>
      </Context>
     
     
     
    </div>
  );
}

export default App;
