function crearMatriz() {

    let tam = parseInt(document.getElementById("tam").value);

    let div = document.getElementById("matriz");

    div.innerHTML = "";

    for(let i = 0; i < tam; i++) {

        let fila = document.createElement("div");
        fila.className = "fila";

        for(let j = 0; j < tam + 1; j++) {

            let inp = document.createElement("input");

            inp.type = "number";
            inp.step = "any";

            inp.id = "v" + i + j;

            fila.appendChild(inp);
        }

        div.appendChild(fila);
    }
}

function textoMatriz(m) {

    let t = "";

    for(let i = 0; i < m.length; i++) {

        t += "[ ";

        for(let j = 0; j < m[i].length; j++) {

            t += m[i][j].toFixed(2) + " ";
        }

        t += "]\n";
    }

    return t + "\n";
}

function resolver() {

    let tam = parseInt(document.getElementById("tam").value);

    let m = [];

    for(let i = 0; i < tam; i++) {

        let fila = [];

        for(let j = 0; j < tam + 1; j++) {

            let v = parseFloat(document.getElementById("v" + i + j).value);

            fila.push(v);
        }

        m.push(fila);
    }

    let pasos = "Matriz Inicial:\n\n";

    pasos += textoMatriz(m);

    for(let i = 0; i < tam; i++) {

        let pivote = m[i][i];

        for(let j = 0; j < tam + 1; j++) {

            m[i][j] = m[i][j] / pivote;
        }

        pasos += "F" + (i + 1) + " = F" + (i + 1);
        pasos += " / " + pivote.toFixed(2) + "\n\n";

        pasos += textoMatriz(m);

        for(let k = 0; k < tam; k++) {

            if(k != i) {

                let factor = m[k][i];

                for(let j = 0; j < tam + 1; j++) {

                    m[k][j] = m[k][j] - factor * m[i][j];
                }

                pasos += "F" + (k + 1);
                pasos += " = F" + (k + 1);
                pasos += " - (" + factor.toFixed(2);
                pasos += ")F" + (i + 1) + "\n\n";

                pasos += textoMatriz(m);
            }
        }
    }

    pasos += "Resultado:\n\n";

    for(let i = 0; i < tam; i++) {

        pasos += "x" + (i + 1);
        pasos += " = " + m[i][tam].toFixed(2) + "\n";
    }

    document.getElementById("pasos").textContent = pasos;
}