(function(){
    
    function shuffleArray(){
        var temp = [];
        var allColors = ['yellow','pink','green','red','sblue','blue','pgreen','maroon'];
        var duplicate = [];
        var dupString = "";
        
        /* removing classes of cards */
        
        for(var m=0; m<=allColors.length; m++) {
            $('.card_container').find('span.card').removeClass(allColors[m]+'_card');
        }
        
        /* shuffling array items and adding classes to the elements */
        
       for(var i=allColors.length-1; i>0 ; i--) {
            var j = Math.floor(Math.random()* (i+1));
            temp = allColors[i];
            allColors[i] = allColors[j];
            allColors[j] = temp;   
        }
        dupString = allColors.join(",");
        var duplicate = allColors.concat(dupString.split(","));
        console.log(duplicate);
        for( var n=0; n<=duplicate.length; n++){
            $('.gameboard').find('span.card').eq(n).addClass(duplicate[n] +'_card');
        }
        $('.restart').blur();
    }
    
    var colCount = 1;
    var rowCount = 1;
    var selected = 0;
    var selectedText = [];
    var score = 0;
    var disabledCount = 0;
    $('#row1.card_container .card').eq(0).addClass('cfocus');
    $(document).on('keydown', function(e){
            var event = window.event ? window.event : e;
            var _this = $('.card.cfocus');
            
            if(!$(_this).hasClass('disabled') && !$(_this).hasClass('active')) {
                if(event.keyCode === 13 && selected != 2){
                    $(_this).addClass('active');
                    selected +=1;
                    var txt = $(_this).text();
                    selectedText.push(txt);
                    if(selectedText.length == 2 && selectedText[0] == selectedText[1]){
                        score += 1;
                        $('.card.active').addClass('disabled');
                        $('.card').removeClass('active');
                        disabledCount += 1;
                        selectedText = [];
                        selected = 0;
                        $('#score').text(score);
                        console.log(disabledCount);
                        if(disabledCount === 8){
                            $('.popup').show();
                            $('.overlay').show();
                        }
                    } else if(selectedText.length == 2) {
                        score = score >= 1 ? score-1 : 0;
                        console.log(score);
                        $('.card').removeClass('active');
                        selectedText = [];
                        selected = 0;
                        $('#score').text(score);
                    }
                }
            }
            if(event.keyCode === 38 && rowCount !=1){
                rowCount -= 1;
                $('.card').removeClass('cfocus');
                $('#row'+rowCount).find('.card').eq(colCount-1).addClass('cfocus');
            } else if(event.keyCode === 40 && rowCount !=4){
                rowCount += 1;
                $('.card').removeClass('cfocus');
                $('#row'+rowCount).find('.card').eq(colCount-1).addClass('cfocus');
            } else if(event.keyCode === 37 && colCount != 1){
                colCount -= 1;
                $('.card').removeClass('cfocus');
                $('#row'+rowCount).find('.card').eq(colCount-1).addClass('cfocus');
            } else if(event.keyCode === 39 && colCount != 4){
                colCount += 1;
                $('.card').removeClass('cfocus');
                $('#row'+rowCount).find('.card').eq(colCount-1).addClass('cfocus'); 
            }
        });
    
    function resetgame(){ 
        var con = confirm("Do you want to reset the Game?");
        if (con) {
            shuffleArray();
            colCount = 1;
            rowCount = 1;
            selected = 0;
            selectedText = [];
            score = 0;
            $('.card').removeClass('cfocus');
            $('.card').removeClass('active');
            $('.card').removeClass('disabled');
            $('#row1.card_container .card').eq(0).addClass('cfocus');
        } 
    }
    
     $(document).on('click','.restart', function(e){
        resetgame();
     });
    
})();
