import React, { PureComponent } from 'react';
import './List.css'

class List extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            top: 50
        }
    }

    handleTimer = () => {
        const { listData } = this.props;
        const that = this;
        this.timer = setInterval(function(){
            const { top } = that.state;
            let t = listData.length * 50
            if(t > 300 ){
                if(-top < t-300){
                    that.setState({
                        top: top - 1
                    })
                }else{
                    that.setState({
                        top: 50
                    })
                }
            }else{
                clearInterval(this.timer)
            }
        }, 20)
    }
    componentDidMount() {
        this.handleTimer()
    }

    handleMouseUp = () => {
        clearInterval(this.timer);
    }

    handleMouseOut = () => {
        this.handleTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render(){
        const { listData } = this.props
        const { top } = this.state;
        return (
            <div className='list-main'>
                <div className='top'>
                    <div style={{float: 'left'}}>最新职位</div>
                    <div className='pos-more'>
                        <a href='##'>更多</a>
                    </div>
                </div>
                <ul className='positoon-list' style={{top: top}} onMouseOver = {this.handleMouseUp} onMouseOut = {this.handleMouseOut}>
                    {
                        listData.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <a href='##' className= 'position-list-name' >{item.name}</a>
                                    <div style={{display: 'inline', fontSize: '14px', color: '#999  '}}>{item.address}</div>
                                    <span style={{float: 'right'}}>{item.time}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default List;