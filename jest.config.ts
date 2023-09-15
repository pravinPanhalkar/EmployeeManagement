
import type {Config} from 'jest';

const config :Config = {
    verbose:true, 
    bail:true,
    clearMocks:true,
    displayName:{
        name:"TEST CASES",
        color:"redBright"
    },
    setupFilesAfterEnv:["<rootDir>/src/testUtils/setupTest.ts"],
    moduleDirectories:["node_modules","src"],
    moduleFileExtensions :["ts","json","tsx"],
    collectCoverageFrom:[
        "!<rootDir>/node_modules/**",
        "**/*.{tsx,ts}",
        "!**/*.{scss}",
    ],
    "testEnvironment": "jsdom"
  
    

}


export default config;