function copyPass(id) {
  var copyText = "";
  var tooltip = "";
  switch (id) {
    case "firstPassButton":
      copyText = document.getElementById("firstPass");
      tooltip = document.getElementById("copyPassOneTooltip");
      break;
    case "secondPassButton":
      copyText = document.getElementById("secondPass");
      tooltip = document.getElementById("copyPassTwoTooltip");
      break;
    case "thirdPassButton":
      copyText = document.getElementById("thirdPass");
      tooltip = document.getElementById("copyPassThreeTooltip");
      break;
    case "fourthPassButton":
      copyText = document.getElementById("fourthPass");
      tooltip = document.getElementById("copyPassFourTooltip");
      break;
    case "fifthPassButton":
      copyText = document.getElementById("fifthPass");
      tooltip = document.getElementById("copyPassFiveTooltip");
      break;
    case "sixthPassButton":
      copyText = document.getElementById("sixthPass");
      tooltip = document.getElementById("copyPassSixTooltip");
      break;
    case "seventhPassButton":
      copyText = document.getElementById("seventhPass");
      tooltip = document.getElementById("copyPassSevenTooltip");
      break;
    case "eighthPassButton":
      copyText = document.getElementById("eighthPass");
      tooltip = document.getElementById("copyPassEightTooltip");
      break;
    case "ninthPassButton":
      copyText = document.getElementById("ninthPass");
      tooltip = document.getElementById("copyPassNineTooltip");
      break;
    case "tenthPassButton":
      copyText = document.getElementById("tenthPass");
      tooltip = document.getElementById("copyPassTenTooltip");
      break;
  }
  navigator.clipboard.writeText(copyText.value);
  tooltip.innerHTML = "Copied: " + copyText.value;
  setTimeout(() => {
    tooltip.innerHTML = "Copy to clipboard";
  }, 3000);
}
// function outFunc() {
//   var tooltip = document.getElementById("copyPassOneTooltip");
//   tooltip.innerHTML = "Copy to clipboard";
// }
