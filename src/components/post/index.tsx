import React from 'react';
import DateParser from '../../utils/dateParser';

interface PostProps {
    title: string;
    author: string;
    date: number;
    image?: string;
}

const Post = ({ title, author, date, image }: PostProps) => {
    return (
        <div data-test="post-component">
            <div data-test="title">
                {title}
            </div>
            <span data-test="author">
                {author}
            </span>
            <span data-test="date">
                {DateParser.parseDateIntoTimeAgo(date)}
            </span>
            <span>{image}</span>
        </div>
    )
}

export default React.memo(Post);