import React from 'react';
import './App.css';
import BlogDetail from "./components/BlogDetail/BlogDetail";

function App() {
  return (
    <div className="App">
        <BlogDetail content={'리액트 블로그 시작합니다.'}></BlogDetail>
    </div>
  );
}

export default App;
