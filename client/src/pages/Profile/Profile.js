import React, { Component } from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import fzhead1 from '../../assets/images/fzhead1.png';
import hghead1 from '../../assets/images/hghead1.png';
import omhead1 from '../../assets/images/omhead1.png';

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        return (
            <div className="profilePage">
                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                        <div className="spriteBox">
                            <img src={fzhead1} className="sprite-bounce" alt="fz"></img>
                            <img src={hghead1} className="sprite-bounce" alt="hg"></img>
                            <img src={omhead1} className="sprite-bounce" alt="om"></img>
                            <br></br>
                            <br></br>
                        </div>
                        <Button color="danger" className="playBtn" block size= "lg"><a href="https://protected-sierra-25451.herokuapp.com/">Play!</a></Button>                        <br></br>
                    </div>
                    
                ) : (
                        <div className="noUser">
                            {!this.state.loading ? (
                                <>
                                    <h1>Please log in.</h1>
                                    <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                               <br></br>
                                </>
                            ) : (
                                    <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                                )}
                        </div>
                    )}
            </div>
        )
    }
}


export default Profile;