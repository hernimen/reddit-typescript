import { configure, render, screen } from '@testing-library/react';
import React from 'react';
import List from '.';
import MockedPosts from '../../mocks/posts.mock';

const handleclick = jest.fn();
const handleDismiss = jest.fn();
const handleRemovePosts = jest.fn();
const handleLoadMorePosts = jest.fn();

configure({
    testIdAttribute: 'data-test'
})

describe('List component', () => {
    beforeEach(() => {
        render(<List
            items={MockedPosts}
            handleclick={handleclick}
            handleDismiss={handleDismiss}
            handleRemovePosts={handleRemovePosts}
            handleLoadMorePosts={handleLoadMorePosts}
            isListActive={true}
        />
        )
    })

    it('Should render the list', () => {
        expect(screen.getByTestId('list'))
    })

    // it('Should call the handleLoadMorePosts', () => {
    //     let loadMoreButton;
    //     act(() => {
    //         loadMoreButton = screen.getByTestId('load-more')
    //         fireEvent.click(loadMoreButton)
    //     })

    //     expect(loadMoreButton)
    // })
})