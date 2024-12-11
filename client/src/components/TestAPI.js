import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestAPI = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api'); // Proxy forwards this to http://localhost:5000/api
        setData(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? data : 'Loading...'}</div>;
};

export default TestAPI;
