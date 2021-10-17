import React, { Component } from 'react'

export class User extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
  }


  render() {

    const {
      name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable
    }= this.props.user;

    return (
        <div className="card mb-3" style={{maxWidth:"540px", marginLeft:"1rem"}}>
  <div className="row no-gutters" style={{marginLeft:"1rem"}} >
    <div className="col-md-4">
      <img src={avatar_url} className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text"><strong>Bio </strong>{bio}</p>
        <p className="card-text"><small className="text-muted">Location: {location}</small></p>
      </div>
    </div>
  </div>
  <div className="card mb-3" style={{maxWidth:"540px", marginLeft:"1rem", marginRight:"1rem"}}>
    <h5>Public repos : {public_repos}</h5>
    <h5>Public repos : {public_gists}</h5>
    <h5>Followers : {followers}</h5>
    <h5>GitHub Account : <a href={html_url} target="blank">Click Here!</a></h5>
  </div>
</div>
    )
  }
}

export default User
