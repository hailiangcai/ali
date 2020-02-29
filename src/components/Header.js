/*
 * @Author: za-sunxiaoju
 * @Date: 2020-02-28 18:29:12
 * @LastEditors: za-sunxiaoju
 * @LastEditTime: 2020-02-29 14:43:23
 * @Description: file content
 */
import React, { PureComponent } from 'react';
import './Header.css'

class Header extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            selectMenu: '1',
            menuData: [
                {
                    id: '1',
                    name: '首页',
                    herf: '#'
                },
                {
                    id: '2',
                    name: '社会招聘',
                    herf: '#'
                },
                {
                    id: '3',
                    name: '校园招聘',
                    herf: '#'
                },
                {
                    id: '4',
                    name: '了解阿里',
                    herf: '#'
                },
                {
                    id: '5',
                    name: '个人中心',
                    herf: '#'
                }
            ]
        };
    }
    handleMenuClick = (id) => {
        if (id === this.state.selectMenu) return;
        this.setState({
            selectMenu: id
        });
    }
    render(){
        return (
            <div className='header'>
                <div className='main'>
                    <div className='header-menu'>
                        <a href="https://job.alibaba.com/zhaopin/index.htm" className="logo">
                            <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"  alt=""/>
                        </a>
                        <i style={{ fontStyle: 'normal',fontSize: '20px', margin: '0 10px'}}>|</i>
                        <i style={{fontStyle:'normal', fontSize:'14px', lineHeight:'54px'}}>社招官网</i>
                    </div>
                    <ul className='header-menu'>
                        {
                            this.state.menuData.map((item, index) => {
                                return (<li key={item.id}>
                                    <a className={this.state.selectMenu === item.id ? 'font-color' : ''} onClick={() => this.handleMenuClick(item.id)} href="##">{item.name}</a>
                                </li>)
                            })
                        }
                    </ul>
                    <div className="login" >
						欢迎来到阿里巴巴集团招聘！
                        <a href="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm%3Fspm%3Da2obv.11875486.0.0.25c2298e9fjWLr" target="_top">登录</a>
                        <span> | </span>
					    <a href="http://member1.taobao.com/member/newbie.html">注册</a>
					</div>
                </div>
            </div>
        )
    }
}

export default Header;