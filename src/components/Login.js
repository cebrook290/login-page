import React from "react";


export default class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-md-4 col-md-4 mx-auto p-2 border border-info rounded-3">
                        <h3>Login</h3>
                        <hr></hr>
                        <form className="form-signin">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"></input>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else. We're the good villains!</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"></input>
                                <label className="form-check-label" for="rememberMe">Remember Me</label>
                            </div>
                             <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )    
    }
}       
            
            
            

