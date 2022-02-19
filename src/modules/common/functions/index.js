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

const selectElement = elements => new Promise(resolve => {
    //Highlight hovered elements to indicate which element is about to be selected
    $('*').hover(function (e) {
        e.stopPropagation();

        //Ensure not to allow highlight of items within the sidebar
        if(
            $(this).parents('#pasteable-root').length 
            ||
            $(this).is('#pasteable-root')
            ||
            $(this).has('.selected-element').length > 0
        ){
            return;
        }
        $('.marked').removeClass('marked');
        $(this).addClass('marked');
    }, function (e) {
        e.stopPropagation();
        $(this).removeClass('marked');
    });

    //Capture the element path|id as well as the nick-name
    $('*').click(function (e) {
        //Declare element variables
        const path = $(this).getPath();
        const name = `Element ${(elements.length + 1)}`;
        const id = Date.now();

        //Remove marked class on click
        $('.marked').removeClass('marked');
        //Ensure not to allow selection of items within the sidebar or that have already been selected
        if(
            $(this).parents('#pasteable-root').length > 0
            || 
            $(this).is('#pasteable-root')
            ||
            $(this).is('.selected-element')
            ||
            $(this).parent().is('.selected-element')
            ||
            $(this).is('html')
            ||
            elements.map(el => el.path).includes(path)
        ){
            resolve(elements);
            return;
        };
        
        e.preventDefault();
        e.stopPropagation();

        if (path && $(path).text().length) {
            let obj = { id, path, name, text: $(path).text() };
            $(path).wrapInner(`<mark id="${id}" class="selected-element" title="remove items in the sidebar"></mark>`);
            const appended = elements.concat([obj]);
            resolve(appended);
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
    $('.marked').removeClass('marked'); */
});

const preventBubble = (e, func) => {
    e.preventDefault();
    e.stopPropagation();
    func && func();
}

/* const highlightLinkedEl = ({id, enter}) => {
    if(enter){
        $(`#${id}`).addClass()
    }
    
} */

export {
    selectElement,
    preventBubble,
};