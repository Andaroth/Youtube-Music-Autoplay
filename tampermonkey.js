// ==UserScript==
// @name         YT Music Keep AutoPlay
// @namespace    https://anda.ninja/
// @version      1.0.0
// @description  Prevents music to stop on YT Music
// @author       Axel Andaroth
// @match        https://music.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAC1JREFUWEft0EERAAAAAUH6lxbDZxU4s815PffjAAECBAgQIECAAAECBAgQIDAaPwAh6O5R/QAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('YT Music Keep AutoPlay by Axel Andaroth')

    const confirmDialog = () => {
        const searchInput = document.querySelector('input#input'); // find search input
        if (searchInput.getAttribute('aria-expanded')) return; // if search input open, ignore
        const dialog = document.querySelector('tp-yt-paper-dialog.style-scope.ytmusic-popup-container');
        if (!dialog) return;
        const yesButton = document.querySelector('yt-button-renderer.style-scope.ytmusic-you-there-renderer');
        if (!yesButton) return;
        console.log('Master, I will kill this dialog for you');
        yesButton.click();
    }

    const interval = setInterval(() => { // init a lazy repeat (^:
        confirmDialog()
    },1000) // endof interval

})();

/* COMMUNICATION
We don't want to pay a Premium because
we will still see sponsored contents because
YT doesn't compensate their creators sufficiently
THANK YOU */
