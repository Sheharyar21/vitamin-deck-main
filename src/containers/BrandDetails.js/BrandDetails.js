import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

const BrandDetails = () => {
  const { slug } = useParams();
  const [brand, setBrand] = useState({});
  useEffect(() => {
    axios
      .get(`brands/single/${slug}`)
      .then((success) => {
        setBrand(success.data);
      })
      .catch((e) => {
        message.error("an error occured while retrieving data" + e);
      });
  }, []);
  return (
    <>
      {brand.description !== undefined && (
        <Row gutter={[16, 16]}>
          <Col offset={1} sm={20} className="gutter-row" md={8} span={8}>
            <div style={{width:"60%" , margin:"0 auto"}}>
              <img
                src={process.env.REACT_APP_BASE_IMAGE_PATH + brand.image}
                alt={"banner-image"}
              />
            </div>
          </Col>
          <Col md={14} sm={20} offset={0} span={14} style={{borderLeft:"1px solid #cecece", paddingLeft:"25px"}}>
            <div>
              <h1>{HTMLReactParser(brand.name)}</h1>
              <h4>Description</h4>
              <hr />
              <p>{HTMLReactParser(brand.description)}</p>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default BrandDetails;
