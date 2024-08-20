import { scopeData } from "temp/DummyData"
import { type TScope } from "types/DataTypes";

export function fetchAllScopes() : TScope[] {
    return scopeData;
}