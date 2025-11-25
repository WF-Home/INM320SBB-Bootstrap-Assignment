// Summary Items

let summarySection = document.getElementById("summary-section");

// Data Fetcher

dataFetcher().then(
    function(data) { 
        summarySection.innerHTML = summaryContent(data.summaryItems);
    }
)

// Summary Card Template

function summaryContent(summaryItems) {
    let template = ``;
    summaryItems.forEach((item) => {
        template +=  `
        <div class="col">
            <article class="summary-card card rounded-3 shadow-sm d-flex p-4 mb-3 mb-sm-0">
                <h4 class="card-title bold med-text">${item.label}</h4>
                <p class="card-text bold xl-text">${item.value}</p>
            </article>
        </div>`
    });
    return template;
}