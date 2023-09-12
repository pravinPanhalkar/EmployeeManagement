
import type {Config} from 'jest';

const config :Config = {
    verbose:true, 
    bail:true,
    clearMocks:true,
    displayName:{
        name:"TEST CASES",
        color:"redBright"
    },
    moduleDirectories:["node_modules","src"],
    moduleFileExtensions :["js","ts","json","tsx"],
    collectCoverageFrom:[
        "!<rootDir>/node_modules/**",
        "**/*.{js,tsx,ts}",
        "!**/*.{scss}",
    ],
    

}


export default config;