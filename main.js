const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];
const email = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    cadastrados();
})

function adicionaLinha() {
    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');
    const inputMail = document.getElementById('mail');

    if (telefones.includes(inputPhone.value)) {
        alert(`O telefone ${inputPhone.value} já existe!`);
    } else {
        nomes.push(inputName.value);
        telefones.push(inputPhone.value);
        email.push(inputMail.value);

        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputPhone.value}</td>`;
        linha += `<td>${inputMail.value}</td>`;
        linha += '</tr>';

        linhas +=  linha;

    }

    inputName.value = '';
    inputPhone.value = '';
    inputMail.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};


function cadastrados() {
    let total = telefones.length

    document.getElementById('total').innerHTML = total;
}