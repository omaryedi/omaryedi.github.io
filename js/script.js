function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById('myFilter');
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById('myItems');
    cards = cardContainer.getElementsByClassName('card');
    Object.keys(cards).forEach((i) => {
      cards[i].textContent.toUpperCase().includes(filter)
        ? (cards[i].style.display = '')
        : (cards[i].style.display = 'none');
    });
  }

