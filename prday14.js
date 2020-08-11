var passwordTrue = 'Iloveu1234'
var passwordFalse = 'ILOVEU'
function detectPassword(val){
    var cutPass=val.split('');
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var number, upperBool=0, lowerBool=0, numberBool;
    
    for(let i = 0 ; i < cutPass.length ; i ++ ){
        for(let j = 0 ; j < upperCase.length ; j++){
            if(cutPass[i]==upperCase[j]){
                upperBool++;
            }else{
            }
        }
        for(let k = 0; k < lowerCase.length ; k++){
            if(cutPass[i]==lowerCase[k]){
                lowerBool++;
            }else{
            }
        }
        if(cutPass[i]%1==0){
            numberBool = true;
        }else{
            numberBool = false;
        }
    }
    
    if(upperBool>0&&lowerBool>0&&numberBool){
        console.log('Password Oke')
    }else{
        console.log('Password Salah')
    }

    // console.log(upperBool)
    // console.log(lowerBool)
    // console.log(numberBool)
}
detectPassword(passwordFalse);
detectPassword(passwordTrue);