import { act, configure, fireEvent, render, screen } from '@testing-library/react';
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
        render(
            <List
            items={MockedPosts}
            handleclick={handleclick}
            handleDismiss={handleDismiss}
            handleRemovePosts={handleRemovePosts}
            handleLoadMorePosts={handleLoadMorePosts}
            isListActive={true}/>
        )
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should render the list', () => {
        expect(screen.getByTestId('list'))
    })

    it('Should call the handleLoadMorePosts', done => {
        let loadMoreButton;
        act(() => {
            loadMoreButton = screen.getByTestId('load-more-button')
            fireEvent.click(loadMoreButton)
            done();
        })

        expect(handleLoadMorePosts.mock.calls.length).toBe(1)
    })

    it('Should call the Dismiss All button', done => {
        let dismissButton;
        act(() => {
            dismissButton = screen.getByTestId('remove-all-button')
            fireEvent.click(dismissButton)
            done();
        })

        expect(handleRemovePosts.mock.calls.length).toBe(1)
    })
})