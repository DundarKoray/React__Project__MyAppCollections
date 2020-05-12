const card = document.querySelector('.thecard')
const cards = document.querySelector('.cards')
const picture = document.querySelector('.boy-flipping-coin')

let clickState = 0;



card.addEventListener('click', function(){
   cards.classList.add('zoomInZoomOut')
  picture.src="https://res.cloudinary.com/koraydundar/image/upload/v1559739488/hand2_yt5nw4.jpg"
 // picture.setAttribute("src", "https://res.cloudinary.com/koraydundar/image/upload/v1559739488/hand2_yt5nw4.jpg")
  setTimeout(() => {
  cards.classList.remove('zoomInZoomOut')
    picture.src="https://res.cloudinary.com/koraydundar/image/upload/v1559739488/hand1_mqddvc.jpg"
}, 1500)
  
  

    const flip = [ 1260, 1440]
    let pickANum = flip[(Math.floor(Math.random() * flip.length))]
    
    
    if(clickState===0){
       
        card.style.transform= `rotateX(${pickANum}deg)`
        
      
        card.style.transition= 'all 2s';
        
      
        clickState=1;
        
       
    } 
  
  else if (clickState === 1) {
        // cards.classList.add('zoomInZoomOut')
        card.style.transform= `rotateX(-${pickANum}deg)`
        card.style.transition= 'all 2s'
        
      
        clickState=0
        
    }
   
})
