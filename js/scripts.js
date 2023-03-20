document.addEventListener("DOMContentLoaded", function () {
    const allTab = document.getElementById("all-tab");
    const favoritesTab = document.getElementById("favorites-tab");
    const allItems = document.getElementById("all-items");
    const favoriteItems = document.getElementById("favorite-items");

    // Example categories and items
    const categories = [
        { id: 1, name: "Category 1", iconName: "icon1" },
        { id: 2, name: "Category 2", iconName: "icon2" },
        { id: 3, name: "Category 3", iconName: "icon3" },
    ];

    const favorites = [];

    function populateAllItems() {
        allItems.innerHTML = "";

        categories.forEach(function (category) {
            const li = document.createElement("li");
            li.innerHTML = `<span class="icon">${category.iconName}</span> ${category.name}`;
            allItems.appendChild(li);

            li.addEventListener("click", function () {
                addToFavorites(category);
            });
        });
    }

    function addToFavorites(category) {
        if (!favorites.some((fav) => fav.id === category.id)) {
            favorites.push(category);
            populateFavoriteItems();
        }
    }

    function removeFromFavorites(category) {
        const index = favorites.findIndex((fav) => fav.id === category.id);
        if (index > -1) {
            favorites.splice(index, 1);
            populateFavoriteItems();
        }
    }

    function populateFavoriteItems() {
        favoriteItems.innerHTML = "";

        favorites.forEach(function (category) {
            const li = document.createElement("li");
            li.innerHTML = `<span class="icon">${category.iconName}</span> ${category.name}`;
            favoriteItems.appendChild(li);

            li.addEventListener("click", function () {
                removeFromFavorites(category);
            });
        });
    }

    allTab.addEventListener("click", function () {
        allItems.style.display = "block";
        favoriteItems.style.display = "none";
    });

    favoritesTab.addEventListener("click", function () {
        allItems.style.display = "none";
        favoriteItems.style.display = "block";
    });

    populateAllItems();
});
