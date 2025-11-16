const summaryItems = [
    { label: "Unresolved", value: 60 },
    { label: "Overdue", value: 16 },
    { label: "Open", value: 43 },
    { label: "On hold", value: 64 }
]

let summarySection = document.getElementById("summary-section");

summarySection.innerHTML = summaryContent(summaryItems);

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