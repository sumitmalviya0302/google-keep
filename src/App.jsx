import { Provider } from "react-redux"
import Body from "./components/body/Body"
import Header from "./components/header/Header"
import store from "./utils/store"


function App() {

  return (
    <Provider store={store} >
    <div>
      <Header />
      <Body />
    </div>
    </Provider>
  )
}

export default App
