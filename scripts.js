document.addEventListener("DOMContentLoaded", function() {
    const Phones = [
        { id: 1, nomi: "Brawl Stars", narxi: 645, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=f113763d49ba8b4e1a3e715b9adc2041401d8bd9-8209870-images-thumbs&n=13"] },
        { id: 2, nomi: "PUBG", narxi: 1034, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=532a5d37b3ce49fc0d5362fab7ae660dbe48796c-9226056-images-thumbs&n=13"] },
        { id: 3, nomi: "Clash of Clans", narxi: 250, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=62d9f996672358d73d7fe8c2a1a91805d4e60b07-4826372-images-thumbs&n=13"] },
        { id: 4, nomi: "Mobile Legends", narxi: 200, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=d7d504e7a193c7a1eec0f3f64bf9acd08056b12e-9106994-images-thumbs&n=13"] },
        { id: 5, nomi: "Minecraft", narxi: 800, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=ce5b44057575418a04ce1b9742d84d1cc73e7453-3631422-images-thumbs&n=13"] },
        { id: 6, nomi: "Contr Strike", narxi: 300, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=f507057f84245ae1a16ed1c7a90f165a901c22a54eb71942-4935624-images-thumbs&n=13"] },
        { id: 7, nomi: "Fortnite", narxi: 300, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=1dad4506d1e9879abf11e81be0aac675b78f11ce-12571073-images-thumbs&n=13"] },
        { id: 8, nomi: "Stumble Guys", narxi: 265, brend: "oyin", rasmi: ["https://avatars.mds.yandex.net/i?id=2543fad7e5a4932cac962c276bfd9532f324f454-9036873-images-thumbs&n=13"] },
        { id: 9, nomi: "Instagram", narxi: 100, brend: "sayt", rasmi: ["https://avatars.mds.yandex.net/i?id=5640a377315095af5f95eab7cc7f3b59-4569576-images-thumbs&n=13"] },
        { id: 10, nomi: "Tik tok", narxi: 320, brend: "sayt", rasmi: ["https://avatars.mds.yandex.net/i?id=29fc51852c072da68cda7a4e910e43d0-5220588-images-thumbs&n=13"] }
    ];

    const container = document.querySelector(".row");

    Phones.forEach(phone => {
        const cardHTML = `
            <div class="col">
                <div class="card">
                    <img src="${phone.rasmi[0]}" class="card-img-top" alt="${phone.nomi}">
                    <div class="card-body">
                        <h5 class="card-title">${phone.nomi}</h5>
                        <p class="card-text">Price: $${phone.narxi}</p>
                        <p class="card-text">Brand: ${phone.brend}</p>
                        <a href="productDetail.html?id=${phone.id}" class="btn btn-success w-100">Download</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});
