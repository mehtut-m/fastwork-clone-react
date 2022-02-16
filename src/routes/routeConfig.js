import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';

import Home from '../pages/Home';
import CreateServices from '../pages/Services/CreateServices';

function RouteConfig() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services/add" element={<CreateServices />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
