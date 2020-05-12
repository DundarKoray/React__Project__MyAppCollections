function flip(){
    const flip = [ 1260, 1440]
    let pickANum = flip[(Math.floor(Math.random() * flip.length))]
    return pickANum
}

function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}


export { flip, choice }