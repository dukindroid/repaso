const numero1 = 20
const numero2 = "20"

numero1 == numero2 

function toCamelCase(str) {
  const coso = str.split(/[_-]/)
  const otroCoso = []
  coso.splice(1).forEach(element => {
    otroCoso.push(element.split('')[0].toUpperCase() + element.split('').splice(1).join('')) 
  });
  otroCoso
  return coso[0] + otroCoso.join('')
}

toCamelCase('the_shadow_warrior')

function duplicateEncoder (word) {
  // const coso = []
  resultado = []
  coso = word.split('')
  
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    let temporal = word.slice(index, index + 1)
    word.splice(index, index+1)
  }

  return resultado.join('')
}

/*
duplicateEncoder('recede')
*/