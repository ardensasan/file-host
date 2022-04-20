export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const displayThumbnail = (mimetype: string, handle: string) => {
    if (['image/jpg','image/jpeg','image/png'].includes(mimetype)) {
        return `${process.env.REACT_APP_FILE_URL}/resize=height:200/${handle}`
    }
    if (['text/csv'].includes(mimetype)) {
        return 'https://via.placeholder.com/150'
    }
}