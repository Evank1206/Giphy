$(document).ready(function () {

    var giphies = [];
    var page = 0;

    function renderButtons() {

        $('#button-container').empty();
        for (var i = 0; i < giphies.length; i++) {

            $('#button-container').append('<button class="btn">' + giphies[i] + '</button>');
        };
    };
    renderButtons();

    // This function handles events where one button is clicked
    $('#add-btn').on('click', function (event) {
        event.preventDefault();
        var giphy = $('#giphy-Input').val();

        $('#button-container').append('<button class="btn">' + giphy + '</button>');
        // console.log(giphy);
    });

    // $('.btn').on('click', function(){
    //     console.log("i'm mr coffee'");
    //     console.log( $(this).text() );
    // });
    // дээрх жишжээ болон дараах жишээ 2 адил

    function getStuff() {

        /*grabing user input data */
        var btnName = $(this).text(); //or .val()
        // console.log(btnName)
        page++;

        const api_key = 'QZDK12gEoyQSqJjGcUf0zhRnzG6Mqgaw';

        const queryURL = "http://api.giphy.com/v1/gifs/search?q=" + btnName + "&api_key=" + api_key + "&limit=10";

        $.ajax({
            type: 'GET',
            url: queryURL + '&offset=' + page*10
        }).then(function (response) {

            console.log(response);

            for (var i = 0; i < 10; i=i+1) {
                // console.log(response.data[i]);

                var url = response.data[i].images.fixed_height.url

                // var stopImageUrl = response.data[i].images.fixed_width_small_still.url
                // console.log(stopImageUrl);
                
                // console.log(response.data[i].images.fixed_height.url);
                // $(this).html(response.data[0].images.fixed_height.url);
                // $('#giphy-View').append(url); 

                var ImageUrl = $('<img width=200 height=200>');
                ImageUrl.attr('src', url);
                ImageUrl.attr('alt', 'class="giphies-image"');
                $('#giphy-container').append(ImageUrl);

            }
            // search for event capturing
            // $('.giphies image').on('click', function(){

            //     var state = $(this).attr("")
            // })
        });

    }


    $(document).on('click', '.btn', getStuff);
    $(document).on('click', '#next', getStuff);

});