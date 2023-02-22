import React, { useEffect, useState } from 'react';
import IonIcon from '../icons/icons';
import {
  CircleStyle,
  LineStyle,
  DetailsStyle,
  StepsContainerStyle,
  StepStyle,
  StepDrawStyle,
} from './styles';

export interface StepProps {
  steps: any[];
  handleClick?: () => void;
}

export type StatusType = 'default' | 'selected' | 'checked' | 'error';

export interface StepType {
  label: string;
  description?: string;
  index?: number;
  status?: StatusType;
}

export type LineType = 'before' | 'after';

export type StepConfig = {
  current?: number;
  disabled?: boolean;
  steps: StepType[];
  clickable?: boolean;
};

export type StepCircle = {
  status?: StatusType;
  index?: number;
  steps: StepType[];
};

export type StepDetails = {
  label: string;
  description?: string;
  index?: number;
};

/* eslint-disable no-unused-vars */
enum Status {
  default = 'default',
  selected = 'selected',
  checked = 'checked',
  error = 'error',
}

function StepDraw({ status, index, steps }: StepCircle) {
  function lineVisibility(lineType: LineType): boolean {
    return !(lineType === 'before' ? index === 1 : index === steps.length);
  }

  function beforeStepIsChecked(index: number = 0): boolean {
    return steps[index - 2] && steps[index - 2].status === Status.checked;
  }

  function afterStepIsChecked(index: number = 0): boolean {
    if (status && status === Status.checked) return true;
    return steps[index + 2] && steps[index + 2].status !== Status.default;
  }

  return (
    <>
      <StepDrawStyle>
        {lineVisibility('before') && (
          <LineStyle bolded={beforeStepIsChecked(index)}></LineStyle>
        )}
        <CircleStyle>
          <span>
            {status === 'checked' ? <IonIcon type={'check'} /> : index}
          </span>
        </CircleStyle>
        {lineVisibility('after') && (
          <LineStyle bolded={afterStepIsChecked(index)}></LineStyle>
        )}
      </StepDrawStyle>
    </>
  );
}

function Details({ label, description, index }: StepDetails) {
  return (
    <>
      <DetailsStyle>
        <div className="label">{label}</div>
        {description && (
          <div className="description" data-testid={'description-' + index}>
            {description}
          </div>
        )}
      </DetailsStyle>
    </>
  );
}

const IonSteps = ({
  current = 1,
  steps,
  clickable = false,
  disabled = false,
}: StepConfig) => {
  const [stepsOriginais, setStepsOriginais] = useState<StepType[]>(steps);
  const [currentStep, setCurrentStep] = useState<number>(current);
  const [firstCatchStatus, setFirstCatchStatus] = useState(true);

  function handleClickGoesTo(index: number) {
    if (clickable && !disabled) setCurrentStep(index);
  }

  function stepStatus(step: StepType, currentIndex: number): StatusType {
    if (step.index && step.index < currentIndex) return Status.checked;
    if (step.index && step.index === currentIndex) return Status.selected;
    return Status.default;
  }

  function checkStartedStatus(
    step: StepType,
    currentIndex: number
  ): StatusType {
    return step.status ? step.status : stepStatus(step, currentIndex);
  }

  function changeStep(currentIndex: number): void {
    if (currentIndex < 1 || currentIndex > stepsOriginais.length) {
      return;
    }
    let stepsCopy = stepsOriginais.slice();
    stepsCopy = stepsCopy.map((step) => {
      return {
        ...step,
        status: firstCatchStatus
          ? checkStartedStatus(step, currentIndex)
          : stepStatus(step, currentIndex),
      };
    });
    setStepsOriginais(stepsCopy);
    setFirstCatchStatus(false);
  }

  function generateIndexsForStep(): void {
    let stepsCopy = stepsOriginais.slice();
    stepsCopy.forEach((step: StepType, index: number) => {
      step.index = index + 1;
    });
    setStepsOriginais(stepsCopy);
    changeStep(currentStep);
  }

  useEffect(() => {
    generateIndexsForStep();
  }, []);

  useEffect(() => {
    changeStep(currentStep);
  }, [currentStep]);

  return (
    <StepsContainerStyle data-testid="ion-step">
      {stepsOriginais &&
        stepsOriginais.map((step: StepType) => {
          return (
            <StepStyle
              key={step.index}
              status={step.status}
              disabled={disabled}
              clickable={clickable}
              data-testid={'step-' + step.index + '-' + step.status}
              onClick={() => handleClickGoesTo(step.index ? step.index : 0)}
            >
              <StepDraw
                status={step.status}
                index={step.index}
                steps={stepsOriginais}
              />
              <Details
                label={step.label}
                description={step.description}
                index={step.index}
              />
            </StepStyle>
          );
        })}
    </StepsContainerStyle>
  );
};

export default IonSteps;
