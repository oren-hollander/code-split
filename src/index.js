import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reduceReducers from 'reduce-reducers'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { reducer as increaseReducer } from './features/increase/reducer'
import ComponentStore from './split/componentStore'
import ComponentProvider from './split/ComponentProvider'

const componentStore = ComponentStore()

const store = createStore(increaseReducer)

const loadDecreaseFeature = () => {
  import ('./features/decrease/split')
    .then(({split: {reducer: decreaseReducer, Decrease}}) => {
      store.replaceReducer(reduceReducers(increaseReducer, decreaseReducer))
      componentStore.add('Decrease', Decrease)
      renderApp()
    })
}

setTimeout(loadDecreaseFeature, 5000)

const renderApp = () => {
  const Decrease = componentStore.get('Decrease')
  render(
    <Provider store={store}>
      <ComponentProvider componentStore={componentStore}>
        <App Decrease={Decrease}/>
      </ComponentProvider>
    </Provider>
    , document.getElementById('root')
  )  
}

renderApp()
registerServiceWorker()