
  
  $(document).on("click", ".li-search", function () {
    $("#txt-search").val($(this).html());
    setFormFields($(this).attr("id"));
    $("#filter-records").html("");
  });
  
  $(".radio-group .radio").on("click", function () {
    $(".selected .fa").removeClass("fa-check");
    $(".radio").removeClass("selected");
    $(this).addClass("selected");
    if ($("#suser").hasClass("selected") == true) {
      $(".searchfield").show();
    } else {
      setFormFields(false);
      $("#filter-records").html("");
      $(".searchfield").hide();
    }
  });
  
  var step = 1;
  $(document).ready(function () { stepProgress(step); });
  
  $(".next").on("click", function () {
    var nextstep = false;
    if (step == 2) {
      nextstep = checkForm("userinfo");
    } else {
      nextstep = true;
    }
    if (nextstep == true) {
      if (step < $(".step").length) {
        $(".step").show();
        $(".step")
          .not(":eq(" + step++ + ")")
          .hide();
        stepProgress(step);
      }
      hideButtons(step);
    }
  });
  
  // ON CLICK BACK BUTTON
  $(".back").on("click", function () {
    if (step > 1) {
      step = step - 2;
      $(".next").trigger("click");
    }
    hideButtons(step);
  });
  
  // CALCULATE PROGRESS BAR
  stepProgress = function (currstep) {
    var percent = parseFloat(100 / $(".step").length) * currstep;
    percent = percent.toFixed();
    $(".progress-bar")
      .css("width", percent + "%")
      .html(percent + "%");
  };
  
  // DISPLAY AND HIDE "NEXT", "BACK" AND "SUMBIT" BUTTONS
  hideButtons = function (step) {
    var limit = parseInt($(".step").length);
    $(".action").hide();
    if (step < limit) {
      $(".next").show();
    }
    if (step > 1) {
      $(".back").show();
    }
    if (step == limit) {
      $(".next").hide();
      $(".submit").show();
    }
  };
  
  function setFormFields(id) {
    if (id != false) {
      // FILL STEP 2 FORM FIELDS
      d = data.find(x => x.id === id);
      $('#fname').val(d.fname);
      $('#lname').val(d.lname);
      $('#team').val(d.team);
      $('#address').val(d.address);
      $('#tel').val(d.tel);
    } else {
      // EMPTY USER SEARCH INPUT
      $("#txt-search").val('');
      // EMPTY STEP 2 FORM FIELDS
      $('#fname').val('');
      $('#lname').val('');
      $('#team').val('');
      $('#address').val('');
      $('#tel').val('');
    }
  }
  
  function checkForm(val) {
    // CHECK IF ALL "REQUIRED" FIELD ALL FILLED IN
    var valid = true;
    $("#" + val + " input:required").each(function () {
      if ($(this).val() === "") {
        $(this).addClass("is-invalid");
        valid = false;
      } else {
        $(this).removeClass("is-invalid");
      }
    });
    return valid;
  }

// Conditional logics
$(document).ready(function() {
    $('#locationStatus').change(function() {
        if ($(this).val() === 'Other') {
            $('#otherStatusGroup').show();
        } else {
            $('#otherStatusGroup').hide();
        }
    });
    $('#hasCoE').change(function() {
        if ($(this).val() === 'Yes') {
            $('.has-CoE-yes').show();
        } else {
            $('.has-CoE-yes').hide();
        }
    });
    $('#isPreviouslyTravelled').change(function() {
        if ($(this).val() === 'yes') {
            $('.isPreviouslyTravelled-Yes').show();
        } else {
            $('.isPreviouslyTravelled-Yes').hide();
        }
    });
    $('#hasGrantNumber').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasGrantNumber-yes').show();
        } else {
            $('.hasGrantNumber-yes').hide();
        }
    });
    $('#hasOSHC').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasOSHC-yes').show();
        } else {
            $('.hasOSHC-yes').hide();
        }
    });
    $('#HighestLevelOfSchooling').change(function() {
        if ($(this).val() === '11') {
            $('.HighestLevelOfSchooling-yes').hide();
            $('.HighestLevelOfSchooling-other').hide();
        } else if($(this).val() === '12'){
            $('.HighestLevelOfSchooling-yes').hide();
            $('.HighestLevelOfSchooling-other').show();
        }
        else {
            $('.HighestLevelOfSchooling-yes').show();
        }
    });

    $('#isEnrollledOtherCountry').change(function() {
        if ($(this).val() === 'yes') {
            $('.isEnrollledOtherCountry-yes').show();
        } else {
            $('.isEnrollledOtherCountry-yes').hide();
        }
    });
    $('#hasStudiedInAUS').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasStudiedInAUS-yes').show();
        } else {
            $('.hasStudiedInAUS-yes').hide();
        }
    });

    $('#authorisedRecipient').change(function() {
        if ($(this).val() === '1') {
            $('.authorisedRecipient-agent').show();
            $('.authorisedRecipient-practitioner').hide();
            $('.authorisedRecipient-another').hide();
        } else if($(this).val() === '2'){
            $('.authorisedRecipient-practitioner').show();
            $('.authorisedRecipient-agent').hide();
            $('.authorisedRecipient-another').hide();
        }else if($(this).val() === '3'){
          $('.authorisedRecipient-another').show();
          $('.authorisedRecipient-practitioner').hide();
          $('.authorisedRecipient-agent').hide();
        } else {
            $('.authorisedRecipient-agent').hide();
            $('.authorisedRecipient-practitioner').hide();
            $('.authorisedRecipient-another').hide();
        }
    });

    // Show the NID popup
    $('#hasNID').change(function() {
        if ($(this).val() === 'yes') {
            $('#nidPopup').modal('show'); // Show the popup
        }
    });
    $('#confirmNID').click(function() {
        $('#nidPopup').modal('hide'); // Hide the popup
    });
    $('[data-dismiss="modal"]').click(function() {
        $('#nidPopup').modal('hide'); // Hide the popup
    });

    // Change the Country Name with the selected field
    $('#countryofPassport').change(function() {
        const selectedCountry = $(this).find('option:selected').text();
        $('.passportCountry').text(selectedCountry);
    });
    $('#countryofPassport').trigger('change');

    // Change email value 
    $("#EmailAddress").on("input", function() {
      $("#staticEmail").val($(this).val());
      console.log("Email updated:", $(this).val());
  });

});

// Educational repeater field outside AUS
document.getElementById('add-education-entry').addEventListener('click', function() {
  var container = document.getElementById('education-history');
  var newEntry = document.createElement('div');
  newEntry.classList.add('education-entry');
  newEntry.innerHTML = `
      <input type="text" class="form-control" name="certification[]" placeholder="Certification">
      <input type="text" class="form-control" name="institution[]" placeholder="Institution name">
      <input type="text" class="form-control" name="course[]" placeholder="Course name">
      <input type="date" class="form-control" name="date_from[]">
      <input type="date" class="form-control" name="date_to[]">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.education-entry').remove();
  }
});

// Educational repeater field in AUS
document.getElementById('AUS-add-education-entry').addEventListener('click', function() {
  var container = document.getElementById('AUS-education-history');
  var newEntry = document.createElement('div');
  newEntry.classList.add('education-entry');
  newEntry.innerHTML = `
      <input type="text" class="form-control" name="certification[]" placeholder="Certification">
      <input type="text" class="form-control" name="institution[]" placeholder="Institution name">
      <input type="text" class="form-control" name="course[]" placeholder="Course name">
      <input type="date" class="form-control" name="date_from[]">
      <input type="date" class="form-control" name="date_to[]">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.education-entry').remove();
  }
});