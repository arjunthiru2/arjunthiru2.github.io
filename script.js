function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var links = document.getElementsByClassName("tab-links");
    for (i = 0; i < links.length; i++) {
        links[i].classList.remove("active-link");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-link");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzdqi2zcrV1pz6tBn1qMnSjmxpg8L9K2Ot4mhuhmDu5DQJAzkA4MwCSVRkytOTe8mQN/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error', error.message))
  })