// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitPassword: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = error => {
    this.setState({showSubmitPassword: true, errorMsg: error})
  }

  onSuccessLogin = () => {
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  onsubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showSubmitPassword} = this.state

    return (
      <div className="login-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="form-container" onSubmit={this.onsubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="trend-logo"
          />
          <label className="lable" htmlFor="username">
            USERNAME
          </label>
          <input
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
            id="username"
            type="text"
          />
          <label className="lable" htmlFor="password">
            PASSWORD
          </label>
          <input
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
            id="password"
            type="password"
          />
          <button className="btn1" type="submit">
            Login
          </button>
          {showSubmitPassword && <p className="error">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
