import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>oops !!!</h1>
        <h3>Something went wrong</h3>
        <h2>{error.status} {error.data}</h2>
    </div>
  )
}

export default Error