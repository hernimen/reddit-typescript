import React from 'react';
import DateParser from '../../utils/dateParser';

interface PostProps {
    id: number;
    title: string;
    author: string;
    date: number;
    image?: string;
    comments: number;
    clicked: boolean;
    handleClick: (id: number) => void;
    handleDismiss: (id: number) => void;
}

const Post = ({ id, title, author, date, image, comments, clicked, handleClick, handleDismiss }: PostProps) => {
    return (
        <div data-test="post-component" onClick={() => handleClick(id)}>
            <div data-test="title">
                {title}
            </div>
            <span data-test="author">
                {author}
            </span>
            <span data-test="date">
                {DateParser.parseDateIntoTimeAgo(date)}
            </span>
            {clicked &&
                <div> FUI CLICKEADO </div>}
            <span>{image}</span>
            <span data-test="comments">{comments} comments</span>
            <div onClick={() => handleDismiss(id)}>Dismiss Post</div>
        </div>
    )
}

export default React.memo(Post);