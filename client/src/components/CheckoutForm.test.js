import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const formHeader = screen.queryByText("Checkout Form")
    expect(formHeader).toBeInTheDocument


});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    

    fireEvent.change(firstNameInput,{ target:{ value: 'User', name:'firstName'}})
    fireEvent.change(lastNameInput,{ target:{ value: 'User LastName', name:'lastName'}})
    fireEvent.change(addressInput,{ target:{ value: '1234 Lambda ln', name:'address'}})
    fireEvent.change(cityInput,{ target:{ value: 'Some City', name:'city'}})
    fireEvent.change(stateInput,{ target:{ value: 'CA', name:'state'}})
    fireEvent.change(zipInput,{ target:{ value: '99443', name:'zip'}})

    //submit form
    const button = screen.getByRole("button");
    fireEvent.click(button);

        //show sucess message if form submitted
    const successMessage = screen.getByText("You have ordered some plants! Woo-hoo!")
    expect(successMessage).toBeInTheDocument



});