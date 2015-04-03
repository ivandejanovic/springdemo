function getUrlParameters(){
	var urlParameters = '&gridname=Customers' +
						'&id=Customers' + $('#customerIDInputId').val() +
						'&version=' +$('#versionInputId').val() +
						'&firstName=' + $('#firstNameInputId').val() +
						'&lastName=' + $('#lastNameInputId').val() +
						'&address=' + $('#addressInputId').val() +
						'&jmbg=' + $('#jmbgInputId').val() + 
						'&landPhone=' + $('#landPhoneInputId').val() + 
						'&mobilePhone=' + $('#mobilePhoneInputId').val() +
						'&oriflameMemberNumber=' + $('#oriflameMemberNumberInputId').val() +
						'&email=' + $('#emailInputId').val() +
						'&birthday=' + $('#birthdayInputId').val() +
						'&personalData=' + $('#personalDataInputId').val() +
						'&recommendations=' + $('#recommendationsInputId').val();
						
	return urlParameters;
}
					
function openErrorDialog(errors){
	$('#Customers_dialog').text(errors);
	$('#Customers_dialog').dialog({
		title: 'Failed',
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});
}
					
function clearInputFieldErrorClass(){
	$('#firstNameInputId').removeClass('input_error');
	$('#lastNameInputId').removeClass('input_error');
	$('#addressInputId').removeClass('input_error');
	$('#jmbgInputId').removeClass('input_error');
	$('#landPhoneInputId').removeClass('input_error');
	$('#mobilePhoneInputId').removeClass('input_error');
	$('#oriflameMemberNumberInputId').removeClass('input_error');
	$('#emailInputId').removeClass('input_error');
	$('#birthdayInputId').removeClass('input_error');
	$('#personalDataInputId').removeClass('input_error');
	$('#recommendationsInputId').removeClass('input_error');
}
					
function validateCustomer(){
	clearInputFieldErrorClass();
	var status = true;
	var errors = '';
						
	var firstName = $('#firstNameInputId').val();
	var lastName = $('#lastNameInputId').val();
	var address = $('#addressInputId').val();
	var jmbg = $('#jmbgInputId').val();
	var landPhone = $('#landPhoneInputId').val();
	var mobilePhone = $('#mobilePhoneInputId').val();
	var oriflameMemberNumber = $('#oriflameMemberNumberInputId').val();
	var email = $('#emailInputId').val();
	var birthday = $('#birthdayInputId').val();
						
	if (firstName == ''){
		$('#firstNameInputId').addClass('input_error');
		errors +=  'First Name can not be blank.';
		status = false;
	}
						
	if (lastName == ''){
		$('#lastNameInputId').addClass('input_error');
		errors += 'Last Name can not be blank. ';
		status = false;
	}
						
	if (address == ''){
		$('#addressInputId').addClass('input_error');
		errors += 'Address can not be blank. ';
		status = false;
	}
						
	if (jmbg == ''){
		$('#jmbgInputId').addClass('input_error');
		errors += 'JMBG can not be blank. ';
		status = false;
	}
	else if (/\D/.test(jmbg)){
		$('#jmbgInputId').addClass('input_error');
		errors += 'JMBG can only contain digits. ';
		status = false;
	}
	else if (jmbg.length != 13){
		$('#jmbgInputId').addClass('input_error');
		errors += 'JMBG must contain 13 digits exactly. ';
		status = false;
	}
				
	if (landPhone == ''){
		$('#landPhoneInputId').addClass('input_error');
		errors += 'Land Phone can not be blank. ';
		status = false;
	}
	else if (/\D/.test(landPhone)){
		$('#landPhoneInputId').addClass('input_error');
		errors += 'Land Phone can only contain digits. ';
		status = false;
	}
						
	if (mobilePhone == ''){
		$('#mobilePhoneInputId').addClass('input_error');
		errors += 'Mobile Phone can not be blank. ';
		status = false;
	}
	else if (/\D/.test(mobilePhone)){
		$('#mobilePhoneInputId').addClass('input_error');
		errors += 'Mobile Phone can only contain digits. ';
		status = false;
	}
						
	if (oriflameMemberNumber == ''){
		$('#oriflameMemberNumberInputId').addClass('input_error');
		errors += 'Oriflame member number can not be blank. ';
		status = false;
	}
	else if (/\D/.test(oriflameMemberNumber)){
		$('#oriflameMemberNumberInputId').addClass('input_error');
		errors += 'Oriflame member number can only contain digits. ';
		status = false;
	}
						
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$('#emailInputId').addClass('input_error');
		errors += 'Email is not valid. ';
		status = false;
	}
						
	if (birthday == ''){
		$('#birthdayInputId').addClass('input_error');
		errors += 'Please use date picker to enter birthday. ';
		status = false;
	}
						
	if (status == false){
		openErrorDialog(errors);
	}
						
	return status;
}
					
function processCustomer(mode){
	var url = 'customer.htm?' + mode + '=true';
	var urlParameters = getUrlParameters();
	$.getJSON(url + urlParameters,
		function(result){
	    	if (result.success == true){
	    		$('#Customers_dialog').empty();
	    		$('#Customers_dialog').text('Entry has been processed successfully');
	    		$('#Customers_dialog').dialog({
	    			title: 'Success',
	    			modal: true,
	    			buttons: {
		    			'Ok': function() {
		    				$('#Customers_grid').trigger('reloadGrid');
		    				$(this).dialog('close');
		    				$('#customer_dialog').dialog('destroy');
		    			}
	    			}
	    		});
			}
			else{
				var errors = '';
				for (var i = 0; i < result.message.length; i++) {
					errors +=  result.message[i] + ' ';
				}
				openErrorDialog(errors);
			}
		}
	);
}
					
function addRowCustomers(){
	var id = 'customer_dialog';
	var url = 'customer.htm?load=true&id=Customers0&gridname=Customers';
	var title = 'Add Customer';
	openOkCancelDialog(id, url, true, title, true, false, 1000, onOkAddCustomerDialog, null);
}
					
function editRowCustomers(){
	var rowId = $('#Customers_grid').jqGrid('getGridParam','selrow');
	if( rowId != null ){
		var id = 'customer_dialog';
		var url = 'customer.htm?load=true&id=' + rowId + '&gridname=Customers';
		var title = 'Edit Customer';
		openOkCancelDialog(id, url, true, title, true, false, 1000, onOkEditCustomerDialog, null);
	}
	else{
		$( '#Customers_dialogSelectRow' ).dialog();
	}
}

function onOkAddCustomerDialog(dialog) {
	var status = false;
	status = validateCustomer();
	if (status == true){
		processCustomer('add');
	}
}

function onOkEditCustomerDialog(dialog) {
	var status = false;
	status = validateCustomer();
	if (status == true){
		processCustomer('edit');
	}
}