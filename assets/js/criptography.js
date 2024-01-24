const cryptSubstitutionMap = {
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
  const cryptedText = text.replace(
    /a|e|i|o|u/g,
    (match) => cryptSubstitutionMap[match]
  );
  return cryptedText;
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
