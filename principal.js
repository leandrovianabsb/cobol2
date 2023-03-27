function analisarCodigoFonte() {
    let fonteOriginal = document.getElementById("fonteOriginal").value;
    let fonteResultante = [];
    let listaLinhas = fonteOriginal.split("\n");
    let textoFinal = document.getElementById("fonteResultante");
    let linhaCompleta;
    let linhaDeAnalise;
    let coluna7;
    let listaPalavras = [];

    for (let i = 0; i < listaLinhas.length; i++) {
        linhaCompleta  = listaLinhas[i].trimEnd();
        coluna7        = listaLinhas[i].substring(6, 7);
        linhaDeAnalise = listaLinhas[i].substring(7, 72);
        listaPalavras  = linhaDeAnalise.replace(/\s+/g, "\n");

        if (linhaTemConteudo(linhaCompleta)) {
            if (linhaNaoComentada(coluna7)) {
                if (temComandoExit(listaPalavras)) {
                    fonteResultante.push([linhaCompleta.slice(0, 6) + '*' + linhaCompleta.slice(7)] + "\n");
                 
                    let j = i - 1;
                    while (j > -1) {
                        console.log("j=" + j);
                        if (linhaTemConteudo(listaLinhas[j])){
                            if (linhaNaoComentada(listaLinhas[j].substring(6, 7))){
                                console.log(listaLinhas[j].indexOf("."))
                                if (listaLinhas[j][listaLinhas[j].trimEnd().length - 1] === "."){
                                    if ( listaLinhas[j].indexOf(".") > 11 &&
                                        !listaLinhas[j].includes(" END-") && 
                                        !listaLinhas[j].includes(" GOBACK") &&
                                        !listaLinhas[j].includes(" MOVE") &&
                                        !listaLinhas[j].includes(" ADD")
                                        ) {
                                        fonteResultante[j] = [listaLinhas[j].slice(0, 6) + '*' + listaLinhas[j].slice(7)] + "\n";
                                    }
                                    break;
                                }
                            }
                        }
                        j -= 1;
                    }
                } else {
                    fonteResultante.push(linhaCompleta + "\n");
                }
            } else {
                fonteResultante.push(linhaCompleta + "\n");
            }
        } else {
            fonteResultante.push(linhaCompleta + "\n");
        }
    }
    textoFinal.value = fonteResultante.join('');
}

function linhaTemConteudo(linha) {
    if (linha.length > 0) {
        return true;
    } else {
        return false;
    }
}

function linhaNaoComentada(coluna7) {
    if (coluna7 === "*") {
        return false;
    } else {
        return true;
    }
}

function temComandoExit(listaPalavras) {
    if (listaPalavras.includes("EXIT")) {
        return true;
    } else {
        return false;
    }
}

// function analisarCodigoFonte() {
//     let fonteOriginal = document.getElementById("fonteOriginal").value;
//     let fonteResultante = [];
//     let listaLinhas = fonteOriginal.split("\n");
//     let textoFinal = document.getElementById("fonteResultante");
//     let linhaAtual;
//     let linhaAnterior;

//     for (let i = 0; i < listaLinhas.length; i++) {
//         linhaAtual = listaLinhas[i];
//         if (linhaAtual.length > 0) {
//             if (linhaAtual.substring(6, 7) === "*") {
//                 fonteResultante.push(linhaAtual + "\n");
//             } else {
//                 if (linhaAtual.substring(6, 72).includes(" EXIT")) {
//                     fonteResultante.push([linhaAtual.slice(0, 6) + '*' + linhaAtual.slice(7)] + "\n");
                    
//                     linhaAnterior = listaLinhas[i-1];
//                     // if (linhaAnterior.substring(6, 72).)
//                 } else {
//                     fonteResultante.push(linhaAtual + "\n");
//                 }
//             }
//         } else {
//             fonteResultante.push(linhaAtual + "\n");
//         }
//     }
//     textoFinal.value = fonteResultante.join('');
// }