var number1=0;
var number2=0;
var functionCalc="";
var result='';

$('.toggle-ball').click(function(){
    $('.toggle-ball').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass().addClass($(this).attr('targ'));
})

$('.number').click(function(){
    let number=$(this).attr('target');

    $("#calcInput").val( function(index,value){
        if(number===','){
           if(value.indexOf(number)>0)
           return value;
        }
        return value+number
    });
});


$("#delete").click(function(){
    $("#calcInput").val(
        function(index, value){
            return value.substr(0, value.length - 1);
    })
})
$("#reset").click(function(){
    $("#calcInput").val('');
    reset();

});


$('.calcs').click(function(){
    functionCalc=$(this).attr('target');
    let input=$("#calcInput");

    if(input.val().length!=0){
        if(result.length == 0){
            result=input.val().replace(',','.')
            number1=parseFloat(result);
        }else{
            number1=parseFloat(input.val().replace(',','.'));
            calc();
        }
        input.val('');

    }
});

$("#equals").click(function(){
    let input=$("#calcInput");

    number1=parseFloat(input.val().replace(',','.'));
    calc();
    reset();
});

function calc(){
    let input=$("#calcInput");
    let resultFloat=parseFloat(result.replace(',','.'));

    switch(functionCalc){
        case '+':
            console.log(number1+ ' + '+ resultFloat)

            resultFloat = number1 + resultFloat

            break;
        case '-':
            console.log(number1+ ' - '+ resultFloat)

            resultFloat = number1 - resultFloat;

            break;
        case '/':
            console.log(number1+ ' / '+ resultFloat)

            resultFloat= number1 / resultFloat;
            break;
        case 'x':
            console.log(number1+ ' * '+ resultFloat)

            resultFloat = number1 * resultFloat;
            break;
        default:
            result="";
            break;
    }

    result=resultFloat.toString().replace('.',',');
    
    input.val(result);
}

function reset(){
    number1=0;
    number2=0;
    functionCalc='';
    result='';
}