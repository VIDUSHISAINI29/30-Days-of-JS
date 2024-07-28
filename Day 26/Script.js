let btn1 = document.querySelector('.starting')
let btn2 = document.querySelector('.any_word')
let btn3 = document.querySelector('.icon')
let prompt = document.querySelector('.search')
  console.log(prompt.value);

  function clearDiv() {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}


let countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  let div = document.querySelector('.country_div_container')
let btn1_flag = false;

countries = countries.map(country => country.toUpperCase());
console.log(countries);

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = '#531cb0'
    btn2.style.backgroundColor = '#895be6'
    btn3.style.backgroundColor = '#895be6'

    
   if(prompt.value.trim() !== ' '){
    btn1_flag = true;
   }
   if(prompt.value.trim() !== ' '){
    btn2_flag = false;
   }
   
})

prompt.addEventListener('input', () => {
 
    if(btn1_flag ){
       
        country_sequence_form()
    }
    if(btn2_flag){
        country_anyword_form()
    }
    
    
})

let selected_country_copy = []

function country_sequence_form(){

    let size = prompt.value.trim().toUpperCase();


    clearDiv()

      let selected_country = []
  for( i = 0; i < countries.length; i++)
      {
         size = prompt.value.trim().toUpperCase();

      
          let part = countries[i].startsWith( size)
          if(part)
      {
          selected_country.push(countries[i])
              }
      }
      for(j = 0; j < selected_country.length; j++)
          {
                    let elem = document.createElement('div')
                           elem.setAttribute('class', 'name')
                           elem.style.width = '200px'
                           elem.style.height = '210px'
                           elem.style.margin = '20px'
                           elem.innerText = selected_country[j]
                           elem.style.backgroundColor = '#ef2d4c'
                           div.appendChild(elem)
                
               
               }
             
      console.log(selected_country);
      selected_country_copy = selected_country
}


function country_anyword_form(){

    let size = prompt.value.trim().toUpperCase();


    clearDiv()

      let selected_country = []
  for( i = 0; i < countries.length; i++)
      {
         size = prompt.value.trim().toUpperCase();

      
          let part = countries[i].includes( size)
          if(part)
      {
          selected_country.push(countries[i])
              }
      }
      for(j = 0; j < selected_country.length; j++)
          {
                    let elem = document.createElement('div')
                           elem.setAttribute('class', 'name')
                           elem.style.width = '200px'
                           elem.style.height = '210px'
                           elem.style.margin = '20px'
                           elem.innerText = selected_country[j]
                           elem.style.backgroundColor = '#ef2d4c'
                           div.appendChild(elem)
                
               
               }
            }

            let btn2_flag = false;
btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = '#531cb0'
      btn3.style.backgroundColor = '#895be6'
      btn1.style.backgroundColor = '#895be6'

      if(prompt.value.trim() !== ' '){
        btn2_flag = true;
       }
       if(prompt.value.trim() !== ' '){
        btn1_flag = false;
       }
})

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = '#531cb0'
        btn2.style.backgroundColor = '#895be6'
        btn1.style.backgroundColor = '#895be6'
        countries.reverse()
        
        clearDiv()
        let selected_country = []
        for(j = 0; j < countries.length; j++)
            {
                selected_country.push(countries[j])
                      let elem = document.createElement('div')
                             elem.setAttribute('class', 'name')
                             elem.style.width = '200px'
                             elem.style.height = '210px'
                             elem.style.margin = '20px'
                             elem.innerText = selected_country[j]
                             elem.style.backgroundColor = '#ef2d4c'
                             div.appendChild(elem)
                  
                 
                 }

  
})                                                                                   



  



 