import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './screens/QuizScreen';
// import QuizScreenTest from './screens/QuizScreenTest';
import ResultScreen from './screens/ResultScreen';
import StartQuizScreen from './screens/StartQuizScreen';

export default function App() {
  // json.Questions.map((element, index) => ({ key: index, data: element }))
  const [data, setData] = useState(undefined);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [content, setContent] = useState(undefined);

  // load and parse data
  useEffect(() => {
    var json = require('./QuestionsAnswers.json'); //(with path)
    // console.log('json', json);
    const stuff = json.Questions.map((elem, index) => ({
      key: index,
      question: elem.question,
      answers: elem.answers.map((answer, ansIdx) => ({
        key: ansIdx,
        answer: answer.answer
      }))
    }));
    setData(stuff);
  }, []);

  useEffect(() => {
    if (data && selectedAnswers) {
      console.log('selectedAnswers', selectedAnswers);
      setContent(
        <QuizScreen
          data={data}
          selectedAnswersHook={[selectedAnswers, setSelectedAnswers]}
        />
      );
    }
  }, [data, selectedAnswers]);


  return (
    <View style={styles.container}>
      {content ?
        content :
        <Text>webos con jamon</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
