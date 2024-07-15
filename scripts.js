document.getElementById('runCode').addEventListener('click', () => {
    const htmlCode = document.getElementById('html').value;
    const cssCode = `<style>${document.getElementById('css').value}</style>`;
    const jsCode = `<script>${document.getElementById('js').value}<\/script>`;
    
    const outputFrame = document.getElementById('output');
    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDocument.open();
    outputDocument.write(htmlCode + cssCode + jsCode);
    outputDocument.close();
});

document.getElementById('fullScreen').addEventListener('click', () => {
    const outputFrame = document.getElementById('output');
    if (outputFrame.requestFullscreen) {
        outputFrame.requestFullscreen();
    } else if (outputFrame.mozRequestFullScreen) { // Firefox
        outputFrame.mozRequestFullScreen();
    } else if (outputFrame.webkitRequestFullscreen) { // Chrome, Safari and Opera
        outputFrame.webkitRequestFullscreen();
    } else if (outputFrame.msRequestFullscreen) { // IE/Edge
        outputFrame.msRequestFullscreen();
    }
});
