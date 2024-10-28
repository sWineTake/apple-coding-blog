/* eslint-disable */

import './App.css';
import {useState} from "react";


function App() {

    // let post = '강남 고기 맛집';
    let [titles, setter]= useState(
        [
            {title : '파이썬 독학', goodCnt : 0, content: '파이썬 독학은 어렵지 않아요', createDate: '2021-02-17'},
            {title : '남자 코트 추천', goodCnt : 0, content: '올겨울은 남자 코트 추천', createDate: '2021-02-18'},
            {title : '우동 맛집', goodCnt : 0, content: '우동 맛집을 소개', createDate: '2021-02-19'},
    ]);

    let [selectedPost, setSelectedPost] = useState(0);

    // set 어쩌구 저쩌구 ~~
    let [modal, setModal] = useState(false);

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

    function modalOpen(index) {
        if (titles.length <= index) {
            setModal(false);
            return ;
        }

        if (modal && index === selectedPost) {
            setModal(false);
            setSelectedPost(null);
            return ;
        }

        setModal(true);
        setSelectedPost(index);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ fontSize: '16px'}}>React blog</h4>
            </div>

            <button onClick={orderBy}>가나다 순 정렬</button>

            {titles.map((obj, index) => (
                <div className="list" key={index}>
                    {/*<button onClick={() => change(index)}>{obj.title} 변경</button>*/}
                    <h4 onClick={() => modalOpen(index)}>{obj.title} <span onClick={() => goodCntAdd(index)}>👍🏻</span> {obj.goodCnt} </h4>
                    <p>{obj.createDate}</p>
                </div>
            ))}

            {modal === true ? <Modal
                    title={titles[selectedPost].title}
                    createDate={titles[selectedPost].createDate}
                    content={titles[selectedPost].content}
                    nextEvent={() => modalOpen(selectedPost + 1)}
                /> : null}
        </div>
    );
}

// const Modal = () => { // 내충 내용 ~ }
function Modal(props) {
    // 컴포넌트 생성 법칙
    // 1. 반복적으로 html을 축약할 때
    // 2. 큰 페이지들
    // 3. 자주 변경되는 것들
    return (
        <>
            <div className="modal">
                <h4>{props.title}</h4>
                <p>{props.createDate}</p>
                <p>{props.content}</p>
                <button onClick={props.nextEvent}>다음</button>
            </div>
        </>
    )
}

export default App;
