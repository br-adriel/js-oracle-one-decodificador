import { crypt, decrypt } from './criptography.js';

const textInput = document.querySelector("textarea[name='texto']");
const noMessagesSection = document.querySelector('.no-messages');
const resultTextDiv = document.querySelector('.result-text');
const resultTextParagraph = resultTextDiv.querySelector('p');
const cryptButton = document.querySelector('#crypt-button');
const decryptButton = document.querySelector('#decrypt-button');

function pressButton(callback) {
  if (textInput.value.length === 0) {
    noMessagesSection.style.display = 'flex';
    resultTextDiv.style.display = 'none';
    return;
  }
  noMessagesSection.style.display = 'none';
  resultTextParagraph.textContent = callback(textInput.value);
  resultTextDiv.style.display = 'flex';
}

cryptButton.addEventListener('click', () => pressButton(crypt));
decryptButton.addEventListener('click', () => pressButton(decrypt));
