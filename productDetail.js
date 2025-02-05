document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    const product = Phones.find(phone => phone.id === productId);

    if (product) {
        document.getElementById("product-image").src = product.rasmi[0];
        document.getElementById("product-name").textContent = product.nomi;
        document.getElementById("product-price").textContent =   product.narxi + "MB";
        document.getElementById("product-brand").textContent = product.brend;
    } else {
        window.location.href = "index.html";
    }
});
