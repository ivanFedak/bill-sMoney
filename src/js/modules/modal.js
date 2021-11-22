const modal = ()=>{
    
    const modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.modal__close'),
          showBtn = document.querySelector('.modal__btn'),
          docBody = document.querySelector('body'),
          money = document.querySelector('.main-block__money span');
    
    if(Number(money.innerHTML) == 0 && !docBody.classList.contains('_showed')){
        modal.classList.add('_active');
        docBody.classList.add('_lock', '_showed');
    }

    function closeModal(e) {
        const target = e.target;
        if(!target.closest('.modal__container')){
            modal.classList.remove('_active');
            docBody.classList.remove('_lock');
        }
        if(target.closest('.modal__close')){
            modal.classList.remove('_active');
            docBody.classList.remove('_lock');
        }
    }

 
    document.addEventListener('click', closeModal);
}
export default modal;