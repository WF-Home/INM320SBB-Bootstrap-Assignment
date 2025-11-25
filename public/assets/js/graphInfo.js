// Graph Info Section HTML

let graphInfo = document.getElementById("graph-info");

// Fetches Data then Places Table in HTML

dataFetcher().then(
    function(data) { 
        graphInfo.innerHTML = generateGraphTable(data.graphData);
    }
)

// Generates Graph Table

function generateGraphTable(graphData) {

    let template = `<ul class="list-group h-100">`;

    graphData.forEach((data) => {
        template += `
        <li class="list-group-item d-flex flex-column justify-content-center align-items-center py-4">
            <p class="card-title secondary-text sm-text semi-bold">${data.label}</p>
            <p class="card-text large-text bold">${data.value}</p>
        </li>`
    });

    template += `</ul>`;

    return template;
}