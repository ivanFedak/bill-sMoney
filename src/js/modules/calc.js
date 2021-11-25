

const calc = ()=>{


    const inputs = document.querySelectorAll('.main-block__input');
    const totalNum = document.querySelector('.main-block__money span');
    let totalCount = document.querySelector('.main-block__money span').innerHTML;

    const modal = document.querySelector('.modal'); //---ignore

    const arr = [];
    let res; //how many we spend
    let x;


    inputs.forEach(input => {
        input.value = 0;
        checkValue();
        input.addEventListener('input',function(e){
            reCount(); //recount total price
            checkValue(); //checking input
            inputChecker(); // border

            generateList(); //receipt
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


            if(Number(totalNum.innerHTML) == 0 && !document.body.classList.contains('_showed')){ //show modal
                setTimeout(() => {
                    
                    modal.classList.add('_active');
                    document.body.classList.add('_lock', '_showed');
                }, 100);
            }

            
        })
    }

    function reCount(){
        inputs.forEach((input, i) => {

            arr[i] = input.value * input.dataset.price;  // [100, 4340, 550, 1000]
            res = arr.map(i=>x+=i,x=0).reverse()[0]; // 6000 reslut of that array
            totalNum.innerHTML = totalCount - res        // how many is left (active counter)
            // totalCount - 100000
           
            // !! let numVal = totalCount - res        // how many is left (active counter)
            


            // let step = Math.floor(inputs[i].dataset.price / 10000000000)
            // console.log(step)
            // let inter = setInterval(() => {
            //     Number(totalNum.innerHTML = totalNum.innerHTML - Number(step));
            //     if(Number(totalNum.innerHTML) <= Number(numVal)){
            //         totalNum.innerHTML = numVal
            //         clearInterval(inter);
            //         checkValue()
            //     }
            // }, 10);

        })
    }

    
    document.addEventListener('click', function (e) {//btns

        if (e.target.classList.contains("main-block__buy")) {
            ++e.target.parentElement.querySelector(".main-block__input").value; // +1
            reCount();
            checkValue();

            generateList(); //receipt

            if(Number(e.target.parentElement.querySelector(".main-block__input").dataset.price) > Number(totalNum.innerHTML)){
                e.target.classList.add('_disabled');
            }


        } else if (e.target.classList.contains("main-block__sell")) {
            --e.target.parentElement.querySelector(".main-block__input").value;
            reCount();
            checkValue();

            generateList(); //receipt
            if(Number(e.target.parentElement.querySelector(".main-block__input").dataset.price) <= Number(totalNum.innerHTML)){
                e.target.parentElement.querySelector(".main-block__buy").classList.remove('_disabled');
            }

        }
    })




//----------------------------------------Add to receipt--------------------------------------------\\

    const blocks = document.querySelectorAll('.main-block__item');


    let listArr = [];
    let resultArr = [];

    function generateList() {
        blocks.forEach(block=>{
            const input = block.querySelector('input');
            const name = block.querySelector('.main-block__title').innerHTML;
            const list = {};
            list.name = name 
            list.quan = input.value
            list.price = input.dataset.price * input.value

            listArr.push(list);
            // noCopyArr = listArr.filter((item,index) => listArr.indexOf(item) === index); //without copy
            resultArr = listArr.filter(item => item.quan > 0 ) //every item
        })

        listArr = []
        createItem(resultArr)
    }

    function createItem(data) { 

        document.querySelectorAll('.footer__item').forEach(item=> item.remove());

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
        document.querySelector('.footer__money span').innerHTML = res; //total
    }

    
 

}
export default calc;


