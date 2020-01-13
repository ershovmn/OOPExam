import React from 'react';
import {Provider} from 'react-redux'

import store from './store'

import MapPage from './Components/MapPage'
import Navigator from './Navigator'

class App extends React.Component {
	render() {
		console.log(MapPage)
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		)
	}
}

export default App