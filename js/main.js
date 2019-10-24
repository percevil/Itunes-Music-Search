// import { link } from "fs";



document.addEventListener('DOMContentLoaded', function(){

        // targeting the input field with an event listener.
    $('#album-search').on('submit', function(event) { 
        event.preventDefault(); 
        //target the input ,change into lower case,
        //add the replace method with the plus signs,
        let artist = $('#artist-name').val().replace(" ", "+").toLowerCase();
        // send output to the APi as a variable.
        $.ajax({ method: 'GET',
           url: 'http://itunes.apple.com/search?entity=album&limit=6&term='+artist,
           dataType: 'json'
        })

        // once done
        .done(function(artist) {
            // results is the array from Api. Collectionname is the key for album name
            console.log(artist.results[0].collectionName);

            // Loop section (output values that the Api finds for artist name and albums)
            $.each(artist.results, function(key, value) {
                //appending to a list for the Album names found.
               $('.album-list').append("<li>" +  value.collectionName +  "</li>");
               //Appending image url from itunes to the list. `artworkUr100` is the image file from iTunes.
               $('.album-list').append(`<img src="`+value.artworkUrl100+`"></img>`);
              
              
              }); 
              
        })
        .fail(function() {
            $('.error-log').append('Sorry there was an error.');
         });
     });





    });


let dave =  $('#artist-name')

