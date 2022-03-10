// Populating table using JQ
$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    var json_data = "";
    $.each(data, function (key, value) {
      json_data += "<tr>";
      json_data += "<td>" + value.salutation + "</td>";
      json_data += "<td>" + value.firstname + "</td>";
      json_data += "<td>" + value.lastname + "</td>";
      json_data += "<td>" + value.email + "</td>";
      json_data += "<td>" + value.gender + "</td>";
      json_data += "<td>" + value.country + "</td>";
      json_data += "<td>" + value.state + "</td>";
      json_data += "<td>" + value.city + "</td>";
      json_data += "<td>" + value.dateadded + "</td>";
    });
    $("#data-table").append(json_data);
  });
});

// City & State Dropdown
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";

  if (s1.value == "india") {
    var optionArray = [
      "newdelhi|New Delhi",
      "karnataka|Karnataka",
      "kerala|Kerala",
      "tamilnadu|Tamil Nadu",
    ];
  } else if (s1.value == "us") {
    var optionArray = [
      "california|California",
      "texas|Texas",
      "washington|Washington",
      "florida|Florida",
    ];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");

    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}
