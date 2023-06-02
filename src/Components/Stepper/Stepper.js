import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box,
} from "@chakra-ui/react";

import './stepper.scss';

const steps = [
    { },
    { },
    { },
];

export default function StepperChakra() {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    });

    return (
        <Stepper size='lg' colorScheme='red' index={activeStep} orientation="vertical" height="400px" gap="0">
        {steps.map((step, index) => (
            <Step key={index}>
            <StepIndicator>
                <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
                />
            </StepIndicator>

            <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
            </Step>
        ))}
        </Stepper>
    );
}
