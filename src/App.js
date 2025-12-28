import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import Main from './Components/Main/index.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/song/' element={<Main/>}/>
        <Route path='/spotify/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
