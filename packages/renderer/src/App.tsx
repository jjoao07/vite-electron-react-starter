import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/app.scss';
import Home from '/@/components/Home';
// Lazy load component
const About = React.lazy(() => import('/@/components/About'));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {/* <AppNavigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          } />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
