/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

function multiplyOddIndices(numbers) {
  
  return numbers.map(
    aNumber => {
      
        if(numbers.indexOf(aNumber)%2!==0){
          console.log(numbers.indexOf(aNumber)-1)
          return aNumber*numbers.indexOf(aNumber);
        } else if (numbers.indexOf(aNumber)%2===0) {
          return aNumber;
        }
    }
  )
}
console.log(multiplyOddIndices([3, 8, 11, 13, 19, 7]))
module.exports = multiplyOddIndices;