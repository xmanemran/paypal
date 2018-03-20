/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import PayPal from 'react-native-paypal-wrapper';

export default class App extends Component<Props> {
	render() {
		return (
			<TouchableOpacity onPress={() => {
				PayPal.initialize(PayPal.NO_NETWORK, "KPY6ZR7UDVEZ4");
				PayPal.pay({
					price: '40.70',
					currency: 'MYR',
					description: 'Your description goes here',
				}).then(confirm => console.log(confirm))
					.catch(error => console.log(error));
			}}>
				<Text>
					Pay
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
