import { Form, InputGroup } from "react-bootstrap";
import Label from "../../atoms/Label";
import Select from "../Select";

export const FilterSelect = ({
  label,
  setModel,
  ariaLabel,
  models,
  model,
  defOption,
}) => {
  return (
    <>
      <Label label={label}></Label>
      <Select
        aria-label={ariaLabel}
        onChange={(e) => setModel(e.target.value)}
        models={models}
        defOption={defOption}
        value={model}
      ></Select>
    </>
  );
};

export const FilterInputGroup = ({ text, ...props }) => {
  return (
    <InputGroup>
      <Form.Control {...props} />
      <InputGroup.Text>{text}</InputGroup.Text>
    </InputGroup>
  );
};
