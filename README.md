# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript DOM 
- Javascript Fetch API for json data


### What I learned

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

Being abe to use fetch api for my json data was wonderfully satisfying



### Continued development

I will continue to use fetch method for more complex development like the use of api in projects



### Useful resources

- [Video for learning how to use fetch method in javascript](https://www.youtube.com/watch?v=5VCY9yCZnlc&ab_channel=dcode) - This helped me for using fetch method in javascript for my json data


## Author

- Website - [mywebsite](https://felix221123.github.io/my-portfolio-website/)
- Frontend Mentor - [@Felix221123](https://www.frontendmentor.io/profile/Felix221123)
- Twitter - [@IxKvfi](https://www.twitter.com/IxKvfi)

