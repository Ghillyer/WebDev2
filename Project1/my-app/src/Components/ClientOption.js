import React from 'react';

class ClientOption extends React.Component {
  render() {
    const { client } = this.props;
    const fullName = `${client.firstname} ${client.lastname}`;
    return <option value={client.id}>{fullName}</option>;
  }
}

export default ClientOption;