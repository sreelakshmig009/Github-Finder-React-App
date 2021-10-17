import Alert from "./users/Alert"
import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
      if(this.state.text === "") {
        this.props.setAlert("Please enter something", "No input detected")
      }else {
      this.props.searchUser(this.state.text);
      this.setState({text: ""});
  
      }
      }

  onChange = (e) =>{
      this.setState({[e.target.name] : e.target.value});
  }

  render() {
  
      return (

      
        <form onSubmit={this.onSubmit} className="form-inline" >
        <input onChange={this.onChange} value={this.state.text} className="form-control mr-sm-2" type="search" name="text" placeholder="Type something" />
        <input className="btn btn-outline-success my-2 my-sm-0" type="submit" placeholder="Search"/>
        <button onClick={this.props.clearUser} className="btn btn-light btn" style={{marginLeft:"1rem"}}>Clear</button>
        </form>

    )
    }


}

export default Search
