var currentTime = "green"
var morningTime = "sky blue"
var afternoonTime = "orange"
var textarea = document.querySelector("#text5")

for (var i=9;  i<=20; i++){
var time = moment()
console.log(time._d.getHours()) 
if(time._d.getHours()){
    console.log("true") 
    var  timeSelector =document.querySelector(`#text${i}`);
    var hourId =parseInt(timeSelector.id.substring(4));
    console.log(hourId) 
    if(time._d.getHours() > hourId){
        timeSelector.setAttribute("style", "background-color: #C1B7BB")
    }
    else if(time._d.getHours() < hourId){
        timeSelector.setAttribute("style", "background-color: #C9E7C8")
    } 
    
 else{
    timeSelector.setAttribute("style", "background-color: blue")
}
}}


document.querySelector('#btn9').onclick = function(){
    var text9=document.querySelector("#text9").value;
    localStorage.setItem('text9', JSON.stringify(text9))
    document.querySelector('#text9').textContent = JSON.parse(localStorage.getItem('text9'))
}

if (localStorage.getItem('text9')){
    document.querySelector('#text9').textContent = JSON.parse(localStorage.getItem('text9'))}

    document.querySelector('#btn10').onclick = function(){
        var text10=document.querySelector("#text10").value;
        localStorage.setItem('text10', JSON.stringify(text10))
        document.querySelector('#text10').textContent = JSON.parse(localStorage.getItem('text10'))
    }
    
    if (localStorage.getItem('text10')){
        document.querySelector('#text10').textContent = JSON.parse(localStorage.getItem('text10'))}
    
     document.querySelector('#btn11').onclick = function(){
            var text11=document.querySelector("#text11").value;
            localStorage.setItem('text11', JSON.stringify(text11))
            document.querySelector('#text11').textContent = JSON.parse(localStorage.getItem('text11'))
        }
        
        if (localStorage.getItem('text11')){
            document.querySelector('#text11').textContent = JSON.parse(localStorage.getItem('text11'))}

     document.querySelector('#btn12').onclick = function(){
        var text12=document.querySelector("#text12").value;
        localStorage.setItem('text12', JSON.stringify(text12))
        document.querySelector('#text12').textContent = JSON.parse(localStorage.getItem('text12'))
    }
    
    if (localStorage.getItem('text12')){
        document.querySelector('#text12').textContent = JSON.parse(localStorage.getItem('text12'))}

        document.querySelector('#btn1').onclick = function(){
            var text1=document.querySelector("#text1").value;
            localStorage.setItem('text1', JSON.stringify(text1))
            document.querySelector('#text1').textContent = JSON.parse(localStorage.getItem('text1'))
        }
        
        if (localStorage.getItem('text1')){
            document.querySelector('#text1').textContent = JSON.parse(localStorage.getItem('text1'))}
            
            document.querySelector('#btn2').onclick = function(){
                var text2=document.querySelector("#text2").value;
                localStorage.setItem('text2', JSON.stringify(text2))
                document.querySelector('#text2').textContent = JSON.parse(localStorage.getItem('text2'))
            }
            
            if (localStorage.getItem('text2')){
                document.querySelector('#text2').textContent = JSON.parse(localStorage.getItem('text2'))}

                document.querySelector('#btn3').onclick = function(){
                    var text3=document.querySelector("#text3").value;
                    localStorage.setItem('text3', JSON.stringify(text3))
                    document.querySelector('#text3').textContent = JSON.parse(localStorage.getItem('text3'))
                }
                
                if (localStorage.getItem('text3')){
                    document.querySelector('#text3').textContent = JSON.parse(localStorage.getItem('text3'))}

                    document.querySelector('#btn4').onclick = function(){
                        var text4=document.querySelector("#text4").value;
                        localStorage.setItem('text4', JSON.stringify(text4))
                        document.querySelector('#text4').textContent = JSON.parse(localStorage.getItem('text4'))
                    }
                    
                    if (localStorage.getItem('text4')){
                        document.querySelector('#text4').textContent = JSON.parse(localStorage.getItem('text4'))}
            
                        document.querySelector('#btn5').onclick = function(){
                            var text5=document.querySelector("#text5").value;
                            localStorage.setItem('text5', JSON.stringify(text5))
                            document.querySelector('#text5').textContent = JSON.parse(localStorage.getItem('text5'))
                        }
                        
                        if (localStorage.getItem('text5')){
                            document.querySelector('#text5').textContent = JSON.parse(localStorage.getItem('text5'))}

                        document.querySelector('#btn6').onclick = function(){
                                var text6=document.querySelector("#text6").value;
                                localStorage.setItem('text6', JSON.stringify(text6))
                                document.querySelector('#text6').textContent = JSON.parse(localStorage.getItem('text6'))
                            }
                            
                            if (localStorage.getItem('text6')){
                                document.querySelector('#text6').textContent = JSON.parse(localStorage.getItem('text6'))}
        
                         document.querySelector('#btn7').onclick = function(){
                                    var text7=document.querySelector("#text7").value;
                                    localStorage.setItem('text7', JSON.stringify(text7))
                                    document.querySelector('#text7').textContent = JSON.parse(localStorage.getItem('text7'))
                                }
                                
                                if (localStorage.getItem('text7')){
                                    document.querySelector('#text7').textContent = JSON.parse(localStorage.getItem('text7'))}            
                                   
                         document.querySelector('#btn8').onclick = function(){
                                        var text5=document.querySelector("#text8").value;
                                        localStorage.setItem('text8', JSON.stringify(text8))
                                        document.querySelector('#text8').textContent = JSON.parse(localStorage.getItem('text8'))
                                    }
                                    
                                    if (localStorage.getItem('text8')){
                                        document.querySelector('#text8').textContent = JSON.parse(localStorage.getItem('text8'))}
        
    


