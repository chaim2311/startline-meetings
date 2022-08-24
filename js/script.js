function copyPass() {
  var copyText = document.getElementById("firstPass");
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("copyPassOneTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunc() {
  var tooltip = document.getElementById("copyPassOneTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
