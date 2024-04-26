export type Option = {
  id: string;
  label: string;
};

export type IFormValues = {
  autoCompleteElement: null | string | Option;
  autoCompleteElementMultiple: null | string[] | Option[];
  checkboxButtonGroup: Option[] | string[];
  checkboxElement: boolean;
  datePickerElement: string;
  dateTimePickerElement: string;
  mobileDatePickerElement: string;
  multiSelectElement: string[];
  passwordElement: string;
  passwordRepeatElement: string;
  radioButtonGroup: string;
  selectElement: string;
  sliderElement: number;
  switchElement: boolean;
  textFieldName: string;
  textAreaAutoSizeElement: string;
  timePickerElement: string;
  toggleButtonGroupElement: string[];
};
