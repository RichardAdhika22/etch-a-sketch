document.getElementById("myButton").onclick = function(){
    var qty = document.getElementById("boxNumber").value;

    const main = document.querySelector('body');

    const erase = document.querySelector(".container");
    const eraseButton = document.querySelector(".eraser");
    if(erase != null) {
        main.removeChild(erase);
        main.removeChild(eraseButton);
    }

    const container = document.createElement('div');
    container.classList.add('container');

    const gridHorizontal = document.createElement("div");
    gridHorizontal.classList.add('vertical');
    const grid = document.createElement('div');
    grid.classList.add("horizontal");

    for(let j=0; j<qty; j++){
        gridHorizontal.appendChild(grid.cloneNode(true));
    }
    
    for(let i=0; i<qty; i++){
        container.appendChild(gridHorizontal.cloneNode(true));
    }
    
    main.appendChild(container);

    const grids = document.querySelectorAll('.horizontal');

    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hover');
        });
    });

    const eraser = document.createElement('button');
    eraser.textContent = "Eraser";
    eraser.classList.add("eraser");

    main.insertBefore(eraser, container);

    eraser.onclick = function(){
        grids.forEach((grid) => {
            grid.addEventListener('mouseover', () => {
                console.log(grid);
                grid.classList.add('erase');
            });
        });
    }
}


