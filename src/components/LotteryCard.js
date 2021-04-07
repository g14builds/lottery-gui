import React from 'react'
import { Card } from "react-bootstrap"
import treasure_chest from './../img/treasure.png'
import web3 from './../web3'
import lottery from "./../lottery"

class LotteryCard extends React.Component {
    
    async enterLottery(){

        const accounts = await web3.eth.getAccounts();

        await lottery.methods.enter().send({
        from: accounts[0],
        value: 1000000000000000000
        })
    }

    render(){

        return (

            <Card className="main-card">
                <Card.Body>
                    <div className="float-right">
                        <a href="//ropsten.etherscan.io/address/0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF#readContract" 
                        target="_blank" 
                        title="Contract address: 0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF"
                        rel="noreferrer">
                            View Contract
                        </a>
                    </div>
                  <img src={treasure_chest} alt="treasure chest" />
                  <h2>Jackpot: 	{web3.utils.fromWei(this.props.balance.toString())} ETH</h2>
                  <hr />
                  <button className="float-right" onClick={this.enterLottery}>
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