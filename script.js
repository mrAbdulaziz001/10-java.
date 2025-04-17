let ism = prompt('Ismingizni kiriting')
let username = prompt('Familiyangiznini kiriting');
let age = prompt('Yoshingizni kiriting');
let jet = prompt(`Ismingiz kichkina yoki katta harfda bolishini tanlang 
    1) Katta
    2) kichik
    `);

   
    if (jet === "1") {
        ism = ism.toUpperCase();
        username = username.toUpperCase();

    } else if (jet === "2") {
        ism = ism.toLowerCase();
        username = username.toLowerCase();
    }

    document.getElementById("ism").textContent = ism;
    document.getElementById("username").textContent = username;
    document.getElementById("age").textContent = age;             