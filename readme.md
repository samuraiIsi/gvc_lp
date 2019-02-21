# Responsive Web Design

This project is intended to create a fully responsive website for Mobile, Tablet and Desktop.


## Getting Started

To clone and run this application locally, you'll need Git and Node.js installed on your computer.

Intall sass Globally: npm install -g sass

sh
$ git clone https://github.com/samuraiIsi/gvc_lp
$ npm install
$ npm start
$ open http://localhost:8000

### Prerequisites

Recommended latest version of node.

## How it has been done

## CSS

### Mobile First
Applied this strategy for design process. 

### BEM
Ordering CSS in Block, Element and Modifier clarifying the relationship betwenn CSS and HTML.

### Basscss
Used as a guide for more scalable and readable code.

### Architecture
Used Scalable and Modular Architecture for CSS (SMACSS) as style guide in the design process.

### Grid
Using flexbox with 3 breakpoints, one for small devices, another one for tablets and the last one for desktops.

### Preprocessor
Using Sass to take advantage of all its potential such as: variables, nesting, mixins and so on.

## JS
### Accordion
Using vanilla Javascript and CSS3 to create an interactive accordion to expand/collapse the terms and conditions.

### Jackpot Ticker
The same as above, using vanilla Javascript and CSS3 to animate the numbers. The client could not request the JackPot Ticker JavaScript causing CORS issue. This has been solved by creating a proxy with http-server for all local calls.

## Cross-Browser Compatibility
The browsers that have been covered are Chrome, Firefox, Safari (lastest versions) and IE11.

## Performance
In order to improve the website performance, I have Optimized CSS, HTML and JS. Minified HTML, CSS, Images and JavaScript. The images have been optimized in GIMP and all animations are done in CCS3. I have reduced the number of calls to the server via sprite (case of payments icons).

## GIMP
This tool has been used to get the different elements from psd.
