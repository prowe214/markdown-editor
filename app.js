var input = document.getElementById('input'),
    output = document.getElementById('output');

input.addEventListener('input', function(e) {
  output.innerHTML = e.target.value;
});
