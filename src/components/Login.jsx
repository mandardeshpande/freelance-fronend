import React from 'react';



export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.handleOnClickOfSubmit = this.handleOnClickOfSubmit.bind(this);

        this.state ={
            email:'',
            password:'',
            type:'',
            isSignInProgress:false
        }
    }

    handleOnInputChange(e){
        this.setState({
            [e.currentTarget.name] :e.currentTarget.value
        })

    }

    handleOnClickOfSubmit(event) {
        event.preventDefault();
        this.setState({isSignInProgress:true});
        this.props.handleLogin(this.state);
    }

    render() {
    const signText = (this.state.isSignInProgress)?'Signing you in':'Sign In'
        return ((this.props.showLogin && <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input name="email" type="email" className="form-control" placeholder="Email address" required autoFocus onChange={this.handleOnInputChange}/>
        <label  htmlFor="inputPassword" className="sr-only">Password</label>
        <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handleOnInputChange} required/>
        <input name="type" type="text" className="form-control" placeholder="type" onChange={this.handleOnInputChange} required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this.state.isSignInProgress} onClick={this.handleOnClickOfSubmit}>{signText}</button>
    </form>));
    }
}