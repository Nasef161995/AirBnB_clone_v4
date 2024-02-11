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

        $.get("http://' + window.location.hostname + ':5001/api/v1/status/", function(response)
        {
            if (response.status === 'OK') {
                $('div#api_status').addClass('available');
            }
            else {
                $('div#api_status').removeClass('available');
            }
        });
});
});