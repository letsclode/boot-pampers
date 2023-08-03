import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import ContactForm from './ContactForm';
import SignupForm from './SignupForm';
import UsersList from './UserList';
import PostsList from './PostList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="form" element={<ContactForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="userlist" element={<UsersList />} />
          <Route path="postslist" element={<PostsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
