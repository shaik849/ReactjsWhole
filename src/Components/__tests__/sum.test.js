import { sum } from "../Sum"
import "@testing-library/jest-dom"



test('Sum of two numbers function', () =>{
    const result = sum(3, 4);

    
   //this line is know as assertion
    expect(result).toBe(7);

})

// test('Sum of two numbers fail function', () =>{
