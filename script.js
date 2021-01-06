document.onkeydown = function(e){
    if (e.keyCode === 38) {
        let dino = document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },500);
    }else if (e.keyCode===39){
        let dino = document.querySelector('.dino')
        let dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = dinoX+112+"px"
    }else if (e.keyCode===37){
        let dino = document.querySelector('.dino')
        let dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = dinoX-112+"px"
    }
}

setInterval(()=>{
    let dino = document.querySelector('.dino')
    let gameOver = document.querySelector('.gameOver')
    let obstacle = document.querySelector('.obstacle')

    let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    let offsetX = Math.abs(ox-dx);
    let offsetY = Math.abs(oy-dy);

    if (offsetX<93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }
},100)