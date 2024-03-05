import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './HomeCompany.css';

const HomeCompany = () => {
    const { companyId } = useParams(); // Retrieve the company ID from the URL
    const [volumeData, setVolumeData] = useState([]);
    const [highLowData, setHighLowData] = useState([]);
    const [companyData, setCompanyData] = useState(null);
    const [volumeChartInstance, setVolumeChartInstance] = useState(null);
    const [highLowChartInstance, setHighLowChartInstance] = useState(null);

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await fetch(`https://webdev-stark.cs.kent.edu/~jsipahio/proj1api/companies.php`);
                const data = await response.json();
                const company = data.find(company => company.symbol.toLowerCase() === companyId.toLowerCase());
                setCompanyData(company);

                // Fetch volume data for the company after retrieving company data
                fetchVolumeData();
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        fetchCompanyData();
    }, [companyId]);
    
    useEffect(() => {
        const fetchHighLowData = async () => {
            try {
                const response = await fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=${companyId}`);
                const data = await response.json();
                setHighLowData(data); // Update highLowData, not volumeData
            } catch (error) {
                console.error('Error fetching high-low data:', error);
            }
        };
    
        fetchHighLowData(); // Fetch high-low data when companyId changes
    }, [companyId]);

    useEffect(() => {
        // Render volume chart when volumeData is available
        if (volumeData.length > 0) {
            renderVolumeChart();
        }
    }, [volumeData]);

    useEffect(() => {
        // Render high-low chart when highLowData is available
        if (highLowData.length > 0) {
            renderHighLowChart();
        }
    }, [highLowData]);

    const fetchVolumeData = async () => {
        try {
            const response = await fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=${companyId}`);
            const data = await response.json();
            setVolumeData(data);
        } catch (error) {
            console.error('Error fetching volume data:', error);
        }
    };

    const renderVolumeChart = () => {
        // Extract data for volume Chart.js
        const dates = volumeData.map(entry => entry.date);
        const volumes = volumeData.map(entry => parseInt(entry.volume));

        // Destroy existing volume chart instance if it exists
        if (volumeChartInstance) {
            volumeChartInstance.destroy();
        }

        // Chart.js rendering logic for volume chart
        const volumeCtx = document.getElementById('volumeChart');
        const newVolumeChartInstance = new Chart(volumeCtx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Volume',
                    data: volumes,
                    borderColor: 'blue',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Volume'
                        }
                    }
                }
            }
        });

        setVolumeChartInstance(newVolumeChartInstance);
    };

    const renderHighLowChart = () => {
        // Extract data for high-low Chart.js
        const dates = highLowData.map(entry => entry.date);
        const highs = highLowData.map(entry => parseFloat(entry.high));
        const lows = highLowData.map(entry => parseFloat(entry.low));

        // Destroy existing high-low chart instance if it exists
        if (highLowChartInstance) {
            highLowChartInstance.destroy();
        }

        // Chart.js rendering logic for high-low chart
        const highLowCtx = document.getElementById('highLowChart');
        const newHighLowChartInstance = new Chart(highLowCtx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'High',
                        data: highs,
                        borderColor: 'green',
                        borderWidth: 1,
                        fill: false
                    },
                    {
                        label: 'Low',
                        data: lows,
                        borderColor: 'red',
                        borderWidth: 1,
                        fill: false
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Price'
                        }
                    }
                }
            }
        });

        setHighLowChartInstance(newHighLowChartInstance);
    };

    if (!companyData) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="CompanyContainer">
            <div className="CompanyInfoContainer">
                <h2>{companyData.name}</h2>
                <p>Symbol: {companyData.symbol}</p>
                <p>Sector: {companyData.sector}</p>
                <p>Sub-industry: {companyData.subindustry}</p>
                <p>Address: {companyData.address}</p>
                <p>Exchange: {companyData.exchange}</p>
                <p>Website: {companyData.website}</p>
                <p>Description: {companyData.description}</p>
            </div>
            <div className="GraphContainer">
                <canvas id="volumeChart"></canvas>
            </div>
            <div className="GraphContainer">
                <canvas id="highLowChart"></canvas>
            </div>
        </div>
    );
};

export default HomeCompany;
