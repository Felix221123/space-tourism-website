//all variables
const menuBar = document.getElementById('menu-hamburger')
const closeBtn = document.getElementById('close-btn')
const menuContainer = document.getElementById('main-navbar')
const menuNavs = document.querySelectorAll('#menu-container button')





//closing the menu bar
const screenSize = window.innerWidth

// this animation of closing and opening of navbars will occur if the screen size is less than or equal to 767px
if (screenSize <= 767) {
    function closeMenu() {
        menuContainer.style.animation = 'menu-close ease-in-out 0.5s';
        menuContainer.style.opacity = '0';
    }

    closeBtn.addEventListener('click', function () {
        closeMenu();
    });

    menuContainer.addEventListener('animationend', function () {
        if (menuContainer.style.opacity === '0') {
            menuContainer.style.animation = 'none';
            menuContainer.style.display = 'none';
            menuContainer.style.opacity = '1';
        }
    });

    menuBar.addEventListener('click', function () {
        menuContainer.style.animation = 'menu-open ease-in-out 0.5s';
        menuContainer.style.display = 'block';
    });

    menuNavs.forEach(eachNav => {
        eachNav.addEventListener('click', function () {
            // event.preventDefault();
            menuNavs.forEach(nav => {
                nav.style.borderRight = 'none';
            });

            eachNav.style.borderRight = '0.2rem solid white';
            closeMenu();

            setTimeout(() => {
                if (menuContainer.style.opacity === '0') {
                    menuContainer.style.animation = 'none';
                    menuContainer.style.display = 'none';
                    menuContainer.style.opacity = '1';
                    window.location.href = eachNav.dataset.href; 
                }
            }, 300);
        });
    });

    
}




//keeping the button active if users are switching between pages
if (screenSize >= 768) {
    menuNavs.forEach(eachNavbBtn => {
        eachNavbBtn.addEventListener('click', function () {



            menuNavs.forEach(eachBtn => {
                eachBtn.style.borderBottom = ''
                eachNavbBtn.classList.remove('all-transitions')

            })

            eachNavbBtn.style.borderBottom = '0.3rem solid #FFFFFF'
            eachNavbBtn.classList.add('all-transitions')

            window.location.href = eachNavbBtn.dataset.href;

        })
    })
}









document.addEventListener("DOMContentLoaded", function() {
    //getting variables from the html file inside the destination page
    const destinationMoonBtn = document.getElementById('moon-section')
    const destinationMarsBtn = document.getElementById('mars-section')
    const destinationEuropaBtn = document.getElementById('europa-section')
    const destinationTitanBtn = document.getElementById('titan-section')

    const destinationImg = document.getElementById('planet-image-style')

    const headerSectionPlanet = document.getElementById('header-section-txt')
    const textSectionPlanet = document.getElementById('text-section-moon')
    const distNum = document.getElementById('dist-num')
    const timeNum = document.getElementById('time-num')

    //function that uses the object parameter obj(data retrieved from the json file)


    //the function that deals with the moon section of the pages
    function destinationMoonPage(obj) {
        destinationMoonBtn.addEventListener('click', function () {
            try {
                //btn transition
                destinationMoonBtn.classList.add('all-transitions')

                headerSectionPlanet.innerText = obj['destinations'][0]['name'];
                textSectionPlanet.innerText = obj['destinations'][0]['description'];
                distNum.innerText = obj['destinations'][0]['distance'];
                timeNum.innerText = obj['destinations'][0]['travel']

                destinationImg.src = obj['destinations'][0]['images']['webp']
            } catch (error) {
                console.error('Error in destinationMoonPage:', error);
            }
        });
    }



    //function that deals with the mars section of the page
    function destinationMarsPage(obj) {
        destinationMarsBtn.addEventListener('click', function () {
            //btn transition
            destinationMarsBtn.classList.add('all-transitions')

            headerSectionPlanet.innerText = obj['destinations'][1]['name'];
            textSectionPlanet.innerText = obj['destinations'][1]['description'];
            distNum.innerText = obj['destinations'][1]['distance'];
            timeNum.innerText = obj['destinations'][1]['travel']

            destinationImg.src = obj['destinations'][1]['images']['webp']

        })
    };

    //function that deals with the europa section of the page
    function destinationEuropaPage(obj) {
        destinationEuropaBtn.addEventListener('click', function () {
            //btn transition
            destinationEuropaBtn.classList.add('all-transitions')

            headerSectionPlanet.innerText = obj['destinations'][2]['name'];
            textSectionPlanet.innerText = obj['destinations'][2]['description'];
            distNum.innerText = obj['destinations'][2]['distance'];
            timeNum.innerText = obj['destinations'][2]['travel']

            destinationImg.src = obj['destinations'][2]['images']['webp']
    
        })
        
    };

    //function that deals with the titan section of the page
    function destinationTitanPage(obj) {
        destinationTitanBtn.addEventListener('click', function () {
            //btn transition
            destinationTitanBtn.classList.add('all-transitions')

            headerSectionPlanet.innerText = obj['destinations'][3]['name'];
            textSectionPlanet.innerText = obj['destinations'][3]['description'];
            distNum.innerText = obj['destinations'][3]['distance'];
            timeNum.innerText = obj['destinations'][3]['travel']

            destinationImg.src = obj['destinations'][3]['images']['webp']
    
        })
    };



    //navigation styles for each section in moon destination stage
    //const destinationNavsContainer = document.getElementsByClassName('navbar-section')
    const destinationNavs = document.querySelectorAll('.navbar-section button')


    destinationNavs.forEach(eachNav => {
        eachNav.addEventListener('click', function () {
            
            destinationNavs.forEach(each => {
                each.style.borderBottom = 'none'
            })

            eachNav.style.borderBottom = '0.1875rem solid #FFFFFF'
        })
    })



    //getting variables from the html file inside the crew page
    const crewBtnOne = document.getElementById('dot-1')
    const crewBtnTwo = document.getElementById('dot-2')
    const crewBtnThree = document.getElementById('dot-3')
    const crewBtnFourth = document.getElementById('dot-4')

    const crewImage = document.getElementById('crew-image-style')

    const roleSection = document.getElementById('role-section')
    const individualName = document.getElementById('individual-name')
    const individualDescription = document.getElementById('individual-description')

    //functions to make the text change while you are pressing on the dots 
    function crewPageOne(obj) {
        crewBtnOne.addEventListener('click', function () {
            crewBtnOne.classList.add('all-transitions');
            //changing the src of the file path in the img tag
            crewImage.src = obj['crew'][0]['images']['webp']

            roleSection.innerText = obj['crew'][0]['role']
            individualName.innerText = obj['crew'][0]['name']
            individualDescription.innerText = obj['crew'][0]['bio']

        })
        
    }

    function crewPageTwo(obj) {
        crewBtnTwo.addEventListener('click', function () {
            crewBtnTwo.classList.add('all-transitions');
            //changing the src of the file path in the img tag
            crewImage.src = obj['crew'][1]['images']['webp']

            roleSection.innerText = obj['crew'][1]['role']
            individualName.innerText = obj['crew'][1]['name']
            individualDescription.innerText = obj['crew'][1]['bio']

        })
        
    }


    function crewPageThree(obj) {
        crewBtnThree.addEventListener('click', function () {
            crewBtnThree.classList.add('all-transitions');
            //changing the src of the file path in the img tag
            crewImage.src = obj['crew'][2]['images']['webp']

            roleSection.innerText = obj['crew'][2]['role']
            individualName.innerText = obj['crew'][2]['name']
            individualDescription.innerText = obj['crew'][2]['bio']

        })
        
    }

    function crewPageFourth(obj) {
        crewBtnFourth.addEventListener('click', function () {
            crewBtnFourth.classList.add('all-transitions');
            //changing the src of the file path in the img tag
            crewImage.src = obj['crew'][3]['images']['webp']

            roleSection.innerText = obj['crew'][3]['role']
            individualName.innerText = obj['crew'][3]['name']
            individualDescription.innerText = obj['crew'][3]['bio']

        })
        
    }


    //function to make each background white when clicked
    const dotNavs = document.querySelectorAll('.dots-changing-slides button')

    dotNavs.forEach(eachDotNav => {
        eachDotNav.addEventListener('click', function () {
            dotNavs.forEach(eachNav => {
                eachNav.style.backgroundColor = '#979797'
            })
        
            eachDotNav.style.backgroundColor = 'white'
        })

        
        
    });



    //functions to change the technology page
    const techBtnOne = document.getElementById('nums-1')
    const techBtnTwo = document.getElementById('nums-2')
    const techBtnThree = document.getElementById('nums-3')

    const techTopic = document.getElementById('tech-topic')
    const techDescription = document.getElementById('paragraph-text-description')

    const techImage = document.getElementById('tech-image-style')

    

    //functions for changing page
    function techPageOne(obj) {
        techBtnOne.addEventListener('click', function () {
            techBtnOne.classList.add('all-transitions');

            techTopic.innerText = obj['technology'][0]['name']
            techDescription.innerText = obj['technology'][0]['description']

            techImage.src = obj['technology'][0]['images']['portrait']
            
        })
    }

    function techPageTwo(obj) {
        techBtnTwo.addEventListener('click', function () {
            techBtnTwo.classList.add('all-transitions');

            techTopic.innerText = obj['technology'][1]['name']
            techDescription.innerText = obj['technology'][1]['description']

            techImage.src = obj['technology'][1]['images']['portrait']
            
        })
    }
    function techPageThree(obj) {
        techBtnThree.addEventListener('click', function () {
            techBtnThree.classList.add('all-transitions');

            techTopic.innerText = obj['technology'][2]['name']
            techDescription.innerText = obj['technology'][2]['description']

            techImage.src = obj['technology'][2]['images']['portrait']
            
        })
    }


    const techNavs = document.querySelectorAll('.num-changing-slides button')

    techNavs.forEach(eachBtn => {
        eachBtn.addEventListener('click', function () {
            
            techNavs.forEach(eachTechBtn => {
                eachTechBtn.style.background = '';
                eachTechBtn.style.color = '';
                eachTechBtn.style.border = ''

                
            })

            eachBtn.style.background = 'white'
            eachBtn.style.color = '#0B0D17'
            eachBtn.style.border = 'none'
        })
    })

















    //using fetch api to retrieve data from the json file 
    fetch('data.json').then(function (response) {

        return response.json();

    }).then(function (obj) {

        console.log(obj);
        destinationMoonPage(obj);
        destinationEuropaPage(obj);
        destinationMarsPage(obj);
        destinationTitanPage(obj);


    }).catch(function (error) {
        console.log('There was a problem trying to retreive the data');
        console.log('error is : ' ,error);
    })


    fetch('data.json').then(function (response) {

        return response.json();

    }).then(function (obj) {

        console.log(obj);
        crewPageOne(obj);
        crewPageTwo(obj);
        crewPageThree(obj);
        crewPageFourth(obj);


    }).catch(function (error) {
        console.log('There was a problem trying to retreive the data');
        console.log('error is : ' ,error);
    })

    //fetch for tech topics
    fetch('data.json').then(function (response) {

        return response.json();

    }).then(function (obj) {

        console.log(obj);
        techPageOne(obj);
        techPageTwo(obj);
        techPageThree(obj);
        


    }).catch(function (error) {
        console.log('There was a problem trying to retreive the data');
        console.log('error is : ' ,error);
    })


});










