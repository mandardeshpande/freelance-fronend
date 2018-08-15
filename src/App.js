import React, {Component} from 'react';
import Login from './components/Login'
import './styles/App.css';
import BuyerDashBoard from "./components/Buyer/BuyerDashBoard";
import SellerDashBoard from "./components/Seller/SellerDashBoard";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginSuccess: false,
            showLogin:true,
            type:''
        };

        this.handleLogin = this.handleLogin.bind(this);
    }


    handleLogin(data) {
        if (data.email === 'mandar@gmail.com' && data.password === 'password') {
            this.setState({
                loginSuccess: true,
                type:data.type,
                showLogin:false
            })
        }
    }

    render() {
        let dashBoard = null;
        if(this.state.loginSuccess){
            dashBoard = (this.state.type === 'buyer')?<BuyerDashBoard/>:<SellerDashBoard/>;
        }

        return (
            <div className="App">
                <Login showLogin={this.state.showLogin} handleLogin={this.handleLogin}/>
                <div className="card">{dashBoard}</div>
            </div>
        );
    }
}

export default App;
