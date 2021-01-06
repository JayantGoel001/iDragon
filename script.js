let score = 0
let cross = true

let audio = new Audio('music.mp3')

setTimeout(()=>{
    audio.play()
},2000)

document.onkeydown = function(e){
    if (e.keyCode === 38) {
        let dino = document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
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

    if (offsetX<73 && offsetY<52){
        gameOver.innerHTML  = 'GAME OVER';
        obstacle.classList.remove('obstacleAni')
        dino.style.visibility = 'hidden';
        score-=100;
        audio.pause()

        let audioGameOver = new Audio('gameOver.mp3')
        audioGameOver.play()

        setTimeout(()=>{
            audioGameOver.pause()
        },2000);

    }else if (offsetX<145 && cross) {
        score+=100;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross = true;
        },1000);
        setTimeout(()=>{
            let aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            obstacle.style.animationDuration = aniDur-0.1 + 's'
        },500);
    }
},100)

function updateScore(score) {
    scoreCount.innerHTML = `Your Score : ${score}`
}