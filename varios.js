/* 
!Figuras Geométricas
*/

//Cuadrado

function calcularAreaCuadrado(){
    const squareInput = document.getElementById("squareInput");
    const squareValue = squareInput.value;
    let result = 0;

    if (squareValue < 1 ){
        const resultP = document.getElementById("squareResult");
        resultP.innerText = "Coloca un valor mayor a 0";

        return;
    }

    result = squareValue**2
    
    const resultP = document.getElementById("squareResult");
    resultP.innerText = "El resultado es:  " + result + " cm^2"; 
}

function calcularPerimetroCuadrado(){
    const squareInput = document.getElementById("squareInput");
    const squareValue = squareInput.value;
    let result = 0;

    if (squareValue < 1 ){
        const resultP = document.getElementById("squareResult");
        resultP.innerText = "Coloca un valor mayor a 0";

        return;
    }

    result = squareValue * 4;

    const resultP = document.getElementById("squareResult");
    resultP.innerText = "El resultado es:  " + result + " cm";
}


//Triángulo

function calcularPerimetroTriangulo(){
    const triangleinput = document.getElementById("triangleSiteInput");
    const triangleValue = triangleinput.value;
    let result = 0;

    if (triangleValue < 1 ){
        const resultP = document.getElementById("triangleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para los lados";

        return;
    }

    result = triangleValue * 3;

    const resultP = document.getElementById("triangleResult");
    resultP.innerText = "El resultado es:  " + result + " cm";
}

function calcularAreaTriangulo(){
    const triangleSideInput = document.getElementById("triangleSiteInput");
    const triangleSideValue = triangleSideInput.value;
    const triangleHeightInput = document.getElementById("triangleHeightInput");
    const triangleHeightValue = triangleHeightInput.value;
    let result = 0;
    
    if (triangleSideValue < 1 ){
        const resultP = document.getElementById("triangleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para los lados";

        return;
    }
    if (triangleHeightValue < 1){
        const resultP = document.getElementById("triangleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para la altura";

        return;
    }


    result = (triangleSideValue * triangleHeightValue) / 2;

    const resultP = document.getElementById("triangleResult");
    resultP.innerText = "El resultado es:  " + result + " cm^2";
}


//Círculo

function calcularDiametroCirculo(){
    const circleInput = document.getElementById("circleInput");
    const circleValue = circleInput.value;
    let result = 0;

    if (circleValue < 1){
        const resultP = document.getElementById("circleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para el radio";

        return;
    }

    result = circleValue * 2;

    const resultP = document.getElementById("circleResult");
    resultP.innerText = "El resultado es:  " + result + " cm";
}

function calcularAreaCirculo(){
    const circleInput = document.getElementById("circleInput");
    const circleValue = circleInput.value;
    let result = 0;
    
    if (circleValue < 1){
        const resultP = document.getElementById("circleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para el radio";

        return;
    }

    result = (Math.PI * circleValue**2).toFixed(2);

    const resultP = document.getElementById("circleResult");
    resultP.innerText = "El resultado es:  " + result + " cm^2";
}

function calcularPerimetroCirculo(){
    const circleInput = document.getElementById("circleInput");
    const circleValue = circleInput.value;
    let result = 0;
    
    if (circleValue < 1){
        const resultP = document.getElementById("circleResult");
        resultP.innerText = "Coloca un valor mayor a 0 para el radio";

        return;
    }

    result = (Math.PI * circleValue * 2).toFixed(2);

    const resultP = document.getElementById("circleResult");
    resultP.innerText = "El resultado es:  " + result + " cm";
}


/* 
!Precios y Descuentos
*/

function calcularPrecioDescuento(){
    const priceInput = document.getElementById("priceInput");
    const priceValue = priceInput.value;
    const discountInput = document.getElementById("discountInput");
    const discountValue = discountInput.value;
    let result = 0;

    if( priceValue < 1 ){
        const resultP = document.getElementById("priceResult");
        resultP.innerText = "El precio no puede ser menor a 1";
        return;
    }

    if( discountValue < 1 || discountValue > 99){
        const resultP = document.getElementById("priceResult");
        resultP.innerText = "El descuento no puede ser menor a 1 o mayor a 99";
        return;
    }

    result = priceValue - ((discountValue / 100) * priceValue);

    const resultP = document.getElementById("priceResult");
    resultP.innerText = "El precio será:  " + result + " $";
}


/* 
!Promedio Aritmético
*/

function calcularMedia(){
    const numInput1 = document.getElementById("num1Input");
    const numValue1 = parseInt(numInput1.value);
    const numInput2 = document.getElementById("num2Input");
    const numValue2 = parseInt(numInput2.value);
    const numInput3 = document.getElementById("num3Input");
    const numValue3 = parseInt(numInput3.value);
    const numInput4 = document.getElementById("num4Input");
    const numValue4 = parseInt(numInput4.value);
    const numInput5 = document.getElementById("num5Input");
    const numValue5 = parseInt(numInput5.value);
    let numValue = [numValue1,numValue2,numValue3,numValue4,numValue5];

/*     let result3 = numValue.filter(
        valor => valor < 1
    );
    if (result3.length > 0) {
        const resultP = document.getElementById("averageResult").innerText = "No puedes colocar números menores a 1"
        return;
    } */
    
    for(let i = 0; i < numValue.length; i++){
        if (numValue[i] < 1 || isNaN(numValue[i])){
            const resultP = document.getElementById("averageResult");
            resultP.innerText = "El valor de la posición " + (i+1) + ", no puede ser menor a 1";
            
            return;
        }
    }

    const result1 = numValue.reduce((acum,valor) =>
        acum + valor, 0
    );

    const result2 = result1 / numValue.length;

    const resultP = document.getElementById("averageResult").innerText = "La media es: " + result2;
}


function calcularMediaGeometrica(){
    const numInput1 = document.getElementById("num1Input");
    const numValue1 = parseInt(numInput1.value);
    const numInput2 = document.getElementById("num2Input");
    const numValue2 = parseInt(numInput2.value);
    const numInput3 = document.getElementById("num3Input");
    const numValue3 = parseInt(numInput3.value);
    const numInput4 = document.getElementById("num4Input");
    const numValue4 = parseInt(numInput4.value);
    const numInput5 = document.getElementById("num5Input");
    const numValue5 = parseInt(numInput5.value);
    let numValue = [numValue1,numValue2,numValue3,numValue4,numValue5];

    for(let i = 0; i < numValue.length; i++){
        if (numValue[i] < 1 || isNaN(numValue[i])){
            const resultP = document.getElementById("averageResult");
            resultP.innerText = "El valor de la posición " + (i+1) + ", no puede ser menor a 1";
            
            return;
        }
    }

    const result = numValue.reduce((acum,valor) =>
        acum * valor, 1
    );

    const total = (Math.pow(result, 1/numValue.length)).toFixed(2);
    
    const resultP = document.getElementById("averageResult").innerText = "La media Geométrica es: " + total;

}

function calcularMediana(){
    const numInput1 = document.getElementById("num1Input");
    const numValue1 = parseInt(numInput1.value);
    const numInput2 = document.getElementById("num2Input");
    const numValue2 = parseInt(numInput2.value);
    const numInput3 = document.getElementById("num3Input");
    const numValue3 = parseInt(numInput3.value);
    const numInput4 = document.getElementById("num4Input");
    const numValue4 = parseInt(numInput4.value);
    const numInput5 = document.getElementById("num5Input");
    const numValue5 = parseInt(numInput5.value);
    let numValue = [numValue1,numValue2,numValue3,numValue4,numValue5];

    for(let i = 0; i < numValue.length; i++){
        if (numValue[i] < 1 || isNaN(numValue[i])){
            const resultP = document.getElementById("averageResult");
            resultP.innerText = "El valor de la posición " + (i+1) + ", no puede ser menor a 1";
            
            return;
        }
    }

    const ordenado = numValue.sort(
        (num1,num2) => num1 - num2
    );

    const indice = Math.floor(numValue.length/2);

    const ResultP = document.getElementById("averageResult").innerText = "La mediana es: " + ordenado[indice];

}

function calcularModa(){
    const numInput1 = document.getElementById("num1Input");
    const numValue1 = parseInt(numInput1.value);
    const numInput2 = document.getElementById("num2Input");
    const numValue2 = parseInt(numInput2.value);
    const numInput3 = document.getElementById("num3Input");
    const numValue3 = parseInt(numInput3.value);
    const numInput4 = document.getElementById("num4Input");
    const numValue4 = parseInt(numInput4.value);
    const numInput5 = document.getElementById("num5Input");
    const numValue5 = parseInt(numInput5.value);
    let numValue = [numValue1,numValue2,numValue3,numValue4,numValue5];

    for(let i = 0; i < numValue.length; i++){
        if (numValue[i] < 1 || isNaN(numValue[i])){
            const resultP = document.getElementById("averageResult");
            resultP.innerText = "El valor de la posición " + (i+1) + ", no puede ser menor a 1";
            
            return;
        }
    }

    const ordenado = numValue.sort(
        (num1,num2) => num1 - num2
    );
    

    let count = [{
        num: "",
        rep: 0, 
        },
    ];
    let auxObject = 0;

    for(let i = 0; i < numValue.length; i++){
    
        if( numValue[i] != numValue[i-1] ){
        
            for(let y = i + 1; y < numValue.length; y++){
                
                if (numValue[i] === numValue[y]){                
                    count[auxObject].num = numValue[i];
                    count[auxObject].rep = parseInt(count[auxObject].rep) + 1;
                }
                
            }

            count[auxObject].rep = parseInt(count[auxObject].rep) + 1;
            count.push({
                num: "",
                rep: 0,
            },);
            auxObject++;            
        }

    }

    if(count.length > 5){
        const ResultP = document.getElementById("averageResult").innerText = "Necesitas tener números repetidos para calcular la moda";

        return;
    }
    
    for(let i = 0; i < count.length; i++){
        if (count[i].num == ""){  
            count.splice(i,1);
        }
    }

    if(count.length > 1){
        if( count[0].rep > count[1].rep ){
            const ResultP = document.getElementById("averageResult").innerText = "la moda es: " + count[0].num;
        } else if ( count[0].rep < count[1].rep ){
            const ResultP = document.getElementById("averageResult").innerText = "la moda es: " + count[1].num;
        } else{
            const ResultP = document.getElementById("averageResult").innerText = "la moda es: " + count[0].num + " y " + count[1].num;
        }

        if ( count.length > 4 ){
            const ResultP = document.getElementById("averageResult").innerText = "La moda no es un buen método para calcular ese grupo de números";
        }
    }  else{
        const ResultP = document.getElementById("averageResult").innerText = "la moda es: " + count[0].num;
    }
    
}