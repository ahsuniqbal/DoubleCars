import React from'react'
import HeaderMain from './HeaderMain'
import Dealership from './Dealership'
import LowerMain from './LowerMain'

function FullViewHeader(){
    return(
        <div className='abc' styles = {{backgroundColor: 'white'}}>
         
            <HeaderMain/>
            <Dealership/>
            {/* <LowerMain/> */}
           
        </div>
    )
}
export default FullViewHeader