import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import API from "../../utils/API";
import fzhead1 from '../../assets/images/fzhead1.png';
import hghead1 from '../../assets/images/hghead1.png';
import omhead1 from '../../assets/images/omhead1.png';
import "./Home.scss";

class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }


  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="homeBox">
      <h1 id="userTitle">Medieval Zombies</h1>
        <div className="spriteBox">
          <img src={fzhead1} className="sprite-bounce" alt="fz"></img>
          <img src={hghead1} className="sprite-bounce" alt="hg"></img>
          <img src={omhead1} className="sprite-bounce" alt="om"></img>
        </div>
        <br></br>
        <h4 id="homeAccount">Sign up for an account and play!</h4>
        {this.state.loggedIn ? (

          <Button color="danger" className="playBtn" block size= "lg"><a href="https://protected-sierra-25451.herokuapp.com/">Play!</a></Button>
        ) : (<></>)}
        <br></br>
      </div>
    );
  }
}

export default Home;