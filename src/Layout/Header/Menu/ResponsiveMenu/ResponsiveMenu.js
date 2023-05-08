import React, {useEffect, useState} from 'react';
import NavLogo from '../../../../assets/images/logo-min.png'
import Cross from '../../../../assets/images/close_icon.png'
import {Link, NavLink, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import * as actionCreators from "../../../../store/actions/menuActions";
import {Button, Drawer} from "antd";
import {Menu, Dropdown, message, Space, Divider} from 'antd';
import './ResponsiveMenu.css'
import {CaretDownFilled,CloseOutlined,CaretRightFilled, DownOutlined, UserOutlined} from '@ant-design/icons';


import {
    MenuUnfoldOutlined
} from '@ant-design/icons';

const ResponsiveMenu = (props) => {

    let navigate = useHistory();
    
    const [dropdown, setDropdown] = useState(false);
    const [subdropdown, setSubdropdown] = useState(false);

    const {menus} = useSelector(({menus}) => menus);

    const dispatch = useDispatch()

    const NavImage = (<a onClick={()=>changeUrl("/")}><img className="res-nav-logo" src={NavLogo} alt="menu-logo"/></a>)

    useEffect(() => {
        dispatch(actionCreators.storeMenus())
    }, [])
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const humDropdown = () => {
        setDropdown(current => !current);
    };
    const humSubdropdown = () => {
        setSubdropdown(current => !current);
    };
    const changeUrl = (url) => {
        navigate.push(url)
        onClose()
    }
    return (
        <div>
            <>
                <Button style={{border: "none"}} onClick={showDrawer} className="p-0">
                    <space><MenuUnfoldOutlined style={{fontSize: '32px',color:'#0b9545'}}/></space>
                </Button>
                <Drawer title={NavImage} placement="left" closable={false} extra={
                    <CloseOutlined onClick={onClose} alt="cross"/>
                }
                        visible={visible}
                >
                    {/*
                    old menu commented
                    
                    {menus && menus.map((menu, index) => (
                        <>
                            <Space key={index} direction="vertical" size="middle" style={{display: 'flex'}}>
                                <Dropdown  className='drpdn' overlay={(<Menu>
                                    <Menu.ItemGroup>
                                        {menu.collections.map((firstChild, firstIndex) => (
                                            firstChild.parentCollections.length === 0 ? <Menu.Item
                                                    key={firstIndex}
                                                    >
                                                <a className='test' onClick={() => changeUrl(`/products/${menu.slug}/${firstChild.slug}`)}>{`${firstChild.name}`}</a>
                                                </Menu.Item> : <SubMenu
                                                    // onTitleClick={() => changeUrl(`/products/${menu.slug}/${firstChild.slug}`)}
                                                    key={firstIndex}
                                                    title={`${firstChild.name}`}>
                                                    <a onClick={()=>changeUrl(`/products/${menu.slug}/${firstChild.slug}`)}>
                                                        {firstChild.parentCollections.map((secondChild, secondIndex) =>
                                                            <Menu.Item
                                                                key={secondIndex}><a
                                                                onClick={()=>changeUrl(`/products/${menu.slug}/${firstChild.slug}/${secondChild.slug}`)}>
                                                                {secondChild.name}
                                                            </a>
                                                            </Menu.Item>)}
                                                    </a>
                                                </SubMenu>
                                            )
                                        )}
                                    </Menu.ItemGroup>
                                </Menu>)}>
                                    <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        {menu.name} <CaretDownFilled/>
                                    </Link>
                                </Dropdown>
                            </Space>
                            <Divider type={"horizontal"}/>
                        </>
                    ))} */}
                    <ul className="humburger-manu">
          
                    {menus && menus.map((menu, index) => (
                        <React.Fragment key={menu.id.toString()}>
                            <li>
                                <NavLink style={{width: "100%"}}
                                         to={`/products/${menu.slug}`}>
                                    {menu.name} <CaretDownFilled onClick={humDropdown} style={{"float": "right"}}/>
                                    {dropdown && <ul className="subdropdown">
                                        {menu.collections &&
                                        menu.collections.map((collection,index) => (
                                            <React.Fragment key={index}>
                                                <li>
                                                    {collection.parentCollections.length ===0?
                                                        <Link onClick={onClose} to={`/products/${menu.slug}/${collection.slug}`}>{collection.name}</Link>:
                                                        <a>
                                                        {collection.name}
                                                        {collection.parentCollections.length !== 0 && (
                                                            <CaretRightFilled
                                                                onClick={humSubdropdown}
                                                                className="pt-3"
                                                                style={{float: "right"}}
                                                            />
                                                        )}
                                                        {console.log("sub123",subdropdown)}
                                                        {subdropdown &&
                                                        <ul className="second-manu">
                                                            {collection.parentCollections.map((coll) => (
                                                                    <li>
                                                                        <Link onClick={onClose} to={`/products/${collection.slug}/${coll.slug}`}>
                                                                            {coll.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                        </ul>}
                                                    </a>}
                                                </li>

                                            </React.Fragment>
                                        ))}
                                    </ul>}
                                </NavLink>
                            </li>
                          
                        </React.Fragment>
                    ))}
                </ul>
                </Drawer>
            </>

        </div>
    );

}

export default ResponsiveMenu;
//<Dropdown.Button
//                 overlay={msadenu}
//                 buttonsRender={([leftButton, rightButton]) => [
//                     <>
//                     <Link>
//                         value
//                     </Link>
//                     </>
//                     ,
//                     React.cloneElement(<UserOutlined/>),
//                 ]}
//             >
//                 With Tooltip
//             </Dropdown.Button>