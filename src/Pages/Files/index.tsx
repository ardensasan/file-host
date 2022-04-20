import { useAuth0 } from "@auth0/auth0-react"
import { Button, Container, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useRef, useState } from "react"
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
    const [colNum, setColNum] = useState<number>(0)
    const imageListRef = useRef<any>()
    const { files = [], isFetching = true, isUploading } = fileListState
    const handleGetFiles = async () => {
        const { data: { result: files = [] } = {} } = await axios.post(`${process.env.REACT_APP_API_URL}/files`, { filter: { user_id } })
        setFileListState({ ...fileListState, files, isFetching: false, isUploading: false })
    }

    const handleOpenUploadDialog = () => {
        setFileListState({ ...fileListState, isUploading: true })
    }

    const handleCloseUploadDIalog = () => {
        setFileListState({ ...fileListState, isUploading: false })
    }

    useEffect(() => {
        handleGetFiles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (imageListRef.current && colNum === 0) {
            setColNum(Math.floor(imageListRef.current.clientWidth / 200))
        }
    })
    return <Fragment>
        <Navbar />
        <Container >
            {isFetching && isLoading && <Loading />}
            {isUploading && <Upload handleCloseUploadDialog={handleCloseUploadDIalog} handleGetFiles={handleGetFiles} />}
            {!isFetching && !isLoading && <Fragment><Button fullWidth variant="contained" style={{ marginTop: "20px" }} onClick={handleOpenUploadDialog}><UploadIcon />Upload</Button>
                <ImageList sx={{ width: "100%", height: "100%" }} rowHeight={200} ref={imageListRef} cols={colNum}>
                    {files.map((file: File) => (
                        <ImageListItem key={file._id} sx={{ height: 200 }}>
                            <img
                                style={{ height: 200 }}
                                src={displayThumbnail(file.mimetype, file.handle)}
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
            </Fragment>
            }</Container>
    </Fragment>
}

export default Files