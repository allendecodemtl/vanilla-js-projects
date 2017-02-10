// This gives some height to the #app div so we can click it
document.querySelector('#app').style.height = '400px';

// This makes the #app div visible. Note that the CSS background-color is written backgroundColor in the DOM ;)
document.querySelector('#app').style.backgroundColor = '#ccc';

document.body.addEventListener('click', function() {
  console.log('The body was clicked!');
})
document.querySelector('#app').addEventListener('click', function() {
  console.log('#app was clicked!');
});

document.querySelector('#theParagraph').addEventListener('click', function() {
  console.log('#theParagraph was clicked!');
});

document.querySelector('#theLink').addEventListener('click', function(event) {
  event.preventDefault(); // We need to do this otherwise we will leave the page if we click the link...
  console.log('#theLink was clicked!');
});
