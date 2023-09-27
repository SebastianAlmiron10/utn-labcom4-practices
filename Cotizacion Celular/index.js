let colorValidado = false

function changeProductImage(){
    let img = document.createElement('img')
    let color = document.getElementById('color').value
    let src = document.getElementById("colorC");

    src.innerHTML = '';

    switch(color){
        case 'grafito':
            img.src = 'https://http2.mlstatic.com/D_NQ_NP_973345-MLA47781591382_102021-O.webp'
            img.width = 200
            src.appendChild(img);
            colorValidado = true
            break
        case 'verde':
            img.src = 'https://http2.mlstatic.com/D_NQ_NP_736376-MLA49590060561_042022-O.webp'
            img.width = 200
            src.appendChild(img);
            colorValidado = true
            break
        case 'rojo':
            img.src = 'https://http2.mlstatic.com/D_NQ_NP_834059-MLA47781378504_102021-O.webp'
            img.width = 200
            src.appendChild(img);
            colorValidado = true
            break
        case 'rosita':
            img.src = 'https://http2.mlstatic.com/D_NQ_NP_654080-MLA47781882564_102021-O.webp'
            img.width = 200
            src.appendChild(img);
            colorValidado = true
            break
    }
}


function calculatePrice(){
    let total = 0
    let capacidad = document.getElementById('capacidad').value
    let cantidad = document.getElementById('cantidad').value

    if (capacidad == '128'){
        total = 150000
    }else if (capacidad == '256'){
        total = 165000
    }else{
        total = 180000
    }

    total = total * cantidad

    let resultado = document.getElementById('result');
    if (total > 1 && colorValidado == true){
        resultado.innerHTML = 'El total es: $' + total;
    }else{
        resultado.innerHTML = 'Error, seleccione un producto';
    }
}

//https://http2.mlstatic.com/D_NQ_NP_834059-MLA47781378504_102021-O.webp
//https://http2.mlstatic.com/D_NQ_NP_973345-MLA47781591382_102021-O.webp
//https://http2.mlstatic.com/D_NQ_NP_736376-MLA49590060561_042022-O.webp
//https://http2.mlstatic.com/D_NQ_NP_654080-MLA47781882564_102021-O.webp
