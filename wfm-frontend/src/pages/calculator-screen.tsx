import { FormEvent, FormEventHandler, useState } from 'react';
import Layout from '../components/layout';
import CalculatorSVG from '../components/svg/calculator-svg';
import PlusSVG from '../components/svg/plus-svg';
import ArrowSVG from '../components/svg/arrow-svg';
import { WorkerInput } from '../types/worker-input';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCalculatorResult, isCalculating } from '../store/calculator-process/selectors';
import { postCalculatorInputsAction } from '../store/api-actions';

const workerInitialState = {
  role: '',
  count: undefined,
  minCount: undefined,
  salary: undefined,
};

export default function CalculatorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [workload, setWorkload] = useState<number>();
  const [workPeriod, setWorkPeriod] = useState<number>();
  const [workerInputs, setWorkerInputs] = useState<Partial<WorkerInput>[]>([{ ...workerInitialState }]);

  const calculating = useAppSelector(isCalculating);
  const result = useAppSelector(getCalculatorResult);

  const handleAddWorkerButtonClick = () => {
    const newWorkerInput = { ...workerInitialState };
    setWorkerInputs([...workerInputs, newWorkerInput]);
  };

  const handleRemoveWorkerButtonClick = () => {
    const data = [...workerInputs];
    data.splice(workerInputs.length - 1, 1);
    setWorkerInputs(data);
  };

  const handleWorkerInputChange = (e: FormEvent<HTMLInputElement>, index: number) => {
    const data = [...workerInputs];
    data[index][e.currentTarget.name] = e.currentTarget.value;
    setWorkerInputs(data);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!workload || !workPeriod) { // добавить доп. проверки
      return;
    }
    for (const workerInput of workerInputs) {
      if (!workerInput.role || !workerInput.count || !workerInput.minCount || !workerInput.salary) {
        return;
      }
    }

    dispatch(postCalculatorInputsAction({
      workload,
      workPeriod,
      workerInputs: workerInputs as WorkerInput[],
    }));
  };

  return (
    <Layout>
      <article className="calculator main">
        <div className="main__title">
          <CalculatorSVG stroke='black' />
          <h1 className="main__title-text title-reset">Калькулятор метрик</h1>
        </div>
        <div className="calculator__wrapper">
          <form onSubmit={handleSubmit} id="calculator-form" className="calculator__form" action="#">
            <div className="calculator__input-wrapper">
              <label className="calculator__input-label" htmlFor="workload">Объём работы</label>
              <input value={workload} onChange={(e) => setWorkload(Number(e.target.value))} min="0"
                className="calculator__input" type="number" name="workload" id="workload"
              />
            </div>
            <PlusSVG />
            <div className="calculator__input-wrapper">
              <label className="calculator__input-label" htmlFor="work-period">Период работы</label>
              <input value={workPeriod} onChange={(e) => setWorkPeriod(Number(e.target.value))} min="0"
                className="calculator__input" type="number" name="work-period" id="work-period"
              />
            </div>
            <PlusSVG />
            <div className="calculator__input-wrapper">
              <label className="calculator__input-label" htmlFor="workers">Работники</label>
              <div className="calculator__worker-inputs">
                {workerInputs.map((workerInput, index) => (
                  // workerInputs - условный стек, так что ничего критичного
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="calculator__worker-input">
                    <input value={workerInput.role} onChange={(e) => handleWorkerInputChange(e, index)}
                      className="worker-input__role" type="text" name="role" placeholder="Должность" id="role"
                    />
                    <input value={workerInput.count} onChange={(e) => handleWorkerInputChange(e, index)} min="0"
                      className="worker-input__count" type="number" name="count" placeholder="Количество" id="count"
                    />
                    <input value={workerInput.minCount} onChange={(e) => handleWorkerInputChange(e, index)} min="0"
                      className="worker-input__min-count" type="number" name="minCount" placeholder="Минимальное количество" id="minCount"
                    />
                    <input value={workerInput.salary} onChange={(e) => handleWorkerInputChange(e, index)} min="0"
                      className="worker-input__salary" type="number" name="salary" placeholder="Зарплата" id="salary"
                    />
                  </div>
                ))}
              </div>
              <div className="calculator__worker-btns">
                <button onClick={handleRemoveWorkerButtonClick} className="calculator__worker-remove-btn btn-reset" type="button">Удалить</button>
                <button onClick={handleAddWorkerButtonClick} className="calculator__worker-add-btn btn-reset" type="button">Добавить</button>
              </div>
            </div>
          </form>

          <div className="calculator__middle">
            <ArrowSVG />
            <button disabled={!workload || !workPeriod} className='calculator__submit-btn btn-reset' type="submit" form="calculator-form">Посчитать</button>
          </div>

          <div className="calculator__result-wrapper">
            <div className="calculator__result">
              <h3 className="calculator__result-title title-reset">Количество работников</h3>
              <div className="calculator__result-text">
                {calculating ? 'Подсчёт...' : result.workersCount}
              </div>
            </div>
            <div className="calculator__result">
              <h3 className="calculator__result-title title-reset">Затраты</h3>
              <div className="calculator__result-text">
                {calculating ? 'Подсчёт...' : result.expenses}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
