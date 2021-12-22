const cards = document.querySelectorAll('.card');
//  console.log('карточки',cards);

let flippedCard = false;
let card_1
let card_2
let cardsLock = false;



const flipCard = e => {
        // console.log('event', e.target.parentElement);
    if (cardsLock) return;
    const target = e.target.parentElement;

    target.classList.add("flip");

// console.log('Герой', target.dataset.hero);

if (!flippedCard) {
    //первое нажатие
    flippedCard = true;
    card_1 = target;
}
else {
    //2-й клик
    flippedCard = false;
    card_2 = target;

    checkPicture();
    }
};

//проверяем совпадение персонажей
const checkPicture = () => {
    if (card_1.dataset.hero === card_2.dataset.hero) { 
        phrases();
        // console.log('одинаковые')
        card_1.removeEventListener('click', flipCard);
        card_2.removeEventListener('click', flipCard);
       
    } 
    else {
        // console.log('разные')
        cardsLock = true;

        setTimeout(() => {
        card_1.classList.remove('flip');
        card_2.classList.remove('flip');

        cardsLock = false;
        },1000);
    }

}

cards.forEach(card => { 

    card.addEventListener('click', flipCard);

    const randomNum = Math.floor(Math.random() * cards.length);
    card.style.order = randomNum;
});

let quotes = [
    ["«Сколько у нас денег?» — «Три доллара». — «Блин, Картман, ты ж говорил, у нас куча денег!» — «Да. Но я не учел тот факт, что слаб в математике».", "Стэн Марш"],
     ["Ты что, не знаешь главный закон физики? Все прикольное стоит минимум восемь баксов.", "Эрик Картман"], 
     ["Порой логики и доводов недостаточно. Порой надо зачморить тех, кто думает иначе.","Эрик Картман"],
     ["Ха-ха-ха! Как это нет Зубной Феи? Ты ещё скажи, что нет Санта-Клауса, Иисуса, или ещё-чего подобного!", "Эрик Картман"],
     ["Необходимо сначала пожить, получить от жизни удовольствие, а уже потом все испортить серьезными отношениями.", "Кайл Брофловски"],
     ["Семью определяет не кровное родство, семья — это те, о ком ты заботишься. Поэтому вы для меня больше, чем друзья: вы — моя семья.", "Кайл Брофловски"],
     ["Подумайте, ведь Люк Скайуокер и Санта Клаус повлияли на вашу жизнь больше, чем все реальные люди в этой комнате.", "Кайл Брофловски"],
     ["Приключения случаются только если ты идёшь туда, куда не следует.", "Стэн Марш"],
     ["Никогда не слышал, чтобы слова «всего лишь» и «конфеты» употреблялись в одном предложении!", "Эрик Картман"],
     ["Я счастлив, как весенний цветок! Я снова готов сеять хаос и разрушение!", "Баттерс"],
     ["«Ты хочешь сказать, что четверть американцев — идиоты?» — «Да, четверть американцев — идиоты. Вот нас же четверо? Ты — идиот, как раз четвертая часть».", "Кайл Брофловски"],
     ["«Ты же ничего не понимаешь в христианстве!» — «Я знаю достаточно, чтобы им пользоваться.»", "Эрик Картман" ]
];

    const phrases = () => {
   
        // выбираем случайную фразу из массива
        let quote = quotes[ Math.floor( Math.random() * quotes.length ) ];
    
        // цитата
        let phrase = document.querySelector("#phrase");

        // автор
        let author = document.querySelector("#author");
       
       
    
        phrase.innerHTML = quote[0];
        author.innerHTML = quote[1];
        
         };

         
