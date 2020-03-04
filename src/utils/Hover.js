let selecting, start, end;
export let  beginSelection = i => {
    // working continue
    console.log("start selection: ", [...document.querySelectorAll('.cell')][i].getAttribute('value'));
    selecting = true;
    start = i;
    updateSelection(i);
};

export let endSelection = (i = end) => {
    console.log("end selection: ",[...document.querySelectorAll('.cell')][i].getAttribute('value'));
    updateSelection(i);
    console.log("start: ", start);
    console.log("end: ", end);
    selecting = false;

};

export let updateSelection = i => {
    if (selecting)
        end = i;
    [...document.querySelectorAll('.cell')].forEach((div, index) =>
        div.classList.toggle('selected', index >= start && index <= end || index >= end && index <= start));
};

