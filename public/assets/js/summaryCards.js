const summaryItems = [
    { label: "unresolved", value: 60 },
    { label: "overdue", value: 16 },
    { label: "open", value: 43 },
    { label: "unresolved", value: 64 }
]

let summarySection = document.getElementById("summary-section");

summarySection.innerHTML = summaryContent(summaryItems);

function summaryContent(summaryItems) {
    let template = ``;
    summaryItems.forEach((item) => {
        template +=  `
        <div class="col">
            <article class="summary-card card mb-4 rounded-3 shadow-sm py-4">
                <h4 class="card-title">${item.label}</h4>
                <p class="card-text">${item.value}</p>
            </article>
        </div>`
    });
    return template;
}