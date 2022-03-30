import { useAuth0 } from "@auth0/auth0-react"
import { Fragment } from "react";
import Files from "../../Pages/Files";
import { Button, Container, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
    const { isAuthenticated, isLoading, loginWithPopup } = useAuth0()
    const navigate = useNavigate()
    if (isLoading) return <div>Loading ...</div>
    return !isAuthenticated ? <Container maxWidth='xs'>
        <List>
            <ListItem>
                <Button onClick={() => loginWithPopup()} size="medium" variant="contained" fullWidth> Login </Button>
            </ListItem>
            <ListItem>
                <Button onClick={() => navigate('/reset-password')} fullWidth>Reset Password</Button>
            </ListItem>
        </List>


    </Container> : <Fragment>
        <Files />
    </Fragment>
}

export default Home