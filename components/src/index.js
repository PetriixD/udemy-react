import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                text="random text"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 4:00PM"
                text="random text2"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today at 5:00PM"
                text="random text3"
                avatar={faker.image.image()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
