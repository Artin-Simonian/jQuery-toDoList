

$('body').css({
    backgroundColor: '#AFFFFD'
})


$('#to-do-list').css({
    backgroundColor: '#00FFF9',
    width: '700px',
    height: '80vh',
    textAlign: 'center',
    margin: ' 2rem auto',
    borderRadius: '20px',
    border: 'solid 2px #000'
})

$('#to-do-list > h1').css({
    fontSize: '5rem',
    color: '#fff',
    textShadow: '#000 2px 2px'
})

$('#to-do-list > input').css({
    fontSize: '3rem',
    border: 'solid 2px #000',
})

$('#to-do-list > button').css({
    margin: '1rem 0',
    padding: '0.5rem 2rem',
    fontSize: '2rem',
    backgroundColor: '#AFFFFD',
    border: 'solid 2px #000'
})

$('#to-do-list > button').on('click', function(){
    let inputText = $('input').val();
    if(inputText === '') return false;
    $('#result').append("<li>" + inputText + "</li>");
    $('input').val('')
});

$('result').css({
    width: '400px'
})