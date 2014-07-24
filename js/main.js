$(document).ready(function() {
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

