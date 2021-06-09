import {
  validateCred,
  findInvalidCards,
  idInvalidCardCompanies
} from './utils.js';

const handleSingleValidation = event => {
  event.preventDefault();
  let validationCheck = validateCred(event.target.ccNum.value);
  let resultTarget = document.querySelector('.single-validator__result');
  resultTarget.innerText = validationCheck?'Credit Card Valid':'Credit Card Invalid';
  if (validationCheck===false && resultTarget.classList.contains('--valid')) {
    resultTarget.classList.remove('--valid')
  } else {
    resultTarget.classList.add('--valid')
  }
}

const handleMultiValidation = event => {
  event.preventDefault();
  let resultTarget = document.querySelector('.multi-validator__result');
  resultTarget.innerHTML = '';
  let creditCardList = event.target.ccList.value.split(',')
  let invalidCreditCards = findInvalidCards(creditCardList);
  if (invalidCreditCards.length>0) {
    let invalidTitle = document.createElement('ul');
    invalidTitle.innerText = 'Invalid Credit Cards:'
    resultTarget.appendChild(invalidTitle);
    invalidCreditCards.forEach(creditCard => {
      let resultItem = document.createElement('li');
      resultItem.classList.add('multi-validator__result-item');
      resultItem.innerText = creditCard;
      invalidTitle.appendChild(resultItem);
    })
  }
}

// Adds listener for single validator
document.querySelector('.single-validator').addEventListener('submit', handleSingleValidation);
// Adds listener for multi validator
document.querySelector('.multi-validator').addEventListener('submit', handleMultiValidation);
