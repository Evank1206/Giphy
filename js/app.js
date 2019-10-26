
// $(document).ready(function(){

//     let api_key = 'QZDK12gEoyQSqJjGcUf0zhRnzG6Mqgaw';

//     // https://api.giphy.com/v1/gifs/search?api_key=ub2GyIwPubylVrPGcrfyAjIyiRSpkmbp&q=&limit=25&offset=0&rating=G&lang=en

//     // дээрх orginal url 
//     // доорх code ruu convert 
//     // let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=&limit=25&offset=0&rating=G&lang=en';

//     // console.log(url);

//     // function for displaying the giphy data
//     function renderButtons(){
//         $('#Container').empty();

//     };

//     $('#searchBTN').on('click', function(event){

//         event.preventDefault();

//     });




//     $('#searchBTN').on('click', function(){
//         const searchText = $('#Search').val();
//         const queryUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q='+ searchText +'&limit=2&offset=0&rating=G&lang=en';

//         console.log(queryUrl);
        
//         $.ajax({

//             type: 'GET',
//             url: queryUrl

//         }).then(function(response){

//             const data = response.data;
//             // console.log(response);

//             data.forEach(function(element){

//                 // console.log(data);

//             // $('#Container').append('<img src='+ $(element.images.fixed_height.url)+'>');

//             // console.log(element.images.fixed_height.url);
//             $('#Container').append('<img src=' + element.images.fixed_height.url+ '/>');

//             });
//         });
//     });
// });


$(document).ready(function(){

    var giphy = ['dog', 'cat','bird'];

    // Generic function for capturing the movie name from the data-attribute

    function displayGif(){
        var giphyName = $(this).attr('data-name');

        var api_key = 'ub2GyIwPubylVrPGcrfyAjIyiRSpkmbp';

        // var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=dog&api_key='+api_key;
        // console.log(giphyName);
        var queryUrl = "http://api.giphy.com/v1/gifs/search?t=" + giphyName + "&api_key="+ api_key +"&limit=5";
        console.log(queryUrl);

        $.ajax({
            type: ' GET',
            url: queryUrl

        }).then(function(response){

            var imageUrl = response;
            console.log(response);
            // $('#container').append();

        });
    }

    function renderButtons(){

        $('#container').empty();

    for(var i=0; i < giphy.length; i++){

        var btn = $('<button>');

        btn.addClass('giphy');
        btn.attr('data-name', giphy[i]);
        btn.text(giphy[i]);

        $('#container').append(btn);
    }
 }
    $('#searchBTN').on('click', function(event){
        event.preventDefault();

        var gif = $('#search').val().trim();

        giphy.push(gif);

        renderButtons();

    });
    console.log(giphy);

    $(document).on('click', '.giphy', displayGif);
    //$('.giphy').on('click', alertthem);

 renderButtons();
   

})



