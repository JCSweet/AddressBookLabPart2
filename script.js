let info = '';
const input = document.querySelector('input');
const addressBook = document.querySelector('.addressBook');
const button = document.querySelector('button');
const nameInput = document.querySelector('.name');
const phoneInput = document.querySelector('.phone');
const emailInput = document.querySelector('.email');
const relationInput = document.querySelector('.relation');
const section = document.querySelector('section');
const addButton = document.querySelector('button');
// const div = document.querySelector('div');
let newAddress = '';


class AddressBook {
  constructor(contact) {
    this.contact = contact; 
    const newAddress = new AddressBook([new Contact('Jordan Sweet', 'blahblah@aol.com', '586-295-3008', 'me')]); 
  }
}

  section.addEventListener('click', (evt) => {
    if (evt.target.className === 'delete') {
      const deleteIndex = Array.from(section.children).indexOf(evt.target.parentNode)
      deleteItem(deleteIndex);
      display();
    }
  });

const add = () => {
  this.contact.push(newAddress);
}

const deleteAt = (deleteIndex) => {
  this.contact.splice(deleteIndex, 1);
}
// **needs edits - addressBook.appendChild(div); is wrong
  const display = () => {
    for (const item of newAddress) {
    addressBook.innerHTML += `<div>
              <p>Name: ${nameInput}</p>
              <p>Email: ${emailInput}</p>
              <p>Phone: ${phoneInput}</p>
              <p>Relation: ${relationInput}</p>
             </div>`;
  }
  addressBook.appendChild(div);
}

addButton.addEventListener('click', () => {
  add();
  display();
})
 
    class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;  
      }
    }
display();
