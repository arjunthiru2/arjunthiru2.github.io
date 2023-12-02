function submitForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw35JbJdMiIDbogWBJ4PfjJT_8azYs_I_50fw3So6j9HJUDSqrni6GvR0Ty5v9ycrLB/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Success!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = 'An error occurred. Please try again later.'
            msg.style.color = 'red'
        })
}

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
