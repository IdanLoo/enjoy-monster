import { GraphQLObjectType, GraphQLList } from "graphql";
import { ArgumentType } from '../util/args';
export declare type GraphQLUpdateTypeConfig = {
    type: GraphQLObjectType | GraphQLList<GraphQLObjectType>;
    args?: (args: ArgumentType) => ArgumentType;
    description?: string;
};
export default class GraphQLUpdateType {
    description: string;
    args: ArgumentType;
    type: any;
    resolve: (value: any, { newValue, ...args }: {
        [x: string]: any;
        newValue: any;
    }, ctx: any, info: any) => Promise<any>;
    private __type;
    private __originType;
    private __sqlDatabase;
    private __sqlTable;
    private __handler;
    private __newValueWith(args);
    constructor(config: GraphQLUpdateTypeConfig);
}
