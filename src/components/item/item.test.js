import React from 'react';
import Post from '.';
import { render, screen, configure } from '@testing-library/react';

configure({
    testIdAttribute: 'data-test'
});
const MockedProps = {
    id: 'j8jpic',
    title: 'How to get a random comment from a submission',
    author: 'Mr-Steal-Your-Script',
    date: '1602087435',
    image: 'example.jpg',
    comments: '87',
    clicked: false,
    handleClick: jest.fn(),
    handleDismiss: jest.fn()
}

describe('Post component', () => {
    const { title, author, date, image, comments, clicked, handleClick, handleDismiss } = MockedProps

    beforeEach(() => {
        render(<Post
            title={title}
            author={author}
            date={date}
            image={image}
            comments={comments}
            clicked={clicked}
            handleClick={handleClick}
            handleDismiss={handleDismiss}
        />)
    })

    it('Should render the title', () => {
        expect(screen.getByTestId('author'))
            .toHaveTextContent('Mr-Steal-Your-Script')
    });

    it('Should render the author', () => {
        expect(screen.getByTestId('author'))
            .toHaveTextContent('Mr-Steal-Your-Script')
    });

    it('Should render the date', () => {
        expect(screen.getByTestId('date'))
            .toHaveTextContent('4 days ago')
    });

    it('Should render the image', () => {
        expect(screen.getByTestId('image'))
            .toHaveProperty('src', 'http://localhost/example.jpg')
    });

    it('Should render the comments', () => {
        expect(screen.getByTestId('comments'))
            .toHaveTextContent('87 comments')
    });

    it('Should render the read div', () => {
        expect(screen.getByTestId('item-read'))
            .toBeDefined()
    });

    // it('Should hide the read dv', done => {

    //     act(() => {
    //         const image = screen.getByTestId('image')
    //         fireEvent.click(image)
    //         done();
    //     })

    //     expect(screen.getByTestId('item-read'))
    //         .toBeUndefined()
    // })
})
