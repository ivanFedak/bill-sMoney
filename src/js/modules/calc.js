

const calc = ()=>{


    const inputs = document.querySelectorAll('.main-block__input');
    const totalNum = document.querySelector('.main-block__money span');
    let totalCount = document.querySelector('.main-block__money span').innerHTML;

    const arr = [];
    let x;


    inputs.forEach((input, i) => {
        input.value = 0;
        checkValue();
        input.addEventListener('input',function(e){
            reCount();
            checkValue();
            inputChecker();
        })
    })


    function inputChecker() {
        inputs.forEach(input=>{
            if(Number(input.dataset.price) > Number(totalNum.innerHTML)){ // can't buy anymore
                if(!/-/g.test(Math.floor((Number(totalNum.innerHTML) + Number((input.value * input.dataset.price))) / input.dataset.price))){
                    input.value = Math.floor((Number(totalNum.innerHTML) + Number((input.value * input.dataset.price))) / input.dataset.price)
                    reCount()
                    checkValue()
                }
            }
        })
    }
    
    function checkValue(){
        inputs.forEach((input, i) => {

            input.value = input.value.replace(/[\D]/g, ''); //only number

            if(input.value[0] == 0){//delete 0
                input.value = input.value.slice(1) 
            }

            if(input.value == ''){// if empty so 0
                input.value = 0 
            }

            if(input.value == 0){// can't sold
                inputs[i].parentElement.children[0].classList.add('_disabled');
            }else{
                inputs[i].parentElement.children[0].classList.remove('_disabled');
            }

            if(Number(input.dataset.price) > Number(totalNum.innerHTML)){ // can't buy anymore
                input.nextElementSibling.classList.add('_disabled');
                input.setAttribute('max', input.value);
            }else{
                input.removeAttribute('max');
                input.nextElementSibling.classList.remove('_disabled');
            }


            
        })
    }

    function reCount(){
        inputs.forEach((input, i) => {

            arr[i] = input.value * input.dataset.price;  // [100, 4340, 550, 1000]
            let res = arr.map(i=>x+=i,x=0).reverse()[0]; // 6000 reslut of that array
            totalNum.innerHTML = totalCount - res        // how many is left (active counter)
            // totalCount - 100000

            // if(Number(totalNum.innerHTML) < 0){
            //     totalNum.innerHTML = 0;
            // }
            
        })
    }

    
    document.addEventListener('click', function (e) {//btns

        if (e.target.classList.contains("main-block__buy")) {
            ++e.target.parentElement.querySelector(".main-block__input").value; // +1
            reCount();
            checkValue();
            

            if(Number(e.target.parentElement.querySelector(".main-block__input").dataset.price) > Number(totalNum.innerHTML)){
                e.target.classList.add('_disabled');
            }


        } else if (e.target.classList.contains("main-block__sell")) {
            --e.target.parentElement.querySelector(".main-block__input").value;
            reCount();
            checkValue();

            if(Number(e.target.parentElement.querySelector(".main-block__input").dataset.price) <= Number(totalNum.innerHTML)){
                e.target.parentElement.querySelector(".main-block__buy").classList.remove('_disabled');
            }

        }
    })


//Add to receipt

    const listArr = [];

    const list = {};
    list.name = 'hello' 
    list.quan = 2
    list.price = 110
    listArr.push(list);
    console.log(listArr)

    function createItem(data) {

        data.forEach(item => {

            const {name,quan,price} = item;

            let goods = document.createElement('div');
            goods.classList.add('footer__item');

            goods.innerHTML = `
                <div class="footer__name">${name}</div>
                <div class="footer__quantity">x<span>${quan}</span></div>
                <div class="footer__price">$ <span>${price}</span></div> 
            `

            document.querySelector('.footer__body').appendChild(goods);
        });
    }
    
    createItem(listArr)
 

}
export default calc;


