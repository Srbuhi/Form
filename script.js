//form validation
let button = document.querySelector("#button");
button.addEventListener("click", function () {
    let pas = document.querySelector("#password"),
        name = document.querySelector("#name"),
        surname = document.querySelector("#surname"),
        email = document.querySelector("#email"),
        phone = document.querySelector("#phone"),
        rePass = document.querySelector("#re-password"),
        // v = "Your input is valid",
        i = "Your input is not valid",
        eq = "The password and confirm password fields must be the same",
        wrongPass = "Your password must contain at least seven characters,letters,digits,underscore";

    if (pas.value.length !== 0 && name.value.length !== 0
        && surname.value.length !== 0 && email.value.length !== 0
        && rePass.value.length !== 0 && phone.value.length !== 0) {
        let passPattern = new RegExp(/\w{6,}/g);
        if (passPattern.test(pas.value)) {
            // addMessage(pas, v);
            if (pas.value !== rePass.value) {
                addMessage(rePass, eq);
            }
        }else {
            addMessage(pas, wrongPass);
        }

        let namePattern = new RegExp(/^[A-Za-z]{2,8}$/s);
        if (!namePattern.test(name.value)) {
        //     addMessage(name, v);
        // } else {
            addMessage(name, i);
        }

        let surnamePattern = new RegExp(/^[A-Za-z]{2,8}$/s);
        if (!surnamePattern.test(surname.value)) {
        //     addMessage(surname, v);
        // }
        // else {
            addMessage(surname, i);
        }


        let emailPattern = new RegExp(/[a-z]+([0-9]+)?@[a-z]+\.[a-z]+/g);
        if (!emailPattern.test(email.value)) {
        //     addMessage(email, v);
        // }
        // else {
            addMessage(email, i);
        }


        let phonePattern = new RegExp(/[0-9]{9}/);
        if (!phonePattern.test(phone.value) || phone.value.length !== 9)
        //     addMessage(phone, v);
        //

        // else
            addMessage(phone, i);
    } else
        fillTheField();


})


    function fillTheField() {
        document.querySelector(".error").innerText = "Please fill in all the fields";
    }


    function addMessage(item, msg) {
       let para =  document.createElement("p"),
           text =  document.createTextNode(msg);
       para.appendChild(text);
       para.classList.add("clearField");

       let form = document.getElementById("form");
        form.insertBefore(para, item);
        para.style.fontSize = "10px";
        para.style.color = "red";

        setTimeout(() => {
            document.querySelector(".clearField").remove()
        }, 3000)

    }



