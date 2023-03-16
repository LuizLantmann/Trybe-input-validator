import validator from 'validator';
import './style.css'

const inputEl = document.querySelector('input')
const dropdownEl = document.querySelector('select')
const validateBtnEl = document.querySelector('button')
const textoDeSaida = document.querySelector('#return');

validateBtnEl.addEventListener('click', (event) => {
  event.preventDefault()

  const campos = {
    cpf: validator.isTaxID(inputEl.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputEl.value),
    email: validator.isEmail(inputEl.value),
    uuid: validator.isUUID(inputEl.value, 4),
    url: validator.isURL(inputEl.value),
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[dropdownEl.value]}`;
})