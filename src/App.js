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
            isLoading:true

        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading:false});
    }

    handleLogin(data) {
        localStorage.setItem("type", data.type);
        if (data.type === 'buyer') {
            authBuyer(data.email, data.password).then((response) => {
                this.setState({
                    loginSuccess: true,
                    showLogin: false,
                    type: data.type
                });
                localStorage.setItem("UserId", response.data.userId);
            }).catch((err) => {
                console.error(err);
            })
        } else if (data.type === 'seller') {
            authSeller(data.email, data.password).then((response) => {
                this.setState({
                    loginSuccess: true,
                    showLogin: false,
                    type: data.type
                });
                localStorage.setItem("UserId", response.data.userId);
            }).catch((err) => {
                console.error(err);
            })
        }
    }

    render() {
        let dashBoard = null;
        if (this.state.loginSuccess && !this.state.isLoading) {
            dashBoard = (this.state.type === 'buyer') ? <div className="card"><BuyerDashBoard/></div> :
                <div className="card"><SellerDashBoard/></div>;
        }

        return (
            <div className="App">
                <Login showLogin={this.state.showLogin} handleLogin={this.handleLogin}/>
                {dashBoard}
            </div>
        );
    }
}

export default App;
