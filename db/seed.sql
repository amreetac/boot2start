USE boot2start;

INSERT INTO bootcamps (name, logoURL) VALUES ("RCB", "http://bit.ly/2aYwFFF");
INSERT INTO bootcamps (name, logoURL) VALUES ("General Assembly", "http://bit.ly/2baEiox");
INSERT INTO bootcamps (name, logoURL) VALUES ("Metis", "http://bit.ly/2b7nQE9");
INSERT INTO bootcamps (name, logoURL) VALUES ("App Academy", "http://bit.ly/2bkaZlo");
INSERT INTO bootcamps (name, logoURL) VALUES ("Sabio", "http://bit.ly/2b7nbFD");
INSERT INTO bootcamps (name, logoURL) VALUES ("Bloc", "http://bit.ly/2bJ4fhP");
INSERT INTO bootcamps (name, logoURL) VALUES ("Code Fellows", "http://bit.ly/2bp9pvs");
INSERT INTO bootcamps (name, logoURL) VALUES ("Rocket U", "http://bit.ly/2b7nCzo");



INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Khris", "Kovoor", "123-456-789", "khkovoor@a.com", "RCB", "NYC", "NY", "10/22/16", "Front-end guru", "HTML5, CSS3, Bootstrap, Javascript");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Jeffrey", "Abraham", "223-456-789", "jabraham@a.com", "RCB", "Livingston", "NJ", "10/22/16", "Full Stack Expert", "HTML5, CSS3, Bootstrap, Javascript, Node JS, Sequelize");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Amreeta", "Choudhury", "323-456-789", "achoudhury@a.com", "RCB", "Jackson", "NJ", "10/22/16", "Analyst and Developer", "HTML5, CSS3, Bootstrap, Javascript, SQL");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Sudarshana", "Chavan", "423-456-789", "schavan@a.com", "RCB", "Edison", "NJ", "10/22/16", "Full Stack Developer", "HTML5, CSS3, Bootstrap, Javascript, Node JS");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Ronald", "McDonald", "523-456-789", "rmcdonald@a.com", "General Assembly", "Edison", "NJ", "10/22/25", "Alright Developer", "HTML5, CSS3, i think?");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Dennis", "Mennace", "623-456-789", "dmennace@a.com", "Sabio", "West Orange", "NJ", "05/10/16", "Web Developer", "HTML5, CSS3, Bootstrap, Javascript");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Stacey", "Johnson", "723-456-789", "sjohnson@a.com", "Rocket U", "San Mateo", "CA", "12/10/13", "Java Developer", "Java, SQL");
INSERT INTO candidates (firstName, lastName, phoneNumber, email, bootcampCourse, city, state, courseFinish, bio, skills ) 
VALUES ("Steve", "Stevenson", "823-456-789", "sstevenson@a.com", "Code Fellows", "Memphis", "TN", "04/10/08", "Back-end Developer", "Javascript, Java, SQL");



INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Junior Web Developer", "HTML5, CSS3, Boostrap, Javascript", "50k", "Make awesome website", true);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Web Developer", "Javascript, HTML5, CSS3, Jquery, SQL, NodeJS", "65k", "Create online interface for store", false);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Front-end Developer", "Javascript, Angular.JS, Bootsrap, LESS, RESTful, Hadoop", "80k", "Big Data Project", false);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Senior Javascript Developer", "HTML5, CSS3, Boostrap, Javascript, Jquery, AJAX, JSON, Salesforce", "100k", "Manage team for a CRM product", true);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Angular JS Developer", "Bootstrap, HTML5, CSS3, Angular JS, Javascript, REST Webservices", "90k", "Financial services app", true);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Junior Web Developer", "HTML5, CSS3, Wordpress, PHP, MySQL, Git", "50k", "Make a very awesome website", false);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Junior Web Developer", "HTML5, CSS3, Boostrap, Javascript", "50k", "Make awesome website", true);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("TSQL Developer", "TSQL, Unit testing", "70k", "Design and maintain complex dashboards", true);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Senior iOS, Swift Applications Developer", "iOS experience, Swift, GCD, Core Animation", "120k", "Optimize iphone user experience", false);
INSERT INTO positions (title, requirements, compensation, duties, isFullTime) 
VALUES ("Full Stack Developer", "UI, NodeJS, AngularJS, RDBMS, NoSQL, Cloud experience", "50k", "Make awesome website", true);


INSERT INTO startups (name, email, phoneNumber) 
VALUES ("Show Me", "info@showme.com", "987-654-3211");
INSERT INTO startups (name, email, phoneNumber) 
VALUES ("Foursquare", "info@foursquare.com", "987-654-4211");
INSERT INTO startups (name, email, phoneNumber)  
VALUES ("Fitocracy", "info@fitocracy.com", "887-654-4211");
INSERT INTO startups (name, email, phoneNumber) 
VALUES ("Craft Coffee", "info@craftcoffee.com", "997-654-4211");
INSERT INTO startups (name, email, phoneNumber)  
VALUES ("Bindo", "info@bindo.com", "987-654-4291");
INSERT INTO startups (name, email, phoneNumber) 
VALUES ("Dejamor", "info@dejamor.com", "119-654-4211");
INSERT INTO startups (name, email, phoneNumber)  
VALUES ("Lala Wines", "info@lalawines.com", "100-654-4211");



INSERT INTO users (email, password) 
VALUES ("khkovoor@a.com", "password");
INSERT INTO users (email, password) 
VALUES ("jabraham@a.com", "password1");
INSERT INTO users (email, password)  
VALUES ("schavan@a.com", "password2");