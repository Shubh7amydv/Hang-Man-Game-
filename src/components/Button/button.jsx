import getButtonStyling from "./buttonStyling";

function MyButton({ text, onClickHandler, stylering }) {

    return (
        <button
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(stylering)} text-white`}
        >
            {text}
        </button>
    )
}


export default MyButton;