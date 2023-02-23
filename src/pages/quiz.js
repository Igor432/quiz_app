import styles from "@/styles/Home.module.css";
import { Question } from "../components/Question";
import { useEffect, useState } from "react";
import { ScoreTable } from "../components/ScoreTable";
import Link from "next/link";
import { chooseTopic, chooseAmmount } from "../redux/quizSlice";
import { useDispatch } from "react-redux";



export const Quiz = ({ quiz, ammount }) => {
    const [questionNumber, setQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [right, setRight] = useState("");
    const [questions, getQuestions] = useState(quiz);
    const [showAnswer, setShowAnswer] = useState(false);

    const question = questions.results[questionNumber];

    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort((a, b) => a.length - b.length);
    const correctAnswer = question.correct_answer;

    useEffect(() => {
        if (showAnswer === true) {
            setTimeout(() => {
                setShowAnswer(false);
                setQuestion((prev) => prev + 1);
            }, 1500);
        }
    }, [showAnswer, question]);

    const nextQuestion = () => {
        if (answer === "") {
            console.log("Please choose the answer");
        } else {
            if (answer === correctAnswer) {
                setShowAnswer(true);
                setAnswer("");
                setRight("good");
                setScore((prev) => prev + 1);
            } else {
                setShowAnswer(true);

                setAnswer("");
                setRight("bad");
            }
        }
    };

    const dispatch = useDispatch()

    const getBack = () => {
        dispatch(chooseTopic(''))
        dispatch(chooseAmmount(0))
    }


    return ( <
        >
        <
        main >
        <
        div className = { styles.grid } >
        <
        Link href = "/" >
        <
        button className = { styles.radio_button }
        onClick = { getBack } > Go Back < /button> <
        /Link> <
        /div>{" "} <
        Question number = { questionNumber + 1 }
        showAnswer = { showAnswer }
        question = { question.question }
        setAnswer = { setAnswer }
        answers = { answers }
        nextFunc = { nextQuestion }
        correctAnswer = { correctAnswer }
        />{" "} <
        ScoreTable questionNum = { questionNumber }
        ammount = { ammount }
        answer = { right }
        />

        <
        /main>{" "} <
        />
    );
};

export async function getServerSideProps(context) {
    console.log(context.query);
    const { topic, ammount } = context.query;

    if (topic === "Movies") {
        const res = await fetch(
            "https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple"
        );
        const quiz = await res.json();

        return {
            props: {
                quiz,
                topic,
                ammount,
            },
        };
    } else if (topic === "Science&Nature") {
        const res = await fetch(
            "https://opentdb.com/api.php?amount=50&category=17&difficulty=medium&type=multiple"
        );
        const quiz = await res.json();

        return {
            props: {
                quiz,
                topic,
                ammount,
            },
        };
    } else {
        const res = await fetch(
            "https://opentdb.com/api.php?amount=50&category=22&difficulty=medium&type=multiple"
        );
        const quiz = await res.json();
        return {
            props: {
                quiz,
                topic,
                ammount,
            },
        };
    }
}

export default Quiz;