/*

 ### Basic Reqs
- [x] Where to store data? (localstorage)
- [x] How to modify data? (update action, delete action)

*/

//localStorage functions
$(document).ready(function(){

  $('.btn-add').on('click', function(e){
    
    var title = $('.title-input').val();
    var start = $('.start-input').val() || "";
    var end = $('.end-input').val() || "";
    var length = $('.length-input').val() || "";
    
    if (start !== "" && end !== "" && length === "") {
      length = findLength(start,end);
    }

    if (start !== "" && end === "" && length !== "") {
      end = findEnd(start,length);
    }

    if (start === "" && end !== "" && length !== "") {
      start = findStart(end,length);
    }

    var values = title + "|" + start + "|" + end + "|" + length;

    localStorage.setItem(title, values);

    var values = localStorage.getItem(title);

    var splitValues = values.split("|");
    var storedTitle = splitValues[0];
    var storedStart = splitValues[1];
    var storedEnd = splitValues[2];
    var storedLength = splitValues[3];

    var displayText = storedTitle + " | " + 
                      storedStart + " | " + 
                      storedEnd   + " | " + 
                      storedLength;
    
    
    $('.input-key').val('');
    $('.title-input').val('');
    $('.start-input').val('');
    $('.end-input').val('');
    $('.length-input').val('');

    $(".table-content").empty();
    show();
  });

    $('.btn-update').on('click', function(e){
    
    var title = $('.title-input').val();
    var start = $('.start-input').val() || "";
    var end = $('.end-input').val() || "";
    var length = $('.length-input').val() || "";
    
    if (start !== "" && end !== "" && length === "") {
      length = findLength(start,end);
    }

    if (start !== "" && end === "" && length !== "") {
      end = findEnd(start,length);
    }

    if (start === "" && end !== "" && length !== "") {
      start = findStart(end,length);
    }

    var values = title + "|" + start + "|" + end + "|" + length;

    localStorage.setItem(title, values);

    var values = localStorage.getItem(title);

    var splitValues = values.split("|");
    var storedTitle = splitValues[0];
    var storedStart = splitValues[1];
    var storedEnd = splitValues[2];
    var storedLength = splitValues[3];

    var displayText = storedTitle + " | " + 
                      storedStart + " | " + 
                      storedEnd   + " | " + 
                      storedLength;
    
    
    $('.input-key').val('');
    $('.title-input').val('');
    $('.start-input').val('');
    $('.end-input').val('');
    $('.length-input').val('');

    $(".table-content").empty();
    show();
  });

  $(".btn-delete").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){
      if($(this).is(":checked")){
        $(this).parents("tr").remove();
      }
    });
  });

  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.table-content').text('');
    show();
  });

  var show = function() {
    if (localStorage.length !== 0) {
      for (var key in localStorage) {

        if (key === "length") {
          break;
        }

        $(".table-content").append(`<tr class="${key}-row" id="row"><tr>`)

        var splitValues = localStorage.getItem(key).split("|");
        var storedTitle = splitValues[0];
        var storedStart = splitValues[1];
        var storedEnd = splitValues[2];
        var storedLength = splitValues[3];

        $(`.${storedTitle}-row`).append(`<td>${storedTitle}</td>`)
        $(`.${storedTitle}-row`).append(`<td>${storedStart}</td>`)
        $(`.${storedTitle}-row`).append(`<td>${storedEnd}</td>`)
        $(`.${storedTitle}-row`).append(`<td>${storedLength}</td>`)
        $(`.${storedTitle}-row`).append('<td><input type="checkbox" name="record"></td>')
       }
    } 
  }
  if (localStorage.length !== 0) {
    show();
  }
});
