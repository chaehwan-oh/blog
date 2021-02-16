import React from 'react';
import './App.css';
import SideNav from "./components/SideNav/SideNav";
import {Write} from "./components/Write/Write";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import {Posts} from "./components/Posts/Posts";
import {Contact} from "./components/Contact/Contact";

export interface Menu {
    path: string,
    exact?: boolean,
    label: string,
    component: () => JSX.Element
}

function App() {
    let menus: Menu[] = [
        {
            path: "/posts",
            exact: false,
            label: "게시글 리스트",
            component: () => <Posts></Posts>
        },
        // {
        //     path: "/post/:postId",
        //     label: "상세 페이지",
        //     component: () => <BlogDetail></BlogDetail>
        // },
        {
            path: "/contact",
            exact: false,
            label: "문의",
            component: () => <Contact></Contact>
        },
        {
            path: "/write",
            exact: false,
            label: "글쓰기",
            component: () => <Write></Write>
        }
    ];

    return (
    <div className="App">
        <SideNav menus={menus}/>
    </div>
  );
}

export default App;
