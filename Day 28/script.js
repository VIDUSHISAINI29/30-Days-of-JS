    let add_elem = document.querySelector('#addplayer');
    let input_elem1 = document.querySelector('#input1')
    let input_elem2 = document.querySelector('#input2')
    let input_elem3 = document.querySelector('#input3')
    let input_elem4 = document.querySelector('#input4')
    let player_elem = document.querySelector('#head')
    let main_elem = document.querySelector('.main_container')
    let alert_elem = document.querySelector('.alert')
    let cst_elem = document.querySelector('.cst1')
    let cst_elem2 = document.querySelector('.cst2')
    let cst_elem3 = document.querySelector('.cst3')

    let copy_two = document.querySelector('.player2')
    let score_elem = document.querySelector('.score')


    let score_text = parseInt(score_elem.textContent);
    console.log(score_text);
    cst_elem2.addEventListener('click', () => {
    score_text +=5
        score_elem.innerText = `${score_text}`;
    })
    cst_elem3.addEventListener('click', () => {
        score_text -=5
        score_elem.innerText = `${score_text}`;
    })
    cst_elem.addEventListener('click', () => {
        copy_two.style.display = 'none'
    })






    add_elem.addEventListener('click', () => {
        console.log("Add player button clicked");

        if (input_elem1.value.trim() === '' || input_elem2.value.trim() === '' || input_elem3.value.trim() === '' || input_elem4.value.trim() === '') {
            alert_elem.style.display = 'flex';
            console.log("Showing alert: At least one input is empty");
        } 
        else{
            alert_elem.style.display = 'none';
            
            let new_player = document.createElement('div')
            main_elem.appendChild(new_player)
            new_player.setAttribute('class', 'player4')
            
        
            let div_time_name = document.createElement('div')
            new_player.appendChild(div_time_name)
            div_time_name.setAttribute('class', 'name_time')
        
            let span1 = document.createElement('span')
            div_time_name.appendChild(span1)
            span1.innerText = `${input_elem1.value.toUpperCase()} ${input_elem2.value.toUpperCase()}`
        
            
            let span2 = document.createElement('span')
            div_time_name.appendChild(span2)
        
            let div_country = document.createElement('div')
            new_player.appendChild(div_country)
            div_country.setAttribute('class','country')
            div_country.innerText = input_elem3.value.toUpperCase()
        
        
            let div_score = document.createElement('div')
            div_score.setAttribute('class','score_copy')
            new_player.appendChild(div_score)
            div_score.innerText = input_elem4.value
        
        
        
        
            let div_customize = document.createElement('div')
            div_customize.setAttribute('class', 'customize')
        new_player.appendChild(div_customize)
        
        
        
            let div_btn1 = document.createElement('div')
            div_customize.appendChild(div_btn1)
            div_btn1.setAttribute('class', 'custom_btn')
            div_btn1.setAttribute('id', 'btn1')
        
            let btn_img =document.createElement('img')
            div_btn1.appendChild(btn_img)
            btn_img.src = 'asset/bin.svg'
            
            let div_btn2 = document.createElement('div')
            div_customize.appendChild(div_btn2)
            div_btn2.innerText = '+5'
            div_btn2.setAttribute('class', 'custom_btn')
            div_btn2.setAttribute('id', 'btn2')
        
            let div_btn3 = document.createElement('div')
            div_customize.appendChild(div_btn3)
            div_btn3.innerText = '-5'
            div_btn3.setAttribute('class', 'custom_btn')
            div_btn3.setAttribute('id', 'btn3')

           
            div_btn1.addEventListener('click', () => {
                new_player.style.display = 'none'
            })

            let score_text = parseInt(div_score.textContent);
        
            div_btn2.addEventListener('click', () => {
            score_text +=5
                div_score.innerText = `${score_text}`;
            })
            div_btn3.addEventListener('click', () => {
                score_text -=5
                div_score.innerText = `${score_text}`;
            })
                }
        });


