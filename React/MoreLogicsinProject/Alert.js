import React from 'react'

export default function Alert(props) {
  const Capitialize=(word)=>
  {
     const c=word.toLowerCase();
     return c.charAt(0).toUpperCase()+c.slice(1);
  }
  return (
   props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{Capitialize(props.alert.type)}</strong>: {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
