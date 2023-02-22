import { Radio, Form, Button, message } from "antd";
import styles from "@/styles/Question.module.css";

export const Question = ({ question, answers, nextFunc, setAnswer }) => {

  return (
    <Form id="Form" onFinish={nextFunc} label="radio" className={styles.Form}>
      <h5 className={styles.question}> {question} </h5>{" "}
      <Radio.Group buttonStyle="solid" className={styles.Radio_list}>
        {" "}
        {answers && answers.map((answer, index) => {
    
          return (
            <li className={styles.answer_buttons}   key={index}>
              <Radio.Button
                className={styles.radio_button}
                value={answer}
                key={index}
                name="answer"
                onChange={(e) => setAnswer(e.target.value)}
              >
                {" "}
                {answer}{" "}
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

export default Question


/*
       <Radio value={answerCleared} key={index} name="answer" onChange={(e) => setAnswer(e.target.value)}>
                  {answerCleared}
                </Radio>

  const questionCleared = question
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&ldquo;/g, '"');


                      const answerCleared = answer
            .replace(/&#039;/g, "'")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&ldquo;/g, '"');

*/
