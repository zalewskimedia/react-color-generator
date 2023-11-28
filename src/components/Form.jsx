import { useState } from "react"

const Form = ({ addColor }) => {
    const [color, setColor] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        addColor(color)
    }
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Color Generator</h1>
            <form
                onSubmit={handleSubmit}
                className="mt-8 text-center flex items-center justify-center">
                <input
                    type="color"
                    value={color}
                    onChange={e => {
                        setColor(e.target.value)
                    }}
                    className="bg-transparent h-10 w-10 m-0"
                />
                <input
                    type="text"
                    value={color}
                    onChange={e => {
                        setColor(e.target.value)
                    }}
                    placeholder="#F15025"
                    className="py-1 px-2 focus:outline-none border-solid border-gray-100 border"
                />
                <button
                    type="submit"
                    className="px-4 py-1 text-white border border-solid border-gray-100 bg-gray-400"
                    style={{ background: color }}>
                    Submit
                </button>
            </form>
        </section>
    )
}
export default Form
