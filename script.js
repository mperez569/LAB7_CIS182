"use strict"
$(document).ready(() => {
    const slider = $("#image_list");
    $("#right_button").click(() =>{
        let LeftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        if(LeftProperty - 300 > -900)
        {
            newLeftProperty = LeftProperty-300;
        }
        slider.animate({left: newLeftProperty}, 1000);
    }); 

    $("#left_button").click(() =>{
        let LeftProperty = parseInt(slider.css("left"));
        let newLeftProperty = -600;
        if(LeftProperty < -300)
        {
            newLeftProperty = LeftProperty+300;
        }
        slider.animate({left: newLeftProperty}, 1000);
    });

    $("#image_list a").click(evt=>{
        const imageURL = $(evt.currentTarget).attr("href");
        $("#image").animate({opacity:0, marginLeft: "-+205"}, 1000,
        ()=>{
            $("#image").attr("src", imageURL);
            $("#image").animate({opacity:1, marginLeft: "-+205"}, 1000);
        });
        evt.preventDefault(); 
    });
});
