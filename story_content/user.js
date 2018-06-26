function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ainwmHixos":
        Script1();
        break;
      case "69Esnw6AUU4":
        Script2();
        break;
      case "6cCVCexeqVb":
        Script3();
        break;
      case "5cVxRWcOSh0":
        Script4();
        break;
      case "6n9cno4yx8P":
        Script5();
        break;
      case "6Ko0HyARK0H":
        Script6();
        break;
      case "5kZ1cs6klnN":
        Script7();
        break;
      case "668vqPhRFAk":
        Script8();
        break;
      case "62ZAPzNqjEI":
        Script9();
        break;
      case "6jEgRNQGBQQ":
        Script10();
        break;
      case "6H3iVY06cSH":
        Script11();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script10()
{
  $("#tab-customlink").show();
}

function Script11()
{
  window.print();
}

