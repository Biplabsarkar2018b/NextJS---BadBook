import { useSession, signIn, signOut } from "next-auth/react"

import React from 'react'

const LoginCompo = () => {
  const GoogleSignInHandler = async()=>{
    await signIn('google',{callbackUrl:"http://localhost:3000"})
  }
  return (
    <div>
      <button className="text-3xl w-full " onClick={GoogleSignInHandler}>
        Login With Google
      </button>
    </div>
  )
}

export default LoginCompo