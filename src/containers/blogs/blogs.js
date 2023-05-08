import React, {useEffect} from 'react'
import './blogs.css'
import {message} from 'antd'
import {useSelector, useDispatch} from "react-redux";
import {storeAllBlogs} from "../../store/slices/blogSlice";
import axios from "axios";
import {Link} from "react-router-dom";
import moment from "moment";
import HTMLReactParser from "html-react-parser";
const Blogs = ()=>{
    const {blogs} = useSelector(({blogs}) => blogs)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('blogs/').then(success=>{
            let blogs =  success.data
            dispatch(storeAllBlogs(blogs))
        }).catch(error=>{
            message.error("someting went wrong",error)
        })
    },[])
    return(
        <>
        <section className='blog_banner'>
            <div className='blog-overlay'>
                <h1>Blog</h1>
            </div>
        </section>
        <section className='blogs'>
            <div className='blog-main'>
                {blogs && blogs.map((blog,index)=>(
                    <div className='blogbox' key={index}>
                        <h2><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h2>
                        <span>{moment(blog.createdAt).format('MMMM Do, YYYY')}</span>
                        <p>
                            {HTMLReactParser(blog.description)}
                        </p>

                    </div>
                ))}
                <div className='blogbox'>
                    <h2><a href='#'>Do Multivitamins Work? The Uses Of Multivitamins</a></h2>
                    <span>March 15, 2022</span>
                    <p> 
                        &nbsp;There are certain diseases caused in human being all around the 
                        globe, especially in Pakistan, due shortage of nutrition in their body, 
                        which does not
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Imported Supplements Brands in Pakistan</a></h2>
                    <span>March 15, 2022</span>
                    <p> 
                        &nbsp;Health is an essential function of your life to be carried out well. 
                        Although most humans are born with a properly functioning body, 
                        some aren’t.
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Vitamin E Uses And Side Effects</a></h2>
                    <span>March 12, 2022</span>
                    <p> 
                        &nbsp;Vitamins e is a fat-soluble substance that stays inside the body to 
                        perform its function. Vitamin E is an essential vitamin required by your
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>The Importance of Vitamins And its Uses</a></h2>
                    <span>March 10, 2022</span>
                    <p> 
                        &nbsp;Vitamins are an essential fueling substance for the human body to 
                        make their features reliable as vitamins are of several kinds. All of it
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Vitamin C Uses and Side Effects.</a></h2>
                    <span>March 10, 2022</span>
                    <p> 
                        &nbsp;Several vitamins are present inside a human being and are provided 
                        through external sources, food subsidiaries as the primary source, 
                        and food supplements formulated
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Vitamin B Uses and Side Effects</a></h2>
                    <span>March 10, 2022</span>
                    <p> 
                        &nbsp; Vitamins are of 13 kinds you might be familiar with the most of them 
                        as eight are from the B vitamin category. All the
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Vitamin A uses and side effects</a></h2>
                    <span>March 8, 2022</span>
                    <p> 
                        &nbsp;Vitamins are an essential substance required by the body to fuel up 
                        and function. They are used for different purposes, each to perform 
                        its own.
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Best Vitamin C Serum In (2022)</a></h2>
                    <span>March 2, 2022</span>
                    <p> 
                        &nbsp;Many people wonder if Vitamin C is good for skincare or not. 
                        Researchers and dermatologists have determined that Vitamin C is 
                        actually very useful for
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Why are condoms flavoured? The ultimate guide using proper condoms</a></h2>
                    <span>March 1, 2022</span>
                    <p> 
                        &nbsp;Condoms were introduced to prevent pregnancy and as a barrier 
                        method of contraception. Intimacy is a sexual desire aroused in every 
                        human being either of
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>Imported Best Pain Relievers in Pakistan</a></h2>
                    <span>February 28, 2022</span>
                    <p> 
                        &nbsp;Suffering from pain isn’t a good experience for anybody either of any 
                        age as this can cause weakness and tiredness. In this fast-paced world 
                        where
                    </p>
                </div>
                <div className='blogbox'>
                    <h2><a href='#'>6 Best Caltrate Tablets Price in Pakistan</a></h2>
                    <span>February 19, 2022</span>
                    <p> 
                        &nbsp;Caltrate is one of the topmost brands to provide its customers with 
                        the best solution with calcium supplements all over the world and has 
                        gained
                    </p>
                </div>
            </div>
        </section>
        
        </>
    )

}
export default Blogs