let typed = new Typed(".text", {
    strings: ["an Engineer", "a Programmer", "a Developer", "a Problem-Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEmrqWJZXrcWS0AVJZsxvTaHphnNH7u3EXAdPqc5h7QcCDUl5JP9AzJBAkFnip1GLg/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})