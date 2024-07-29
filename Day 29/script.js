document.addEventListener('DOMContentLoaded', () => {

    
let main_div = document.querySelector('.main_container')
let rem_elem = document.querySelector('.remedy')
let  char_elem = document.querySelector('.char')

let text = rem_elem.textContent 
console.log((text));
let words_array = Array.from(text)
console.log(words_array);


   
        
           words_array.forEach((each, index) => {
        
            let span = document.createElement('span');
            
        span.innerText = each;
        char_elem.appendChild(span);
       
       })
       let font_array = ['arial', 'cursive', 'veranda', 'segoe ui', 'Times New Roman','Segoe UI', 'cambria']
     
     
     function update() {
        let x = parseInt(Math.floor(Math.random()*7))
            let fontFamily = font_array[x]
            console.log('value = ',x);
        let tocolor = char_elem.querySelectorAll('span')
        tocolor.forEach(spans => {
            
            spans.style.color = generateColor()
            spans.classList.remove('emer_spans');
            void spans.offsetWidth; // Trigger reflow
            spans.classList.add('emer_spans');
            spans.style.fontWeight = `${x}50`
         
            spans.style.fontFamily = `${fontFamily}`
        })
     }
        update()
       setInterval(update, 2000)
    

function generateColor() {
    let character = 'abcdef1234567890';
    let color = ''
    for(i = 0 ; i < 6; i++){
         random = character[Math.floor(Math.random()*character.length)]
         color += random;
    }
    
return `#${color}`
}

function colorBack() {
    main_div.style.backgroundColor = generateColor()
}
colorBack()
setInterval(colorBack, 2000)

})
