("media", media.file);
const mediaType = file ? doCheckFileType() : null // to check the media type

axios.post('/addNewPost', formData, {
    params: {
        userId: userData._id,
        postText: postText,
        mediaType: mediaType
    },
    headers: {
        "Content-Type": "multipart/form-data"
    }
}).then((response) => {
    console.log(response, "response from backend after image upload req gone from front end")
    if (response ?. data ?. loadError) {
        navigate('/page404')
    }
    if (response ?. data ?. upload) {
        console.log("inside modal change ")
        // to set new useradata
        // dispatch(setUserData(response.data.userData[0]))
        // modal close
        dispatch(setPostModal(false))
    }
}).catch((error => {
    localStorage.clear()
    navigate('/')
}))}// fuction check type of fileconst doCheckFileType = () => {
const mediaType = media ?. file ?. type ?. split('/')
return(mediaType[0])}const doSwal = () => {
alert("no content")
Swal.fire({icon
