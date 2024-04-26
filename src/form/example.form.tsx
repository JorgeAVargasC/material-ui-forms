import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  FormProvider,
  MultiSelectElement,
  PasswordElement,
  PasswordRepeatElement,
  RadioButtonGroup,
  SelectElement,
  SliderElement,
  SwitchElement,
  TextFieldElement,
  TextareaAutosizeElement,
  ToggleButtonGroupElement,
} from "react-hook-form-mui";
import {
  DatePickerElement,
  DateTimePickerElement,
  MobileDatePickerElement,
  TimePickerElement,
} from "react-hook-form-mui/date-pickers";
import { useExampleForm } from "./hooks";
import { Button, Card, CardContent } from "@mui/material";
import { DateFnsProvider } from "react-hook-form-mui/date-fns";
import { State, useThemeStore } from "../store/use.theme.store";

export const ExampleForm = () => {
  const { methods } = useExampleForm();

  const { setMode, setPrimaryColor } = useThemeStore();

  const handleLightMode = () => setMode("light");
  const handleDarkMode = () => setMode("dark");
  const colors = [
    "#3968DD",
    "#0FB8CE",
    "#21A663",
    "#FF9900",
    "#FF5154",
    "#D269E6",
    "#A548FF",
    "#575EFD",
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      <Card className="col-span-full">
        <CardContent>
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <Button
                key={color}
                onClick={() => setPrimaryColor(color as State["primaryColor"])}
                style={{
                  backgroundColor: color,
                  color: "white",
                }}
              >
                {color}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="contained" onClick={handleLightMode}>
              Light Mode
            </Button>
            <Button variant="contained" onClick={handleDarkMode}>
              Dark Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      <DateFnsProvider>
        <FormProvider {...methods}>
          <div className="grid gap-3">
            <AutocompleteElement
              label="Autocomplete Element"
              name="autoCompleteElement"
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />

            <AutocompleteElement
              label="Autocomplete Element Multiple"
              name="autoCompleteElementMultiple"
              multiple
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
                {
                  id: "3",
                  label: "Option 3",
                },
              ]}
            />

            <CheckboxButtonGroup
              name="checkboxButtonGroup"
              label="Checkbox Button Group"
              returnObject
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />
            <CheckboxElement name="checkboxElement" label="Checkbox Element" />

            <DatePickerElement name="datePickerElement" />
            <DateTimePickerElement name="dateTimePickerElement" />
            <MobileDatePickerElement name="mobileDatePickerElement" />
            <TimePickerElement name="timePickerElement" />

            <MultiSelectElement
              name="multiSelectElement"
              label="Multi Select Element"
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />
            <PasswordElement name="passwordElement" label="Password Element" />
            <PasswordRepeatElement
              name="passwordRepeatElement"
              label="Password Repeat Element"
              passwordFieldName="passwordElement"
            />
            <RadioButtonGroup
              name="radioButtonGroup"
              label="Radio Button Group"
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />
            <SelectElement
              name="selectElement"
              label="Select Element"
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />
            <SliderElement name="sliderElement" label="Slider Element" />
            <SwitchElement name="switchElement" label="Switch Element" />
            <TextFieldElement
              name="textFieldName"
              label="Text Field Element"
              placeholder="Enter your name"
            />
            <TextareaAutosizeElement
              name="textAreaAutoSizeElement"
              label="Text Area Autosize Element"
              placeholder="Enter your message"
            />

            <ToggleButtonGroupElement
              name="toggleButtonGroupElement"
              label="Toggle Button Group Element"
              options={[
                {
                  id: "1",
                  label: "Option 1",
                },
                {
                  id: "2",
                  label: "Option 2",
                },
              ]}
            />
          </div>
        </FormProvider>

        <Card>
          <CardContent>
            <pre className="break-all">
              <code>{JSON.stringify(methods.watch(), null, 2)}</code>
            </pre>
          </CardContent>
        </Card>
      </DateFnsProvider>
    </div>
  );
};
