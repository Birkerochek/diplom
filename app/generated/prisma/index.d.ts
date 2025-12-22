
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventRegistration
 * 
 */
export type EventRegistration = $Result.DefaultSelection<Prisma.$EventRegistrationPayload>
/**
 * Model VolunteerHour
 * 
 */
export type VolunteerHour = $Result.DefaultSelection<Prisma.$VolunteerHourPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model ActivityType
 * 
 */
export type ActivityType = $Result.DefaultSelection<Prisma.$ActivityTypePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  volunteer: 'volunteer',
  organizer: 'organizer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EventStatus: {
  draft: 'draft',
  published: 'published',
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const RegistrationStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const SourceType: {
  auto: 'auto',
  manual: 'manual'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRegistration`: Exposes CRUD operations for the **EventRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRegistrations
    * const eventRegistrations = await prisma.eventRegistration.findMany()
    * ```
    */
  get eventRegistration(): Prisma.EventRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerHour`: Exposes CRUD operations for the **VolunteerHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerHours
    * const volunteerHours = await prisma.volunteerHour.findMany()
    * ```
    */
  get volunteerHour(): Prisma.VolunteerHourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityType`: Exposes CRUD operations for the **ActivityType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityTypes
    * const activityTypes = await prisma.activityType.findMany()
    * ```
    */
  get activityType(): Prisma.ActivityTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Event: 'Event',
    EventRegistration: 'EventRegistration',
    VolunteerHour: 'VolunteerHour',
    Certificate: 'Certificate',
    ActivityType: 'ActivityType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventRegistration" | "volunteerHour" | "certificate" | "activityType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventRegistration: {
        payload: Prisma.$EventRegistrationPayload<ExtArgs>
        fields: Prisma.EventRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findFirst: {
            args: Prisma.EventRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findMany: {
            args: Prisma.EventRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          create: {
            args: Prisma.EventRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          createMany: {
            args: Prisma.EventRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          delete: {
            args: Prisma.EventRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          update: {
            args: Prisma.EventRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.EventRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.EventRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          aggregate: {
            args: Prisma.EventRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRegistration>
          }
          groupBy: {
            args: Prisma.EventRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationCountAggregateOutputType> | number
          }
        }
      }
      VolunteerHour: {
        payload: Prisma.$VolunteerHourPayload<ExtArgs>
        fields: Prisma.VolunteerHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          findFirst: {
            args: Prisma.VolunteerHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          findMany: {
            args: Prisma.VolunteerHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>[]
          }
          create: {
            args: Prisma.VolunteerHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          createMany: {
            args: Prisma.VolunteerHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>[]
          }
          delete: {
            args: Prisma.VolunteerHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          update: {
            args: Prisma.VolunteerHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerHourPayload>
          }
          aggregate: {
            args: Prisma.VolunteerHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerHour>
          }
          groupBy: {
            args: Prisma.VolunteerHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerHourCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerHourCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      ActivityType: {
        payload: Prisma.$ActivityTypePayload<ExtArgs>
        fields: Prisma.ActivityTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findFirst: {
            args: Prisma.ActivityTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findMany: {
            args: Prisma.ActivityTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          create: {
            args: Prisma.ActivityTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          createMany: {
            args: Prisma.ActivityTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          delete: {
            args: Prisma.ActivityTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          update: {
            args: Prisma.ActivityTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          deleteMany: {
            args: Prisma.ActivityTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          upsert: {
            args: Prisma.ActivityTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          aggregate: {
            args: Prisma.ActivityTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityType>
          }
          groupBy: {
            args: Prisma.ActivityTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventRegistration?: EventRegistrationOmit
    volunteerHour?: VolunteerHourOmit
    certificate?: CertificateOmit
    activityType?: ActivityTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    events: number
    registrations: number
    volunteerHours: number
    certificates: number
    verifiedHours: number
    reviewedRegistrations: number
    issuedCertificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
    volunteerHours?: boolean | UserCountOutputTypeCountVolunteerHoursArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
    verifiedHours?: boolean | UserCountOutputTypeCountVerifiedHoursArgs
    reviewedRegistrations?: boolean | UserCountOutputTypeCountReviewedRegistrationsArgs
    issuedCertificates?: boolean | UserCountOutputTypeCountIssuedCertificatesArgs
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
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVolunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerHourWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerHourWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssuedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    registrations: number
    volunteerHours: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    volunteerHours?: boolean | EventCountOutputTypeCountVolunteerHoursArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVolunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerHourWhereInput
  }


  /**
   * Count Type EventRegistrationCountOutputType
   */

  export type EventRegistrationCountOutputType = {
    volunteerHours: number
  }

  export type EventRegistrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteerHours?: boolean | EventRegistrationCountOutputTypeCountVolunteerHoursArgs
  }

  // Custom InputTypes
  /**
   * EventRegistrationCountOutputType without action
   */
  export type EventRegistrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistrationCountOutputType
     */
    select?: EventRegistrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventRegistrationCountOutputType without action
   */
  export type EventRegistrationCountOutputTypeCountVolunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerHourWhereInput
  }


  /**
   * Models
   */

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
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    phone: string | null
    bio: string | null
    avatarUrl: string | null
    organizationName: string | null
    organizationDescription: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    phone: string | null
    bio: string | null
    avatarUrl: string | null
    organizationName: string | null
    organizationDescription: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    phone: number
    bio: number
    avatarUrl: number
    preferredActivities: number
    organizationName: number
    organizationDescription: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    bio?: true
    avatarUrl?: true
    organizationName?: true
    organizationDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    bio?: true
    avatarUrl?: true
    organizationName?: true
    organizationDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    bio?: true
    avatarUrl?: true
    preferredActivities?: true
    organizationName?: true
    organizationDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    passwordHash: string
    name: string
    role: $Enums.Role
    phone: string | null
    bio: string | null
    avatarUrl: string | null
    preferredActivities: string[]
    organizationName: string | null
    organizationDescription: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    bio?: boolean
    avatarUrl?: boolean
    preferredActivities?: boolean
    organizationName?: boolean
    organizationDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    volunteerHours?: boolean | User$volunteerHoursArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    verifiedHours?: boolean | User$verifiedHoursArgs<ExtArgs>
    reviewedRegistrations?: boolean | User$reviewedRegistrationsArgs<ExtArgs>
    issuedCertificates?: boolean | User$issuedCertificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    bio?: boolean
    avatarUrl?: boolean
    preferredActivities?: boolean
    organizationName?: boolean
    organizationDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    bio?: boolean
    avatarUrl?: boolean
    preferredActivities?: boolean
    organizationName?: boolean
    organizationDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    bio?: boolean
    avatarUrl?: boolean
    preferredActivities?: boolean
    organizationName?: boolean
    organizationDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "phone" | "bio" | "avatarUrl" | "preferredActivities" | "organizationName" | "organizationDescription" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    volunteerHours?: boolean | User$volunteerHoursArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    verifiedHours?: boolean | User$verifiedHoursArgs<ExtArgs>
    reviewedRegistrations?: boolean | User$reviewedRegistrationsArgs<ExtArgs>
    issuedCertificates?: boolean | User$issuedCertificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      registrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      volunteerHours: Prisma.$VolunteerHourPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      verifiedHours: Prisma.$VolunteerHourPayload<ExtArgs>[]
      reviewedRegistrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      issuedCertificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      phone: string | null
      bio: string | null
      avatarUrl: string | null
      preferredActivities: string[]
      organizationName: string | null
      organizationDescription: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteerHours<T extends User$volunteerHoursArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedHours<T extends User$verifiedHoursArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedRegistrations<T extends User$reviewedRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issuedCertificates<T extends User$issuedCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$issuedCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly preferredActivities: FieldRef<"User", 'String[]'>
    readonly organizationName: FieldRef<"User", 'String'>
    readonly organizationDescription: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * User.volunteerHours
   */
  export type User$volunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    where?: VolunteerHourWhereInput
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    cursor?: VolunteerHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.verifiedHours
   */
  export type User$verifiedHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    where?: VolunteerHourWhereInput
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    cursor?: VolunteerHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * User.reviewedRegistrations
   */
  export type User$reviewedRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * User.issuedCertificates
   */
  export type User$issuedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    requiredHours: number | null
    maxParticipants: number | null
    currentParticipants: number | null
  }

  export type EventSumAggregateOutputType = {
    requiredHours: number | null
    maxParticipants: number | null
    currentParticipants: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    organizerId: string | null
    title: string | null
    description: string | null
    activityType: string | null
    eventDate: Date | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    address: string | null
    requiredHours: number | null
    maxParticipants: number | null
    currentParticipants: number | null
    requirements: string | null
    status: $Enums.EventStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    organizerId: string | null
    title: string | null
    description: string | null
    activityType: string | null
    eventDate: Date | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    address: string | null
    requiredHours: number | null
    maxParticipants: number | null
    currentParticipants: number | null
    requirements: string | null
    status: $Enums.EventStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizerId: number
    title: number
    description: number
    activityType: number
    eventDate: number
    startTime: number
    endTime: number
    location: number
    address: number
    requiredHours: number
    maxParticipants: number
    currentParticipants: number
    requirements: number
    skillsNeeded: number
    status: number
    tags: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    requiredHours?: true
    maxParticipants?: true
    currentParticipants?: true
  }

  export type EventSumAggregateInputType = {
    requiredHours?: true
    maxParticipants?: true
    currentParticipants?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    activityType?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    requiredHours?: true
    maxParticipants?: true
    currentParticipants?: true
    requirements?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    activityType?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    requiredHours?: true
    maxParticipants?: true
    currentParticipants?: true
    requirements?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    activityType?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    requiredHours?: true
    maxParticipants?: true
    currentParticipants?: true
    requirements?: true
    skillsNeeded?: true
    status?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    organizerId: string
    title: string
    description: string | null
    activityType: string
    eventDate: Date
    startTime: Date
    endTime: Date
    location: string
    address: string | null
    requiredHours: number
    maxParticipants: number | null
    currentParticipants: number | null
    requirements: string | null
    skillsNeeded: string[]
    status: $Enums.EventStatus
    tags: string[]
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    activityType?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    requiredHours?: boolean
    maxParticipants?: boolean
    currentParticipants?: boolean
    requirements?: boolean
    skillsNeeded?: boolean
    status?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    volunteerHours?: boolean | Event$volunteerHoursArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    activityType?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    requiredHours?: boolean
    maxParticipants?: boolean
    currentParticipants?: boolean
    requirements?: boolean
    skillsNeeded?: boolean
    status?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    activityType?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    requiredHours?: boolean
    maxParticipants?: boolean
    currentParticipants?: boolean
    requirements?: boolean
    skillsNeeded?: boolean
    status?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    activityType?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    requiredHours?: boolean
    maxParticipants?: boolean
    currentParticipants?: boolean
    requirements?: boolean
    skillsNeeded?: boolean
    status?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "title" | "description" | "activityType" | "eventDate" | "startTime" | "endTime" | "location" | "address" | "requiredHours" | "maxParticipants" | "currentParticipants" | "requirements" | "skillsNeeded" | "status" | "tags" | "createdAt" | "updatedAt" | "publishedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    volunteerHours?: boolean | Event$volunteerHoursArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      registrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      volunteerHours: Prisma.$VolunteerHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizerId: string
      title: string
      description: string | null
      activityType: string
      eventDate: Date
      startTime: Date
      endTime: Date
      location: string
      address: string | null
      requiredHours: number
      maxParticipants: number | null
      currentParticipants: number | null
      requirements: string | null
      skillsNeeded: string[]
      status: $Enums.EventStatus
      tags: string[]
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteerHours<T extends Event$volunteerHoursArgs<ExtArgs> = {}>(args?: Subset<T, Event$volunteerHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly activityType: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly endTime: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly requiredHours: FieldRef<"Event", 'Int'>
    readonly maxParticipants: FieldRef<"Event", 'Int'>
    readonly currentParticipants: FieldRef<"Event", 'Int'>
    readonly requirements: FieldRef<"Event", 'String'>
    readonly skillsNeeded: FieldRef<"Event", 'String[]'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly tags: FieldRef<"Event", 'String[]'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly publishedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * Event.volunteerHours
   */
  export type Event$volunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    where?: VolunteerHourWhereInput
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    cursor?: VolunteerHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventRegistration
   */

  export type AggregateEventRegistration = {
    _count: EventRegistrationCountAggregateOutputType | null
    _avg: EventRegistrationAvgAggregateOutputType | null
    _sum: EventRegistrationSumAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  export type EventRegistrationAvgAggregateOutputType = {
    hoursCompleted: number | null
    rating: number | null
  }

  export type EventRegistrationSumAggregateOutputType = {
    hoursCompleted: number | null
    rating: number | null
  }

  export type EventRegistrationMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    volunteerId: string | null
    motivationLetter: string | null
    status: $Enums.RegistrationStatus | null
    rejectionReason: string | null
    attended: boolean | null
    hoursCompleted: number | null
    feedback: string | null
    rating: number | null
    reviewedById: string | null
    registeredAt: Date | null
    reviewedAt: Date | null
    completedAt: Date | null
  }

  export type EventRegistrationMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    volunteerId: string | null
    motivationLetter: string | null
    status: $Enums.RegistrationStatus | null
    rejectionReason: string | null
    attended: boolean | null
    hoursCompleted: number | null
    feedback: string | null
    rating: number | null
    reviewedById: string | null
    registeredAt: Date | null
    reviewedAt: Date | null
    completedAt: Date | null
  }

  export type EventRegistrationCountAggregateOutputType = {
    id: number
    eventId: number
    volunteerId: number
    motivationLetter: number
    status: number
    rejectionReason: number
    attended: number
    hoursCompleted: number
    feedback: number
    rating: number
    reviewedById: number
    registeredAt: number
    reviewedAt: number
    completedAt: number
    _all: number
  }


  export type EventRegistrationAvgAggregateInputType = {
    hoursCompleted?: true
    rating?: true
  }

  export type EventRegistrationSumAggregateInputType = {
    hoursCompleted?: true
    rating?: true
  }

  export type EventRegistrationMinAggregateInputType = {
    id?: true
    eventId?: true
    volunteerId?: true
    motivationLetter?: true
    status?: true
    rejectionReason?: true
    attended?: true
    hoursCompleted?: true
    feedback?: true
    rating?: true
    reviewedById?: true
    registeredAt?: true
    reviewedAt?: true
    completedAt?: true
  }

  export type EventRegistrationMaxAggregateInputType = {
    id?: true
    eventId?: true
    volunteerId?: true
    motivationLetter?: true
    status?: true
    rejectionReason?: true
    attended?: true
    hoursCompleted?: true
    feedback?: true
    rating?: true
    reviewedById?: true
    registeredAt?: true
    reviewedAt?: true
    completedAt?: true
  }

  export type EventRegistrationCountAggregateInputType = {
    id?: true
    eventId?: true
    volunteerId?: true
    motivationLetter?: true
    status?: true
    rejectionReason?: true
    attended?: true
    hoursCompleted?: true
    feedback?: true
    rating?: true
    reviewedById?: true
    registeredAt?: true
    reviewedAt?: true
    completedAt?: true
    _all?: true
  }

  export type EventRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistration to aggregate.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRegistrations
    **/
    _count?: true | EventRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventRegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventRegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type GetEventRegistrationAggregateType<T extends EventRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRegistration[P]>
      : GetScalarType<T[P], AggregateEventRegistration[P]>
  }




  export type EventRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithAggregationInput | EventRegistrationOrderByWithAggregationInput[]
    by: EventRegistrationScalarFieldEnum[] | EventRegistrationScalarFieldEnum
    having?: EventRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRegistrationCountAggregateInputType | true
    _avg?: EventRegistrationAvgAggregateInputType
    _sum?: EventRegistrationSumAggregateInputType
    _min?: EventRegistrationMinAggregateInputType
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type EventRegistrationGroupByOutputType = {
    id: string
    eventId: string
    volunteerId: string
    motivationLetter: string | null
    status: $Enums.RegistrationStatus
    rejectionReason: string | null
    attended: boolean
    hoursCompleted: number | null
    feedback: string | null
    rating: number | null
    reviewedById: string | null
    registeredAt: Date
    reviewedAt: Date | null
    completedAt: Date | null
    _count: EventRegistrationCountAggregateOutputType | null
    _avg: EventRegistrationAvgAggregateOutputType | null
    _sum: EventRegistrationSumAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  type GetEventRegistrationGroupByPayload<T extends EventRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type EventRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    volunteerId?: boolean
    motivationLetter?: boolean
    status?: boolean
    rejectionReason?: boolean
    attended?: boolean
    hoursCompleted?: boolean
    feedback?: boolean
    rating?: boolean
    reviewedById?: boolean
    registeredAt?: boolean
    reviewedAt?: boolean
    completedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
    volunteerHours?: boolean | EventRegistration$volunteerHoursArgs<ExtArgs>
    _count?: boolean | EventRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    volunteerId?: boolean
    motivationLetter?: boolean
    status?: boolean
    rejectionReason?: boolean
    attended?: boolean
    hoursCompleted?: boolean
    feedback?: boolean
    rating?: boolean
    reviewedById?: boolean
    registeredAt?: boolean
    reviewedAt?: boolean
    completedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    volunteerId?: boolean
    motivationLetter?: boolean
    status?: boolean
    rejectionReason?: boolean
    attended?: boolean
    hoursCompleted?: boolean
    feedback?: boolean
    rating?: boolean
    reviewedById?: boolean
    registeredAt?: boolean
    reviewedAt?: boolean
    completedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectScalar = {
    id?: boolean
    eventId?: boolean
    volunteerId?: boolean
    motivationLetter?: boolean
    status?: boolean
    rejectionReason?: boolean
    attended?: boolean
    hoursCompleted?: boolean
    feedback?: boolean
    rating?: boolean
    reviewedById?: boolean
    registeredAt?: boolean
    reviewedAt?: boolean
    completedAt?: boolean
  }

  export type EventRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "volunteerId" | "motivationLetter" | "status" | "rejectionReason" | "attended" | "hoursCompleted" | "feedback" | "rating" | "reviewedById" | "registeredAt" | "reviewedAt" | "completedAt", ExtArgs["result"]["eventRegistration"]>
  export type EventRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
    volunteerHours?: boolean | EventRegistration$volunteerHoursArgs<ExtArgs>
    _count?: boolean | EventRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
  }
  export type EventRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | EventRegistration$reviewedByArgs<ExtArgs>
  }

  export type $EventRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRegistration"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      volunteer: Prisma.$UserPayload<ExtArgs>
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
      volunteerHours: Prisma.$VolunteerHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      volunteerId: string
      motivationLetter: string | null
      status: $Enums.RegistrationStatus
      rejectionReason: string | null
      attended: boolean
      hoursCompleted: number | null
      feedback: string | null
      rating: number | null
      reviewedById: string | null
      registeredAt: Date
      reviewedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["eventRegistration"]>
    composites: {}
  }

  type EventRegistrationGetPayload<S extends boolean | null | undefined | EventRegistrationDefaultArgs> = $Result.GetResult<Prisma.$EventRegistrationPayload, S>

  type EventRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRegistrationCountAggregateInputType | true
    }

  export interface EventRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRegistration'], meta: { name: 'EventRegistration' } }
    /**
     * Find zero or one EventRegistration that matches the filter.
     * @param {EventRegistrationFindUniqueArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRegistrationFindUniqueArgs>(args: SelectSubset<T, EventRegistrationFindUniqueArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRegistrationFindUniqueOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRegistrationFindFirstArgs>(args?: SelectSubset<T, EventRegistrationFindFirstArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany()
     * 
     * // Get first 10 EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRegistrationFindManyArgs>(args?: SelectSubset<T, EventRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRegistration.
     * @param {EventRegistrationCreateArgs} args - Arguments to create a EventRegistration.
     * @example
     * // Create one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.create({
     *   data: {
     *     // ... data to create a EventRegistration
     *   }
     * })
     * 
     */
    create<T extends EventRegistrationCreateArgs>(args: SelectSubset<T, EventRegistrationCreateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRegistrations.
     * @param {EventRegistrationCreateManyArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRegistrationCreateManyArgs>(args?: SelectSubset<T, EventRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRegistrations and returns the data saved in the database.
     * @param {EventRegistrationCreateManyAndReturnArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRegistration.
     * @param {EventRegistrationDeleteArgs} args - Arguments to delete one EventRegistration.
     * @example
     * // Delete one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.delete({
     *   where: {
     *     // ... filter to delete one EventRegistration
     *   }
     * })
     * 
     */
    delete<T extends EventRegistrationDeleteArgs>(args: SelectSubset<T, EventRegistrationDeleteArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRegistration.
     * @param {EventRegistrationUpdateArgs} args - Arguments to update one EventRegistration.
     * @example
     * // Update one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRegistrationUpdateArgs>(args: SelectSubset<T, EventRegistrationUpdateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRegistrations.
     * @param {EventRegistrationDeleteManyArgs} args - Arguments to filter EventRegistrations to delete.
     * @example
     * // Delete a few EventRegistrations
     * const { count } = await prisma.eventRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRegistrationDeleteManyArgs>(args?: SelectSubset<T, EventRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRegistrationUpdateManyArgs>(args: SelectSubset<T, EventRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations and returns the data updated in the database.
     * @param {EventRegistrationUpdateManyAndReturnArgs} args - Arguments to update many EventRegistrations.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRegistration.
     * @param {EventRegistrationUpsertArgs} args - Arguments to update or create a EventRegistration.
     * @example
     * // Update or create a EventRegistration
     * const eventRegistration = await prisma.eventRegistration.upsert({
     *   create: {
     *     // ... data to create a EventRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRegistration we want to update
     *   }
     * })
     */
    upsert<T extends EventRegistrationUpsertArgs>(args: SelectSubset<T, EventRegistrationUpsertArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationCountArgs} args - Arguments to filter EventRegistrations to count.
     * @example
     * // Count the number of EventRegistrations
     * const count = await prisma.eventRegistration.count({
     *   where: {
     *     // ... the filter for the EventRegistrations we want to count
     *   }
     * })
    **/
    count<T extends EventRegistrationCountArgs>(
      args?: Subset<T, EventRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRegistrationAggregateArgs>(args: Subset<T, EventRegistrationAggregateArgs>): Prisma.PrismaPromise<GetEventRegistrationAggregateType<T>>

    /**
     * Group by EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationGroupByArgs} args - Group by arguments.
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
      T extends EventRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: EventRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRegistration model
   */
  readonly fields: EventRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends EventRegistration$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, EventRegistration$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    volunteerHours<T extends EventRegistration$volunteerHoursArgs<ExtArgs> = {}>(args?: Subset<T, EventRegistration$volunteerHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventRegistration model
   */
  interface EventRegistrationFieldRefs {
    readonly id: FieldRef<"EventRegistration", 'String'>
    readonly eventId: FieldRef<"EventRegistration", 'String'>
    readonly volunteerId: FieldRef<"EventRegistration", 'String'>
    readonly motivationLetter: FieldRef<"EventRegistration", 'String'>
    readonly status: FieldRef<"EventRegistration", 'RegistrationStatus'>
    readonly rejectionReason: FieldRef<"EventRegistration", 'String'>
    readonly attended: FieldRef<"EventRegistration", 'Boolean'>
    readonly hoursCompleted: FieldRef<"EventRegistration", 'Int'>
    readonly feedback: FieldRef<"EventRegistration", 'String'>
    readonly rating: FieldRef<"EventRegistration", 'Int'>
    readonly reviewedById: FieldRef<"EventRegistration", 'String'>
    readonly registeredAt: FieldRef<"EventRegistration", 'DateTime'>
    readonly reviewedAt: FieldRef<"EventRegistration", 'DateTime'>
    readonly completedAt: FieldRef<"EventRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventRegistration findUnique
   */
  export type EventRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findUniqueOrThrow
   */
  export type EventRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findFirst
   */
  export type EventRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findFirstOrThrow
   */
  export type EventRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findMany
   */
  export type EventRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistrations to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration create
   */
  export type EventRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRegistration.
     */
    data: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
  }

  /**
   * EventRegistration createMany
   */
  export type EventRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRegistration createManyAndReturn
   */
  export type EventRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration update
   */
  export type EventRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRegistration.
     */
    data: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
    /**
     * Choose, which EventRegistration to update.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration updateMany
   */
  export type EventRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
  }

  /**
   * EventRegistration updateManyAndReturn
   */
  export type EventRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration upsert
   */
  export type EventRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRegistration to update in case it exists.
     */
    where: EventRegistrationWhereUniqueInput
    /**
     * In case the EventRegistration found by the `where` argument doesn't exist, create a new EventRegistration with this data.
     */
    create: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
    /**
     * In case the EventRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
  }

  /**
   * EventRegistration delete
   */
  export type EventRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter which EventRegistration to delete.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration deleteMany
   */
  export type EventRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistrations to delete
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to delete.
     */
    limit?: number
  }

  /**
   * EventRegistration.reviewedBy
   */
  export type EventRegistration$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EventRegistration.volunteerHours
   */
  export type EventRegistration$volunteerHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    where?: VolunteerHourWhereInput
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    cursor?: VolunteerHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * EventRegistration without action
   */
  export type EventRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerHour
   */

  export type AggregateVolunteerHour = {
    _count: VolunteerHourCountAggregateOutputType | null
    _avg: VolunteerHourAvgAggregateOutputType | null
    _sum: VolunteerHourSumAggregateOutputType | null
    _min: VolunteerHourMinAggregateOutputType | null
    _max: VolunteerHourMaxAggregateOutputType | null
  }

  export type VolunteerHourAvgAggregateOutputType = {
    hours: number | null
  }

  export type VolunteerHourSumAggregateOutputType = {
    hours: number | null
  }

  export type VolunteerHourMinAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    eventId: string | null
    registrationId: string | null
    hours: number | null
    activityType: string | null
    date: Date | null
    title: string | null
    description: string | null
    verified: boolean | null
    verifiedById: string | null
    verifiedAt: Date | null
    source: $Enums.SourceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerHourMaxAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    eventId: string | null
    registrationId: string | null
    hours: number | null
    activityType: string | null
    date: Date | null
    title: string | null
    description: string | null
    verified: boolean | null
    verifiedById: string | null
    verifiedAt: Date | null
    source: $Enums.SourceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerHourCountAggregateOutputType = {
    id: number
    volunteerId: number
    eventId: number
    registrationId: number
    hours: number
    activityType: number
    date: number
    title: number
    description: number
    verified: number
    verifiedById: number
    verifiedAt: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerHourAvgAggregateInputType = {
    hours?: true
  }

  export type VolunteerHourSumAggregateInputType = {
    hours?: true
  }

  export type VolunteerHourMinAggregateInputType = {
    id?: true
    volunteerId?: true
    eventId?: true
    registrationId?: true
    hours?: true
    activityType?: true
    date?: true
    title?: true
    description?: true
    verified?: true
    verifiedById?: true
    verifiedAt?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerHourMaxAggregateInputType = {
    id?: true
    volunteerId?: true
    eventId?: true
    registrationId?: true
    hours?: true
    activityType?: true
    date?: true
    title?: true
    description?: true
    verified?: true
    verifiedById?: true
    verifiedAt?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerHourCountAggregateInputType = {
    id?: true
    volunteerId?: true
    eventId?: true
    registrationId?: true
    hours?: true
    activityType?: true
    date?: true
    title?: true
    description?: true
    verified?: true
    verifiedById?: true
    verifiedAt?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerHour to aggregate.
     */
    where?: VolunteerHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerHours to fetch.
     */
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerHours
    **/
    _count?: true | VolunteerHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerHourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerHourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerHourMaxAggregateInputType
  }

  export type GetVolunteerHourAggregateType<T extends VolunteerHourAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerHour[P]>
      : GetScalarType<T[P], AggregateVolunteerHour[P]>
  }




  export type VolunteerHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerHourWhereInput
    orderBy?: VolunteerHourOrderByWithAggregationInput | VolunteerHourOrderByWithAggregationInput[]
    by: VolunteerHourScalarFieldEnum[] | VolunteerHourScalarFieldEnum
    having?: VolunteerHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerHourCountAggregateInputType | true
    _avg?: VolunteerHourAvgAggregateInputType
    _sum?: VolunteerHourSumAggregateInputType
    _min?: VolunteerHourMinAggregateInputType
    _max?: VolunteerHourMaxAggregateInputType
  }

  export type VolunteerHourGroupByOutputType = {
    id: string
    volunteerId: string
    eventId: string | null
    registrationId: string | null
    hours: number
    activityType: string
    date: Date
    title: string | null
    description: string | null
    verified: boolean
    verifiedById: string | null
    verifiedAt: Date | null
    source: $Enums.SourceType
    createdAt: Date
    updatedAt: Date
    _count: VolunteerHourCountAggregateOutputType | null
    _avg: VolunteerHourAvgAggregateOutputType | null
    _sum: VolunteerHourSumAggregateOutputType | null
    _min: VolunteerHourMinAggregateOutputType | null
    _max: VolunteerHourMaxAggregateOutputType | null
  }

  type GetVolunteerHourGroupByPayload<T extends VolunteerHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerHourGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerHourGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    eventId?: boolean
    registrationId?: boolean
    hours?: boolean
    activityType?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    verified?: boolean
    verifiedById?: boolean
    verifiedAt?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerHour"]>

  export type VolunteerHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    eventId?: boolean
    registrationId?: boolean
    hours?: boolean
    activityType?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    verified?: boolean
    verifiedById?: boolean
    verifiedAt?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerHour"]>

  export type VolunteerHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    eventId?: boolean
    registrationId?: boolean
    hours?: boolean
    activityType?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    verified?: boolean
    verifiedById?: boolean
    verifiedAt?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerHour"]>

  export type VolunteerHourSelectScalar = {
    id?: boolean
    volunteerId?: boolean
    eventId?: boolean
    registrationId?: boolean
    hours?: boolean
    activityType?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    verified?: boolean
    verifiedById?: boolean
    verifiedAt?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volunteerId" | "eventId" | "registrationId" | "hours" | "activityType" | "date" | "title" | "description" | "verified" | "verifiedById" | "verifiedAt" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteerHour"]>
  export type VolunteerHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }
  export type VolunteerHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }
  export type VolunteerHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | VolunteerHour$eventArgs<ExtArgs>
    registration?: boolean | VolunteerHour$registrationArgs<ExtArgs>
    verifiedBy?: boolean | VolunteerHour$verifiedByArgs<ExtArgs>
  }

  export type $VolunteerHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerHour"
    objects: {
      volunteer: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs> | null
      registration: Prisma.$EventRegistrationPayload<ExtArgs> | null
      verifiedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volunteerId: string
      eventId: string | null
      registrationId: string | null
      hours: number
      activityType: string
      date: Date
      title: string | null
      description: string | null
      verified: boolean
      verifiedById: string | null
      verifiedAt: Date | null
      source: $Enums.SourceType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteerHour"]>
    composites: {}
  }

  type VolunteerHourGetPayload<S extends boolean | null | undefined | VolunteerHourDefaultArgs> = $Result.GetResult<Prisma.$VolunteerHourPayload, S>

  type VolunteerHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerHourCountAggregateInputType | true
    }

  export interface VolunteerHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerHour'], meta: { name: 'VolunteerHour' } }
    /**
     * Find zero or one VolunteerHour that matches the filter.
     * @param {VolunteerHourFindUniqueArgs} args - Arguments to find a VolunteerHour
     * @example
     * // Get one VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerHourFindUniqueArgs>(args: SelectSubset<T, VolunteerHourFindUniqueArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerHourFindUniqueOrThrowArgs} args - Arguments to find a VolunteerHour
     * @example
     * // Get one VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerHourFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourFindFirstArgs} args - Arguments to find a VolunteerHour
     * @example
     * // Get one VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerHourFindFirstArgs>(args?: SelectSubset<T, VolunteerHourFindFirstArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourFindFirstOrThrowArgs} args - Arguments to find a VolunteerHour
     * @example
     * // Get one VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerHourFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerHours
     * const volunteerHours = await prisma.volunteerHour.findMany()
     * 
     * // Get first 10 VolunteerHours
     * const volunteerHours = await prisma.volunteerHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerHourWithIdOnly = await prisma.volunteerHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerHourFindManyArgs>(args?: SelectSubset<T, VolunteerHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerHour.
     * @param {VolunteerHourCreateArgs} args - Arguments to create a VolunteerHour.
     * @example
     * // Create one VolunteerHour
     * const VolunteerHour = await prisma.volunteerHour.create({
     *   data: {
     *     // ... data to create a VolunteerHour
     *   }
     * })
     * 
     */
    create<T extends VolunteerHourCreateArgs>(args: SelectSubset<T, VolunteerHourCreateArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerHours.
     * @param {VolunteerHourCreateManyArgs} args - Arguments to create many VolunteerHours.
     * @example
     * // Create many VolunteerHours
     * const volunteerHour = await prisma.volunteerHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerHourCreateManyArgs>(args?: SelectSubset<T, VolunteerHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VolunteerHours and returns the data saved in the database.
     * @param {VolunteerHourCreateManyAndReturnArgs} args - Arguments to create many VolunteerHours.
     * @example
     * // Create many VolunteerHours
     * const volunteerHour = await prisma.volunteerHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VolunteerHours and only return the `id`
     * const volunteerHourWithIdOnly = await prisma.volunteerHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerHourCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VolunteerHour.
     * @param {VolunteerHourDeleteArgs} args - Arguments to delete one VolunteerHour.
     * @example
     * // Delete one VolunteerHour
     * const VolunteerHour = await prisma.volunteerHour.delete({
     *   where: {
     *     // ... filter to delete one VolunteerHour
     *   }
     * })
     * 
     */
    delete<T extends VolunteerHourDeleteArgs>(args: SelectSubset<T, VolunteerHourDeleteArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerHour.
     * @param {VolunteerHourUpdateArgs} args - Arguments to update one VolunteerHour.
     * @example
     * // Update one VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerHourUpdateArgs>(args: SelectSubset<T, VolunteerHourUpdateArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerHours.
     * @param {VolunteerHourDeleteManyArgs} args - Arguments to filter VolunteerHours to delete.
     * @example
     * // Delete a few VolunteerHours
     * const { count } = await prisma.volunteerHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerHourDeleteManyArgs>(args?: SelectSubset<T, VolunteerHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerHours
     * const volunteerHour = await prisma.volunteerHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerHourUpdateManyArgs>(args: SelectSubset<T, VolunteerHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerHours and returns the data updated in the database.
     * @param {VolunteerHourUpdateManyAndReturnArgs} args - Arguments to update many VolunteerHours.
     * @example
     * // Update many VolunteerHours
     * const volunteerHour = await prisma.volunteerHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VolunteerHours and only return the `id`
     * const volunteerHourWithIdOnly = await prisma.volunteerHour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerHourUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VolunteerHour.
     * @param {VolunteerHourUpsertArgs} args - Arguments to update or create a VolunteerHour.
     * @example
     * // Update or create a VolunteerHour
     * const volunteerHour = await prisma.volunteerHour.upsert({
     *   create: {
     *     // ... data to create a VolunteerHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerHour we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerHourUpsertArgs>(args: SelectSubset<T, VolunteerHourUpsertArgs<ExtArgs>>): Prisma__VolunteerHourClient<$Result.GetResult<Prisma.$VolunteerHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourCountArgs} args - Arguments to filter VolunteerHours to count.
     * @example
     * // Count the number of VolunteerHours
     * const count = await prisma.volunteerHour.count({
     *   where: {
     *     // ... the filter for the VolunteerHours we want to count
     *   }
     * })
    **/
    count<T extends VolunteerHourCountArgs>(
      args?: Subset<T, VolunteerHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerHourAggregateArgs>(args: Subset<T, VolunteerHourAggregateArgs>): Prisma.PrismaPromise<GetVolunteerHourAggregateType<T>>

    /**
     * Group by VolunteerHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerHourGroupByArgs} args - Group by arguments.
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
      T extends VolunteerHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerHourGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerHourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolunteerHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerHour model
   */
  readonly fields: VolunteerHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends VolunteerHour$eventArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerHour$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registration<T extends VolunteerHour$registrationArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerHour$registrationArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verifiedBy<T extends VolunteerHour$verifiedByArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerHour$verifiedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VolunteerHour model
   */
  interface VolunteerHourFieldRefs {
    readonly id: FieldRef<"VolunteerHour", 'String'>
    readonly volunteerId: FieldRef<"VolunteerHour", 'String'>
    readonly eventId: FieldRef<"VolunteerHour", 'String'>
    readonly registrationId: FieldRef<"VolunteerHour", 'String'>
    readonly hours: FieldRef<"VolunteerHour", 'Int'>
    readonly activityType: FieldRef<"VolunteerHour", 'String'>
    readonly date: FieldRef<"VolunteerHour", 'DateTime'>
    readonly title: FieldRef<"VolunteerHour", 'String'>
    readonly description: FieldRef<"VolunteerHour", 'String'>
    readonly verified: FieldRef<"VolunteerHour", 'Boolean'>
    readonly verifiedById: FieldRef<"VolunteerHour", 'String'>
    readonly verifiedAt: FieldRef<"VolunteerHour", 'DateTime'>
    readonly source: FieldRef<"VolunteerHour", 'SourceType'>
    readonly createdAt: FieldRef<"VolunteerHour", 'DateTime'>
    readonly updatedAt: FieldRef<"VolunteerHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerHour findUnique
   */
  export type VolunteerHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerHour to fetch.
     */
    where: VolunteerHourWhereUniqueInput
  }

  /**
   * VolunteerHour findUniqueOrThrow
   */
  export type VolunteerHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerHour to fetch.
     */
    where: VolunteerHourWhereUniqueInput
  }

  /**
   * VolunteerHour findFirst
   */
  export type VolunteerHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerHour to fetch.
     */
    where?: VolunteerHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerHours to fetch.
     */
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerHours.
     */
    cursor?: VolunteerHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerHours.
     */
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * VolunteerHour findFirstOrThrow
   */
  export type VolunteerHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerHour to fetch.
     */
    where?: VolunteerHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerHours to fetch.
     */
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerHours.
     */
    cursor?: VolunteerHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerHours.
     */
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * VolunteerHour findMany
   */
  export type VolunteerHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerHours to fetch.
     */
    where?: VolunteerHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerHours to fetch.
     */
    orderBy?: VolunteerHourOrderByWithRelationInput | VolunteerHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerHours.
     */
    cursor?: VolunteerHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerHours.
     */
    skip?: number
    distinct?: VolunteerHourScalarFieldEnum | VolunteerHourScalarFieldEnum[]
  }

  /**
   * VolunteerHour create
   */
  export type VolunteerHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerHour.
     */
    data: XOR<VolunteerHourCreateInput, VolunteerHourUncheckedCreateInput>
  }

  /**
   * VolunteerHour createMany
   */
  export type VolunteerHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerHours.
     */
    data: VolunteerHourCreateManyInput | VolunteerHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerHour createManyAndReturn
   */
  export type VolunteerHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * The data used to create many VolunteerHours.
     */
    data: VolunteerHourCreateManyInput | VolunteerHourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerHour update
   */
  export type VolunteerHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerHour.
     */
    data: XOR<VolunteerHourUpdateInput, VolunteerHourUncheckedUpdateInput>
    /**
     * Choose, which VolunteerHour to update.
     */
    where: VolunteerHourWhereUniqueInput
  }

  /**
   * VolunteerHour updateMany
   */
  export type VolunteerHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerHours.
     */
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerHours to update
     */
    where?: VolunteerHourWhereInput
    /**
     * Limit how many VolunteerHours to update.
     */
    limit?: number
  }

  /**
   * VolunteerHour updateManyAndReturn
   */
  export type VolunteerHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * The data used to update VolunteerHours.
     */
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerHours to update
     */
    where?: VolunteerHourWhereInput
    /**
     * Limit how many VolunteerHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerHour upsert
   */
  export type VolunteerHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerHour to update in case it exists.
     */
    where: VolunteerHourWhereUniqueInput
    /**
     * In case the VolunteerHour found by the `where` argument doesn't exist, create a new VolunteerHour with this data.
     */
    create: XOR<VolunteerHourCreateInput, VolunteerHourUncheckedCreateInput>
    /**
     * In case the VolunteerHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerHourUpdateInput, VolunteerHourUncheckedUpdateInput>
  }

  /**
   * VolunteerHour delete
   */
  export type VolunteerHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
    /**
     * Filter which VolunteerHour to delete.
     */
    where: VolunteerHourWhereUniqueInput
  }

  /**
   * VolunteerHour deleteMany
   */
  export type VolunteerHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerHours to delete
     */
    where?: VolunteerHourWhereInput
    /**
     * Limit how many VolunteerHours to delete.
     */
    limit?: number
  }

  /**
   * VolunteerHour.event
   */
  export type VolunteerHour$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * VolunteerHour.registration
   */
  export type VolunteerHour$registrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
  }

  /**
   * VolunteerHour.verifiedBy
   */
  export type VolunteerHour$verifiedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * VolunteerHour without action
   */
  export type VolunteerHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerHour
     */
    select?: VolunteerHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerHour
     */
    omit?: VolunteerHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerHourInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    totalHours: number | null
  }

  export type CertificateSumAggregateOutputType = {
    totalHours: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    certificateNumber: string | null
    totalHours: number | null
    periodStart: Date | null
    periodEnd: Date | null
    fileUrl: string | null
    verificationToken: string | null
    isValid: boolean | null
    issuedById: string | null
    issuedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    certificateNumber: string | null
    totalHours: number | null
    periodStart: Date | null
    periodEnd: Date | null
    fileUrl: string | null
    verificationToken: string | null
    isValid: boolean | null
    issuedById: string | null
    issuedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    volunteerId: number
    certificateNumber: number
    totalHours: number
    periodStart: number
    periodEnd: number
    fileUrl: number
    verificationToken: number
    isValid: number
    issuedById: number
    issuedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    totalHours?: true
  }

  export type CertificateSumAggregateInputType = {
    totalHours?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    volunteerId?: true
    certificateNumber?: true
    totalHours?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    verificationToken?: true
    isValid?: true
    issuedById?: true
    issuedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    volunteerId?: true
    certificateNumber?: true
    totalHours?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    verificationToken?: true
    isValid?: true
    issuedById?: true
    issuedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    volunteerId?: true
    certificateNumber?: true
    totalHours?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    verificationToken?: true
    isValid?: true
    issuedById?: true
    issuedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    volunteerId: string
    certificateNumber: string
    totalHours: number
    periodStart: Date
    periodEnd: Date
    fileUrl: string | null
    verificationToken: string
    isValid: boolean
    issuedById: string | null
    issuedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    certificateNumber?: boolean
    totalHours?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isValid?: boolean
    issuedById?: boolean
    issuedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    certificateNumber?: boolean
    totalHours?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isValid?: boolean
    issuedById?: boolean
    issuedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    certificateNumber?: boolean
    totalHours?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isValid?: boolean
    issuedById?: boolean
    issuedAt?: boolean
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    volunteerId?: boolean
    certificateNumber?: boolean
    totalHours?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isValid?: boolean
    issuedById?: boolean
    issuedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volunteerId" | "certificateNumber" | "totalHours" | "periodStart" | "periodEnd" | "fileUrl" | "verificationToken" | "isValid" | "issuedById" | "issuedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | UserDefaultArgs<ExtArgs>
    issuedBy?: boolean | Certificate$issuedByArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      volunteer: Prisma.$UserPayload<ExtArgs>
      issuedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volunteerId: string
      certificateNumber: string
      totalHours: number
      periodStart: Date
      periodEnd: Date
      fileUrl: string | null
      verificationToken: string
      isValid: boolean
      issuedById: string | null
      issuedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issuedBy<T extends Certificate$issuedByArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$issuedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly volunteerId: FieldRef<"Certificate", 'String'>
    readonly certificateNumber: FieldRef<"Certificate", 'String'>
    readonly totalHours: FieldRef<"Certificate", 'Int'>
    readonly periodStart: FieldRef<"Certificate", 'DateTime'>
    readonly periodEnd: FieldRef<"Certificate", 'DateTime'>
    readonly fileUrl: FieldRef<"Certificate", 'String'>
    readonly verificationToken: FieldRef<"Certificate", 'String'>
    readonly isValid: FieldRef<"Certificate", 'Boolean'>
    readonly issuedById: FieldRef<"Certificate", 'String'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate.issuedBy
   */
  export type Certificate$issuedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model ActivityType
   */

  export type AggregateActivityType = {
    _count: ActivityTypeCountAggregateOutputType | null
    _avg: ActivityTypeAvgAggregateOutputType | null
    _sum: ActivityTypeSumAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  export type ActivityTypeAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type ActivityTypeSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type ActivityTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    color: string | null
    category: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ActivityTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    color: string | null
    category: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ActivityTypeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    icon: number
    color: number
    category: number
    orderIndex: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ActivityTypeAvgAggregateInputType = {
    orderIndex?: true
  }

  export type ActivityTypeSumAggregateInputType = {
    orderIndex?: true
  }

  export type ActivityTypeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    category?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
  }

  export type ActivityTypeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    category?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
  }

  export type ActivityTypeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    category?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityType to aggregate.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityTypes
    **/
    _count?: true | ActivityTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type GetActivityTypeAggregateType<T extends ActivityTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityType[P]>
      : GetScalarType<T[P], AggregateActivityType[P]>
  }




  export type ActivityTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityTypeWhereInput
    orderBy?: ActivityTypeOrderByWithAggregationInput | ActivityTypeOrderByWithAggregationInput[]
    by: ActivityTypeScalarFieldEnum[] | ActivityTypeScalarFieldEnum
    having?: ActivityTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityTypeCountAggregateInputType | true
    _avg?: ActivityTypeAvgAggregateInputType
    _sum?: ActivityTypeSumAggregateInputType
    _min?: ActivityTypeMinAggregateInputType
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type ActivityTypeGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    icon: string | null
    color: string | null
    category: string | null
    orderIndex: number | null
    isActive: boolean
    createdAt: Date
    _count: ActivityTypeCountAggregateOutputType | null
    _avg: ActivityTypeAvgAggregateOutputType | null
    _sum: ActivityTypeSumAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  type GetActivityTypeGroupByPayload<T extends ActivityTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
        }
      >
    >


  export type ActivityTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    category?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityType"]>

  export type ActivityTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    category?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityType"]>

  export type ActivityTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    category?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityType"]>

  export type ActivityTypeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    category?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ActivityTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "icon" | "color" | "category" | "orderIndex" | "isActive" | "createdAt", ExtArgs["result"]["activityType"]>

  export type $ActivityTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      icon: string | null
      color: string | null
      category: string | null
      orderIndex: number | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["activityType"]>
    composites: {}
  }

  type ActivityTypeGetPayload<S extends boolean | null | undefined | ActivityTypeDefaultArgs> = $Result.GetResult<Prisma.$ActivityTypePayload, S>

  type ActivityTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityTypeCountAggregateInputType | true
    }

  export interface ActivityTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityType'], meta: { name: 'ActivityType' } }
    /**
     * Find zero or one ActivityType that matches the filter.
     * @param {ActivityTypeFindUniqueArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityTypeFindUniqueArgs>(args: SelectSubset<T, ActivityTypeFindUniqueArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityTypeFindUniqueOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityTypeFindFirstArgs>(args?: SelectSubset<T, ActivityTypeFindFirstArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityTypes
     * const activityTypes = await prisma.activityType.findMany()
     * 
     * // Get first 10 ActivityTypes
     * const activityTypes = await prisma.activityType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityTypeFindManyArgs>(args?: SelectSubset<T, ActivityTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityType.
     * @param {ActivityTypeCreateArgs} args - Arguments to create a ActivityType.
     * @example
     * // Create one ActivityType
     * const ActivityType = await prisma.activityType.create({
     *   data: {
     *     // ... data to create a ActivityType
     *   }
     * })
     * 
     */
    create<T extends ActivityTypeCreateArgs>(args: SelectSubset<T, ActivityTypeCreateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityTypes.
     * @param {ActivityTypeCreateManyArgs} args - Arguments to create many ActivityTypes.
     * @example
     * // Create many ActivityTypes
     * const activityType = await prisma.activityType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityTypeCreateManyArgs>(args?: SelectSubset<T, ActivityTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityTypes and returns the data saved in the database.
     * @param {ActivityTypeCreateManyAndReturnArgs} args - Arguments to create many ActivityTypes.
     * @example
     * // Create many ActivityTypes
     * const activityType = await prisma.activityType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityTypes and only return the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityType.
     * @param {ActivityTypeDeleteArgs} args - Arguments to delete one ActivityType.
     * @example
     * // Delete one ActivityType
     * const ActivityType = await prisma.activityType.delete({
     *   where: {
     *     // ... filter to delete one ActivityType
     *   }
     * })
     * 
     */
    delete<T extends ActivityTypeDeleteArgs>(args: SelectSubset<T, ActivityTypeDeleteArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityType.
     * @param {ActivityTypeUpdateArgs} args - Arguments to update one ActivityType.
     * @example
     * // Update one ActivityType
     * const activityType = await prisma.activityType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityTypeUpdateArgs>(args: SelectSubset<T, ActivityTypeUpdateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityTypes.
     * @param {ActivityTypeDeleteManyArgs} args - Arguments to filter ActivityTypes to delete.
     * @example
     * // Delete a few ActivityTypes
     * const { count } = await prisma.activityType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityTypeDeleteManyArgs>(args?: SelectSubset<T, ActivityTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityTypes
     * const activityType = await prisma.activityType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityTypeUpdateManyArgs>(args: SelectSubset<T, ActivityTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityTypes and returns the data updated in the database.
     * @param {ActivityTypeUpdateManyAndReturnArgs} args - Arguments to update many ActivityTypes.
     * @example
     * // Update many ActivityTypes
     * const activityType = await prisma.activityType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityTypes and only return the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityType.
     * @param {ActivityTypeUpsertArgs} args - Arguments to update or create a ActivityType.
     * @example
     * // Update or create a ActivityType
     * const activityType = await prisma.activityType.upsert({
     *   create: {
     *     // ... data to create a ActivityType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityType we want to update
     *   }
     * })
     */
    upsert<T extends ActivityTypeUpsertArgs>(args: SelectSubset<T, ActivityTypeUpsertArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeCountArgs} args - Arguments to filter ActivityTypes to count.
     * @example
     * // Count the number of ActivityTypes
     * const count = await prisma.activityType.count({
     *   where: {
     *     // ... the filter for the ActivityTypes we want to count
     *   }
     * })
    **/
    count<T extends ActivityTypeCountArgs>(
      args?: Subset<T, ActivityTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityTypeAggregateArgs>(args: Subset<T, ActivityTypeAggregateArgs>): Prisma.PrismaPromise<GetActivityTypeAggregateType<T>>

    /**
     * Group by ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeGroupByArgs} args - Group by arguments.
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
      T extends ActivityTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityTypeGroupByArgs['orderBy'] }
        : { orderBy?: ActivityTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityType model
   */
  readonly fields: ActivityTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ActivityType model
   */
  interface ActivityTypeFieldRefs {
    readonly id: FieldRef<"ActivityType", 'String'>
    readonly name: FieldRef<"ActivityType", 'String'>
    readonly slug: FieldRef<"ActivityType", 'String'>
    readonly description: FieldRef<"ActivityType", 'String'>
    readonly icon: FieldRef<"ActivityType", 'String'>
    readonly color: FieldRef<"ActivityType", 'String'>
    readonly category: FieldRef<"ActivityType", 'String'>
    readonly orderIndex: FieldRef<"ActivityType", 'Int'>
    readonly isActive: FieldRef<"ActivityType", 'Boolean'>
    readonly createdAt: FieldRef<"ActivityType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityType findUnique
   */
  export type ActivityTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findUniqueOrThrow
   */
  export type ActivityTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findFirst
   */
  export type ActivityTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findFirstOrThrow
   */
  export type ActivityTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findMany
   */
  export type ActivityTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType create
   */
  export type ActivityTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a ActivityType.
     */
    data: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
  }

  /**
   * ActivityType createMany
   */
  export type ActivityTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypeCreateManyInput | ActivityTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityType createManyAndReturn
   */
  export type ActivityTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypeCreateManyInput | ActivityTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityType update
   */
  export type ActivityTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a ActivityType.
     */
    data: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
    /**
     * Choose, which ActivityType to update.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType updateMany
   */
  export type ActivityTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityTypes.
     */
    data: XOR<ActivityTypeUpdateManyMutationInput, ActivityTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActivityTypes to update
     */
    where?: ActivityTypeWhereInput
    /**
     * Limit how many ActivityTypes to update.
     */
    limit?: number
  }

  /**
   * ActivityType updateManyAndReturn
   */
  export type ActivityTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * The data used to update ActivityTypes.
     */
    data: XOR<ActivityTypeUpdateManyMutationInput, ActivityTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActivityTypes to update
     */
    where?: ActivityTypeWhereInput
    /**
     * Limit how many ActivityTypes to update.
     */
    limit?: number
  }

  /**
   * ActivityType upsert
   */
  export type ActivityTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the ActivityType to update in case it exists.
     */
    where: ActivityTypeWhereUniqueInput
    /**
     * In case the ActivityType found by the `where` argument doesn't exist, create a new ActivityType with this data.
     */
    create: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
    /**
     * In case the ActivityType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
  }

  /**
   * ActivityType delete
   */
  export type ActivityTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Filter which ActivityType to delete.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType deleteMany
   */
  export type ActivityTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityTypes to delete
     */
    where?: ActivityTypeWhereInput
    /**
     * Limit how many ActivityTypes to delete.
     */
    limit?: number
  }

  /**
   * ActivityType without action
   */
  export type ActivityTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    phone: 'phone',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    preferredActivities: 'preferredActivities',
    organizationName: 'organizationName',
    organizationDescription: 'organizationDescription',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    title: 'title',
    description: 'description',
    activityType: 'activityType',
    eventDate: 'eventDate',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    address: 'address',
    requiredHours: 'requiredHours',
    maxParticipants: 'maxParticipants',
    currentParticipants: 'currentParticipants',
    requirements: 'requirements',
    skillsNeeded: 'skillsNeeded',
    status: 'status',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventRegistrationScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    volunteerId: 'volunteerId',
    motivationLetter: 'motivationLetter',
    status: 'status',
    rejectionReason: 'rejectionReason',
    attended: 'attended',
    hoursCompleted: 'hoursCompleted',
    feedback: 'feedback',
    rating: 'rating',
    reviewedById: 'reviewedById',
    registeredAt: 'registeredAt',
    reviewedAt: 'reviewedAt',
    completedAt: 'completedAt'
  };

  export type EventRegistrationScalarFieldEnum = (typeof EventRegistrationScalarFieldEnum)[keyof typeof EventRegistrationScalarFieldEnum]


  export const VolunteerHourScalarFieldEnum: {
    id: 'id',
    volunteerId: 'volunteerId',
    eventId: 'eventId',
    registrationId: 'registrationId',
    hours: 'hours',
    activityType: 'activityType',
    date: 'date',
    title: 'title',
    description: 'description',
    verified: 'verified',
    verifiedById: 'verifiedById',
    verifiedAt: 'verifiedAt',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerHourScalarFieldEnum = (typeof VolunteerHourScalarFieldEnum)[keyof typeof VolunteerHourScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    volunteerId: 'volunteerId',
    certificateNumber: 'certificateNumber',
    totalHours: 'totalHours',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    fileUrl: 'fileUrl',
    verificationToken: 'verificationToken',
    isValid: 'isValid',
    issuedById: 'issuedById',
    issuedAt: 'issuedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const ActivityTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon: 'icon',
    color: 'color',
    category: 'category',
    orderIndex: 'orderIndex',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ActivityTypeScalarFieldEnum = (typeof ActivityTypeScalarFieldEnum)[keyof typeof ActivityTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'SourceType'
   */
  export type EnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType'>
    


  /**
   * Reference to a field of type 'SourceType[]'
   */
  export type ListEnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    preferredActivities?: StringNullableListFilter<"User">
    organizationName?: StringNullableFilter<"User"> | string | null
    organizationDescription?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    registrations?: EventRegistrationListRelationFilter
    volunteerHours?: VolunteerHourListRelationFilter
    certificates?: CertificateListRelationFilter
    verifiedHours?: VolunteerHourListRelationFilter
    reviewedRegistrations?: EventRegistrationListRelationFilter
    issuedCertificates?: CertificateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    preferredActivities?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    organizationDescription?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    registrations?: EventRegistrationOrderByRelationAggregateInput
    volunteerHours?: VolunteerHourOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    verifiedHours?: VolunteerHourOrderByRelationAggregateInput
    reviewedRegistrations?: EventRegistrationOrderByRelationAggregateInput
    issuedCertificates?: CertificateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    preferredActivities?: StringNullableListFilter<"User">
    organizationName?: StringNullableFilter<"User"> | string | null
    organizationDescription?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    registrations?: EventRegistrationListRelationFilter
    volunteerHours?: VolunteerHourListRelationFilter
    certificates?: CertificateListRelationFilter
    verifiedHours?: VolunteerHourListRelationFilter
    reviewedRegistrations?: EventRegistrationListRelationFilter
    issuedCertificates?: CertificateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    preferredActivities?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    organizationDescription?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredActivities?: StringNullableListFilter<"User">
    organizationName?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationDescription?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    organizerId?: UuidFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    activityType?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    requiredHours?: IntFilter<"Event"> | number
    maxParticipants?: IntNullableFilter<"Event"> | number | null
    currentParticipants?: IntNullableFilter<"Event"> | number | null
    requirements?: StringNullableFilter<"Event"> | string | null
    skillsNeeded?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    tags?: StringNullableListFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: EventRegistrationListRelationFilter
    volunteerHours?: VolunteerHourListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    activityType?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    requiredHours?: SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    currentParticipants?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    skillsNeeded?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    organizer?: UserOrderByWithRelationInput
    registrations?: EventRegistrationOrderByRelationAggregateInput
    volunteerHours?: VolunteerHourOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizerId?: UuidFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    activityType?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    requiredHours?: IntFilter<"Event"> | number
    maxParticipants?: IntNullableFilter<"Event"> | number | null
    currentParticipants?: IntNullableFilter<"Event"> | number | null
    requirements?: StringNullableFilter<"Event"> | string | null
    skillsNeeded?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    tags?: StringNullableListFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: EventRegistrationListRelationFilter
    volunteerHours?: VolunteerHourListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    activityType?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    requiredHours?: SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    currentParticipants?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    skillsNeeded?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    organizerId?: UuidWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    activityType?: StringWithAggregatesFilter<"Event"> | string
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringWithAggregatesFilter<"Event"> | string
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    requiredHours?: IntWithAggregatesFilter<"Event"> | number
    maxParticipants?: IntNullableWithAggregatesFilter<"Event"> | number | null
    currentParticipants?: IntNullableWithAggregatesFilter<"Event"> | number | null
    requirements?: StringNullableWithAggregatesFilter<"Event"> | string | null
    skillsNeeded?: StringNullableListFilter<"Event">
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    tags?: StringNullableListFilter<"Event">
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type EventRegistrationWhereInput = {
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    id?: UuidFilter<"EventRegistration"> | string
    eventId?: UuidFilter<"EventRegistration"> | string
    volunteerId?: UuidFilter<"EventRegistration"> | string
    motivationLetter?: StringNullableFilter<"EventRegistration"> | string | null
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    rejectionReason?: StringNullableFilter<"EventRegistration"> | string | null
    attended?: BoolFilter<"EventRegistration"> | boolean
    hoursCompleted?: IntNullableFilter<"EventRegistration"> | number | null
    feedback?: StringNullableFilter<"EventRegistration"> | string | null
    rating?: IntNullableFilter<"EventRegistration"> | number | null
    reviewedById?: UuidNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    volunteerHours?: VolunteerHourListRelationFilter
  }

  export type EventRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    volunteerId?: SortOrder
    motivationLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    attended?: SortOrder
    hoursCompleted?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewedById?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    volunteer?: UserOrderByWithRelationInput
    reviewedBy?: UserOrderByWithRelationInput
    volunteerHours?: VolunteerHourOrderByRelationAggregateInput
  }

  export type EventRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_volunteerId?: EventRegistrationEventIdVolunteerIdCompoundUniqueInput
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    eventId?: UuidFilter<"EventRegistration"> | string
    volunteerId?: UuidFilter<"EventRegistration"> | string
    motivationLetter?: StringNullableFilter<"EventRegistration"> | string | null
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    rejectionReason?: StringNullableFilter<"EventRegistration"> | string | null
    attended?: BoolFilter<"EventRegistration"> | boolean
    hoursCompleted?: IntNullableFilter<"EventRegistration"> | number | null
    feedback?: StringNullableFilter<"EventRegistration"> | string | null
    rating?: IntNullableFilter<"EventRegistration"> | number | null
    reviewedById?: UuidNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    volunteerHours?: VolunteerHourListRelationFilter
  }, "id" | "eventId_volunteerId">

  export type EventRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    volunteerId?: SortOrder
    motivationLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    attended?: SortOrder
    hoursCompleted?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewedById?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: EventRegistrationCountOrderByAggregateInput
    _avg?: EventRegistrationAvgOrderByAggregateInput
    _max?: EventRegistrationMaxOrderByAggregateInput
    _min?: EventRegistrationMinOrderByAggregateInput
    _sum?: EventRegistrationSumOrderByAggregateInput
  }

  export type EventRegistrationScalarWhereWithAggregatesInput = {
    AND?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    OR?: EventRegistrationScalarWhereWithAggregatesInput[]
    NOT?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventRegistration"> | string
    eventId?: UuidWithAggregatesFilter<"EventRegistration"> | string
    volunteerId?: UuidWithAggregatesFilter<"EventRegistration"> | string
    motivationLetter?: StringNullableWithAggregatesFilter<"EventRegistration"> | string | null
    status?: EnumRegistrationStatusWithAggregatesFilter<"EventRegistration"> | $Enums.RegistrationStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"EventRegistration"> | string | null
    attended?: BoolWithAggregatesFilter<"EventRegistration"> | boolean
    hoursCompleted?: IntNullableWithAggregatesFilter<"EventRegistration"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"EventRegistration"> | string | null
    rating?: IntNullableWithAggregatesFilter<"EventRegistration"> | number | null
    reviewedById?: UuidNullableWithAggregatesFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null
  }

  export type VolunteerHourWhereInput = {
    AND?: VolunteerHourWhereInput | VolunteerHourWhereInput[]
    OR?: VolunteerHourWhereInput[]
    NOT?: VolunteerHourWhereInput | VolunteerHourWhereInput[]
    id?: UuidFilter<"VolunteerHour"> | string
    volunteerId?: UuidFilter<"VolunteerHour"> | string
    eventId?: UuidNullableFilter<"VolunteerHour"> | string | null
    registrationId?: UuidNullableFilter<"VolunteerHour"> | string | null
    hours?: IntFilter<"VolunteerHour"> | number
    activityType?: StringFilter<"VolunteerHour"> | string
    date?: DateTimeFilter<"VolunteerHour"> | Date | string
    title?: StringNullableFilter<"VolunteerHour"> | string | null
    description?: StringNullableFilter<"VolunteerHour"> | string | null
    verified?: BoolFilter<"VolunteerHour"> | boolean
    verifiedById?: UuidNullableFilter<"VolunteerHour"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VolunteerHour"> | Date | string | null
    source?: EnumSourceTypeFilter<"VolunteerHour"> | $Enums.SourceType
    createdAt?: DateTimeFilter<"VolunteerHour"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerHour"> | Date | string
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    registration?: XOR<EventRegistrationNullableScalarRelationFilter, EventRegistrationWhereInput> | null
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VolunteerHourOrderByWithRelationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    eventId?: SortOrderInput | SortOrder
    registrationId?: SortOrderInput | SortOrder
    hours?: SortOrder
    activityType?: SortOrder
    date?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    volunteer?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    registration?: EventRegistrationOrderByWithRelationInput
    verifiedBy?: UserOrderByWithRelationInput
  }

  export type VolunteerHourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VolunteerHourWhereInput | VolunteerHourWhereInput[]
    OR?: VolunteerHourWhereInput[]
    NOT?: VolunteerHourWhereInput | VolunteerHourWhereInput[]
    volunteerId?: UuidFilter<"VolunteerHour"> | string
    eventId?: UuidNullableFilter<"VolunteerHour"> | string | null
    registrationId?: UuidNullableFilter<"VolunteerHour"> | string | null
    hours?: IntFilter<"VolunteerHour"> | number
    activityType?: StringFilter<"VolunteerHour"> | string
    date?: DateTimeFilter<"VolunteerHour"> | Date | string
    title?: StringNullableFilter<"VolunteerHour"> | string | null
    description?: StringNullableFilter<"VolunteerHour"> | string | null
    verified?: BoolFilter<"VolunteerHour"> | boolean
    verifiedById?: UuidNullableFilter<"VolunteerHour"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VolunteerHour"> | Date | string | null
    source?: EnumSourceTypeFilter<"VolunteerHour"> | $Enums.SourceType
    createdAt?: DateTimeFilter<"VolunteerHour"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerHour"> | Date | string
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    registration?: XOR<EventRegistrationNullableScalarRelationFilter, EventRegistrationWhereInput> | null
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type VolunteerHourOrderByWithAggregationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    eventId?: SortOrderInput | SortOrder
    registrationId?: SortOrderInput | SortOrder
    hours?: SortOrder
    activityType?: SortOrder
    date?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerHourCountOrderByAggregateInput
    _avg?: VolunteerHourAvgOrderByAggregateInput
    _max?: VolunteerHourMaxOrderByAggregateInput
    _min?: VolunteerHourMinOrderByAggregateInput
    _sum?: VolunteerHourSumOrderByAggregateInput
  }

  export type VolunteerHourScalarWhereWithAggregatesInput = {
    AND?: VolunteerHourScalarWhereWithAggregatesInput | VolunteerHourScalarWhereWithAggregatesInput[]
    OR?: VolunteerHourScalarWhereWithAggregatesInput[]
    NOT?: VolunteerHourScalarWhereWithAggregatesInput | VolunteerHourScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VolunteerHour"> | string
    volunteerId?: UuidWithAggregatesFilter<"VolunteerHour"> | string
    eventId?: UuidNullableWithAggregatesFilter<"VolunteerHour"> | string | null
    registrationId?: UuidNullableWithAggregatesFilter<"VolunteerHour"> | string | null
    hours?: IntWithAggregatesFilter<"VolunteerHour"> | number
    activityType?: StringWithAggregatesFilter<"VolunteerHour"> | string
    date?: DateTimeWithAggregatesFilter<"VolunteerHour"> | Date | string
    title?: StringNullableWithAggregatesFilter<"VolunteerHour"> | string | null
    description?: StringNullableWithAggregatesFilter<"VolunteerHour"> | string | null
    verified?: BoolWithAggregatesFilter<"VolunteerHour"> | boolean
    verifiedById?: UuidNullableWithAggregatesFilter<"VolunteerHour"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"VolunteerHour"> | Date | string | null
    source?: EnumSourceTypeWithAggregatesFilter<"VolunteerHour"> | $Enums.SourceType
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerHour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VolunteerHour"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: UuidFilter<"Certificate"> | string
    volunteerId?: UuidFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    totalHours?: IntFilter<"Certificate"> | number
    periodStart?: DateTimeFilter<"Certificate"> | Date | string
    periodEnd?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringNullableFilter<"Certificate"> | string | null
    verificationToken?: UuidFilter<"Certificate"> | string
    isValid?: BoolFilter<"Certificate"> | boolean
    issuedById?: UuidNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    issuedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    certificateNumber?: SortOrder
    totalHours?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    verificationToken?: SortOrder
    isValid?: SortOrder
    issuedById?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    volunteer?: UserOrderByWithRelationInput
    issuedBy?: UserOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateNumber?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    volunteerId?: UuidFilter<"Certificate"> | string
    totalHours?: IntFilter<"Certificate"> | number
    periodStart?: DateTimeFilter<"Certificate"> | Date | string
    periodEnd?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringNullableFilter<"Certificate"> | string | null
    verificationToken?: UuidFilter<"Certificate"> | string
    isValid?: BoolFilter<"Certificate"> | boolean
    issuedById?: UuidNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    volunteer?: XOR<UserScalarRelationFilter, UserWhereInput>
    issuedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "certificateNumber">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    certificateNumber?: SortOrder
    totalHours?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    verificationToken?: SortOrder
    isValid?: SortOrder
    issuedById?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Certificate"> | string
    volunteerId?: UuidWithAggregatesFilter<"Certificate"> | string
    certificateNumber?: StringWithAggregatesFilter<"Certificate"> | string
    totalHours?: IntWithAggregatesFilter<"Certificate"> | number
    periodStart?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    fileUrl?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    verificationToken?: UuidWithAggregatesFilter<"Certificate"> | string
    isValid?: BoolWithAggregatesFilter<"Certificate"> | boolean
    issuedById?: UuidNullableWithAggregatesFilter<"Certificate"> | string | null
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type ActivityTypeWhereInput = {
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    id?: UuidFilter<"ActivityType"> | string
    name?: StringFilter<"ActivityType"> | string
    slug?: StringFilter<"ActivityType"> | string
    description?: StringNullableFilter<"ActivityType"> | string | null
    icon?: StringNullableFilter<"ActivityType"> | string | null
    color?: StringNullableFilter<"ActivityType"> | string | null
    category?: StringNullableFilter<"ActivityType"> | string | null
    orderIndex?: IntNullableFilter<"ActivityType"> | number | null
    isActive?: BoolFilter<"ActivityType"> | boolean
    createdAt?: DateTimeFilter<"ActivityType"> | Date | string
  }

  export type ActivityTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    orderIndex?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    description?: StringNullableFilter<"ActivityType"> | string | null
    icon?: StringNullableFilter<"ActivityType"> | string | null
    color?: StringNullableFilter<"ActivityType"> | string | null
    category?: StringNullableFilter<"ActivityType"> | string | null
    orderIndex?: IntNullableFilter<"ActivityType"> | number | null
    isActive?: BoolFilter<"ActivityType"> | boolean
    createdAt?: DateTimeFilter<"ActivityType"> | Date | string
  }, "id" | "name" | "slug">

  export type ActivityTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    orderIndex?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityTypeCountOrderByAggregateInput
    _avg?: ActivityTypeAvgOrderByAggregateInput
    _max?: ActivityTypeMaxOrderByAggregateInput
    _min?: ActivityTypeMinOrderByAggregateInput
    _sum?: ActivityTypeSumOrderByAggregateInput
  }

  export type ActivityTypeScalarWhereWithAggregatesInput = {
    AND?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    OR?: ActivityTypeScalarWhereWithAggregatesInput[]
    NOT?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ActivityType"> | string
    name?: StringWithAggregatesFilter<"ActivityType"> | string
    slug?: StringWithAggregatesFilter<"ActivityType"> | string
    description?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
    color?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
    category?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
    orderIndex?: IntNullableWithAggregatesFilter<"ActivityType"> | number | null
    isActive?: BoolWithAggregatesFilter<"ActivityType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ActivityType"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventRegistrationCreateInput = {
    id?: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    event: EventCreateNestedOneWithoutRegistrationsInput
    volunteer: UserCreateNestedOneWithoutRegistrationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedRegistrationsInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationUncheckedCreateInput = {
    id?: string
    eventId: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    volunteer?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedRegistrationsNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationCreateManyInput = {
    id?: string
    eventId: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type EventRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VolunteerHourCreateInput = {
    id?: string
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutVolunteerHoursInput
    event?: EventCreateNestedOneWithoutVolunteerHoursInput
    registration?: EventRegistrationCreateNestedOneWithoutVolunteerHoursInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedHoursInput
  }

  export type VolunteerHourUncheckedCreateInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutVolunteerHoursNestedInput
    event?: EventUpdateOneWithoutVolunteerHoursNestedInput
    registration?: EventRegistrationUpdateOneWithoutVolunteerHoursNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedHoursNestedInput
  }

  export type VolunteerHourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourCreateManyInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutCertificatesInput
    issuedBy?: UserCreateNestedOneWithoutIssuedCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    volunteerId: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedById?: string | null
    issuedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    issuedBy?: UserUpdateOneWithoutIssuedCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedById?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    volunteerId: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedById?: string | null
    issuedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedById?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string | null
    category?: string | null
    orderIndex?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ActivityTypeUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string | null
    category?: string | null
    orderIndex?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ActivityTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string | null
    category?: string | null
    orderIndex?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ActivityTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventRegistrationListRelationFilter = {
    every?: EventRegistrationWhereInput
    some?: EventRegistrationWhereInput
    none?: EventRegistrationWhereInput
  }

  export type VolunteerHourListRelationFilter = {
    every?: VolunteerHourWhereInput
    some?: VolunteerHourWhereInput
    none?: VolunteerHourWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    preferredActivities?: SortOrder
    organizationName?: SortOrder
    organizationDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    organizationName?: SortOrder
    organizationDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    organizationName?: SortOrder
    organizationDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    activityType?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    requiredHours?: SortOrder
    maxParticipants?: SortOrder
    currentParticipants?: SortOrder
    requirements?: SortOrder
    skillsNeeded?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    requiredHours?: SortOrder
    maxParticipants?: SortOrder
    currentParticipants?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    activityType?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    requiredHours?: SortOrder
    maxParticipants?: SortOrder
    currentParticipants?: SortOrder
    requirements?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    activityType?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    requiredHours?: SortOrder
    maxParticipants?: SortOrder
    currentParticipants?: SortOrder
    requirements?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    requiredHours?: SortOrder
    maxParticipants?: SortOrder
    currentParticipants?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
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

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventRegistrationEventIdVolunteerIdCompoundUniqueInput = {
    eventId: string
    volunteerId: string
  }

  export type EventRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    volunteerId?: SortOrder
    motivationLetter?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    attended?: SortOrder
    hoursCompleted?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    reviewedById?: SortOrder
    registeredAt?: SortOrder
    reviewedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EventRegistrationAvgOrderByAggregateInput = {
    hoursCompleted?: SortOrder
    rating?: SortOrder
  }

  export type EventRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    volunteerId?: SortOrder
    motivationLetter?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    attended?: SortOrder
    hoursCompleted?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    reviewedById?: SortOrder
    registeredAt?: SortOrder
    reviewedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EventRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    volunteerId?: SortOrder
    motivationLetter?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    attended?: SortOrder
    hoursCompleted?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    reviewedById?: SortOrder
    registeredAt?: SortOrder
    reviewedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EventRegistrationSumOrderByAggregateInput = {
    hoursCompleted?: SortOrder
    rating?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type EventRegistrationNullableScalarRelationFilter = {
    is?: EventRegistrationWhereInput | null
    isNot?: EventRegistrationWhereInput | null
  }

  export type VolunteerHourCountOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    eventId?: SortOrder
    registrationId?: SortOrder
    hours?: SortOrder
    activityType?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    verified?: SortOrder
    verifiedById?: SortOrder
    verifiedAt?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerHourAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type VolunteerHourMaxOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    eventId?: SortOrder
    registrationId?: SortOrder
    hours?: SortOrder
    activityType?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    verified?: SortOrder
    verifiedById?: SortOrder
    verifiedAt?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerHourMinOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    eventId?: SortOrder
    registrationId?: SortOrder
    hours?: SortOrder
    activityType?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    verified?: SortOrder
    verifiedById?: SortOrder
    verifiedAt?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerHourSumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type EnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    certificateNumber?: SortOrder
    totalHours?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isValid?: SortOrder
    issuedById?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    totalHours?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    certificateNumber?: SortOrder
    totalHours?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isValid?: SortOrder
    issuedById?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    certificateNumber?: SortOrder
    totalHours?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isValid?: SortOrder
    issuedById?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    totalHours?: SortOrder
  }

  export type ActivityTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    category?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityTypeAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ActivityTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    category?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    category?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityTypeSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type UserCreatepreferredActivitiesInput = {
    set: string[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventRegistrationCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput> | EventRegistrationCreateWithoutVolunteerInput[] | EventRegistrationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerInput | EventRegistrationCreateOrConnectWithoutVolunteerInput[]
    createMany?: EventRegistrationCreateManyVolunteerInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type VolunteerHourCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput> | VolunteerHourCreateWithoutVolunteerInput[] | VolunteerHourUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVolunteerInput | VolunteerHourCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerHourCreateManyVolunteerInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput> | CertificateCreateWithoutVolunteerInput[] | CertificateUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutVolunteerInput | CertificateCreateOrConnectWithoutVolunteerInput[]
    createMany?: CertificateCreateManyVolunteerInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type VolunteerHourCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput> | VolunteerHourCreateWithoutVerifiedByInput[] | VolunteerHourUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVerifiedByInput | VolunteerHourCreateOrConnectWithoutVerifiedByInput[]
    createMany?: VolunteerHourCreateManyVerifiedByInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type EventRegistrationCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput> | EventRegistrationCreateWithoutReviewedByInput[] | EventRegistrationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutReviewedByInput | EventRegistrationCreateOrConnectWithoutReviewedByInput[]
    createMany?: EventRegistrationCreateManyReviewedByInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutIssuedByInput = {
    create?: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput> | CertificateCreateWithoutIssuedByInput[] | CertificateUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuedByInput | CertificateCreateOrConnectWithoutIssuedByInput[]
    createMany?: CertificateCreateManyIssuedByInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput> | EventRegistrationCreateWithoutVolunteerInput[] | EventRegistrationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerInput | EventRegistrationCreateOrConnectWithoutVolunteerInput[]
    createMany?: EventRegistrationCreateManyVolunteerInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput> | VolunteerHourCreateWithoutVolunteerInput[] | VolunteerHourUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVolunteerInput | VolunteerHourCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerHourCreateManyVolunteerInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput> | CertificateCreateWithoutVolunteerInput[] | CertificateUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutVolunteerInput | CertificateCreateOrConnectWithoutVolunteerInput[]
    createMany?: CertificateCreateManyVolunteerInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput> | VolunteerHourCreateWithoutVerifiedByInput[] | VolunteerHourUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVerifiedByInput | VolunteerHourCreateOrConnectWithoutVerifiedByInput[]
    createMany?: VolunteerHourCreateManyVerifiedByInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput> | EventRegistrationCreateWithoutReviewedByInput[] | EventRegistrationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutReviewedByInput | EventRegistrationCreateOrConnectWithoutReviewedByInput[]
    createMany?: EventRegistrationCreateManyReviewedByInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutIssuedByInput = {
    create?: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput> | CertificateCreateWithoutIssuedByInput[] | CertificateUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuedByInput | CertificateCreateOrConnectWithoutIssuedByInput[]
    createMany?: CertificateCreateManyIssuedByInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatepreferredActivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventRegistrationUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput> | EventRegistrationCreateWithoutVolunteerInput[] | EventRegistrationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerInput | EventRegistrationCreateOrConnectWithoutVolunteerInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutVolunteerInput | EventRegistrationUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: EventRegistrationCreateManyVolunteerInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutVolunteerInput | EventRegistrationUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutVolunteerInput | EventRegistrationUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type VolunteerHourUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput> | VolunteerHourCreateWithoutVolunteerInput[] | VolunteerHourUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVolunteerInput | VolunteerHourCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerHourUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerHourCreateManyVolunteerInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerHourUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutVolunteerInput | VolunteerHourUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput> | CertificateCreateWithoutVolunteerInput[] | CertificateUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutVolunteerInput | CertificateCreateOrConnectWithoutVolunteerInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutVolunteerInput | CertificateUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: CertificateCreateManyVolunteerInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutVolunteerInput | CertificateUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutVolunteerInput | CertificateUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type VolunteerHourUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput> | VolunteerHourCreateWithoutVerifiedByInput[] | VolunteerHourUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVerifiedByInput | VolunteerHourCreateOrConnectWithoutVerifiedByInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutVerifiedByInput | VolunteerHourUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: VolunteerHourCreateManyVerifiedByInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutVerifiedByInput | VolunteerHourUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutVerifiedByInput | VolunteerHourUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type EventRegistrationUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput> | EventRegistrationCreateWithoutReviewedByInput[] | EventRegistrationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutReviewedByInput | EventRegistrationCreateOrConnectWithoutReviewedByInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutReviewedByInput | EventRegistrationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: EventRegistrationCreateManyReviewedByInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutReviewedByInput | EventRegistrationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutReviewedByInput | EventRegistrationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutIssuedByNestedInput = {
    create?: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput> | CertificateCreateWithoutIssuedByInput[] | CertificateUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuedByInput | CertificateCreateOrConnectWithoutIssuedByInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutIssuedByInput | CertificateUpsertWithWhereUniqueWithoutIssuedByInput[]
    createMany?: CertificateCreateManyIssuedByInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutIssuedByInput | CertificateUpdateWithWhereUniqueWithoutIssuedByInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutIssuedByInput | CertificateUpdateManyWithWhereWithoutIssuedByInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput> | EventRegistrationCreateWithoutVolunteerInput[] | EventRegistrationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerInput | EventRegistrationCreateOrConnectWithoutVolunteerInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutVolunteerInput | EventRegistrationUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: EventRegistrationCreateManyVolunteerInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutVolunteerInput | EventRegistrationUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutVolunteerInput | EventRegistrationUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput> | VolunteerHourCreateWithoutVolunteerInput[] | VolunteerHourUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVolunteerInput | VolunteerHourCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerHourUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerHourCreateManyVolunteerInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerHourUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutVolunteerInput | VolunteerHourUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput> | CertificateCreateWithoutVolunteerInput[] | CertificateUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutVolunteerInput | CertificateCreateOrConnectWithoutVolunteerInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutVolunteerInput | CertificateUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: CertificateCreateManyVolunteerInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutVolunteerInput | CertificateUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutVolunteerInput | CertificateUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput> | VolunteerHourCreateWithoutVerifiedByInput[] | VolunteerHourUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutVerifiedByInput | VolunteerHourCreateOrConnectWithoutVerifiedByInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutVerifiedByInput | VolunteerHourUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: VolunteerHourCreateManyVerifiedByInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutVerifiedByInput | VolunteerHourUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutVerifiedByInput | VolunteerHourUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput> | EventRegistrationCreateWithoutReviewedByInput[] | EventRegistrationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutReviewedByInput | EventRegistrationCreateOrConnectWithoutReviewedByInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutReviewedByInput | EventRegistrationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: EventRegistrationCreateManyReviewedByInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutReviewedByInput | EventRegistrationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutReviewedByInput | EventRegistrationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutIssuedByNestedInput = {
    create?: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput> | CertificateCreateWithoutIssuedByInput[] | CertificateUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuedByInput | CertificateCreateOrConnectWithoutIssuedByInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutIssuedByInput | CertificateUpsertWithWhereUniqueWithoutIssuedByInput[]
    createMany?: CertificateCreateManyIssuedByInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutIssuedByInput | CertificateUpdateWithWhereUniqueWithoutIssuedByInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutIssuedByInput | CertificateUpdateManyWithWhereWithoutIssuedByInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EventCreateskillsNeededInput = {
    set: string[]
  }

  export type EventCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventRegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type VolunteerHourCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput> | VolunteerHourCreateWithoutEventInput[] | VolunteerHourUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutEventInput | VolunteerHourCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerHourCreateManyEventInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type VolunteerHourUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput> | VolunteerHourCreateWithoutEventInput[] | VolunteerHourUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutEventInput | VolunteerHourCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerHourCreateManyEventInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateskillsNeededInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type EventUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventRegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type VolunteerHourUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput> | VolunteerHourCreateWithoutEventInput[] | VolunteerHourUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutEventInput | VolunteerHourCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutEventInput | VolunteerHourUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerHourCreateManyEventInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutEventInput | VolunteerHourUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutEventInput | VolunteerHourUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type VolunteerHourUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput> | VolunteerHourCreateWithoutEventInput[] | VolunteerHourUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutEventInput | VolunteerHourCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutEventInput | VolunteerHourUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerHourCreateManyEventInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutEventInput | VolunteerHourUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutEventInput | VolunteerHourUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedRegistrationsInput = {
    create?: XOR<UserCreateWithoutReviewedRegistrationsInput, UserUncheckedCreateWithoutReviewedRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type VolunteerHourCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput> | VolunteerHourCreateWithoutRegistrationInput[] | VolunteerHourUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutRegistrationInput | VolunteerHourCreateOrConnectWithoutRegistrationInput[]
    createMany?: VolunteerHourCreateManyRegistrationInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type VolunteerHourUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput> | VolunteerHourCreateWithoutRegistrationInput[] | VolunteerHourUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutRegistrationInput | VolunteerHourCreateOrConnectWithoutRegistrationInput[]
    createMany?: VolunteerHourCreateManyRegistrationInputEnvelope
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneWithoutReviewedRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedRegistrationsInput, UserUncheckedCreateWithoutReviewedRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedRegistrationsInput
    upsert?: UserUpsertWithoutReviewedRegistrationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedRegistrationsInput, UserUpdateWithoutReviewedRegistrationsInput>, UserUncheckedUpdateWithoutReviewedRegistrationsInput>
  }

  export type VolunteerHourUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput> | VolunteerHourCreateWithoutRegistrationInput[] | VolunteerHourUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutRegistrationInput | VolunteerHourCreateOrConnectWithoutRegistrationInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutRegistrationInput | VolunteerHourUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: VolunteerHourCreateManyRegistrationInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutRegistrationInput | VolunteerHourUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutRegistrationInput | VolunteerHourUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type VolunteerHourUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput> | VolunteerHourCreateWithoutRegistrationInput[] | VolunteerHourUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: VolunteerHourCreateOrConnectWithoutRegistrationInput | VolunteerHourCreateOrConnectWithoutRegistrationInput[]
    upsert?: VolunteerHourUpsertWithWhereUniqueWithoutRegistrationInput | VolunteerHourUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: VolunteerHourCreateManyRegistrationInputEnvelope
    set?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    disconnect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    delete?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    connect?: VolunteerHourWhereUniqueInput | VolunteerHourWhereUniqueInput[]
    update?: VolunteerHourUpdateWithWhereUniqueWithoutRegistrationInput | VolunteerHourUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: VolunteerHourUpdateManyWithWhereWithoutRegistrationInput | VolunteerHourUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVolunteerHoursInput = {
    create?: XOR<UserCreateWithoutVolunteerHoursInput, UserUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerHoursInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutVolunteerHoursInput = {
    create?: XOR<EventCreateWithoutVolunteerHoursInput, EventUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteerHoursInput
    connect?: EventWhereUniqueInput
  }

  export type EventRegistrationCreateNestedOneWithoutVolunteerHoursInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerHoursInput, EventRegistrationUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerHoursInput
    connect?: EventRegistrationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedHoursInput = {
    create?: XOR<UserCreateWithoutVerifiedHoursInput, UserUncheckedCreateWithoutVerifiedHoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedHoursInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SourceType
  }

  export type UserUpdateOneRequiredWithoutVolunteerHoursNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerHoursInput, UserUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerHoursInput
    upsert?: UserUpsertWithoutVolunteerHoursInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerHoursInput, UserUpdateWithoutVolunteerHoursInput>, UserUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type EventUpdateOneWithoutVolunteerHoursNestedInput = {
    create?: XOR<EventCreateWithoutVolunteerHoursInput, EventUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteerHoursInput
    upsert?: EventUpsertWithoutVolunteerHoursInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVolunteerHoursInput, EventUpdateWithoutVolunteerHoursInput>, EventUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type EventRegistrationUpdateOneWithoutVolunteerHoursNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutVolunteerHoursInput, EventRegistrationUncheckedCreateWithoutVolunteerHoursInput>
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutVolunteerHoursInput
    upsert?: EventRegistrationUpsertWithoutVolunteerHoursInput
    disconnect?: EventRegistrationWhereInput | boolean
    delete?: EventRegistrationWhereInput | boolean
    connect?: EventRegistrationWhereUniqueInput
    update?: XOR<XOR<EventRegistrationUpdateToOneWithWhereWithoutVolunteerHoursInput, EventRegistrationUpdateWithoutVolunteerHoursInput>, EventRegistrationUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type UserUpdateOneWithoutVerifiedHoursNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedHoursInput, UserUncheckedCreateWithoutVerifiedHoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedHoursInput
    upsert?: UserUpsertWithoutVerifiedHoursInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedHoursInput, UserUpdateWithoutVerifiedHoursInput>, UserUncheckedUpdateWithoutVerifiedHoursInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIssuedCertificatesInput = {
    create?: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateOneWithoutIssuedCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCertificatesInput
    upsert?: UserUpsertWithoutIssuedCertificatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssuedCertificatesInput, UserUpdateWithoutIssuedCertificatesInput>, UserUncheckedUpdateWithoutIssuedCertificatesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
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

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventRegistrationCreateWithoutVolunteerInput = {
    id?: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    event: EventCreateNestedOneWithoutRegistrationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedRegistrationsInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationUncheckedCreateWithoutVolunteerInput = {
    id?: string
    eventId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationCreateOrConnectWithoutVolunteerInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput>
  }

  export type EventRegistrationCreateManyVolunteerInputEnvelope = {
    data: EventRegistrationCreateManyVolunteerInput | EventRegistrationCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerHourCreateWithoutVolunteerInput = {
    id?: string
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutVolunteerHoursInput
    registration?: EventRegistrationCreateNestedOneWithoutVolunteerHoursInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedHoursInput
  }

  export type VolunteerHourUncheckedCreateWithoutVolunteerInput = {
    id?: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourCreateOrConnectWithoutVolunteerInput = {
    where: VolunteerHourWhereUniqueInput
    create: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerHourCreateManyVolunteerInputEnvelope = {
    data: VolunteerHourCreateManyVolunteerInput | VolunteerHourCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutVolunteerInput = {
    id?: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedAt?: Date | string
    issuedBy?: UserCreateNestedOneWithoutIssuedCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutVolunteerInput = {
    id?: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedById?: string | null
    issuedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutVolunteerInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput>
  }

  export type CertificateCreateManyVolunteerInputEnvelope = {
    data: CertificateCreateManyVolunteerInput | CertificateCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerHourCreateWithoutVerifiedByInput = {
    id?: string
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutVolunteerHoursInput
    event?: EventCreateNestedOneWithoutVolunteerHoursInput
    registration?: EventRegistrationCreateNestedOneWithoutVolunteerHoursInput
  }

  export type VolunteerHourUncheckedCreateWithoutVerifiedByInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourCreateOrConnectWithoutVerifiedByInput = {
    where: VolunteerHourWhereUniqueInput
    create: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput>
  }

  export type VolunteerHourCreateManyVerifiedByInputEnvelope = {
    data: VolunteerHourCreateManyVerifiedByInput | VolunteerHourCreateManyVerifiedByInput[]
    skipDuplicates?: boolean
  }

  export type EventRegistrationCreateWithoutReviewedByInput = {
    id?: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    event: EventCreateNestedOneWithoutRegistrationsInput
    volunteer: UserCreateNestedOneWithoutRegistrationsInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationUncheckedCreateWithoutReviewedByInput = {
    id?: string
    eventId: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationCreateOrConnectWithoutReviewedByInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput>
  }

  export type EventRegistrationCreateManyReviewedByInputEnvelope = {
    data: EventRegistrationCreateManyReviewedByInput | EventRegistrationCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutIssuedByInput = {
    id?: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutIssuedByInput = {
    id?: string
    volunteerId: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutIssuedByInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput>
  }

  export type CertificateCreateManyIssuedByInputEnvelope = {
    data: CertificateCreateManyIssuedByInput | CertificateCreateManyIssuedByInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: UuidFilter<"Event"> | string
    organizerId?: UuidFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    activityType?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    requiredHours?: IntFilter<"Event"> | number
    maxParticipants?: IntNullableFilter<"Event"> | number | null
    currentParticipants?: IntNullableFilter<"Event"> | number | null
    requirements?: StringNullableFilter<"Event"> | string | null
    skillsNeeded?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    tags?: StringNullableListFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutVolunteerInput, EventRegistrationUncheckedUpdateWithoutVolunteerInput>
    create: XOR<EventRegistrationCreateWithoutVolunteerInput, EventRegistrationUncheckedCreateWithoutVolunteerInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutVolunteerInput, EventRegistrationUncheckedUpdateWithoutVolunteerInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutVolunteerInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type EventRegistrationScalarWhereInput = {
    AND?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    OR?: EventRegistrationScalarWhereInput[]
    NOT?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    id?: UuidFilter<"EventRegistration"> | string
    eventId?: UuidFilter<"EventRegistration"> | string
    volunteerId?: UuidFilter<"EventRegistration"> | string
    motivationLetter?: StringNullableFilter<"EventRegistration"> | string | null
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    rejectionReason?: StringNullableFilter<"EventRegistration"> | string | null
    attended?: BoolFilter<"EventRegistration"> | boolean
    hoursCompleted?: IntNullableFilter<"EventRegistration"> | number | null
    feedback?: StringNullableFilter<"EventRegistration"> | string | null
    rating?: IntNullableFilter<"EventRegistration"> | number | null
    reviewedById?: UuidNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
  }

  export type VolunteerHourUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerHourWhereUniqueInput
    update: XOR<VolunteerHourUpdateWithoutVolunteerInput, VolunteerHourUncheckedUpdateWithoutVolunteerInput>
    create: XOR<VolunteerHourCreateWithoutVolunteerInput, VolunteerHourUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerHourUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerHourWhereUniqueInput
    data: XOR<VolunteerHourUpdateWithoutVolunteerInput, VolunteerHourUncheckedUpdateWithoutVolunteerInput>
  }

  export type VolunteerHourUpdateManyWithWhereWithoutVolunteerInput = {
    where: VolunteerHourScalarWhereInput
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type VolunteerHourScalarWhereInput = {
    AND?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
    OR?: VolunteerHourScalarWhereInput[]
    NOT?: VolunteerHourScalarWhereInput | VolunteerHourScalarWhereInput[]
    id?: UuidFilter<"VolunteerHour"> | string
    volunteerId?: UuidFilter<"VolunteerHour"> | string
    eventId?: UuidNullableFilter<"VolunteerHour"> | string | null
    registrationId?: UuidNullableFilter<"VolunteerHour"> | string | null
    hours?: IntFilter<"VolunteerHour"> | number
    activityType?: StringFilter<"VolunteerHour"> | string
    date?: DateTimeFilter<"VolunteerHour"> | Date | string
    title?: StringNullableFilter<"VolunteerHour"> | string | null
    description?: StringNullableFilter<"VolunteerHour"> | string | null
    verified?: BoolFilter<"VolunteerHour"> | boolean
    verifiedById?: UuidNullableFilter<"VolunteerHour"> | string | null
    verifiedAt?: DateTimeNullableFilter<"VolunteerHour"> | Date | string | null
    source?: EnumSourceTypeFilter<"VolunteerHour"> | $Enums.SourceType
    createdAt?: DateTimeFilter<"VolunteerHour"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerHour"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutVolunteerInput, CertificateUncheckedUpdateWithoutVolunteerInput>
    create: XOR<CertificateCreateWithoutVolunteerInput, CertificateUncheckedCreateWithoutVolunteerInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutVolunteerInput, CertificateUncheckedUpdateWithoutVolunteerInput>
  }

  export type CertificateUpdateManyWithWhereWithoutVolunteerInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: UuidFilter<"Certificate"> | string
    volunteerId?: UuidFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    totalHours?: IntFilter<"Certificate"> | number
    periodStart?: DateTimeFilter<"Certificate"> | Date | string
    periodEnd?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringNullableFilter<"Certificate"> | string | null
    verificationToken?: UuidFilter<"Certificate"> | string
    isValid?: BoolFilter<"Certificate"> | boolean
    issuedById?: UuidNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type VolunteerHourUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: VolunteerHourWhereUniqueInput
    update: XOR<VolunteerHourUpdateWithoutVerifiedByInput, VolunteerHourUncheckedUpdateWithoutVerifiedByInput>
    create: XOR<VolunteerHourCreateWithoutVerifiedByInput, VolunteerHourUncheckedCreateWithoutVerifiedByInput>
  }

  export type VolunteerHourUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: VolunteerHourWhereUniqueInput
    data: XOR<VolunteerHourUpdateWithoutVerifiedByInput, VolunteerHourUncheckedUpdateWithoutVerifiedByInput>
  }

  export type VolunteerHourUpdateManyWithWhereWithoutVerifiedByInput = {
    where: VolunteerHourScalarWhereInput
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyWithoutVerifiedByInput>
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutReviewedByInput, EventRegistrationUncheckedUpdateWithoutReviewedByInput>
    create: XOR<EventRegistrationCreateWithoutReviewedByInput, EventRegistrationUncheckedCreateWithoutReviewedByInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutReviewedByInput, EventRegistrationUncheckedUpdateWithoutReviewedByInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutReviewedByInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutIssuedByInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutIssuedByInput, CertificateUncheckedUpdateWithoutIssuedByInput>
    create: XOR<CertificateCreateWithoutIssuedByInput, CertificateUncheckedCreateWithoutIssuedByInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutIssuedByInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutIssuedByInput, CertificateUncheckedUpdateWithoutIssuedByInput>
  }

  export type CertificateUpdateManyWithWhereWithoutIssuedByInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutIssuedByInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventRegistrationCreateWithoutEventInput = {
    id?: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    volunteer: UserCreateNestedOneWithoutRegistrationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedRegistrationsInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationUncheckedCreateWithoutEventInput = {
    id?: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type EventRegistrationCreateOrConnectWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationCreateManyEventInputEnvelope = {
    data: EventRegistrationCreateManyEventInput | EventRegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerHourCreateWithoutEventInput = {
    id?: string
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutVolunteerHoursInput
    registration?: EventRegistrationCreateNestedOneWithoutVolunteerHoursInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedHoursInput
  }

  export type VolunteerHourUncheckedCreateWithoutEventInput = {
    id?: string
    volunteerId: string
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourCreateOrConnectWithoutEventInput = {
    where: VolunteerHourWhereUniqueInput
    create: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput>
  }

  export type VolunteerHourCreateManyEventInputEnvelope = {
    data: VolunteerHourCreateManyEventInput | VolunteerHourCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutEventInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type VolunteerHourUpsertWithWhereUniqueWithoutEventInput = {
    where: VolunteerHourWhereUniqueInput
    update: XOR<VolunteerHourUpdateWithoutEventInput, VolunteerHourUncheckedUpdateWithoutEventInput>
    create: XOR<VolunteerHourCreateWithoutEventInput, VolunteerHourUncheckedCreateWithoutEventInput>
  }

  export type VolunteerHourUpdateWithWhereUniqueWithoutEventInput = {
    where: VolunteerHourWhereUniqueInput
    data: XOR<VolunteerHourUpdateWithoutEventInput, VolunteerHourUncheckedUpdateWithoutEventInput>
  }

  export type VolunteerHourUpdateManyWithWhereWithoutEventInput = {
    where: VolunteerHourScalarWhereInput
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutEventsInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutReviewedRegistrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutReviewedRegistrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutReviewedRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedRegistrationsInput, UserUncheckedCreateWithoutReviewedRegistrationsInput>
  }

  export type VolunteerHourCreateWithoutRegistrationInput = {
    id?: string
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer: UserCreateNestedOneWithoutVolunteerHoursInput
    event?: EventCreateNestedOneWithoutVolunteerHoursInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedHoursInput
  }

  export type VolunteerHourUncheckedCreateWithoutRegistrationInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourCreateOrConnectWithoutRegistrationInput = {
    where: VolunteerHourWhereUniqueInput
    create: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput>
  }

  export type VolunteerHourCreateManyRegistrationInputEnvelope = {
    data: VolunteerHourCreateManyRegistrationInput | VolunteerHourCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUpsertWithoutReviewedRegistrationsInput = {
    update: XOR<UserUpdateWithoutReviewedRegistrationsInput, UserUncheckedUpdateWithoutReviewedRegistrationsInput>
    create: XOR<UserCreateWithoutReviewedRegistrationsInput, UserUncheckedCreateWithoutReviewedRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedRegistrationsInput, UserUncheckedUpdateWithoutReviewedRegistrationsInput>
  }

  export type UserUpdateWithoutReviewedRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type VolunteerHourUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: VolunteerHourWhereUniqueInput
    update: XOR<VolunteerHourUpdateWithoutRegistrationInput, VolunteerHourUncheckedUpdateWithoutRegistrationInput>
    create: XOR<VolunteerHourCreateWithoutRegistrationInput, VolunteerHourUncheckedCreateWithoutRegistrationInput>
  }

  export type VolunteerHourUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: VolunteerHourWhereUniqueInput
    data: XOR<VolunteerHourUpdateWithoutRegistrationInput, VolunteerHourUncheckedUpdateWithoutRegistrationInput>
  }

  export type VolunteerHourUpdateManyWithWhereWithoutRegistrationInput = {
    where: VolunteerHourScalarWhereInput
    data: XOR<VolunteerHourUpdateManyMutationInput, VolunteerHourUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type UserCreateWithoutVolunteerHoursInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutVolunteerHoursInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutVolunteerHoursInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerHoursInput, UserUncheckedCreateWithoutVolunteerHoursInput>
  }

  export type EventCreateWithoutVolunteerHoursInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVolunteerHoursInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVolunteerHoursInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVolunteerHoursInput, EventUncheckedCreateWithoutVolunteerHoursInput>
  }

  export type EventRegistrationCreateWithoutVolunteerHoursInput = {
    id?: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
    event: EventCreateNestedOneWithoutRegistrationsInput
    volunteer: UserCreateNestedOneWithoutRegistrationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedRegistrationsInput
  }

  export type EventRegistrationUncheckedCreateWithoutVolunteerHoursInput = {
    id?: string
    eventId: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type EventRegistrationCreateOrConnectWithoutVolunteerHoursInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutVolunteerHoursInput, EventRegistrationUncheckedCreateWithoutVolunteerHoursInput>
  }

  export type UserCreateWithoutVerifiedHoursInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutVerifiedHoursInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutVerifiedHoursInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedHoursInput, UserUncheckedCreateWithoutVerifiedHoursInput>
  }

  export type UserUpsertWithoutVolunteerHoursInput = {
    update: XOR<UserUpdateWithoutVolunteerHoursInput, UserUncheckedUpdateWithoutVolunteerHoursInput>
    create: XOR<UserCreateWithoutVolunteerHoursInput, UserUncheckedCreateWithoutVolunteerHoursInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerHoursInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerHoursInput, UserUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type UserUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type EventUpsertWithoutVolunteerHoursInput = {
    update: XOR<EventUpdateWithoutVolunteerHoursInput, EventUncheckedUpdateWithoutVolunteerHoursInput>
    create: XOR<EventCreateWithoutVolunteerHoursInput, EventUncheckedCreateWithoutVolunteerHoursInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVolunteerHoursInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVolunteerHoursInput, EventUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type EventUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventRegistrationUpsertWithoutVolunteerHoursInput = {
    update: XOR<EventRegistrationUpdateWithoutVolunteerHoursInput, EventRegistrationUncheckedUpdateWithoutVolunteerHoursInput>
    create: XOR<EventRegistrationCreateWithoutVolunteerHoursInput, EventRegistrationUncheckedCreateWithoutVolunteerHoursInput>
    where?: EventRegistrationWhereInput
  }

  export type EventRegistrationUpdateToOneWithWhereWithoutVolunteerHoursInput = {
    where?: EventRegistrationWhereInput
    data: XOR<EventRegistrationUpdateWithoutVolunteerHoursInput, EventRegistrationUncheckedUpdateWithoutVolunteerHoursInput>
  }

  export type EventRegistrationUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    volunteer?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedRegistrationsNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutVolunteerHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutVerifiedHoursInput = {
    update: XOR<UserUpdateWithoutVerifiedHoursInput, UserUncheckedUpdateWithoutVerifiedHoursInput>
    create: XOR<UserCreateWithoutVerifiedHoursInput, UserUncheckedCreateWithoutVerifiedHoursInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedHoursInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedHoursInput, UserUncheckedUpdateWithoutVerifiedHoursInput>
  }

  export type UserUpdateWithoutVerifiedHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type UserCreateWithoutIssuedCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutIssuedCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    phone?: string | null
    bio?: string | null
    avatarUrl?: string | null
    preferredActivities?: UserCreatepreferredActivitiesInput | string[]
    organizationName?: string | null
    organizationDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutVolunteerInput
    volunteerHours?: VolunteerHourUncheckedCreateNestedManyWithoutVolunteerInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutVolunteerInput
    verifiedHours?: VolunteerHourUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewedRegistrations?: EventRegistrationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutIssuedCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUpsertWithoutIssuedCertificatesInput = {
    update: XOR<UserUpdateWithoutIssuedCertificatesInput, UserUncheckedUpdateWithoutIssuedCertificatesInput>
    create: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssuedCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssuedCertificatesInput, UserUncheckedUpdateWithoutIssuedCertificatesInput>
  }

  export type UserUpdateWithoutIssuedCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutIssuedCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferredActivities?: UserUpdatepreferredActivitiesInput | string[]
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutVolunteerNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutVolunteerNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutVolunteerNestedInput
    verifiedHours?: VolunteerHourUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewedRegistrations?: EventRegistrationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    activityType: string
    eventDate: Date | string
    startTime: Date | string
    endTime: Date | string
    location: string
    address?: string | null
    requiredHours: number
    maxParticipants?: number | null
    currentParticipants?: number | null
    requirements?: string | null
    skillsNeeded?: EventCreateskillsNeededInput | string[]
    status?: $Enums.EventStatus
    tags?: EventCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type EventRegistrationCreateManyVolunteerInput = {
    id?: string
    eventId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type VolunteerHourCreateManyVolunteerInput = {
    id?: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyVolunteerInput = {
    id?: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedById?: string | null
    issuedAt?: Date | string
  }

  export type VolunteerHourCreateManyVerifiedByInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationCreateManyReviewedByInput = {
    id?: string
    eventId: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type CertificateCreateManyIssuedByInput = {
    id?: string
    volunteerId: string
    certificateNumber: string
    totalHours: number
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl?: string | null
    verificationToken?: string
    isValid?: boolean
    issuedAt?: Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requiredHours?: IntFieldUpdateOperationsInput | number
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    currentParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    skillsNeeded?: EventUpdateskillsNeededInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tags?: EventUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventRegistrationUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedRegistrationsNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VolunteerHourUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutVolunteerHoursNestedInput
    registration?: EventRegistrationUpdateOneWithoutVolunteerHoursNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedHoursNestedInput
  }

  export type VolunteerHourUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBy?: UserUpdateOneWithoutIssuedCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedById?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedById?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutVolunteerHoursNestedInput
    event?: EventUpdateOneWithoutVolunteerHoursNestedInput
    registration?: EventRegistrationUpdateOneWithoutVolunteerHoursNestedInput
  }

  export type VolunteerHourUncheckedUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    volunteer?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateManyWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CertificateUpdateWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    totalHours?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateManyEventInput = {
    id?: string
    volunteerId: string
    motivationLetter?: string | null
    status?: $Enums.RegistrationStatus
    rejectionReason?: string | null
    attended?: boolean
    hoursCompleted?: number | null
    feedback?: string | null
    rating?: number | null
    reviewedById?: string | null
    registeredAt?: Date | string
    reviewedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type VolunteerHourCreateManyEventInput = {
    id?: string
    volunteerId: string
    registrationId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteer?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedRegistrationsNestedInput
    volunteerHours?: VolunteerHourUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteerHours?: VolunteerHourUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    motivationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    hoursCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VolunteerHourUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutVolunteerHoursNestedInput
    registration?: EventRegistrationUpdateOneWithoutVolunteerHoursNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedHoursNestedInput
  }

  export type VolunteerHourUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    registrationId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourCreateManyRegistrationInput = {
    id?: string
    volunteerId: string
    eventId?: string | null
    hours: number
    activityType: string
    date: Date | string
    title?: string | null
    description?: string | null
    verified?: boolean
    verifiedById?: string | null
    verifiedAt?: Date | string | null
    source?: $Enums.SourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerHourUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: UserUpdateOneRequiredWithoutVolunteerHoursNestedInput
    event?: EventUpdateOneWithoutVolunteerHoursNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedHoursNestedInput
  }

  export type VolunteerHourUncheckedUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerHourUncheckedUpdateManyWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: IntFieldUpdateOperationsInput | number
    activityType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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