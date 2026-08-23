
function getButtonStyling(stylering) {

    if (stylering === "Primary") {
        return "bg-blue-500";
    }
    else if (stylering === "Tertiary") {
        return "bg-red-500 rounded";
    }
    else if (stylering === "Secondary") {
        return "bg-black";
    }
}


export default getButtonStyling;