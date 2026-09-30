class FormValidator {
  constructor(settings, fromEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = fromEl;
  }

  checkInputValidity(inputElement) {

  }

_setEventListeners(){
 this._inputList = Array.from(
    

  enableValidation() {

  this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  this._setEventListeners();
  }
}

export default FormValidator;
