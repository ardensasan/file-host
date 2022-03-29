import { useEffect } from "react";
import { Props } from "./types"

const Error = ({errorCode = '404'}: Props) =>{
    useEffect(() => {
        document.title = "404 Page Not Found"
     }, []);
    return <img src={'https://http.cat/404'} alt="" width={'100%'} height={'100%'}/>
}

export default Error