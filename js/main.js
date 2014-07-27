$(document).ready(function() {
<<<<<<< HEAD
                  var textArea='<textarea name="otherSuggestions" rows="10" col="53"> What can we do to improve this feature?</textarea>';
       // $("input[type='radio']").closest('li').append(textArea);
        
        $("input[type='radio']").click(function() {
                //$("input[value='1']").closest('li').append(textArea);
                //

                if(this.value === "2" || this.value ==="1"){
//                    $('.suggestionsImprove').show();
                    $(this).closest('li').children('.suggestionsImprove').show();
                }
                else{
//                $(this).closest('li').(textArea);
                $('.suggestionsImprove').hide();
                }
        }
        );
      // $('textarea').autoResize(); 
        });
=======
       //addClass jQuery was added later to accomadate "submit" button 
       //if functionality was needed
       $('form').addClass("lounge-survey");
        //If radio button is clicked on either "poor" or "average" options
        //then a text box appears asking the customer to evaluate        
        
        $("input[type='radio']").click(function() {

                if(this.value === "2" || this.value ==="1"){
                        //if "poor" or "average" is chosen
                    $(this).closest('li').children('.suggestionsImprove').show("slow");
                }
                else{
                        //if the customer selects "poor" or "average" changes his/her min
                        //and then selects another option the text box 
                        //goes back to hiding.  However the input is still
                        //safe
                $(this).closest('li').children('.suggestionsImprove').hide("slow");
                }

        }
        );
        //When the customer clicks the clear button all the radio buttons
        //unchecked and text areas become empty
      $("#clear").click(function() {
              $("input[type='radio']").attr('checked',false);
              $('.suggestionsImprove').hide("slow");
              $('textarea').val('');

      });
      //submit button placeholder
      $('#submit').click(function() {
              $(".lounge-survey").submit()
      }
        );
});
>>>>>>> gh-pages

