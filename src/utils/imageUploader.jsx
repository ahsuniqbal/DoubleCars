import {} from '../components/Firebase/database'
import Resizer from "react-image-file-resizer";

const firebase = require('firebase').default


const resizeImage = (file) => {
    let quality = 100;
  //4MB image file
    if (file.size > 4000000) {
      quality = 90;
    }
  //8MB image file
    if (file.size > 8000000) {
      quality = 85;
    }
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1400,
        1000,
        "JPEG",
        quality,
        0,
        (uri) => {
            console.log("uri",uri)
          resolve(uri);
        },
        "file"
      );
    });
};

export const uploadImage = async (file,path) => {
    var resizedFile = await resizeImage(file)
    return new Promise((resolve, reject) => {
        fetch(URL.createObjectURL(resizedFile))
            .then(res => res.blob())
            .then(blob => {
                console.log(blob)
                var storage = firebase.storage()
                const uploadTask = storage.ref(path).put(blob);
                uploadTask.on('state_changed',
                (snapshot)=>{
                    //console.log(snapshot)
                },(error)=>{
                    reject(error)
                },(complete) =>{
                    storage
                    .ref(path)
                    .getDownloadURL().then(url => {
                        console.log('url',url)
                        resolve(url)
                    }).catch(err => {
                        reject(err)
                    })
                })
            }).catch(err => {
                reject(err)
            })
    })
}