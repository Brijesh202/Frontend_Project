const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll(".goal-input");
const errorMsg = document.querySelector('.error-label');

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allFieldsFilled = [...inputFields].every(function(input){
            return input.ariaValueMax;
        });

        if(allFieldsFilled){
            checkbox.parentElement.classList.toggle("completed");
        }
        else{
            errorMsg.style.display = "block";
        }
    })
})