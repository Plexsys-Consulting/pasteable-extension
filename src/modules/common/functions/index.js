import $ from 'jquery';

//Add functionality to get element path
$.fn.getPath = function () {
    if (this.length != 1) throw 'Requires one element.';
    var path, node = this;
    //if (node[0].id) return "#" + node[0].id;
    while (node.length) {
        var realNode = node[0],
            name = realNode.localName;
        if (!name) break;
        name = name.toLowerCase();
        var parent = node.parent();
        var siblings = parent.children(name);
        if (siblings.length > 1) {
            name += ':eq(' + siblings.index(realNode) + ')';
        }
        path = name + (path ? '>' + path : '');
        node = parent;
    }
    return path;
};

const engageElementSelection = () => new Promise(resolve => {
    //Declare variables that will later be used to store a copyMap
    let fields = [];
    let id = Date.now();

    //Highlight hovered elements to indicate which element is about to be selected
    $('*').hover(function (e) {
        e.stopPropagation();

        //Ensure not to allow highlight of items within the sidebar
        if($(this).parents('#pasteable-root').length || $(this).is('#pasteable-root')){
            return;
        }
        $('.outline-on-hover').removeClass('outline-on-hover');
        $(this).addClass('outline-on-hover');
    }, function (e) {
        e.stopPropagation();
        $(this).removeClass('outline-on-hover')
    });

    //Capture the element path|id as well as the nick-name
    $('*').click(function (e) {
        //Ensure not to allow selection of items within the sidebar
        if($(this).parents('#pasteable-root').length || $(this).is('#pasteable-root')){
            return;
        };
        
        e.preventDefault();
        e.stopPropagation();

        let elPath = $(this).getPath();
        let elName = prompt(`Do you want to add: "${$(elPath).text()}"? If so, type a nickname for the element location below. This will be referenced later to run automated captures.`);
        if (elPath && elName && $(elPath).text().length) {
            let obj = { id: Date.now(), elPath, elName, text: $(elPath).text() }
            fields.push(obj);
            $(elPath).attr('style', 'background: #ffff00 !important; color: black;');
        }

        if (window.confirm('Complete selection process?')) {
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
});

const preventBubble = (e, func) => {
    e.preventDefault();
    e.stopPropagation();
    func && func();
}

export {
    engageElementSelection,
    preventBubble,
};