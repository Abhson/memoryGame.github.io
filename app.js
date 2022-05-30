const cardArray=[
    {
        name:'instagram',
        img: 'images/instagram.png'
    },
    {
        name:'youtube',
        img: 'images/youtube.png'
    },
    {
        name:'whatsapp',
        img: 'images/whatsapp.png'
    },
    {
        name:'snapchat',
        img: 'images/snapchat.png'
    },
    {
        name:'pintrest',
        img: 'images/pintrest.png'
    },
    {
        name:'twitter',
        img: 'images/twitter.png'
    },
    {
        name:'linkedin',
        img: 'images/linkedin.png'
    },
    {
        name:'facebook',
        img: 'images/facebook.png'
    },
    {
        name:'instagram',
        img: 'images/instagram.png'
    },
    {
        name:'youtube',
        img: 'images/youtube.png'
    },
    {
        name:'whatsapp',
        img: 'images/whatsapp.png'
    },
    {
        name:'snapchat',
        img: 'images/snapchat.png'
    },
    {
        name:'pintrest',
        img: 'images/pintrest.png'
    },
    {
        name:'twitter',
        img: 'images/twitter.png'
    },
    {
        name:'linkedin',
        img: 'images/linkedin.png'
    },
    {
        name:'facebook',
        img: 'images/facebook.png'
    }
    
]
// console.log(cardArray)

cardArray.sort(()=> 0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
let cardChoosen= []
let cardChoosenIds=[]
const cardWon=[]
let totalScore=0

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card= document.createElement('img')
        card.classList.add('backStyle')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()


function checkMatch(){

    // document.querySelectorAll('#grid img')
    const cards= document.querySelectorAll('img')
    const optionOneId= cardChoosenIds[0]
    const optionTwoId= cardChoosenIds[1]
    // console.log("check for match")

    if(cardChoosen[0] == cardChoosen[1] && cardChoosenIds[0]!=cardChoosenIds[1]) {
        let score= document.getElementById('result')
        totalScore= totalScore+2
        score.textContent= totalScore
    }


    if(cardChoosen[0] == cardChoosen[1] && cardChoosenIds[0]!=cardChoosenIds[1]){
        // alert("check for match")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }
    cardChoosen=[]
    cardChoosenIds=[]
    
}

 
function flipCard(){
    const cardId= this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosen.length === 2){
        
        setTimeout( checkMatch, 500)
    }
}





