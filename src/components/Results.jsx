import { getScore, getAmmount } from "@/redux/selectors";
import { useSelector } from "react-redux";
import styles from '../styles/scoreTable.module.css'

export const Result = () => {

const ammount = useSelector(getAmmount)
const score = useSelector(getScore)

return(

<div className={styles.result}>
<h3>Your result is {score} / {ammount}!</h3>
</div>

)

}