
  
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

// ================================
// Conditional logics
// ================================
$(document).ready(function() {
    $('#locationStatus').change(function() {
        if ($(this).val() === 'Other') {
            $('#otherStatusGroup').show();
        } else {
            $('#otherStatusGroup').hide();
        }
    });
    $('#hasCoE').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasCoE-yes').show();
        } else {
            $('.hasCoE-yes').hide();
        }
    });
    $('#hasNoCoE').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasNoCoE-yes').show();
        } else {
            $('.hasNoCoE-yes').hide();
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
    $('#hasTakenENTest').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasTakenENTest-yes').show();
        } else {
            $('.hasTakenENTest-yes').hide();
        }
    });
    $('#hasStudied5yrsEN').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasStudied5yrsEN-yes').show();
        } else {
            $('.hasStudied5yrsEN-yes').hide();
        }
    });
    $('#hasVisitedAnyCountry').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasVisitedAnyCountry-yes').show();
        } else {
            $('.hasVisitedAnyCountry-yes').hide();
        }
    });
    $('#hasVisaCancelled').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasVisaCancelled-yes').show();
        } else {
            $('.hasVisaCancelled-yes').hide();
        }
    });
    $('#hasVisitedFor3months').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasVisitedFor3months-yes').show();
        } else {
            $('.hasVisitedFor3months-yes').hide();
        }
    });
    $('#hasAdmittedInHospital').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasAdmittedInHospital-yes').show();
        } else {
            $('.hasAdmittedInHospital-yes').hide();
        }
    });
    $('#isIntedToWorkInHospital').change(function() {
        if ($(this).val() === 'yes') {
            $('.isIntedToWorkInHospital-yes').show();
        } else {
            $('.isIntedToWorkInHospital-yes').hide();
        }
    });
    $('#isIntedToWorkInCareHospital').change(function() {
        if ($(this).val() === 'yes') {
            $('.isIntedToWorkInCareHospital-yes').show();
        } else {
            $('.isIntedToWorkInCareHospital-yes').hide();
        }
    });
    $('#isIntedToWorkInChildCareHospital').change(function() {
        if ($(this).val() === 'yes') {
            $('.isIntedToWorkInChildCareHospital-yes').show();
        } else {
            $('.isIntedToWorkInChildCareHospital-yes').hide();
        }
    });
    $('#hasTuberculosis').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasTuberculosis-yes').show();
        } else {
            $('.hasTuberculosis-yes').hide();
        }
    });
    $('#hasDisease').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasDisease-yes').show();
        } else {
            $('.hasDisease-yes').hide();
        }
    });
    $('#requireOngoingMedicalCare').change(function() {
        if ($(this).val() === 'yes') {
            $('.requireOngoingMedicalCare-yes').show();
        } else {
            $('.requireOngoingMedicalCare-yes').hide();
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

    // ================================
    // Popups
    // ================================
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


     // ================================
    // Change value dynamicaly
    // ================================
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

// ================================
// Repeaters
// ================================
// CoE repeater
document.getElementById('add-CoE-details').addEventListener('click', function() {
  var container = document.getElementById('hasCoE-details');
  var newEntry = document.createElement('div');
  newEntry.classList.add('CoE-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="CoEName[]" placeholder="Name">
      <input class="form-control" type="text" name="CoEActions[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.CoE-entry').remove();
  }
});

// Non CoE repeater
document.getElementById('add-other-evidence').addEventListener('click', function() {
  var container = document.getElementById('other-evidence');
  var newEntry = document.createElement('div');
  newEntry.classList.add('Non-CoE-entry');
  newEntry.innerHTML = `
      <select class="form-control" id="evidenceType">
          <option value="" disabled selected>Please Select</option>
          <option value="Letter of Offer ">Letter of Offer </option>
          <option value="Advice Acceptance of Secondary Students">Advice Acceptance of Secondary Students</option>
          <option value="Letter of Post Graduate Thesis Marking">Letter of Post Graduate Thesis Marking</option>
          <option value="Department of Foreign Affairs and Trade letter of Support">Department of Foreign Affairs and Trade letter of Support</option>
          <option value="Department of Defense letter of Support">Department of Defense letter of Support</option>
      </select>
      <input class="form-control" type="text" name="CourseName[]" placeholder="Course Name & Code">
      <input class="form-control" type="text" name="EducationProvider []" placeholder="Education Provider">
      <input class="form-control" type="date" name="CommencementDate[]" placeholder="Commencement Date">
      <input class="form-control" type="date" name="CompletionDate[]" placeholder="Completion Date">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.Non-CoE-entry').remove();
  }
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

// Country Visited
document.getElementById('add-visited-country').addEventListener('click', function() {
  var container = document.getElementById('countries-visited');
  var newEntry = document.createElement('div');
  newEntry.classList.add('visited-entry');
  newEntry.innerHTML = `
      <input type="text" class="form-control" name="applicantsName[]" placeholder="Name">
      <input type="text" class="form-control" name="visitCountry[]" placeholder="Country name">
      <input type="date" class="form-control" name="dateFromVisit[]">
      <input type="date" class="form-control" name="date_toVisit[]">
      <input class="form-control" type="textarea" name="reasonForVisit[]" rows="3" placeholder="Reason for visit">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.visited-entry').remove();
  }
});

// Country Visited for 3 months
document.getElementById('add-visited-country-3months').addEventListener('click', function() {
  var container = document.getElementById('countries-visited-3months');
  var newEntry = document.createElement('div');
  newEntry.classList.add('visited-entry');
  newEntry.innerHTML = `
      <input type="text" class="form-control" name="applicantsName[]" placeholder="Name">
      <input type="text" class="form-control" name="visitCountry[]" placeholder="Country name">
      <input type="date" class="form-control" name="dateFromVisit[]">
      <input type="date" class="form-control" name="date_toVisit[]">
      <input class="form-control" type="textarea" name="reasonForVisit[]" rows="3" placeholder="Reason for visit">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.visited-entry').remove();
  }
});

// Admitted Hospital
document.getElementById('add-addmited-hospital').addEventListener('click', function() {
  var container = document.getElementById('addmited-hospital');
  var newEntry = document.createElement('div');
  newEntry.classList.add('hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="hospitalName[]" placeholder="Hospital Name">
      <input class="form-control" type="textarea" name="reasonForVisit[]" rows="3" placeholder="Reason...">
      <input class="form-control" type="text" name="actionInHospital[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.hospital-entry').remove();
  }
});

// Worked Hospital
document.getElementById('add-worked-hospital').addEventListener('click', function() {
  var container = document.getElementById('worked-hospital');
  var newEntry = document.createElement('div');
  newEntry.classList.add('worked-hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="workedName[]" placeholder="Name">
      <input class="form-control" type="text" name="Role[]" placeholder="Role">
      <input class="form-control" type="textarea" name="workedDetails[]" rows="3" placeholder="Details">
      <input class="form-control" type="text" name="workedActions[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.worked-hospital-entry').remove();
  }
});

// Worked in Care Hospital
document.getElementById('add-worked-care-hospital').addEventListener('click', function() {
  var container = document.getElementById('worked-care-hospital');
  var newEntry = document.createElement('div');
  newEntry.classList.add('worked-hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="workedCareName[]" placeholder="Name">
      <input class="form-control" type="text" name="careRole[]" placeholder="Role">
      <input class="form-control" type="textarea" name="workedCareDetails[]" rows="3" placeholder="Details">
      <input class="form-control" type="text" name="workedCareActions[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.worked-hospital-entry').remove();
  }
});

// Worked in Child Care Hospital
document.getElementById('add-worked-child-care-hospital').addEventListener('click', function() {
  var container = document.getElementById('worked-child-care-hospital');
  var newEntry = document.createElement('div');
  newEntry.classList.add('hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="careHospitalName[]" placeholder="Name">
      <input class="form-control" type="textarea" name="careDetails[]" rows="3" placeholder="Detais">
      <input class="form-control" type="text" name="careActionInHospital[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.hospital-entry').remove();
  }
});

// Has/Had Tuberculosis
document.getElementById('add-tuberculosis').addEventListener('click', function() {
  var container = document.getElementById('has-tuberculosis');
  var newEntry = document.createElement('div');
  newEntry.classList.add('hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="tuberculosisName[]" placeholder="Name">
      <input class="form-control" type="textarea" name="tuberculosisDetails[]" rows="3" placeholder="Detais">
      <input class="form-control" type="text" name="tuberculosisAction[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.hospital-entry').remove();
  }
});

// Has/Had Disease
document.getElementById('add-disease').addEventListener('click', function() {
  var container = document.getElementById('has-disease');
  var newEntry = document.createElement('div');
  newEntry.classList.add('hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="diseaseName[]" placeholder="Name">
      <input class="form-control" type="textarea" name="diseaseCondition[]" rows="3" placeholder="Condition">
      <input class="form-control" type="text" name="actionForDisease[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.hospital-entry').remove();
  }
});

// Require Medical Care
document.getElementById('add-require-medical-care').addEventListener('click', function() {
  var container = document.getElementById('require-medical-care');
  var newEntry = document.createElement('div');
  newEntry.classList.add('hospital-entry');
  newEntry.innerHTML = `
      <input class="form-control" type="text" name="treatmentName[]" placeholder="Name">
      <input class="form-control" type="textarea" name="treatmentDetails[]" rows="3" placeholder="Details">
      <input class="form-control" type="text" name="actionTreatment[]" placeholder="Actions">
      <button type="button" class="remove-entry btn">Remove</button>
  `;
  container.appendChild(newEntry);
});

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
      event.target.closest('.hospital-entry').remove();
  }
});