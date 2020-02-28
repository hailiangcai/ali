import React, { PureComponent } from 'react';
import './Banner.css';

class Banner extends PureComponent {
    constructor(props){
        super()
        this.hotText = [
            {name: 'JAVA', id: '1', href: '#'},
            {name: 'IOS', id: '2', href: '#'},
            {name: '数据', id: '3', href: '#'},
            {name: '安全', id: '4', href: '#'},
            {name: '搜索', id: '5', href: '#'},
            {name: '算法', id: '6', href: '#'},
            {name: '运营', id: '7', href: '#'},
            {name: '视觉', id: '8', href: '#'},
            {name: '交互', id: '9', href: '#'},
            {name: '前端', id: '10', href: '#'},
        ]
    }
    render () {
        return (
            <div>
                <div className="banner-main">
                    <img className="image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                    <div style={{position: 'absolute', top:0, left:0, width: '100%', height: '100%', background: 'rgba(31,56,88,0.40)'}}></div>
                    <div className="index-middle-box">
                        <div className="text-middle" style={{width: '490px'}}>
                            <p style={{fontSize: '54px', color: '#fff', lineHeight: '56px', fontFamily: 'Rufina-Bold'}} >If not now, when?</p>
                            <p style={{fontSize: '54px', color: '#fff', lineHeight: '56px', fontFamily: 'Rufina-Bold'}} >If not me, who?</p>
                            <p style={{fontSize: '34px', color: '#fff', marginBottom:'38px', lineHeight: '48px'}}>此时此刻，非我莫属！</p>
                            <div className="search-box" style={{width:'490px', height:'60px', position: 'relative', border:'0px', background:'none', margin:'0 auto'}}>
                                <div style={{width:'100%', height:'100%', background:'#fff', position:'absolute',opacity: '0.1', filter:'alpha(opacity=10)', zIndex: '-1'}}></div>
                                <input type="text" maxlength="30" placeholder="请输入职位关键词" className="search-text" />
                                <input class="search-btn" data-spm-click="gostr=/hr;locaid=searchPosition" type="submit" style={{border: '0', cursor: 'pointer', color:'#fff', background:'#F37327', fontSize:'14px', fontFamily:'PingFangSC-Regular',width: '92px', height: '40px', borderRadius:'3px', marginTop:'10px', marginLeft:'10px', position: 'relative', zIndex:'2',}} value="搜索"/>
                            </div>
                            <div class="hot-text" style={{textAlign:'center'}}>
                                <span>热门搜索：</span>
                                {
                                    this.hotText.map((item, index) => {
                                        return <a className="search-key" key={item.id} href={item.href} >{item.name}</a>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;