const cards = ()=>{
    
    const db = [
        {
            img: 'burger.png',
            title: 'Big Mac',
            price: '2',
        },
        {
            img: 'Coca-Cola.png',
            title: 'Coca-Cola',
            price: '5',
        },
        {
            img: 'cube.png',
            title: 'rubik\'s cube',
            price: '10',
        },
        {
            img: 'iphone.png',
            title: 'Iphone 13',
            price: '1500',
        },
        {
            img: 'videoCard.png',
            title: 'Nvidia Rtx 3090',
            price: '3800',
        },
        {
            img: 'cybertruck.png',
            title: 'Cybertruck',
            price: '70000',
        }

    ]

    function createItem(data) {
        data.forEach(item => {
            const {img,title,price} = item;

            let card = document.createElement('div');
            card.classList.add('main-block__item');

            card.innerHTML = `

                <div class="main-block__image">
                    <img src="./img//goods/${img}" alt="burger">
                </div>

                <div class="main-block__content">
                    <div class="main-block__title">${title}</div>
                    <div class="main-block__price">$${price}</div>
                </div>

                <div class="main-block__controls">
                    <button class="main-block__sell btn">Sell</button>
                    <input autocomplete='off' pattern="\d*" type='number' name='form[]' class='main-block__input' data-price=${price}>
                    <button class="main-block__buy btn">Buy</button>
                </div>

            
            `
            document.querySelector('.main-block__body').appendChild(card);
        });
    }
    createItem(db)







   





}
export default cards;