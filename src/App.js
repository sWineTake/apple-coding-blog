/* eslint-disable */

import './App.css';
import {useState} from "react";


function App() {

    // let post = '강남 고기 맛집';
    let [titles, setter]= useState(
        [
            {title : '파이썬 독학', goodCnt : 0},
            {title : '남자 코트 추천', goodCnt : 0},
            {title : '우동 맛집', goodCnt : 0},
    ]);

    function goodCntAdd(index) {
        setter(obj => {
            const newObj = [...obj];
            obj[index] = {...obj[index], goodCnt : newObj[index].goodCnt + 1};
            return newObj;
        })
    }

    function change(index) {
        setter(obj => {
            const objElement = [...obj];

            for (const target of objElement) {
                if (target.title === '남자 코트 추천') {
                    target.title = '여자 코트 추천';
                }
            }

            return objElement;
        })
    }

    function orderBy() {
        let sort = [...titles].sort((a, b) =>
            a.title.localeCompare(b.title, 'ko', { sensitivity: 'base' })
        );
        setter(sort);
    }

    return (
        <div className="App">

            <div className="black-nav">
                <h4 style={{ fontSize: '16px'}}>React blog</h4>
            </div>

            <button onClick={orderBy}>가나다 순 정렬</button>

            {titles.map((obj, index) => (
                <div className="list" key={index}>
                    <button onClick={() => change(index)}>{obj.title} 변경</button>
                    <h4>{obj.title} <span onClick={() => goodCntAdd(index)}>👍🏻</span> {obj.goodCnt} </h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
        </div>
    );
}

export default App;
