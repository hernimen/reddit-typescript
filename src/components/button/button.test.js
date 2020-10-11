import { act, configure, fireEvent, render, screen } from '@testing-library/react'
import React from 'react';
import Button from '.'

const handleClick = jest.fn()

configure({
    testIdAttribute: 'data-test'
})

describe('Button component', () => {

    beforeEach(() => {
        render(
            <Button onClick={handleClick} dataTest='test'>
                <p>Test children</p>
            </Button>)
    })

    it('Should mount the button', () => {
        expect(screen.getByTestId('test-button')).toBeDefined()
    })

    it('Should see the child text ', () => {
        expect(screen.getByTestId('test-button')).toHaveTextContent('Test children')
    })

    it('Should click the button', done => {
        act(() => {
            const buttonTest = screen.getByText('Test children');
            fireEvent.click(buttonTest)
            done()
        })
        expect(handleClick.mock.calls.length).toEqual(1)
    })
})