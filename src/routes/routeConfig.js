import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';

import Home from '../pages/Home';
import Login from '../pages/Login';

function RouteConfig() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
