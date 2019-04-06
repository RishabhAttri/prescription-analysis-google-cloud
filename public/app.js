$(document).ready(function(){
    var imgsrc;
    var resultdiv=$('#result-div')
    var resultTable=$('#result-table')
    var btn=$('#Submit')
    )
    document.getElementById('inp').onchange=function(){
        readURL(this)
    }
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                imgsrc=e.target.result
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
