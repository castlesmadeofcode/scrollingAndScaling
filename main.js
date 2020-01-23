const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/



function handleSectionClick (event) {
    let oneThirdsCurrentScroll = (window.scrollY / 3) + "px";
    console.log(oneThirdsCurrentScroll);
    audrey.style.width = oneThirdsCurrentScroll;
    audrey.style.height = oneThirdsCurrentScroll;
}

document.addEventListener("scroll", handleSectionClick);
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
