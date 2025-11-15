let navItems = [
    {"label": "Overview", "imageURL": "/assets/images/sidebar/overview.svg", "isAUserSetting": false},
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

function generateSideNav(navItems) {
    let template = `<ul class="nav flex-column w-100">`;
    let userSettingsTemplate = ``;

    navItems.forEach((item) => {
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
    return `<li class="nav-item py-2 regular-text sm-text"><a><img src="${item.imageURL}">${item.label}</a></li>`;
}
