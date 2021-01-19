import React from 'react';

export interface BlogDetailProps {
    content?: string
}

function BlogDetail() {
    return (
        <div className="BlogDetail">
            리액트 블로그 시작합니다.
        </div>
    );
}

BlogDetail.defaultProps = {
    content: '리액트 블로그 시작합니다!'
}

export default BlogDetail;

