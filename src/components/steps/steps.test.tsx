import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import IonSteps, { StepConfig, StepType } from './steps';

const sut = (props: StepConfig = defaultProps) => {
  return render(<IonSteps {...props} />);
};
const getStepById = (testId: string) => screen.getByTestId(testId);

const defaultValue: StepType[] = [
  {
    label: 'Step 1',
  },
  {
    label: 'Step 2',
  },
  {
    label: 'Step 3',
  },
];

const defaultProps: StepConfig = {
  current: 1,
  steps: defaultValue,
};

describe('Static IonStepComponent', () => {
  const stepsLabels = ['Step 1', 'Step 2', 'Step 3'];
  it.each(stepsLabels)(
    'should render step component with 3 steps',
    async (label: string) => {
      await sut();
      expect(screen.getByText(label)).toBeTruthy();
    }
  );
  it('should render first checked', async () => {
    await sut({
      current: defaultProps.current,
      steps: [
        {
          label: 'Step 1',
          status: 'checked',
        },
        {
          label: 'Step 2',
        },
        {
          label: 'Step 3',
        },
      ],
    });
    expect(screen.getByTestId('step-1-checked')).toBeTruthy();
    expect(getStepById('step-1-checked').className).toContain(`${'checked'}`);
  });
  it('should render first step checked and second with error and description', async () => {
    await sut({
      current: defaultProps.current,
      steps: [
        {
          label: 'Step 1',
          status: 'checked',
        },
        {
          label: 'Step 2',
          status: 'error',
          description: 'Error',
        },
        {
          label: 'Step 3',
        },
      ],
    });
    expect(screen.getByTestId('step-1-checked')).toBeTruthy();
    expect(getStepById('step-1-checked').className).toContain(`${'checked'}`);
    expect(screen.getByTestId('step-2-error')).toBeTruthy();
    expect(getStepById('step-2-error').className).toContain(`${'error'}`);
    expect(screen.getByText('Error').getAttribute('class')).toMatch(
      /description/
    );
  });
  const checkedStepsIds = [
    'step-1-checked',
    'step-2-checked',
    'step-3-checked',
  ];
  it.each(checkedStepsIds)(
    'should render step component with 3 checked steps',
    async (stepId: string) => {
      await sut({
        current: defaultProps.current,
        steps: [
          {
            label: 'Step 1',
            status: 'checked',
          },
          {
            label: 'Step 2',
            status: 'checked',
          },
          {
            label: 'Step 3',
            status: 'checked',
          },
        ],
      });
      expect(screen.getByTestId(stepId)).toBeTruthy();
      expect(getStepById(stepId).className).toContain(`${'checked'}`);
    }
  );
  const defaultStepsIds = [
    'step-1-selected',
    'step-2-default',
    'step-3-default',
  ];
  it.each(defaultStepsIds)(
    'should render disabled step component',
    async (stepId: string) => {
      await sut({ ...defaultProps, disabled: true });
      expect(screen.getByTestId(stepId)).toBeTruthy();
      expect(getStepById(stepId).className).toContain(`${'disabled-true'}`);
    }
  );
});

describe('Passing through the IonStepComponent', () => {
  it('should pass from step 1 to step 2', async () => {
    await sut();
    expect(getStepById('step-1-selected').className).toContain(`${'selected'}`);
    expect(getStepById('step-2-default').className).toContain(`${'default'}`);
    await sut({ ...defaultProps, current: 2 });
    expect(getStepById('step-1-checked').className).toContain(`${'checked'}`);
    expect(getStepById('step-2-selected').className).toContain(`${'selected'}`);
  });
  it('should back from step 2 to step 1', async () => {
    await sut({ ...defaultProps, current: 2 });
    expect(getStepById('step-1-checked').className).toContain(`${'checked'}`);
    expect(getStepById('step-2-selected').className).toContain(`${'selected'}`);
    await sut();
    expect(getStepById('step-1-selected').className).toContain(`${'selected'}`);
    expect(getStepById('step-2-default').className).toContain(`${'default'}`);
  });
  it('should go to step 3 when it be clicked', async () => {
    await sut({ ...defaultProps, clickable: true });
    fireEvent.click(screen.getByTestId('step-3-default'));
    expect(screen.findByTestId('step-3-selected')).toBeTruthy();
  });
  it('should to keep last step selected when try to pass forward', async () => {
    await sut({ ...defaultProps, current: 8 });
    expect(screen.findByTestId('step-3-selected')).toBeTruthy();
  });
});
