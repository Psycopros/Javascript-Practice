// I have brainrot code this

const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const Paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const premium = document.getElementById("premium");
const submit = document.getElementById("submit");
const result0 = document.getElementById("result0");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

submit.onclick = function () {
    let paymentMethod = null;

    if (visa && visa.checked) {
        paymentMethod = "Visa";
    } else if (masterCard && masterCard.checked) {
        paymentMethod = "Master Card";
    } else if (Paypal && Paypal.checked) {
        paymentMethod = "Paypal";
    } else if (bitcoin && bitcoin.checked) {
        paymentMethod = "Bitcoin";
    }

    if (paymentMethod) {
        result0.textContent = `Payment Success, thank you!`;
        result1.textContent = `Your payment using ${paymentMethod} already confirmed`;

        const premiumMessage = premium && premium.checked ? `You are Premium member, check your mail for more benefit!` : `You are not premium member, subscribe for more perks!`;
        result2.textContent = premiumMessage;
    } else {
        result0.textContent = `Payment ERROR!`;
        result1.textContent = `Please input Payment method`;
    }
};
