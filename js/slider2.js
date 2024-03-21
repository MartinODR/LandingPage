(function(){            //funcion que se llama a si misma para proteger el codigo 

    const sliders = [...document.querySelectorAll('.testimony2__body')];
    const buttonNext = document.querySelector('#next2');
    const buttonBefore = document.querySelector('#before2');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);    
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony2__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony2__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony2__body--show');

        console.log(value);
    }
    
})();