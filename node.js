


const { link } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" media="screen and (max-width: 1077px)" href="phone.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet">
  </head>
  
  <body>
      <div id="navbar">
          <div id="logo">
              <img src="img/mylogo.png" alt="codewithbugg" srcset="">
          </div>
          <div>
              <ul>
                  <li class="item"><a href="#home">Home</a></li>
                  <li class="item"><a href="#services-container">course</a></li>
                  <li class="item"><a href="#client-section">faculty</a></li>
                  <li class="item"><a href="#contact">contact</a></li>
              </ul>
          </div>
      </div>
      <section id="home">
          <h1 class="h-primary">Welcome to DarkCoding</h1>
          <p>A rigrous and dedicated bootcamp program to accelerate your learning and </p>
          <p>make you job ready for carrer in technology </p>
          <button type="text" class="btn"> <span></span>Register Now</button>
      </section>
      <section id="services-container">
          <h1 class="h-primary center">Our Platform</h1>
          <div id="services">
              <div class="box">
                  <div class="cont">
                      <img src="img/b1.jpg" alt="">
                      <img src="img/b1.jpg" alt="">
                      <img src="img/b1.jpg" alt="">
                      <img src="img/b1.jpg" alt="">
  
  
  
                  </div>
                  <h2 class="h-secondary center">Competitive Programming</h2>
                  <p class="center">
                      Learn to write most efficient programmes and equip yourself to get solution for the complex codes. Get ready for the competitions like ACM-ICPC, Google Codejam and more. Companies like Google, Microsoft, Facebook, Amazon etc hire professionals with exceptional
                      problem-solving skills.</p>
              </div>
              <div class="box">
  
                  <img src="img/webd2.png" alt="">
                  <h2 class="h-secondary center">Web Devlopement</h2>
                  <p class="center">
                      The complete foundation of the course will equip you with the concepts of Data Structures, Algorithms and Full Stack Web Development with a server-side application Node.js. A complete stack that will structure you with the front-end and back-end servers
                      to align your interest as per your goals. With a well-qualified mentorship, you will be able to redefine your approach towards the technologically advanced scenarios.</p>
              </div>
              <div class="box">
                  <img src="img/ad.png" alt="">
                  <h2 class="h-secondary center">Android Developement </h2>
                  <p class="center">
                      This course will help you learn the fundamentals of Programmings in the beginning & in second advanced lap: Kotlin, Google???s preferred programming language for Android and build interesting applications. The course will cover the Android components, tools
                      and technologies like multi-screen Navigation, Android Studio, Intents, Fragments, Widgets, Layout and Ionic to build modern applications. </p>
              </div>
          </div>
          <hr>
      </section>
      <section id="client-section">
          <h1 class="buggg">Our Top Educators</h1>
          <div id="clients">
              <div class="client-item">
                  <img src="img/arnav.png" alt="Our Client">
                  <div class="name1">Arnav Pandey</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
              <div class="client-item">
                  <img src="img/tarun.png" alt="Our Client">
                  <div class="name1">Tarun Singh</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
  
              <div class="client-item">
                  <img src="img/ayush.png" alt="Our Client">
                  <div class="name1">Ayush Tiwari</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
              <div class="client-item">
                  <img src="img/aradhya.png" alt="Our Client">
                  <div class="name1">Aradhya Ranjan</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
              <div class="client-item">
                  <img src="img/vivek.png" alt="Our Client">
                  <div class="name1">Vivek Kumar</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
              <div class="client-item">
                  <img src="img/akan.jpeg" alt="Our Client">
                  <div class="name1">Akash Kumar</div>
                  <div class="name2">B.Tech MMM(CS)</div>
              </div>
          </div>
  
      </section>
      <hr>
  
      <section id="contact">
          <h1 id="cont" class="h-primary center">Contact Us</h1>
          <div id="contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email: </label>
                      <input type="email" name="name" id="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone Number: </label>
                      <input type="phone" name="name" id="phone" placeholder="Enter your phone">
                  </div>
                  <div class="form-group">
                      <label for="message">Message: </label>
                      <input type="text" name="name" id="name" placeholder="write your message">
                      <!-- <textarea name="message" id="message" cols="30" rows="10"></textarea> -->
                  </div>
              </form>
          </div>
      </section>
      <footer>
          <div class="center">
              Copyright &copy; www.codewithbugg.com . All rights reserved!
          </div>
      </footer>
  
  
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});