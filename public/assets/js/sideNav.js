// Side Nav

let sidenav = document.getElementById("sidenav");

// Data Fetcher 

dataFetcher().then(
    function(data) { 
        sidenav.innerHTML = generateSideNav(data.navItems);
    }
)

// Generates Side Nav

function generateSideNav(navItems) {
    let template = `<ul class="nav flex-column w-100">`;
    let userSettingsTemplate = ``;

    navItems.forEach((item) => {

        // Splits Nav Items into two sections
        
        if (item.isAUserSetting) {
            userSettingsTemplate += generateListItem(item);
        } else {
            template += generateListItem(item);
        }
    })
    template += `<hr>
        ${userSettingsTemplate}
    </ul>`;

    return template;
}

function generateListItem(item) {
    return `
    <li id="sidenavItem" class="nav-item p-3 regular-text sm-text ${item.isActive ? "active-nav" : ""}">
        <a class="d-flex flex-row gap-2 text-decoration-none align-items-center w-100">
            <img src="${item.imageURL}" alt="${item.label} icon" aria-label="Go to ${item.label} Page">
            <p class="${item.isActive ? "active-text" : ""} mb-0">${item.label}</p>
        </a>
    </li>`;
}
