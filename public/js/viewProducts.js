$(document).ready(function () {

    console.log("I got inside viewProducts.js");

    var $productContainer = $(".product-container");



    //initial product arrays
    var product = [];
    var newProduct = [];
    var finalProduct = [];

    // Obtaining Product Information from database when page loads
    getProduct();


    // This function resets the products displayed with new produts obtained from the database
    function initializeRows(finalProduct) {

        const prodDiv = $("#prodValues");
        prodDiv.empty();
        var rowsToAdd = [];
        // var prodValue1, prodValue2, prodValue3, prodValue4, prodValue5 = "";

        for (var i = 0; i < finalProduct.length; i++) {
            const product = `<div class="col-3" data-id="${finalProduct[i].id}" style="border: 2px">
                <span>${finalProduct[i].product_name}</span>
                <span>${finalProduct[i].department_name}</span>
                <span>$${finalProduct[i].price}</span>
                <span>${finalProduct[i].stock_quantity}</span>
                <label>Quantity Desired</label>
                //<input data-id="${finalProduct[i].id}" />
            </div>`;

            if (i === 0) {

                console.log("I got inside the if branch kevin");

                $("#id_ans1").val(finalProduct[0].id);
                $("#productName_ans1").val(finalProduct[0].product_name);
                $("#deptName_ans1").val(finalProduct[0].department_name);
                $("#price_ans1").val(finalProduct[0].price);
                $("#stkQty_ans1").val(finalProduct[0].stock_quantity);

            } if (i === 1) {

                $("#id_ans2").val(finalProduct[1].id);
                $("#productName_ans2").val(finalProduct[1].product_name);
                $("#deptName_ans2").val(finalProduct[1].department_name);
                $("#price_ans2").val(finalProduct[1].price);
                $("#stkQty_ans2").val(finalProduct[1].stock_quantity);

            } if (i === 2) {

                $("#id_ans3").val(finalProduct[2].id);
                $("#productName_ans3").val(finalProduct[2].product_name);
                $("#deptName_ans3").val(finalProduct[2].department_name);
                $("#price_ans3").val(finalProduct[2].price);
                $("#stkQty_ans3").val(finalProduct[2].stock_quantity);

            } if (i === 3) {

                $("#id_ans4").val(finalProduct[3].id);
                $("#productName_ans4").val(finalProduct[3].product_name);
                $("#deptName_ans4").val(finalProduct[3].department_name);
                $("#price_ans4").val(finalProduct[3].price);
                $("#stkQty_ans4").val(finalProduct[3].stock_quantity);

            } if (i === 4) {

                console.log("I got inside the if branch kevin");

                $("#id_ans5").val(finalProduct[4].id);
                $("#productName_ans5").val(finalProduct[4].product_name);
                $("#deptName_ans5").val(finalProduct[4].department_name);
                $("#price_ans5").val(finalProduct[4].price);
                $("#stkQty_ans5").val(finalProduct[4].stock_quantity);

            } if (i === 5) {

                $("#id_ans6").val(finalProduct[5].id);
                $("#productName_ans6").val(finalProduct[5].product_name);
                $("#deptName_ans6").val(finalProduct[5].department_name);
                $("#price_ans6").val(finalProduct[5].price);
                $("#stkQty_ans6").val(finalProduct[5].stock_quantity);

            } if (i === 6) {

                $("#id_ans7").val(finalProduct[6].id);
                $("#productName_ans7").val(finalProduct[6].product_name);
                $("#deptName_ans7").val(finalProduct[6].department_name);
                $("#price_ans7").val(finalProduct[6].price);
                $("#stkQty_ans7").val(finalProduct[6].stock_quantity);

            } if (i === 7) {

                $("#id_ans8").val(finalProduct[7].id);
                $("#productName_ans8").val(finalProduct[7].product_name);
                $("#deptName_ans8").val(finalProduct[7].department_name);
                $("#price_ans8").val(finalProduct[7].price);
                $("#stkQty_ans8").val(finalProduct[7].stock_quantity);

            } if (i === 8) {

                $("#id_ans9").val(finalProduct[8].id);
                $("#productName_ans9").val(finalProduct[8].product_name);
                $("#deptName_ans9").val(finalProduct[8].department_name);
                $("#price_ans9").val(finalProduct[8].price);
                $("#stkQty_ans9").val(finalProduct[8].stock_quantity);

            } if (i === 9) {

                $("#id_ans10").val(finalProduct[9].id);
                $("#productName_ans10").val(finalProduct[9].product_name);
                $("#deptName_ans10").val(finalProduct[9].department_name);
                $("#price_ans10").val(finalProduct[9].price);
                $("#stkQty_ans10").val(finalProduct[9].stock_quantity);

            }


















            /*   
               const product = `<div class="col-3" data-id="${finalProduct[i].id}" style="border: 2px">
                   <p>${finalProduct[i].product_name}</p>
                   <p>${finalProduct[i].department_name}</p>
                   <p>$${finalProduct[i].price}</p>
                   <p>${finalProduct[i].stock_quantity}</p>
                   <label>Quantity Desired</label>
                   <input data-id="${finalProduct[i].id}" />
               </div>`
           */
            /////////////////////////////////////////////////////////////////



            //const prodValue1 = "<h3>" + finalProduct[i].id + "</h3>";
            //const prodValue2 = "<h3>" + finalProduct[i].product_name + "</h3>";
            //const prodValue3 = "<h3>" + finalProduct[i].department_name + "</h3>";
            //const prodValue4 = "<h3>" + finalProduct[i].price + "</h3>";
            //const prodValue5 = "<h3>" + finalProduct[i].stock_quantity + "</h3>";

            //These were the last ones used Kevin

            //const prodValue1 = "<span>" + finalProduct[i].id + "</span>";
            //const prodValue2 = "<span>" + finalProduct[i].product_name + "</span>";
            //const prodValue3 = "<span>" + finalProduct[i].department_name + "</span>";
            //const prodValue4 = "<span>" + finalProduct[i].price + "<span>";
            //const prodValue5 = "<span>" + finalProduct[i].stock_quantity + "</span>";


            //End
            // prodDiv.append(prodValue1, prodValue2, prodValue3, prodValue4, prodValue5);
            //prodDiv.append(product);

            //console.log("prodDiv := " + prodDiv);


            //$("#prodValues").append(prodDiv);

            //$productContainer.append(prodDiv);

            //$("#id_ans").val(finalProduct[i].id);
            //$("#productName_ans").val(finalProduct[i].product_name);
            //$("#deptName_ans").val(finalProduct[i].department_name);
            //$("#price_ans").val(finalProduct[i].price);
            //$("#stkQty_ans").val(finalProduct[i].stock_quantity);



            ////////////////////////////////////////////////////////////////




        }


        //$productContainer.prepend(rowsToAdd);

        //$("#id_ans").val(finalProduct[0].id);
        //$("#productName_ans").val(finalProduct[0].product_name);
        //$("#deptName_ans").val(finalProduct[0].department_name);
        //$("#price_ans").val(finalProduct[0].price);
        // $("#stkQty_ans").val(finalProduct[0].stock_quantity);





    }

    // This function grabs products from the database and updates the view
    function getProduct() {
        $.get("/api/products", function (data) {
            product = data;

            //console.log("product := " + product);  //Contains an aray of objects

            newProduct = JSON.stringify(product);

            console.log("newproduct := " + newProduct);

            finalProduct = JSON.parse(newProduct);
            console.log('data', data)

            initializeRows(data);

        });
    }



    /*
        function getSelectedButton(buttonGroup){
    
                    
            var radioValue1 = $( "input[name = quest1]:checked" ).val();
    
            answerarray.push(radioValue1);
    
            var radioValue2 = $("input[name = quest2]:checked").val();
    
            if (typeof radioValue2 === 'undefined') {
                
                radioValue2 = null;
    
                totalWrgAnswrs += 1;
    
            }
    
            answerarray.push(radioValue2);
    
            var radioValue3 = $("input[name = quest3]:checked").val();
    
            if (typeof radioValue3 === 'undefined') {
                
                radioValue3 = null;
    
                totalWrgAnswrs += 1;
    
            }
    
            answerarray.push(radioValue3);
    
            var radioValue4 = $("input[name=quest4]:checked").val();
    
            if (typeof radioValue4 === 'undefined') {
                
                radioValue4 = null;
    
                totalWrgAnswrs += 1;
    
            }
    
            answerarray.push(radioValue4);
    
            var radioValue5 = $("input[name=quest5]:checked").val();
    
            if (typeof radioValue5 === 'undefined') {
                
                radioValue5 = null;
    
                totalWrgAnswrs += 1;
    
            }
    
            answerarray.push(radioValue5);
    
            var radioValue6 = $("input[name=quest6]:checked").val();
    
            if (typeof radioValue6 === 'undefined') {
                
                radioValue6 = null;
    
                totalWrgAnswrs += 1;
    
            }
    
            answerarray.push(radioValue6);
        
            //console.log("Array Values are: " + answerarray);
    
            return answerarray;
    
    }
    
        //Main Section
        
        //$("#Donebtn").on("click", getSelAnswrs);
    
    */

});
