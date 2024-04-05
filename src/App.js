import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './components/Component';
import SignIn from './components/SignIn';
import Next from './components/Next';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Component />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/next' element={<Next />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;