import React,{useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Gallery.css';
import { Bookmark } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {postSaveCar} from '../../../components/ProductCard/api/post';
import { GetSearchResult } from '../../Products/api/GetRequests';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Gallery = (props) => {

    // getting products
    const[products,setProducts]=useState([])
    useEffect(()=>{
        ShowSearchResults()
    },[])
    const ShowSearchResults = () => {
        GetSearchResult().then(doc => {
            setProducts(doc)
        })
        .catch(error => {
            alert(error.message);
        });
    }
   
    // save car function
    const [savedProductId, setSavedProductId] = useState(false);
    const saveCarFunc = (productId) => {
        var userId;
        if(localStorage.getItem("userId") && localStorage.getItem("userId") !== "undefined"){
            userId = localStorage.getItem('userId')
        }else{
            alert('You need to login First')
            return
        }
        const obj = {
            productId,userId
        }
        console.log('obj',obj)
        postSaveCar(obj)
        .then(doc => {
            if(doc.code==-1){
                alert(doc.message)
            }
            else{
                console.log(doc.saveId)
                setSavedProductId(doc.saveId)
            }
            
        })
        .catch(e => {
            alert(e.message)
        })
    }
    return(
        <div>    
            <ImageGallery
                items={props.items}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
            />
            <div className = "save-icon-gallery">
                {/* <FontAwesomeIcon icon={["far", "bookmark"]} color="gray" className = "save-gallery-icon"/> */}
               {products && products.map((item,index)=>{
                   return(
                    !savedProductId ? 
                    <Bookmark color="#000000" size={20} className = "un-save-gallery-icon" 
                    onClick={() =>  saveCarFunc(item.productId) }/> :

                    
                    <FontAwesomeIcon icon={faBookmark} className = "save-gallery-icon"  
                     onClick={() =>  saveCarFunc(item.productId) }/> 
                    
                   )
               })
                  
               }
                
                   
                
            </div>
        </div>    
    );
};

export default Gallery;