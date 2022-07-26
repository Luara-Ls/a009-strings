const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())

const quantidade = minhaString.length
console.log('A frase tem' , quantidade, 'caracteres! ')

const quantidade2 = minhaString.trim().length
console.log('A frase tem' , quantidade2, 'caracteres! ')

const substituicao = minhaString.replace(' ________.      ' , ' sticioso')
console.log(substituicao)