import { TInterests } from "../types/TInterests";

export interface IProfile {
    about: {
        description: string
    },
    seekingFor: {
       text: string 
    },
    interests: TInterests[]
    short: [],
    location: {
        from: string,
        currentLocation: string
    }
}