$(document).ready(function () {

    console.log("I am connected Kevin");

    //$("#resultsTable").hide();

    var userQuestion = "";
    var userAnswer = "";
    let answerarray = [];

         
    function getSelectedButton(buttonGroup) {

                    console.log("I got to the start of getSelectedbutton");

                    var radioValue1 = $( "input[name = quest1]:checked" ).val();

                    console.log("Value of radioValue1 is: " + radioValue1);

                    if (typeof radioValue1 === 'undefined') {
                        
                        radioValue1 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue1);

                    var radioValue2 = $("input[name = quest2]:checked").val();

                    if (typeof radioValue2 === 'undefined') {
                        
                        radioValue2 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue2);

                    var radioValue3 = $("input[name = quest3]:checked").val();

                    if (typeof radioValue3 === 'undefined') {
                        
                        radioValue3 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue3);

                    var radioValue4 = $("input[name=quest4]:checked").val();

                    if (typeof radioValue4 === 'undefined') {
                        
                        radioValue4 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue4);

                    var radioValue5 = $("input[name=quest5]:checked").val();

                    if (typeof radioValue5 === 'undefined') {
                        
                        radioValue5 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue5);

                    var radioValue6 = $("input[name=quest6]:checked").val();

                    if (typeof radioValue6 === 'undefined') {
                        
                        radioValue6 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue6);

                    var radioValue7 = $("input[name=quest7]:checked").val();

                    if (typeof radioValue7 === 'undefined') {
                        
                        radioValue7 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue7);

                    var radioValue8 = $("input[name=quest8]:checked").val();

                    if (typeof radioValue8 === 'undefined') {
                        
                        radioValue8 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue8);

                    var radioValue9 = $("input[name=quest9]:checked").val();

                    if (typeof radioValue9 === 'undefined') {
                        
                        radioValue9 = null;

                        //totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue9);

                    var radioValue10 = $("input[name=quest10]:checked").val();

                    if (typeof radioValue10 === 'undefined') {
                        
                        radioValue10 = null;

                    }
                   
                    answerarray.push(radioValue10);

                    console.log("Array Values are: " + answerarray);

                    return answerarray;

            }
            
            
            function getSelAnswrs() {

                console.log("I got to the start of getSelAnswrs");

                var quesAnswers = getSelectedButton();              //contains all of the Users Answers to the questions
                
                console.log("I returned from answerarray");
                console.log("quesAnswers:= " + quesAnswers);
                
            }

    

    
    //Main Section
     
    console.log("I got to the start of the Main Section");

    $("#submitButton").on("click", getSelAnswrs);

      
    
})    // end of Document Ready