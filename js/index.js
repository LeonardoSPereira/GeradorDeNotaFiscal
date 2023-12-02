import * as elements from "./elements.js";
import * as functions from "./controls.js";

// Company info
let company = {
    cnpj: '',
    im: '',
    name: '',
    address: '',
    cep: '',
    city: '',
    state: ''
}

functions.handleInput(elements.companyCNPJ, 'cnpj', company);
functions.handleInput(elements.companyIM, 'im', company);
functions.handleInput(elements.companyName, 'name', company);
functions.handleInput(elements.companyAddress, 'address', company);
functions.handleInput(elements.companyCEP, 'cep', company);
functions.handleInput(elements.companyCity, 'city', company);
functions.handleInput(elements.companyState, 'state', company);


// Recipient info
let recipient = {
    name: '',
    cpf: '',
    email: '',
    address: '',
    cep: '',
    city: '',
    state: ''
}

functions.handleInput(elements.recipientName, 'name', recipient);
functions.handleInput(elements.recipientCPF, 'cpf', recipient);
functions.handleInput(elements.recipientEmail, 'email', recipient);
functions.handleInput(elements.recipientAddress, 'address', recipient);
functions.handleInput(elements.recipientCEP, 'cep', recipient);
functions.handleInput(elements.recipientCity, 'city', recipient);
functions.handleInput(elements.recipientState, 'state', recipient);

// Service info
let service = {
    description: '',
    quantity: 0,
    value: 0,
    discount: 0,
    total: 0
}

elements.serviceDescription.addEventListener('input', (e) => {
    service.description = e.target.value;
})

elements.serviceQuantity.addEventListener('input', (e) => {
    service.quantity = e.target.value;

    serviceTotal.value = functions.serviceTotal(service.quantity, service.value);
})

elements.serviceValue.addEventListener('input', (e) => {
    let value = e.target.value;
    service.value = Number(value).toFixed(2);

    serviceTotal.value = functions.serviceTotal(service.quantity, service.value);

})

document.addEventListener('serviceTotalUpdated', (e) => {
    service.total = e.detail;
});

elements.discount.addEventListener('input', (e) => {
    const discount = e.target.value;
    service.discount = discount / 100 * service.total;
})


//  tax info
let taxes = {
    irpj: 0,
    irrf: 0,
    pis: 0,
    cofins: 0,
    csll: 0
}

elements.IRPJ.addEventListener('input', (e) => {
    const irpj = e.target.value;
    taxes.irpj = (irpj / 100 * service.total).toFixed(2);
})

elements.IRRF.addEventListener('input', (e) => {
    const irrf = e.target.value;
    taxes.irrf = (irrf / 100 * service.total).toFixed(2);
})

elements.PIS.addEventListener('input', (e) => {
    const pis = e.target.value;
    taxes.pis = (pis / 100 * service.total).toFixed(2);
})

elements.COFINS.addEventListener('input', (e) => {
    const cofins = e.target.value;
    taxes.cofins = (cofins / 100 * service.total).toFixed(2);
})

elements.CSLL.addEventListener('input', (e) => {
    const csll = e.target.value;
    taxes.csll = (csll / 100 * service.total).toFixed(2);
})



// create invoice
elements.btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Total with discount
    const totalWithDiscount = functions.totalWithDiscount(service.total, service.discount);

    // Total with taxes
    const totalWithTaxes = functions.totalWithTaxes(totalWithDiscount, taxes);

    elements.invoice.innerHTML =  `
    <h2>Essa nota não deve ser usada para fins legais. Ela serve apenas como exemplo.</h2>

    <div class="invoiceHeader">   

        <div class="invoiceHeaderInfo">
            <div class="header">
                <h2>PREFEITURA DO MUNICÍPIO DE ANÁPOLIS</h2>
                <h4>SECRETARIA MUNICIPAL DA FAZENDA</h4>
                <h3>NOTA FISCAL DE SERVIÇOS - NFS-e</h3>
            </div>

            <div class="info">
                <p>Número da nota: <strong>${functions.invoiceNumber}</strong></p>
                <p>Data de Emissão: <strong>${functions.invoiceDate}</strong></p>
            </div>

        </div>

        <div class="invoiceHeaderCompany">
            <h2>Prestador de serviços</h2>

            <p>CNPJ: <strong>${company.cnpj}</strong></p>
            <p>Inscrição Municipal: <strong>${company.im}</strong></p>
            <p>Nome: <strong>${company.name}</strong></p>
            <p>Endereço: <strong>${company.address}</strong></p>
            <p>CEP: <strong>${company.cep}</strong></p>
            <p>Cidade: <strong>${company.city}</strong></p>
            <p>Estado: <strong>${company.state}</strong></p>
        </div>

        <div class="invoiceHeaderRecipient">
            <h2>Tomador de serviços</h2>

            <p>Nome: <strong>${recipient.name}</strong></p>
            <p>CPF/CNPJ: <strong>${recipient.cpf}</strong></p>
            <p>E-mail: <strong>${recipient.email}</strong></p>
            <p>Endereço: <strong>${recipient.address}</strong></p>
            <p>CEP: <strong>${recipient.cep}</strong></p>
            <p>Cidade: <strong>${recipient.city}</strong></p>
            <p>Estado: <strong>${recipient.state}</strong></p>
        </div>

    </div>
    

    <div class="invoiceBody">
        <div class="invoiceBodyDescription">
            <h2>Discriminação do serviço</h2>

            <p>Descrição: <strong>${service.description}</strong></p>
            <p>Quantidade: <strong>${service.quantity}</strong></p>
            <p>Valor Unitário: <strong>R$ ${service.value}</strong></p>
            <p>Total Bruto: <strong>R$ ${service.total}</strong></p>
            <p>Desconto Incondicional: <strong>R$ ${service.discount.toFixed(2)}</strong></p>
        </div>

        <div class="invoiceBodyTaxes">
            <p>IRPJ (R$) <strong>${taxes.irpj}</strong></p>
            <p>IRRF (R$) <strong>${taxes.irrf}</strong></p>
            <p>PIS (R$) <strong>${taxes.pis}</strong></p>
            <p>COFINS (R$) <strong>${taxes.cofins}</strong></p>
            <p>CSLL (R$) <strong>${taxes.csll}</strong></p>
        </div>

        <h5>Valor total do serviço = R$ ${totalWithDiscount}</h5>
        <h5>Valor total da nota = R$ ${totalWithTaxes}</h5>


    </div>

    `
})
