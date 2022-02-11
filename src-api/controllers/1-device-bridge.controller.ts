/*

    Bridge REST endpoints



 */
let TAG = ' | API | '

const pjson = require('../../package.json');
const log = require('@pioneer-platform/loggerdog')()
const os = require("os")

//keepkey
const core = require('@shapeshiftoss/hdwallet-core')
const KK = require('@shapeshiftoss/hdwallet-keepkey-nodewebusb')
// eslint-disable-next-line react-hooks/rules-of-hooks
const adapter = KK.NodeWebUSBKeepKeyAdapter.useKeyring(new core.Keyring())

//rest-ts
import { Body, Controller, Get, Post, Route, Tags, SuccessResponse, Query, Request, Response, Header } from 'tsoa';


export interface Read {
    data:string
}

export interface Write {
    output: string
}


export interface Error{
    success:boolean
    tag:string
    e:any
}

export class ApiError extends Error {
    private statusCode: number;
    constructor(name: string, statusCode: number, message?: string) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
    }
}

//route
@Tags('Device Bridge')
@Route('')
export class bridgeController extends Controller {

    //remove api key


    /*
        Health endpoint
    */


    @Get('/exchange/device')
    public async readDevice() {
        let tag = TAG + " | readDevice | "
        try{


            let output:Read = {
                data:"23482394kjk3423489238429384923482"
            }

            return(output)
        }catch(e){
            let errorResp:Error = {
                success:false,
                tag,
                e
            }
            log.error(tag,"e: ",{errorResp})
            throw new ApiError("error",503,"error: "+e.toString());
        }
    }

    @Post('/exchange/device')
    public async writeDevice() {
        let tag = TAG + " | writeDevice | "
        try{


            let output:Write = {
                output:"23482394kjk3423489238429384923482"
            }

            return(output)
        }catch(e){
            let errorResp:Error = {
                success:false,
                tag,
                e
            }
            log.error(tag,"e: ",{errorResp})
            throw new ApiError("error",503,"error: "+e.toString());
        }
    }

}
