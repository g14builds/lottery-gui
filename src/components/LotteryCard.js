import React from 'react'
import { Card } from "react-bootstrap"
import treasure_chest from './../img/treasure.png'

class LotteryCard extends React.Component {
    

    render(){

        return (
            <Card className="main-card">
                <Card.Body>
                        <div className="btn-group btn-group-sm float-right">
                    <a href="https://faucet.ropsten.be/" 
                        target="_blank" className="btn btn-outline-secondary"
                        title="Ropsten rETH faucet"
                        rel="noreferrer">
                            Faucet
                        </a>
                        <a href="//ropsten.etherscan.io/address/0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF#readContract" 
                        target="_blank" className="btn btn-outline-secondary"
                        title="Contract address: 0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF"
                        rel="noreferrer">
                            View Contract
                        </a>
                    </div>
                  <img src={treasure_chest} alt="treasure chest" height="200" width="171" />
                  <h2>Jackpot: {this.props.balance/1000000000000000000} ETH</h2>
                  <hr />
                  <button className="float-right" onClick={() => this.props.enterLotteryMethod()}>
                    Buy Entry (1 ETH)
                  </button>
                  {this.props.players.length} entries 

                  <hr />

                  Last winner: {this.props.lastWinner}
          
                </Card.Body>
              </Card>
        );
    }
}


export default LotteryCard;