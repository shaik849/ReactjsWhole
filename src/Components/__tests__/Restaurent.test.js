import { render, screen } from "@testing-library/react"
import MOCK_DATA from "./MockData/resData.json"
import { IsVeg, Restaurant } from "../Restaurant"
import "@testing-library/jest-dom"


test('It should be restaurant props data', () => { 
    // const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = MOCK_DATA
    render(
        <Restaurant restaurant={MOCK_DATA} />
    )
    const data = screen.getByText('Taj Mahal-Abids')
    expect(data).toBeInTheDocument()
 })

 test('It "Veg"', () => {
    const IsVegRes = IsVeg(Restaurant);
    render(
        <IsVegRes restaurant={MOCK_DATA}/>
    )
    const data = screen.getByText('Veg')
    expect(data).toBeInTheDocument()
 })