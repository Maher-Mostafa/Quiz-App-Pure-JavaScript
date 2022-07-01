class question{
    constructor(question){   // السؤال دا هيكون جاى من ال quiz
        this.questionElement = document.querySelector("question");
        this.answerElements = [
            document.querySelector("#a1"),
            document.querySelector("#a2"),
            document.querySelector("#a3"),
            document.querySelector("#a4") ] 

        this.question = question.question;  // ماسك الاوبجيكت كله بعد كدا هيجيب منه السؤال فقط
        this.iscorrect = false;
        this.correctAnswer = question.correct_answer;
        this.answers = [question.correct_Answer,...question.incorrect_answer]   // الثلاث نقاط هيجيبوا بقيت الاجابات

    }
    answer(checkedElement){
        this.iscorrect = checkedElement[0].textContent === this.correctAnswer ? true : false ;
    }
    render(){
        this.questionElement.innerHTML = this.question;
        this.answerElements.forEach( (el,index) => {
            el.innerhtml = '<input type="radio" name="radio" >' + this.answers[index] ;
        })
    }
}


export default question