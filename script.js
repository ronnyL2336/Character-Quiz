$(".submit").click(function() {
    var userAge = $(".age").val();  
	var userPrices = $(".prices").val();
	var brandA = $(".option").val();
    $(".q1, .q2, .q3, .submit").hide();
    $(".results").text("The information you entered shows that you are " + userAge + " years old, you like " + brandA + " brands with " + userPrices + "-range prices.");
    
    if (userPrices === "middle" && brandA === "retro"){
        $(".results").append(" You are best fit with a brand like Palace Skateboards, a London based skater brand that brings a vintage look back to life.");
          }
    else if (userPrices === "middle" && brandA === "sportswear"){
        $(".results").append(" You best fit a brand like Nike, a titan in sportswear known for its iconic swoosh logo and popular shoe models.");
          }
    else if (userPrices === "high" && brandA === "retro"){
        $(".results").append(" You best fit a brand like Dior, a french brand with a post-war retro look that brings high quality and beauty together.");
          }
    else if (userPrices === "high" && brandA === "sportswear"){
        $(".results").append(" You best fit a brand like Y-3, an Adidas owned brand that brings the brand a more exotic, gothic and luxurious look to it.");
          }

});





