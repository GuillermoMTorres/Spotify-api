window.onload = function(){

  //Las variables para los botones para enlazarlos más adelante a una función
  var $button = $('#request');
  var $buttonAlbum = $('#request-album');

  //Función que coge el valor del input y busca a los artistas de la API de Spotify
  //con ese parametro.
  $button.on("click", function(e) {

      e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

      //Función para la el token de acceso
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

    //Ajax que devuelve los datos de la busqueda incluyendo su nombre y su foto en
    //un div con la función mostrar() (Ver documentación abajo)
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
                myDiv.className = element.id;
                cadena = cadena + "<p>" + element.name + "</p>"
                if(element.images.length !== 0){
                     cadena = cadena + "<img src=" + element.images[1].url + ">";
                }
               myDiv.innerHTML = cadena;
                document.getElementById('ajaxContainer').appendChild(myDiv);
                cadena= "";
            });     
       }
    });
  });
  
  //Función que busca álbums a través del artista cogiendo 
  //el input como parámetro de la busqueda

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
            var cadena = "<ul>";
            response.albums.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
              if(element.images.length !== 0){
                cadena = cadena + "<img src=" + element.images[1].url + ">";
              }
            });     

            cadena = cadena + "</ul>";
            document.getElementById('ajaxContainer').innerHTML = cadena;
          }
      });
  });

  //Añade a su div, una lista con los álbums del autor al que se hace referencia.
  //Crea listas, y borra las que ya estaban mostradas.
  function mostrar(){

      var self = this;
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

      if($('ul').length !==0){
        $('ul').each(function(){
          $( this ).remove();
        });
      }

        //Petición de álbums por ID del artista.
      $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + this.className + '/albums',
        dataType: 'json',
        headers: {
           'Authorization': 'Bearer ' + access_token
        },
        success: function(response) { 
            var cadena = "<ul>";
            response.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
            });     
 
            cadena = cadena + "</ul>"
            self.innerHTML = self.innerHTML + cadena;
        }
      });
   
  }

}