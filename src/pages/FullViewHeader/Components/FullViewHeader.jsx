import React from'react'
import HeaderMain from './HeaderMain'
import Dealership from './Dealership'
import LowerMain from './LowerMain'
import Footer from '../../../components/Footer'

function FullViewHeader(){
    return(
        <div className='abc'>
         
            <HeaderMain/>
            <Dealership/>
            <LowerMain/>
           
        </div>
    )
}
export default FullViewHeader