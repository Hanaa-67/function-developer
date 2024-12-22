// navbar
$('.navList li a .nav-link').click(function(){
    $('.activ').removeClass('activ')
    $(this).addClass('activ');
    $('.dropdown-menu').removeClass('appear')
})

$('.navList li a').hover(function(){
    $('.activ').removeClass('activ')
    $(this).addClass('activ');
})

$('.pages').on('click',function(){
    $('.dropdown-menu').toggleClass('appear')
})


// collapse bar
$('.side-bar').click(function(){
    $('.navList').toggleClass('active')
})




// testimonial slider

function nextTestimonial(){
    let activeSlide = $('.testi-slider.active')
    if(activeSlide.next().length>0){
        activeSlide.removeClass('active')
        activeSlide.next().addClass('active')
    }else{
        activeSlide.removeClass('active')
        $('.testi-slider').first().addClass('active')
    }
}
function prevTestimonial(){
    let activeSlide = $('.testi-slider.active')
    if(activeSlide.prev().length>0){
        activeSlide.removeClass('active')
        activeSlide.prev().addClass('active')
    }else{
        activeSlide.removeClass('active')
        $('.testi-slider').last().addClass('active')
    }
}

$('.arrow-right').on('click',function(){
    nextTestimonial()
})
$('.arrow-left').on('click',function(){
    prevTestimonial()
})
// setInterval(()=>{
//     nextTestimonial()
// },2000)




// ajax request
$.ajax({
    url:"https://dummyjson.com/products",
    type: "Get",

    dataType:"Json",
    success: function(response){
        for(let i = 0 ; i< response.products.length ;i++){
            $('#product-images').append(`
                <div id="partition">
                    <img src="${response.products[i].images[0]}" alt="Product Image">
                    <div class="description">
                        <h5>${response.products[i].title}</h5>
                        <p>Price: $${response.products[i].price}</p>
                    </div>
                    <div class="over-product">
                        <button class="first">Add To Card</button>
                        <button class="second">Buy Now</button>
                    </div>
                </div>
            `);
       } 
    },
    error: function(xhr, status, error){
        console.log("Error:"+ error);
    }
})
