import Form from "./components/Form"
import ColorList from "./components/ColorList"
import Values from "values.js"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

function App() {
    const [colors, setColors] = useState(new Values("#8330b0").all(10))

    const addColor = color => {
        try {
            const newColors = new Values(color).all(10)
            setColors(newColors)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="container mx-auto px-8 py-16">
            <Form addColor={addColor} />
            <ColorList colors={colors} />
            <ToastContainer position="top-right" />
        </div>
    )
}

export default App
