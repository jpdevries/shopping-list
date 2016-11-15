//does not hold onto 'checked' when a new item is added
//does not actually delete an item when confirm-delete button is pressed - just removes form DOM
//stores all data but the item in the DOM


'use strict';



// State Object
var state = {
  items: [],
  itemsToBeDeleted: [],
};


// Modify functions
var addItem = function(state, item) {
  state.items.push(item);
};

var deleteItem = function(state, item) {
  state.itemsToBeDeleted.push(item);
  //push value of items with class .delete-check to array called itemsToBeDeleted. when confirm delete is pressed keep difference of items and itemsToBeDeleted arrays using filter()
  // var itemIndex = items.indexOf(item);
  // state.items.splice(itemIndex, 1);
};

// Render functions
var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {

    var itemTemplate = '<li><h3 class="shopping-item"><input type="checkbox" id="" name=""><label  for="">';
    itemTemplate += item;
    itemTemplate += '</label></h3><div class="shopping-item-controls"><label for="">Delete<span class="visually-hidden">';
    itemTemplate += item;
    itemTemplate += '</span></label><input type="checkbox" id="" name=""></div></li>';
    return itemTemplate;
  });
  element.html(itemsHTML);
};


// Event Listeners

//Form Submit
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItem(state, $('#js-shopping-list-form input').val());
  console.log(state.items);
  renderList(state, $('.shopping-list'));
  $('#js-shopping-list-form input').val('');
});


//Checkbox Completed
$('.shopping-list').on('change', 'li h3 input', function(event) {
    $(this).closest('h3').toggleClass('shopping-item__checked')
    console.log($(this).closest('h3'));
});


//Checkbox Deleted
$('.shopping-list').on('change', 'li .shopping-item-controls input', function(event) {
    $(this).closest('li').toggleClass('delete-check');
});

//Confirm Deletes

$('.confirm-delete').click(function (event) {
  event.preventDefault();

  $('.delete-check').remove();



})
