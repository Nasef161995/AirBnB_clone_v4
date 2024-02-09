$(document).ready(function () {
    const amenities = {};
    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }
        const amenities_list = Object.values(amenities)
        if (amenities_list.length > 0) {
            $('div.amenities > h4').text(amenities_list.join(", "));
        }
        else {
            $('div.amenities > h4').html("&nbsp;");
        }
        console.log(amenities);

});
});
// Listen for changes on each input checkbox tag:
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked
