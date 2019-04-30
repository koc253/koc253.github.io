var squid = document.getElementById('squidward')

var witch = document.getElementById('witchhat')

var glass = document.getElementById('glasses')

var tie = document.getElementById('bowtie')


squid.style.left = '150px'
squid.style.top = '150px'

witch.style.left = '450px'
witch.style.top = '250px'
witch.style.width = "270px"
witch.style.height = "300px"

glass.style.left = '780px'
glass.style.top = '300px'
glass.style.width = "310px"
glass.style.height = "200px"

tie.style.left = '1190px'
tie.style.top = '350px'
tie.style.width = "250px"
tie.style.height = "150px"




witch.onclick = function(){
    alert('You have picked the witch hat!'); 
    witch.style.width = "130px"
    witch.style.height = "150px"
    witch.style.left = '165px'
    witch.style.top = '50px'

};

glass.onclick = function(){
    alert('You have picked the glasses!'); 
    glass.style.width = "100px"
    glass.style.height = "80px"
    glass.style.left = '175px'
    glass.style.top = '210px'

};


tie.onclick = function(){
    alert('You have picked the bow tie!'); 
    tie.style.width = "60px"
    tie.style.height = "41px"
    tie.style.left = '203px'
    tie.style.top = '330px'


};