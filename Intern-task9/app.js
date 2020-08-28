$(document).ready(function () {
  $("button").click(async function getTempData() {
    const yourName = $("#yourName").val();
    const loveName = $("#loveName").val();

    const base_url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${yourName}&sname=${loveName}&rapidapi-key=Your-key`;

    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data);

    //Calculated Percentage
    let percentage = data.percentage;
    //Calculated result
    let result = data.result;

    document.getElementById("calculatedLove").value = `${percentage}%`;
    document.getElementById("footer").innerHTML = `${result}`;
  });
});
