const check = document.getElementById('check');
const mobilemenu = document.getElementById('mobilemenu');

// all the li elements in the mobile menu
const mobilemenuItems = document.querySelectorAll('#mobilemenu li');

mobilemenuItems.forEach(function(item){
    item.addEventListener('click', function(){
        check.checked = !check.checked;
    });
});
    


