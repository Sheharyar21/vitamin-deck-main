import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import star from "../../assets/images/star.png";
import React from "react";
import ReactHtmlParser from 'react-html-parser';

const Detail=(props)=>{
    let abc=props.description
    return(
        <section className="productDetail">
            <div className="container">
                <div className="col-md-12">
                    <Tabs>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Reviews(5)</Tab>
                            <Tab>Q&A</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="general-content">
                                <div>{ ReactHtmlParser(ReactHtmlParser(props.description)) }</div>
                                {/*<div dangerouslySetInnerHTML={{ __html:  '<h1>Hi there!</h1>'}} />*/}
                                 {/*{props.description }*/}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="reviews-stars">
                                <div className="reveiws-repeater">
                                    <img src={star}/>
                                    <h6>By: biojoe79 on 4/22/2019</h6>
                                    <h4>A+ Value</h4>
                                    <p>Great option to get essential amino acids into your diet. Gotta love
                                        allstarhealth.com!</p>
                                </div>
                                <div className="reveiws-repeater">
                                    <img src={star}/>
                                    <h6>By: biojoe79 on 4/22/2019</h6>
                                    <h4>A+ Value</h4>
                                    <p>Great option to get essential amino acids into your diet. Gotta love
                                        allstarhealth.com!</p>
                                </div>
                                <div className="reveiws-repeater">
                                    <img src={star}/>
                                    <h6>By: biojoe79 on 4/22/2019</h6>
                                    <h4>A+ Value</h4>
                                    <p>Great option to get essential amino acids into your diet. Gotta love
                                        allstarhealth.com!</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="general-content">
                                <div className="general-repater">
                                    <h2>Lorem ipsum Dummy text</h2>
                                    <p>
                                        Ship to an address within the United States (including U.S.
                                        territories)
                                    </p>
                                </div>
                                <div className="general-repater">
                                    <h2>Lorem ipsum Dummy text</h2>
                                    <p>
                                        Ship to an address within the United States (including U.S.
                                        territories)
                                    </p>
                                </div>
                                <div className="general-repater">
                                    <h2>Lorem ipsum Dummy text</h2>
                                    <p>
                                        Ship to an address within the United States (including U.S.
                                        territories)
                                    </p>
                                </div>
                                <div className="general-repater">
                                    <h2>Lorem ipsum Dummy text</h2>
                                    <p>
                                        Ship to an address within the United States (including U.S.
                                        territories)
                                    </p>
                                </div>
                            </div>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </section>
    )
}
export default Detail
