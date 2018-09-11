// Progress bars & sum
$(document).ready(function(){
    var arr = [];
    var sum = 0;
    $('table td:last-child').each(function() {
        arr.push(+ $(this).text());
    });
    $('table td:first-child').each(function(e) {
        $(this).find('.progress').css('width', ($(this).find('p').width()/(Math.max.apply(null, arr)))*(+$(this).siblings('td').text()));
        if($(this).find('.progress').width() < ($(this).width()) / 2){
            $(this).find('.progress').css('background-color', '#ace2f8');
        } else $(this).find('.progress').css('background-color', '#b1e19b');
    });

    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    $('.total span:last-child').text(sum);
});

// Add comment
$(document).ready(function(){
    // Date
    var date = new Date();
    var month = new Array(12);
    var dateFull = '';
    month[0]=" января ";
    month[1]=" февраля ";
    month[2]=" марта ";
    month[3]=" апреля ";
    month[4]=" мая ";
    month[5]=" июня ";
    month[6]=" июля ";
    month[7]=" августа ";
    month[8]=" сентября ";
    month[9]=" октября ";
    month[10]=" ноября ";
    month[11]=" декабря ";
    dateFull = date.getDate() + month[date.getMonth()] + date.getFullYear();

    // Adding comment (button click)
    $('.input__block button').on('click', function (e){
        e.preventDefault();
        if($('.input__block textarea').val() != ''){
            $('.comments__block').append('<div class="comment-item"><div><span class="name">Name</span><span class="date"></span></div><p></p></div>');
            $('.comment-item p').last().text($('.input__block textarea').val());
            $('.comment-item .date').last().text(dateFull);
            $('.input__block textarea').val('');
        }
    })

    // Adding comment (ctrl+enter)
    $('html').keydown(function (e) {
        if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10)) {
            $('.input__block button').click();
        }
    });
});