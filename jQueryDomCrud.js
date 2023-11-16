// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

let $newElBuynow = $('<a>')
$newElBuynow.text('Buy Now!')
$newElBuynow.attr('id', 'cta')

const $mainEl = $('main')
$mainEl.append($newElBuynow)
// Access (read) the data-color attribute of the <img>,
// log to the console

const $imgDataColor = $('img').data()
console.log($imgDataColor)

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

const $liTurbo =$('li').eq(2)

$liTurbo.addClass('highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

$('p').remove()

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$newElBuynow.on('click',function(e){
    const $newElAdded = $('<p>')
    $newElAdded.text('Added to cart')
    $mainEl.append($newElAdded)
    $newElBuynow.remove()
})

