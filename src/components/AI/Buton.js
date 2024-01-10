export default function Button({ label, onClick }) {
    return (
        <button onClick={onClick} className="my-button ">
            {label}
        </button>
    )
}
