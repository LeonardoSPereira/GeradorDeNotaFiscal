import * as elements from "./elements.js";

export const invoiceNumber = Math.round(Math.random() * 1000);

const date = new Date();
export const invoiceDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

// Function to handle input
export function handleInput(element, property, object) {
    element.addEventListener('input', (e) => {
        object[property] = e.target.value;
    });
}

//Function to update total value
export function serviceTotal(quantity, value) {
    const quantityNumber = Number(quantity);
    const valueNumber = Number(value);
    const total = quantityNumber * valueNumber;

    // Dispatching event to update total on the page
    const event = new CustomEvent('serviceTotalUpdated', { detail: total.toFixed(2) });
    document.dispatchEvent(event);

    return total.toFixed(2);
}

// Function to update total with discount
export function totalWithDiscount(total, discount) {
    const totalNumber = Number(total);
    const discountNumber = Number(discount);

    return (totalNumber - discountNumber).toFixed(2);
}

// Function to update total with taxes
export function totalWithTaxes(total, taxes) {
    const totalNumber = Number(total);
    let totalTaxes = 0;

    for(let tax in taxes) {
        totalTaxes += Number(taxes[tax]);
    }

    return (totalNumber + totalTaxes).toFixed(2);
}
