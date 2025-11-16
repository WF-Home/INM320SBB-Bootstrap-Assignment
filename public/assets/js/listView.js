// Unresolved Tickets List

const unresolvedTickets = [
    { status: "Waiting on Feature Request", value: 4238 },
    { status: "Awaiting Customer Response", value: 1005 },
    { status: "Awaiting Developer Fix", value: 914 },
    { status: "Pending", value: 281 }
]

let unresolvedTicketsSection = document.getElementById("unresolved-tickets");

unresolvedTicketsSection.innerHTML = unresolvedTicketContent(unresolvedTickets);

function unresolvedTicketContent(unresolvedTickets) {
    let template = ``;
    unresolvedTickets.forEach((ticket) => {
        template +=  `
        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
            <p class="m-0 py-2 xs-text primary-text semi-bold">${ticket.status}</p>
            <p class="m-0 xs-text secondary-text semi-bold">${ticket.value}</p>
        </li>`
    });
    return template;
}

// Ticket Actions List

let actions = [
    {"label": "Finish ticket update", "badgeType": 1},
    {"label": "Create new ticket example", "badgeType": 2},
    {"label": "Update ticket report", "badgeType": 3}
];

let ticketActions = document.getElementById("ticket-actions");

ticketActions.innerHTML = ticketActionsContent(actions);

function ticketActionsContent(actions) {
    let template = ``;
    
    template +=`
    <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
        <input class="form-control form-control-sm border-0 secondary-light xs-text semi-bold" type="text" placeholder="Create New Task">
        <button class="btn btn-light secondary-color px-3 med-text bold">+</button>
    </li>`;

    actions.forEach((action) => {
        template += `
        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
            <label class="d-flex flex-row gap-3 align-items-center">
                <input class="form-check-input flex-shrink-0 m-0 py-2" type="radio" name="listGroupRadios" id="listGroupRadios2" value="">
                <p class="m-0 py-2 xs-text primary-text semi-bold">${action.label}</p>
            </label>
            ${badgeType(action.badgeType)}
        </li>`
    });

    return template;
}

// Helper Functions 

function badgeType(type) {
    let badge = ``
    switch (type) {
        case 1:     
            badge = `<p class="badge text-bg-warning m-0 py-1 px-2 xxs-text semi-bold">URGENT</p>`;
            break;
        case 2:
            badge = `<p class="badge text-bg-success m-0  py-1 px-2 xxs-text semi-bold">NEW</p>`;
            break;
        case 3:
            badge = `<p class="badge text-bg-secondary m-0 py-1 px-2 xxs-text semi-bold">DEFAULT</p>`;
            break;
        default:
            console.log("Invalid Badge Type");
    }

    return badge;
}