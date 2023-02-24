import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    topic: '',
    questionAmmount: 0,
    answer: '',
    score: 0,
    rows: []
};


export const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialState,
    reducers: {
        chooseTopic(state, action) {
            state.topic = action.payload
        },
        chooseAmmount(state, action) {
            state.questionAmmount = action.payload
        },
        setAnswer(state, action) {
            state.answer = action.payload
        },
        setScore(state) {
            state.score += 1
        },
        deleteScore(state) {
            state.score = 0
        },
        setRows(state, action) {
            state.rows.push(action.payload)
        },
        deleteRows(state) {
            state.rows = []
        }

    }
})

export const { chooseTopic, chooseAmmount, setScore, setQuestionNumber, setRows, deleteRows, deleteScore, setAnswer } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;