import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserTie, FaUserMd, FaGraduationCap } from 'react-icons/fa';
import CategoryCard from './CategoryCard';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === 'student') {
      window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google`;
    } else {
      navigate(`/dashboard/${category}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose your category</h1>
      <div className="flex flex-wrap -mx-2">
        <CategoryCard icon={FaGraduationCap} title="Student" onClick={() => handleCategoryClick('student')} />
        <CategoryCard icon={FaUserTie} title="Hiring Manager" onClick={() => handleCategoryClick('hiring_manager')} />
        <CategoryCard icon={FaUser} title="CEO" onClick={() => handleCategoryClick('CEO')} />
        <CategoryCard icon={FaUserMd} title="Doctor" onClick={() => handleCategoryClick('doctor')} />
      </div>
    </div>
  );
};

export default HomePage;