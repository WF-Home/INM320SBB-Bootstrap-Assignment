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
            <article class="summary-card card rounded-3 shadow-sm py-2">
                <h4 class="card-title">${item.label}</h4>
                <p class="card-text">${item.value}</p>
            </article>
        </div>`
    });
    return template;
}