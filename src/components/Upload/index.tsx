import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { PickerOverlay } from 'filestack-react';

const Upload = () => {
    const { user: { sub: user_id = '' } = {} } = useAuth0()
    const handleUploadDone = (uploadResponse: any) => {
        const { filesUploaded = [] } = uploadResponse
        axios.post('http://localhost:3001/upload', { user_id, filesUploaded })
    }
    return <PickerOverlay
        apikey="AISzuYn89Q3WgkHBDELhBz"
        onSuccess={(res: any) => console.log("sucess", res)}
        onUploadDone={(res: any) => handleUploadDone(res)}
    />
}

export default Upload