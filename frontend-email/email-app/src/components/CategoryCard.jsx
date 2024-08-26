import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const CategoryCard = ({ icon: Icon, title, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full sm:w-1/2 lg:w-1/2 p-4 flex"
  >
    <Card className="h-full w-full cursor-pointer" onClick={onClick}>
      <CardContent className="flex flex-col items-center justify-center h-full p-6">
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  </motion.div>
);

export default CategoryCard;
