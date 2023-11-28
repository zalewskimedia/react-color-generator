import { toast } from "react-toastify"

const SingleColor = ({ color, index }) => {
    const { hex, weight } = color
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success("Color copied to clipboard")
            } catch (error) {
                toast.error("Failed to copy color to clipboard")
            }
        } else {
            toast.error("Clipboard access not available")
        }
    }

    return (
        <div
            className={`p-8 cursor-pointer ${index > 10 && "text-gray-300"}`}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}>
            <p>{weight}%</p>
            <p className="mt-4">#{hex}</p>
        </div>
    )
}
export default SingleColor
