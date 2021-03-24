export const SUBMIT = 'SUBMIT';

export const REGISTER = 'REGISTER';

export const registerName = (submitted) => ({ type: SUBMIT, submitted })

export const updateStateAction = (name, value) => ({ type: REGISTER, [name]: value })
