/* Add any JavaScript you need to this file. 

Name: Jun Song
Seneca ID Number : 141973198
Date: 2020-08-06
Student ID: jsong89
All images from Unsplash.
Url: https://unsplash.com
*/
const items = [
  {
    image: './images/item1.jpg',
    name: 'Baguette',
    price: '$11.98',
    desc: 'Our signature traditional french style baguette.',
    category: 'bread'
  },
  {
    image: './images/item2.jpg',
    name: 'Rye Bread(Whole Bun)',
    price: '$9.79',
    desc: 'Included 12kinds of grians with high quality wheat, only availabe every Friday!',
    category: 'bread'
  },
  {
    image: './images/item3.jpg',
    name: 'Macaron',
    price: '$19.99',
    desc: 'You can feel france traditional taste if you are enjoying our best macaron. $19.99/6pc.',
    category: 'dessert'
  },
  {
    image: './images/item5.jpg',
    name: 'Rye Bread(Cut)',
    price: '$10.79',
    desc: 'Now you do not have to wait anymore to enjoy our best Rye Bread.',
    category: 'bread'
  },
  {
    image: './images/item6.jpg',
    name: 'Croissant',
    price: '$4.59',
    desc:
      'Our signature bread, we are making this brilliant croissant with AAA-butter, AAA-milk which is from France.',
    category: 'bread'
  },
  {
    image: './images/item7.jpg',
    name: 'Butter Bread',
    price: '$8.99',
    desc: 'Are you a butter holic? Then pick this bread!',
    category: 'bread'
  },
  {
    image: './images/item8.jpg',
    name: 'Ice Americano',
    price: '$2.99',
    desc: 'No need to go Starbucks anymore! Its AAA-Arabica coffee bean attracting you 100%!!!',
    category: 'dessert'
  },
  {
    image: './images/item9.jpg',
    name: 'Red-Velvet Cake',
    price: '$11.98',
    desc:
      'Our secret receipe will make a red-velvet cake softer than most other cakes with a mouth-watering velvet-like texture in each bite.',
    category: 'cake'
  },
  {
    image: './images/item10.jpg',
    name: 'Ice-cream Browny',
    price: '$14.99',
    desc: 'Harmony of Vanilla with Chocolate Browny. Have not tried yet? Try on it right now!!',
    category: 'dessert'
  },
  {
    image: './images/item11.jpg',
    name: 'Piggy`s Cup Cake',
    price: '$3.99',
    desc: 'Collaborating with Piggy`s!!! Cute Fatted Piggy`s are waiting for you!',
    category: 'cake'
  },
  {
    image: './images/item12.jpg',
    name: 'Ninja-Cup Cake',
    price: '$8.99',
    desc: 'Shhhhhhh! Ninja is sensitive.',
    category: 'cake'
  },
  {
    image: './images/item13.jpg',
    name: 'Strawberry Tart',
    price: '$15.99',
    desc: 'Now you can meet the real Canadian strawberry tart everyday.',
    category: 'dessert'
  },
  {
    image: './images/item14.jpg',
    name: 'Colorful-Donuts Set',
    price: '$25',
    desc: 'Best for party! Just come and pick, you will never regret after eat our great donut!',
    category: 'dessert'
  },
  {
    image: './images/item15.jpg',
    name: 'Signature-Chocolate Cake',
    price: '$32',
    desc: 'Happy birthday? Take our best chocolate cake with 10% discount!',
    category: 'cake'
  },
  {
    image: './images/item16.jpg',
    name: 'Mint-Chocolate Cup Cake',
    price: '$4.99',
    desc: 'Caution! Only recommend to Mint-Choco lover!',
    category: 'cake'
  },
  {
    image: './images/item17.jpg',
    name: 'Signature-Strawberry Mousse',
    price: '$15.98',
    desc: 'Enjoy your spring with our signature mousse!(Only available Spring season)',
    category: 'dessert'
  }
];

const storeObj = {
  error: 'Invalid',
  getDataByType: type => {
    const itemsTag = document.querySelector('.items');
    let data = '';
    let typeItems = type === 'all' ? items : items.filter(e => e.category === type);
    typeItems.forEach(e => {
      data += `<div class="item-container">
      <div class="item">
        <div class="image-container" style="background-image: url(${e.image});"></div>
      </div>
      <div class="description">
        <div class="info"><span class="name">${e.name}</span><span class="price">${e.price}</span></div>
        <div class="desc">${e.desc}</div>
      </div>
    </div>`;
    });
    itemsTag.innerHTML = data;
  },
  menuHandle: () => {
    const menus = document.querySelector('.menus');
    if (menus.classList.contains('hidden')) {
      menus.classList.remove('hidden');
      menus.classList.add('show');
    } else {
      menus.classList.remove('show');
      menus.classList.add('hidden');
    }

    // menus.style.maxHeight = state.menuToggle ? '100%' : 0;
    // menus.style.transition = `all 0.5s cubic-bezier(0, 1, 0, 1)`;
  },
  handleSubmit: () => {
    console.log(storeObj.error);
    return storeObj.error === '';
  },
  isPostalCode: postalCode => {
    const postalRegx = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return postalRegx.test(postalCode);
  },
  postalCodeHandler: function(e) {
    const error = document.querySelector('#postal-error');
    console.log(storeObj.isPostalCode(e.target.value));
    if (!storeObj.isPostalCode(e.target.value)) {
      error.style.display = 'block';
      storeObj.error = 'Invalid';
    } else {
      error.style.display = 'none';
      storeObj.error = '';
    }
  },
  hideOrderProblem: function() {
    const problem = document.querySelector('#problem');
    if (this.checked) {
      problem.style.display = 'none';
    }
  },
  showOrderProblem: function() {
    const problem = document.querySelector('#problem');
    if (this.checked) {
      problem.style.display = 'block';
    }
  }
};

const all = document.querySelector('#all');
const bread = document.querySelector('#bread');
const dessert = document.querySelector('#dessert');
const cake = document.querySelector('#cake');

if (all && bread && dessert && cake) {
  all.onclick = () => storeObj.getDataByType('all');
  bread.onclick = () => storeObj.getDataByType('bread');
  dessert.onclick = () => storeObj.getDataByType('dessert');
  cake.onclick = () => storeObj.getDataByType('cake');
  storeObj.getDataByType('all');
}

window.onload = function() {
  const menu = document.querySelector('#menu');
  const contactForm = document.querySelector('#contact-form');

  const postalCode = document.querySelector('#postalCode');
  const question = document.querySelector('#question');
  const comment = document.querySelector('#comment');
  const order = document.querySelector('#order');

  menu.onclick = storeObj.menuHandle;
  if (contactForm) {
    contactForm.onsubmit = storeObj.handleSubmit;
    postalCode.addEventListener('input', storeObj.postalCodeHandler);
    question.onclick = storeObj.hideOrderProblem;
    comment.onclick = storeObj.hideOrderProblem;
    order.onclick = storeObj.showOrderProblem;
  }
};
