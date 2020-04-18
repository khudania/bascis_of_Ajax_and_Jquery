"use strict";




$(document).ready(() => {

    // Selecting Particular Element
    // $("div").click(() => console.log("Div is clicked"))

    // Selecting all elements on Page
    // $("*").click(() => console.log("All Elements Selected"))

    // this keyword Selector(with arrow function hide is not working)
    // $("div").click(function () {
    //     $("div").click(function () {
    //         console.log("Div is clicked");
    //         console.log($(this));
    //         $(this).hide();
    //     });
    // });

    // ID Selector
    // $("#first").click(() => console.log("ID is clicked"))

    // CLASS Selector
    // $(".first").click(() => console.log("Class is clicked"))

    // Multiple Item Selector
    // $(".classFirst, #first").click(() => console.log("Anything clicked"))

    // Select first element
    // $(".classFirst:first").click(() => console.log("First Item clicked"))

    // Odd/even Element Selector
    // $(".classFirst:odd").click(() => console.log("odd Item clicked"))
    // $(".classFirst:even").click(() => console.log("even Item clicked"))

    // $("tr:odd").css("background-color", "red")

    // Selecting Element and Class
    $("p.classFirst").click(() => console.log("Class is clicked"))


    //Children
    $("div > Span").css("color", "red");

    //Attributes
    $("div[target='_blank']").click(
        function () {
            console.log("Target is blank")
        }
    );


});