// Add commas to a number
export const AddCommaToNumber = (number) => {
    try {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    catch(error) {
        console.error("Invalid format", error.message);
    }
}