$('body').append(`
    <div
        id="pasteable-root"
        style="width: 20vw;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(232, 232, 232, 0.7);
        z-index: 1000000000000;"
    >
    </div>
`);

/* const iframe = $('#pasteable-injection-point');  
iframe.attr('src', chrome.runtime.getURL("index.html")); */