import AppTextInput from "../AppTextInput.ios";
import AppErrorMessage from "../AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, placeholder, icon, ...otherProps }) {
  const { setFieldTouched, handleChange, values, errors, touched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        placeholder={placeholder}
        icon={icon}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
