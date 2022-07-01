class final{
    constructor(correctAnswer,totalAmount){
        this.scoreElement=document.querySelector('.score');
        this.againbtn=document.querySelector('#again');

        this.againbtn.addEventListener('click' , this.startAgain)

        this.render(correctAnswer,totalAmount);
    }

    render(correctAnswer,totalAmount){
        this.scoreElement.innerHTML = `You Answered ${correctAnswer} from ${totalAmount}`
    }

    startAgain = () => {
        location.reload();   // اعمل للصفحة تنشيط من جديد

    };
}

export default final;