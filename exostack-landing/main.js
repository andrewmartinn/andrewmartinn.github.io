// reference faq_el on the DOM
const faq_el = document.getElementsByClassName('faq-item');

// iterating through the faq elements to attach a click listener
for (let i = 0; i < faq_el.length; i++) {
  faq_el[i].addEventListener('click', function () {
    // toggle between add and removing active class when clicking the faq_el
    this.classList.toggle("active");
  });
}