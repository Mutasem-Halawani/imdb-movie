/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//$("div").click(function(){
//   alert("hi"); 
//});
//itunes.apple.com/search?term=Hayehudim&country=il&limit=5&callback=?
//$.getJSON('http://www.omdbapi.com/?s=batman&type=movie', function(data) {
//    console.log('data');
//});

//var movieSearch = '';
$('form').submit(function(e){
   e.preventDefault();
   movieSearch = ($('input').val()); 
$('div.all-movies').html('');

$.ajax({
        url: 'http://www.omdbapi.com/?s=' + movieSearch + '&type=movie',
        type: 'GET',
        success: displayAll
    });

function displayAll(data){
    console.log(data);
    
    for(var i=0;i<data.Search.length;i++){
      console.log(data.Search[i]);
    var title = data.Search[i].Title;
    var poster = data.Search[i].Poster;
    var year = data.Search[i].Year;
    var container = $('<div>').addClass('movie-div');
    $(container).append('<h1>' + title + '</h1>');
    $(container).append('<img src=' + poster + '/>');
    $(container).append('<h3>' + year + '</h3>');
    $('div.all-movies').append(container);
    }
}

});


//$('body').append('<a>' +     + '</a>');