import React, { useEffect, useState } from "react";
import axios from "axios";
import { message,Row,Col } from "antd";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeSingleBlog } from "../../../store/slices/blogSlice";
import HTMLReactParser from "html-react-parser";
function Blog(props) {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`blogs/${slug}`)
      .then((success) => {
        dispatch(storeSingleBlog(success.data));
      })
      .catch((e) => {
        message.error("an error occured while retrieving data" + e);
      });
  }, []);
  const { blog } = useSelector(({ blogs }) => blogs);
  return (
    <>
      
        
          {blog.description !== undefined && (
              <Row gutter={16}>
            <Col offset={1} className="gutter-row" md={22} span={22}>
              <img
                src={process.env.REACT_APP_BASE_IMAGE_PATH + blog.image}
                alt={"banner-image"}
              />
              </Col>
              <Col md={22} offset={1} span={22}>
              <div>
                <p>{HTMLReactParser(blog.description)}</p>
              </div>
              </Col>
              
              </Row>
          )}
        
     
    </>
  );
}

export default Blog;
