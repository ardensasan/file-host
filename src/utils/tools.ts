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
        return `${window.location.protocol}//${window.location.host}/assets/file-types-placeholder/document.png`
    }
    if (['application/zip','application/rar'].includes(mimetype)) {
        return `${window.location.protocol}//${window.location.host}/assets/file-types-placeholder/compressed.png`
    }
}

export const displayFile = (mimetype: string, handle: string) => {
    const type = (mimetype.split('/'))[0] || ''
    if (type === 'image') {
        return `${process.env.REACT_APP_FILE_URL}/${handle}`
    }
    if (['text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document',''].includes(mimetype)) {
        return `${window.location.protocol}//${window.location.host}/assets/file-types-placeholder/document.png`
    }
    if (['application/zip','application/rar'].includes(mimetype)) {
        return `${window.location.protocol}//${window.location.host}/assets/file-types-placeholder/compressed.png`
    }
}