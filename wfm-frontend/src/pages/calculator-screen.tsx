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

  const [work_volume, setWorkload] = useState<number>();
  const [work_duration, setWorkPeriod] = useState<number>();
  const [workers1_profession, setRole_1] = useState<string>();
  const [workers1_amount, setCount_1] = useState<number>();
  const [min_workers1_amount, setMinCount_1] = useState<number>();
  const [workers1_pay, setSalary_1] = useState<number>();
  const [workers2_profession, setRole_2] = useState<string>();
  const [workers2_amount, setCount_2] = useState<number>();
  const [min_workers2_amount, setMinCount_2] = useState<number>();
  const [workers2_pay, setSalary_2] = useState<number>();

  const calculating = useAppSelector(isCalculating);
  const result = useAppSelector(getCalculatorResult);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!work_volume || !work_duration || !workers1_profession || !workers1_amount || !min_workers1_amount ||!workers1_pay ||
      !workers2_profession || !workers2_amount || !min_workers2_amount ||!workers2_pay) { // добавить доп. проверки
      return;
    }
    dispatch(postCalculatorInputsAction({
      work_volume, work_duration, workers1_profession, workers1_amount, min_workers1_amount, workers1_pay, workers2_profession, 
      workers2_amount, min_workers2_amount, workers2_pay,
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
              <label className="calculator__input-label" htmlFor="work_volume">Объём работы</label>
              <input value={work_volume} onChange={(e) => setWorkload(Number(e.target.value))} min="0"
                className="calculator__input" type="number" name="work_volume" id="work_volume"
              />
            </div>
            <PlusSVG />
            <div className="calculator__input-wrapper">
              <label className="calculator__input-label" htmlFor="work-period">Период работы</label>
              <input value={work_duration} onChange={(e) => setWorkPeriod(Number(e.target.value))} min="0"
                className="calculator__input" type="number" name="work-period" id="work-period"
              />
            </div>
            <PlusSVG />
            <div className="calculator__input-wrapper">
              <label className="calculator__input-label" htmlFor="workers">Работники</label>
              <div className="calculator__worker-inputs">
                  <div className="calculator__worker-input">
                    <input value={workers1_profession} onChange={(e) => setRole_1(String(e.target.value))}
                      className="worker-input__role" type="text" name="role" placeholder="Должность" id="role"
                    />
                    <input value={workers1_amount} onChange={(e) => setCount_1(Number(e.target.value))} min="0"
                      className="worker-input__count" type="number" name="count" placeholder="Количество" id="count"
                    />
                    <input value={min_workers1_amount} onChange={(e) => setMinCount_1(Number(e.target.value))} min="0"
                      className="worker-input__min-count" type="number" name="minCount" placeholder="Минимальное количество" id="minCount"
                    />
                    <input value={workers1_pay} onChange={(e) => setSalary_1(Number(e.target.value))} min="0"
                      className="worker-input__salary" type="number" name="salary" placeholder="Зарплата" id="salary"
                    />
                  </div>
              </div>
              <div className="calculator__worker-inputs">
                  <div className="calculator__worker-input">
                    <input value={workers2_profession} onChange={(e) => setRole_2(String(e.target.value))}
                      className="worker-input__role" type="text" name="role" placeholder="Должность" id="role"
                    />
                    <input value={workers2_amount} onChange={(e) => setCount_2(Number(e.target.value))} min="0"
                      className="worker-input__count" type="number" name="count" placeholder="Количество" id="count"
                    />
                    <input value={min_workers2_amount} onChange={(e) => setMinCount_2(Number(e.target.value))} min="0"
                      className="worker-input__min-count" type="number" name="minCount" placeholder="Минимальное количество" id="minCount"
                    />
                    <input value={workers2_pay} onChange={(e) => setSalary_2(Number(e.target.value))} min="0"
                      className="worker-input__salary" type="number" name="salary" placeholder="Зарплата" id="salary"
                    />
                  </div>
              </div>
            </div>
          </form>

          <div className="calculator__middle">
            <ArrowSVG />
            <button disabled={!work_volume|| !work_duration || !workers1_profession || !workers1_amount || !min_workers1_amount ||!workers1_pay ||
      !workers2_profession || !workers2_amount || !min_workers2_amount ||!workers2_pay} className='calculator__submit-btn btn-reset' type="submit" 
      form="calculator-form">Посчитать</button>
          </div>

          <div className="calculator__result-wrapper">
            <div className="calculator__result">
              <h3 className="calculator__result-title title-reset">Количество работников 1</h3>
              <div className="calculator__result-text">
                {calculating ? 'Подсчёт...' : result.workers1_final}
              </div>
            </div>
            <div className="calculator__result">
              <h3 className="calculator__result-title title-reset">Количество работников 2</h3>
              <div className="calculator__result-text">
                {calculating ? 'Подсчёт...' : result.workers2_final}
              </div>
            </div>
            <div className="calculator__result">
              <h3 className="calculator__result-title title-reset">Затраты</h3>
              <div className="calculator__result-text">
                {calculating ? 'Подсчёт...' : result.workers_pay}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
