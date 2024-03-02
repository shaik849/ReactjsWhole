import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact", () => {

    //we can use it in place of it also
test("Contact component is render or not", () =>{

render(<Contact />)

const heading = screen.getByRole("heading")

  expect(heading).toBeInTheDocument()

})

test("Contact component is render button or not", () =>{

    render(<Contact />)
    
    const heading = screen.getByRole("button")
    
      expect(heading).toBeInTheDocument()
    
    })

    test("Contact component is render button or not", () =>{

        render(<Contact />)
        
        const heading = screen.getByText("Sign In")
        
          expect(heading).toBeInTheDocument()
        
        })

    })