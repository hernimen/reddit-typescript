import React from 'react';
import { render, screen, configure } from '@testing-library/react';
import Detail from '.';

configure({
    testIdAttribute: 'data-test'
});

const MockedProps = {
    data: {
        title: 'How to get a random comment from a submission',
        author: 'Mr-Steal-Your-Script',
        thumbnail: 'example.jpg',
    }
}
describe('Detail component', () => {

    beforeEach(() => {
        render(<Detail
            item={MockedProps}
        />)
    })

    it('should render the title', () => {
        expect(screen.getByTestId('title')).toHaveTextContent('How to get a random comment from a submission')
    });

    it('should render the author', () => {
        expect(screen.getByTestId('author')).toHaveTextContent('Mr-Steal-Your-Script')
    });

    it('Should render the image', () => {
        expect(screen.getByTestId('detail-image'))
            .toHaveProperty('src', 'http://localhost/example.jpg')
    });
})