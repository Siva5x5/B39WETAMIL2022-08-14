// for loop:
let clock = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for(var i = 0; i < clock.length; i++) {
    console.log(clock[i]);
}

// ----------------------------------------------------------- //

// for of loop:
let calender = [ "january", "february", "march", "april", "may", "jun", 
               "july", "august", "septemper", "october", "november", "december"]
for (let months of calender) {
    console.log(months);
}



// ----------------------------------------------------------- //

// for in loop:

const movie = {
    name: "ayirathil oruvan",
    hero: "karthi",
    heroine1: "andrea",
    heroine2: "reemasen",
    director: "selvaraaghaavan",
    music: "g.v.prkash kumar"
}

for (let details in movie) {

    let value = movie[details];
    console.log(details + "--->" + value);
}
