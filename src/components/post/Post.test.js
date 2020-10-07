import React from 'react';
import Post from './Post';
import { render, screen, configure } from '@testing-library/react';

configure({
    testIdAttribute: 'data-test'
});
const MockedProps = {
    title: 'How to get a random comment from a submission',
    author: 'Mr-Steal-Your-Script',
    created_utc: '1602087435'
}

describe('Post component', () => {
    const { title, author, created_utc } = MockedProps

    beforeEach(() => {
        render(<Post title={title} author={author} date={created_utc} />)
    })

    it('Should render the title', () => {
        expect(screen.getByTestId('author'))
            .toHaveTextContent('Mr-Steal-Your-Script')
    });
})
