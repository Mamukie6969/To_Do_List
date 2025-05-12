const button = document.getElementById('Button');
const BoxForInput = document.getElementById('BoxForInput');
const List = document.getElementById('List');

const savedItems = JSON.parse(localStorage.getItem('listItems')) || [];
savedItems.forEach(text => addItemToList(text));

button.addEventListener('click', function () {
    const text = BoxForInput.value;

    if (text) {
        addItemToList(text);
        BoxForInput.value = '';
    }
});

function addItemToList(text) {
    const item = document.createElement('li');
    item.innerText = text;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    removeButton.addEventListener('click', function () {
        List.removeChild(item);
        saveItems();
    });

    item.appendChild(removeButton);
    List.appendChild(item);
    saveItems();
}

function saveItems() {
    const items = Array.from(List.children).map(li => li.innerText.replace('Remove', ''));
    localStorage.setItem('listItems', JSON.stringify(items));
}

