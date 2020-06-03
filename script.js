function calculateP() {
    
    // Clearing junk value
    document.getElementById('calculate').innerHTML = 0;

    // Getting value from input field
    let totalNumber = document.getElementById('total').value;
    let doneNumber = document.getElementById('done').value;
    let calcPercentage;
    
    // Setting Conditions
    if ( doneNumber > 0 &&  totalNumber > 0 && doneNumber <= totalNumber ) {
        calcPercentage = (doneNumber / totalNumber ) * 100;
    } else {
        alert('Insert proper Value');
        return false;
    }

    // Displaying result
    document.getElementById('calculate').innerHTML = calcPercentage.toFixed(2);
    
}


// Jquery Version:
// jQuery(document).ready(function($) {
// 	$('.calcValue').click(function(event) {
// 		/* Act on the event */
// 		var total = $('#total').val();
// 		var done = $('#done').val();
// 		var percentage = (done / total) * 100;
// 		$('#calculate').html(percentage.toFixed(2));
// 	});
// });