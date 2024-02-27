import { createRow } from "../js/fucntion.js";
const tbody = document.getElementById('tbody')
let name = document.getElementById('name');
let price = document.getElementById('price');
let status = document.getElementById('status')
let desc = document.getElementById('desc')
let btn = document.getElementById('btn')

function all(name, price, status, desc) {
    return true;
}

btn && btn.addEventListener('click', function (e) {
    const isValid = all(name, price, status, desc)
    if (isValid) {
        e.preventDefault();
        const phone = {
            name: name.value,
            price: price.value,
            status: status.value,
            description: desc.value,
            categoriy_id: 2,
        }
        console.log(phone);
        fetch(`https://auth-rg69.onrender.com/api/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('phone')
        })
            .then(res => {
               return res.json()
            }).then(res => {
                if (res.id) {
                    let row = createRow(res, tbody.childElementCount + 1)
                    tbody.innerHTML += row;

                }
            })
            .catch(err => {
                console.log(err);
            })
    }
})


document.addEventListener('DOMContentLoaded', function () {

    fetch(`https://auth-rg69.onrender.com/api/products/all`, {
        method: 'GET'
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.length) {
                console.log(data);
                data.forEach((phone, index) => {
                    let row = createRow(phone, index);
                    tbody.innerHTML += row;
                });
                const deleteBtn = document.querySelectorAll('.deletee');
                if (deleteBtn.length) {
                    deleteBtn.forEach(del => {
                        del.addEventListener('click', function () {
                            let isDelete = confirm('Rostdan ham ushbu malumotni ochirmoqchmisiz');
                            if (isDelete) {
                                 console.log(this.parentNode);
                            }
                        })
                    })
                }

            }
        })
        .catch(err => {
            console.log(err);
        })
})
