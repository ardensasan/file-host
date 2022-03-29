import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Main = () =>{
    const { user, isAuthenticated, isLoading} = useAuth0()
    if (isLoading) {
        return <div>Loading ...</div>;
      }    
    return isAuthenticated ? <div>
        <h2>Welcome {user?.name}</h2>
        <p>{user?.email}</p>
        <img src={user?.picture} alt={user?.name}/>
        <LogoutButton/>
    </div> : <LoginButton/>
}

export default Main