$(function() {

    // Toggle line-through on button 'check' click
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        let itemToggle = $(this).closest('div');
        $(itemToggle).siblings('span').toggleClass('shopping-item__checked');
    });

    // Delete <li> of shopping-item on button 'delete' click
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });

     // Add list item to shopping-list
    $('#js-shopping-list-form').on('submit', function(event) {
            let newItemText = $('#shopping-list-entry').val();
            event.preventDefault();
        $('.shopping-list').append(
            '<li><span class="shopping-item">' + newItemText + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
    });
});

