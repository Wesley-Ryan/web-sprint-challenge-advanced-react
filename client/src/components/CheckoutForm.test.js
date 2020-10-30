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
    const firstNameInput = screen.queryByLabelText('First Name');
    const lastNameInput = screen.queryByLabelText('Last Name');
    const addressInput = screen.queryByLabelText('Address');
    const cityInput = screen.queryByLabelText('City');
    const stateInput = screen.queryByLabelText('State');
    

    fireEvent.change(firstNameInput,{ target:{ value: 'canine', name:'firstName'}})


    const button = screen.getByRole("button");
    fireEvent.click(button);






});