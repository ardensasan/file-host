import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Loading from "../../components/Loading"
import Navbar from "../../components/Navbar"
import { FileListState, File } from "./types"

const Files = () => {
    const { user: { sub: user_id = '' } = {}, isLoading } = useAuth0()
    const navigate = useNavigate()
    const [fileListState, setFileListState] = useState<FileListState>({ files: [], isFetching: true })

    const handleGetFiles = async () => {
        const { data: { result: files = [] } = {} } = await axios.post('http://localhost:3001/files', { user_id })
        setFileListState({ ...fileListState, files, isFetching: false })
    }

    useEffect(() => {
        handleGetFiles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { files = [], isFetching = true } = fileListState
    return <Fragment>
        <Navbar />
        {isFetching && isLoading && <Loading />}
        {!isFetching && !isLoading && files.map(({ _id = '', filename = '' }: File) => {
            return <Button onClick={() => navigate(`/file/${_id}`)}>{filename}</Button>
        })}
        {/* {!fileListState.isFetching && <Upload />} */}
    </Fragment>
}

export default Files