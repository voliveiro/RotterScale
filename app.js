function calculateResult(){
    console.log ("app.js is connected")

    score = 0
    // let parentNode = document.querySelectorAll('#\\31')
    
    if (document.getElementById('q1').checked) {
        console.log ("q1")
        score ++
    }

    if (document.getElementById('q2').checked) {
        console.log ("q2")
        score ++
    }

    if (document.getElementById('q3').checked) {
        console.log ("q3")
        score ++
    }

    if (document.getElementById('q4').checked) {
        console.log ("q4")
        score ++
    }
    if (document.getElementById('q5').checked) {
        console.log ("q5")
        score ++
    }
    if (document.getElementById('q6').checked) {
        console.log ("q6")
        score ++
    }
    if (document.getElementById('q7').checked) {
        console.log ("q7")
        score ++
    }
    if (document.getElementById('q8').checked) {
        console.log ("q8")
        score ++
    }
    if (document.getElementById('q9').checked) {
        console.log ("q9")
        score ++
    }
    if (document.getElementById('q10').checked) {
        console.log ("q10")
        score ++
    }
    if (document.getElementById('q11').checked) {
        console.log ("q11")
        score ++
    }
    if (document.getElementById('q12').checked) {
        console.log ("q12")
        score ++
    }
    if (document.getElementById('q13').checked) {
        console.log ("q13")
        score ++
    }
    if (document.getElementById('q14').checked) {
        console.log ("q14")
        score ++
    }
    if (document.getElementById('q15').checked) {
        console.log ("q15")
        score ++
    }
    if (document.getElementById('q16').checked) {
        console.log ("q16")
        score ++
    }
    if (document.getElementById('q17').checked) {
        console.log ("q17")
        score ++
    }
    if (document.getElementById('q18').checked) {
        console.log ("q18")
        score ++
    }
    if (document.getElementById('q19').checked) {
        console.log ("q19")
        score ++
    }
    if (document.getElementById('q20').checked) {
        console.log ("q20")
        score ++
    }

    if (document.getElementById('q21').checked) {
        console.log ("q21")
        score ++
    }


    if (document.getElementById('q22').checked) {
        console.log ("q22")
        score ++
    }


    if (document.getElementById('q23').checked) {
        console.log ("q23")
        score ++
    }

 

    if (document.getElementById('q24').checked) {
        console.log ("q24")
        score ++
    }

    if (document.getElementById('q25').checked) {
        console.log ("q25")
        score ++
    }
    if (document.getElementById('q26').checked) {
        console.log ("q26")
        score ++
    }


    if (document.getElementById('q27').checked) {
        console.log ("q27")
        score ++
    }


    if (document.getElementById('q29').checked) {
        console.log ("q29")
        score ++
    }


    console.log (score)

    document.querySelector('#resultDisplay').textContent = `Your score is ${score}`

    
 
    // 

    // if (finalScore >= 66) {
    //     document.querySelector("#resultDisplay").textContent = `Your score is ${finalScore}. Do it.`
    //     document.querySelector("#resultDisplay").style.color="green"
    // } else {
    //     document.querySelector("#resultDisplay").textContent = `Your score is ${finalScore}. Don't do it.`
    //     document.querySelector("#resultDisplay").style.color="red"
    // }

    }