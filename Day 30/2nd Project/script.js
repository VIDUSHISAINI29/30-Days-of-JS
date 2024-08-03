const first = document.querySelector('.input1')
const first_alert = document.querySelector('#alert1')

 let allow_first = /^[a-zA-Z0-9]+$/
first.addEventListener('input', () => {
    first.style.backgroundColor = '#addffe'
   
let value1 = first.value.trim()
if (!allow_first.test(value1) || value1.length < 3 || value1.length > 16) {
    first_alert.innerText = '*First Name must be alphanumeric and contain 3-16 characters';
    first.style.border = '2px solid red'
} else {
    first_alert.innerText = ''; 
    first.style.border = '2px solid #03b55f'// Clear the alert if the input is valid
}

})


const second = document.querySelector('.input2')
const second_alert = document.querySelector('#alert2')

 second.addEventListener('input', () => {
      second.style.backgroundColor = '#addffe'
    let value1 = second.value.trim()
    if (!allow_first.test(value1) || value1.length < 3 || value1.length > 16) {
         second_alert.innerText = '*Last Name must be alphanumeric and contain 3-16 characters';
          second.style.border = '2px solid red'
    } else {
        second_alert.innerText = '';
        second.style.border = '2px solid #03b55f' // Clear the alert if the input is valid
    }
    
    })

    const third = document.querySelector('.input3')
const third_alert = document.querySelector('#alert3')


     let allow_third = /^[a-zA-Z0-9.@]+$/

     third.addEventListener('input', () => {
    third.style.backgroundColor = '#addffe'
        let value1 = third.value.trim()
        if (!allow_third.test(value1) || value1.length < 5) {
             third_alert.innerText = '*Email must be a valid address, e.g. example@example.com';
              third.style.border = '2px solid red'
        } else {
            third_alert.innerText = '';
            third.style.border = '2px solid #03b55f' // Clear the alert if the input is valid
        }
        
        })

        const fourth = document.querySelector('.input4')
const fourth_alert = document.querySelector('#alert4')

let allow_fourth = /^[a-zA-Z0-9-@_]+$/

fourth.addEventListener('input', () => {
   fourth.style.backgroundColor = '#addffe'
   let value1 = fourth.value.trim()
   if (!allow_fourth.test(value1) || value1.length < 6  || value1.length > 20) {
        fourth_alert.innerText = 'Password must be alphanumeric(@, _, and - are also allowed) and between 6-20 characters';
         fourth.style.border = '2px solid red'
   } else {
       fourth_alert.innerText = '';
       fourth.style.border = '2px solid #03b55f' // Clear the alert if the input is valid
   }
})

const fifth = document.querySelector('.input5')
const fifth_alert = document.querySelector('#alert5')

let allow_fifth = /^[0-9-]+$/

fifth.addEventListener('input', () => {
   fifth.style.backgroundColor = '#addffe'
   let value1 = fifth.value.trim()
   if (!allow_fifth.test(value1) || value1.length  < 10  ) {
        fifth_alert.innerText = 'A valid Telephone number (10 digits and 333-333-3334 )';
         fifth.style.border = '2px solid red'
   } else {
       fifth_alert.innerText = ''; 
       fifth.style.border = '2px solid #03b55f'// Clear the alert if the input is valid
   }
})
const sixth = document.querySelector('.input6')
const sixth_alert = document.querySelector('#alert6')

let allow_sixth = /^[a-z-_]+$/

sixth.addEventListener('input', () => {
   sixth.style.backgroundColor = '#addffe'
   let value1 = sixth.value.trim()
   if (!allow_sixth.test(value1) || value1.length  < 8 || value1.length > 50  ) {
        sixth_alert.innerText = 'Bio must contain only lowercase letters, underscores, hyphens and  be 8-50 characters';
         sixth.style.border = '2px solid red'
   } else {
       sixth_alert.innerText = '';
       sixth.style.border = '2px solid #03b55f' // Clear the alert if the input is valid
   }
})