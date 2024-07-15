document.getElementById('run-code').addEventListener('click', function() {
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;

    var resultFrame = document.getElementById('result-frame');
    resultFrame.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
    resultFrame.contentWindow.eval(jsCode);
});

document.getElementById('download-project').addEventListener('click', function() {
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;

    var blob = new Blob([htmlCode + '\n<style>' + cssCode + '</style>\n<script>' + jsCode + '</script>'], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'project.html';
    link.click();
});
