import { useAuth0 } from "@auth0/auth0-react"
import { Button, Container, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Loading from "../../components/Loading"
import Navbar from "../../components/Navbar"
import Upload from "../../components/Upload"
import UploadIcon from '@mui/icons-material/Upload';
import PageviewIcon from '@mui/icons-material/Pageview';
import { FileListState, File } from "./types"
import { displayThumbnail } from "../../utils/tools"

const Files = () => {
    const { user: { sub: user_id = '' } = {}, isLoading } = useAuth0()
    const navigate = useNavigate()
    const [fileListState, setFileListState] = useState<FileListState>({ files: [], isFetching: true, isUploading: false })
    const { files = [], isFetching = true, isUploading } = fileListState
    const handleGetFiles = async () => {
        const { data: { result: files = [] } = {} } = await axios.post('http://localhost:3001/files', { user_id })
        setFileListState({ ...fileListState, files, isFetching: false, isUploading: false })
    }

    const handleOpenUploadDialog = () => {
        setFileListState({...fileListState, isUploading: true})
    }
    
    const handleCloseUploadDIalog = () =>{
        setFileListState({...fileListState, isUploading: false})
    }
    
    useEffect(() => {
        handleGetFiles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Fragment>
        <Navbar />
        {isFetching && isLoading && <Loading />}
        {isUploading && <Upload handleCloseUploadDialog={handleCloseUploadDIalog} handleGetFiles={handleGetFiles}/>}
        {!isFetching && !isLoading && <Container>
            <Button fullWidth variant="contained" style={{marginTop: "20px"}} onClick={handleOpenUploadDialog}><UploadIcon/>Upload</Button>
            <ImageList sx={{ width: 400, height: 400 }}>
                {files.map((file: File) => (
                    <ImageListItem key={file._id}>
                        <img
                            src={displayThumbnail(file.mimetype,file.url)}
                            alt={file.filename}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={file.filename}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${file.filename}`}
                                    onClick={() => navigate(`/file/${file._id}`)}
                                >
                                    <PageviewIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>}
        {/* {!fileListState.isFetching && <Upload />} */}
    </Fragment>
}

export default Files