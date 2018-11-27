import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name alex Second Name
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { alexSecondName } from '@ionic-native/alex-second-name';
 *
 *
 * constructor(private alexSecondName: alexSecondName) { }
 *
 * ...
 *
 *
 * this.alexSecondName.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AlexSecondName extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    coolMethod(arg1: string, arg2: number): Promise<any>;
}
