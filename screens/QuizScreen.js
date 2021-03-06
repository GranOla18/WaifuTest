import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { View } from "react-native-web";
import QuestionContainer from "../components/QuestionContainer";


const Question = ({ item, backgroundColor, textColor, list }) => (
  <QuestionContainer style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.question}</Text>
    {list}
  </QuestionContainer>
);

const QuizScreen = (props) => {
  const {
    data,
    selectedAnswersHook: [selectedAnswers, setSelectedAnswers],
    onCalculate
  } = props;

  const renderItem = ({ item: question }) => {
    // setSelectedItems(
    //   [...selectedItems, {questionId: item.key, selectedAnswer: undefined } ]
    // );

    const listItems = question.answers.map((elem) =>
      <TouchableOpacity style={styles.ansButton} key={elem.key}>
        <Button
          title={elem.answer}
          color={selectedAnswers.some(iter => (iter.questionId == question.key) && (iter.selectedAnswer === elem.key)) ? '#83329c' : '#cb42f5'}
          onPress={() => {
            if (selectedAnswers.some((iter) => iter.questionId === question.key)) {
              const arrCopy = selectedAnswers.slice();
              arrCopy.splice(
                arrCopy.findIndex((iter) => iter.questionId === question.key),
                1,
                { questionId: question.key, selectedAnswer: elem.key }
              );
              setSelectedAnswers(arrCopy);
            } else {
              setSelectedAnswers(
                [...selectedAnswers, { questionId: question.key, selectedAnswer: elem.key }]
              );
            }
          }}
        />
      </TouchableOpacity>
    );

    // const backgroundColor = item.key === selectedItems ? "#6e3b6e" : "#f9c2ff";
    // const color = item.key === selectedItems ? 'white' : 'black';

    return (
      <Question
        item={question}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
        list={listItems}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        extraData={selectedAnswers}
      />
      <View style={styles.endButton} >
        <Button color='#6fb5de' onPress={() => (onCalculate(2))} title="Encuentra mi waifu uwu ~" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    alignSelf: 'center',
    alignContent: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {

    fontSize: 32,
  },
  ansButton: {
    margin: 10,
    width: '90%'
  },
  endButton: {
    width: '60%',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 10
  }
});


export default QuizScreen