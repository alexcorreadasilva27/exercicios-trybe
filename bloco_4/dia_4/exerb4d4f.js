function palindromo(palavra){
    let arrayLetras = palavra.spllit('');
    let isPalindromo = true;
    for(let index in arrayLetras){
        if(arrayLetras[index] != palavra[(palavra.length - 1)] - index){
            isPalindromo = false;

        }
    }
}