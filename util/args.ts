import { GraphQLOutputType, GraphQLList, GraphQLNonNull, GraphQLFieldMap } from "graphql";
import GraphQLObjectType from '../lib/GraphQLObjectType';

export type ArgumentType = {
  [name: string]: {
    type: GraphQLOutputType,
    [field: string]: any
  }
};

export class Args {
  of(type: GraphQLOutputType) {
    if (type instanceof GraphQLList) {
      return this.of(type.ofType);
    }

    if (type instanceof GraphQLObjectType) {
      return type.args;
    }

    return {};
  }

  sqlArgsOf(args: ArgumentType, withFields: any) {
    return Object.entries(args)
      .reduce((sqlArgs, [name, value]) => ({
        ...sqlArgs, [withFields[name].sqlColumn || name]: value
      }), {});
  }
}

export default new Args;