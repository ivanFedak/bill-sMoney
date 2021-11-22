const price = ()=>{
    
    const block = document.querySelector('.main-block__priceBlock');
    const blockHeight = block.offsetHeight;
    const blockOffset = offset(block).top;
    const moveStart = 1;

    window.addEventListener('scroll',fixOnScroll)
    
    function fixOnScroll() {

        let blockPoint = window.innerHeight - blockHeight / moveStart;

        if(blockHeight > window.innerHeight){
            blockPoint = window.innerHeight - window.innerHeight / moveStart;
        }

        if(window.scrollY > blockOffset - moveStart){
            block.classList.add('_fixed');
            console.log(1)
        }else{
            console.log(0)
            block.classList.remove('_fixed');
        }
    }


    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    


}
export default price;