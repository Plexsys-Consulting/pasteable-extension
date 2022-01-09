const engageElementSelection = () => new Promise(resolve => {
    //Declare variables that will later be used to store a copyMap
    let fields = [];
    let id = Date.now();

    //Highlight hovered elements to indicate which element is about to be selected
    $('*').hover(function (e) {
        e.stopPropagation();
        $('.outline-on-hover').removeClass('outline-on-hover');
        $(this).addClass('outline-on-hover');
    }, function (e) {
        e.stopPropagation();
        $(this).removeClass('outline-on-hover')
    });

    //Capture the element path|id as well as the nick-name
    $('*').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        let elPath = $(this).getPath();
        let elName = prompt(`Did you mean to capture: "${$(elPath).text()}"? If so, what do you want to name the element in this location for later use?`);
        if (elPath && elName && $(elPath).text().length) {
            let obj = { id: Date.now(), elPath, elName, text: $(elPath).text() }
            fields.push(obj);
        }

        if (confirm('Complete selection process?')) {
            $('*').off('mouseenter mouseleave click');
            $('.outline-on-hover').removeClass('outline-on-hover');
            resolve(fields);
        }
    });

    /* chrome.storage.sync.get(['saved'], result => {
        console.dir(result);
    });
    chrome.storage.sync.set({ saved: obj }, () => console.dir(obj));
    chrome.storage.sync.get(['saved'], result => {
        console.dir(result);
    });

    $('*').off('mouseenter mouseleave click');
    $('.outline-on-hover').removeClass('outline-on-hover'); */
})