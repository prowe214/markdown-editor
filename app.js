var input = document.getElementById('input'),
    output = document.getElementById('output');

input.addEventListener('input', function(e) {
  var converter = new showdown.Converter(),
      text = input.value,
      html = converter.makeHtml(text);

  output.innerHTML = html;
});
