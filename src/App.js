import './App.css';
import web3 from "./web3";
import React from 'react';
import lottery from './lottery';
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import treasure_chest from './img/treasure.png'
import WrongNetworkCard from './components/WrongNetworkCard';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      manager: "",
      players: [],
      balance: 0,
      lastWinner: ""
    }
  }

  async componentDidMount(){

    const network = await web3.eth.net.getNetworkType();
    const manager = await lottery.methods.manager().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const players = await lottery.methods.getPlayers().call();
    const lastWinner = await lottery.methods.lastWinner().call();

    console.log(network);

    this.setState({ 
      manager, network, balance, players, lastWinner
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg />
            <Col md>
              { this.state.network == 'ropsten' ? "" : <WrongNetworkCard/> }
              <Card className="main-card">
                <Card.Body>
                  <img src={treasure_chest} />
                  <h2>Jackpot: 	&#x39E;{web3.utils.fromWei(this.state.balance.toString())}</h2>
                  <hr />

                  {this.state.players.length} players 

                  <hr />

                  Last winner: {this.state.lastWinner}
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg />
          </Row>
        </Container>
      </div>
    );
  }
    
}

export default App;
