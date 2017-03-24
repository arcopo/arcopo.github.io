$(function() {

    
    //Set up instafeed
    Parse.$ = jQuery;
 
  

    
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("kontaktAppId", "kontaktMasterKey");
    Parse.serverURL = 'https://kontaktcam.herokuapp.com/parse'
 
    var Class = Parse.Object.extend("Images");
    var query = new Parse.Query(Class);

    query.find({
        success: function(results) {
       //     alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                renderQuestion(object)
            }
        },
            error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

});

function renderQuestion(object) {
    
    var photo = object.get("file");
    var url = photo.url();
   // generate the html for the question
   var html = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="photo-box"><div class="image-wrap"><img src="'+url+'"></div><div class="description">Fantastic Architecture #architecture #testing<div class="date">September 16, 2014</div></div></div></div>';
 
   // add it to the DOM tree
   var results = document.getElementById('instafeed');
    
   results.innerHTML += html;
    
    
}





/*
$('index.html').append("<div id='recommendations'><ul<li>Cross sell 1</li><li>Cross sell 2</li><li>Cross sell 3</li></ul></div>");

<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="photo-box">
                                <div class="image-wrap">
                                    <img src="images/test_img.jpg">
                                    
                                </div>
                                <div class="description">
                                  
                                    Fantastic Architecture #architecture #testing
                                    <div class="date">September 16, 2014</div>
                                </div>
                            </div>
                        </div>*/