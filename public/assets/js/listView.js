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
        <li class="list-group-item d-flex flex-row justify-content-between">
            <p>${ticket.status}</p>
            <p>${ticket.value}</p>
        </li>`
    });
    return template;
}