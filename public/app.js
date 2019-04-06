$(document).ready(function(){
    document.getElementById('inp').onchange=function(){
        readURL(this)
    }
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#ImgUploaded')
                    .attr('src', e.target.result)
                    .attr('style','visibility:visible')
                    .width(100)
                    .height(150)
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
})
