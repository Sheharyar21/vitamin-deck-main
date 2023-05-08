import React from 'react';
import Header from "./Header/index";
import Footer from "./Footer/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Whatsapp from '../component/whatsapp';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
                {this.props.children}
                <Footer/>
                <Whatsapp/>
            </div>
        )
    }
}

export default Layout
