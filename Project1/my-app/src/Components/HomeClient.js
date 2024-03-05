import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './HomeClient.css';

const HomeClient = () => {
  const { clientId } = useParams(); // Retrieve the client ID from the URL

  const [clientData, setClientData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Fetch client data based on the client ID
    const fetchClientData = async () => {
      try {
        const clientResponse = await fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php`);
        const clientData = await clientResponse.json();
        const client = clientData.find(client => client.id === parseInt(clientId));
        setClientData(client);
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };

    // Fetch portfolio data based on the client ID
    const fetchPortfolioData = async () => {
      try {
        const portfolioResponse = await fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=${clientId}`);
        const portfolioData = await portfolioResponse.json();
        setPortfolioData(portfolioData);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchClientData();
    fetchPortfolioData();
  }, [clientId]); // Fetch data when the client ID changes

  if (!clientData || !portfolioData) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  // Calculate total number of items, stocks, and portfolio value
  const totalItems = portfolioData.length;
  const totalStocks = portfolioData.reduce((total, item) => total + item.amount, 0);
  const totalPortfolioValue = portfolioData.reduce((total, item) => total + item.value, 0);


  const top3Stocks = portfolioData
    .sort((a, b) => b.value - a.value) // Sort portfolio data by value in descending order
    .slice(0, 3); // Take the top 3 stocks




  return (
    <div className="MainContainer">
      <div className="ClientContainer">
        <h2>{clientData.firstname} {clientData.lastname}</h2>
        <p>Client ID: {clientData.id}</p>
        <p>City: {clientData.city}</p>
        <p>Country: {clientData.country}</p>
        <p>Email: {clientData.email}</p>
      </div>
      <div className="PortfolioSummary">
        <h3>Portfolio Summary</h3>
        <p>Total Number Items: {totalItems}</p>
        <p>Total Number Stocks: {totalStocks}</p>
        <p>Total Portfolio Value: ${totalPortfolioValue.toFixed(2)}</p>
      </div>
      <div className="Top3Stocks">
        {top3Stocks.map((stock, index) => (
          <div key={index} className="StockContainer">
            <div className="StockItem">
              <p>{stock.symbol}</p>
              <p>Value: ${stock.value.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="AllStocks">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Amount</th>
              <th>Close</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((stock, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/company/${stock.symbol}`}>{stock.symbol}</Link>
                </td>
                <td>{stock.name}</td>
                <td>{stock.amount}</td>
                <td>${stock.close.toFixed(2)}</td>
                <td>${stock.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default HomeClient;
