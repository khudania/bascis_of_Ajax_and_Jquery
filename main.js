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
    $("#first").click(() => console.log("Div is clicked"))
});