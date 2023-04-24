import React from 'react'
import UserResult from '../components/users/UserResult'

function Home() {
  return (
    <>
      {/* <h1>{process.env.REACT_APP_GITHUB_TOKEN}</h1> */}
      <UserResult/>
    </>
  )
}

export default Home