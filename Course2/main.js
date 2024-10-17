// const form = document.getElementsByClassName('msg');

// const form = document.getElementById('my-form');

//querySelector select by find the first element
//we can select all by querySelectorAll this find and select all things we tell this
//selece by tag
// const form = document.querySelector('div');

//by id
// const form = document.querySelector('#my-form');

//by class
// const form = document.querySelector('.container')


// const ul = document.querySelector(".items");
//for delete first of item
// ul.firstElementChild.remove();

//for delete lastes
// ul.lastElementChild.remove();

//for change
//can use the HTML tags
// ul.children[0].innerHTML="<h2>changed</h2>"
//give text
// ul.children[0].innerText="<h2>changed</h2>"

// const btn = document.querySelector(".btn");
//change style
// btn.style.background="red"

//event listener
// btn.addEventListener("click", (e)=> {
    //delete the default thing about this btn
    // e.preventDefault();
    // document.querySelector("#my-form").style.background="#ccc"
    // document.querySelector("body").classList.add('bg-dark');
// })


const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const users = document.querySelector("#users");

myform.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value)

    if (nameInput.value === '' || emailInput.value === '' ) {
        msg.innerHTML="<h5>please enter all filds</h5>"
        msg.classList.add("error")

        setTimeout(()=> {
            msg.innerHTML="";
            msg.classList.remove("error")
        }, 3000)
    } else {
        //add the value in li
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value))
        users.appendChild(li);
        //decrease the value in inputs
        nameInput.value='';
        emailInput.value='';
    }
}