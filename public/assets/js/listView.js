// Unresolved Tickets + Ticket Actions List

let unresolvedTicketsSection = document.getElementById("unresolved-tickets");
let ticketActions = document.getElementById("ticket-actions");

// Data Fetcher 

dataFetcher().then(
    function(data) { 
        unresolvedTicketsSection.innerHTML = unresolvedTicketContent(data.unresolvedTickets);
        ticketActions.innerHTML = ticketActionsContent(data.ticketActions);;
    }
)

// Generates Unresolved Ticket List
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

// Generates Ticket Actions List

function ticketActionsContent(actions) {
    let template = ``;
 
// Creates Input Box Row
    template +=`
    <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
        <input class="form-control form-control-sm border-0 secondary-light xs-text semi-bold" type="text" placeholder="Create New Task">
        <button class="btn btn-light secondary-color px-3 med-text bold">+</button>
    </li>`;

// Creates Remaining Rows
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