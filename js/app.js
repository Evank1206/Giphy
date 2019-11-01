$(document).ready(function(){

var giphies = ['Mr. Joker', 'Mr.Bean', 'Mr.Sponge Bob'];
    // console.log(giphies);


    function renderButtons(){

        $('#button-View').empty();
        for(var i = 0; i < giphies.length; i++){
                
            $('#button-View').append('<button class="btn">' + giphies[i] + '</button>');
        //  console.log(giphies[i]);  

        };
    
    };
    renderButtons();
        

        // This function handles events where one button is clicked

    $('#add-Giphy').on('click', function(event){
        event.preventDefault();

    var giphy = $('#giphy-Input').val();

    $('#button-View').append('<button class="btn">' + giphy + '</button>');
        // console.log(giphy);


    });

    renderButtons();

    // $('.btn').on('click', function(){
    
    //     // console.log("i'm mr coffee'");

    //     console.log( $(this).text() );
        
    // });

    $(document).on('click', '.btn', function(){
    // console.log( $(this).text() );

    var btnName = $(this).text();


    const api_key = 'QZDK12gEoyQSqJjGcUf0zhRnzG6Mqgaw';

    const queryURL = "http://api.giphy.com/v1/gifs/search?q=" + btnName + "&api_key="+ api_key +"&limit=20";

    $.ajax({
        type: 'GET',
        url: queryURL
    }).then(function(response){

        console.log(response);

        // console.log(response.data[0].rating);

        // console.log(response.data[0].title);

        // var rating = response.data[0].rating
        // var images = response.data[0].images.fixed_height
        var url = response.data[0].images.fixed_height.url

        console.log(response.data[0].images.fixed_height.url);
        // $(this).html(response.data[0].images.fixed_height.url);
        // $('#giphy-View').append(url); 

        var imgUrl = $('<img>');
        imgUrl.attr('src', url);
        imgUrl.attr('alt', 'giphies image');
        $('#giphy-View').append(imgUrl);


    });

});

});


// жишээ яаж 

// $(document).on('click', '.btn', function(){
//     console.log( $(this) );

// });