import React, { useState, useEffect} from 'react'
import { Col, Container, Row, Input, Label } from 'reactstrap'
import '../styles/SavedSearches.css';
import car1 from '../../../assets/LC1.png'
import {getUserSavedSearches} from '../api/GetRequest'
import {removeUserSearch} from '../api/PatchRequest'

const SavedSearches = () => {

    const [saved,setSaved] = useState(null)

    useEffect(() => {
        getUserSavedSearches(localStorage.getItem("userId"))
        .then(doc => {
            console.log(doc)
            if(doc.length > 0){
                setSaved(doc)
            }
        })
        .catch(e => {
            console.log(e.message)
        })
    },[])

    const remove = (id) => {
        //remove ap
        const obj = {
            remove : 1
        }
        removeUserSearch(id,obj)
        .then(doc => {
            window.location.reload()
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    const layout = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            table.push(
                <Col xs="12" sm="6" md="3">
                    <div className="grid-parent">
                        <Row>
                            <Col xs="7" style={{paddingLeft: '14px', paddingRight: '3px'}}>
                                <img loading="lazy" src={list[i].image_one} className="img-fluid" alt="Car 1" height = '100px'/>
                            </Col>

                            <Col xs="5" style={{paddingLeft: '3px', paddingRight: '14px'}}>
                                <img loading="lazy" src={list[i].image_two} className="img-fluid" alt="Car 1" />
                                <img loading="lazy" src={list[i].image_three} className="img-fluid" alt="Car 1" />
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop: '20px', marginBottom: '17px'}}>
                            <Col xs="12">
                                <h6 className="cursor-pointer" onClick={() => console.log(list[i].filter_query)}>{list[i].title}</h6>
                            </Col>
                            <Col xs="12">
                                <Label className="active-filters">{list[i].count} filters activated &nbsp;·&nbsp; <span onClick={() => remove(list[i].saved_search_id)}>Remove</span></Label>
                            </Col>

                        </Row>
                    </div>
                </Col>
            )
        }
        return table
    }

    return (
        <Container className="saved-searches">
            <Row>
                <Col xs="9">
                    <h4>Saved Searches <span>{saved ? saved.length : 0}</span></h4>
                </Col>
                <Col md="1">
                    <Label className="float-right mt-2">Sort by</Label>
                </Col>
                <Col xs="2">
                    <Input type="select">
                        <option value="relevance">Relevance</option>
                        <option value="price">Price</option>
                    </Input>
                </Col>
            </Row>


            <Row>
                {
                    saved ? layout(saved) : null
                }
            </Row>
        </Container>
    )
}

export default SavedSearches
