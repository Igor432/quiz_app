import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    topic: '',
    questionAmmount: 0,
    score: null,

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
        setScore(state, action) {
            state.score = action.payload
        },

    }
})

export const { chooseTopic, chooseAmmount, setScore, setQuestionNumber } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;