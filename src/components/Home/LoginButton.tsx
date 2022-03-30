import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";
import './styles.css'
const LoginButton = () => {
    const { loginWithPopup } = useAuth0();
    return <div className="centered">
        <Button onClick={() => loginWithPopup()} size="medium" variant="outlined"> Login </Button>
    </div>
}

export default LoginButton