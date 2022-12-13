/** @jsx jsx */
import { jsx, Box, Text, Radio, Label, Input, Button, Heading } from "theme-ui";
import { rgba } from "polished";
import { useState } from "react";
import dotPattern from "assets/images/dot-pattern.png";

const presetAmounts = ["5-25", "25-50", "50-100", "100+"];

const DonationForm = () => {
  const [state, setState] = useState({
    numEmployees: "50-100",
    firstName: "John",
    lastName: "Doe",
    email: "email@gmail.com",
  });

  const handleAmount = (e) => {
    setState({
      ...state,
      numEmployees: e.target.value,
    });
  };

  const handleFirstName = (e) => {
    setState({
      ...state,
      firstName: e.target.value,
    });
  };

  const handleLastName = (e) => {
    setState({
      ...state,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Box sx={styles.formWrapper}>
      <Heading sx={styles.title}>Let's connect. Book meeting now!</Heading>
      <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
        <Box sx={styles.otherAmount}>
          <Text
            sx={{
              fontSize: 2,
              fontWeight: "bold",
              display: "block",
              paddingBottom: 2,
            }}
          >
            First Name
          </Text>
          <Label htmlFor="first-name" variant="styles.srOnly">
            First name
          </Label>
          <Input
            id="first-name"
            placeholder="Enter first name"
            onChange={handleFirstName}
          />

          <Text
            sx={{
              fontSize: 2,
              fontWeight: "bold",
              display: "block",
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            Last Name
          </Text>
          <Label htmlFor="last-name" variant="styles.srOnly">
            Last Name
          </Label>
          <Input
            id="last-name"
            placeholder="Enter Last Name"
            onChange={handleLastName}
          />

          <Text
            sx={{
              fontSize: 2,
              fontWeight: "bold",
              display: "block",
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            Email
          </Text>
          <Label htmlFor="email" variant="styles.srOnly">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter email address"
            onChange={handleEmail}
          />
        </Box>
        <Text
          sx={{
            fontSize: 2,
            fontWeight: "bold",
            display: "block",
            paddingBottom: 2,
          }}
        >
          Size of Company
        </Text>
        <Box sx={styles.presetAmounts}>
          {presetAmounts.map((amount, i) => (
            <Label
              key={i}
              className={state.numEmployees === amount ? "active" : ""}
            >
              <Radio
                value={amount}
                name="numEmployees"
                onChange={handleAmount}
                defaultChecked={state.amount === amount}
              />
              {amount}
            </Label>
          ))}
        </Box>
        <Box sx={styles.buttonGroup}>
          <Button variant="primary" sx={styles.submit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationForm;

const styles = {
  formWrapper: {
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 24px 50px rgba(54, 91, 125, 0.05)",
    p: ["26px", null, null, "35px 40px 50px"],
    position: "relative",
    "::before, ::after": {
      background: `url(${dotPattern}) no-repeat right top`,
      content: [null, null, null, null, null, `''`],
      position: "absolute",
      width: 302,
      height: 347,
      zIndex: -1,
    },
    "::before": {
      left: "-60px",
      bottom: 15,
    },
    "::after": {
      right: "-41px",
      top: "-30px",
    },
  },
  title: {
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    textAlign: ["center", null, null, null, "left"],
  },
  form: {
    label: {
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 400,
    },
  },
  radioGroup: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    flexDirection: ["column", null, null, "row"],
    mb: [5, null, null, 5],
    "> label": {
      alignItems: "center",
      fontSize: [1, null, null, "15px"],
      width: "auto",
      "+ label": {
        ml: [null, null, null, 4],
        mt: [2, null, null, 0],
      },
    },
  },
  presetAmounts: {
    display: "grid",
    alignItems: "center",
    marginBottom: 15,
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: ["7px", null, null, 2],
    mb: [3],
    label: {
      color: "textSecondary",
      border: (t) => `1px solid ${t.colors.borderColor}`,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: [1, 2, null, 3],
      lineHeight: 1.11,
      minHeight: [40, null, null, null, 50, 60],
      padding: 0,
      textAlign: "center",
      transition: "0.3s ease-in-out 0s",
      "> div": {
        position: "absolute",
        height: 0,
        opacity: 0,
        visibility: "hidden",
        width: 0,
      },
      "&.active": {
        backgroundColor: "#F5F4FF",
        borderColor: "primary",
        color: "#7B72F0",
      },
    },
  },
  otherAmount: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [45, null, null, 60, 50, 60],
      "::placeholder": {
        color: rgba("#02073E", 0.35),
      },
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    label: {
      span: {
        fontSize: [0, 1],
      },
    },
  },
  buttonGroup: {
    mt: [5, null, null, 8],
    span: {
      display: "flex",
      justifyContent: "center",
      color: rgba("#000", 0.4),
      fontWeight: "bold",
      fontSize: 1,
      lineHeight: 2.87,
    },
    button: {
      minHeight: [45, null, null, 60, 50, 60],
      width: "100%",
    },
  },
  googlePay: {
    backgroundColor: "#EDF2F7",
    minHeight: 60,
    py: 0,
    fontSize: [1, null, null, 2],
    img: {
      mr: 2,
      maxWidth: [23, 25, null, null, 25, "100%"],
    },
  },
};
