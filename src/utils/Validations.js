const validateName = (name) => {
  if (name.length <= 5) {
    return 'O nome deve ter no mínimo 5 caracteres';
  }
  return '';
}

const validateTreatment = (treatment) => {
  if (treatment.length <= 3) {
    return 'O tratamento deve ter no mínimo 3 caracteres';
  }
  return '';
}

const validateValue = (value) => {
  if (value <= 0 || value === '') {
    return 'O valor deve ser maior que 0';
  }
  return '';
}

export { validateName, validateTreatment, validateValue };