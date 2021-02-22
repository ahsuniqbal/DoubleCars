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
     
  const path=window.location.pathname
  const [products,setProducts]=useState([])
  const [savedProductId, setSavedProductId] = useState(false);
  const [saveIcon, setSaveIcon] = useState(false);

  useEffect(()=>{
      ShowSearchResults()
  },[])
  const ShowSearchResults = () => {
      GetSearchResult().then(doc => {
          setProducts(doc)
          console.log(doc)
          setSavedProductId(path.split('/')[2])
          
      })
      .catch(error => {
          alert(error.message);
      });
  }
  // save car function
 
  const saveCarFunc = (productId) => {
      console.log('pd',productId)
      var userId;
      if(localStorage.getItem("userId") && localStorage.getItem("userId") !== "undefined"){
          userId = localStorage.getItem('userId')
      }else{
          alert('You need to login First')
        
      }
      const obj = {
          productId,userId
      }
     
      postSaveCar(obj)
      .then(doc => {
          console.log(doc)
          if(doc.code==-1){
              alert(doc.message)
          }
          else{
              console.log(doc.saveId)
              setSaveIcon(doc.saveId)
             //  setSavedProductId(doc.saveId)
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
                {
                    !saveIcon ? 
                    <Bookmark color="#000000" size={20} className = "un-save-gallery-icon" 
                    onClick={() =>  saveCarFunc(savedProductId) }/> :

                    
                    <FontAwesomeIcon icon={faBookmark} className = "save-gallery-icon"  
                     onClick={() =>  saveCarFunc(savedProductId) }/> 
                 }
                
                   
                
            </div>
        </div>    
    );
};

export default Gallery;