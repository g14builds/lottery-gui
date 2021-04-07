import React from 'react'
import { Card } from "react-bootstrap"
import treasure_chest from './../img/treasure.png'
import _ from "lodash"

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
                  {this.props.players.length} entries , {_.uniq(this.props.players).length} players

                  <hr />

                  Last winner: <a rel="noreferrer" href={"https://ropsten.etherscan.io/address/" + this.props.lastWinner } target="_blank" >{this.props.lastWinner}</a>
          
                </Card.Body>
              </Card>
        );
    }
}


export default LotteryCard;