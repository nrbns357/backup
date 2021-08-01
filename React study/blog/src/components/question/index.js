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
                <form>
                <input placeholder="전공 태그 (쉼표로 구분해주세요)" type="text" className="tage_input" />
                <input className="publishing" type="submit" value="게시"/>
                </form>
            </div>

        </div>
            </div>)
    }
}

