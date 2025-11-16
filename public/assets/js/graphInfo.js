const graphData = [
    {"label": "Resolved", "value": 449},
    {"label": "Received", "value": 426},
    {"label": "Average first response time", "value": "33m"},
    {"label": "Average response time", "value": "3h 8m"},
    {"label": "Resolution within SLA", "value": "94%"}
]

let graphInfo = document.getElementById("graph-info");

// Places Graph into HTML

graphInfo.innerHTML = generateGraphTable(graphData);

// Generates Graph Table

function generateGraphTable(graphData) {

    let template = `<ul class="list-group h-100">`;

    graphData.forEach((data) => {
        template += `
        <li class="list-group-item d-flex flex-column justify-content-center align-items-center py-4">
            <p class="card-title sm-text semi-bold">${data.label}</p>
            <p class="card-text large-text bold">${data.value}</p>
        </li>`
    });

    template += `</ul>`;

    return template;
}