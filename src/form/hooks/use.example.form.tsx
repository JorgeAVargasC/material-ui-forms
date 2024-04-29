import { useForm } from 'react-hook-form'
import { IFormValues } from '../models'

export const useExampleForm = () => {
  const methods = useForm<IFormValues>({
    defaultValues: {
      autoCompleteElement: {
        id: '1',
        label: 'Option 1'
      },
      autoCompleteElementMultiple: [
        {
          id: '1',
          label: 'Option 1'
        },
        {
          id: '2',
          label: 'Option 2'
        }
      ],
      checkboxButtonGroup: [
        {
          id: '1',
          label: 'Option 1'
        }
      ],
      checkboxElement: true,
      datePickerElement: '2024-04-03T05:00:00.000Z',
      dateTimePickerElement: '2024-04-03T19:10:00.000Z',
      mobileDatePickerElement: '2021-04-02T05:00:00.000Z',
      timePickerElement: '2024-04-25T18:05:00.000Z',
      multiSelectElement: ['1'],
      passwordElement: '123',
      passwordRepeatElement: '123',
      radioButtonGroup: '2',
      selectElement: '1',
      sliderElement: 10,
      switchElement: true,
      textFieldName: '123',
      textAreaAutoSizeElement: '123',
      toggleButtonGroupElement: ['1']
    }
  })

  return {
    methods
  }
}
