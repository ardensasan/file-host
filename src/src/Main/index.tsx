import { PickerOverlay } from 'filestack-react';
const Main = () => {
    return <PickerOverlay apikey={"AISzuYn89Q3WgkHBDELhBz"} onSuccess={(res:any) => console.log(res)} onUploadDone={(res:any) => console.log(res)}></PickerOverlay>
}

export default Main