import { render,screen } from "@testing-library/react"
import Help from "../Help"
import "@testing-library/jest-dom"

describe("Help page testcases",()=>{
    //testcase 
    it("Should load the component and find heading tag",()=>{
        //Rendering
        render(<Help/>)
        //Querying
        const heading=screen.getByRole("heading")
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load the component and find all the textboxes",()=>{
        render(<Help/>)
        const textbox=screen.getAllByRole("textbox")
        expect(textbox.length).toBe(2)
    })
    
    test("Should load the component and find with the placeholder",()=>{
        render(<Help/>)
        const textbox=screen.getByPlaceholderText("name")
        expect(textbox).toBeInTheDocument()
    })
    
    test("Should load the component and find the text with submit",()=>{
        render(<Help/>)
        const textbox=screen.getByText("Submit")
        expect(textbox).toBeInTheDocument()
    })
})
