import React from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';
import {Button} from "./src/components";

const App = () => {
 
  return (
    <SafeAreaView >
     <Text>design system</Text>
     <Button title='ClickMe' />
    </SafeAreaView>
  );
};


export default App;


// import { StyleSheet, View } from "react-native";
// import React from "react";
// import {CheckBox} from "./src/components";


// export default function App() {


// 	return (
// 		<View style={styles.container}>
// 			<CheckBox
// 				title="Music"
// 				isChecked={true}
// 			/>
// 			<CheckBox
// 				title="Dancing"
// 				isChecked={false}
// 			/>
// 			<CheckBox
// 				title="Reading"
// 				isChecked={true}
// 			/>
// 		</View>
// 	);
// 	}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// });