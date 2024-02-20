const data = [
  [
    {
      title: "Ingredientai",
      list: ["Miltai", "", "Druska", "Vanduo", "Kiaušiniai"],
    },
    {
      title: "Įranga/įrankiai",
      list: ["Mikseris", "        ", "Keptuvė", " ", "Šaukštas", "Lėkštė"],
    },
  ],
  [
    {
      title: "Ingredientai",
      list: ["Miltai", "", "Druska", "Vanduo", "Kiaušiniai"],
    },
    {
      title: "Įranga/įrankiai",
      list: ["Mikseris", "        ", "Keptuvė", " ", "Šaukštas", "Lėkštė"],
    },
  ],
];

const contentDOM = document.getElementById("content");

let HTML = "";

for (const row of data) {
  let columnsHTML = '';
  
  for (const column of row) {
    let liHTML = '';

    for (const li of column.items) {
        liHTML += `<li>${liText}</li>`;
    }
    
    columnsHTML += `
        <div class="column">
            <h2>${column.title}</h2>
            <ul class="list">
                ${column.list.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
  }

  HTML += `
    <div class ="row">
        ${columnsHTML}
    </div>
  `;
}

for (const column of data) {
  let listHTML = "";

  for (const item of column.list) {
    if (item.trim().length === 0) {
      continue;
    }

    listHTML += `<li>${item}</li>`;
  }

  HTML += `<div class="column">
                <h2>${column.title}</h2>
                <ul class="list">
                    ${listHTML}
                </ul>
            </div>`;
}

contentDOM.innerHTML = HTML;
