declare module 'kchelper' {
  export function isMobile(event: object): boolean;
  export function getFieldElement(fieldCode: string, isMobile: boolean | void): HTMLElement
  export function getFieldElements(fieldCode: string, isMobile: boolean | void): HTMLElement[]
  export function getSpaceElement(spaceId: string, isMobile: boolean | void): HTMLElement
  export function getRecord(isMobile: boolean | void): any | null
  export function setRecord(record: any, isMobile: boolean | void): void
  export function hideField(fieldCode: string, isMobile: boolean | void): void
  export function showField(fieldCode: string, isMobile: boolean | void): void
  export function getDateString(format: string, inputDate: Date | void): string
  
}