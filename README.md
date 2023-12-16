# WFM-система (Брусника)
## Небольшое ТЗ от заказчика:
Для растущих организаций важно оценивать объем сотрудников и затраты на содержание персонала. 
В данном проекте необходимо создать математическую модель для структуры девелоперской компании, которая знает объемы производства на будущие периоды. 

Исходя из объемов и требований структуры, необходимо предложить метрики для разных отделов, так как часть может быть определена через объемы строительства, а другие части компании могут зависеть как от проектов развития, так и от численности. 

Итоговая математическая модель должна давать оценку наиболее эффективной структуры и численности под заданные объемы и оценивать затраты на персонал модельно. 

Модель также должна уметь перестраиваться исходя из изменений объемов и демонстрировать "перегруженность" или "недогруженность" персонала. 

Модель должна уметь генерировать план подбора, исходя из недостатка персонала и распределения объемов во времени в течение календарного года 


### ДЛЯ ЗАПУСКА 
Открыть в консоли папку wfmBackend и выполнить следующие команды:
1)pip install djangorestframework
2)pip install django-cors-headers
3)py manage.py runserver

Открыть в консоли папку wfm-frontend и выполнить следующие команды:
1)npm install axios
2)npm run start

После выполнения команд перейти по адресу полученному при npm run start. В данный момент регистрация и вход находятся по адресу /userfull.
После первого запуска выполнять только команды 3 и 2 соответственно. 

### Критерии приемки результата / продукта:
☝Модель пересчитывает структуру при уменьшении объемов 

☝Модель работает с изменением планов по объемам (увеличение или уменьшение, что приводит к изменению структуры) 

☝Модель генерирует оптимальную структуру, исходя из возможности совмещения позиций

### Ожидаемые результаты:
Рабочая программа (математическая модель), рассчитывающая структуру под заданные объемы работ с определенными критериями ограничений

### 1) Железные входные данные:
▶Объемы во времени: набор объемов (продаваемые метры - основа всего, строительные метры, земельные участки);

▶Перечень должностей (Специалист бухгалтерии - обычный, ведущий, тд..);

#### Дополнительно: проекты развития - обучение, цифровизация, it-проекты (нормируются не на объём, требуется "заложить модально"). 
#### Есть n должностей - часть под такой-то объем, есть x должностей - часть под другой объём... (Распределение объема между участниками);
### 2) Итог: Разрабатываем WFM-систему с простеньким функционалом. 
WFM (Workforce management) - system – это система для управления персоналом, позволяющая оценивать продуктивность работы, прогнозировать загрузку и потребность в персонале, планировать рабочее расписание сотрудников в зависимости от объема работы, квалификации персонала и проектов развития.

## 2. Аналитическая часть
### 1.1 Анализ предметной области:

![Screenshot_1](https://github.com/DanilkaCrazy/WFM-system-Brusnika-/assets/95550202/b56e0abf-1d9b-4929-83cb-7ff8f31a5a4a)


![image](https://github.com/DanilkaCrazy/WFM-system-Brusnika-/assets/95550202/f7351a90-f595-4e0c-bc60-5c301bf10ac0)

   
### 1.2 Анализ конкурентов: 
SWOT-анализ позволяет оценить текущее положение и потенциал каждой из рассматриваемых WFM систем. Компании могут использовать эту информацию для определения стратегий развития и улучшения своих продуктов.

![Screenshot_1](https://github.com/DanilkaCrazy/WFM-system-Brusnika-/assets/95550202/702dc37b-491b-47f3-86c1-81778280be0f)

https://disk.yandex.ru/d/kkWFqx0QlS4eNg

Конкурентный анализ — это сравнительный анализ бизнес-процессов, продуктов и стратегии конкурентов по ряду параметров:

![Screenshot_1](https://github.com/DanilkaCrazy/WFM-system-Brusnika-/assets/95550202/e5456333-d7a9-4c25-82eb-a9f742d0d311)


https://disk.yandex.ru/d/aG1Kk0pc4HJW1w

#### Российские WFM-системы:
Российские системы управления рабочим временем (WFM), разработанные в стране, обладают лучшей адаптацией к российскому законодательству в области труда. Такие продукты значительно более доступны по цене по сравнению с зарубежными аналогами. Базы данных, содержащие персональные данные, хранятся на серверах в России. Среди компаний, предлагающих свои собственные программные продукты в этой сфере, можно выделить Verme, Naumen, ABC Solutions.
Большинство российских предприятий предпочитают использовать собственные разработки и специализированные системы для реализации концепции управления рабочим временем. Это позволяет достичь целей WFM, используя универсальные программные решения, такие как Microsoft Office, благодаря принципу максимизации функциональности при минимальных затратах.

#### Иностранные WFM-системы
На рынке существует множество дилерских компаний, специализирующихся на внедрении зарубежных систем управления рабочим временем (WFM). Такие компании, как Verint Systems Inc., NICE, Teleopti WFM, SAP, Genesys и другие, предлагают широкий спектр программных продуктов. Эти решения обеспечивают возможность эффективного управления персоналом, прогнозирования потребности и спроса, автоматизации составления графиков работы, а также повышения качества обслуживания и общего уровня сервиса.

### 1.3 Портрет целевой аудитории:
1) Руководство компании "Брусника";
2) Эйчары и менеджеры компании "Брусника";
3) Сотрудники компании.

## Описание ролей:

![Роли](https://github.com/DanilkaCrazy/WFM-system-Brusnika-/assets/95550202/7caeb4f8-06b4-4265-bc9b-0d8e6f071439)




