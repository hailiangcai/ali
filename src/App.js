import React from 'react';
import Header from './components/Header';
import Banner from './comtainer/Banner';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

const listData = [
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '1'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '2'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '3'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '4'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '5'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '三分钟前', id: '6'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '八分钟前', id: '7'},
  {name: '阿里集团高级测试工程师-杭州', address: '杭州', time: '五分钟前', id: '8'},
]

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div style={{width: '1180px', margin: '0 auto', padding: '10px', boxSizing: 'border-box', overflow: 'hidden'}}>
        <div style={{ width: '850px', display: 'inline-block'}}>
          <List listData={listData} />
        </div>
        <div style={{width:'310px', float :'right'}}>
          <a class="show-pic" href="https://www.aliyun.com/careers" style={{textAlign: 'center', lineHeight:'140px', margin: '20px 0 20px 20px'}}><img style={{width: '179px', verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png"/></a>
          <a class="show-pic" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?" style={{textAlign: 'center', lineHeight: '140px', margin: '20px 0 20px 20px'}}><img style={{width:'260px', verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"/></a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
