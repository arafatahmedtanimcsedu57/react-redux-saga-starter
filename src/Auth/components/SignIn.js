import React, { Component } from "react"
import { Redirect } from "react-router-dom"


class SignIn extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const { token } = this.props
        if (token) return <Redirect to="/" />
        return (
            <div className="signIn main-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Log In</h1>
                    <div>
                        <label>User Name</label>
                        <input
                            type="text"
                            id="username"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button>
                            Sign In
                        </button>
                        {/* <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn