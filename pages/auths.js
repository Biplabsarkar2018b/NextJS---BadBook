import { useSession } from "next-auth/react"

const AuthsConfirm = () => {
    const {data:session} = useSession();
  return (
    <div>
        {session ? 
        session.user.name
        
        :<h1>No User</h1>}
    </div>
  )
}

export default AuthsConfirm