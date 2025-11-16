// Navigation Items

let navItems = [
    {"label": "Overview", "imageURL": "/assets/images/sidebar/overview.svg", "isAUserSetting": false, "isActive": true},
    {"label": "Tickets", "imageURL": "/assets/images/sidebar/tickets.svg", "isAUserSetting": false},
    {"label": "Ideas", "imageURL": "/assets/images/sidebar/ideas.svg", "isAUserSetting": false},
    {"label": "Contacts", "imageURL": "/assets/images/sidebar/contacts.svg", "isAUserSetting": false},
    {"label": "Agents", "imageURL": "/assets/images/sidebar/agents.svg", "isAUserSetting": false},
    {"label": "Articles", "imageURL": "/assets/images/sidebar/articles.svg", "isAUserSetting": false},
    {"label": "Settings", "imageURL": "/assets/images/sidebar/settings.svg", "isAUserSetting": true},
    {"label": "Subscription", "imageURL": "/assets/images/sidebar/subscription.svg", "isAUserSetting": true},
];

let sidenav = document.getElementById("sidenav");

sidenav.innerHTML = generateSideNav(navItems);

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
