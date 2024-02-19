const data1 = ['Miltai', ' ', 'Druska', 'Vanduo', 'Kiaušiniai'];
const data2 = ['Mikseros', 'Keptuvė', ' ', 'Šaukštas', 'Lekštė'];

const ulDOM = document.querySelectorAll('.list');

//let HTML1 = '';
//for (const item of data1) {
//    if (item.trim().length === 0) {
//       continue;
//    }
//    HTML1 += `<li>${item}</li>`;
//}

//ulDOM[0].innerHTML = HTML1;

//let HTML2 = '';

//for (const item of data2) {
//   if (item.trim().length === 0) {
//        continue;
//    }
//    HTML2 += `<li>${item}</li>`;
//}

//ulDOM[1].innerHTML = HTML2;


// list DOM elementas, items (array)
// listDOM - DOM elementas, kuriame generuosime busima HTML
// data - gaunamas duomenu masyvas
function renderList(listDOM, data) {
    let HTML = '';
    for (const item of data) {
        if (item.trim().length === 0) {
            continue;
        }
        HTML += `<li>${item}</li>`;
    }
    listDOM.innerHTML = HTML; 
};

renderList(ulDOM[0], data1);
renderList(ulDOM[1], data2);