function showTable() {
  var n = document.getElementById("num").value;
  var output = "";

  for (var i = 1; i <= 10; i++) {
    output += n + " x " + i + " = " + (n * i) + "<br>";
  }

  document.getElementById("result").innerHTML = output;
}