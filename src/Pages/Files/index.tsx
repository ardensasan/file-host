import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import Upload from "../../components/Upload"

const Files = () => {
    const { user: { sub: user_id = '' } = {} } = useAuth0()
    const [fileListState, setFileListState] = useState({ files: [], isFetching: false })

    const handleGetFiles = async () => {
        const { data: { result:files = [] } = {} } = await axios.post('http://localhost:3001/files', { user_id })
        setFileListState({...fileListState,files})
    }

    useEffect(() => {
        handleGetFiles()
    }, [])

    return <Fragment>
        <Navbar />
        <Upload />
    </Fragment>
}

export default Files