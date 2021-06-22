Минимальный набор готовых CSS-классов для повседневных задач по верстке.

## Установка

NPM:
`npm install macro-css`

Yarn:
`yarn add macro-css`

## Использование

Установить набор классов с помощью NPM или Yarn

### React

Подключить в любом месте index.js: `import 'macro-css';`

### SASS/SCSS

Открыть самый главный файл со стилями и дописать в самом начале: `@import 'macro-css';`

Внизу в таблице приведены примеры классов, которые можно использовать. Вместо символа "\*" укажите одну букву любой стороны. Если не указывать сторону, то отступы будут задаваться со всех сторон.

Сторона => сокращение:

- `left` => `l`
- `right` => `r`
- `top` => `t`
- `bottom` => `b`

### Например:

| Класс               | Значение                                                      |
| ------------------- | ------------------------------------------------------------- |
| `mr-10 mb-50`       | `margin-right: 10px; margin-bottom: 50px;`                    |
| `m-25`              | `margin: 25px;`                                               |
| `p-50`              | `padding: 50px;`                                              |
| `pr-10 mt-15 mb-15` | `padding-right: 10px; margin-top: 15px; margin-bottom: 15px;` |

Значение:

- `mt-10` - `margin-top: 10px`
- `mr-40` - `margin-right: 40px`

# Отступы margin

| Класс  | Значение         |
| ------ | ---------------- |
| m\*-5  | margin-\*: 5px;  |
| m\*-10 | margin-\*: 10px; |
| m\*-15 | margin-\*: 15px; |
| m\*-20 | margin-\*: 20px; |
| m\*-25 | margin-\*: 25px; |
| m\*-30 | margin-\*: 30px; |
| m\*-35 | margin-\*: 35px; |
| m\*-40 | margin-\*: 40px; |
| m\*-45 | margin-\*: 45px; |
| m\*-50 | margin-\*: 50px; |

# Отступы padding

| Класс  | Значение          |
| ------ | ----------------- |
| p\*-5  | padding-\*: 5px;  |
| p\*-10 | padding-\*: 10px; |
| p\*-15 | padding-\*: 15px; |
| p\*-20 | padding-\*: 20px; |
| p\*-25 | padding-\*: 25px; |
| p\*-30 | padding-\*: 30px; |
| p\*-35 | padding-\*: 35px; |
| p\*-40 | padding-\*: 40px; |
| p\*-45 | padding-\*: 45px; |
| p\*-50 | padding-\*: 50px; |

# Очистка базовых стилей

| Класс | Значение                                                                                                                                                       |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clear | Очищает базовые стили, которые устанавливает браузер для: `<a>, <ul>, <li>`. Также для всех (`*`) остальных элементов: `box-sizing: border-box; outline: none` |

# Flex, позиционирование, размер

| Класс           | Значение                        |
| --------------- | ------------------------------- |
| h100p           | height: 100%;                   |
| w100p           | width: 100%;                    |
| d-ib            | display: inline-block;          |
| d-if            | display: inline-flex;           |
| d-flex          | display: flex;                  |
| d-block         | display: block;                 |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-center  | justify-content: center;        |
| align-center    | align-items: center;            |
| align-end       | align-items: flex-end;          |
| align-start     | align-items: flex-start;        |
| flex-column     | flex-direction: column;         |
| flex-row        | flex-direction: row;            |
| flex-wrap       | flex-wrap: wrap;                |
| flex-auto       | flex: 1 1 auto;                 |
| flex            | flex: 1;                        |
| m-auto          | margin: auto;                   |
| ml-auto         | margin-left: auto;              |
| mr-auto         | margin-right: auto;             |
| text-center     | text-align: center;             |
| pos-r           | position: relative;             |
| pos-a           | position: absolute;             |

# Текст

| Класс           | Значение                                                        |
| --------------- | --------------------------------------------------------------- |
| text-center     | text-align: center;                                             |
| text-capitalize | text-transform: capitalize;                                     |
| text-uppercase  | text-transform: uppercase;                                      |
| text-lowercase  | text-transform: lowercase;                                      |
| text-truncate   | white-space: nowrap; overflow: hidden; text-overflow: ellipsis; |
| fw-bold         | font-weight: bold;                                              |

# Opacity

| Класс      | Значение      |
| ---------- | ------------- |
| opacity-1  | opacity: 0.1; |
| opacity-2  | opacity: 0.2; |
| opacity-3  | opacity: 0.3; |
| opacity-4  | opacity: 0.4; |
| opacity-5  | opacity: 0.5; |
| opacity-6  | opacity: 0.6; |
| opacity-7  | opacity: 0.7; |
| opacity-8  | opacity: 0.8; |
| opacity-9  | opacity: 0.9; |
| opacity-10 | opacity: 1;   |
