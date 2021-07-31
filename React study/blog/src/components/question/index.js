import React, { Component } from 'react';
import './index.css'

export default class Question extends Component{
    
    render(){
        return (
            <div className="modal">
                <div  className="modalBody">
            <div>
                <div>
                            <img onClick={(e) => {
                                e.preventDefault();}} className="closeimg" src="/img/close.png"/>
                </div>

                <div>
                   <span className="content_title"> 질문을 마음껏 작성해주세요 :)</span>
                </div>
            </div>

            <div>
                <textarea className="content"/>
            </div>

            <div className="tagediv">
                <input placeholder="전공 태그 (쉼표로 구분해주세요)" className="tage_input" />
            </div>
                    <div>
                        <input className="publishing" type="button" value="게시"></input>
                    </div>

        </div>
            </div>)
    }
}

