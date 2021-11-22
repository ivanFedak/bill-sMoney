const modal = ()=>{
    
    const modal = document.querySelector('.modal'),
          showBtn = document.querySelector('.modal__btn'),
          docBody = document.querySelector('body'),
          money = document.querySelector('.main-block__money span');
    
    if(Number(money.innerHTML) == 0 && !docBody.classList.contains('_showed')){
        modal.classList.add('_active');
        docBody.classList.add('_lock', '_showed');
    }

    function closeModal(e) {
        const target = e.target;
        if(!target.closest('.modal__container') || target.closest('.modal__close') || target.closest('.modal__btn')){
            modal.classList.remove('_active');
            docBody.classList.remove('_lock');
        }
    }

    document.addEventListener('click', closeModal);

    showBtn.addEventListener('click',function(e){
        closeModal(e);
        setTimeout(() => {
            
            const block = document.querySelector('footer');
            const blockValue = block.getBoundingClientRect().top +  window.pageYOffset;
    
            window.scrollTo({//Заставляе скрол робити
                top: blockValue,//Свеху 
                behavior: "smooth"
            });
        }, 200);
        e.preventDefault();
    })
    
}
export default modal;