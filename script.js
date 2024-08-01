// Card Array Of Object

let cards = [
    {
        "id": "1",
        "img": "./images/bem-te-vi.png",
        "heading": "Educational",
        "link": "https://bem-te-vi-school.netlify.app/"

    },
    {
        "id": "2",
        "img": "./images/day.png",
        "heading": "Day",
        "link": "https://day-prot.netlify.app/"

    },
    {
        "id": "3",
        "img": "./images/digitally.png",
        "heading": "Digitally",
        "link": "https://digitallyweb.netlify.app/"

    },
    {
        "id": "4",
        "img": "./images/emiliy.png",
        "heading": "Emiliy",
        "link": "https://emiliyprot.netlify.app/"

    },
    {
        "id": "5",
        "img": "./images/logistics.png",
        "heading": "Logistics",
        "link": "https://logisticsprot.netlify.app/"

    },
    {
        "id": "6",
        "img": "./images/news.png",
        "heading": "News",
        "link": "https://all-page-news.netlify.app/"

    },
    {
        "id": "7",
        "img": "./images/qubo.png",
        "heading": "News",
        "link": "https://quboprot.netlify.app/"

    },
    {
        "id": "8",
        "img": "./images/resturauntly.png",
        "heading": "Restaurantly",
        "link": "https://resturauntlyprot.netlify.app/"

    },
    {
        "id": "9",
        "img": "./images/rubbl.png",
        "heading": "Rubbl",
        "link": "https://rubbl.netlify.app/"

    },
    {
        "id": "10",
        "img": "./images/softland.png",
        "heading": "Softland",
        "link": "https://softlandprot.netlify.app/"

    },
    {
        "id": "11",
        "img": "./images/underconstruction.png",
        "heading": "DayZone",
        "link": "https://underconstructionprot.netlify.app/"

    },
    {
        "id": "12",
        "img": "./images/sophos.png",
        "heading": "Sophos",
        "link": "https://sophos-site.netlify.app/"

    },
    {
        "id": "13",
        "img": "./images/loanfinance.png",
        "heading": "Finance",
        "link": "https://loanfinance.netlify.app/"

    },
    {
        "id": "14",
        "img": "./images/england.png",
        "heading": "England Pogo",
        "link": "https://englandpogo.netlify.app/"

    },
    {
        "id": "15",
        "img": "./images/quickcash.png",
        "heading": "Quick Cash",
        "link": "https://quickcash-site.netlify.app/"

    },
    {
        "id": "16",
        "img": "./images/tangletech.png",
        "heading": "Tangle Tech",
        "link": "https://tangletech.netlify.app/"

    },
    {
        "id": "17",
        "img": "./images/finconne.png",
        "heading": "Finconne",
        "link": "https://fincone.netlify.app/"

    },
]

// Cards Listing Counter

let counter = cards.length;
let cardCounter = document.getElementById("cardCount");
cardCounter.innerText = `Templates Listing: ${counter}`;

// Cards Listing Error Handling

listErr = document.getElementById("listingError")

if (counter === 0){
    listingError.style.display = "block"
}

else{
    listingError.style.display = "none"
}

// Cards Loop

let div = document.querySelector("#card")

cards.forEach(element => {
    div.innerHTML += `
  <div class="col-12 col-md-12 col-xl-6 col-xxl-4">
        <div class="card mx-0 mx-md-5 my-0 my-md-3" id="${element.id}">
            <div>
                <p class="text-start fw-bold fs-4 px-3 pt-2 text-black">${element.heading}</p>
            </div>
                <a href="${element.link}" target="blank">
                <img src="${element.img}" class="card-img-top rounded-0 img-fluid" alt="..."></a>
        </div>
    </div>
    `
})

// Search JS

document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.querySelector(".inp-cus-bor");
    var searchButton = document.querySelector(".bi-search");
    var errorMessage = document.getElementById("errorMessage");

    searchButton.addEventListener("click", function () {
        performSearch();
    });

    searchInput.addEventListener("input", function () {
        updateSuggestions();
    });

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    function performSearch() {
        var searchQuery = searchInput.value.toLowerCase().trim();

        if (searchQuery.length < 2) {
            resetSearch();
            return;
        }

        var cardsContainer = document.querySelector(".row-cols-1");
        var cards = Array.from(cardsContainer.children);

        var filteredCards = cards.filter(function (card) {
            var cardTitle = card.querySelector(".text-start").textContent.toLowerCase();
            return cardTitle.includes(searchQuery);
        });

        if (filteredCards.length === 0) {
            showError();
            return;
        }

        hideError();

        cards.forEach(function (card) {
            card.style.display = "none";
        });

        filteredCards.forEach(function (card) {
            card.style.display = "block";
        });

        cardsContainer.innerHTML = "";
        filteredCards.forEach(function (card) {
            cardsContainer.appendChild(card);
        });
    }

    function updateSuggestions() {
        var searchQuery = searchInput.value.toLowerCase().trim();

        var cardsContainer = document.querySelector(".row-cols-1");
        var cards = Array.from(cardsContainer.children);

        cards.forEach(function (card) {
            card.style.display = "block";
        });

        if (searchQuery.length < 1) {
            return;
        }

        var suggestedCards = cards.filter(function (card) {
            var cardTitle = card.querySelector(".text-start").textContent.toLowerCase();
            return cardTitle.includes(searchQuery);
        });

        cards.forEach(function (card) {
            if (!suggestedCards.includes(card)) {
                card.style.display = "none";
            }
        });
    }

    function resetSearch() {
        var cardsContainer = document.querySelector(".row-cols-1");
        var cards = Array.from(cardsContainer.children);

        cards.forEach(function (card) {
            card.style.display = "block";
        });

        cardsContainer.innerHTML = "";
        cards.forEach(function (card) {
            cardsContainer.appendChild(card);
        });
    }
    function showError() {
        errorMessage.style.display = "block";
    }

    function hideError() {
        errorMessage.style.display = "none";
    }
});


// Loader Js


document.addEventListener("DOMContentLoaded", function () {

    var loaderDuration = 2000;

    setTimeout(function () {
        var loaderWrapper = document.querySelector('.loader-wrapper');
        loaderWrapper.style.display = 'none';
    }, loaderDuration);
});