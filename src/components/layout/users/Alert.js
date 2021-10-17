import React from 'react';

const Alert = (props) => {
  return (
    props.alert !== null &&  
    <div className="alert alert-dark" role="alert">
   {props.alert.msg}
  </div>
  )
}

export default Alert;