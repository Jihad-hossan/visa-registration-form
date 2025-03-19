
  
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
    $('#hasNID').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasNID-yes').show();
        } else {
            $('.hasNID-yes').hide();
        }
    });
    $('#requireOngoingMedicalCare').change(function() {
        if ($(this).val() === 'yes') {
            $('.requireOngoingMedicalCare-yes').show();
        } else {
            $('.requireOngoingMedicalCare-yes').hide();
        }
    });
    $('#hasOffenceCurrentlyAwaiting').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasOffenceCurrentlyAwaiting-yes').show();
        } else {
            $('.hasOffenceCurrentlyAwaiting-yes').hide();
        }
    });
    $('#hasRemovedOffence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasRemovedOffence-yes').show();
        } else {
            $('.hasRemovedOffence-yes').hide();
        }
    });
    $('#hasDomesticViolence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasDomesticViolence-yes').show();
        } else {
            $('.hasDomesticViolence-yes').hide();
        }
    });
    $('#hasArrestWarrant').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasArrestWarrant-yes').show();
        } else {
            $('.hasArrestWarrant-yes').hide();
        }
    });
    $('#hasSexualOffence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasSexualOffence-yes').show();
        } else {
            $('.hasSexualOffence-yes').hide();
        }
    });
    $('#hasRegisteredSexualOffence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasRegisteredSexualOffence-yes').show();
        } else {
            $('.hasRegisteredSexualOffence-yes').hide();
        }
    });
    $('#hasInsanityOffence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasInsanityOffence-yes').show();
        } else {
            $('.hasInsanityOffence-yes').hide();
        }
    });
    $('#hasInCourtNotPlead').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasInCourtNotPlead-yes').show();
        } else {
            $('.hasInCourtNotPlead-yes').hide();
        }
    });
    $('#hasOffenceNationalSecurity').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasOffenceNationalSecurity-yes').show();
        } else {
            $('.hasOffenceNationalSecurity-yes').hide();
        }
    });
    $('#hasGenocideOffence').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasGenocideOffence-yes').show();
        } else {
            $('.hasGenocideOffence-yes').hide();
        }
    });
    $('#hasAssociatedWithCriminal').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasAssociatedWithCriminal-yes').show();
        } else {
            $('.hasAssociatedWithCriminal-yes').hide();
        }
    });
    $('#hasMilitaryTraining').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasMilitaryTraining-yes').show();
        } else {
            $('.hasMilitaryTraining-yes').hide();
        }
    });
    $('#hasTraffickingOffences').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasTraffickingOffences-yes').show();
        } else {
            $('.hasTraffickingOffences-yes').hide();
        }
    });
    $('#hasRemovedFromAnyCountry').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasRemovedFromAnyCountry-yes').show();
        } else {
            $('.hasRemovedFromAnyCountry-yes').hide();
        }
    });
    $('#hasOverstayedVisa').change(function() {
        if ($(this).val() === 'yes') {
            $('.hasOverstayedVisa-yes').show();
        } else {
            $('.hasOverstayedVisa-yes').hide();
        }
    });
    $('#CountryOfResidence').change(function() {
        if ($(this).val() === 'yes') {
            $('.CountryOfResidence-yes').show();
        } else {
            $('.CountryOfResidence-yes').hide();
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
    // $('#hasNID').change(function() {
    //     if ($(this).val() === 'yes') {
    //         $('#nidPopup').modal('show'); // Show the popup
    //     }
    // });
    // $('#confirmNID').click(function() {
    //     $('#nidPopup').modal('hide'); // Hide the popup
    // });
    // $('[data-dismiss="modal"]').click(function() {
    //     $('#nidPopup').modal('hide'); // Hide the popup
    // });


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
    });

    // Confirmation Fields
    $("#familyName").on("input", function() {
        $("#fmlyName").text($(this).val());
    });
    $("#givenName").on("input", function() {
        $("#givnNames").text($(this).val());
    });
    $("#dateOfBirth").on("input", function() {
        $("#dateOfBir").text($(this).val());
    });
    $('input[name="sexOptions"]').on("change", function() {
        const selectedLabel = $('input[name="sexOptions"]:checked').next('label').text();
        $("#appcntSex").text(selectedLabel);
    });
    $("#passportNumb").on("input", function() {
        $("#passNumb").text($(this).val());
    });

    $('#CountryOfBirth').change(function() {
        const selectedCountry = $(this).find('option:selected').text();
        $('#CntryOfBir').text(selectedCountry);
    });
    $('#CountryOfBirth').trigger('change');

    $('#countryofPassport').change(function() {
        const selectedCountry = $(this).find('option:selected').text();
        $('#ContryOfPass').text(selectedCountry);
    });
    $('#countryofPassport').trigger('change');

});

// ================================
// Repeaters
// ================================
// CoE repeater
document.addEventListener('DOMContentLoaded', function () {
    var addCoEButton = document.getElementById('add-CoE-details');
    
    if (addCoEButton) {
        addCoEButton.addEventListener('click', function() {
            var container = document.getElementById('hasCoE-details');
            if (!container) return;
            
            var newEntry = document.createElement('div');
            newEntry.classList.add('CoE-entry');
            newEntry.innerHTML = `
                <input class="form-control" type="text" name="CoEName[]" placeholder="COE Code">
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
    }
});


// Non CoE repeater
// Check if the element with ID 'add-other-evidence' exists
var addOtherEvidenceButton = document.getElementById('add-other-evidence');

if (addOtherEvidenceButton) {
  addOtherEvidenceButton.addEventListener('click', function() {
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
        <input class="form-control" type="text" name="EducationProvider[]" placeholder="Education Provider">
        <input class="form-control" type="date" name="CommencementDate[]" placeholder="Commencement Date">
        <input class="form-control" type="date" name="CompletionDate[]" placeholder="Completion Date">
        <button type="button" class="remove-entry btn">Remove</button>
    `;
    container.appendChild(newEntry);
  });
}

// Event delegation for dynamically added remove buttons
document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.Non-CoE-entry').remove();
  }
});

// Educational repeater field outside AUS
var addEducationEntryButton = document.getElementById('add-education-entry');

if (addEducationEntryButton) {
  addEducationEntryButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.education-entry').remove();
  }
});

// NID repeater field
var addEducationEntryButton = document.getElementById('add-nid-details');

if (addEducationEntryButton) {
  addEducationEntryButton.addEventListener('click', function() {
    var container = document.getElementById('nid-details');
    var newEntry = document.createElement('div');
    newEntry.classList.add('nid-entry');
    newEntry.innerHTML = `
        <input class="form-control" type="text" name="nidFamilyName[]" placeholder="Family Name">
        <input class="form-control" type="text" name="nidGivenNames[]" placeholder="Given names">
        <input class="form-control" type="text" name="nidNumber[]" placeholder="Identification number">
        <select id="nidCountryOfIssue" name="nidCountryOfIssue" class="form-control">
            <option value="" disabled selected>Please Select</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <input class="form-control" type="date" name="date_from[]">
        <input class="form-control" type="date" name="date_to[]">
        <button type="button" class="remove-entry btn">Remove</button>
    `;
    container.appendChild(newEntry);
  });
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.nid-entry').remove();
  }
});

// Educational repeater field in AUS
var addEducationEntryButton = document.getElementById('AUS-add-education-entry');

if (addEducationEntryButton) {
  // Add event listener only if the element exists
  addEducationEntryButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.education-entry').remove();
  }
});

// Country Visited
var addVisitedCountryButton = document.getElementById('add-visited-country');

if (addVisitedCountryButton) {
  addVisitedCountryButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.visited-entry').remove();
  }
});

// Country Visited for 3 months
var addVisitedCountry3MonthsButton = document.getElementById('add-visited-country-3months');

if (addVisitedCountry3MonthsButton) {
  addVisitedCountry3MonthsButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.visited-entry').remove();
  }
});

// Admitted Hospital
var addAdmittedHospitalButton = document.getElementById('add-addmited-hospital');

if (addAdmittedHospitalButton) {
  addAdmittedHospitalButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.hospital-entry').remove();
  }
});

// Worked Hospital
var addWorkedHospitalButton = document.getElementById('add-worked-hospital');

if (addWorkedHospitalButton) {
  addWorkedHospitalButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.worked-hospital-entry').remove();
  }
});

// Worked in Care Hospital
var addWorkedChildCareHospitalButton = document.getElementById('add-worked-child-care-hospital');

    if (addWorkedChildCareHospitalButton) {
        addWorkedChildCareHospitalButton.addEventListener('click', function() {
            var container = document.getElementById('worked-child-care-hospital');
            var newEntry = document.createElement('div');
            newEntry.classList.add('worked-hospital-entry');
            newEntry.innerHTML = `
                <input class="form-control" type="text" name="workedChildCareName[]" placeholder="Name">
                <input class="form-control" type="text" name="childCareRole[]" placeholder="Role">
                <input class="form-control" type="textarea" name="workedChildCareDetails[]" rows="3" placeholder="Details">
                <input class="form-control" type="text" name="workedChildCareActions[]" placeholder="Actions">
                <button type="button" class="remove-entry btn">Remove</button>
            `;
            container.appendChild(newEntry);
    });
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.worked-hospital-entry').remove();
  }
});

// Worked in Child Care Hospital
var addWorkedChildCareHospitalButton = document.getElementById('add-worked-child-care-hospital');

if (addWorkedChildCareHospitalButton) {
  // Add event listener only if the element exists
  addWorkedChildCareHospitalButton.addEventListener('click', function() {
    var container = document.getElementById('worked-child-care-hospital');
    var newEntry = document.createElement('div');
    newEntry.classList.add('hospital-entry');
    newEntry.innerHTML = `
        <input class="form-control" type="text" name="careHospitalName[]" placeholder="Name">
        <input class="form-control" type="textarea" name="careDetails[]" rows="3" placeholder="Details">
        <input class="form-control" type="text" name="careActionInHospital[]" placeholder="Actions">
        <button type="button" class="remove-entry btn">Remove</button>
    `;
    container.appendChild(newEntry);
  });
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.hospital-entry').remove();
  }
});

// Has/Had Tuberculosis
// Check if the element with ID 'add-tuberculosis' exists
var addTuberculosisButton = document.getElementById('add-tuberculosis');

if (addTuberculosisButton) {
  addTuberculosisButton.addEventListener('click', function() {
    var container = document.getElementById('has-tuberculosis');
    var newEntry = document.createElement('div');
    newEntry.classList.add('hospital-entry');
    newEntry.innerHTML = `
        <input class="form-control" type="text" name="tuberculosisName[]" placeholder="Name">
        <input class="form-control" type="textarea" name="tuberculosisDetails[]" rows="3" placeholder="Details">
        <input class="form-control" type="text" name="tuberculosisAction[]" placeholder="Actions">
        <button type="button" class="remove-entry btn">Remove</button>
    `;
    container.appendChild(newEntry);
  });
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.hospital-entry').remove();
  }
});

// Has/Had Disease
var addDiseaseButton = document.getElementById('add-disease');

if (addDiseaseButton) {
  addDiseaseButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.hospital-entry').remove();
  }
});

// Require Medical Care
var addRequireMedicalCareButton = document.getElementById('add-require-medical-care');

if (addRequireMedicalCareButton) {
  addRequireMedicalCareButton.addEventListener('click', function() {
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
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-entry')) {
    event.target.closest('.hospital-entry').remove();
  }
});


// ================================
// Fil uploads
// ================================
document.addEventListener('DOMContentLoaded', function () {
    // Get all file inputs
    const fileInputs = document.querySelectorAll('.custom-file-input');

    fileInputs.forEach(input => {
        const filePathSpan = input.nextElementSibling; // The span to display the file path
        const removeButton = filePathSpan.nextElementSibling; // The remove button
        const customFileDiv = input.closest('.custom-file'); // The parent div

        // Handle file selection
        input.addEventListener('change', function () {
            if (this.files && this.files.length > 0) {
                filePathSpan.textContent = this.files[0].name; // Display the file name
                removeButton.style.display = 'inline-block'; // Show the remove button
                customFileDiv.classList.add('hide-file-selector-button'); // Hide the file selector button
            }
        });

        // Handle file removal
        removeButton.addEventListener('click', function () {
            input.value = ''; // Clear the file input
            filePathSpan.textContent = ''; // Clear the file path display
            removeButton.style.display = 'none'; // Hide the remove button
            customFileDiv.classList.remove('hide-file-selector-button'); // Show the file selector button
        });
    });
});

// ================================
// Modify Date
// ================================
document.getElementById('dateOfIssue').max = new Date().toISOString().split('T')[0];
document.getElementById('dateOfBirth').max = new Date().toISOString().split('T')[0];

// disable previous
document.getElementById('dateOfExpiry').min = new Date().toISOString().split('T')[0];
