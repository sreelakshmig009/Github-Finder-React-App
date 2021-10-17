import React from 'react';
import {Link} from "react-router-dom";


const UserItem = (props) => {


  return (

          <div className="col-sm">
                  <div className="card" style={{width: "18rem", marginBottom:"2rem"}}>
                      <img className="card-img-top" src={props.user.avatar_url} alt="Card image cap" />
                      <h5 className="card-title text-center">{props.user.login}</h5>
                      <Link to={`/user/${props.user.login}`} className="btn btn-dark">More</Link>
            </div>
        </div>
   
    
  )

  
}

export default UserItem
