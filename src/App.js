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

            <Modal/>
        </div>
    );
}

// const Modal = () => { // 내충 내용 ~ }
function Modal() {
    // 컴포넌트 생성 법칙
    // 1. 반복적으로 html을 축약할 때
    // 2. 큰 페이지들
    // 3. 자주 변경되는 것들
    return (
        <>
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    )
}

export default App;
