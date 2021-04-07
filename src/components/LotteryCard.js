import React from 'react'
import { Card } from "react-bootstrap"
import treasure_chest from './../img/treasure.png'

class LotteryCard extends React.Component {
    

    render(){

        return (
            <Card className="main-card">
                <Card.Body>
                       
                  <img src={treasure_chest} alt="treasure chest" height="171" width="200" />
                  <h2>Jackpot: {this.props.balance/1000000000000000000} rETH</h2>
                  <hr />
                  <button className="btn btn-primary float-right" onClick={() => this.props.enterLotteryMethod()}>
                    Buy Entry (1 rETH)
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