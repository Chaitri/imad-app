var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var aboutMe = {
  title : 'About Me',
  heading : 'About Me',
  content : `<p>
                This is content.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non aliquet quam. Sed aliquet mollis pretium. Nam turpis risus, molestie a porta vitae, tincidunt ut ex. Donec vitae purus sed massa dapibus commodo. Etiam sed interdum urna. Curabitur nibh diam, interdum sit amet pretium quis, aliquam a velit. Mauris ut ultrices nunc, vel maximus ex. Maecenas porta, ex nec vestibulum tempor, leo lorem rhoncus lorem, at tempor sapien est in metus. Mauris non diam suscipit, eleifend justo nec, faucibus magna.
            </p>`
};

function createTemplate (data) {
        var title = data.title;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <!--<meta name="viewport" content="width=device-width, initial-scale=1" />-->
                 <link href="/ui/style.css" rel="stylesheet" />
                <style>
                    body{
                        background-image : url("https://static.pexels.com/photos/159056/dandelion-seeds-number-of-lion-screen-pilot-159056.jpeg");
                        background-size : cover;
                        background-repeat : no-repeat;
                    }
                    
                    h1 {
                        color: black;
                    }
                </style>
            </head>
            <body>
                <div>
                <a href="/">Home</a>
                </div>
                <hr/>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${content}
                </div>
            </body>
        </html>
         `;
         return htmlTemplate; 
}

app.get('/about-me', function (req,res) {
  res.send(createTemplate(aboutMe));
});

app.get('/movies', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'movies.html'));
});

app.get('/fun', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'fun.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
