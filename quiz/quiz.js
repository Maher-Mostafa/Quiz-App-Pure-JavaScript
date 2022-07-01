import final from "./final.js"
import question from "./question.js"

class Quiz{
    constructor(quizElement,amount,questions){   // هستقبل العوامل دى من ال settings.js
        this.quizElement = quizElement;
        this.currentElement = document.querySelector(".current");
        this.totalElement = document.querySelector(".total");
        this.finalElement = document.querySelector(".final");
        this.nextbtn = document.querySelector("#next");

        this.totalAmount = amount ; 
        this.answerAmount = 0;

        this.questions = this.setQuestions(questions);   // Array of Objects
        this.nextBtn.addEventListener("click",this.nextQuestion);
        this.renderQuestion(); // يبقى كدا انا هعمل تشغيل للدالة دى اول ما الكلاس يبدا يشتغل
    }

    setQuestion(questions){
        return questions.map((question) => new question(question) );   // جعل السؤال معتبر نفسه واخد نسخه من الكلاس التابع للسؤال
    }

    renderQuestion(){
        this.questions[this.answerAmount].render()  // ولانه واخد نسخه من كلاس السؤال هيقدر يستخدم الدوال التابعه له
        this.currentElement.innerHTML = this.answerAmount;
        this.totalAmount.innerHTML = this.totalAmount;
    }

    nextQuestion = () => {
        const checkElement = this.questions[this.answerAmount].answerElements.filter(el => el.firstChild.checked); // العنصر هيحتوى على input+text
        if(checkElement.length == 0){
            alert("Check Answer");
        }
        else{
            this.questions[this.answerAmount].answer(checkElement);
            this.answerAmount++;
            this.answerAmount < this.totalAmount ? this.renderQuestion() : this.endQuizApp()
        }
    };

    endQuizApp(){
        this.quizElement.style.display = 'none';
        this.finalElement.style.display = 'block';
        const correct = this.countCorrectAnswers();
        new final( correct , this.totalAmount)
        
    }

    countCorrectAnswers(){
        let count = 0;
        this.questions.forEach((ele) => { 
        if (ele.iscorrect){
            count++ ;
        }}
        )
    }
}

export default Quiz