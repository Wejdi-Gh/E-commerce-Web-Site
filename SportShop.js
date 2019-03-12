
$('.add-to-cart').on('click', function () {
    var cart = $('.fa-cart-arrow-down ');
    var imgtodrag = $(this).parent('.buy').parent('.card-body').parent('.card').find(".card-img-top").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '300px',
                'width': '300px',
                'z-index': '1444'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});



tab = Array.from(document.querySelectorAll(".add-to-cart"))
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
        document.querySelector(".cartadd").innerHTML = parseInt(document.querySelector(".cartadd").innerHTML, 10) + 1
        document.querySelector(".cartadd").style.display = "flex";
        var x = $('.cartadd ');
        setTimeout(function () {
            x.effect("bounce", "slow")
        }, 0);

    })
}



function validation(e) {
    e.preventDefault()
    tab = Array.from(document.querySelectorAll(".inputarea"))
    let regex1 = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    let regex2 = /[A-Z]+ [a-z]+ [0-9]+/g

    for (let i = 0; i < tab.length; i++) {

        if (tab[i].value === "") {

            alert(" Enter your" + " " + tab[i].id.split("_").join(" ") + " " + "Please"); tab[i].style.border = "2px solid red"; continue;
        }
    }
    if (regex1.test(tab[3].value) === false) { alert(" Enter a valid e-mail adress "); tab[3].style.border = "2px solid red"; }

    if (tab[4].value.length < 8) { alert(" Passwords must contain at least 8 characters"); tab[4].style.border = "2px solid red"; }

    if (regex2.test(tab[4].value) === false) { alert(" The password must be a combination of charatacters , numbers and at least a capital letter"); tab[4].style.border = "2px solid red"; }


}


let button = document.querySelector(".submit")
button.addEventListener("click", validation)


function addcart(event) {
    let x = event.target.parentElement.parentElement.parentElement

    document.querySelector(".modelcart").appendChild(x.cloneNode(true)).classList.add("remove")

    removeitem = Array.from(document.querySelector(".modelcart").querySelectorAll(".add-to-cart"))
    for (let i = 0; i < removeitem.length; i++) {
        removeitem[i].innerHTML = "Remove"
        removeitem[i].addEventListener("click", function (event) {
          event.target.parentElement.parentElement.parentElement.remove()
          
        })

    }

  


}



tab = Array.from(document.querySelectorAll(".add-to-cart"))
for (let i = 0; i < tab.length; i++) {

    tab[i].addEventListener("click", addcart)

}



document.querySelector(".btn-danger").addEventListener("click", function () {

tab2 = Array.from(document.querySelectorAll(".remove"))
for (let i = 0; i < tab2.length; i++) {
    tab2[i].addEventListener("click", function () {
        document.querySelector(".cartadd").innerHTML = parseInt(document.querySelector(".cartadd").innerHTML, 10) - 1
        document.querySelector(".cartadd").style.display = "flex";
        var x = $('.cartadd ');
        setTimeout(function () {
            x.effect("bounce", "slow")
        }, 0);

    })
}

})


