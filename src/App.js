import React, {Component} from 'react';
import Login from './components/Login'
import './styles/App.css';
import BuyerDashBoard from "./components/Buyer/BuyerDashBoard";
import SellerDashBoard from "./components/Seller/SellerDashBoard";
import {authBuyer, authSeller} from "./Service/AuthService";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginSuccess: false,
            showLogin: true,
            type: '',
            isLoading:true,
            isSignInProgress:true

        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading:false});
    }

    handleLogin(data) {
        localStorage.clear();
        localStorage.setItem("type", data.type);
        if (data.type === 'buyer') {
            authBuyer(data.email, data.password).then((response) => {
                this.setState({
                    loginSuccess: true,
                    showLogin: false,
                    type: data.type,
                    isSignInProgress:false,
                    userId:response.data.userId
                });
                localStorage.setItem("UserId", response.userId);
            }).catch((err) => {
                console.error(err);
            })
        } else if (data.type === 'seller') {
            authSeller(data.email, data.password).then((response) => {
                this.setState({
                    loginSuccess: true,
                    showLogin: false,
                    type: data.type,
                    isSignInProgress:false,
                    userId:response.data.userId
                });
                localStorage.setItem("UserId", response.userId);
            }).catch((err) => {
                console.error(err);
                this.setState({isSignInProgress:false})
            })
        }
    }

    render() {
        let dashBoard = null;
        if (this.state.loginSuccess && !this.state.isLoading) {
            dashBoard = (this.state.type === 'buyer') ? <div className="card"><BuyerDashBoard/></div> : <div className="card"><SellerDashBoard/></div>;
        }

        return (
            <div className="App">
                {(!this.state.isSignInProgress && !this.state.isLoading && !this.state.loginSuccess) ? <div className="alert alert-danger col mx-auto">SignIn Failed</div> : null }
                <Login showLogin={this.state.showLogin} handleLogin={this.handleLogin}/>
                {dashBoard}
            </div>
        );
    }
}

export default App;
