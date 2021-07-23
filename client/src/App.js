import './App.css'
import Header from './components/Header'
import BodyText from './components/Body/BodyText'
import Demo from './components/Body/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <BodyText></BodyText>
        <Demo></Demo>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
