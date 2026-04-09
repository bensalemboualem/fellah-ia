
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Org
 * 
 */
export type Org = $Result.DefaultSelection<Prisma.$OrgPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model CreditWallet
 * 
 */
export type CreditWallet = $Result.DefaultSelection<Prisma.$CreditWalletPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model UsageLedger
 * 
 */
export type UsageLedger = $Result.DefaultSelection<Prisma.$UsageLedgerPayload>
/**
 * Model CreditReservation
 * 
 */
export type CreditReservation = $Result.DefaultSelection<Prisma.$CreditReservationPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orgs
 * const orgs = await prisma.org.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orgs
   * const orgs = await prisma.org.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.org`: Exposes CRUD operations for the **Org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgs
    * const orgs = await prisma.org.findMany()
    * ```
    */
  get org(): Prisma.OrgDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs>;

  /**
   * `prisma.creditWallet`: Exposes CRUD operations for the **CreditWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditWallets
    * const creditWallets = await prisma.creditWallet.findMany()
    * ```
    */
  get creditWallet(): Prisma.CreditWalletDelegate<ExtArgs>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs>;

  /**
   * `prisma.usageLedger`: Exposes CRUD operations for the **UsageLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageLedgers
    * const usageLedgers = await prisma.usageLedger.findMany()
    * ```
    */
  get usageLedger(): Prisma.UsageLedgerDelegate<ExtArgs>;

  /**
   * `prisma.creditReservation`: Exposes CRUD operations for the **CreditReservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditReservations
    * const creditReservations = await prisma.creditReservation.findMany()
    * ```
    */
  get creditReservation(): Prisma.CreditReservationDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Org: 'Org',
    User: 'User',
    ApiKey: 'ApiKey',
    CreditWallet: 'CreditWallet',
    CreditTransaction: 'CreditTransaction',
    UsageLedger: 'UsageLedger',
    CreditReservation: 'CreditReservation',
    Conversation: 'Conversation',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "org" | "user" | "apiKey" | "creditWallet" | "creditTransaction" | "usageLedger" | "creditReservation" | "conversation" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Org: {
        payload: Prisma.$OrgPayload<ExtArgs>
        fields: Prisma.OrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findFirst: {
            args: Prisma.OrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findMany: {
            args: Prisma.OrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          create: {
            args: Prisma.OrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          createMany: {
            args: Prisma.OrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          delete: {
            args: Prisma.OrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          update: {
            args: Prisma.OrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          deleteMany: {
            args: Prisma.OrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          aggregate: {
            args: Prisma.OrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrg>
          }
          groupBy: {
            args: Prisma.OrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgCountArgs<ExtArgs>
            result: $Utils.Optional<OrgCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      CreditWallet: {
        payload: Prisma.$CreditWalletPayload<ExtArgs>
        fields: Prisma.CreditWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          findFirst: {
            args: Prisma.CreditWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          findMany: {
            args: Prisma.CreditWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>[]
          }
          create: {
            args: Prisma.CreditWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          createMany: {
            args: Prisma.CreditWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>[]
          }
          delete: {
            args: Prisma.CreditWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          update: {
            args: Prisma.CreditWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          deleteMany: {
            args: Prisma.CreditWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditWalletPayload>
          }
          aggregate: {
            args: Prisma.CreditWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditWallet>
          }
          groupBy: {
            args: Prisma.CreditWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditWalletCountArgs<ExtArgs>
            result: $Utils.Optional<CreditWalletCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      UsageLedger: {
        payload: Prisma.$UsageLedgerPayload<ExtArgs>
        fields: Prisma.UsageLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          findFirst: {
            args: Prisma.UsageLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          findMany: {
            args: Prisma.UsageLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>[]
          }
          create: {
            args: Prisma.UsageLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          createMany: {
            args: Prisma.UsageLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>[]
          }
          delete: {
            args: Prisma.UsageLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          update: {
            args: Prisma.UsageLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          deleteMany: {
            args: Prisma.UsageLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsageLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLedgerPayload>
          }
          aggregate: {
            args: Prisma.UsageLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageLedger>
          }
          groupBy: {
            args: Prisma.UsageLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<UsageLedgerCountAggregateOutputType> | number
          }
        }
      }
      CreditReservation: {
        payload: Prisma.$CreditReservationPayload<ExtArgs>
        fields: Prisma.CreditReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          findFirst: {
            args: Prisma.CreditReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          findMany: {
            args: Prisma.CreditReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>[]
          }
          create: {
            args: Prisma.CreditReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          createMany: {
            args: Prisma.CreditReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>[]
          }
          delete: {
            args: Prisma.CreditReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          update: {
            args: Prisma.CreditReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          deleteMany: {
            args: Prisma.CreditReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditReservationPayload>
          }
          aggregate: {
            args: Prisma.CreditReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditReservation>
          }
          groupBy: {
            args: Prisma.CreditReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditReservationCountArgs<ExtArgs>
            result: $Utils.Optional<CreditReservationCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrgCountOutputType
   */

  export type OrgCountOutputType = {
    users: number
    creditTransactions: number
    usageLedger: number
  }

  export type OrgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrgCountOutputTypeCountUsersArgs
    creditTransactions?: boolean | OrgCountOutputTypeCountCreditTransactionsArgs
    usageLedger?: boolean | OrgCountOutputTypeCountUsageLedgerArgs
  }

  // Custom InputTypes
  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgCountOutputType
     */
    select?: OrgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountUsageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLedgerWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiKeys: number
    creditTransactions: number
    usageLedger: number
    conversations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    creditTransactions?: boolean | UserCountOutputTypeCountCreditTransactionsArgs
    usageLedger?: boolean | UserCountOutputTypeCountUsageLedgerArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLedgerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
    usageLedger: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
    usageLedger?: boolean | ConversationCountOutputTypeCountUsageLedgerArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountUsageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLedgerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Org
   */

  export type AggregateOrg = {
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  export type OrgMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrgCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrgMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrgMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrgCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Org to aggregate.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orgs
    **/
    _count?: true | OrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMaxAggregateInputType
  }

  export type GetOrgAggregateType<T extends OrgAggregateArgs> = {
        [P in keyof T & keyof AggregateOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrg[P]>
      : GetScalarType<T[P], AggregateOrg[P]>
  }




  export type OrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgWhereInput
    orderBy?: OrgOrderByWithAggregationInput | OrgOrderByWithAggregationInput[]
    by: OrgScalarFieldEnum[] | OrgScalarFieldEnum
    having?: OrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgCountAggregateInputType | true
    _min?: OrgMinAggregateInputType
    _max?: OrgMaxAggregateInputType
  }

  export type OrgGroupByOutputType = {
    id: string
    name: string
    slug: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  type GetOrgGroupByPayload<T extends OrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgGroupByOutputType[P]>
            : GetScalarType<T[P], OrgGroupByOutputType[P]>
        }
      >
    >


  export type OrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Org$usersArgs<ExtArgs>
    creditTransactions?: boolean | Org$creditTransactionsArgs<ExtArgs>
    usageLedger?: boolean | Org$usageLedgerArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["org"]>

  export type OrgSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Org$usersArgs<ExtArgs>
    creditTransactions?: boolean | Org$creditTransactionsArgs<ExtArgs>
    usageLedger?: boolean | Org$usageLedgerArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Org"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
      usageLedger: Prisma.$UsageLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["org"]>
    composites: {}
  }

  type OrgGetPayload<S extends boolean | null | undefined | OrgDefaultArgs> = $Result.GetResult<Prisma.$OrgPayload, S>

  type OrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrgCountAggregateInputType | true
    }

  export interface OrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Org'], meta: { name: 'Org' } }
    /**
     * Find zero or one Org that matches the filter.
     * @param {OrgFindUniqueArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgFindUniqueArgs>(args: SelectSubset<T, OrgFindUniqueArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Org that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrgFindUniqueOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Org that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgFindFirstArgs>(args?: SelectSubset<T, OrgFindFirstArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Org that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orgs
     * const orgs = await prisma.org.findMany()
     * 
     * // Get first 10 Orgs
     * const orgs = await prisma.org.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgWithIdOnly = await prisma.org.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgFindManyArgs>(args?: SelectSubset<T, OrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Org.
     * @param {OrgCreateArgs} args - Arguments to create a Org.
     * @example
     * // Create one Org
     * const Org = await prisma.org.create({
     *   data: {
     *     // ... data to create a Org
     *   }
     * })
     * 
     */
    create<T extends OrgCreateArgs>(args: SelectSubset<T, OrgCreateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orgs.
     * @param {OrgCreateManyArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgCreateManyArgs>(args?: SelectSubset<T, OrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orgs and returns the data saved in the database.
     * @param {OrgCreateManyAndReturnArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Org.
     * @param {OrgDeleteArgs} args - Arguments to delete one Org.
     * @example
     * // Delete one Org
     * const Org = await prisma.org.delete({
     *   where: {
     *     // ... filter to delete one Org
     *   }
     * })
     * 
     */
    delete<T extends OrgDeleteArgs>(args: SelectSubset<T, OrgDeleteArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Org.
     * @param {OrgUpdateArgs} args - Arguments to update one Org.
     * @example
     * // Update one Org
     * const org = await prisma.org.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgUpdateArgs>(args: SelectSubset<T, OrgUpdateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orgs.
     * @param {OrgDeleteManyArgs} args - Arguments to filter Orgs to delete.
     * @example
     * // Delete a few Orgs
     * const { count } = await prisma.org.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgDeleteManyArgs>(args?: SelectSubset<T, OrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgUpdateManyArgs>(args: SelectSubset<T, OrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Org.
     * @param {OrgUpsertArgs} args - Arguments to update or create a Org.
     * @example
     * // Update or create a Org
     * const org = await prisma.org.upsert({
     *   create: {
     *     // ... data to create a Org
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Org we want to update
     *   }
     * })
     */
    upsert<T extends OrgUpsertArgs>(args: SelectSubset<T, OrgUpsertArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgCountArgs} args - Arguments to filter Orgs to count.
     * @example
     * // Count the number of Orgs
     * const count = await prisma.org.count({
     *   where: {
     *     // ... the filter for the Orgs we want to count
     *   }
     * })
    **/
    count<T extends OrgCountArgs>(
      args?: Subset<T, OrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgAggregateArgs>(args: Subset<T, OrgAggregateArgs>): Prisma.PrismaPromise<GetOrgAggregateType<T>>

    /**
     * Group by Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgGroupByArgs['orderBy'] }
        : { orderBy?: OrgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Org model
   */
  readonly fields: OrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Org.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Org$usersArgs<ExtArgs> = {}>(args?: Subset<T, Org$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    creditTransactions<T extends Org$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Org$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    usageLedger<T extends Org$usageLedgerArgs<ExtArgs> = {}>(args?: Subset<T, Org$usageLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Org model
   */ 
  interface OrgFieldRefs {
    readonly id: FieldRef<"Org", 'String'>
    readonly name: FieldRef<"Org", 'String'>
    readonly slug: FieldRef<"Org", 'String'>
    readonly isActive: FieldRef<"Org", 'Boolean'>
    readonly createdAt: FieldRef<"Org", 'DateTime'>
    readonly updatedAt: FieldRef<"Org", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Org findUnique
   */
  export type OrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findUniqueOrThrow
   */
  export type OrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findFirst
   */
  export type OrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findFirstOrThrow
   */
  export type OrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findMany
   */
  export type OrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Orgs to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org create
   */
  export type OrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to create a Org.
     */
    data: XOR<OrgCreateInput, OrgUncheckedCreateInput>
  }

  /**
   * Org createMany
   */
  export type OrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Org createManyAndReturn
   */
  export type OrgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Org update
   */
  export type OrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to update a Org.
     */
    data: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
    /**
     * Choose, which Org to update.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org updateMany
   */
  export type OrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
  }

  /**
   * Org upsert
   */
  export type OrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The filter to search for the Org to update in case it exists.
     */
    where: OrgWhereUniqueInput
    /**
     * In case the Org found by the `where` argument doesn't exist, create a new Org with this data.
     */
    create: XOR<OrgCreateInput, OrgUncheckedCreateInput>
    /**
     * In case the Org was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
  }

  /**
   * Org delete
   */
  export type OrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter which Org to delete.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org deleteMany
   */
  export type OrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgs to delete
     */
    where?: OrgWhereInput
  }

  /**
   * Org.users
   */
  export type Org$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Org.creditTransactions
   */
  export type Org$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * Org.usageLedger
   */
  export type Org$usageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    where?: UsageLedgerWhereInput
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    cursor?: UsageLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * Org without action
   */
  export type OrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    orgId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    orgId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    orgId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    orgId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    usageLedger?: boolean | User$usageLedgerArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    usageLedger?: boolean | User$usageLedgerArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      wallet: Prisma.$CreditWalletPayload<ExtArgs> | null
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
      usageLedger: Prisma.$UsageLedgerPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      orgId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany"> | Null>
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    creditTransactions<T extends User$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    usageLedger<T extends User$usageLedgerArgs<ExtArgs> = {}>(args?: Subset<T, User$usageLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findMany"> | Null>
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly orgId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    where?: CreditWalletWhereInput
  }

  /**
   * User.creditTransactions
   */
  export type User$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * User.usageLedger
   */
  export type User$usageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    where?: UsageLedgerWhereInput
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    cursor?: UsageLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    name: number
    isActive: number
    lastUsedAt: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    lastUsedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    name: string
    isActive: boolean
    lastUsedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    userId: string
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      isActive: boolean
      lastUsedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */ 
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly userId: FieldRef<"ApiKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model CreditWallet
   */

  export type AggregateCreditWallet = {
    _count: CreditWalletCountAggregateOutputType | null
    _avg: CreditWalletAvgAggregateOutputType | null
    _sum: CreditWalletSumAggregateOutputType | null
    _min: CreditWalletMinAggregateOutputType | null
    _max: CreditWalletMaxAggregateOutputType | null
  }

  export type CreditWalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type CreditWalletSumAggregateOutputType = {
    balance: number | null
  }

  export type CreditWalletMinAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CreditWalletMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CreditWalletCountAggregateOutputType = {
    id: number
    balance: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CreditWalletAvgAggregateInputType = {
    balance?: true
  }

  export type CreditWalletSumAggregateInputType = {
    balance?: true
  }

  export type CreditWalletMinAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CreditWalletMaxAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CreditWalletCountAggregateInputType = {
    id?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CreditWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditWallet to aggregate.
     */
    where?: CreditWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditWallets to fetch.
     */
    orderBy?: CreditWalletOrderByWithRelationInput | CreditWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditWallets
    **/
    _count?: true | CreditWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditWalletMaxAggregateInputType
  }

  export type GetCreditWalletAggregateType<T extends CreditWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditWallet[P]>
      : GetScalarType<T[P], AggregateCreditWallet[P]>
  }




  export type CreditWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWalletWhereInput
    orderBy?: CreditWalletOrderByWithAggregationInput | CreditWalletOrderByWithAggregationInput[]
    by: CreditWalletScalarFieldEnum[] | CreditWalletScalarFieldEnum
    having?: CreditWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditWalletCountAggregateInputType | true
    _avg?: CreditWalletAvgAggregateInputType
    _sum?: CreditWalletSumAggregateInputType
    _min?: CreditWalletMinAggregateInputType
    _max?: CreditWalletMaxAggregateInputType
  }

  export type CreditWalletGroupByOutputType = {
    id: string
    balance: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CreditWalletCountAggregateOutputType | null
    _avg: CreditWalletAvgAggregateOutputType | null
    _sum: CreditWalletSumAggregateOutputType | null
    _min: CreditWalletMinAggregateOutputType | null
    _max: CreditWalletMaxAggregateOutputType | null
  }

  type GetCreditWalletGroupByPayload<T extends CreditWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditWalletGroupByOutputType[P]>
            : GetScalarType<T[P], CreditWalletGroupByOutputType[P]>
        }
      >
    >


  export type CreditWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditWallet"]>

  export type CreditWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditWallet"]>

  export type CreditWalletSelectScalar = {
    id?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CreditWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["creditWallet"]>
    composites: {}
  }

  type CreditWalletGetPayload<S extends boolean | null | undefined | CreditWalletDefaultArgs> = $Result.GetResult<Prisma.$CreditWalletPayload, S>

  type CreditWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditWalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditWalletCountAggregateInputType | true
    }

  export interface CreditWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditWallet'], meta: { name: 'CreditWallet' } }
    /**
     * Find zero or one CreditWallet that matches the filter.
     * @param {CreditWalletFindUniqueArgs} args - Arguments to find a CreditWallet
     * @example
     * // Get one CreditWallet
     * const creditWallet = await prisma.creditWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditWalletFindUniqueArgs>(args: SelectSubset<T, CreditWalletFindUniqueArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditWallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditWalletFindUniqueOrThrowArgs} args - Arguments to find a CreditWallet
     * @example
     * // Get one CreditWallet
     * const creditWallet = await prisma.creditWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletFindFirstArgs} args - Arguments to find a CreditWallet
     * @example
     * // Get one CreditWallet
     * const creditWallet = await prisma.creditWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditWalletFindFirstArgs>(args?: SelectSubset<T, CreditWalletFindFirstArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletFindFirstOrThrowArgs} args - Arguments to find a CreditWallet
     * @example
     * // Get one CreditWallet
     * const creditWallet = await prisma.creditWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditWallets
     * const creditWallets = await prisma.creditWallet.findMany()
     * 
     * // Get first 10 CreditWallets
     * const creditWallets = await prisma.creditWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditWalletWithIdOnly = await prisma.creditWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditWalletFindManyArgs>(args?: SelectSubset<T, CreditWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditWallet.
     * @param {CreditWalletCreateArgs} args - Arguments to create a CreditWallet.
     * @example
     * // Create one CreditWallet
     * const CreditWallet = await prisma.creditWallet.create({
     *   data: {
     *     // ... data to create a CreditWallet
     *   }
     * })
     * 
     */
    create<T extends CreditWalletCreateArgs>(args: SelectSubset<T, CreditWalletCreateArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditWallets.
     * @param {CreditWalletCreateManyArgs} args - Arguments to create many CreditWallets.
     * @example
     * // Create many CreditWallets
     * const creditWallet = await prisma.creditWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditWalletCreateManyArgs>(args?: SelectSubset<T, CreditWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditWallets and returns the data saved in the database.
     * @param {CreditWalletCreateManyAndReturnArgs} args - Arguments to create many CreditWallets.
     * @example
     * // Create many CreditWallets
     * const creditWallet = await prisma.creditWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditWallets and only return the `id`
     * const creditWalletWithIdOnly = await prisma.creditWallet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditWallet.
     * @param {CreditWalletDeleteArgs} args - Arguments to delete one CreditWallet.
     * @example
     * // Delete one CreditWallet
     * const CreditWallet = await prisma.creditWallet.delete({
     *   where: {
     *     // ... filter to delete one CreditWallet
     *   }
     * })
     * 
     */
    delete<T extends CreditWalletDeleteArgs>(args: SelectSubset<T, CreditWalletDeleteArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditWallet.
     * @param {CreditWalletUpdateArgs} args - Arguments to update one CreditWallet.
     * @example
     * // Update one CreditWallet
     * const creditWallet = await prisma.creditWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditWalletUpdateArgs>(args: SelectSubset<T, CreditWalletUpdateArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditWallets.
     * @param {CreditWalletDeleteManyArgs} args - Arguments to filter CreditWallets to delete.
     * @example
     * // Delete a few CreditWallets
     * const { count } = await prisma.creditWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditWalletDeleteManyArgs>(args?: SelectSubset<T, CreditWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditWallets
     * const creditWallet = await prisma.creditWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditWalletUpdateManyArgs>(args: SelectSubset<T, CreditWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditWallet.
     * @param {CreditWalletUpsertArgs} args - Arguments to update or create a CreditWallet.
     * @example
     * // Update or create a CreditWallet
     * const creditWallet = await prisma.creditWallet.upsert({
     *   create: {
     *     // ... data to create a CreditWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditWallet we want to update
     *   }
     * })
     */
    upsert<T extends CreditWalletUpsertArgs>(args: SelectSubset<T, CreditWalletUpsertArgs<ExtArgs>>): Prisma__CreditWalletClient<$Result.GetResult<Prisma.$CreditWalletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletCountArgs} args - Arguments to filter CreditWallets to count.
     * @example
     * // Count the number of CreditWallets
     * const count = await prisma.creditWallet.count({
     *   where: {
     *     // ... the filter for the CreditWallets we want to count
     *   }
     * })
    **/
    count<T extends CreditWalletCountArgs>(
      args?: Subset<T, CreditWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditWalletAggregateArgs>(args: Subset<T, CreditWalletAggregateArgs>): Prisma.PrismaPromise<GetCreditWalletAggregateType<T>>

    /**
     * Group by CreditWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditWalletGroupByArgs['orderBy'] }
        : { orderBy?: CreditWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditWallet model
   */
  readonly fields: CreditWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditWallet model
   */ 
  interface CreditWalletFieldRefs {
    readonly id: FieldRef<"CreditWallet", 'String'>
    readonly balance: FieldRef<"CreditWallet", 'Float'>
    readonly createdAt: FieldRef<"CreditWallet", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditWallet", 'DateTime'>
    readonly userId: FieldRef<"CreditWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditWallet findUnique
   */
  export type CreditWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter, which CreditWallet to fetch.
     */
    where: CreditWalletWhereUniqueInput
  }

  /**
   * CreditWallet findUniqueOrThrow
   */
  export type CreditWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter, which CreditWallet to fetch.
     */
    where: CreditWalletWhereUniqueInput
  }

  /**
   * CreditWallet findFirst
   */
  export type CreditWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter, which CreditWallet to fetch.
     */
    where?: CreditWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditWallets to fetch.
     */
    orderBy?: CreditWalletOrderByWithRelationInput | CreditWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditWallets.
     */
    cursor?: CreditWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditWallets.
     */
    distinct?: CreditWalletScalarFieldEnum | CreditWalletScalarFieldEnum[]
  }

  /**
   * CreditWallet findFirstOrThrow
   */
  export type CreditWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter, which CreditWallet to fetch.
     */
    where?: CreditWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditWallets to fetch.
     */
    orderBy?: CreditWalletOrderByWithRelationInput | CreditWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditWallets.
     */
    cursor?: CreditWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditWallets.
     */
    distinct?: CreditWalletScalarFieldEnum | CreditWalletScalarFieldEnum[]
  }

  /**
   * CreditWallet findMany
   */
  export type CreditWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter, which CreditWallets to fetch.
     */
    where?: CreditWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditWallets to fetch.
     */
    orderBy?: CreditWalletOrderByWithRelationInput | CreditWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditWallets.
     */
    cursor?: CreditWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditWallets.
     */
    skip?: number
    distinct?: CreditWalletScalarFieldEnum | CreditWalletScalarFieldEnum[]
  }

  /**
   * CreditWallet create
   */
  export type CreditWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditWallet.
     */
    data: XOR<CreditWalletCreateInput, CreditWalletUncheckedCreateInput>
  }

  /**
   * CreditWallet createMany
   */
  export type CreditWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditWallets.
     */
    data: CreditWalletCreateManyInput | CreditWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditWallet createManyAndReturn
   */
  export type CreditWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditWallets.
     */
    data: CreditWalletCreateManyInput | CreditWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditWallet update
   */
  export type CreditWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditWallet.
     */
    data: XOR<CreditWalletUpdateInput, CreditWalletUncheckedUpdateInput>
    /**
     * Choose, which CreditWallet to update.
     */
    where: CreditWalletWhereUniqueInput
  }

  /**
   * CreditWallet updateMany
   */
  export type CreditWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditWallets.
     */
    data: XOR<CreditWalletUpdateManyMutationInput, CreditWalletUncheckedUpdateManyInput>
    /**
     * Filter which CreditWallets to update
     */
    where?: CreditWalletWhereInput
  }

  /**
   * CreditWallet upsert
   */
  export type CreditWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditWallet to update in case it exists.
     */
    where: CreditWalletWhereUniqueInput
    /**
     * In case the CreditWallet found by the `where` argument doesn't exist, create a new CreditWallet with this data.
     */
    create: XOR<CreditWalletCreateInput, CreditWalletUncheckedCreateInput>
    /**
     * In case the CreditWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditWalletUpdateInput, CreditWalletUncheckedUpdateInput>
  }

  /**
   * CreditWallet delete
   */
  export type CreditWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
    /**
     * Filter which CreditWallet to delete.
     */
    where: CreditWalletWhereUniqueInput
  }

  /**
   * CreditWallet deleteMany
   */
  export type CreditWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditWallets to delete
     */
    where?: CreditWalletWhereInput
  }

  /**
   * CreditWallet without action
   */
  export type CreditWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditWallet
     */
    select?: CreditWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditWalletInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    type: string | null
    reason: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    userId: string | null
    orgId: string | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    type: string | null
    reason: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    userId: string | null
    orgId: string | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    reason: number
    idempotencyKey: number
    createdAt: number
    userId: number
    orgId: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    reason?: true
    idempotencyKey?: true
    createdAt?: true
    userId?: true
    orgId?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    reason?: true
    idempotencyKey?: true
    createdAt?: true
    userId?: true
    orgId?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    reason?: true
    idempotencyKey?: true
    createdAt?: true
    userId?: true
    orgId?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    amount: number
    type: string
    reason: string | null
    idempotencyKey: string | null
    createdAt: Date
    userId: string
    orgId: string
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    reason?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    reason?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    reason?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
  }

  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type CreditTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      org: Prisma.$OrgPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      type: string
      reason: string | null
      idempotencyKey: string | null
      createdAt: Date
      userId: string
      orgId: string
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTransaction model
   */ 
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly amount: FieldRef<"CreditTransaction", 'Float'>
    readonly type: FieldRef<"CreditTransaction", 'String'>
    readonly reason: FieldRef<"CreditTransaction", 'String'>
    readonly idempotencyKey: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
    readonly userId: FieldRef<"CreditTransaction", 'String'>
    readonly orgId: FieldRef<"CreditTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model UsageLedger
   */

  export type AggregateUsageLedger = {
    _count: UsageLedgerCountAggregateOutputType | null
    _avg: UsageLedgerAvgAggregateOutputType | null
    _sum: UsageLedgerSumAggregateOutputType | null
    _min: UsageLedgerMinAggregateOutputType | null
    _max: UsageLedgerMaxAggregateOutputType | null
  }

  export type UsageLedgerAvgAggregateOutputType = {
    tokens: number | null
    cost: number | null
  }

  export type UsageLedgerSumAggregateOutputType = {
    tokens: number | null
    cost: number | null
  }

  export type UsageLedgerMinAggregateOutputType = {
    id: string | null
    model: string | null
    provider: string | null
    tokens: number | null
    cost: number | null
    requestId: string | null
    createdAt: Date | null
    userId: string | null
    orgId: string | null
    conversationId: string | null
  }

  export type UsageLedgerMaxAggregateOutputType = {
    id: string | null
    model: string | null
    provider: string | null
    tokens: number | null
    cost: number | null
    requestId: string | null
    createdAt: Date | null
    userId: string | null
    orgId: string | null
    conversationId: string | null
  }

  export type UsageLedgerCountAggregateOutputType = {
    id: number
    model: number
    provider: number
    tokens: number
    cost: number
    metadata: number
    requestId: number
    createdAt: number
    userId: number
    orgId: number
    conversationId: number
    _all: number
  }


  export type UsageLedgerAvgAggregateInputType = {
    tokens?: true
    cost?: true
  }

  export type UsageLedgerSumAggregateInputType = {
    tokens?: true
    cost?: true
  }

  export type UsageLedgerMinAggregateInputType = {
    id?: true
    model?: true
    provider?: true
    tokens?: true
    cost?: true
    requestId?: true
    createdAt?: true
    userId?: true
    orgId?: true
    conversationId?: true
  }

  export type UsageLedgerMaxAggregateInputType = {
    id?: true
    model?: true
    provider?: true
    tokens?: true
    cost?: true
    requestId?: true
    createdAt?: true
    userId?: true
    orgId?: true
    conversationId?: true
  }

  export type UsageLedgerCountAggregateInputType = {
    id?: true
    model?: true
    provider?: true
    tokens?: true
    cost?: true
    metadata?: true
    requestId?: true
    createdAt?: true
    userId?: true
    orgId?: true
    conversationId?: true
    _all?: true
  }

  export type UsageLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLedger to aggregate.
     */
    where?: UsageLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLedgers to fetch.
     */
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageLedgers
    **/
    _count?: true | UsageLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageLedgerMaxAggregateInputType
  }

  export type GetUsageLedgerAggregateType<T extends UsageLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageLedger[P]>
      : GetScalarType<T[P], AggregateUsageLedger[P]>
  }




  export type UsageLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLedgerWhereInput
    orderBy?: UsageLedgerOrderByWithAggregationInput | UsageLedgerOrderByWithAggregationInput[]
    by: UsageLedgerScalarFieldEnum[] | UsageLedgerScalarFieldEnum
    having?: UsageLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageLedgerCountAggregateInputType | true
    _avg?: UsageLedgerAvgAggregateInputType
    _sum?: UsageLedgerSumAggregateInputType
    _min?: UsageLedgerMinAggregateInputType
    _max?: UsageLedgerMaxAggregateInputType
  }

  export type UsageLedgerGroupByOutputType = {
    id: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata: JsonValue | null
    requestId: string | null
    createdAt: Date
    userId: string
    orgId: string
    conversationId: string | null
    _count: UsageLedgerCountAggregateOutputType | null
    _avg: UsageLedgerAvgAggregateOutputType | null
    _sum: UsageLedgerSumAggregateOutputType | null
    _min: UsageLedgerMinAggregateOutputType | null
    _max: UsageLedgerMaxAggregateOutputType | null
  }

  type GetUsageLedgerGroupByPayload<T extends UsageLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], UsageLedgerGroupByOutputType[P]>
        }
      >
    >


  export type UsageLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    provider?: boolean
    tokens?: boolean
    cost?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
    conversation?: boolean | UsageLedger$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["usageLedger"]>

  export type UsageLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    provider?: boolean
    tokens?: boolean
    cost?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
    conversation?: boolean | UsageLedger$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["usageLedger"]>

  export type UsageLedgerSelectScalar = {
    id?: boolean
    model?: boolean
    provider?: boolean
    tokens?: boolean
    cost?: boolean
    metadata?: boolean
    requestId?: boolean
    createdAt?: boolean
    userId?: boolean
    orgId?: boolean
    conversationId?: boolean
  }

  export type UsageLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
    conversation?: boolean | UsageLedger$conversationArgs<ExtArgs>
  }
  export type UsageLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrgDefaultArgs<ExtArgs>
    conversation?: boolean | UsageLedger$conversationArgs<ExtArgs>
  }

  export type $UsageLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageLedger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      org: Prisma.$OrgPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      provider: string
      tokens: number
      cost: number
      metadata: Prisma.JsonValue | null
      requestId: string | null
      createdAt: Date
      userId: string
      orgId: string
      conversationId: string | null
    }, ExtArgs["result"]["usageLedger"]>
    composites: {}
  }

  type UsageLedgerGetPayload<S extends boolean | null | undefined | UsageLedgerDefaultArgs> = $Result.GetResult<Prisma.$UsageLedgerPayload, S>

  type UsageLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsageLedgerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsageLedgerCountAggregateInputType | true
    }

  export interface UsageLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageLedger'], meta: { name: 'UsageLedger' } }
    /**
     * Find zero or one UsageLedger that matches the filter.
     * @param {UsageLedgerFindUniqueArgs} args - Arguments to find a UsageLedger
     * @example
     * // Get one UsageLedger
     * const usageLedger = await prisma.usageLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageLedgerFindUniqueArgs>(args: SelectSubset<T, UsageLedgerFindUniqueArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsageLedger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsageLedgerFindUniqueOrThrowArgs} args - Arguments to find a UsageLedger
     * @example
     * // Get one UsageLedger
     * const usageLedger = await prisma.usageLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsageLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerFindFirstArgs} args - Arguments to find a UsageLedger
     * @example
     * // Get one UsageLedger
     * const usageLedger = await prisma.usageLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageLedgerFindFirstArgs>(args?: SelectSubset<T, UsageLedgerFindFirstArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsageLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerFindFirstOrThrowArgs} args - Arguments to find a UsageLedger
     * @example
     * // Get one UsageLedger
     * const usageLedger = await prisma.usageLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsageLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageLedgers
     * const usageLedgers = await prisma.usageLedger.findMany()
     * 
     * // Get first 10 UsageLedgers
     * const usageLedgers = await prisma.usageLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageLedgerWithIdOnly = await prisma.usageLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageLedgerFindManyArgs>(args?: SelectSubset<T, UsageLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsageLedger.
     * @param {UsageLedgerCreateArgs} args - Arguments to create a UsageLedger.
     * @example
     * // Create one UsageLedger
     * const UsageLedger = await prisma.usageLedger.create({
     *   data: {
     *     // ... data to create a UsageLedger
     *   }
     * })
     * 
     */
    create<T extends UsageLedgerCreateArgs>(args: SelectSubset<T, UsageLedgerCreateArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsageLedgers.
     * @param {UsageLedgerCreateManyArgs} args - Arguments to create many UsageLedgers.
     * @example
     * // Create many UsageLedgers
     * const usageLedger = await prisma.usageLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageLedgerCreateManyArgs>(args?: SelectSubset<T, UsageLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageLedgers and returns the data saved in the database.
     * @param {UsageLedgerCreateManyAndReturnArgs} args - Arguments to create many UsageLedgers.
     * @example
     * // Create many UsageLedgers
     * const usageLedger = await prisma.usageLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageLedgers and only return the `id`
     * const usageLedgerWithIdOnly = await prisma.usageLedger.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UsageLedger.
     * @param {UsageLedgerDeleteArgs} args - Arguments to delete one UsageLedger.
     * @example
     * // Delete one UsageLedger
     * const UsageLedger = await prisma.usageLedger.delete({
     *   where: {
     *     // ... filter to delete one UsageLedger
     *   }
     * })
     * 
     */
    delete<T extends UsageLedgerDeleteArgs>(args: SelectSubset<T, UsageLedgerDeleteArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsageLedger.
     * @param {UsageLedgerUpdateArgs} args - Arguments to update one UsageLedger.
     * @example
     * // Update one UsageLedger
     * const usageLedger = await prisma.usageLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageLedgerUpdateArgs>(args: SelectSubset<T, UsageLedgerUpdateArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsageLedgers.
     * @param {UsageLedgerDeleteManyArgs} args - Arguments to filter UsageLedgers to delete.
     * @example
     * // Delete a few UsageLedgers
     * const { count } = await prisma.usageLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageLedgerDeleteManyArgs>(args?: SelectSubset<T, UsageLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageLedgers
     * const usageLedger = await prisma.usageLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageLedgerUpdateManyArgs>(args: SelectSubset<T, UsageLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsageLedger.
     * @param {UsageLedgerUpsertArgs} args - Arguments to update or create a UsageLedger.
     * @example
     * // Update or create a UsageLedger
     * const usageLedger = await prisma.usageLedger.upsert({
     *   create: {
     *     // ... data to create a UsageLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageLedger we want to update
     *   }
     * })
     */
    upsert<T extends UsageLedgerUpsertArgs>(args: SelectSubset<T, UsageLedgerUpsertArgs<ExtArgs>>): Prisma__UsageLedgerClient<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsageLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerCountArgs} args - Arguments to filter UsageLedgers to count.
     * @example
     * // Count the number of UsageLedgers
     * const count = await prisma.usageLedger.count({
     *   where: {
     *     // ... the filter for the UsageLedgers we want to count
     *   }
     * })
    **/
    count<T extends UsageLedgerCountArgs>(
      args?: Subset<T, UsageLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageLedgerAggregateArgs>(args: Subset<T, UsageLedgerAggregateArgs>): Prisma.PrismaPromise<GetUsageLedgerAggregateType<T>>

    /**
     * Group by UsageLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageLedgerGroupByArgs['orderBy'] }
        : { orderBy?: UsageLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageLedger model
   */
  readonly fields: UsageLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    conversation<T extends UsageLedger$conversationArgs<ExtArgs> = {}>(args?: Subset<T, UsageLedger$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageLedger model
   */ 
  interface UsageLedgerFieldRefs {
    readonly id: FieldRef<"UsageLedger", 'String'>
    readonly model: FieldRef<"UsageLedger", 'String'>
    readonly provider: FieldRef<"UsageLedger", 'String'>
    readonly tokens: FieldRef<"UsageLedger", 'Int'>
    readonly cost: FieldRef<"UsageLedger", 'Float'>
    readonly metadata: FieldRef<"UsageLedger", 'Json'>
    readonly requestId: FieldRef<"UsageLedger", 'String'>
    readonly createdAt: FieldRef<"UsageLedger", 'DateTime'>
    readonly userId: FieldRef<"UsageLedger", 'String'>
    readonly orgId: FieldRef<"UsageLedger", 'String'>
    readonly conversationId: FieldRef<"UsageLedger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsageLedger findUnique
   */
  export type UsageLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter, which UsageLedger to fetch.
     */
    where: UsageLedgerWhereUniqueInput
  }

  /**
   * UsageLedger findUniqueOrThrow
   */
  export type UsageLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter, which UsageLedger to fetch.
     */
    where: UsageLedgerWhereUniqueInput
  }

  /**
   * UsageLedger findFirst
   */
  export type UsageLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter, which UsageLedger to fetch.
     */
    where?: UsageLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLedgers to fetch.
     */
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLedgers.
     */
    cursor?: UsageLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLedgers.
     */
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * UsageLedger findFirstOrThrow
   */
  export type UsageLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter, which UsageLedger to fetch.
     */
    where?: UsageLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLedgers to fetch.
     */
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLedgers.
     */
    cursor?: UsageLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLedgers.
     */
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * UsageLedger findMany
   */
  export type UsageLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter, which UsageLedgers to fetch.
     */
    where?: UsageLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLedgers to fetch.
     */
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageLedgers.
     */
    cursor?: UsageLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLedgers.
     */
    skip?: number
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * UsageLedger create
   */
  export type UsageLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageLedger.
     */
    data: XOR<UsageLedgerCreateInput, UsageLedgerUncheckedCreateInput>
  }

  /**
   * UsageLedger createMany
   */
  export type UsageLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageLedgers.
     */
    data: UsageLedgerCreateManyInput | UsageLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageLedger createManyAndReturn
   */
  export type UsageLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UsageLedgers.
     */
    data: UsageLedgerCreateManyInput | UsageLedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageLedger update
   */
  export type UsageLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageLedger.
     */
    data: XOR<UsageLedgerUpdateInput, UsageLedgerUncheckedUpdateInput>
    /**
     * Choose, which UsageLedger to update.
     */
    where: UsageLedgerWhereUniqueInput
  }

  /**
   * UsageLedger updateMany
   */
  export type UsageLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageLedgers.
     */
    data: XOR<UsageLedgerUpdateManyMutationInput, UsageLedgerUncheckedUpdateManyInput>
    /**
     * Filter which UsageLedgers to update
     */
    where?: UsageLedgerWhereInput
  }

  /**
   * UsageLedger upsert
   */
  export type UsageLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageLedger to update in case it exists.
     */
    where: UsageLedgerWhereUniqueInput
    /**
     * In case the UsageLedger found by the `where` argument doesn't exist, create a new UsageLedger with this data.
     */
    create: XOR<UsageLedgerCreateInput, UsageLedgerUncheckedCreateInput>
    /**
     * In case the UsageLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageLedgerUpdateInput, UsageLedgerUncheckedUpdateInput>
  }

  /**
   * UsageLedger delete
   */
  export type UsageLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    /**
     * Filter which UsageLedger to delete.
     */
    where: UsageLedgerWhereUniqueInput
  }

  /**
   * UsageLedger deleteMany
   */
  export type UsageLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLedgers to delete
     */
    where?: UsageLedgerWhereInput
  }

  /**
   * UsageLedger.conversation
   */
  export type UsageLedger$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
  }

  /**
   * UsageLedger without action
   */
  export type UsageLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
  }


  /**
   * Model CreditReservation
   */

  export type AggregateCreditReservation = {
    _count: CreditReservationCountAggregateOutputType | null
    _avg: CreditReservationAvgAggregateOutputType | null
    _sum: CreditReservationSumAggregateOutputType | null
    _min: CreditReservationMinAggregateOutputType | null
    _max: CreditReservationMaxAggregateOutputType | null
  }

  export type CreditReservationAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditReservationSumAggregateOutputType = {
    amount: number | null
  }

  export type CreditReservationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    requestId: string | null
    amount: number | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditReservationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    requestId: string | null
    amount: number | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditReservationCountAggregateOutputType = {
    id: number
    userId: number
    requestId: number
    amount: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditReservationAvgAggregateInputType = {
    amount?: true
  }

  export type CreditReservationSumAggregateInputType = {
    amount?: true
  }

  export type CreditReservationMinAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    amount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditReservationMaxAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    amount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditReservationCountAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    amount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditReservation to aggregate.
     */
    where?: CreditReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditReservations to fetch.
     */
    orderBy?: CreditReservationOrderByWithRelationInput | CreditReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditReservations
    **/
    _count?: true | CreditReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditReservationMaxAggregateInputType
  }

  export type GetCreditReservationAggregateType<T extends CreditReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditReservation[P]>
      : GetScalarType<T[P], AggregateCreditReservation[P]>
  }




  export type CreditReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditReservationWhereInput
    orderBy?: CreditReservationOrderByWithAggregationInput | CreditReservationOrderByWithAggregationInput[]
    by: CreditReservationScalarFieldEnum[] | CreditReservationScalarFieldEnum
    having?: CreditReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditReservationCountAggregateInputType | true
    _avg?: CreditReservationAvgAggregateInputType
    _sum?: CreditReservationSumAggregateInputType
    _min?: CreditReservationMinAggregateInputType
    _max?: CreditReservationMaxAggregateInputType
  }

  export type CreditReservationGroupByOutputType = {
    id: string
    userId: string
    requestId: string
    amount: number
    status: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CreditReservationCountAggregateOutputType | null
    _avg: CreditReservationAvgAggregateOutputType | null
    _sum: CreditReservationSumAggregateOutputType | null
    _min: CreditReservationMinAggregateOutputType | null
    _max: CreditReservationMaxAggregateOutputType | null
  }

  type GetCreditReservationGroupByPayload<T extends CreditReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditReservationGroupByOutputType[P]>
            : GetScalarType<T[P], CreditReservationGroupByOutputType[P]>
        }
      >
    >


  export type CreditReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestId?: boolean
    amount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditReservation"]>

  export type CreditReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestId?: boolean
    amount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditReservation"]>

  export type CreditReservationSelectScalar = {
    id?: boolean
    userId?: boolean
    requestId?: boolean
    amount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CreditReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditReservation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      requestId: string
      amount: number
      status: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditReservation"]>
    composites: {}
  }

  type CreditReservationGetPayload<S extends boolean | null | undefined | CreditReservationDefaultArgs> = $Result.GetResult<Prisma.$CreditReservationPayload, S>

  type CreditReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditReservationCountAggregateInputType | true
    }

  export interface CreditReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditReservation'], meta: { name: 'CreditReservation' } }
    /**
     * Find zero or one CreditReservation that matches the filter.
     * @param {CreditReservationFindUniqueArgs} args - Arguments to find a CreditReservation
     * @example
     * // Get one CreditReservation
     * const creditReservation = await prisma.creditReservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditReservationFindUniqueArgs>(args: SelectSubset<T, CreditReservationFindUniqueArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditReservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditReservationFindUniqueOrThrowArgs} args - Arguments to find a CreditReservation
     * @example
     * // Get one CreditReservation
     * const creditReservation = await prisma.creditReservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditReservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationFindFirstArgs} args - Arguments to find a CreditReservation
     * @example
     * // Get one CreditReservation
     * const creditReservation = await prisma.creditReservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditReservationFindFirstArgs>(args?: SelectSubset<T, CreditReservationFindFirstArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditReservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationFindFirstOrThrowArgs} args - Arguments to find a CreditReservation
     * @example
     * // Get one CreditReservation
     * const creditReservation = await prisma.creditReservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditReservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditReservations
     * const creditReservations = await prisma.creditReservation.findMany()
     * 
     * // Get first 10 CreditReservations
     * const creditReservations = await prisma.creditReservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditReservationWithIdOnly = await prisma.creditReservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditReservationFindManyArgs>(args?: SelectSubset<T, CreditReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditReservation.
     * @param {CreditReservationCreateArgs} args - Arguments to create a CreditReservation.
     * @example
     * // Create one CreditReservation
     * const CreditReservation = await prisma.creditReservation.create({
     *   data: {
     *     // ... data to create a CreditReservation
     *   }
     * })
     * 
     */
    create<T extends CreditReservationCreateArgs>(args: SelectSubset<T, CreditReservationCreateArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditReservations.
     * @param {CreditReservationCreateManyArgs} args - Arguments to create many CreditReservations.
     * @example
     * // Create many CreditReservations
     * const creditReservation = await prisma.creditReservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditReservationCreateManyArgs>(args?: SelectSubset<T, CreditReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditReservations and returns the data saved in the database.
     * @param {CreditReservationCreateManyAndReturnArgs} args - Arguments to create many CreditReservations.
     * @example
     * // Create many CreditReservations
     * const creditReservation = await prisma.creditReservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditReservations and only return the `id`
     * const creditReservationWithIdOnly = await prisma.creditReservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditReservation.
     * @param {CreditReservationDeleteArgs} args - Arguments to delete one CreditReservation.
     * @example
     * // Delete one CreditReservation
     * const CreditReservation = await prisma.creditReservation.delete({
     *   where: {
     *     // ... filter to delete one CreditReservation
     *   }
     * })
     * 
     */
    delete<T extends CreditReservationDeleteArgs>(args: SelectSubset<T, CreditReservationDeleteArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditReservation.
     * @param {CreditReservationUpdateArgs} args - Arguments to update one CreditReservation.
     * @example
     * // Update one CreditReservation
     * const creditReservation = await prisma.creditReservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditReservationUpdateArgs>(args: SelectSubset<T, CreditReservationUpdateArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditReservations.
     * @param {CreditReservationDeleteManyArgs} args - Arguments to filter CreditReservations to delete.
     * @example
     * // Delete a few CreditReservations
     * const { count } = await prisma.creditReservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditReservationDeleteManyArgs>(args?: SelectSubset<T, CreditReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditReservations
     * const creditReservation = await prisma.creditReservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditReservationUpdateManyArgs>(args: SelectSubset<T, CreditReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditReservation.
     * @param {CreditReservationUpsertArgs} args - Arguments to update or create a CreditReservation.
     * @example
     * // Update or create a CreditReservation
     * const creditReservation = await prisma.creditReservation.upsert({
     *   create: {
     *     // ... data to create a CreditReservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditReservation we want to update
     *   }
     * })
     */
    upsert<T extends CreditReservationUpsertArgs>(args: SelectSubset<T, CreditReservationUpsertArgs<ExtArgs>>): Prisma__CreditReservationClient<$Result.GetResult<Prisma.$CreditReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationCountArgs} args - Arguments to filter CreditReservations to count.
     * @example
     * // Count the number of CreditReservations
     * const count = await prisma.creditReservation.count({
     *   where: {
     *     // ... the filter for the CreditReservations we want to count
     *   }
     * })
    **/
    count<T extends CreditReservationCountArgs>(
      args?: Subset<T, CreditReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditReservationAggregateArgs>(args: Subset<T, CreditReservationAggregateArgs>): Prisma.PrismaPromise<GetCreditReservationAggregateType<T>>

    /**
     * Group by CreditReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditReservationGroupByArgs['orderBy'] }
        : { orderBy?: CreditReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditReservation model
   */
  readonly fields: CreditReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditReservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditReservation model
   */ 
  interface CreditReservationFieldRefs {
    readonly id: FieldRef<"CreditReservation", 'String'>
    readonly userId: FieldRef<"CreditReservation", 'String'>
    readonly requestId: FieldRef<"CreditReservation", 'String'>
    readonly amount: FieldRef<"CreditReservation", 'Float'>
    readonly status: FieldRef<"CreditReservation", 'String'>
    readonly expiresAt: FieldRef<"CreditReservation", 'DateTime'>
    readonly createdAt: FieldRef<"CreditReservation", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditReservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditReservation findUnique
   */
  export type CreditReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter, which CreditReservation to fetch.
     */
    where: CreditReservationWhereUniqueInput
  }

  /**
   * CreditReservation findUniqueOrThrow
   */
  export type CreditReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter, which CreditReservation to fetch.
     */
    where: CreditReservationWhereUniqueInput
  }

  /**
   * CreditReservation findFirst
   */
  export type CreditReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter, which CreditReservation to fetch.
     */
    where?: CreditReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditReservations to fetch.
     */
    orderBy?: CreditReservationOrderByWithRelationInput | CreditReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditReservations.
     */
    cursor?: CreditReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditReservations.
     */
    distinct?: CreditReservationScalarFieldEnum | CreditReservationScalarFieldEnum[]
  }

  /**
   * CreditReservation findFirstOrThrow
   */
  export type CreditReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter, which CreditReservation to fetch.
     */
    where?: CreditReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditReservations to fetch.
     */
    orderBy?: CreditReservationOrderByWithRelationInput | CreditReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditReservations.
     */
    cursor?: CreditReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditReservations.
     */
    distinct?: CreditReservationScalarFieldEnum | CreditReservationScalarFieldEnum[]
  }

  /**
   * CreditReservation findMany
   */
  export type CreditReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter, which CreditReservations to fetch.
     */
    where?: CreditReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditReservations to fetch.
     */
    orderBy?: CreditReservationOrderByWithRelationInput | CreditReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditReservations.
     */
    cursor?: CreditReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditReservations.
     */
    skip?: number
    distinct?: CreditReservationScalarFieldEnum | CreditReservationScalarFieldEnum[]
  }

  /**
   * CreditReservation create
   */
  export type CreditReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * The data needed to create a CreditReservation.
     */
    data: XOR<CreditReservationCreateInput, CreditReservationUncheckedCreateInput>
  }

  /**
   * CreditReservation createMany
   */
  export type CreditReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditReservations.
     */
    data: CreditReservationCreateManyInput | CreditReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditReservation createManyAndReturn
   */
  export type CreditReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditReservations.
     */
    data: CreditReservationCreateManyInput | CreditReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditReservation update
   */
  export type CreditReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * The data needed to update a CreditReservation.
     */
    data: XOR<CreditReservationUpdateInput, CreditReservationUncheckedUpdateInput>
    /**
     * Choose, which CreditReservation to update.
     */
    where: CreditReservationWhereUniqueInput
  }

  /**
   * CreditReservation updateMany
   */
  export type CreditReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditReservations.
     */
    data: XOR<CreditReservationUpdateManyMutationInput, CreditReservationUncheckedUpdateManyInput>
    /**
     * Filter which CreditReservations to update
     */
    where?: CreditReservationWhereInput
  }

  /**
   * CreditReservation upsert
   */
  export type CreditReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * The filter to search for the CreditReservation to update in case it exists.
     */
    where: CreditReservationWhereUniqueInput
    /**
     * In case the CreditReservation found by the `where` argument doesn't exist, create a new CreditReservation with this data.
     */
    create: XOR<CreditReservationCreateInput, CreditReservationUncheckedCreateInput>
    /**
     * In case the CreditReservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditReservationUpdateInput, CreditReservationUncheckedUpdateInput>
  }

  /**
   * CreditReservation delete
   */
  export type CreditReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
    /**
     * Filter which CreditReservation to delete.
     */
    where: CreditReservationWhereUniqueInput
  }

  /**
   * CreditReservation deleteMany
   */
  export type CreditReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditReservations to delete
     */
    where?: CreditReservationWhereInput
  }

  /**
   * CreditReservation without action
   */
  export type CreditReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditReservation
     */
    select?: CreditReservationSelect<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    title: number
    metadata: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    title?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    title: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    usageLedger?: boolean | Conversation$usageLedgerArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    title?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    usageLedger?: boolean | Conversation$usageLedgerArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      usageLedger: Prisma.$UsageLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    usageLedger<T extends Conversation$usageLedgerArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$usageLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLedgerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly metadata: FieldRef<"Conversation", 'Json'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
    readonly userId: FieldRef<"Conversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation.usageLedger
   */
  export type Conversation$usageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLedger
     */
    select?: UsageLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLedgerInclude<ExtArgs> | null
    where?: UsageLedgerWhereInput
    orderBy?: UsageLedgerOrderByWithRelationInput | UsageLedgerOrderByWithRelationInput[]
    cursor?: UsageLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLedgerScalarFieldEnum | UsageLedgerScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
    conversationId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
    conversationId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    role: number
    content: number
    metadata: number
    createdAt: number
    conversationId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    role?: true
    content?: true
    createdAt?: true
    conversationId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    role?: true
    content?: true
    createdAt?: true
    conversationId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    role?: true
    content?: true
    metadata?: true
    createdAt?: true
    conversationId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    role: string
    content: string
    metadata: JsonValue | null
    createdAt: Date
    conversationId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    conversationId?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    conversationId?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    role?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    conversationId?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      content: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      conversationId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly metadata: FieldRef<"Message", 'Json'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly conversationId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrgScalarFieldEnum = (typeof OrgScalarFieldEnum)[keyof typeof OrgScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orgId: 'orgId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    isActive: 'isActive',
    lastUsedAt: 'lastUsedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const CreditWalletScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CreditWalletScalarFieldEnum = (typeof CreditWalletScalarFieldEnum)[keyof typeof CreditWalletScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    reason: 'reason',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    userId: 'userId',
    orgId: 'orgId'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const UsageLedgerScalarFieldEnum: {
    id: 'id',
    model: 'model',
    provider: 'provider',
    tokens: 'tokens',
    cost: 'cost',
    metadata: 'metadata',
    requestId: 'requestId',
    createdAt: 'createdAt',
    userId: 'userId',
    orgId: 'orgId',
    conversationId: 'conversationId'
  };

  export type UsageLedgerScalarFieldEnum = (typeof UsageLedgerScalarFieldEnum)[keyof typeof UsageLedgerScalarFieldEnum]


  export const CreditReservationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    requestId: 'requestId',
    amount: 'amount',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditReservationScalarFieldEnum = (typeof CreditReservationScalarFieldEnum)[keyof typeof CreditReservationScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    role: 'role',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt',
    conversationId: 'conversationId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type OrgWhereInput = {
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    id?: StringFilter<"Org"> | string
    name?: StringFilter<"Org"> | string
    slug?: StringFilter<"Org"> | string
    isActive?: BoolFilter<"Org"> | boolean
    createdAt?: DateTimeFilter<"Org"> | Date | string
    updatedAt?: DateTimeFilter<"Org"> | Date | string
    users?: UserListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
  }

  export type OrgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
    usageLedger?: UsageLedgerOrderByRelationAggregateInput
  }

  export type OrgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    name?: StringFilter<"Org"> | string
    isActive?: BoolFilter<"Org"> | boolean
    createdAt?: DateTimeFilter<"Org"> | Date | string
    updatedAt?: DateTimeFilter<"Org"> | Date | string
    users?: UserListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
  }, "id" | "slug">

  export type OrgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrgCountOrderByAggregateInput
    _max?: OrgMaxOrderByAggregateInput
    _min?: OrgMinOrderByAggregateInput
  }

  export type OrgScalarWhereWithAggregatesInput = {
    AND?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    OR?: OrgScalarWhereWithAggregatesInput[]
    NOT?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Org"> | string
    name?: StringWithAggregatesFilter<"Org"> | string
    slug?: StringWithAggregatesFilter<"Org"> | string
    isActive?: BoolWithAggregatesFilter<"Org"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Org"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Org"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
    org?: XOR<OrgRelationFilter, OrgWhereInput>
    apiKeys?: ApiKeyListRelationFilter
    wallet?: XOR<CreditWalletNullableRelationFilter, CreditWalletWhereInput> | null
    creditTransactions?: CreditTransactionListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
    conversations?: ConversationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    org?: OrgOrderByWithRelationInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    wallet?: CreditWalletOrderByWithRelationInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
    usageLedger?: UsageLedgerOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
    org?: XOR<OrgRelationFilter, OrgWhereInput>
    apiKeys?: ApiKeyListRelationFilter
    wallet?: XOR<CreditWalletNullableRelationFilter, CreditWalletWhereInput> | null
    creditTransactions?: CreditTransactionListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
    conversations?: ConversationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    orgId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
  }

  export type CreditWalletWhereInput = {
    AND?: CreditWalletWhereInput | CreditWalletWhereInput[]
    OR?: CreditWalletWhereInput[]
    NOT?: CreditWalletWhereInput | CreditWalletWhereInput[]
    id?: StringFilter<"CreditWallet"> | string
    balance?: FloatFilter<"CreditWallet"> | number
    createdAt?: DateTimeFilter<"CreditWallet"> | Date | string
    updatedAt?: DateTimeFilter<"CreditWallet"> | Date | string
    userId?: StringFilter<"CreditWallet"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CreditWalletOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditWalletWhereInput | CreditWalletWhereInput[]
    OR?: CreditWalletWhereInput[]
    NOT?: CreditWalletWhereInput | CreditWalletWhereInput[]
    balance?: FloatFilter<"CreditWallet"> | number
    createdAt?: DateTimeFilter<"CreditWallet"> | Date | string
    updatedAt?: DateTimeFilter<"CreditWallet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CreditWalletOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CreditWalletCountOrderByAggregateInput
    _avg?: CreditWalletAvgOrderByAggregateInput
    _max?: CreditWalletMaxOrderByAggregateInput
    _min?: CreditWalletMinOrderByAggregateInput
    _sum?: CreditWalletSumOrderByAggregateInput
  }

  export type CreditWalletScalarWhereWithAggregatesInput = {
    AND?: CreditWalletScalarWhereWithAggregatesInput | CreditWalletScalarWhereWithAggregatesInput[]
    OR?: CreditWalletScalarWhereWithAggregatesInput[]
    NOT?: CreditWalletScalarWhereWithAggregatesInput | CreditWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditWallet"> | string
    balance?: FloatWithAggregatesFilter<"CreditWallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditWallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditWallet"> | Date | string
    userId?: StringWithAggregatesFilter<"CreditWallet"> | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    amount?: FloatFilter<"CreditTransaction"> | number
    type?: StringFilter<"CreditTransaction"> | string
    reason?: StringNullableFilter<"CreditTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
    orgId?: StringFilter<"CreditTransaction"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    org?: XOR<OrgRelationFilter, OrgWhereInput>
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    user?: UserOrderByWithRelationInput
    org?: OrgOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_idempotencyKey?: CreditTransactionUserIdIdempotencyKeyCompoundUniqueInput
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    amount?: FloatFilter<"CreditTransaction"> | number
    type?: StringFilter<"CreditTransaction"> | string
    reason?: StringNullableFilter<"CreditTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
    orgId?: StringFilter<"CreditTransaction"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    org?: XOR<OrgRelationFilter, OrgWhereInput>
  }, "id" | "userId_idempotencyKey">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    amount?: FloatWithAggregatesFilter<"CreditTransaction"> | number
    type?: StringWithAggregatesFilter<"CreditTransaction"> | string
    reason?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
    userId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    orgId?: StringWithAggregatesFilter<"CreditTransaction"> | string
  }

  export type UsageLedgerWhereInput = {
    AND?: UsageLedgerWhereInput | UsageLedgerWhereInput[]
    OR?: UsageLedgerWhereInput[]
    NOT?: UsageLedgerWhereInput | UsageLedgerWhereInput[]
    id?: StringFilter<"UsageLedger"> | string
    model?: StringFilter<"UsageLedger"> | string
    provider?: StringFilter<"UsageLedger"> | string
    tokens?: IntFilter<"UsageLedger"> | number
    cost?: FloatFilter<"UsageLedger"> | number
    metadata?: JsonNullableFilter<"UsageLedger">
    requestId?: StringNullableFilter<"UsageLedger"> | string | null
    createdAt?: DateTimeFilter<"UsageLedger"> | Date | string
    userId?: StringFilter<"UsageLedger"> | string
    orgId?: StringFilter<"UsageLedger"> | string
    conversationId?: StringNullableFilter<"UsageLedger"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    org?: XOR<OrgRelationFilter, OrgWhereInput>
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }

  export type UsageLedgerOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    metadata?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    org?: OrgOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type UsageLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: UsageLedgerWhereInput | UsageLedgerWhereInput[]
    OR?: UsageLedgerWhereInput[]
    NOT?: UsageLedgerWhereInput | UsageLedgerWhereInput[]
    model?: StringFilter<"UsageLedger"> | string
    provider?: StringFilter<"UsageLedger"> | string
    tokens?: IntFilter<"UsageLedger"> | number
    cost?: FloatFilter<"UsageLedger"> | number
    metadata?: JsonNullableFilter<"UsageLedger">
    createdAt?: DateTimeFilter<"UsageLedger"> | Date | string
    userId?: StringFilter<"UsageLedger"> | string
    orgId?: StringFilter<"UsageLedger"> | string
    conversationId?: StringNullableFilter<"UsageLedger"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    org?: XOR<OrgRelationFilter, OrgWhereInput>
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }, "id" | "requestId">

  export type UsageLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    metadata?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    _count?: UsageLedgerCountOrderByAggregateInput
    _avg?: UsageLedgerAvgOrderByAggregateInput
    _max?: UsageLedgerMaxOrderByAggregateInput
    _min?: UsageLedgerMinOrderByAggregateInput
    _sum?: UsageLedgerSumOrderByAggregateInput
  }

  export type UsageLedgerScalarWhereWithAggregatesInput = {
    AND?: UsageLedgerScalarWhereWithAggregatesInput | UsageLedgerScalarWhereWithAggregatesInput[]
    OR?: UsageLedgerScalarWhereWithAggregatesInput[]
    NOT?: UsageLedgerScalarWhereWithAggregatesInput | UsageLedgerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageLedger"> | string
    model?: StringWithAggregatesFilter<"UsageLedger"> | string
    provider?: StringWithAggregatesFilter<"UsageLedger"> | string
    tokens?: IntWithAggregatesFilter<"UsageLedger"> | number
    cost?: FloatWithAggregatesFilter<"UsageLedger"> | number
    metadata?: JsonNullableWithAggregatesFilter<"UsageLedger">
    requestId?: StringNullableWithAggregatesFilter<"UsageLedger"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageLedger"> | Date | string
    userId?: StringWithAggregatesFilter<"UsageLedger"> | string
    orgId?: StringWithAggregatesFilter<"UsageLedger"> | string
    conversationId?: StringNullableWithAggregatesFilter<"UsageLedger"> | string | null
  }

  export type CreditReservationWhereInput = {
    AND?: CreditReservationWhereInput | CreditReservationWhereInput[]
    OR?: CreditReservationWhereInput[]
    NOT?: CreditReservationWhereInput | CreditReservationWhereInput[]
    id?: StringFilter<"CreditReservation"> | string
    userId?: StringFilter<"CreditReservation"> | string
    requestId?: StringFilter<"CreditReservation"> | string
    amount?: FloatFilter<"CreditReservation"> | number
    status?: StringFilter<"CreditReservation"> | string
    expiresAt?: DateTimeFilter<"CreditReservation"> | Date | string
    createdAt?: DateTimeFilter<"CreditReservation"> | Date | string
    updatedAt?: DateTimeFilter<"CreditReservation"> | Date | string
  }

  export type CreditReservationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: CreditReservationWhereInput | CreditReservationWhereInput[]
    OR?: CreditReservationWhereInput[]
    NOT?: CreditReservationWhereInput | CreditReservationWhereInput[]
    userId?: StringFilter<"CreditReservation"> | string
    amount?: FloatFilter<"CreditReservation"> | number
    status?: StringFilter<"CreditReservation"> | string
    expiresAt?: DateTimeFilter<"CreditReservation"> | Date | string
    createdAt?: DateTimeFilter<"CreditReservation"> | Date | string
    updatedAt?: DateTimeFilter<"CreditReservation"> | Date | string
  }, "id" | "requestId">

  export type CreditReservationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditReservationCountOrderByAggregateInput
    _avg?: CreditReservationAvgOrderByAggregateInput
    _max?: CreditReservationMaxOrderByAggregateInput
    _min?: CreditReservationMinOrderByAggregateInput
    _sum?: CreditReservationSumOrderByAggregateInput
  }

  export type CreditReservationScalarWhereWithAggregatesInput = {
    AND?: CreditReservationScalarWhereWithAggregatesInput | CreditReservationScalarWhereWithAggregatesInput[]
    OR?: CreditReservationScalarWhereWithAggregatesInput[]
    NOT?: CreditReservationScalarWhereWithAggregatesInput | CreditReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditReservation"> | string
    userId?: StringWithAggregatesFilter<"CreditReservation"> | string
    requestId?: StringWithAggregatesFilter<"CreditReservation"> | string
    amount?: FloatWithAggregatesFilter<"CreditReservation"> | number
    status?: StringWithAggregatesFilter<"CreditReservation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"CreditReservation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CreditReservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditReservation"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    metadata?: JsonNullableFilter<"Conversation">
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    userId?: StringFilter<"Conversation"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    usageLedger?: UsageLedgerOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    title?: StringNullableFilter<"Conversation"> | string | null
    metadata?: JsonNullableFilter<"Conversation">
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    userId?: StringFilter<"Conversation"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    usageLedger?: UsageLedgerListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    title?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Conversation">
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    userId?: StringWithAggregatesFilter<"Conversation"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    role?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Message">
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type OrgCreateInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateManyInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditWalletCreateInput = {
    id?: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type CreditWalletUncheckedCreateInput = {
    id?: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CreditWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type CreditWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditWalletCreateManyInput = {
    id?: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CreditWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCreditTransactionsInput
    org: OrgCreateNestedOneWithoutCreditTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditTransactionsNestedInput
    org?: OrgUpdateOneRequiredWithoutCreditTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type UsageLedgerCreateInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUsageLedgerInput
    org: OrgCreateNestedOneWithoutUsageLedgerInput
    conversation?: ConversationCreateNestedOneWithoutUsageLedgerInput
  }

  export type UsageLedgerUncheckedCreateInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
    conversationId?: string | null
  }

  export type UsageLedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageLedgerNestedInput
    org?: OrgUpdateOneRequiredWithoutUsageLedgerNestedInput
    conversation?: ConversationUpdateOneWithoutUsageLedgerNestedInput
  }

  export type UsageLedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageLedgerCreateManyInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
    conversationId?: string | null
  }

  export type UsageLedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditReservationCreateInput = {
    id?: string
    userId: string
    requestId: string
    amount: number
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditReservationUncheckedCreateInput = {
    id?: string
    userId: string
    requestId: string
    amount: number
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditReservationCreateManyInput = {
    id?: string
    userId: string
    requestId: string
    amount: number
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type UsageLedgerListRelationFilter = {
    every?: UsageLedgerWhereInput
    some?: UsageLedgerWhereInput
    none?: UsageLedgerWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrgRelationFilter = {
    is?: OrgWhereInput
    isNot?: OrgWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type CreditWalletNullableRelationFilter = {
    is?: CreditWalletWhereInput | null
    isNot?: CreditWalletWhereInput | null
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CreditWalletCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditWalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CreditWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditWalletMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditWalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CreditTransactionUserIdIdempotencyKeyCompoundUniqueInput = {
    userId: string
    idempotencyKey: string
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConversationNullableRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type UsageLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    metadata?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    conversationId?: SortOrder
  }

  export type UsageLedgerAvgOrderByAggregateInput = {
    tokens?: SortOrder
    cost?: SortOrder
  }

  export type UsageLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    conversationId?: SortOrder
  }

  export type UsageLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    provider?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    conversationId?: SortOrder
  }

  export type UsageLedgerSumOrderByAggregateInput = {
    tokens?: SortOrder
    cost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CreditReservationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditReservationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditReservationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditReservationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutOrgInput = {
    create?: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput> | CreditTransactionCreateWithoutOrgInput[] | CreditTransactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutOrgInput | CreditTransactionCreateOrConnectWithoutOrgInput[]
    createMany?: CreditTransactionCreateManyOrgInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UsageLedgerCreateNestedManyWithoutOrgInput = {
    create?: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput> | UsageLedgerCreateWithoutOrgInput[] | UsageLedgerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutOrgInput | UsageLedgerCreateOrConnectWithoutOrgInput[]
    createMany?: UsageLedgerCreateManyOrgInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput> | CreditTransactionCreateWithoutOrgInput[] | CreditTransactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutOrgInput | CreditTransactionCreateOrConnectWithoutOrgInput[]
    createMany?: CreditTransactionCreateManyOrgInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UsageLedgerUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput> | UsageLedgerCreateWithoutOrgInput[] | UsageLedgerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutOrgInput | UsageLedgerCreateOrConnectWithoutOrgInput[]
    createMany?: UsageLedgerCreateManyOrgInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutOrgNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput> | CreditTransactionCreateWithoutOrgInput[] | CreditTransactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutOrgInput | CreditTransactionCreateOrConnectWithoutOrgInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutOrgInput | CreditTransactionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: CreditTransactionCreateManyOrgInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutOrgInput | CreditTransactionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutOrgInput | CreditTransactionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UsageLedgerUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput> | UsageLedgerCreateWithoutOrgInput[] | UsageLedgerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutOrgInput | UsageLedgerCreateOrConnectWithoutOrgInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutOrgInput | UsageLedgerUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UsageLedgerCreateManyOrgInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutOrgInput | UsageLedgerUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutOrgInput | UsageLedgerUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput> | CreditTransactionCreateWithoutOrgInput[] | CreditTransactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutOrgInput | CreditTransactionCreateOrConnectWithoutOrgInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutOrgInput | CreditTransactionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: CreditTransactionCreateManyOrgInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutOrgInput | CreditTransactionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutOrgInput | CreditTransactionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UsageLedgerUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput> | UsageLedgerCreateWithoutOrgInput[] | UsageLedgerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutOrgInput | UsageLedgerCreateOrConnectWithoutOrgInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutOrgInput | UsageLedgerUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UsageLedgerCreateManyOrgInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutOrgInput | UsageLedgerUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutOrgInput | UsageLedgerUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type OrgCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsersInput
    connect?: OrgWhereUniqueInput
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CreditWalletCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditWalletCreateOrConnectWithoutUserInput
    connect?: CreditWalletWhereUniqueInput
  }

  export type CreditTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UsageLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput> | UsageLedgerCreateWithoutUserInput[] | UsageLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutUserInput | UsageLedgerCreateOrConnectWithoutUserInput[]
    createMany?: UsageLedgerCreateManyUserInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CreditWalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditWalletCreateOrConnectWithoutUserInput
    connect?: CreditWalletWhereUniqueInput
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UsageLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput> | UsageLedgerCreateWithoutUserInput[] | UsageLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutUserInput | UsageLedgerCreateOrConnectWithoutUserInput[]
    createMany?: UsageLedgerCreateManyUserInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrgUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsersInput
    upsert?: OrgUpsertWithoutUsersInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutUsersInput, OrgUpdateWithoutUsersInput>, OrgUncheckedUpdateWithoutUsersInput>
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CreditWalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditWalletCreateOrConnectWithoutUserInput
    upsert?: CreditWalletUpsertWithoutUserInput
    disconnect?: CreditWalletWhereInput | boolean
    delete?: CreditWalletWhereInput | boolean
    connect?: CreditWalletWhereUniqueInput
    update?: XOR<XOR<CreditWalletUpdateToOneWithWhereWithoutUserInput, CreditWalletUpdateWithoutUserInput>, CreditWalletUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UsageLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput> | UsageLedgerCreateWithoutUserInput[] | UsageLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutUserInput | UsageLedgerCreateOrConnectWithoutUserInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutUserInput | UsageLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageLedgerCreateManyUserInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutUserInput | UsageLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutUserInput | UsageLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CreditWalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditWalletCreateOrConnectWithoutUserInput
    upsert?: CreditWalletUpsertWithoutUserInput
    disconnect?: CreditWalletWhereInput | boolean
    delete?: CreditWalletWhereInput | boolean
    connect?: CreditWalletWhereUniqueInput
    update?: XOR<XOR<CreditWalletUpdateToOneWithWhereWithoutUserInput, CreditWalletUpdateWithoutUserInput>, CreditWalletUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UsageLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput> | UsageLedgerCreateWithoutUserInput[] | UsageLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutUserInput | UsageLedgerCreateOrConnectWithoutUserInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutUserInput | UsageLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageLedgerCreateManyUserInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutUserInput | UsageLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutUserInput | UsageLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type OrgCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<OrgCreateWithoutCreditTransactionsInput, OrgUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutCreditTransactionsInput
    connect?: OrgWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreditTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    upsert?: UserUpsertWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditTransactionsInput, UserUpdateWithoutCreditTransactionsInput>, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type OrgUpdateOneRequiredWithoutCreditTransactionsNestedInput = {
    create?: XOR<OrgCreateWithoutCreditTransactionsInput, OrgUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutCreditTransactionsInput
    upsert?: OrgUpsertWithoutCreditTransactionsInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutCreditTransactionsInput, OrgUpdateWithoutCreditTransactionsInput>, OrgUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserCreateNestedOneWithoutUsageLedgerInput = {
    create?: XOR<UserCreateWithoutUsageLedgerInput, UserUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLedgerInput
    connect?: UserWhereUniqueInput
  }

  export type OrgCreateNestedOneWithoutUsageLedgerInput = {
    create?: XOR<OrgCreateWithoutUsageLedgerInput, OrgUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsageLedgerInput
    connect?: OrgWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutUsageLedgerInput = {
    create?: XOR<ConversationCreateWithoutUsageLedgerInput, ConversationUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutUsageLedgerInput
    connect?: ConversationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUsageLedgerNestedInput = {
    create?: XOR<UserCreateWithoutUsageLedgerInput, UserUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageLedgerInput
    upsert?: UserUpsertWithoutUsageLedgerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageLedgerInput, UserUpdateWithoutUsageLedgerInput>, UserUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type OrgUpdateOneRequiredWithoutUsageLedgerNestedInput = {
    create?: XOR<OrgCreateWithoutUsageLedgerInput, OrgUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsageLedgerInput
    upsert?: OrgUpsertWithoutUsageLedgerInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutUsageLedgerInput, OrgUpdateWithoutUsageLedgerInput>, OrgUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type ConversationUpdateOneWithoutUsageLedgerNestedInput = {
    create?: XOR<ConversationCreateWithoutUsageLedgerInput, ConversationUncheckedCreateWithoutUsageLedgerInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutUsageLedgerInput
    upsert?: ConversationUpsertWithoutUsageLedgerInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutUsageLedgerInput, ConversationUpdateWithoutUsageLedgerInput>, ConversationUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UsageLedgerCreateNestedManyWithoutConversationInput = {
    create?: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput> | UsageLedgerCreateWithoutConversationInput[] | UsageLedgerUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutConversationInput | UsageLedgerCreateOrConnectWithoutConversationInput[]
    createMany?: UsageLedgerCreateManyConversationInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UsageLedgerUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput> | UsageLedgerCreateWithoutConversationInput[] | UsageLedgerUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutConversationInput | UsageLedgerCreateOrConnectWithoutConversationInput[]
    createMany?: UsageLedgerCreateManyConversationInputEnvelope
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UsageLedgerUpdateManyWithoutConversationNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput> | UsageLedgerCreateWithoutConversationInput[] | UsageLedgerUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutConversationInput | UsageLedgerCreateOrConnectWithoutConversationInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutConversationInput | UsageLedgerUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: UsageLedgerCreateManyConversationInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutConversationInput | UsageLedgerUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutConversationInput | UsageLedgerUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UsageLedgerUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput> | UsageLedgerCreateWithoutConversationInput[] | UsageLedgerUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: UsageLedgerCreateOrConnectWithoutConversationInput | UsageLedgerCreateOrConnectWithoutConversationInput[]
    upsert?: UsageLedgerUpsertWithWhereUniqueWithoutConversationInput | UsageLedgerUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: UsageLedgerCreateManyConversationInputEnvelope
    set?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    disconnect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    delete?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    connect?: UsageLedgerWhereUniqueInput | UsageLedgerWhereUniqueInput[]
    update?: UsageLedgerUpdateWithWhereUniqueWithoutConversationInput | UsageLedgerUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: UsageLedgerUpdateManyWithWhereWithoutConversationInput | UsageLedgerUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutOrgInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrgInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserCreateManyOrgInputEnvelope = {
    data: UserCreateManyOrgInput | UserCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutOrgInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCreditTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutOrgInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type CreditTransactionCreateOrConnectWithoutOrgInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput>
  }

  export type CreditTransactionCreateManyOrgInputEnvelope = {
    data: CreditTransactionCreateManyOrgInput | CreditTransactionCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UsageLedgerCreateWithoutOrgInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUsageLedgerInput
    conversation?: ConversationCreateNestedOneWithoutUsageLedgerInput
  }

  export type UsageLedgerUncheckedCreateWithoutOrgInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type UsageLedgerCreateOrConnectWithoutOrgInput = {
    where: UsageLedgerWhereUniqueInput
    create: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput>
  }

  export type UsageLedgerCreateManyOrgInputEnvelope = {
    data: UsageLedgerCreateManyOrgInput | UsageLedgerCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutOrgInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutOrgInput, CreditTransactionUncheckedUpdateWithoutOrgInput>
    create: XOR<CreditTransactionCreateWithoutOrgInput, CreditTransactionUncheckedCreateWithoutOrgInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutOrgInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutOrgInput, CreditTransactionUncheckedUpdateWithoutOrgInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutOrgInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutOrgInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    amount?: FloatFilter<"CreditTransaction"> | number
    type?: StringFilter<"CreditTransaction"> | string
    reason?: StringNullableFilter<"CreditTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
    orgId?: StringFilter<"CreditTransaction"> | string
  }

  export type UsageLedgerUpsertWithWhereUniqueWithoutOrgInput = {
    where: UsageLedgerWhereUniqueInput
    update: XOR<UsageLedgerUpdateWithoutOrgInput, UsageLedgerUncheckedUpdateWithoutOrgInput>
    create: XOR<UsageLedgerCreateWithoutOrgInput, UsageLedgerUncheckedCreateWithoutOrgInput>
  }

  export type UsageLedgerUpdateWithWhereUniqueWithoutOrgInput = {
    where: UsageLedgerWhereUniqueInput
    data: XOR<UsageLedgerUpdateWithoutOrgInput, UsageLedgerUncheckedUpdateWithoutOrgInput>
  }

  export type UsageLedgerUpdateManyWithWhereWithoutOrgInput = {
    where: UsageLedgerScalarWhereInput
    data: XOR<UsageLedgerUpdateManyMutationInput, UsageLedgerUncheckedUpdateManyWithoutOrgInput>
  }

  export type UsageLedgerScalarWhereInput = {
    AND?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
    OR?: UsageLedgerScalarWhereInput[]
    NOT?: UsageLedgerScalarWhereInput | UsageLedgerScalarWhereInput[]
    id?: StringFilter<"UsageLedger"> | string
    model?: StringFilter<"UsageLedger"> | string
    provider?: StringFilter<"UsageLedger"> | string
    tokens?: IntFilter<"UsageLedger"> | number
    cost?: FloatFilter<"UsageLedger"> | number
    metadata?: JsonNullableFilter<"UsageLedger">
    requestId?: StringNullableFilter<"UsageLedger"> | string | null
    createdAt?: DateTimeFilter<"UsageLedger"> | Date | string
    userId?: StringFilter<"UsageLedger"> | string
    orgId?: StringFilter<"UsageLedger"> | string
    conversationId?: StringNullableFilter<"UsageLedger"> | string | null
  }

  export type OrgCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditTransactions?: CreditTransactionCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutUsersInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditWalletCreateWithoutUserInput = {
    id?: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditWalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditWalletCreateOrConnectWithoutUserInput = {
    where: CreditWalletWhereUniqueInput
    create: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutCreditTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    orgId: string
  }

  export type CreditTransactionCreateOrConnectWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionCreateManyUserInputEnvelope = {
    data: CreditTransactionCreateManyUserInput | CreditTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsageLedgerCreateWithoutUserInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutUsageLedgerInput
    conversation?: ConversationCreateNestedOneWithoutUsageLedgerInput
  }

  export type UsageLedgerUncheckedCreateWithoutUserInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    orgId: string
    conversationId?: string | null
  }

  export type UsageLedgerCreateOrConnectWithoutUserInput = {
    where: UsageLedgerWhereUniqueInput
    create: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput>
  }

  export type UsageLedgerCreateManyUserInputEnvelope = {
    data: UsageLedgerCreateManyUserInput | UsageLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrgUpsertWithoutUsersInput = {
    update: XOR<OrgUpdateWithoutUsersInput, OrgUncheckedUpdateWithoutUsersInput>
    create: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutUsersInput, OrgUncheckedUpdateWithoutUsersInput>
  }

  export type OrgUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransactions?: CreditTransactionUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
  }

  export type CreditWalletUpsertWithoutUserInput = {
    update: XOR<CreditWalletUpdateWithoutUserInput, CreditWalletUncheckedUpdateWithoutUserInput>
    create: XOR<CreditWalletCreateWithoutUserInput, CreditWalletUncheckedCreateWithoutUserInput>
    where?: CreditWalletWhereInput
  }

  export type CreditWalletUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditWalletWhereInput
    data: XOR<CreditWalletUpdateWithoutUserInput, CreditWalletUncheckedUpdateWithoutUserInput>
  }

  export type CreditWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type UsageLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: UsageLedgerWhereUniqueInput
    update: XOR<UsageLedgerUpdateWithoutUserInput, UsageLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<UsageLedgerCreateWithoutUserInput, UsageLedgerUncheckedCreateWithoutUserInput>
  }

  export type UsageLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: UsageLedgerWhereUniqueInput
    data: XOR<UsageLedgerUpdateWithoutUserInput, UsageLedgerUncheckedUpdateWithoutUserInput>
  }

  export type UsageLedgerUpdateManyWithWhereWithoutUserInput = {
    where: UsageLedgerScalarWhereInput
    data: XOR<UsageLedgerUpdateManyMutationInput, UsageLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    metadata?: JsonNullableFilter<"Conversation">
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    userId?: StringFilter<"Conversation"> | string
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditTransactionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type OrgCreateWithoutCreditTransactionsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutCreditTransactionsInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutCreditTransactionsInput, OrgUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type UserUpsertWithoutCreditTransactionsInput = {
    update: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrgUpsertWithoutCreditTransactionsInput = {
    update: XOR<OrgUpdateWithoutCreditTransactionsInput, OrgUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<OrgCreateWithoutCreditTransactionsInput, OrgUncheckedCreateWithoutCreditTransactionsInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutCreditTransactionsInput, OrgUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type OrgUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserCreateWithoutUsageLedgerInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageLedgerInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageLedgerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageLedgerInput, UserUncheckedCreateWithoutUsageLedgerInput>
  }

  export type OrgCreateWithoutUsageLedgerInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutUsageLedgerInput = {
    id?: string
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutUsageLedgerInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutUsageLedgerInput, OrgUncheckedCreateWithoutUsageLedgerInput>
  }

  export type ConversationCreateWithoutUsageLedgerInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUsageLedgerInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUsageLedgerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUsageLedgerInput, ConversationUncheckedCreateWithoutUsageLedgerInput>
  }

  export type UserUpsertWithoutUsageLedgerInput = {
    update: XOR<UserUpdateWithoutUsageLedgerInput, UserUncheckedUpdateWithoutUsageLedgerInput>
    create: XOR<UserCreateWithoutUsageLedgerInput, UserUncheckedCreateWithoutUsageLedgerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageLedgerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageLedgerInput, UserUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type UserUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrgUpsertWithoutUsageLedgerInput = {
    update: XOR<OrgUpdateWithoutUsageLedgerInput, OrgUncheckedUpdateWithoutUsageLedgerInput>
    create: XOR<OrgCreateWithoutUsageLedgerInput, OrgUncheckedCreateWithoutUsageLedgerInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutUsageLedgerInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutUsageLedgerInput, OrgUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type OrgUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ConversationUpsertWithoutUsageLedgerInput = {
    update: XOR<ConversationUpdateWithoutUsageLedgerInput, ConversationUncheckedUpdateWithoutUsageLedgerInput>
    create: XOR<ConversationCreateWithoutUsageLedgerInput, ConversationUncheckedCreateWithoutUsageLedgerInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutUsageLedgerInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutUsageLedgerInput, ConversationUncheckedUpdateWithoutUsageLedgerInput>
  }

  export type ConversationUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUsageLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    wallet?: CreditWalletCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    wallet?: CreditWalletUncheckedCreateNestedOneWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UsageLedgerCreateWithoutConversationInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUsageLedgerInput
    org: OrgCreateNestedOneWithoutUsageLedgerInput
  }

  export type UsageLedgerUncheckedCreateWithoutConversationInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
  }

  export type UsageLedgerCreateOrConnectWithoutConversationInput = {
    where: UsageLedgerWhereUniqueInput
    create: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput>
  }

  export type UsageLedgerCreateManyConversationInputEnvelope = {
    data: UsageLedgerCreateManyConversationInput | UsageLedgerCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
  }

  export type UsageLedgerUpsertWithWhereUniqueWithoutConversationInput = {
    where: UsageLedgerWhereUniqueInput
    update: XOR<UsageLedgerUpdateWithoutConversationInput, UsageLedgerUncheckedUpdateWithoutConversationInput>
    create: XOR<UsageLedgerCreateWithoutConversationInput, UsageLedgerUncheckedCreateWithoutConversationInput>
  }

  export type UsageLedgerUpdateWithWhereUniqueWithoutConversationInput = {
    where: UsageLedgerWhereUniqueInput
    data: XOR<UsageLedgerUpdateWithoutConversationInput, UsageLedgerUncheckedUpdateWithoutConversationInput>
  }

  export type UsageLedgerUpdateManyWithWhereWithoutConversationInput = {
    where: UsageLedgerScalarWhereInput
    data: XOR<UsageLedgerUpdateManyMutationInput, UsageLedgerUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    usageLedger?: UsageLedgerCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    usageLedger?: UsageLedgerUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UserCreateManyOrgInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTransactionCreateManyOrgInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type UsageLedgerCreateManyOrgInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type UserUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    wallet?: CreditWalletUncheckedUpdateOneWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UsageLedgerUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageLedgerNestedInput
    conversation?: ConversationUpdateOneWithoutUsageLedgerNestedInput
  }

  export type UsageLedgerUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageLedgerUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    key?: string
    name: string
    isActive?: boolean
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CreditTransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: string
    reason?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    orgId: string
  }

  export type UsageLedgerCreateManyUserInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    orgId: string
    conversationId?: string | null
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    title?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutCreditTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type UsageLedgerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsageLedgerNestedInput
    conversation?: ConversationUpdateOneWithoutUsageLedgerNestedInput
  }

  export type UsageLedgerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
    usageLedger?: UsageLedgerUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    usageLedger?: UsageLedgerUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    role: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UsageLedgerCreateManyConversationInput = {
    id?: string
    model: string
    provider: string
    tokens: number
    cost: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: string | null
    createdAt?: Date | string
    userId: string
    orgId: string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLedgerUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageLedgerNestedInput
    org?: OrgUpdateOneRequiredWithoutUsageLedgerNestedInput
  }

  export type UsageLedgerUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type UsageLedgerUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrgCountOutputTypeDefaultArgs instead
     */
    export type OrgCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
     */
    export type ConversationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrgDefaultArgs instead
     */
    export type OrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiKeyDefaultArgs instead
     */
    export type ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditWalletDefaultArgs instead
     */
    export type CreditWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditWalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionDefaultArgs instead
     */
    export type CreditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsageLedgerDefaultArgs instead
     */
    export type UsageLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsageLedgerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditReservationDefaultArgs instead
     */
    export type CreditReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}