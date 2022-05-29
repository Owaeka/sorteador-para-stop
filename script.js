const btnEl = document.querySelector('.btn');
const resultEl = document.querySelector('.result');
const raffledEl = document.querySelector('.raffled');
const alphabetEl = document.querySelector('.alphabet');
const restartBtnEl = document.querySelector('#restart');
const removableCheckboxEl = document.querySelector('#removableCheckbox');
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const removable = ["K","W","X","Y","Z"];

alphabetEl.textContent = alphabet;

btnEl.addEventListener('click', () => {
  const generatedValue = generateRandomValue();
  
  if(alphabet.length === 0) {
    resultEl.textContent = 'Parabéns! Você terminou o alfabeto.'
    restartBtnEl.hidden = false;
    return;
  }

  resultEl.textContent = alphabet[generatedValue];

  raffledEl.textContent = raffledEl.textContent.concat(`${alphabet[generatedValue]} `);

  alphabet.splice(generatedValue, 1);

  alphabetEl.textContent = alphabet;
});

function generateRandomValue() {
  const random = Math.floor(Math.random() * alphabet.length);

  return random;
}

restartBtnEl.addEventListener('click', () => {
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  restartBtnEl.hidden = true;
  raffledEl.textContent = '';
  resultEl.textContent = '';
  alphabetEl.textContent = alphabet;
})

removableCheckboxEl.addEventListener('click', () => {
  if(removableCheckboxEl.checked) {

    for(let i = 0; i < alphabet.length; i++) {
      for(let j = 0; j < removable.length; j++) {

        if(alphabet[i] === removable[j]) {
          alphabet.splice(i, 1);
        }

      }
    }
    
  } else {
    const toInsert = [];

    for(let i = 0; i < removable.length; i++) {
      let found = false;
      for(let j = 0; j < alphabet.length; j++) {
        if(removable[i] === alphabet[j]) {
          found = true;
        }
      }
      if(!found) {
        toInsert.push(removable[i]);
      }
    }
    toInsert.forEach(insert => alphabet.push(insert))
  }
  
  alphabetEl.textContent = alphabet;
  
})