import React from 'react';
import { Card } from 'react-bootstrap';
import './WrongNetworkCard.css'

class WrongNetworkCard extends React.Component {

    render(){
        return(
            <div>
                <Card className="wrong-network-card">
                    <Card.Body>
                        <h2>Wrong Network</h2>
                        <p>Please switch to the Ropsten test network and reload the dApp.</p>
                    </Card.Body>
              </Card>
            </div>
        );
    }
}

export default WrongNetworkCard;