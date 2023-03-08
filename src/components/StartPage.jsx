import styles from "@/styles/Home.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { chooseTopic, chooseAmmount } from "../redux/quizSlice";
import { getTopic, getAmmount } from "../redux/selectors";
import Link from "next/link";
import movieImg from "../../public/movie.jpg";
import scienceImg from "../../public/science.jpg";
import geographyImg from "../../public/geography.jpg";
import Image from "next/image";
import BounceLoader from "react-spinners/BounceLoader";

export const StartPage = () => {
  const links = [10, 15, 20];

  const dispatch = useDispatch();
  const Topic = useSelector(getTopic);
  const Ammount = useSelector(getAmmount);

  const selectTopic = (e) => {
    dispatch(chooseTopic(e.target.id));
  };

  const selectAmmount = (e) => {
    dispatch(chooseAmmount(e.target.id));
  };

  const getBack = () => {
    dispatch(chooseTopic(""));
    dispatch(chooseAmmount(0));
  };

  if (Topic !== "" && Ammount !== 0) {
    return (
      <main className={styles.main}>
        <BounceLoader color="#36d7b7" />

      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        {Topic === "" ? (
          <div className={styles.description}>
            <p>Choose your topic:</p>
            <ul className={styles.topic_list}>
              <li className={styles.topic_li}>
                <button
                  id="Movies"
                  onClick={selectTopic}
                  type="button"
                  className={styles.topic_button}
                >
                  <span onClick={selectTopic} id="Movies">
                    {" "}
                    Movies
                  </span>{" "}
                  <Image
                    className={styles.topic_image}
                    id="Movies"
                    src={movieImg}
                    onClick={selectTopic}
                    alt=""
                  />
                </button>{" "}
              </li>{" "}
              <li className={styles.topic_li} onClick={selectTopic}>
                <button
                  type="button"
                  id="Science&Nature"
                  className={styles.topic_button}
                >
                  {" "}
                  <span id="Science&Nature" onClick={selectTopic}>
                    Science & Nature
                  </span>{" "}
                  <Image
                    className={styles.topic_image}
                    id="Science&Nature"
                    src={scienceImg}
                    onClick={selectTopic}
                    alt=""
                  />
                </button>{" "}
              </li>{" "}
              <li className={styles.topic_li} onClick={selectTopic}>
                <button
                  type="button"
                  id="Geography"
                  className={styles.topic_button}
                >
                  {" "}
                  <span id="Geography" onClick={selectTopic}>
                    Geography
                  </span>{" "}
                  <Image
                    className={styles.topic_image}
                    id="Geography"
                    src={geographyImg}
                    onClick={selectTopic}
                    alt=""
                  />
                </button>{" "}
              </li>{" "}
            </ul>
          </div>
        ) : (
          <div className={styles.description}>
            <Link href="/">
              <button onClick={getBack} className={styles.back_button}>
                Go Back
              </button>
            </Link>
            <p className={styles.choose_buttons}>
              {" "}
              Choose ammount of questions:
            </p>{" "}
            <ul className={styles.topic_list}>
              {links.map((link, index) => (
                <li key={index} className={styles.topic_li}>
                  <Link
                    href={{
                      pathname: "/quiz",
                      query: {
                        topic: Topic,
                        ammount: `${link}`,
                      },
                    }}
                  >
                    <button
                      type="button"
                      className={styles.topic_button}
                      id={link}
                      onClick={selectAmmount}
                    >
                      {link}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    );
  }
};
