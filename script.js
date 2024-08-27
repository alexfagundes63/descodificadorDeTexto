const campoDeTexto = document.querySelector('.caixa__texto');
const mensagem = document.querySelector('.mensagem');

function btEncriptar() {
    const textoEncriptado = encriptar(campoDeTexto.value);
    mensagem.value = textoEncriptado;
    campoDeTexto.value ='';
}
function btDescriptografar() {
    const textoDescriptografado = descriptografar(campoDeTexto.value);
    mensagem.value = textoDescriptografado;
    campoDeTexto.value = '';
}
function btLimpar() {
    campoDeTexto.value = '';
    mensagem.value = '';
}
function btCopiar() {
    const copiarTexto = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(copiarTexto);
    mensagem.value = '';
}
function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']
    ]
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function descriptografar(stringDescriptografada) {
    let matrizCodigo = [
        ['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']
    ]
    stringDescriptografada = stringDescriptografada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}