
    function result() {
        var score = 0;
        if (document.getElementbyId('right1').checked) {
            score++;
        }

        if (document.getElementbyId('right2').checked) {
        score++;
        }

        if (document.getElementbyId('right3').checked) {
        score++;
        }
    
        if (score == 3) {
            document.write("Your score is:" + score + "Excellent 3/3");
        }   
        if (score == 2) {
            document.write("Your score is:" + score + "Excellent 2/3");
        }   
        if (score == 1) {
            document.write("Your score is:" + score + " Try better next time! 1/3");
        }
        if (score == 0) {
            document.write("Your score is:" + score + " Needs more learning 0/3");
        }          
    }       