import React from 'react'
import UserClass from './UserClass'
import useOnlineState from '../../utils/useOnlineState'

function About() {
  const onlineStatus = useOnlineState()
  if(onlineStatus === false) return (<h1>Check Network</h1>)
  return (
    <div>
        <h1 className='text-xl m-3 text-center'>About</h1>
       <UserClass ></UserClass>
    </div>
  )
}

export default About