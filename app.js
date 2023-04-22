const quizData= [
    {
        question: 'Türkiyenin başkenti?',
        a:'Ankara',
        b:'İstanbul',
        c:'Hatay',
        d:'Kahramanmaraş',
        e:'İzmir',
        correct: 'a',
    },
    {
        question: 'Türkiyenin kaç ili var?',
        a:'72',
        b:'88',
        c:'69',
        d:'56',
        e:'81',
        correct: 'e',
    },
    {
        question: 'Hangi madde, sıcaklığı arttıkça genleşme gösterir?',
        a: 'Demir',
        b: 'Bakır',
        c: 'Su',
        d: 'Cam',
        e: 'Alüminyum',
        correct: 'e'
      },
      {
        question: 'İnsan vücudu hangi elementi en çok içerir?',
        a: 'Oksijen',
        b: 'Karbon',
        c: 'Kalsiyum',
        d: 'Hidrojen',
        e: 'Azot',
        correct: 'b'
      },
      {
        question: 'Dünya\'nın hareketi ile ilgili hangi ifade doğrudur?',
        a: 'Dünya, Güneş çevresinde hareket eder.',
        b: 'Dünya\'nın hareketi yoktur, sabit durur.',
        c: 'Dünya, Ay çevresinde hareket eder.',
        d: 'Dünya kendi ekseni etrafında döner ve Güneş\'e doğru hareket eder.',
        e: 'Dünya\'nın hareketi rastgeledir.',
        correct: 'd'
      },
      {
        question: 'Elektrik akımı hangi yönde akar?',
        a: 'Pozitif yüklerden negatif yüklere doğru.',
        b: 'Negatif yüklerden pozitif yüklere doğru.',
        c: 'Yüklerin hareket ettiği yöne doğru.',
        d: 'Akımın yönü sabit değildir.',
        e: 'Akımın yönü, tellerin kalınlığına bağlıdır.',
        correct: 'a'
      },
      {
        question: 'Hangi gezegen Güneş Sistemi\'nde en büyük gezegendir?',
        a: 'Jüpiter',
        b: 'Satürn',
        c: 'Uranüs',
        d: 'Neptün',
        e: 'Venüs',
        correct: 'a'
      },
      {
        question: 'Hangi ülke, hem Asya hem de Avrupa kıtalarında yer alır?',
        a: 'Amerika',
        b: 'Türkiye',
        c: 'Avustralya',
        d: 'Kanada',
        e: 'Japonya',
        correct: 'b'
      },
      {
        question: 'Türkiye\'nin hangi şehri, üç kıtayı birleştiren boğazda yer alır?',
        a: 'Ankara',
        b: 'İzmir',
        c: 'Adana',
        d: 'İstanbul',
        e: 'Antalya',
        correct: 'd'
      },
      {
        question: 'Hangi renk, tüm renklerin karışımından elde edilir?',
        a: 'Sarı',
        b: 'Kırmızı',
        c: 'Mavi',
        d: 'Siyah',
        e: 'Beyaz',
        correct: 'e'
      },
      {
        question: 'Hangisi, Türkiye\'nin komşusu değildir?',
        a: 'Suriye',
        b: 'Bulgaristan',
        c: 'Yunanistan',
        d: 'İran',
        e: 'Azerbaycan',
        correct: 'e'
      },

]

const quiz = document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswer()

    questionEl.innerText = currentQuizData.question
    a_text.innerText= currentQuizData.a
    b_text.innerText= currentQuizData.b
    c_text.innerText= currentQuizData.c
    d_text.innerText= currentQuizData.d
    e_text.innerText= currentQuizData.e
}

function deselectedAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}




function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener("click" , ()=> {
    const answer = getSelected()

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2> test tamamlandı, ${score * 10} puan aldınız </h2>
            <button class="submit" onclick= "location.reload()"> tekrar dene </button>` 
            
                
        }
    }
})