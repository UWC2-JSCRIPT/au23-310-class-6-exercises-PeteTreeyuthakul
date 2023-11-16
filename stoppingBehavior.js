// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const $moreInfo = $('#more-info')
$moreInfo.attr('href',' ')
$moreInfo.on('click', function(e) {
  alert("Here's some info")
})
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const $buttonDog = $('.dog')
$buttonDog.on('click',function(e){
  e.stopPropagation()
  alert('Bow wow!')
})