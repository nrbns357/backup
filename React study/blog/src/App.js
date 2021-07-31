/* eslint-disable */

import React, { Component} from 'react';
import './App.css';

import Question from './components/question/index';

// import TOC from "./components/TOC";
// import Subject from "./components/Subject";
// import Content from "./components/Content";


class App extends Component  {
  
  state = {
    isShowQuestionModal: false

  }

  onClickPlusButton() {
    this.setState(state => state.isShowQuestionModal = true)
  }

  onCloseModal() {
    this.setState(state => state.isShowQuestionModal = false)
  }

  render(){
    return(
      <div className="opso">
        {this.state.isShowQuestionModal &&  
          <Question
            onCloseModal={this.onCloseModal.bind(this)}
          /> 
        }
        <div className="header">
          <div className="header_Title">
                <img className="title_img" src="/img/opsologo.png" />
            <div className="input_div">
              <input className="header_input horizontal_center" type={Text}/>
              <div className="input_Search horizontal_center">
                <img className="input_Search_img center_alignment" src="/img/search.png"/>
              </div>
            <img 
            className="add_content horizontal_center" 
            src="/img/plus.png"
                onClick={this.onClickPlusButton.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     mode:'read',
  //     subject: { title: "WEB", sub:"world wide web!"},
  //     welcome:{title:'welcome',desc:'Hello React!!'},
  //     contents:[
  //       {id: 1, title:'HTML', desc:'HTML is for information'},
  //       {id: 2, title: 'css', desc: 'css is for design'},
  //       { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
  //     ]
  //   }
  // }  
  
  // render(){
  //   console.log('App render');
  //   var _title, _desc = null;
  //   if(this.state.mode === 'welcome'){
  //     _title = this.state.welcome.title;
  //     _desc = this.state.welcome.desc;
  //   }else if(this.state.mode === 'read'){
  //     _title = this.state.contents[0].title;
  //     _desc = this.state.contents[0].desc;
  //   }

  //   return (
  //   <div className="App">
  //       <Subject title = {this.state.subject.title}
  //       sub={this.state.subject.sub} 
  //       onChangePage={function(){
  //         this.setState({mode:'welcome'}); 
  //       }.bind(this)}/>
  //     <TOC 
  //     onChangePage={()=>{
  //       alert('hi');
  //     this.setState({mode:'read'});
  //     }}
  //     data = {this.state.contents}/>
  //       <Content title={_title} desc={_desc}/>
  //   </div>
//   );
//  }
}


export default App;
