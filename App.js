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
// import React,{ useState } from "react";
// import {CheckBox} from "./src/components";


// export default function App() {
// 	const [music, setMusic] = useState(false);
// 	const [dancing, setDancing] = useState(false);
// 	const [reading, setReading] = useState(false);

// 	return (
// 		<View style={styles.container}>
// 			<CheckBox
// 				onPress={() => setMusic(!music)}
// 				title="Music"
// 				isChecked={music}
// 			/>
// 			<CheckBox
// 				onPress={() => setDancing(!dancing)}
// 				title="Dancing"
// 				isChecked={dancing}
// 			/>
// 			<CheckBox
// 				onPress={() => setReading(!reading)}
// 				title="Reading"
// 				isChecked={reading}
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