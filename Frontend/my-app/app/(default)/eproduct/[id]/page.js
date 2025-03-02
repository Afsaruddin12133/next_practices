import React from 'react'

export default function page({params}) {
    const {id} = params;

    console.log(id);
    
  return (
    <div>
        <h1>Page {id}</h1>
    </div>
  )
}
