export interface FileState {
    file?: File
    isFetching: boolean
}

interface File {
    _id: string
    user_id: string
    filename: string
    mimetype: string
    size: number
    url: string
}