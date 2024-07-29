const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'VIDUSHI',
      lastName: 'SAINI',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am a student, developer, motivator and content creator. I am a life-long learner.I like to know about personalities and also to share my things with them. Althoug, I just want to surround myself with true people only. If i find perosonalities not good to talk then i prefer to read books only. If you like to know more about me come to me & talk to me. Thank you so much for visiting my project.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }

  let last_elem = document.querySelector('#child_span')
  let k_length = asabenehChallenges2020.keywords.length
  console.log(k_length);
  const keywords = asabenehChallenges2020.keywords;
const lastElem = document.querySelector('#child_span'); // Adjust selector to your actual element
const delay = 2000; // Delay in milliseconds

function displayKeywords(index = 0) {
  if (index < keywords.length) {
    lastElem.textContent = keywords[index];
    setTimeout(() => {
      displayKeywords(index + 1);
    }, delay);
  } else {
    // Restart the loop after the last keyword
    setTimeout(() => {
      displayKeywords(0);
    }, delay);
  }
}

// Start the loop
displayKeywords();



  let name_heading = document.querySelector('.name')
  let data_quality_elem = document.querySelector('.quality_data')
  let icon_elem = document.querySelector('.icon')
  let length = asabenehChallenges2020.author.titles.length
  let title = asabenehChallenges2020.author.titles
  name_heading.innerText = asabenehChallenges2020.author.firstName +' '+ asabenehChallenges2020.author.lastName;

  for(i = 0; i < length; i++){
   
    function displayTitle(delay){
  
        title.forEach((subtitle,index) => {
            setTimeout(() =>    {
                let qual_icon = subtitle.slice(0,1)
                let qual =  subtitle.slice(1,2)
    
                icon_elem.classList.remove('icon');
                data_quality_elem.classList.remove('quality_data');
                void icon_elem.offsetWidth; // Trigger a reflow, flushing the CSS changes
                void data_quality_elem.offsetWidth; // Trigger a reflow, flushing the CSS changes
                icon_elem.classList.add('icon');
                data_quality_elem.classList.add('quality_data');
                icon_elem.innerText = qual_icon
                
                data_quality_elem.textContent = qual
            },delay * index)
        })
    
      }
     
  }
  
    displayTitle(2000);
  
let about_elem = document.querySelector('.about')
about_elem.textContent =  asabenehChallenges2020.author.bio

 
 
function generateColor() {
    let character = 'abcdef1234567890';
    let color = ''
    for(i = 0 ; i < 6; i++){
         random = character[Math.floor(Math.random()*character.length)]
         color += random;
    }
    
return `#${color}`
}

function colorTwenty() {
   last_elem.style.color = generateColor()
}

setInterval(colorTwenty, 1000)