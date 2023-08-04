import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import { ChartComponent } from './ChatComponent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="chart" element={<ChartComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
