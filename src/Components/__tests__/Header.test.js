import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import appStore from "../../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


test('should first', () => { 
    render(
        <BrowserRouter>
        <Provider store={appStore}>
         <Header />
           </Provider>
           </BrowserRouter>
    )
    const loginBtn = screen.getByText("Login")
    expect(loginBtn).toBeInTheDocument()

 })

 it("cart items", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
         <Header />
           </Provider>
           </BrowserRouter>
    )
    const loginBtn = screen.getByText(/Cart/)
    expect(loginBtn).toBeInTheDocument()
 })

 it("should change login logout onclick", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
         <Header />
           </Provider>
           </BrowserRouter>
    )
    const loginBtn = screen.getByRole("button", {name : "Login"})
    
    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole("button", {name : "Logout"})

    expect(logoutBtn).toBeInTheDocument()
 })