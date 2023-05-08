import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../assets/css/all.css'
import {increment,decrement,remove} from "../../store/actions/cartActions";
import "./Header.css"
 import {connect} from 'react-redux'
import SearchNavigationBar from "./SearchNavigationBar/SearchNavigationBar";
import TopBar from "./TopBar/TopBar";
class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            isOpen:false,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.remove = this.remove.bind(this);
    }
    increment(id) {
        this.props.increment(id)
    }
    decrement(id) {
        this.props.decrement(id)

    }
    remove(id) {
        this.props.remove(id)
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    render() {
        return (
            <div>
                <TopBar/>
                <SearchNavigationBar/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems,
        isAuthenticated: state.auth.isAuthenticated,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => {
            dispatch(decrement(id))
        },
        increment: (id) => {
            dispatch(increment(id))
        },
        remove: (id) => {
            dispatch(remove(id))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);