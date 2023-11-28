import SingleColor from "./SingleColor"
import { nanoid } from "nanoid"

const ColorList = ({ colors }) => {
    return (
        <section className="grid grid-cols-6 mt-16">
            {colors.map((color, index) => {
                return (
                    <SingleColor key={nanoid()} color={color} index={index} />
                )
            })}
        </section>
    )
}
export default ColorList
