const form = document.querySelector('#form')
const small = document.querySelector('.message')
const span = document.querySelector('.success-span')
const success = document.querySelector('.success')
const contain = document.querySelector('.container')
const dismiss = document.querySelector('.Dismiss')




/* form function */
form.addEventListener('submit', (e) => {
    e.preventDefault()

        function redirect(){
            window.location = '#section2'
            success.classList.add('active')
        }

        const input = document.querySelector('.input').value

    if (window.matchMedia('(max-width:670px)').matches){
        if (input.includes('@') && input.endsWith('.com')) {
            span.textContent = input; 
            redirect()
            contain.classList.add ('hidden')
            small.style.display = 'none'
           
        } else {
            small.style.display = 'block'
            small.textContent = 'Invalid input. Please enter a valid email!!'
        }
    }

    if (input.includes('@') && input.endsWith('.com')) {
        span.textContent = input; 
        redirect()
        contain.classList.add ('hidden')
        small.style.display = 'none'
       
    } else {
        small.style.display = 'block'
        small.textContent = 'Invalid input. Please enter a valid email!!'
    }

});

/*success function*/
dismiss.addEventListener('click', (e) =>{
    e.preventDefault()

    contain.classList.remove('hidden');
    success.classList.remove('active');
    window.location.href = '#section1';

    if (window.matchMedia('(max-width:670px)').matches){
        contain.classList.remove('hidden');
        success.classList.remove('active');
        window.location.href = '#section1';
    }
    
})


