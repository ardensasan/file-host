export interface FileListState {
    files: Array<File>
    isFetching: boolean
}

export interface File {
    _id: string
    user_id: string
    filename: string
    mimetype: string
    size: number
    url: string
}