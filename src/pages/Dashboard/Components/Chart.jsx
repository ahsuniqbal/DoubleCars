import React,{useState,useEffect} from 'react'
import { Label, Input, Row, Col, ListGroup,ListGroupItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DownArrow from '../../../assets/DownArrow.png';
import ChartDisplay from '../../../assets/ChartDisplay.PNG';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import '../Styles/Chart.css'


function Chart (){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
        <div className='dashboard-chart-main'  style={{marginLeft: window.innerWidth >= 600 ? '296px' : ''}}>
            <Row>
                <Col style={{padding:'1rem 2rem'}}>
                <UncontrolledDropdown>
                    <DropdownToggle caret className='dashboard-chart-brop-button'>
                        Past 6 Months
                        <img src={DownArrow} className='dashboard-chart-downArrow'/>
                    </DropdownToggle>
                    <DropdownMenu className='dashboard-chart-dropdown'>
                        <DropdownItem className='dashboard-chart-drop-items'>Past 8 Months</DropdownItem>
                        <DropdownItem className='dashboard-chart-drop-items'>Past 10 Months</DropdownItem>
                        <DropdownItem className='dashboard-chart-drop-items'>Past 12Months</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Col>
            </Row>

            <Row>
                <Col lg='7'>
                    <img  src={ChartDisplay} className='chart-image'/>
                </Col>
                <Col  lg='4' className='label-checkbox-col'>
            
            <FormControl style={{float:'right'}}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox className='label-checkbox'/>}label="Email Leads"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox className='label-checkbox'/>}label="Text Leads"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox className='label-checkbox'/>}label="Phone Leads"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox className='label-checkbox'/>}label="Map Views"/>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox className='label-checkbox'/>}label="Website Clicks"/>
                </FormGroup>
            </FormControl>
                    {/* <ListGroup>
                        <ListGroupItem>
                            <Label checked className='dashboard-checkbox'>
                            <Input type="checkbox" />Email Leads
                            </Label><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label checked className='dashboard-checkbox'>
                            <Input type="checkbox" />Text Leads
                            </Label><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label checked className='dashboard-checkbox'>
                            <Input type="checkbox" />Phone Leads
                            </Label><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label checked className='dashboard-checkbox'>
                            <Input type="checkbox" />Map Views
                            </Label><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Label checked className='dashboard-checkbox'>
                            <Input type="checkbox" />Website Clicks
                            </Label><br/>
                        </ListGroupItem>
                    </ListGroup> */}
                    {/* <Label checked className='dashboard-checkbox'>
                        <Input type="checkbox" />Email Leads
                    </Label><br/>
                    <Label check className='dashboard-checkbox'>
                        <Input type="checkbox" />Text Leads
                    </Label><br/>
                    <Label check className='dashboard-checkbox'>
                        <Input type="checkbox" />Phone Leads
                    </Label><br/>
                    <Label check className='dashboard-checkbox'>
                        <Input type="checkbox" />Map Views
                    </Label><br/>
                    <Label check className='dashboard-checkbox'>
                        <Input type="checkbox" />Website Clicks
                    </Label><br/> */}
                </Col>
            </Row>
          
        </div>
    )
}
export default Chart