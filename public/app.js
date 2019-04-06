$(document).ready(function(){
    var imgsrc;
    var resultdiv=$('#result-div')
    var resultTable=$('#result-table')
    var btn=$('#Submit')
    
    document.getElementById('inp').onchange=function(){
        readURL(this)
    }
    btn.click(function(){
        console.log("Inside")
        var s="C:\Users\Lenovo\Downloads\dlDataUrl.png"
        s=JSON.stringify(s)
        $.ajax({
            url:`getText?src=${s}`,
            success:function(data){
                console.log(data)
            }
        });
    })
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                imgsrc=e.target.result
                download(imgsrc, "dlDataUrl.png", "image/gif");
                console.log(imgsrc);
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
