import ModbusRTU from 'modbus-serial';
import { SerialPort } from 'serialport';
import { Seneca } from '../workflows/GateX';

export interface IDispenser {
  connection: SerialPort | Promise<Seneca>;
  execute(callee: any, bindFunction?: any, calleeArgs?: any): Promise<any>;
  executeInPriority(callee: any, bindFunction?: any, calleeArgs?: any): Promise<any>;
  resetQueue?(): void;
  disconnect(callback: any): void;
  checkType?(): any;
  switchToRemote?(): any;
  switchToLocal?(): any;
  elockStatus?(): any;
  elockUnlock?(): any;
  elockReset?(): any;
  elockLock?(): any;
  totalizer?(): any;
  readStatus?(): any;
  pumpStart?(): any;
  pumpStop?(): any;
  hasExternalPump?(): any;
  readExternalPumpStatus?(): any;
  startExternalPump?(): any;
  stopExternalPump?(): any;
  authorizeSale?(): any;
  setPreset?(quantity: number): any;
  readPreset?(): any;
  readAuthorization?(): any;
  cancelPreset?(): any;
  readSale?(): any;
  suspendSale?(): any;
  resumeSale?(): any;
  clearSale?(): any;
  printReceipt?(printObj: any): any;
  printOrder?(printObj: any): any;
  processStatus?(res: string): any;
  rfidType?(res: string): any;
  rfidStatus?(res: string): any;
  processRFIDresponse?(res: string): any;
  processElockStatus?(status: string): any;
  processStatusMapping?(status: string, statuses: any): any;
  processCommand?(res: string, args: any, fnName: string): any;
  processReadSale?(res: string): any;
  processTotalizer?(res: string): any;
  processTotalizerWithBatch?(res: string): TotalizerResponse;
  processReadPreset?(res: string): any;
  processResponse?(response: string[], exponentCut: number, mantessaCut: number): any;
  processExternalPump?(res: string): boolean;
  hasChecksBeforePumpStart?(res: string): boolean;
  isPumpStopped?(res: string): boolean;
  isReadyForPreset?(res: string): boolean;
  isPresetVerified?(res: string, quantity: number): boolean;
  isDispensing?(res: string): boolean;
  isIdle?(res: string): boolean;
  isSaleCloseable?(res: string): boolean;
  isSaleSuspended?(res: string): boolean;
  isOrderComplete?(res: string, quantity: number): any;
  isNozzleOnHook?(res: string): boolean;
  isNozzleOffHook?(res: string): boolean;
  isOnline?(res: string): boolean;
  isPrinterAvailable?(res: string): boolean;
  cutStringFromLast?(str: string, cutLength: number, cutFromLast: boolean): any;
  hex2a?(hex: string): string;
  hex2bin?(data: string): string;
}


export type DispenserOptions = {
  dispenserType: string;
  hardwareId: string;
  attributeId: string;
  baudRate?: number;
  kFactor?: number;
  printer?: PrinterOptions;
  modbus?: ModbusOptions;
};

export type ModbusOptions = {
  timeout: number;
  deviceId: number;
  overflowRegister: number;
  pulseRegister: number;
  debug: boolean;
}

export type PrinterOptions = {
  printerType: string;
  hardwareId: string;
  attributeId: string;
  baudRate?: number;
};


export type TotalizerResponse = {
  totalizer: number;
  batchNumber?: number;
  timestamp: number;
}

export type VolumeResponse = {
  volume: number;
  litersPerMinute: number;
}