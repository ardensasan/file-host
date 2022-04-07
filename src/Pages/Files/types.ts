export interface FileListState {
    files: Array<File>
    isFetching: boolean
    isUploading: boolean
}

export interface File {
    _id: string
    user_id: string
    handle: string
    filename: string
    mimetype: string
    size: number
    url: string
}