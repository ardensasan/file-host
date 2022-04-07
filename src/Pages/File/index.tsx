import { useAuth0 } from "@auth0/auth0-react"
import { Card, CardMedia, Container, List, ListItem, TextField, Typography } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Loading from "../../components/Loading"
import Navbar from "../../components/Navbar"
import { API_URL } from "../../utils/constants"
import { formatBytes } from "../../utils/tools"
import { FileState } from "./types"

const File = () => {
    const { user: { sub: user_id = '' } = {}, isLoading } = useAuth0()
    const { id = '' } = useParams()
    const [fileState, setFileState] = useState<FileState>({ file: undefined, isFetching: true })
    const navigate = useNavigate()
    const handleGetFiles = async () => {
        try {
            const { data: { result: file = {} } = {} } = await axios.post(`${API_URL}/file/${id}`, { user_id })
            setFileState({ ...fileState, file, isFetching: false })
        } catch (error) {
            navigate('/404')
        }
    }

    useEffect(() => {
        if (user_id && isFetching) handleGetFiles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const { file: { filename = '', mimetype = '', size = '', url = '' } = {}, isFetching = true } = fileState
    return <Fragment>
        <Navbar />
        {isFetching && isLoading && <Loading />}
        {!isFetching && !isLoading && <Container maxWidth="md">
            <List>
                <Card>
                    <CardMedia
                        component="img"
                        height="400"
                        width="120"
                        image="https://via.placeholder.com/400"
                        alt="green iguana"
                    />
                </Card>
                <ListItem>
                    <Typography>Filename : <strong>{filename}</strong></Typography>
                </ListItem>
                <ListItem>
                    <Typography>File Type : <strong>{mimetype}</strong></Typography>
                </ListItem>
                <ListItem>
                    <Typography>File Size &nbsp;: <strong>{formatBytes(parseInt(size.toString()))}</strong></Typography>
                </ListItem>
                <ListItem>
                    <Typography>Download Link:</Typography><TextField InputProps={{ readOnly: true }} value={url} fullWidth />
                </ListItem>
            </List>
        </Container>}

    </Fragment>
}

export default File