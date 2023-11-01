import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import routes from './routes';
import Header from './layout';
import Footer from './layout/footer';
import Context from './components/context/context';
import './App.css'
// import backImage from './image/stone-wall.jpg'
// import Home from './page/Home';
function App() {
  return (
    <div className="App min-h-screen flex flex-col backimage relative" >
    
    
     <Router>
     <Context>
     <Header/>
     <div className={`w-11/12 mx-auto flex-1 bg-gray-100 cursor-pointer flex pb-28`} >
      <Routes>
      
      {routes.map((n)=>{
        return <Route element={n.element} path={n.path} key={n.path}></Route>
      })}
      
      </Routes>
      </div>
      <div className='absolute w-full bottom-0'>
      <Footer/>
      </div>
      </Context>
     </Router>
     
     
    </div>
  );
}

export default App;
