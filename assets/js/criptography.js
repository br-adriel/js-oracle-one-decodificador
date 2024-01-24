const cryptSubstitute = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

const decryptSubstitutionMap = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u',
};

/**
 * Criptografa o texto fornecido, substituindo vogais com base no mapeamento
 * dado no desafio.
 *
 * @param {string} text - O texto de entrada a ser criptografado.
 * @returns {string} - O texto criptografado com as vogais substituídas.
 */
export function crypt(text) {
  const vowels = Object.keys(cryptSubstitute).join('');
  const vowelOcurrences = [];
  text.split('').map((letter, i) => {
    if (vowels.includes(letter)) {
      vowelOcurrences.push(i);
    }
  });
  vowelOcurrences.reverse();

  let result = text;
  vowelOcurrences.map((vowelIndex) => {
    const beforeVowel = result.substring(0, vowelIndex);
    const newVowel = cryptSubstitute[text[vowelIndex]];
    const afterVowel = result.substring(vowelIndex + 1);
    result = beforeVowel + newVowel + afterVowel;
  });

  return result;
}

/**
 * Descriptografa o texto fornecido, substituindo substrings específicas pelos
 * seus respectivos caracteres.
 *
 * @param {string} text - O texto de entrada a ser descriptografado.
 * @returns {string} - O texto descriptografado.
 */
export function decrypt(text) {
  const decryptedText = text.replace(
    /ai|enter|imes|ober|ufat/g,
    (match) => decryptSubstitutionMap[match]
  );
  return decryptedText;
}
