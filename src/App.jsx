import { useState } from "react"
import Header from "./components/Header"
import ImageResults from "./components/ImageResults"

function App() {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header setListImages={setListImages} setIsLoading={setIsLoading} />
      <ImageResults listImages={listImages} isLoading={isLoading} />
    </div>
  )
}

export default App
