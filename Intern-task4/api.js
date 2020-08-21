$(document).ready(function (){
    $('button').click(function (){
        const name = $('#name').val();
                alert(name);
    

    $('.random-img').attr('src',`https://joeschmoe.io/api/v1/${name}`);
    //for debugging
    const image =$('.random-img');
    console.log(image);
});
});