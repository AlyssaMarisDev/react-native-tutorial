import AppButton from "../AppButton";
import AppText from "../AppText";
import { useFormikContext } from "formik";

function AppFormSubmit({ title, style, textStyle, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton onPress={handleSubmit} style={style} {...otherProps}>
      <AppText style={textStyle}>{title}</AppText>
    </AppButton>
  );
}

export default AppFormSubmit;
