function cubes(){
    let container = document.querySelector('.container');
    let zValues = [-3,-2,-1,0,1,2,3];
    zValues.forEach(z => {
        let cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.setProperty('--z',z);

        for(let x = -3;x<=3;x++){
            let div = document.createElement('div');
            div.style.setProperty('--x',x);
            div.style.setProperty('--y',0);

            let span = document.createElement('span');
            span.style.setProperty('--i', 3);
            div.appendChild(span);
            cube.appendChild(div);
        }
        container.appendChild(cube);
    })
    activeRandomCube();
}
cubes();

function activeRandomCube(){
    let spans = document.querySelectorAll('.cube span');
    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * spans.length);
        let randomSpan = spans[randomIndex];

        randomSpan.classList.add('active');

        setTimeout(() => {
            randomSpan.classList.remove('active');
        }, 2000);
    }, 1000);
    
}