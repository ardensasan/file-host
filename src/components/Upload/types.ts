export interface Props{
    handleCloseUploadDialog: () => void
    handleGetFiles: ()=>Promise<void>
}