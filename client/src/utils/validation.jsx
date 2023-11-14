export const onlyLettersValid = (input) => {
    const inputValue = input.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ\s]/g, '');
    const nameArray = inputValue.split(" ");
    return nameArray.length> 1 ? nameArray.slice(0, nameArray.length - 1).join(" ") : input;
};

export const isEmptyValid = (input) => {
    return input.trim().length === 0;
};
