import { Radio, Form, Button, message } from "antd";
import styles from "@/styles/Question.module.css";

export const Question = ({ question, answers, nextFunc, setAnswer }) => {
  const questionCleared = question
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&ldquo;/g, '"');

  return (
    <Form id="Form" onFinish={nextFunc} label="radio" className={styles.Form}>
      <h5 className={styles.question}> {questionCleared} </h5>{" "}
      <Radio.Group buttonStyle="solid" className={styles.Radio_list}>
        {" "}
        {answers.map((answer, index) => {
          const answerCleared = answer
            .replace(/&#039;/g, "'")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&ldquo;/g, '"');

          return (
            <li className={styles.answer_buttons}   key={index}>
              <Radio.Button
                className={styles.radio_button}
                value={answerCleared}
                key={index}
                name="answer"
                onChange={(e) => setAnswer(e.target.value)}
              >
                {" "}
                {answerCleared}{" "}
              </Radio.Button>{" "}
            </li>
          );
        })}{" "}
      </Radio.Group>{" "}
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

/*
       <Radio value={answerCleared} key={index} name="answer" onChange={(e) => setAnswer(e.target.value)}>
                  {answerCleared}
                </Radio>
*/
