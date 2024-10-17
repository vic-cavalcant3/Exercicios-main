function mostrarquadrinhos() { 
    const quadrinhos = document.getElementById('quadrinhos');

    // Alterna a exibição de "Revistas em Promoção"
    if (quadrinhos.classList.contains('oculto')) {
        quadrinhos.classList.remove('oculto');
    } else {
        quadrinhos.classList.add('oculto');}
    }


function mostrarquadrinhos2() { 
        const quadrinhos2 = document.getElementById('quadrinhos2');
    // Alterna a exibição de "Revistas MAIS VENDIDAS"
    if (quadrinhos2.classList.contains('oculto')) {
        quadrinhos2.classList.remove('oculto');
    } else {
        quadrinhos2.classList.add('oculto');
    }
}

function mostrarquadrinhos3() { 
    const quadrinhos3 = document.getElementById('quadrinhos3');
// Alterna a exibição de "Revistas MAIS VENDIDAS"
if (quadrinhos3.classList.contains('oculto')) {
    quadrinhos3.classList.remove('oculto');
} else {
    quadrinhos3.classList.add('oculto');
}
}

