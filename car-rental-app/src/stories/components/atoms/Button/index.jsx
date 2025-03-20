import { Button, ToggleButton } from "react-bootstrap";

export const ButtonItem = ({ children, ...props }) => {
  return (
    <Button {...props} className="mt-auto w-100">
      {children}
    </Button>
  );
};

export const ToggleButtonItem = ({
  rentalState,
  children,
  clicked,
  ...props
}) => {
  return (
    <ToggleButton
      variant={rentalState ? "outline-success" : "outline-danger"}
      checked={clicked === rentalState}
      className="w-100"
      {...props}
    >
      {children}
    </ToggleButton>
  );
};
