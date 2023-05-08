import React from 'react';
import Banners from "./Banners/Banners";
import PopularProducts from "./PopularProducts/PopularProducts";
import PopularCategories from "./PopularCategory/PopularCategory";
import Brands from "./Brands/Brands";

class Home extends React.Component{
      
    render(){
        return(
            <div>
                <Banners/>
                <PopularProducts/>
                <PopularCategories/>
                <Brands/>
        
               
            </div>
        )
    }
}
export default Home;
    