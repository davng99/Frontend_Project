import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-bot',
  templateUrl: './main-bot.component.html',
  styleUrls: ['./main-bot.component.css']
})

export class MainBotComponent implements OnInit {

  newsletters : Array <{title: string, img: string, description: string, source: string, link: string}> = [
    {
      title: "10 Must-Have VSCode Extensions for Web Development",
      img: "https://miro.medium.com/max/720/1*kqE5Ri54e6SBHd8-LYriqg.png",
      description: "This article looks at 10 powerful Visual Studio Code extensions that significantly improve the web development experience. Example usage and installation links are provided for every one of them.",
      source: "Coding Beauty in JavaScript in Plain English, Aug 20th, 2022",
      link: "https://javascript.plainenglish.io/vscode-extensions-for-web-development-526ba635d643"
    },
    {
      title: "10 Useful Tips For Frontend Developers",
      img: "https://miro.medium.com/max/720/1*44bGTD-IOsSgRIsb2Ih6SQ.png",
      description: "Here are 10 useful tips for Frontend Developers. Tip 1: Start with learning the basics · Tip 2: Learn about accessibility · Tip 3: Document your code",
      source: "Nicky Christensen in JavaScript in Plain English, Feb 28th, 2022",
      link: "https://javascript.plainenglish.io/10-tips-for-frontend-developers-9c0dfc705b88"
    },
    {
      title: "Your programming course now financeable via WAFF!",
      img: "https://www.behindertenarbeit.at/wp-content/uploads/waff-logo2020a.jpg",
      description: "Start your IT career even easier than before! From now on all our courses can be financed via WAFF! Search for CodeFactory and choose from our great selection of IT and programming courses!",
      source: "CodeFactory in CodeFactory Vienna, Apr 13th, 2022",
      link: "https://codefactory.wien/en/your-programming-course-now-financeable-via-waff/"
    }
  ];



  courses : Array <{name: string, img: string, courseType: string, level: string, price: number, applyLink: string }> = [
    {
      name: "Basic Course HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
      price: 150.00,
      courseType: "Weekend Course",
      level: "Beginner",
      applyLink: "https://codefactory.wien/en/registration-basiskurs-html-css-en/"
    },
    {
      name: "Basic Course CSS",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      courseType: "Weekend Course",
      price: 150.00,
      level: "Beginner",
      applyLink: "https://codefactory.wien/en/registration-basiskurs-html-css-en/"
    },
    {
      name: "Basic Course JavaScript",
      img: "https://www.maisonlambot.com/wp-content/uploads/2016/03/js-logo.png",
      courseType: "Weekend Course",
      price: 200.00,
      level: "Beginner",
      applyLink: "https://codefactory.wien/en/registration-basiskurs-javascript-en/"
    },
    {
      name: "Frontend Development",
      // img: "https://i.pinimg.com/originals/3e/be/5d/3ebe5d119ac707cd463cabbba214c8f6.png",
      img: "https://icon-library.com/images/frontend-icon/frontend-icon-12.jpg",
      courseType: "Education",
      price: 2990.00,
      level: "Beginner and Advanced",
      applyLink: "https://codefactory.wien/en/registration-frontend-developer-en/"
    },
    {
      name: "Python Programming",
      img: "https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png",
      courseType: "Education",
      price: 500.00,
      level: "Beginner",
      applyLink: "https://codefactory.wien/en/registration-python-programming-en/"
    },
    {
      name: "Basic Course TypeScript",
      img: "https://decodenatura.com/static/26cc95f255ccb936d154b43614f61602/ts.png",
      courseType: "Weekend Course",
      price: 200.00,
      level: "Beginner",
      applyLink: "https://codefactory.wien/en/registration-basiskurs-javascript-en/"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
