

const calc = ()=>{


    const inputs = document.querySelectorAll('.main-block__input');
    const totalNum = document.querySelector('.header__price span');
    let totalCount = document.querySelector('.header__price span').innerHTML;
    const arr = [];
    let x;


    inputs.forEach((input, i) => {
        input.value = 0;
        checkValue();

        input.addEventListener('input',function(e){
            checkValue();
            reCount();
        })
    })

    function checkValue(){

        inputs.forEach((input, i) => {

            input.value = input.value.replace(/[\D]/g, ''); //only number

            if(input.value[0] == 0){
                input.value = input.value.slice(1) //delete 0
            }

            if(input.value == ''){
                input.value = 0 // if empty so 0
            }

            if(input.value == 0){
                inputs[i].parentElement.children[0].classList.add('_disabled');
            }else{
                inputs[i].parentElement.children[0].classList.remove('_disabled');
            }

        })
    }
    
    function reCount(){
        inputs.forEach((input, i) => {

            arr[i] = input.value * input.dataset.price;  // [100, 4340, 550, 1000]
            let res = arr.map(i=>x+=i,x=0).reverse()[0]; // 6000 reslut of that array
            totalNum.innerHTML = totalCount - res        // how many is left (active counter)
            // totalCount - 100000

        })
    }

    
    document.addEventListener('click', function (e) {//btns

        if (e.target.classList.contains("main-block__buy")) {
            ++e.target.parentElement.querySelector(".main-block__input").value;
            checkValue();
            reCount();
        } else if (e.target.classList.contains("main-block__sell")) {
            --e.target.parentElement.querySelector(".main-block__input").value;
            checkValue();
            reCount();
        }
    })




}
export default calc;


