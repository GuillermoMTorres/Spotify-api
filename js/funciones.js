window.onload = function(){
  var $button = $('#request');
  var $buttonAlbum = $('#request-album');

  $button.on("click", function(e) {

      e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

       function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
                  q = window.location.hash.substring(1);
              while ( e = r.exec(q)) {
                 hashParams[e[1]] = decodeURIComponent(e[2]);
              }
              return hashParams;
            }

      var params = getHashParams();

      var access_token = params.access_token;

    $.ajax({
       url: 'https://api.spotify.com/v1/search',
       dataType: 'json',
       data: {
          type: "artist",
          query : document.getElementById('example-text-input').value
        },
       headers: {
           'Authorization': 'Bearer ' + access_token
       },
       success: function(response) {  

            var cadena = "";
            response.artists.items.forEach(function(element) {
            var myDiv = document.createElement("div");
            myDiv.addEventListener("click", mostrar);
              cadena = cadena + "<p>" + element.name + "</p>"
              if(element.images.length !== 0){
              cadena = cadena + "<img src=" + element.images[1].url + ">";
            }
            myDiv.innerHTML = cadena;
            document.getElementById('ajaxContainer').appendChild(myDiv);
            cadena= "";
            console.log("esi")
            });     
            console.log(cadena);
       }
    });
  });
  
  $buttonAlbum.on("click", function(e) {

      e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

       function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
                  q = window.location.hash.substring(1);
              while ( e = r.exec(q)) {
                 hashParams[e[1]] = decodeURIComponent(e[2]);
              }
              return hashParams;
            }

      var params = getHashParams();

      var access_token = params.access_token;

    $.ajax({
       url: 'https://api.spotify.com/v1/search',
       dataType: 'json',
       data: {
          type: "album",
          query : document.getElementById('example-text-input').value
        },
       headers: {
           'Authorization': 'Bearer ' + access_token
       },
       success: function(response) { 
       qwerty = response;  

            var cadena = "<ul>";
            response.albums.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
              if(element.images.length !== 0){
              cadena = cadena + "<img src=" + element.images[1].url + ">";
            }
            });     

            cadena = cadena + "</ul>"
            document.getElementById('ajaxContainer').innerHTML = cadena;
            console.log(cadena);
       }
    });
  });

  function mostrar(){

    e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

       function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
                  q = window.location.hash.substring(1);
              while ( e = r.exec(q)) {
                 hashParams[e[1]] = decodeURIComponent(e[2]);
              }
              return hashParams;
            }

      var params = getHashParams();

      var access_token = params.access_token;

      $.ajax({
       url: 'https://api.spotify.com/v1/artists/{id}/albums',
       dataType: 'json',
       headers: {
           'Authorization': 'Bearer ' + access_token
       },
       success: function(response) { 
       qwerty = response;  

            var cadena = "<ul>";
            response.albums.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
              if(element.images.length !== 0){
              cadena = cadena + "<img src=" + element.images[1].url + ">";
            }
            });     

            cadena = cadena + "</ul>"
            document.getElementById('ajaxContainer').innerHTML = cadena;
            console.log(cadena);
       }
    });
    console.log("sdfsdf")
  }

  $buttonAlbum.on("click", function(e) {

      e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

       function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
                  q = window.location.hash.substring(1);
              while ( e = r.exec(q)) {
                 hashParams[e[1]] = decodeURIComponent(e[2]);
              }
              return hashParams;
            }

      var params = getHashParams();

      var access_token = params.access_token;

    $.ajax({
       url: 'https://api.spotify.com/v1/search',
       dataType: 'json',
       data: {
          type: "album",
          query : document.getElementById('example-text-input').value
        },
       headers: {
           'Authorization': 'Bearer ' + access_token
       },
       success: function(response) { 
       qwerty = response;  

            var cadena = "<ul>";
            response.albums.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
              if(element.images.length !== 0){
              cadena = cadena + "<img src=" + element.images[1].url + ">";
            }
            });     

            cadena = cadena + "</ul>"
            document.getElementById('ajaxContainer').innerHTML = cadena;
            console.log(cadena);
       }
    });
  });
}