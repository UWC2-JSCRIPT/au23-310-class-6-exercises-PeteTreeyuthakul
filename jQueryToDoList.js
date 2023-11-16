/**
 * Toggles "done" class on <li> element
 */
const toggleDone = function(){
  $(this).toggleClass('done')
  $li =$('li')
}

let $li =$('li')
$li.on('click', toggleDone)

/**
 * Delete element when delete link clicked
 */

const deleteFunc =function(){
  //$(this).parent().remove()
  $(this).remove()
  $li =$('li')
  $deleteEl = $('.delete')
}

//Function Fade out
const fadeoutFunc =function(){
  $(this).parent().fadeOut('slow',deleteFunc)
}

let $deleteEl = $('.delete')
//$deleteEl.on('click',deleteFunc)
$deleteEl.on('click',fadeoutFunc)

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
  
  const $todayListEl = $('.today-list') 
  const $newli =$('<li>')
  const $newspan = $('<span>')
  const $newDelete =$('<a>')

  $newspan.text(text)
  $newDelete.addClass('delete')
  $newDelete.text('Delete')
  //$newDelete.click(deleteFunc)
  //add Fade out Function
  $newDelete.click(fadeoutFunc)

  $newli.append($newspan)
  $newli.append($newDelete)
  $newli.click(toggleDone)

  $todayListEl.append($newli)
};

// add listener for add
let $addEl = $('.add-item')
$addEl.on('click', function (e){
  addListItem(e);
  $li =$('li')
  $deleteEl = $('.delete')
})



