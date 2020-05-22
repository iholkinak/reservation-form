$(function () {
  $("#datepicker").datepicker();
  $("#radio").buttonset();
  $("#ckeckboxes").buttonset();
  var availableTags = [
    "Alex Singer",
    "Ascari Bicycles",
    "Battaglin",
    "BMC",
    "Canyon",
    "Carrera Bicycles",
    "CIOCC",
    "Corvid Cycles",
    "Easy Racers",
    "Gazelle",
    "Kent",
    "Kestrel",
    "Haskell",
    "Masi",
    "Mondraker",
    "NS Bikes"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
  $("button").button();
  $("#options").selectmenu();

  $("input[type=radio]").checkboxradio("option", "icon", false);
  $("input[type=checkbox]").checkboxradio("option", "icon", false);
});