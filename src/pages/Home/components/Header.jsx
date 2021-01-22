import React from 'react';
import { Row, Col , Button, Label} from 'reactstrap';
import '../styles/Header.css';
// import headerVideo from '../../../assets/header-mov.mkv';

const Header = () => {
    //  useEffect(()=>{
    //           lazyLoadFunction()
    //         })
    //         const lazyLoadFunction= function() {
    //           var lazyloadImages;    
            
    //           if ("IntersectionObserver" in window) {
    //             lazyloadImages = document.querySelectorAll(".col-12 col-md-7 col-sm-6 right-cover-section");
    //             var imageObserver = new IntersectionObserver(function(entries, observer) {
    //               entries.forEach(function(entry) {
    //                   console.log('entry',entry)
    //                 if (entry.isIntersecting) {
    //                   var image = entry.target;
    //                   image.classList.remove("col-12 col-md-7 col-sm-6 right-cover-section");
    //                   imageObserver.unobserve(image);
    //                 }
    //               });
    //             });
            
    //             lazyloadImages.forEach(function(image) {
    //               imageObserver.observe(image);
    //             });
    //           } else {  
    //             var lazyloadThrottleTimeout;
    //             lazyloadImages = document.querySelectorAll(".col-12 col-md-7 col-sm-6 right-cover-section");
                
    //             function lazyload () {
    //               if(lazyloadThrottleTimeout) {
    //                 clearTimeout(lazyloadThrottleTimeout);
    //               }    
            
    //               lazyloadThrottleTimeout = setTimeout(function() {
    //                 var scrollTop = window.pageYOffset;
    //                 lazyloadImages.forEach(function(img) {
    //                     if(img.offsetTop < (window.innerHeight + scrollTop)) {
    //                       img.src = img.dataset.src;
    //                       img.classList.remove('col-12 col-md-7 col-sm-6 right-cover-section');
    //                     }
    //                 });
    //                 if(lazyloadImages.length == 0) { 
    //                   document.removeEventListener("scroll", lazyload);
    //                   window.removeEventListener("resize", lazyload);
    //                   window.removeEventListener("orientationChange", lazyload);
    //                 }
    //               }, 20);
    //             }
            
    //             document.addEventListener("scroll", lazyload);
    //             window.addEventListener("resize", lazyload);
    //             window.addEventListener("orientationChange", lazyload);
    //           }
    //         }

    return(
        <div>
            <section className = "align-items-center header-section">
                
                    <div className = "row header-main">
                 
                                <div className = "col-12 col-md-5 col-sm-6 left-cover-section width-1050">
                                    <h1 className = "cover-left-heading ml-3">
                                        Find the most desireable car
                                    </h1>
                                    <h5 className = "my-3 header-sub-head ml-3">
                                        Buy and sell cars with ease using our app!
                                    </h5>
                                    <div>
                                        <div className = "col-md-12" className = "">
                                            <Button className="ml-3 mt-4 download-button-cover" to="">Download App</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className = "col-12 col-md-7 col-sm-6 right-cover-section" style={{padding: '0'}}>
                                    <Label className = "header-right-car-label float-right">Toyota Supra</Label>
                                    {/* <video width="100%" controls autoPlay loop>
                                        <source src={headerVideo} type="video/mp4" />
                                    </video> */}
                                    {/* <img src = {Cover} alt = "Cover image" className = "img-fluid" width = "100%"/> */}
                                </div>
                          
                    </div>
                    
            </section>

            
    </div>
    )
}

export default Header;

// <section className = "d-flex align-items-center">
//                 <div className = "container-fluid">
//                     <div className = "row">
//                         <div className = "col-12">
//                             <Row>
//                                 <div className = "col-md-5 xs-6 sm-6 md-12 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column left-cover-section ">
//                                     <h1 className = "cover-left-heading ml-5">
//                                         Find the most desireable car
//                                     </h1>
//                                     <h5 className = "my-3 header-sub-head ml-5">
//                                         Buy and sell cars with ease using our app!
//                                     </h5>
//                                     <Row>
//                                         <Col md = "12" className = "">
//                                         <Button className="ml-5 mt-4 download-button-cover" to="">Download App</Button>
//                                         </Col>
//                                     </Row>
                                    
                                    
//                                 </div>

//                                 <div className = "col-lg-7  order-1 order-lg-2 right-cover-section">
//                                     {/* <img src = {Cover} alt = "Cover image" className = "img-fluid" width = "100%"/> */}
//                                 </div>
//                             </Row>
//                         </div>
//                     </div>
//                 </div>
//             </section>