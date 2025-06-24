import AppErrorMessage from "../AppErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AppTextInput from "../AppTextInput.ios";

function AppFormPicker({ items, name, placeholder, icon, ...otherProps }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        onSelectedItem={(item) => setFieldValue(name, item)}
        items={items}
        placeholder={placeholder}
        icon={icon}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
