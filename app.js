const cardArray=[
    {
        name:'fries',
        img:'images/fries.jpg',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.jpg',
    },
    {
        name:'hotdog',
        img:'images/hotdog.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.jpg',
    },
    {
        name:'milkshake',
        img:'images/milkshake.jpg',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    },
    {
        name:'fries',
        img:'images/fries.jpg',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.jpg',
    },
    {
        name:'hotdog',
        img:'images/hotdog.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.jpg',
    },
    {
        name:'milkshake',
        img:'images/milkshake.jpg',
    },
    {
        name:'pizza',
        img:'images/pizza.jpg',
    }
]
cardArray.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]


function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch()
{
    const cards=document.querySelectorAll('img')
    if(cardsChosenIds[0]==cardsChosenIds[1])
    {
        //alert('you have clicked the same image')
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.jpg')
    }
    else if(cardsChosen[0]==cardsChosen[1]  )
    {
        //alert('You found a match')
        cards[cardsChosenIds[0]].setAttribute('src','images/white.jpg')
        cards[cardsChosenIds[1]].setAttribute('src','images/white.jpg')
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)

    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.jpg')
        //alert('sorry try again')
    }
    resultDisplay.textContent=cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]
    if(cardsWon.length==cardArray.length/2)
    {
        resultDisplay.textContent='Congratulations you found them all'
    }

}
function flipCard()
{
    const cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2)
    {
        setTimeout(checkMatch,500)
    }


}