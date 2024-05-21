import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test-utils';
import { IonSteps, StepConfig, StepType } from './steps';

const sut = (props: StepConfig = defaultProps) => {
  return renderWithTheme(<IonSteps {...props} />);
};
const getStepById = (testId: string) => screen.getByTestId(testId);

const defaultValue: StepType[] = [
  {
    stepNumber: 1,
    label: 'Step 1',
  },
  {
    stepNumber: 2,
    label: 'Step 2',
  },
  {
    stepNumber: 3,
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
      sut();
      expect(screen.getByText(label)).toBeTruthy();
    }
  );
  it('should render first step checked', async () => {
    const { container } = sut({
      current: defaultProps.current,
      steps: [
        {
          stepNumber: 1,
          label: 'Step 1',
          status: 'checked',
        },
        {
          stepNumber: 2,
          label: 'Step 2',
        },
        {
          stepNumber: 3,
          label: 'Step 3',
        },
      ],
    });
    expect(screen.getByTestId('step-1-checked')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should render second step with error and description', async () => {
    sut({
      current: defaultProps.current,
      steps: [
        {
          stepNumber: 1,
          label: 'Step 1',
          status: 'checked',
        },
        {
          stepNumber: 2,
          label: 'Step 2',
          status: 'error',
          description: 'Error',
        },
        {
          stepNumber: 3,
          label: 'Step 3',
        },
      ],
    });
    expect(screen.getByTestId('step-2-error')).toBeInTheDocument();
    expect(screen.getByText('Error')).toHaveClass('description');
  });
  const checkedStepsIds = [
    'step-1-checked',
    'step-2-checked',
    'step-3-checked',
  ];
  it.each(checkedStepsIds)(
    'should render step with id %s',
    async (stepId: string) => {
      sut({
        current: defaultProps.current,
        steps: [
          {
            stepNumber: 1,
            label: 'Step 1',
            status: 'checked',
          },
          {
            stepNumber: 2,
            label: 'Step 2',
            status: 'checked',
          },
          {
            stepNumber: 3,
            label: 'Step 3',
            status: 'checked',
          },
        ],
      });
      expect(screen.getByTestId(stepId)).toBeInTheDocument();
      expect(getStepById(stepId)).toMatchSnapshot();
    }
  );
  const defaultStepsIds = [
    'step-1-selected',
    'step-2-default',
    'step-3-default',
  ];
  it.each(defaultStepsIds)(
    'should render step %s disabled when the step component is disabled',
    async (stepId: string) => {
      sut({ ...defaultProps, disabled: true });
      expect(screen.getByTestId(stepId)).toBeInTheDocument();
      expect(getStepById(stepId)).toMatchSnapshot();
    }
  );
});

describe('Passing through the IonStepComponent', () => {
  it('should initiate from step 2', async () => {
    const { container } = sut({ ...defaultProps, current: 2 });
    expect(screen.getByTestId('step-2-selected')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should go to step 3 when it be clicked', async () => {
    sut({ ...defaultProps, clickable: true });
    await userEvent.click(screen.getByTestId('step-3-default'));
    expect(screen.getByTestId('step-3-selected')).toBeInTheDocument();
  });
  it('should to keep last step selected when try to pass forward', async () => {
    sut({ ...defaultProps, current: 8 });
    expect(await screen.getByTestId('step-3-selected')).toBeInTheDocument();
  });
  it('should to keep first step selected when try to rewind beyond the first', async () => {
    sut({ ...defaultProps, current: -3 });
    expect(screen.getByTestId('step-1-selected')).toBeInTheDocument();
  });
});
