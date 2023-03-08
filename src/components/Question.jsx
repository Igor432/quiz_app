import { Radio, Form, Button, ConfigProvider } from "antd";
import styles from "../styles/Question.module.css";
import { useState } from "react";

export const Question = ({
  yourAnswer,
  question,
  answers,
  nextFunc,
  setAnswer,
  number,
  showAnswer,
  correctAnswer,
}) => {
  let questionCleared = "";

const [your, setYour] = useState('')

  if (question !== undefined) {
    questionCleared = question
      .replace(/&#039;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&ldquo;/g, '"');
  }

  if (answers !== undefined) {
    answers = answers.map((answer) =>
      answer
        .replace(/&#039;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&amp;/g, "&")
        .replace(/&ldquo;/g, '"')
    );
  }

  /*
background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);

*/

  return (
    <Form id="Form" onFinish={nextFunc} label="radio" className={styles.Form}>
      <div className={styles.question_container}>
        <h3 className={styles.question_number}>#{number}</h3>
      </div>
      <div className={styles.question_div}>
        <h5 className={styles.question}> {questionCleared} </h5>{" "}
      </div>
      <ConfigProvider
        theme={{
          components: {
            Radio: { 
              colorPrimary: showAnswer && your=== correctAnswer ? 'green' : "#424162",
              colorPrimaryHover: "#424162",
            },
          },
        }}
      >
        <Radio.Group buttonStyle="solid" className={styles.Radio_list}>
          {" "}
          {answers &&
            answers.map((answer, index) => {
              if (answer === correctAnswer) {
                return (
                  <li className={styles.answer_buttons} key={index}>
                    <Radio.Button
                      className={
                        showAnswer
                          ? styles.radio_button_right
                          : styles.radio_button
                      }
                      value={answer}
                      key={index}
                      id={index}
                      name="answer"
                      onChange={(e) => {
                        setYour(e.target.value)
                        setAnswer(e.target.value)}}
                    >
                      {answer}
                    </Radio.Button>
                  </li>
                );
              } else {
                return (
                  <li
                    className={
                      
                       styles.answer_buttons
                    }
                    key={index}
                  >
                    <Radio.Button
                      className={styles.radio_button}
                      value={answer}
                      key={index}
                      id={index}
                      checked
                      name="answer"
                      onChange={(e) => {
                        setAnswer(e.target.value);
                        setYour(e.target.value)
                      }}
                    >
                      {answer}
                    </Radio.Button>
                  </li>
                );
              }
            })}{" "}
        </Radio.Group>
      </ConfigProvider>
      <Button
        form="Form"
        key="submit"
        htmlType="submit"
        className={styles.next_button}
      >
        Next{" "}
      </Button>{" "}
    </Form>
  );
};

export default Question;
