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

  _checkInputValidity(inputElement) {

  }

_setEventListeners() {
  this._inputList = Array.from(
    this._formEl.querySelectorAll(this._inputSelector),
  );
  const buttonElement = this._formEl.querySelector(
    this._submitButtonSelector,
  );

  toggleButtonState(this._inputList, buttonElement, this._settings);

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      toggleButtonState(this._inputList, buttonElement, this._settings);
    });
  });
}
    

  enableValidation() {

  this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  this._setEventListeners();
  }

export default FormValidator;
