

/* add script for pagedjs */
function pagedjs() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://unpkg.com/pagedjs/dist/paged.polyfill.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}
// find the number for each item in an ordered list

function noteNumbering() {

    const orderedList = document.querySelectorAll('ol');

    orderedList.forEach(list => {
        // console.log(list);
        const item = list.querySelectorAll('li');
        // console.log(item);
        for (i = 0; i < item.length; i++) {
            item[i].setAttribute('data-item-num', i + 1);
        }
    })
}


function addingNumToOl() {
    const firstItem = document.querySelectorAll('ol li:first-of-type');
    firstItem.forEach(item1 => {
        // console.log(item1);
        let number;
        if (item1.hasAttribute("data-item-num")) {
            number = item1.getAttribute('data-item-num');
        }
        else {
            console.log('sorry, but the attribute has been eaten by pagedJS');
        }
        console.log(item1);
        item1.parentElement.setAttribute('start', number)

    })
}
