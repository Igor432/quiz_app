import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Question from "./components/Question";
import { message } from "antd";
import { useState } from "react";
import { ScoreTable } from "./components/ScoreTable";

/*
make few quizes
add redux
add styles
add question ammount choose
*/

export async function getServerSideProps(context) {
    console.log(context.query);

    const { topic, ammount } = context.query;
    console.log(topic, ammount);

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

export const Quiz = ({ quiz, topic, ammount }) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [messageApi, contextHolder] = message.useMessage();
    const [right, setRight] = useState("");
    const [questions, getQuestions] = useState(quiz);

    const success = () => {
        messageApi.open({
            type: "success",
            content: "This is a right answer",
        });
    };

    const error = () => {
        messageApi.open({
            type: "error",
            content: "Please choose answer",
        });
    };

    const question = questions.results[questionNumber];

    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort((a, b) => a.length - b.length);
    const correctAnswer = question.correct_answer;

    const nextQuestion = () => {
        if (answer === "") {
            console.log("Please choose the answer");
        } else {
            if (answer === correctAnswer) {
                message.success();
                setScore((prev) => prev + 1);
                setQuestionNumber((prev) => prev + 1);
                setAnswer("");
                setRight("good");
            } else if (answer !== correctAnswer) {
                message.error();
                setQuestionNumber((prev) => prev + 1);
                setAnswer("");
                setRight("bad");
            }
        }
    };

    return ( <
        >
        <
        main >
        <
        div className = { styles.grid } >
        <
        Question question = { question.question }
        setAnswer = { setAnswer }
        answers = { answers }
        nextFunc = { nextQuestion }
        />{" "} <
        ScoreTable questionNum = { questionNumber }
        answer = { right }
        />{" "} < /
        div > { " " } <
        /main>{" "} < /
        >
    );
};

export default Quiz;