import * as data from "./elements.js";
import * as functions from "./controls.js";


data.btn.addEventListener('click', (e) => {
    e.preventDefault();

    data.invoice.innerHTML = 
    `
        
    <div class="invoiceHeader">
                    
        <div class="invoiceHeaderInfo">
            <div class="header">
                <h2>PREFEITURA DO MUNICÍPIO DE ANÁPOLIS</h2>
                <h4>SECRETARIA MUNICIPAL DA FAZENDA</h4>
                <h3>NOTA FISCAL DE SERVIÇOS - NFS-e</h3>
            </div>

            <div class="info">
                <p>Número da nota: <strong>${data.invoiceNumber}</strong></p>
                <p>Data de Emissão: <strong>${functions.invoiceDate}</strong></p>
            </div>

        </div>

        <div class="invoiceHeaderCompany">
            <h2>Prestador de serviços</h2>

            <p>CNPJ: <strong>teste</strong></p>
            <p>Inscrição Estadual: <strong>teste</strong></p>
            <p>Nome: <strong>teste</strong></p>
            <p>Endereço: <strong>teste</strong></p>
            <p>CEP: <strong>teste</strong></p>
            <p>Cidade: <strong>teste</strong></p>
            <p>Estado: <strong>teste</strong></p>
        </div>

        <div class="invoiceHeaderRecipient">
            <h2>Tomador de serviços</h2>

            <p>Nome: <strong>teste</strong></p>
            <p>Endereço: <strong>teste</strong></p>
            <p>CEP: <strong>teste</strong></p>
            <p>Cidade: <strong>teste</strong></p>
            <p>Estado: <strong>teste</strong></p>
            <p>CNPJ: <strong>teste</strong></p>
            <p>E-mail: <strong>teste</strong></p>
        </div>

    </div>
    

    <div class="invoiceBody">
        <div class="invoiceBodyDescription">
            <h2>Discriminação do serviço</h2>

            <p>Descrição: <strong>teste</strong></p>
            <p>Quantidade: <strong>teste</strong></p>
            <p>Valor: <strong>teste</strong></p>
            <p>Total Bruto: <strong>teste</strong></p>
            <p>Desconto Incondicional: <strong>teste</strong></p>
        </div>

        <div class="invoiceBodyTaxes">
            <p>IRPJ (R$) <strong>00,00</strong></p>
            <p>IRRF (R$) <strong>00,00</strong></p>
            <p>PIS (R$) <strong>00,00</strong></p>
            <p>COFINS (R$) <strong>00,00</strong></p>
            <p>CSLL (R$) <strong>00,00</strong></p>
        </div>

        <h5>Valor total do serviço = R$ <span>00,00</span></h6>

    </div>
    `
})
