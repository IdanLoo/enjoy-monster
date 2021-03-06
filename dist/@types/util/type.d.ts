import { GraphQLOutputType } from 'graphql';
export declare class Type {
    private __insertTypes;
    private __updateTypes;
    originalTypeOf(type: GraphQLOutputType): any;
    structureOf(type: GraphQLOutputType): {
        isNonNull: boolean;
        isArray: boolean;
        type: any;
    };
    inputTypeOf(type: GraphQLOutputType, isUpdate?: boolean): any;
}
declare const _default: Type;
export default _default;
