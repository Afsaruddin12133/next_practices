import React from 'react'

export default function page({params}) {

    const {id} = params;
  return (
    <div>
        <h1>This is the {id} page</h1>
    </div>
  )
}
