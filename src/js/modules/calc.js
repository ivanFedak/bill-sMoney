

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
            reCount();
            checkValue();
        })
    })



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


            // console.log(Math.floor(300000 / 70000))

            if(Number(input.dataset.price) >= Number(totalNum.innerHTML)){ // can't buy anymore
                input.nextElementSibling.classList.add('_disabled');
      
                
                 // console.log(Math.floor(Number(totalNum.innerHTML)  / Number(input.dataset.price)))
            }else{
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




}
export default calc;


