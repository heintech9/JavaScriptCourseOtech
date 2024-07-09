// function createListItem(item) {
//     const li = document.createElement('li');
//     li.innerHTML = `${item}
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//     document.querySelector('.items').appendChild(li);
// }
// createListItem('Foods');
// createListItem('Clothes');

// function createListItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));
//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';
//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
//     button.appendChild(icon);
//     li.appendChild(button);
//     document.querySelector('.items').appendChild(li);
// }
// createListItem('Foods');

// Create Item Function
// function createNewItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));
  
//     const button = createButton('remove-item btn-link text-red');
  
//     li.appendChild(button);
  
//     document.querySelector('.items').appendChild(li);
//   }
  
// //   Create Button Function
//   function createButton(classes) {
//     const button = document.createElement('button');
//     button.className = classes;
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
//     return button;
//   }
  
// //   Create Icon Function
//   function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
//   }

//   createNewItem('Food')

//   function insertElement() {
//     const filter = document.querySelector('.filter');
  
//     const h1 = document.createElement('h1');
//     h1.textContent = 'Hello World';
  
//     filter.insertAdjacentElement('afterend', h1);
//   }

//   insertElement()

function insertBeforeItem() {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    li.textContent = 'hello';
  
    const thirdItem = document.querySelector('li:nth-child(3)');
  
    ul.insertBefore(li, thirdItem);
  }

  insertBeforeItem();

  function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
  }x