// try{

// } catch {
//          asynch    await
// }
import Quiz from "./quiz.js"
class settings {
    constructor() {
        this.settingDom = document.querySelector(".settings");
        this.quizDom = document.querySelector(".quiz");
        this.categoryDom = document.querySelector("#category");
        this.nQuestionDom = document.querySelector("#nQuestions");
        this.startBtnDom = document.querySelector("#startBtn");
        this.difficulty = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ];
        this.startBtnDom.addEventListener('click', this.startQuizApp);
    }
    startQuizApp = () => { 
        const amount = this.getAmount();
        const categoryID = this.categoryDom.value;
        const difficulty = this.getDifficulty();
        const type = "multiple";
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}&type=${type}`;
        let result = fetch(url).then((response) => response.json()).then((data) => { return data = data.results, console.log(data) });

        console.log(result);
        this.quiz = new Quiz(this.quizElement, amount, result); // هنبعتهم ال ملف quiz.js

        if (result) {
            this.quizDom.style.display = "block";
            this.settingDom.style.display = "none";
        }

    };

    getAmount = () => {
        const amount = this.nQuestionDom.value;
        if (amount > 0 && amount < 20) {
            return amount;
        } else {
            console.log("Enter another number Questions");
        }
    }
    getDifficulty = () => {
        const difficulty = this.difficulty.filter((el) => el.checked);  // هتقوم بارجاع مصفوفة مكونة من العنصر الذى تم اخنياره
        if (difficulty.length === 1) {
            return difficulty[0].id;
        }
        else {
            alert("please select difficulty");
        }
        

    getCategory = () => {
        const category = this.categoryDom.filter((el) => el.checked);
    }
    }

}


export default settings;