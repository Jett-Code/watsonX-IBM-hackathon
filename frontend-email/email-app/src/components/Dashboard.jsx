import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Input } from '@/components/ui/input'

const Dashboard = () => {
  const { category } = useParams();
  const [email, setEmail] = useState('');
  const [importantMails, setImportantMails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category === 'student') {
      fetchImportantMails();
    }
  }, [category]);
  

  const fetchImportantMails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/important-mails`, {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch important mails');
      }
      const data = await response.json();
      setImportantMails(data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
    setLoading(false);
  };

  const fetchImportantMailsForCategory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/important-mails/${category}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch important mails');
      }
      const data = await response.json();
      setImportantMails(data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard for {category}</h1>
      {category !== 'student' && (
        <div className="mb-4">
          
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mr-2"
          />
         
         
          <Button onClick={fetchImportantMailsForCategory} disabled={loading || !email} className="mt-2">
            {loading ? 'Loading...' : 'Show Important Mails'}
          </Button>
        </div>
      )}
      {importantMails.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Important Mails</CardTitle>
            <CardDescription>Here are your most important email headings</CardDescription>
          </CardHeader>
          <CardContent>
  <ul className="list-disc pl-5">
    {importantMails.map((mail, index) => {
      const cleanedMail = mail.replace(/^\d+\.\s*/, ''); // Remove leading numbers
      return cleanedMail ? (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-2"
        >
          {cleanedMail}
        </motion.li>
      ) : null;
    })}
  </ul>
</CardContent>

        </Card>
      )}
    </div>
  );
};

export default Dashboard;