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


export interface Status {
    success: boolean,
    username: string,
    status: string,
    state: number
}

export interface SignedTx {
    success: boolean,
    status: string,
    signedTx: any
}

//PairResponce
export interface PairResponce {
    success: boolean,
    username: string,
    code: string
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
@Tags('Client Endpoints')
@Route('')
export class IndexController extends Controller {

    //remove api key


    /*
        Health endpoint
    */

    @Get('/status')
    public async health() {
        let tag = TAG + " | status | "
        try{


            let output:Status = {
                success: true,
                username: "test",
                status: 'keepkey unlocked',
                state: 3
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

    @Get('/pair/:code')
    public async pair() {
        let tag = TAG + " | pair | "
        try{


            let output:PairResponce = {
                success: true,
                username: "USERNAME",
                code:"1234"
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

    @Get('/user')
    public async user() {
        let tag = TAG + " | user | "
        try{


            let output:any = {
                success: true,
                username: "USERNAME",
                code:"1234"
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

    @Post('/sign')
    public async signTransaction() {
        let tag = TAG + " | signTransaction | "
        try{


            let output:SignedTx = {
                success: true,
                status: 'signed',
                signedTx:{foo:"bar"}
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
