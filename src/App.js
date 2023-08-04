import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Layout from './Layout';
import Signup from './SignUp';
import Login from './Login';
import PaginatedComponent from './PaginatedComponent';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="auth" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="pagination" element={<PaginatedComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
