function CriandoOpcoeDeEstado(){
    let estados = document.getElementById('estados');
    let   opcoesEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < opcoesEstado.length; index += 1){
        let criandoOpcoes = document.createElement('option');
        estados.appendChild(criandoOpcoes).innerText = opcoesEstado[index];
        estados.appendChild(criandoOpcoes).value = opcoesEstado[index];
    }
}
CriandoOpcoeDeEstado();