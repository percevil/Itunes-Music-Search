// import { link } from "fs";



document.addEventListener('DOMContentLoaded', function(){

    $('#album-search').on('submit', function(event) { 
        event.preventDefault(); 
        //target the input ,change into lower case,
        //add the replace method with the plus signs,
        let artist = $('#artist-name').val().replace(" ", "+").toLowerCase();
        // send output to the APi.
        $.ajax({ method: 'GET',
           url: 'http://itunes.apple.com/search?entity=album&limit=6&term='+artist,
           dataType: 'json'
        })
        .done(function(artist) {
            console.log(artist.results[0].collectionName);
            $.each(artist.results, function(key, value) {
               $('.album-list').append("<li>" +  value.collectionName +  "</li>");
               $('.album-list').append(`<img src="`+value.artworkUrl100+`"></img>`);
              
              
              }); 
              
        })
        // .fail(function() {
        //     $('.error-log').append('Sorry there was an error.');
        //  });
     });





    });


let dave =  $('#artist-name')

