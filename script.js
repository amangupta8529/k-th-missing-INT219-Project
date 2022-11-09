function find(a, b, k, n1, n2) {
  var s = new Set();
  for (var i = 0; i < n2; i++) s.add(b[i]);
  var missing = 0;
  for (var i = 0; i < n1; i++) {
    if (!s.has(a[i])) missing++;
    if (missing == k) return a[i];
  }
  return -1;
}
function printArr() {
  let a1 = document.getElementById("a1").value;
  let a2 = document.getElementById("a2").value;
  let k = document.getElementById("a3").value;
  arr1 = a1.split(",").map(Number);
  arr2 = a2.split(",").map(Number);

  arr1 = arr1.filter(function (val) {
    return val;
  });
  arr2 = arr2.filter(function (val) {
    return val;
  });
  arr1.sort(function (a, b) {
    return a - b;
  });
  arr2.sort(function (a, b) {
    return a - b;
  });
  n1 = arr1.length;
  n2 = arr2.length;
  result = find(arr1, arr2, k, n1, n2);
  let help = "";
  if (k == 1) help = "st";
  else if (k == 2) help = "nd";
  else if (k == 3) help = "rd";
  else help = "th";
  if (result == -1)
    document.getElementById("result").innerHTML = "No number is missing";
  else
    document.getElementById("result").innerHTML =
      "The " + k + help + " missing number is " + result;
}
