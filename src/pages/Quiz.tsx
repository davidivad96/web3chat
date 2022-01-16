import { useCallback, useEffect, useState } from 'react';
import { Box, Button, Center, Heading, IconButton, SimpleGrid, Text, useToast, VStack } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import he from 'he';
import Navbar from '../components/Navbar';
import { OpenTDBResponse, Question } from '../interfaces';
import { shuffleArray } from '../utils/functions';

const NUMBER_OF_QUESTIONS = 10;

const instance = axios.create({ baseURL: 'https://opentdb.com/api.php' });

const Quiz: React.FunctionComponent = () => {
  const toast = useToast();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [disableButtons, setDisableButtons] = useState<boolean>(false);
  const [answersColors, setAnswersColors] = useState<string[]>([]);

  const updateSelectedAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswersColors((answersColors) => {
      const newAnswersColors: string[] = new Array(answersColors.length).fill('blackAlpha');
      newAnswersColors[answerIndex] = 'blue';
      return newAnswersColors;
    });
  }, []);

  const onClickCheckAnswer = useCallback(() => {
    setDisableButtons(true);
    const isCorrect = currentQuestion?.correctAnswer === selectedAnswer;
    setAnswersColors((answersColors) => {
      const newAnswersColors: string[] = new Array(answersColors.length).fill('blackAlpha');
      if (currentQuestion?.correctAnswer !== undefined) {
        newAnswersColors[currentQuestion.correctAnswer] = 'green';
      }
      if (selectedAnswer !== null && !isCorrect) {
        newAnswersColors[selectedAnswer] = 'red';
      }
      return newAnswersColors;
    });
    const title = isCorrect ? "That's correct! You've earned 15 Davidcoins" : "Ups! That's not the correct answer";
    const status = isCorrect ? 'success' : 'error';
    toast({
      title,
      position: 'top',
      status,
      duration: 2000,
      onCloseComplete: () => setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1),
    });
  }, [currentQuestion?.correctAnswer, selectedAnswer, toast]);

  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    const res = await instance.get<OpenTDBResponse>('/', { params: { amount: NUMBER_OF_QUESTIONS } });
    const newQuestions: Question[] = res.data.results.map((result) => {
      const answers = shuffleArray([result.correct_answer, ...result.incorrect_answers]);
      const correctAnswer = answers.indexOf(result.correct_answer);
      return {
        category: he.decode(result.category),
        question: he.decode(result.question),
        difficulty: result.difficulty,
        answers: answers.map((answer) => he.decode(answer)),
        correctAnswer,
      };
    });
    setQuestions(newQuestions);
    setCurrentQuestion(newQuestions[0]);
    setCurrentQuestionIndex(0);
    setAnswersColors(new Array(newQuestions[0].answers.length).fill('blackAlpha'));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const resetState = useCallback(() => {
    setSelectedAnswer(null);
    setAnswersColors(new Array(currentQuestion?.answers.length).fill('blackAlpha'));
    setDisableButtons(false);
  }, [currentQuestion?.answers.length]);

  useEffect(() => {
    resetState();
    if (currentQuestionIndex === NUMBER_OF_QUESTIONS - 1) {
      fetchQuestions();
    } else if (currentQuestionIndex > 0) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, fetchQuestions, questions, resetState]);

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="quiz" />
      {isLoading ? (
        <Center h="full">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <>
          <VStack justify="center" h="lg" spacing="4">
            <Heading>{currentQuestion?.category}</Heading>
            <Text fontSize="large">{currentQuestion?.question}</Text>
            <SimpleGrid columns={2} spacing={5}>
              {currentQuestion?.answers.map((answer, index) => (
                <Button
                  disabled={disableButtons}
                  style={{ opacity: 1 }}
                  key={answer}
                  variant="solid"
                  colorScheme={answersColors[index]}
                  onClick={() => updateSelectedAnswer(index)}
                >
                  {answer}
                </Button>
              ))}
            </SimpleGrid>
          </VStack>
          <IconButton
            aria-label="Next Question"
            icon={<ArrowRightIcon />}
            pos="absolute"
            right={30}
            bottom={30}
            size="lg"
            variant="solid"
            colorScheme="blue"
            onClick={onClickCheckAnswer}
            disabled={selectedAnswer === null}
          />
        </>
      )}
    </Box>
  );
};

export default Quiz;
