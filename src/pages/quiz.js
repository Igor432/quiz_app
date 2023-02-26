import styles from "@/styles/Home.module.css";
import { Question } from "../components/Question";
import { useEffect, useState } from "react";
import { ScoreTable } from "../components/ScoreTable";
import Link from "next/link";
import Image from "next/image";

import {
    chooseTopic,
    chooseAmmount,
    setRows,
    deleteRows,
    setScore,
    deleteScore,
} from "../redux/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "@/components/Results";
import { getAnswer } from "@/redux/selectors";
import wojakgood from "../../public/good.png";
import wojakbad from "../../public/cry.png";

export const Quiz = ({ quiz, ammount }) => {
    const [questionNumber, setQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [questions, getQuestions] = useState(quiz);
    const [showAnswer, setShowAnswer] = useState(false);
    const [wojak, setWojak] = useState("default");

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
                dispatch(
                    setRows({
                        [questionNumber]: "good",
                    })
                );
                setShowAnswer(true);
                setAnswer("");
                setWojak("good");
                dispatch(setScore());
            } else {
                setShowAnswer(true);
                dispatch(
                    setRows({
                        [questionNumber]: "bad",
                    })
                );
                setAnswer("");
                setWojak("bad");
            }
        }
    };

    const dispatch = useDispatch();

    const getBack = () => {
        dispatch(chooseTopic(""));
        dispatch(chooseAmmount(0));
        dispatch(deleteRows());
        dispatch(deleteScore());
    };

    return ( <
        >
        <
        main >
        <
        div className = { styles.grid } >
        <
        Link href = "/" >
        <
        button className = { styles.back_button_question }
        onClick = { getBack } >
        Go Back { " " } <
        /button>{" "} <
        /Link>{" "} { " " } { wojak === 'bad' && showAnswer === true && < Image src = { wojakbad }
            className = { styles.wojak_img }
            alt = 'bad' / > || wojak === 'good' && showAnswer === true && < Image src = { wojakgood }
            className = { styles.wojak_img_good }
            alt = 'bad' / > } <
        /div>{" "} {
            questionNumber < ammount ? ( <
                Question number = { questionNumber + 1 }
                showAnswer = { showAnswer }
                question = { question.question }
                setAnswer = { setAnswer }
                answers = { answers }
                nextFunc = { nextQuestion }
                correctAnswer = { correctAnswer }
                />


            ) : ( <
                Result / >
            )
        } { " " } <
        ScoreTable / >
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


/*
       {questionNumber > 1 && wojak === 'good'  ? <Image src={wojakgood} className={styles.wojak_img_good} alt='correct'/> : <Image src={wojakbad} className={styles.wojak_img} alt='incorrect'/>}
       */