import React from 'react';
import { Button } from '@/components/ui/button';

const AuthPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Google Authentication</h1>
      <Button 
        onClick={() => window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google`}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default AuthPage;