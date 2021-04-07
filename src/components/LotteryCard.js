import React from 'react'
import { Card } from "react-bootstrap"
import treasure_chest from './../img/treasure.png'
import web3 from './../web3'
import lottery from "./../lottery"

class LotteryCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    
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
                  <img src={treasure_chest} alt="treasure chest" />
                  <h2>Jackpot: 	&#x39E;{web3.utils.fromWei(this.props.balance.toString())}</h2>
                  <hr />
                  <button className="float-right" onClick={this.enterLottery}>
                    Buy Entry
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