const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-usuario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('Valor-deposito');
    const textoSucesso = `Montante de: <b>R$${valorDeposito.value}</b> foi depositado para o(a) cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;
    
    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const mensagemSucesso = document.querySelector('.msg-sucesso');
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.erro-nome').style.display = 'block';

    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.erro-nome').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.erro-nome').style.display = 'none';

    }
});


