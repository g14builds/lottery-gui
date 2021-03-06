import './App.css'
import web3 from "./web3"
import React from 'react'
import lottery from './lottery'
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import WrongNetworkCard from './components/WrongNetworkCard'
import LotteryCard from "./components/LotteryCard"

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

    this.setState({ network: await web3.eth.net.getNetworkType() })
    this.setState({ manager: await lottery.methods.manager().call() })
    this.setState({ balance: await web3.eth.getBalance(lottery.options.address) })
    this.setState({ players: await lottery.methods.getPlayers().call() })
    this.setState({ lastWinner: await lottery.methods.lastWinner().call() })

  }

  async enterLottery(){

    const accounts = await web3.eth.getAccounts();

    console.log(accounts);

    await lottery.methods.enter().send({
    from: accounts[0],
    value: 1000000000000000000
    })
}


  render() {
    return (
      <div className="App">

        
        <Container>
          <Row>
            <Col lg />
            <Col md>
            <h1><sup>the</sup> Ropsten Lottery</h1>

            <div className="text-center pub-buttons">

            <a href="//ropsten.etherscan.io/address/0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF#readContract" 
                target="_blank" className="btn btn-outline-dark"
                title="Contract address: 0xcAadC4090fb0E750336Ef816a6fd6Cf9D5B34CBF"
                rel="noreferrer">
                    View Contract
                </a>

            <a href="https://faucet.ropsten.be/" 
                target="_blank" className="btn btn-outline-dark"
                title="Ropsten rETH faucet"
                rel="noreferrer">
                    rETH Faucet
                </a>
                

            </div>

              { this.state.network === 'ropsten' 
              ? <LotteryCard 
                  enterLotteryMethod={this.enterLottery}
                  lastWinner={this.state.lastWinner}
                  players={this.state.players} 
                  balance={this.state.balance} /> 
              : <WrongNetworkCard/> 
              }

            </Col>
            <Col lg />
          </Row>
        </Container>
      </div>
    );
  }
    
}

export default App;
