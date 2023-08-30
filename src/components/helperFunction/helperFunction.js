//reducer
export const initialState = {
    name: '',
    email: '',
    passoutYear: '',
    mobileNumber: '',
    currentCompany: '',
    linkedInUrl: '',
    nameTouched: false,
    emailTouched: false,
    passoutYearTouched: false,
    mobileNumberTouched: false,
    currentCompanyTouched: false,
    linkedInUrlTouched: false
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, [action.name]: action.value, [`${action.name}Touched`]: true };
        default:
            return state;
    }
};


//other
export const getYears = () => {
    const yearsArray = [];
    const currentYear = new Date().getFullYear();
    for (let year = 2000; year <= currentYear; year++) {
        yearsArray.push(year);
    }

    return yearsArray

}

export const getFilteredData = (selectedYear, data) => {

    const filteredData = selectedYear ? data.filter((item) => item.passoutYear === selectedYear) : data;

    return filteredData;

}

