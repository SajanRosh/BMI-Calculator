calculate = () =>{
    let height = Number(document.getElementById('heightInput').value);
    let weight = Number(document.getElementById('weightInput').value);
    let bmi = document.getElementById('bmiResult');
    let bmiRange = document.getElementById('result');
    let heightKey = document.getElementById('height-key').innerText;
    let weightKey = document.getElementById('weight-key').innerText;

    if(heightKey == 'cm'){
        height = height / 100;
    }else if(heightKey == 'in'){
        height = height / 39.3700787402;
    }else if(heightKey == 'ft'){
        height = height * 0.3048;
    }

    if(weightKey == 'lb'){
        weight = weight / 0.45359237;
    }else if(weightKey == 'st'){
        weight = weight * 6.35029;
    }

    let calcualtedBMI = (weight / (height * height)).toFixed(1);
    if(calcualtedBMI == 0.0){
        calcualtedBMI = 0;
    }
    if(calcualtedBMI != 'NaN'){
        bmi.innerText = calcualtedBMI;
    }

    let status = '';
    if(calcualtedBMI < 18.5){
        status = 'UnderWeight'
    }else if(calcualtedBMI >= 18.5 && calcualtedBMI <= 24.9){
        status= 'Normal Weight'
    }else if ( calcualtedBMI >= 25 && calcualtedBMI <= 29.9){
        status = 'OverWeight';
    }else if(calcualtedBMI >= 30 && calcualtedBMI < 35){
        status = 'Obesity';
    }else if(calcualtedBMI >= 35){
        status = 'Severe Obesity';
    }

    console.log(status);
    
    if(status != ''){
        bmiRange.innerText = status;
    }else{
        bmiRange.innerText = 'Please provide values for height and weight';
    }
}

heightChanged = () =>{
    document.getElementById('height-change').style.display = 'block';
    document.getElementById('weight-change').style.display = 'none';
    document.getElementById('result').innerText = '';
}
weightChanged = () =>{
    document.getElementById('weight-change').style.display = 'block';
    document.getElementById('height-change').style.display = 'none';
    document.getElementById('result').innerText = '';
}
weight = (e) => {
    document.getElementById('weight-key').innerText = e;
    document.getElementById('weight-change').style.display='none';
}
height = (e) => {
    document.getElementById('height-key').innerText = e;
    document.getElementById('height-change').style.display='none';
}