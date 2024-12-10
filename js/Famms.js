// navbar
$('.navList li a').click(function(){
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






// targetting section
// $('.navList li a').click(function(e){
    

// })
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
