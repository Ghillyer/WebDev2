import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectClient from './SelectClient.js';
import './HomeHome.css';

const HomeHome = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate(); // Move useNavigate hook here

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php";
        const response = await fetch(url);
        const jsonData = await response.json();
        setClients(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClients();
  }, []); // Empty dependency array to fetch data only once

  const handleClientSelection = (clientId) => {
    navigate(`/client/${clientId}`);
  };

  return (
    <main>
      <SelectClient clients={clients} clientHandler={handleClientSelection} />
    </main>
  );
};

export default HomeHome;
