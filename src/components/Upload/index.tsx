import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { PickerOverlay } from 'filestack-react';
import { Props } from './types';

const Upload = ({handleCloseUploadDialog, handleGetFiles}:Props) => {
    const { user: { sub: user_id = '' } = {} } = useAuth0()
    const handleUploadDone = (uploadResponse: any) => {
        const { filesUploaded = [] } = uploadResponse
        axios.post(`${process.env.REACT_APP_API_URL}/upload`, { user_id, filesUploaded })
    }
    return <PickerOverlay
        apikey="AISzuYn89Q3WgkHBDELhBz"
        onUploadDone={(res: any) => {
            handleUploadDone(res)
            handleGetFiles()
        }}
        onClose={()=>handleCloseUploadDialog}
    />
}

export default Upload