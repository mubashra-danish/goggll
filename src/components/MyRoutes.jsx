import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Result from './Result';

const MyRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path={['/search', '/images', '/news', '/videos']} element={<Result />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;





