

const calc = ()=>{

    const block = document.querySelectorAll('.main-block__item');
    const inputs = document.querySelectorAll('.main-block__input');
    const totalNum = document.querySelector('.header__price span');
    let totalCount = document.querySelector('.header__price span').innerHTML;
    const arr = [];
    let x;


    inputs.forEach((input, i) => {
        input.addEventListener('input',function(e){
            

            arr[i] = input.value * input.dataset.price;
            let res = arr.map(i=>x+=i,x=0).reverse()[0];
            totalNum.innerHTML = totalCount - res

           
             // res                   //value of all selected item
            // totalCount            // 100000
           // totalNum.innerHTML    // how many is left


        
            if(res >= totalCount){
                totalNum.innerHTML = 0
            }
        

            if(inputs[i].dataset.price > totalNum.innerHTML){
                inputs[i].parentElement.children[2].classList.add('_disabled');
                
            }else{
                inputs[i].parentElement.children[2].classList.remove('_disabled');
            }

            console.log(totalNum.innerHTML)

            console.log(inputs[i].dataset.price)


         
        })
    })





}
export default calc;


