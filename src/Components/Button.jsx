export default function Button({ type = "button", onClick, label, className }) {
    return (
        <button type={type} onClick={onClick} className={` text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-gradient-to-r ${className} focus:ring-4 focus:outline-none`}>{label}</button>
    )
}

