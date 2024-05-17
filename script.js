function czytoemail(){
    inpucik = document.getElementById("email");
    inputValue = inpucik.value
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    if(re.test(inputValue) == true){
        element = document.getElementById("poprawnosc");
        element.classList.remove("zle");
        element.classList.add("git");
    }
    else{
        element = document.getElementById("poprawnosc");
        element.classList.remove("git");
        element.classList.add("zle");
    }
    console.log(re.test(inputValue)) ;
}