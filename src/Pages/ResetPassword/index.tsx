import { Alert, Button, Container, List, TextField } from "@mui/material"
import axios from "axios"
import React, { ChangeEvent, useState } from "react"
const ResetPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const handleResetPassword = async () => {
        var config: any = {
            method: 'POST',
            url: 'https://dev-ahn5wgpa.us.auth0.com/dbconnections/change_password',
            headers: { 'content-type': 'application/json' },
            data: {
                client_id: 'tKZj5erCThmRBo0M53n8NigcI0leJehi',
                email,
                connection: 'Username-Password-Authentication'
            }
        };
        const { data = '' } = await axios(config)
        setMessage(data)
    }

    const handleEmailOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value = '' } = {} } = event
        setEmail(value)
    }

    return <Container maxWidth="xs">
        {message &&
            <List>
                <Alert severity="success">{message}</Alert>
            </List>}
        <List>
            <TextField label="Email" placeholder="email@example.com" fullWidth onChange={handleEmailOnChange}></TextField>
        </List>
        <List>
            <Button fullWidth onClick={handleResetPassword}>Reset Password</Button>
        </List>
    </Container>
}

export default ResetPassword