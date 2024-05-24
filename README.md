# kchelper
A tool for kintone customization development.

## Install
```
npm install kchelper
```

## How to Use
```
import { function } from 'kchelper'
```

## Functions

### isMobile(event)
Return `true` or `false`

:::spoiler **Parameters**
| Params   | Required | Type     |          |
| -------- | -------- | -------- | -------- |
| event    | required | Object   | kintone event |
:::

### getFieldElement(fieldCode, isMobile)
Return kintone JavaScript API function according to param `isMobile` 
- false: `kintone.app.record.getFieldElement(fieldCode)`
- true: `kintone.mobile.app.record.getFieldElement(fieldCode)`

:::spoiler **Parameters**
| Params    | Required | Type     |          |
| --------- | -------- | -------- | -------- |
| fieldCode | Required | String   | Field code of target field |
| isMobile  | Optional | Boolean  | Default value: `false` |
:::

### getFieldElements(fieldCode, isMobile)
Return kintone JavaScript API function according to param `isMobile` 
- false: `kintone.app.getFieldElements(fieldCode)`
- true: `kintone.mobile.app.getFieldElements(fieldCode)`

:::spoiler **Parameters**
| Params    | Required | Type     |          |
| --------- | -------- | -------- | -------- |
| fieldCode | Required | String   | Field code of target field |
| isMobile  | Optional | Boolean  | Default value: `false` |
:::

### getSpaceElement(spaceId, isMobile)
Return kintone JavaScript API function according to param `isMobile` 
- false: `kintone.app.record.getSpaceElement(spaceId)`
- true: `kintone.mobile.app.record.getSpaceElement(spaceId)`

:::spoiler **Parameters**
| Params   | Required | Type     |          |
| -------- | -------- | -------- | -------- |
| spaceId  | Required | String   | The element ID of the Blank space field |
| isMobile | Optional | Boolean  | Default value: `false` |
:::

### getRecord(isMobile)
Return kintone JavaScript API function according to param `isMobile` 
- false: `kintone.app.record.get().record`
- true: `kintone.mobile.app.record.get().record`

:::spoiler **Parameters**
| Params   | Required | Type     |          |
| -------- | -------- | -------- | -------- |
| isMobile | Optional | Boolean  | Default value: `false` |
:::

### setRecord(record, isMobile)
Return kintone JavaScript API function according to param `isMobile` 
- false: `kintone.app.record.set({ record })`
- true: `kintone.mobile.app.record.set({ record })`

:::spoiler **Parameters**
| Params   | Required | Type     |          |
| -------- | -------- | -------- | -------- |
| record   | Required | JSON     | Specify the record data as JSON |
| isMobile | Optional | Boolean  | Default value: `false` |

:warning: The format of `record` is the same as the response for `kintone.app.record.get().record`
:::

### hideField(fieldCode, isMobile)
Return kintone JavaScript API function according to param `isMobile` to hide the target field.
- false: `kintone.app.record.setFieldShown(fieldCode, false)`
- true: `kintone.mobile.app.record.setFieldShown(fieldCode, false)`

:::spoiler **Parameters**
| Params    | Required | Type     |          |
| --------- | -------- | -------- | -------- |
| fieldCode | Required | String   | Field code of target field |
| isMobile  | Optional | Boolean  | Default value: `false` |
:::

### getDateString(format, date)
Return a formatted date string.

:::spoiler **Parameters**
| Params    | Required | Type        |          |
| --------- | -------- | ----------- | -------- |
| format    | Optional | String      | Spacify the returned date format.</br>Default value: `'yyyymmdd'` |
| date      | Optional | Date object | JavaScript `Date` object.</br>Default value: `new Date()` |
:::

:::spoiler **Available formats**
- `'yyyymmdd'`
- `'yymmdd'`
- `'yyyy-mm-dd'`
- `'yyyymm'`
- `'yymm'`
:::