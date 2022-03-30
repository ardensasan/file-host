import { useAuth0 } from "@auth0/auth0-react"
import { Container, TextField } from "@mui/material";

const Profile = () => {
    const { user, isLoading } = useAuth0()
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return <Container>
        <TextField/>
        <TextField/>
        <TextField/>
        <p>{user?.name}</p>
    </Container>
}

export default Profile