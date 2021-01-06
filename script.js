document.onkeydown = function(e){
    if (e.keyCode === 38) {
        let dino = document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },500);
    }
}