import React from 'react';
import './SelectClient.css';
import ClientOption from './ClientOption.js';

class SelectClient extends React.Component {
  handleChange = (e) => {
    const clientId = e.target.value;
    console.log("Selected client ID:", clientId); // Add this line
    this.props.clientHandler(clientId);
  }

  render() {
    if (this.props.clients && this.props.clients.length > 0) {
      return (
        <select className="select-css" onChange={this.handleChange}>
          <option value="0">Choose a Client...</option>
          {this.props.clients.map(client => (
            <ClientOption key={client.id} client={client} /> // Fixed variable name from 'client' to 'client'
          ))}
        </select>
      );
    } else {
      return null;
    }
  }
}

export default SelectClient;
