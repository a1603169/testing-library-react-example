import {act, fireEvent, render} from '@testing-library/react';
import Button from "./Button"

describe('Button Component (@testing-library/react)', () => {
  it('Component created without problem', () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  })
  it('button is HTML element', () => {
    const {getByText} = render(<Button />)
    const buttonElement = getByText('button');

    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  })
  it('Once button is clicked, p tag will be changed into button is changed', () => {
    const { getByText } = render (<Button />)
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    
    const p = getByText('Button is changed');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement)
  })
  it('Before the button is clicked, in the p tag, it is written to not clicked', () => {
    const { getByText } = render (<Button />)
    
    const p = getByText('Button is not changed');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement)
  })
  it('After button clicked 5sec, ptag says not clicked', () => {
    jest.useFakeTimers()
    
    const { getByText } = render (<Button />)
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    
    //5 secs 
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    

    const p = getByText('Button is not changed');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement)
  })

  it('When Button is clicked, it disabled for 5 secs', () => {
    jest.useFakeTimers()
    
    const { getByText } = render (<Button />)
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    

    //button is disabled
    expect(buttonElement).toBeDisabled();

    //5 secs 
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    
    //button isn't disabled
    expect(buttonElement).not.toBeDisabled();

    const p = getByText('Button is not changed');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement)
  })
})