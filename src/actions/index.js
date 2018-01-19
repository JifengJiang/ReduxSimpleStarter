import {FETCH_DATA} from "./types";
import {createClient} from "contentful";
import * as envConfig from "../environment/config";

export const fetchData = (entryId) => {
    const client = createClient({
        space: envConfig.SPACE_ID,
        accessToken: envConfig.DELIVERY_ACCESS_TOKEN,
        resolveLinks: true
    });
    // const request = client.getEntries({'sys.id': entryId});
    const request = client.getEntry(entryId);
    console.log(request);
    return {
        type: FETCH_DATA,
        payload: request
    }
};
