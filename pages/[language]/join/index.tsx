import React from "react";
// import Head from "next/head";
import FirstStep from "../../../components/form-signup/first-step";
import SecondStep from "../../../components/form-signup/second-step";
import FinalStep from "../../../components/form-signup/final-step";
import FinishStep from "../../../components/form-signup/finish-step";
import { Box, Button, ButtonGroup, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

export default function Home() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({});
  const router = useRouter();

  React.useEffect(() => {
    const informA = localStorage.getItem("A");
    const informB = localStorage.getItem("B");
    setData({ ...informA, ...informB});
    console.log(data);
  }, []);

  const fisrtStep = useFormik({
    initialValues: {
      firstName: data?.fisrtName || "",
      lastName: data?.lastName || "",
      jobdesc: data?.jobdesc || [],
      gender: data?.gender || "",
      email: data?.email || "",
    },

    onSubmit: (values) => {
      localStorage.setItem("A", JSON.stringify(values));
    },
  });
  const secondStep = useFormik({
    initialValues: {
      haveLaptop: data?.haveLaptop || "",
      address: data?.address || "",
      mobile: data?.mobile || "",
    },

    onSubmit: (values) => {
      localStorage.setItem("B", JSON.stringify(values));
    },
  });

  const handleNextStep = async () => {
    if (step === 1) {
      await fisrtStep.handleSubmit();
      setStep(step + 1);
    }
    if(step === 2) {
      await secondStep.handleSubmit();
      const informA = localStorage.getItem("A");
      const informB = localStorage.getItem("B");
      await setData({ ...JSON.parse(informA), ...JSON.parse(informB) });
      setStep(step + 1);
      
    }
  };
  const handleBackStep = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    setStep(step + 1);
    localStorage.setItem("A", "");
    localStorage.setItem("B", "");
    setTimeout(() => {
      router.push("/en-US/movies/popular");
    }, 500);
  };

  return (
    <Container>
      {step === 1 && <FirstStep formik={fisrtStep} />}
      {step === 2 && <SecondStep formik={secondStep} />}
      {step === 3 && <FinalStep data={data} />}
      {step === 4 && <FinishStep />}
      <Box my="4" w="full" align="right">
        <ButtonGroup variant="solid" spacing="6">
          {step > 1 && step <= 3 && (
            <Button size="lg" onClick={handleBackStep}>
              Back
            </Button>
          )}
          {step < 3 && (
            <Button size="lg" onClick={handleNextStep}>
              Next
            </Button>
          )}
          {step === 3 && (
            <Button size="lg" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </Container>
  );
}
