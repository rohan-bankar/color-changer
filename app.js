const body = document.querySelector('body');
const button = document.querySelectorAll('.button')
console.log(button);

button.forEach((button)=>{
    console.log(button);
    addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                break;
            case 'white':
                break;
            case 'blue':
                break;
            case 'yellow':
                break;  
            case 'purple':
                break;  
            case 'orange':
                break;      
            default:
                break;
        }
        body.style.backgroundColor = e.target.id;
    })
})