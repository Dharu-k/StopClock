import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native'; 

const StopwatchApp = () => { 
  const [isRunning, setIsRunning] = useState(false); 
  const [time, setTime] = useState(0); 

  useEffect(() => { 
    let timer; 
    if (isRunning) { 
      timer = setInterval(() => { 
        setTime((prevTime) => prevTime + 1); 
      }, 1000); 
    } else { 
      clearInterval(timer); 
    } 
    return () => { 
      clearInterval(timer); 
    }; 
  }, [isRunning]); 

  const startStop = () => { 
    setIsRunning(!isRunning); 
  }; 

  const reset = () => { 
    setTime(0); 
    setIsRunning(false); 
  }; 

  return ( 
    <View style={styles.container}> 
      <Text style={styles.timerText}>{time} seconds</Text>  
      <View style={styles.buttonsContainer}>
        <Button title={isRunning ? 'Stop' : 'Start'} onPress={startStop} style={styles.button} />  
        <View style={styles.buttonSpace}></View> {/* Spacer */}
        <Button title="Reset" onPress={reset} style={styles.button} /> 
      </View>
    </View> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  timerText: { 
    fontSize: 36, 
    marginBottom: 20, // Add some space below the timer text
  },
  buttonsContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    alignItems: 'center', // Center buttons vertically
  },
  button: {
    flex: 1, // Make buttons take equal space
    marginHorizontal: 10, // Add horizontal margin between buttons
  },
  buttonSpace: {
    width: 10, // Add space between buttons
  },
}); 

export default StopwatchApp;               
