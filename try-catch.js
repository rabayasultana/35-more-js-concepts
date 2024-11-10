function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    
    try{
        const age = parseInt(ageText);
        
        if(isNaN(age)){
            // console.log('age not found', age, ageText);
            throw "Please Enter a number";
        }
        else if(age < 18){
            throw "Childs not allowed";
        }
        else if(age > 30){
            throw "Adults are not allowed";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All done inside try catch');
    }

    console.log(1111);
}