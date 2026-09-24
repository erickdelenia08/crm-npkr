
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model ProductType
 * 
 */
export type ProductType = $Result.DefaultSelection<Prisma.$ProductTypePayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model UnitReservation
 * 
 */
export type UnitReservation = $Result.DefaultSelection<Prisma.$UnitReservationPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MARKETING: 'MARKETING',
  DIGITAL_MARKETING: 'DIGITAL_MARKETING',
  FIELD_SUPERVISOR: 'FIELD_SUPERVISOR',
  MANAGER: 'MANAGER',
  DIRECTOR: 'DIRECTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UnitStatus: {
  AVAILABLE: 'AVAILABLE',
  HOLD: 'HOLD',
  BOOKED: 'BOOKED',
  AKAD: 'AKAD',
  SOLD: 'SOLD',
  CANCELLED: 'CANCELLED'
};

export type UnitStatus = (typeof UnitStatus)[keyof typeof UnitStatus]


export const ConstructionStatus: {
  NOT_STARTED: 'NOT_STARTED',
  FOUNDATION: 'FOUNDATION',
  STRUCTURE: 'STRUCTURE',
  WALL: 'WALL',
  ROOF: 'ROOF',
  CEILING: 'CEILING',
  FINISHING: 'FINISHING',
  COMPLETED: 'COMPLETED'
};

export type ConstructionStatus = (typeof ConstructionStatus)[keyof typeof ConstructionStatus]


export const HouseFacing: {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST'
};

export type HouseFacing = (typeof HouseFacing)[keyof typeof HouseFacing]


export const LeadSource: {
  WALK_IN: 'WALK_IN',
  REFERRAL: 'REFERRAL',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  TIKTOK: 'TIKTOK',
  WHATSAPP: 'WHATSAPP',
  ADVERTISEMENT: 'ADVERTISEMENT',
  WEBSITE: 'WEBSITE',
  MARKETING: 'MARKETING',
  OTHER: 'OTHER'
};

export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource]


export const LeadStatus: {
  NEW: 'NEW',
  ACTIVE: 'ACTIVE',
  BOOKED: 'BOOKED',
  CLOSED: 'CLOSED',
  LOST: 'LOST'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const SalesStage: {
  INQUIRY: 'INQUIRY',
  VISIT: 'VISIT',
  FOLLOW_UP: 'FOLLOW_UP',
  DOCUMENTATION: 'DOCUMENTATION',
  KPR: 'KPR',
  SLIK: 'SLIK',
  OTS: 'OTS',
  AKAD: 'AKAD',
  REALIZATION: 'REALIZATION',
  CANCELLED: 'CANCELLED'
};

export type SalesStage = (typeof SalesStage)[keyof typeof SalesStage]


export const ActivityType: {
  NOTE: 'NOTE',
  CALL: 'CALL',
  WHATSAPP: 'WHATSAPP',
  VISIT: 'VISIT',
  FOLLOW_UP: 'FOLLOW_UP',
  DOCUMENT: 'DOCUMENT',
  KPR: 'KPR',
  SLIK: 'SLIK',
  OTS: 'OTS',
  AKAD: 'AKAD',
  REALIZATION: 'REALIZATION',
  PAYMENT: 'PAYMENT',
  OTHER: 'OTHER'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const ReservationType: {
  HOLD: 'HOLD',
  BOOKING: 'BOOKING'
};

export type ReservationType = (typeof ReservationType)[keyof typeof ReservationType]


export const ReservationStatus: {
  ACTIVE: 'ACTIVE',
  RELEASED: 'RELEASED',
  EXPIRED: 'EXPIRED',
  CONVERTED: 'CONVERTED',
  CANCELLED: 'CANCELLED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const AuditAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  STATUS_CHANGE: 'STATUS_CHANGE'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UnitStatus = $Enums.UnitStatus

export const UnitStatus: typeof $Enums.UnitStatus

export type ConstructionStatus = $Enums.ConstructionStatus

export const ConstructionStatus: typeof $Enums.ConstructionStatus

export type HouseFacing = $Enums.HouseFacing

export const HouseFacing: typeof $Enums.HouseFacing

export type LeadSource = $Enums.LeadSource

export const LeadSource: typeof $Enums.LeadSource

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type SalesStage = $Enums.SalesStage

export const SalesStage: typeof $Enums.SalesStage

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type ReservationType = $Enums.ReservationType

export const ReservationType: typeof $Enums.ReservationType

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitReservation`: Exposes CRUD operations for the **UnitReservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitReservations
    * const unitReservations = await prisma.unitReservation.findMany()
    * ```
    */
  get unitReservation(): Prisma.UnitReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Project: 'Project',
    Block: 'Block',
    ProductCategory: 'ProductCategory',
    ProductType: 'ProductType',
    Unit: 'Unit',
    UnitReservation: 'UnitReservation',
    Customer: 'Customer',
    Lead: 'Lead',
    Activity: 'Activity',
    DailyReport: 'DailyReport',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "block" | "productCategory" | "productType" | "unit" | "unitReservation" | "customer" | "lead" | "activity" | "dailyReport" | "auditLog"
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
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductType: {
        payload: Prisma.$ProductTypePayload<ExtArgs>
        fields: Prisma.ProductTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findFirst: {
            args: Prisma.ProductTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findMany: {
            args: Prisma.ProductTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>[]
          }
          create: {
            args: Prisma.ProductTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          createMany: {
            args: Prisma.ProductTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          update: {
            args: Prisma.ProductTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          deleteMany: {
            args: Prisma.ProductTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          aggregate: {
            args: Prisma.ProductTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductType>
          }
          groupBy: {
            args: Prisma.ProductTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      UnitReservation: {
        payload: Prisma.$UnitReservationPayload<ExtArgs>
        fields: Prisma.UnitReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          findFirst: {
            args: Prisma.UnitReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          findMany: {
            args: Prisma.UnitReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>[]
          }
          create: {
            args: Prisma.UnitReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          createMany: {
            args: Prisma.UnitReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          update: {
            args: Prisma.UnitReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          deleteMany: {
            args: Prisma.UnitReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitReservationPayload>
          }
          aggregate: {
            args: Prisma.UnitReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitReservation>
          }
          groupBy: {
            args: Prisma.UnitReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitReservationCountArgs<ExtArgs>
            result: $Utils.Optional<UnitReservationCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    block?: BlockOmit
    productCategory?: ProductCategoryOmit
    productType?: ProductTypeOmit
    unit?: UnitOmit
    unitReservation?: UnitReservationOmit
    customer?: CustomerOmit
    lead?: LeadOmit
    activity?: ActivityOmit
    dailyReport?: DailyReportOmit
    auditLog?: AuditLogOmit
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
    leads: number
    activities: number
    dailyReports: number
    auditLogs: number
    reservations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | UserCountOutputTypeCountLeadsArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    dailyReports?: boolean | UserCountOutputTypeCountDailyReportsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
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
  export type UserCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitReservationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    blocks: number
    leads: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | ProjectCountOutputTypeCountBlocksArgs
    leads?: boolean | ProjectCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type BlockCountOutputType
   */

  export type BlockCountOutputType = {
    units: number
  }

  export type BlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | BlockCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCountOutputType
     */
    select?: BlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    productTypes: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productTypes?: boolean | ProductCategoryCountOutputTypeCountProductTypesArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
  }


  /**
   * Count Type ProductTypeCountOutputType
   */

  export type ProductTypeCountOutputType = {
    units: number
    leads: number
  }

  export type ProductTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | ProductTypeCountOutputTypeCountUnitsArgs
    leads?: boolean | ProductTypeCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTypeCountOutputType
     */
    select?: ProductTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    leads: number
    reservations: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | UnitCountOutputTypeCountLeadsArgs
    reservations?: boolean | UnitCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitReservationWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    leads: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CustomerCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    activities: number
    reservations: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | LeadCountOutputTypeCountActivitiesArgs
    reservations?: boolean | LeadCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitReservationWhereInput
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
    name: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    phone: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    role?: true
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
    name: string
    username: string
    email: string
    phone: string | null
    password: string
    role: $Enums.Role
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
    name?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | User$leadsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "phone" | "password" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | User$leadsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      reservations: Prisma.$UnitReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      phone: string | null
      password: string
      role: $Enums.Role
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
    leads<T extends User$leadsArgs<ExtArgs> = {}>(args?: Subset<T, User$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReports<T extends User$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.leads
   */
  export type User$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.dailyReports
   */
  export type User$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    where?: UnitReservationWhereInput
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    cursor?: UnitReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
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
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    address: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    address: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    code: number
    address: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    code: string
    address: string | null
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blocks?: boolean | Project$blocksArgs<ExtArgs>
    leads?: boolean | Project$leadsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "address" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | Project$blocksArgs<ExtArgs>
    leads?: boolean | Project$leadsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      blocks: Prisma.$BlockPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      address: string | null
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocks<T extends Project$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Project$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Project$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Project$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly code: FieldRef<"Project", 'String'>
    readonly address: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.blocks
   */
  export type Project$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Project.leads
   */
  export type Project$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type BlockSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    code: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    code: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    code: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    sortOrder?: true
  }

  export type BlockSumAggregateInputType = {
    sortOrder?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    code?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    code?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    code?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    projectId: string
    name: string
    code: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    code?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    units?: boolean | Block$unitsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>



  export type BlockSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    code?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "code" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    units?: boolean | Block$unitsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      units: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      code: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units<T extends Block$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Block$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly projectId: FieldRef<"Block", 'String'>
    readonly name: FieldRef<"Block", 'String'>
    readonly code: FieldRef<"Block", 'String'>
    readonly sortOrder: FieldRef<"Block", 'Int'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block.units
   */
  export type Block$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: string
    name: string
    code: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productTypes?: boolean | ProductCategory$productTypesArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>



  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productTypes?: boolean | ProductCategory$productTypesArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      productTypes: Prisma.$ProductTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productTypes<T extends ProductCategory$productTypesArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'String'>
    readonly name: FieldRef<"ProductCategory", 'String'>
    readonly code: FieldRef<"ProductCategory", 'String'>
    readonly description: FieldRef<"ProductCategory", 'String'>
    readonly isActive: FieldRef<"ProductCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.productTypes
   */
  export type ProductCategory$productTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    cursor?: ProductTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductType
   */

  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeAvgAggregateOutputType = {
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    ceilingHeight: Decimal | null
    basePrice: Decimal | null
  }

  export type ProductTypeSumAggregateOutputType = {
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    ceilingHeight: Decimal | null
    basePrice: Decimal | null
  }

  export type ProductTypeMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    code: string | null
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    ceilingHeight: Decimal | null
    wallMaterial: string | null
    roofMaterial: string | null
    floorMaterial: string | null
    doorMaterial: string | null
    windowMaterial: string | null
    electricity: string | null
    waterSource: string | null
    basePrice: Decimal | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    code: string | null
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    ceilingHeight: Decimal | null
    wallMaterial: string | null
    roofMaterial: string | null
    floorMaterial: string | null
    doorMaterial: string | null
    windowMaterial: string | null
    electricity: string | null
    waterSource: string | null
    basePrice: Decimal | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTypeCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    code: number
    landArea: number
    buildingArea: number
    bedrooms: number
    bathrooms: number
    ceilingHeight: number
    wallMaterial: number
    roofMaterial: number
    floorMaterial: number
    doorMaterial: number
    windowMaterial: number
    electricity: number
    waterSource: number
    basePrice: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductTypeAvgAggregateInputType = {
    landArea?: true
    buildingArea?: true
    bedrooms?: true
    bathrooms?: true
    ceilingHeight?: true
    basePrice?: true
  }

  export type ProductTypeSumAggregateInputType = {
    landArea?: true
    buildingArea?: true
    bedrooms?: true
    bathrooms?: true
    ceilingHeight?: true
    basePrice?: true
  }

  export type ProductTypeMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    code?: true
    landArea?: true
    buildingArea?: true
    bedrooms?: true
    bathrooms?: true
    ceilingHeight?: true
    wallMaterial?: true
    roofMaterial?: true
    floorMaterial?: true
    doorMaterial?: true
    windowMaterial?: true
    electricity?: true
    waterSource?: true
    basePrice?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    code?: true
    landArea?: true
    buildingArea?: true
    bedrooms?: true
    bathrooms?: true
    ceilingHeight?: true
    wallMaterial?: true
    roofMaterial?: true
    floorMaterial?: true
    doorMaterial?: true
    windowMaterial?: true
    electricity?: true
    waterSource?: true
    basePrice?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTypeCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    code?: true
    landArea?: true
    buildingArea?: true
    bedrooms?: true
    bathrooms?: true
    ceilingHeight?: true
    wallMaterial?: true
    roofMaterial?: true
    floorMaterial?: true
    doorMaterial?: true
    windowMaterial?: true
    electricity?: true
    waterSource?: true
    basePrice?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithAggregationInput | ProductTypeOrderByWithAggregationInput[]
    by: ProductTypeScalarFieldEnum[] | ProductTypeScalarFieldEnum
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _avg?: ProductTypeAvgAggregateInputType
    _sum?: ProductTypeSumAggregateInputType
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }

  export type ProductTypeGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    code: string
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    ceilingHeight: Decimal | null
    wallMaterial: string | null
    roofMaterial: string | null
    floorMaterial: string | null
    doorMaterial: string | null
    windowMaterial: string | null
    electricity: string | null
    waterSource: string | null
    basePrice: Decimal | null
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    code?: boolean
    landArea?: boolean
    buildingArea?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    ceilingHeight?: boolean
    wallMaterial?: boolean
    roofMaterial?: boolean
    floorMaterial?: boolean
    doorMaterial?: boolean
    windowMaterial?: boolean
    electricity?: boolean
    waterSource?: boolean
    basePrice?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    units?: boolean | ProductType$unitsArgs<ExtArgs>
    leads?: boolean | ProductType$leadsArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productType"]>



  export type ProductTypeSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    code?: boolean
    landArea?: boolean
    buildingArea?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    ceilingHeight?: boolean
    wallMaterial?: boolean
    roofMaterial?: boolean
    floorMaterial?: boolean
    doorMaterial?: boolean
    windowMaterial?: boolean
    electricity?: boolean
    waterSource?: boolean
    basePrice?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "code" | "landArea" | "buildingArea" | "bedrooms" | "bathrooms" | "ceilingHeight" | "wallMaterial" | "roofMaterial" | "floorMaterial" | "doorMaterial" | "windowMaterial" | "electricity" | "waterSource" | "basePrice" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["productType"]>
  export type ProductTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    units?: boolean | ProductType$unitsArgs<ExtArgs>
    leads?: boolean | ProductType$leadsArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductType"
    objects: {
      category: Prisma.$ProductCategoryPayload<ExtArgs>
      units: Prisma.$UnitPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      code: string
      landArea: number | null
      buildingArea: number | null
      bedrooms: number | null
      bathrooms: number | null
      ceilingHeight: Prisma.Decimal | null
      wallMaterial: string | null
      roofMaterial: string | null
      floorMaterial: string | null
      doorMaterial: string | null
      windowMaterial: string | null
      electricity: string | null
      waterSource: string | null
      basePrice: Prisma.Decimal | null
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productType"]>
    composites: {}
  }

  type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeDefaultArgs> = $Result.GetResult<Prisma.$ProductTypePayload, S>

  type ProductTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductType'], meta: { name: 'ProductType' } }
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTypeFindUniqueArgs>(args: SelectSubset<T, ProductTypeFindUniqueArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTypeFindFirstArgs>(args?: SelectSubset<T, ProductTypeFindFirstArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTypeWithIdOnly = await prisma.productType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductTypeFindManyArgs>(args?: SelectSubset<T, ProductTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
     */
    create<T extends ProductTypeCreateArgs>(args: SelectSubset<T, ProductTypeCreateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTypes.
     * @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     * @example
     * // Create many ProductTypes
     * const productType = await prisma.productType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTypeCreateManyArgs>(args?: SelectSubset<T, ProductTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
     */
    delete<T extends ProductTypeDeleteArgs>(args: SelectSubset<T, ProductTypeDeleteArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTypeUpdateArgs>(args: SelectSubset<T, ProductTypeUpdateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTypeDeleteManyArgs>(args?: SelectSubset<T, ProductTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTypeUpdateManyArgs>(args: SelectSubset<T, ProductTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
     */
    upsert<T extends ProductTypeUpsertArgs>(args: SelectSubset<T, ProductTypeUpsertArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
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
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductType model
   */
  readonly fields: ProductTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units<T extends ProductType$unitsArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends ProductType$leadsArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductType model
   */
  interface ProductTypeFieldRefs {
    readonly id: FieldRef<"ProductType", 'String'>
    readonly categoryId: FieldRef<"ProductType", 'String'>
    readonly name: FieldRef<"ProductType", 'String'>
    readonly code: FieldRef<"ProductType", 'String'>
    readonly landArea: FieldRef<"ProductType", 'Int'>
    readonly buildingArea: FieldRef<"ProductType", 'Int'>
    readonly bedrooms: FieldRef<"ProductType", 'Int'>
    readonly bathrooms: FieldRef<"ProductType", 'Int'>
    readonly ceilingHeight: FieldRef<"ProductType", 'Decimal'>
    readonly wallMaterial: FieldRef<"ProductType", 'String'>
    readonly roofMaterial: FieldRef<"ProductType", 'String'>
    readonly floorMaterial: FieldRef<"ProductType", 'String'>
    readonly doorMaterial: FieldRef<"ProductType", 'String'>
    readonly windowMaterial: FieldRef<"ProductType", 'String'>
    readonly electricity: FieldRef<"ProductType", 'String'>
    readonly waterSource: FieldRef<"ProductType", 'String'>
    readonly basePrice: FieldRef<"ProductType", 'Decimal'>
    readonly description: FieldRef<"ProductType", 'String'>
    readonly isActive: FieldRef<"ProductType", 'Boolean'>
    readonly createdAt: FieldRef<"ProductType", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductType findUnique
   */
  export type ProductTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findFirst
   */
  export type ProductTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }

  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTypes.
     */
    data: ProductTypeCreateManyInput | ProductTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to update.
     */
    limit?: number
  }

  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }

  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to delete.
     */
    limit?: number
  }

  /**
   * ProductType.units
   */
  export type ProductType$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * ProductType.leads
   */
  export type ProductType$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * ProductType without action
   */
  export type ProductTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    landArea: number | null
    buildingArea: number | null
    price: Decimal | null
  }

  export type UnitSumAggregateOutputType = {
    landArea: number | null
    buildingArea: number | null
    price: Decimal | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    blockId: string | null
    productTypeId: string | null
    number: string | null
    code: string | null
    landArea: number | null
    buildingArea: number | null
    price: Decimal | null
    status: $Enums.UnitStatus | null
    constructionStatus: $Enums.ConstructionStatus | null
    facing: $Enums.HouseFacing | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    blockId: string | null
    productTypeId: string | null
    number: string | null
    code: string | null
    landArea: number | null
    buildingArea: number | null
    price: Decimal | null
    status: $Enums.UnitStatus | null
    constructionStatus: $Enums.ConstructionStatus | null
    facing: $Enums.HouseFacing | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    blockId: number
    productTypeId: number
    number: number
    code: number
    landArea: number
    buildingArea: number
    price: number
    status: number
    constructionStatus: number
    facing: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    landArea?: true
    buildingArea?: true
    price?: true
  }

  export type UnitSumAggregateInputType = {
    landArea?: true
    buildingArea?: true
    price?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    blockId?: true
    productTypeId?: true
    number?: true
    code?: true
    landArea?: true
    buildingArea?: true
    price?: true
    status?: true
    constructionStatus?: true
    facing?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    blockId?: true
    productTypeId?: true
    number?: true
    code?: true
    landArea?: true
    buildingArea?: true
    price?: true
    status?: true
    constructionStatus?: true
    facing?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    blockId?: true
    productTypeId?: true
    number?: true
    code?: true
    landArea?: true
    buildingArea?: true
    price?: true
    status?: true
    constructionStatus?: true
    facing?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    blockId: string
    productTypeId: string
    number: string
    code: string
    landArea: number | null
    buildingArea: number | null
    price: Decimal | null
    status: $Enums.UnitStatus
    constructionStatus: $Enums.ConstructionStatus
    facing: $Enums.HouseFacing | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    productTypeId?: boolean
    number?: boolean
    code?: boolean
    landArea?: boolean
    buildingArea?: boolean
    price?: boolean
    status?: boolean
    constructionStatus?: boolean
    facing?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    leads?: boolean | Unit$leadsArgs<ExtArgs>
    reservations?: boolean | Unit$reservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>



  export type UnitSelectScalar = {
    id?: boolean
    blockId?: boolean
    productTypeId?: boolean
    number?: boolean
    code?: boolean
    landArea?: boolean
    buildingArea?: boolean
    price?: boolean
    status?: boolean
    constructionStatus?: boolean
    facing?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockId" | "productTypeId" | "number" | "code" | "landArea" | "buildingArea" | "price" | "status" | "constructionStatus" | "facing" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    leads?: boolean | Unit$leadsArgs<ExtArgs>
    reservations?: boolean | Unit$reservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      block: Prisma.$BlockPayload<ExtArgs>
      productType: Prisma.$ProductTypePayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
      reservations: Prisma.$UnitReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockId: string
      productTypeId: string
      number: string
      code: string
      landArea: number | null
      buildingArea: number | null
      price: Prisma.Decimal | null
      status: $Enums.UnitStatus
      constructionStatus: $Enums.ConstructionStatus
      facing: $Enums.HouseFacing | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends BlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockDefaultArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productType<T extends ProductTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductTypeDefaultArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends Unit$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Unit$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly blockId: FieldRef<"Unit", 'String'>
    readonly productTypeId: FieldRef<"Unit", 'String'>
    readonly number: FieldRef<"Unit", 'String'>
    readonly code: FieldRef<"Unit", 'String'>
    readonly landArea: FieldRef<"Unit", 'Int'>
    readonly buildingArea: FieldRef<"Unit", 'Int'>
    readonly price: FieldRef<"Unit", 'Decimal'>
    readonly status: FieldRef<"Unit", 'UnitStatus'>
    readonly constructionStatus: FieldRef<"Unit", 'ConstructionStatus'>
    readonly facing: FieldRef<"Unit", 'HouseFacing'>
    readonly description: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.leads
   */
  export type Unit$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Unit.reservations
   */
  export type Unit$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    where?: UnitReservationWhereInput
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    cursor?: UnitReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model UnitReservation
   */

  export type AggregateUnitReservation = {
    _count: UnitReservationCountAggregateOutputType | null
    _min: UnitReservationMinAggregateOutputType | null
    _max: UnitReservationMaxAggregateOutputType | null
  }

  export type UnitReservationMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    leadId: string | null
    createdById: string | null
    type: $Enums.ReservationType | null
    status: $Enums.ReservationStatus | null
    startAt: Date | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitReservationMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    leadId: string | null
    createdById: string | null
    type: $Enums.ReservationType | null
    status: $Enums.ReservationStatus | null
    startAt: Date | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitReservationCountAggregateOutputType = {
    id: number
    unitId: number
    leadId: number
    createdById: number
    type: number
    status: number
    startAt: number
    expiresAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitReservationMinAggregateInputType = {
    id?: true
    unitId?: true
    leadId?: true
    createdById?: true
    type?: true
    status?: true
    startAt?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitReservationMaxAggregateInputType = {
    id?: true
    unitId?: true
    leadId?: true
    createdById?: true
    type?: true
    status?: true
    startAt?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitReservationCountAggregateInputType = {
    id?: true
    unitId?: true
    leadId?: true
    createdById?: true
    type?: true
    status?: true
    startAt?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitReservation to aggregate.
     */
    where?: UnitReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitReservations to fetch.
     */
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitReservations
    **/
    _count?: true | UnitReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitReservationMaxAggregateInputType
  }

  export type GetUnitReservationAggregateType<T extends UnitReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitReservation[P]>
      : GetScalarType<T[P], AggregateUnitReservation[P]>
  }




  export type UnitReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitReservationWhereInput
    orderBy?: UnitReservationOrderByWithAggregationInput | UnitReservationOrderByWithAggregationInput[]
    by: UnitReservationScalarFieldEnum[] | UnitReservationScalarFieldEnum
    having?: UnitReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitReservationCountAggregateInputType | true
    _min?: UnitReservationMinAggregateInputType
    _max?: UnitReservationMaxAggregateInputType
  }

  export type UnitReservationGroupByOutputType = {
    id: string
    unitId: string
    leadId: string
    createdById: string
    type: $Enums.ReservationType
    status: $Enums.ReservationStatus
    startAt: Date
    expiresAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: UnitReservationCountAggregateOutputType | null
    _min: UnitReservationMinAggregateOutputType | null
    _max: UnitReservationMaxAggregateOutputType | null
  }

  type GetUnitReservationGroupByPayload<T extends UnitReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitReservationGroupByOutputType[P]>
            : GetScalarType<T[P], UnitReservationGroupByOutputType[P]>
        }
      >
    >


  export type UnitReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    leadId?: boolean
    createdById?: boolean
    type?: boolean
    status?: boolean
    startAt?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitReservation"]>



  export type UnitReservationSelectScalar = {
    id?: boolean
    unitId?: boolean
    leadId?: boolean
    createdById?: boolean
    type?: boolean
    status?: boolean
    startAt?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "leadId" | "createdById" | "type" | "status" | "startAt" | "expiresAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["unitReservation"]>
  export type UnitReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnitReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitReservation"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      lead: Prisma.$LeadPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      leadId: string
      createdById: string
      type: $Enums.ReservationType
      status: $Enums.ReservationStatus
      startAt: Date
      expiresAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unitReservation"]>
    composites: {}
  }

  type UnitReservationGetPayload<S extends boolean | null | undefined | UnitReservationDefaultArgs> = $Result.GetResult<Prisma.$UnitReservationPayload, S>

  type UnitReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitReservationCountAggregateInputType | true
    }

  export interface UnitReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitReservation'], meta: { name: 'UnitReservation' } }
    /**
     * Find zero or one UnitReservation that matches the filter.
     * @param {UnitReservationFindUniqueArgs} args - Arguments to find a UnitReservation
     * @example
     * // Get one UnitReservation
     * const unitReservation = await prisma.unitReservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitReservationFindUniqueArgs>(args: SelectSubset<T, UnitReservationFindUniqueArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitReservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitReservationFindUniqueOrThrowArgs} args - Arguments to find a UnitReservation
     * @example
     * // Get one UnitReservation
     * const unitReservation = await prisma.unitReservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitReservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationFindFirstArgs} args - Arguments to find a UnitReservation
     * @example
     * // Get one UnitReservation
     * const unitReservation = await prisma.unitReservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitReservationFindFirstArgs>(args?: SelectSubset<T, UnitReservationFindFirstArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitReservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationFindFirstOrThrowArgs} args - Arguments to find a UnitReservation
     * @example
     * // Get one UnitReservation
     * const unitReservation = await prisma.unitReservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitReservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitReservations
     * const unitReservations = await prisma.unitReservation.findMany()
     * 
     * // Get first 10 UnitReservations
     * const unitReservations = await prisma.unitReservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitReservationWithIdOnly = await prisma.unitReservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitReservationFindManyArgs>(args?: SelectSubset<T, UnitReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitReservation.
     * @param {UnitReservationCreateArgs} args - Arguments to create a UnitReservation.
     * @example
     * // Create one UnitReservation
     * const UnitReservation = await prisma.unitReservation.create({
     *   data: {
     *     // ... data to create a UnitReservation
     *   }
     * })
     * 
     */
    create<T extends UnitReservationCreateArgs>(args: SelectSubset<T, UnitReservationCreateArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitReservations.
     * @param {UnitReservationCreateManyArgs} args - Arguments to create many UnitReservations.
     * @example
     * // Create many UnitReservations
     * const unitReservation = await prisma.unitReservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitReservationCreateManyArgs>(args?: SelectSubset<T, UnitReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UnitReservation.
     * @param {UnitReservationDeleteArgs} args - Arguments to delete one UnitReservation.
     * @example
     * // Delete one UnitReservation
     * const UnitReservation = await prisma.unitReservation.delete({
     *   where: {
     *     // ... filter to delete one UnitReservation
     *   }
     * })
     * 
     */
    delete<T extends UnitReservationDeleteArgs>(args: SelectSubset<T, UnitReservationDeleteArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitReservation.
     * @param {UnitReservationUpdateArgs} args - Arguments to update one UnitReservation.
     * @example
     * // Update one UnitReservation
     * const unitReservation = await prisma.unitReservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitReservationUpdateArgs>(args: SelectSubset<T, UnitReservationUpdateArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitReservations.
     * @param {UnitReservationDeleteManyArgs} args - Arguments to filter UnitReservations to delete.
     * @example
     * // Delete a few UnitReservations
     * const { count } = await prisma.unitReservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitReservationDeleteManyArgs>(args?: SelectSubset<T, UnitReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitReservations
     * const unitReservation = await prisma.unitReservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitReservationUpdateManyArgs>(args: SelectSubset<T, UnitReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnitReservation.
     * @param {UnitReservationUpsertArgs} args - Arguments to update or create a UnitReservation.
     * @example
     * // Update or create a UnitReservation
     * const unitReservation = await prisma.unitReservation.upsert({
     *   create: {
     *     // ... data to create a UnitReservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitReservation we want to update
     *   }
     * })
     */
    upsert<T extends UnitReservationUpsertArgs>(args: SelectSubset<T, UnitReservationUpsertArgs<ExtArgs>>): Prisma__UnitReservationClient<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitReservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationCountArgs} args - Arguments to filter UnitReservations to count.
     * @example
     * // Count the number of UnitReservations
     * const count = await prisma.unitReservation.count({
     *   where: {
     *     // ... the filter for the UnitReservations we want to count
     *   }
     * })
    **/
    count<T extends UnitReservationCountArgs>(
      args?: Subset<T, UnitReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitReservationAggregateArgs>(args: Subset<T, UnitReservationAggregateArgs>): Prisma.PrismaPromise<GetUnitReservationAggregateType<T>>

    /**
     * Group by UnitReservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitReservationGroupByArgs} args - Group by arguments.
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
      T extends UnitReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitReservationGroupByArgs['orderBy'] }
        : { orderBy?: UnitReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitReservation model
   */
  readonly fields: UnitReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitReservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitReservation model
   */
  interface UnitReservationFieldRefs {
    readonly id: FieldRef<"UnitReservation", 'String'>
    readonly unitId: FieldRef<"UnitReservation", 'String'>
    readonly leadId: FieldRef<"UnitReservation", 'String'>
    readonly createdById: FieldRef<"UnitReservation", 'String'>
    readonly type: FieldRef<"UnitReservation", 'ReservationType'>
    readonly status: FieldRef<"UnitReservation", 'ReservationStatus'>
    readonly startAt: FieldRef<"UnitReservation", 'DateTime'>
    readonly expiresAt: FieldRef<"UnitReservation", 'DateTime'>
    readonly notes: FieldRef<"UnitReservation", 'String'>
    readonly createdAt: FieldRef<"UnitReservation", 'DateTime'>
    readonly updatedAt: FieldRef<"UnitReservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnitReservation findUnique
   */
  export type UnitReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter, which UnitReservation to fetch.
     */
    where: UnitReservationWhereUniqueInput
  }

  /**
   * UnitReservation findUniqueOrThrow
   */
  export type UnitReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter, which UnitReservation to fetch.
     */
    where: UnitReservationWhereUniqueInput
  }

  /**
   * UnitReservation findFirst
   */
  export type UnitReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter, which UnitReservation to fetch.
     */
    where?: UnitReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitReservations to fetch.
     */
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitReservations.
     */
    cursor?: UnitReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitReservations.
     */
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
  }

  /**
   * UnitReservation findFirstOrThrow
   */
  export type UnitReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter, which UnitReservation to fetch.
     */
    where?: UnitReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitReservations to fetch.
     */
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitReservations.
     */
    cursor?: UnitReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitReservations.
     */
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
  }

  /**
   * UnitReservation findMany
   */
  export type UnitReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter, which UnitReservations to fetch.
     */
    where?: UnitReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitReservations to fetch.
     */
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitReservations.
     */
    cursor?: UnitReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitReservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitReservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitReservations.
     */
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
  }

  /**
   * UnitReservation create
   */
  export type UnitReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitReservation.
     */
    data: XOR<UnitReservationCreateInput, UnitReservationUncheckedCreateInput>
  }

  /**
   * UnitReservation createMany
   */
  export type UnitReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitReservations.
     */
    data: UnitReservationCreateManyInput | UnitReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitReservation update
   */
  export type UnitReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitReservation.
     */
    data: XOR<UnitReservationUpdateInput, UnitReservationUncheckedUpdateInput>
    /**
     * Choose, which UnitReservation to update.
     */
    where: UnitReservationWhereUniqueInput
  }

  /**
   * UnitReservation updateMany
   */
  export type UnitReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitReservations.
     */
    data: XOR<UnitReservationUpdateManyMutationInput, UnitReservationUncheckedUpdateManyInput>
    /**
     * Filter which UnitReservations to update
     */
    where?: UnitReservationWhereInput
    /**
     * Limit how many UnitReservations to update.
     */
    limit?: number
  }

  /**
   * UnitReservation upsert
   */
  export type UnitReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitReservation to update in case it exists.
     */
    where: UnitReservationWhereUniqueInput
    /**
     * In case the UnitReservation found by the `where` argument doesn't exist, create a new UnitReservation with this data.
     */
    create: XOR<UnitReservationCreateInput, UnitReservationUncheckedCreateInput>
    /**
     * In case the UnitReservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitReservationUpdateInput, UnitReservationUncheckedUpdateInput>
  }

  /**
   * UnitReservation delete
   */
  export type UnitReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    /**
     * Filter which UnitReservation to delete.
     */
    where: UnitReservationWhereUniqueInput
  }

  /**
   * UnitReservation deleteMany
   */
  export type UnitReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitReservations to delete
     */
    where?: UnitReservationWhereInput
    /**
     * Limit how many UnitReservations to delete.
     */
    limit?: number
  }

  /**
   * UnitReservation without action
   */
  export type UnitReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    birthDate: Date | null
    nik: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    birthDate: Date | null
    nik: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    birthDate: number
    nik: number
    address: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    birthDate?: true
    nik?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    birthDate?: true
    nik?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    birthDate?: true
    nik?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    email: string | null
    birthDate: Date | null
    nik: string | null
    address: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    nik?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | Customer$leadsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    nik?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "birthDate" | "nik" | "address" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Customer$leadsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      email: string | null
      birthDate: Date | null
      nik: string | null
      address: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Customer$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly birthDate: FieldRef<"Customer", 'DateTime'>
    readonly nik: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.leads
   */
  export type Customer$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    marketingId: string | null
    projectId: string | null
    productTypeId: string | null
    unitId: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    stage: $Enums.SalesStage | null
    firstVisitAt: Date | null
    nextFollowUpAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    marketingId: string | null
    projectId: string | null
    productTypeId: string | null
    unitId: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    stage: $Enums.SalesStage | null
    firstVisitAt: Date | null
    nextFollowUpAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    customerId: number
    marketingId: number
    projectId: number
    productTypeId: number
    unitId: number
    source: number
    status: number
    stage: number
    firstVisitAt: number
    nextFollowUpAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    customerId?: true
    marketingId?: true
    projectId?: true
    productTypeId?: true
    unitId?: true
    source?: true
    status?: true
    stage?: true
    firstVisitAt?: true
    nextFollowUpAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    customerId?: true
    marketingId?: true
    projectId?: true
    productTypeId?: true
    unitId?: true
    source?: true
    status?: true
    stage?: true
    firstVisitAt?: true
    nextFollowUpAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    customerId?: true
    marketingId?: true
    projectId?: true
    productTypeId?: true
    unitId?: true
    source?: true
    status?: true
    stage?: true
    firstVisitAt?: true
    nextFollowUpAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    stage: $Enums.SalesStage
    firstVisitAt: Date | null
    nextFollowUpAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    marketingId?: boolean
    projectId?: boolean
    productTypeId?: boolean
    unitId?: boolean
    source?: boolean
    status?: boolean
    stage?: boolean
    firstVisitAt?: boolean
    nextFollowUpAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    marketing?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    unit?: boolean | Lead$unitArgs<ExtArgs>
    activities?: boolean | Lead$activitiesArgs<ExtArgs>
    reservations?: boolean | Lead$reservationsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>



  export type LeadSelectScalar = {
    id?: boolean
    customerId?: boolean
    marketingId?: boolean
    projectId?: boolean
    productTypeId?: boolean
    unitId?: boolean
    source?: boolean
    status?: boolean
    stage?: boolean
    firstVisitAt?: boolean
    nextFollowUpAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "marketingId" | "projectId" | "productTypeId" | "unitId" | "source" | "status" | "stage" | "firstVisitAt" | "nextFollowUpAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    marketing?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    unit?: boolean | Lead$unitArgs<ExtArgs>
    activities?: boolean | Lead$activitiesArgs<ExtArgs>
    reservations?: boolean | Lead$reservationsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      marketing: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      productType: Prisma.$ProductTypePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      reservations: Prisma.$UnitReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      marketingId: string
      projectId: string
      productTypeId: string
      unitId: string | null
      source: $Enums.LeadSource
      status: $Enums.LeadStatus
      stage: $Enums.SalesStage
      firstVisitAt: Date | null
      nextFollowUpAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marketing<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productType<T extends ProductTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductTypeDefaultArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Lead$unitArgs<ExtArgs> = {}>(args?: Subset<T, Lead$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activities<T extends Lead$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Lead$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly customerId: FieldRef<"Lead", 'String'>
    readonly marketingId: FieldRef<"Lead", 'String'>
    readonly projectId: FieldRef<"Lead", 'String'>
    readonly productTypeId: FieldRef<"Lead", 'String'>
    readonly unitId: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'LeadSource'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly stage: FieldRef<"Lead", 'SalesStage'>
    readonly firstVisitAt: FieldRef<"Lead", 'DateTime'>
    readonly nextFollowUpAt: FieldRef<"Lead", 'DateTime'>
    readonly notes: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.unit
   */
  export type Lead$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Lead.activities
   */
  export type Lead$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Lead.reservations
   */
  export type Lead$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitReservation
     */
    select?: UnitReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitReservation
     */
    omit?: UnitReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitReservationInclude<ExtArgs> | null
    where?: UnitReservationWhereInput
    orderBy?: UnitReservationOrderByWithRelationInput | UnitReservationOrderByWithRelationInput[]
    cursor?: UnitReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitReservationScalarFieldEnum | UnitReservationScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    createdById: string | null
    type: $Enums.ActivityType | null
    activityDate: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    createdById: string | null
    type: $Enums.ActivityType | null
    activityDate: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    leadId: number
    createdById: number
    type: number
    activityDate: number
    description: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    leadId?: true
    createdById?: true
    type?: true
    activityDate?: true
    description?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    leadId?: true
    createdById?: true
    type?: true
    activityDate?: true
    description?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    leadId?: true
    createdById?: true
    type?: true
    activityDate?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    leadId: string
    createdById: string
    type: $Enums.ActivityType
    activityDate: Date
    description: string
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    createdById?: boolean
    type?: boolean
    activityDate?: boolean
    description?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    leadId?: boolean
    createdById?: boolean
    type?: boolean
    activityDate?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "createdById" | "type" | "activityDate" | "description" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      createdById: string
      type: $Enums.ActivityType
      activityDate: Date
      description: string
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly leadId: FieldRef<"Activity", 'String'>
    readonly createdById: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
    readonly activityDate: FieldRef<"Activity", 'DateTime'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reportDate: Date | null
    notes: string | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reportDate: Date | null
    notes: string | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    userId: number
    reportDate: number
    notes: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyReportMinAggregateInputType = {
    id?: true
    userId?: true
    reportDate?: true
    notes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    userId?: true
    reportDate?: true
    notes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    userId?: true
    reportDate?: true
    notes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: string
    userId: string
    reportDate: Date
    notes: string | null
    submittedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DailyReportCountAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportDate?: boolean
    notes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>



  export type DailyReportSelectScalar = {
    id?: boolean
    userId?: boolean
    reportDate?: boolean
    notes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reportDate" | "notes" | "submittedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyReport"]>
  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reportDate: Date
      notes: string | null
      submittedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
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
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyReport model
   */
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'String'>
    readonly userId: FieldRef<"DailyReport", 'String'>
    readonly reportDate: FieldRef<"DailyReport", 'DateTime'>
    readonly notes: FieldRef<"DailyReport", 'String'>
    readonly submittedAt: FieldRef<"DailyReport", 'DateTime'>
    readonly createdAt: FieldRef<"DailyReport", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to delete.
     */
    limit?: number
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: string | null
    entityId: string | null
    action: $Enums.AuditAction | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: string | null
    entityId: string | null
    action: $Enums.AuditAction | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    entity: number
    entityId: number
    action: number
    oldData: number
    newData: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    entityId?: true
    action?: true
    oldData?: true
    newData?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData: JsonValue | null
    newData: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    oldData?: boolean
    newData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    oldData?: boolean
    newData?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "entity" | "entityId" | "action" | "oldData" | "newData" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      entity: string
      entityId: string
      action: $Enums.AuditAction
      oldData: Prisma.JsonValue | null
      newData: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly oldData: FieldRef<"AuditLog", 'Json'>
    readonly newData: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    name: 'name',
    username: 'username',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    address: 'address',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    code: 'code',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    code: 'code',
    landArea: 'landArea',
    buildingArea: 'buildingArea',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    ceilingHeight: 'ceilingHeight',
    wallMaterial: 'wallMaterial',
    roofMaterial: 'roofMaterial',
    floorMaterial: 'floorMaterial',
    doorMaterial: 'doorMaterial',
    windowMaterial: 'windowMaterial',
    electricity: 'electricity',
    waterSource: 'waterSource',
    basePrice: 'basePrice',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    productTypeId: 'productTypeId',
    number: 'number',
    code: 'code',
    landArea: 'landArea',
    buildingArea: 'buildingArea',
    price: 'price',
    status: 'status',
    constructionStatus: 'constructionStatus',
    facing: 'facing',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const UnitReservationScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    leadId: 'leadId',
    createdById: 'createdById',
    type: 'type',
    status: 'status',
    startAt: 'startAt',
    expiresAt: 'expiresAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitReservationScalarFieldEnum = (typeof UnitReservationScalarFieldEnum)[keyof typeof UnitReservationScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    birthDate: 'birthDate',
    nik: 'nik',
    address: 'address',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    marketingId: 'marketingId',
    projectId: 'projectId',
    productTypeId: 'productTypeId',
    unitId: 'unitId',
    source: 'source',
    status: 'status',
    stage: 'stage',
    firstVisitAt: 'firstVisitAt',
    nextFollowUpAt: 'nextFollowUpAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    createdById: 'createdById',
    type: 'type',
    activityDate: 'activityDate',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reportDate: 'reportDate',
    notes: 'notes',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    entity: 'entity',
    entityId: 'entityId',
    action: 'action',
    oldData: 'oldData',
    newData: 'newData',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    address: 'address',
    description: 'description'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const BlockOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    code: 'code'
  };

  export type BlockOrderByRelevanceFieldEnum = (typeof BlockOrderByRelevanceFieldEnum)[keyof typeof BlockOrderByRelevanceFieldEnum]


  export const ProductCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description'
  };

  export type ProductCategoryOrderByRelevanceFieldEnum = (typeof ProductCategoryOrderByRelevanceFieldEnum)[keyof typeof ProductCategoryOrderByRelevanceFieldEnum]


  export const ProductTypeOrderByRelevanceFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    code: 'code',
    wallMaterial: 'wallMaterial',
    roofMaterial: 'roofMaterial',
    floorMaterial: 'floorMaterial',
    doorMaterial: 'doorMaterial',
    windowMaterial: 'windowMaterial',
    electricity: 'electricity',
    waterSource: 'waterSource',
    description: 'description'
  };

  export type ProductTypeOrderByRelevanceFieldEnum = (typeof ProductTypeOrderByRelevanceFieldEnum)[keyof typeof ProductTypeOrderByRelevanceFieldEnum]


  export const UnitOrderByRelevanceFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    productTypeId: 'productTypeId',
    number: 'number',
    code: 'code',
    description: 'description'
  };

  export type UnitOrderByRelevanceFieldEnum = (typeof UnitOrderByRelevanceFieldEnum)[keyof typeof UnitOrderByRelevanceFieldEnum]


  export const UnitReservationOrderByRelevanceFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    leadId: 'leadId',
    createdById: 'createdById',
    notes: 'notes'
  };

  export type UnitReservationOrderByRelevanceFieldEnum = (typeof UnitReservationOrderByRelevanceFieldEnum)[keyof typeof UnitReservationOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    nik: 'nik',
    address: 'address',
    notes: 'notes'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const LeadOrderByRelevanceFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    marketingId: 'marketingId',
    projectId: 'projectId',
    productTypeId: 'productTypeId',
    unitId: 'unitId',
    notes: 'notes'
  };

  export type LeadOrderByRelevanceFieldEnum = (typeof LeadOrderByRelevanceFieldEnum)[keyof typeof LeadOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    createdById: 'createdById',
    description: 'description'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const DailyReportOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    notes: 'notes'
  };

  export type DailyReportOrderByRelevanceFieldEnum = (typeof DailyReportOrderByRelevanceFieldEnum)[keyof typeof DailyReportOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    entity: 'entity',
    entityId: 'entityId'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'UnitStatus'
   */
  export type EnumUnitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitStatus'>
    


  /**
   * Reference to a field of type 'ConstructionStatus'
   */
  export type EnumConstructionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConstructionStatus'>
    


  /**
   * Reference to a field of type 'HouseFacing'
   */
  export type EnumHouseFacingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HouseFacing'>
    


  /**
   * Reference to a field of type 'ReservationType'
   */
  export type EnumReservationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationType'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'LeadSource'
   */
  export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'SalesStage'
   */
  export type EnumSalesStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalesStage'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    activities?: ActivityListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    dailyReports?: DailyReportOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    reservations?: UnitReservationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    activities?: ActivityListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    address?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    blocks?: BlockListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocks?: BlockOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    address?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    blocks?: BlockListRelationFilter
    leads?: LeadListRelationFilter
  }, "id" | "code">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    code?: StringWithAggregatesFilter<"Project"> | string
    address?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isActive?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    projectId?: StringFilter<"Block"> | string
    name?: StringFilter<"Block"> | string
    code?: StringFilter<"Block"> | string
    sortOrder?: IntFilter<"Block"> | number
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    units?: UnitListRelationFilter
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    units?: UnitOrderByRelationAggregateInput
    _relevance?: BlockOrderByRelevanceInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_code?: BlockProjectIdCodeCompoundUniqueInput
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    projectId?: StringFilter<"Block"> | string
    name?: StringFilter<"Block"> | string
    code?: StringFilter<"Block"> | string
    sortOrder?: IntFilter<"Block"> | number
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    units?: UnitListRelationFilter
  }, "id" | "projectId_code">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    projectId?: StringWithAggregatesFilter<"Block"> | string
    name?: StringWithAggregatesFilter<"Block"> | string
    code?: StringWithAggregatesFilter<"Block"> | string
    sortOrder?: IntWithAggregatesFilter<"Block"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: StringFilter<"ProductCategory"> | string
    name?: StringFilter<"ProductCategory"> | string
    code?: StringFilter<"ProductCategory"> | string
    description?: StringNullableFilter<"ProductCategory"> | string | null
    isActive?: BoolFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    productTypes?: ProductTypeListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productTypes?: ProductTypeOrderByRelationAggregateInput
    _relevance?: ProductCategoryOrderByRelevanceInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    name?: StringFilter<"ProductCategory"> | string
    description?: StringNullableFilter<"ProductCategory"> | string | null
    isActive?: BoolFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    productTypes?: ProductTypeListRelationFilter
  }, "id" | "code">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategory"> | string
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
    code?: StringWithAggregatesFilter<"ProductCategory"> | string
    description?: StringNullableWithAggregatesFilter<"ProductCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
  }

  export type ProductTypeWhereInput = {
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    id?: StringFilter<"ProductType"> | string
    categoryId?: StringFilter<"ProductType"> | string
    name?: StringFilter<"ProductType"> | string
    code?: StringFilter<"ProductType"> | string
    landArea?: IntNullableFilter<"ProductType"> | number | null
    buildingArea?: IntNullableFilter<"ProductType"> | number | null
    bedrooms?: IntNullableFilter<"ProductType"> | number | null
    bathrooms?: IntNullableFilter<"ProductType"> | number | null
    ceilingHeight?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: StringNullableFilter<"ProductType"> | string | null
    roofMaterial?: StringNullableFilter<"ProductType"> | string | null
    floorMaterial?: StringNullableFilter<"ProductType"> | string | null
    doorMaterial?: StringNullableFilter<"ProductType"> | string | null
    windowMaterial?: StringNullableFilter<"ProductType"> | string | null
    electricity?: StringNullableFilter<"ProductType"> | string | null
    waterSource?: StringNullableFilter<"ProductType"> | string | null
    basePrice?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"ProductType"> | string | null
    isActive?: BoolFilter<"ProductType"> | boolean
    createdAt?: DateTimeFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeFilter<"ProductType"> | Date | string
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    units?: UnitListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type ProductTypeOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    landArea?: SortOrderInput | SortOrder
    buildingArea?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    ceilingHeight?: SortOrderInput | SortOrder
    wallMaterial?: SortOrderInput | SortOrder
    roofMaterial?: SortOrderInput | SortOrder
    floorMaterial?: SortOrderInput | SortOrder
    doorMaterial?: SortOrderInput | SortOrder
    windowMaterial?: SortOrderInput | SortOrder
    electricity?: SortOrderInput | SortOrder
    waterSource?: SortOrderInput | SortOrder
    basePrice?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ProductCategoryOrderByWithRelationInput
    units?: UnitOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    _relevance?: ProductTypeOrderByRelevanceInput
  }

  export type ProductTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    categoryId?: StringFilter<"ProductType"> | string
    name?: StringFilter<"ProductType"> | string
    landArea?: IntNullableFilter<"ProductType"> | number | null
    buildingArea?: IntNullableFilter<"ProductType"> | number | null
    bedrooms?: IntNullableFilter<"ProductType"> | number | null
    bathrooms?: IntNullableFilter<"ProductType"> | number | null
    ceilingHeight?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: StringNullableFilter<"ProductType"> | string | null
    roofMaterial?: StringNullableFilter<"ProductType"> | string | null
    floorMaterial?: StringNullableFilter<"ProductType"> | string | null
    doorMaterial?: StringNullableFilter<"ProductType"> | string | null
    windowMaterial?: StringNullableFilter<"ProductType"> | string | null
    electricity?: StringNullableFilter<"ProductType"> | string | null
    waterSource?: StringNullableFilter<"ProductType"> | string | null
    basePrice?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"ProductType"> | string | null
    isActive?: BoolFilter<"ProductType"> | boolean
    createdAt?: DateTimeFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeFilter<"ProductType"> | Date | string
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    units?: UnitListRelationFilter
    leads?: LeadListRelationFilter
  }, "id" | "code">

  export type ProductTypeOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    landArea?: SortOrderInput | SortOrder
    buildingArea?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    ceilingHeight?: SortOrderInput | SortOrder
    wallMaterial?: SortOrderInput | SortOrder
    roofMaterial?: SortOrderInput | SortOrder
    floorMaterial?: SortOrderInput | SortOrder
    doorMaterial?: SortOrderInput | SortOrder
    windowMaterial?: SortOrderInput | SortOrder
    electricity?: SortOrderInput | SortOrder
    waterSource?: SortOrderInput | SortOrder
    basePrice?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _avg?: ProductTypeAvgOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
    _sum?: ProductTypeSumOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    OR?: ProductTypeScalarWhereWithAggregatesInput[]
    NOT?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductType"> | string
    categoryId?: StringWithAggregatesFilter<"ProductType"> | string
    name?: StringWithAggregatesFilter<"ProductType"> | string
    code?: StringWithAggregatesFilter<"ProductType"> | string
    landArea?: IntNullableWithAggregatesFilter<"ProductType"> | number | null
    buildingArea?: IntNullableWithAggregatesFilter<"ProductType"> | number | null
    bedrooms?: IntNullableWithAggregatesFilter<"ProductType"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"ProductType"> | number | null
    ceilingHeight?: DecimalNullableWithAggregatesFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    roofMaterial?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    floorMaterial?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    doorMaterial?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    windowMaterial?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    electricity?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    waterSource?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    basePrice?: DecimalNullableWithAggregatesFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    isActive?: BoolWithAggregatesFilter<"ProductType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    blockId?: StringFilter<"Unit"> | string
    productTypeId?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    code?: StringFilter<"Unit"> | string
    landArea?: IntNullableFilter<"Unit"> | number | null
    buildingArea?: IntNullableFilter<"Unit"> | number | null
    price?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFilter<"Unit"> | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFilter<"Unit"> | $Enums.ConstructionStatus
    facing?: EnumHouseFacingNullableFilter<"Unit"> | $Enums.HouseFacing | null
    description?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    productType?: XOR<ProductTypeScalarRelationFilter, ProductTypeWhereInput>
    leads?: LeadListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    blockId?: SortOrder
    productTypeId?: SortOrder
    number?: SortOrder
    code?: SortOrder
    landArea?: SortOrderInput | SortOrder
    buildingArea?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    constructionStatus?: SortOrder
    facing?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: BlockOrderByWithRelationInput
    productType?: ProductTypeOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    reservations?: UnitReservationOrderByRelationAggregateInput
    _relevance?: UnitOrderByRelevanceInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    blockId_number?: UnitBlockIdNumberCompoundUniqueInput
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    blockId?: StringFilter<"Unit"> | string
    productTypeId?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    landArea?: IntNullableFilter<"Unit"> | number | null
    buildingArea?: IntNullableFilter<"Unit"> | number | null
    price?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFilter<"Unit"> | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFilter<"Unit"> | $Enums.ConstructionStatus
    facing?: EnumHouseFacingNullableFilter<"Unit"> | $Enums.HouseFacing | null
    description?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    productType?: XOR<ProductTypeScalarRelationFilter, ProductTypeWhereInput>
    leads?: LeadListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }, "id" | "code" | "blockId_number">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    blockId?: SortOrder
    productTypeId?: SortOrder
    number?: SortOrder
    code?: SortOrder
    landArea?: SortOrderInput | SortOrder
    buildingArea?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    constructionStatus?: SortOrder
    facing?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    blockId?: StringWithAggregatesFilter<"Unit"> | string
    productTypeId?: StringWithAggregatesFilter<"Unit"> | string
    number?: StringWithAggregatesFilter<"Unit"> | string
    code?: StringWithAggregatesFilter<"Unit"> | string
    landArea?: IntNullableWithAggregatesFilter<"Unit"> | number | null
    buildingArea?: IntNullableWithAggregatesFilter<"Unit"> | number | null
    price?: DecimalNullableWithAggregatesFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusWithAggregatesFilter<"Unit"> | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusWithAggregatesFilter<"Unit"> | $Enums.ConstructionStatus
    facing?: EnumHouseFacingNullableWithAggregatesFilter<"Unit"> | $Enums.HouseFacing | null
    description?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type UnitReservationWhereInput = {
    AND?: UnitReservationWhereInput | UnitReservationWhereInput[]
    OR?: UnitReservationWhereInput[]
    NOT?: UnitReservationWhereInput | UnitReservationWhereInput[]
    id?: StringFilter<"UnitReservation"> | string
    unitId?: StringFilter<"UnitReservation"> | string
    leadId?: StringFilter<"UnitReservation"> | string
    createdById?: StringFilter<"UnitReservation"> | string
    type?: EnumReservationTypeFilter<"UnitReservation"> | $Enums.ReservationType
    status?: EnumReservationStatusFilter<"UnitReservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"UnitReservation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UnitReservation"> | Date | string | null
    notes?: StringNullableFilter<"UnitReservation"> | string | null
    createdAt?: DateTimeFilter<"UnitReservation"> | Date | string
    updatedAt?: DateTimeFilter<"UnitReservation"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UnitReservationOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: UnitReservationOrderByRelevanceInput
  }

  export type UnitReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitReservationWhereInput | UnitReservationWhereInput[]
    OR?: UnitReservationWhereInput[]
    NOT?: UnitReservationWhereInput | UnitReservationWhereInput[]
    unitId?: StringFilter<"UnitReservation"> | string
    leadId?: StringFilter<"UnitReservation"> | string
    createdById?: StringFilter<"UnitReservation"> | string
    type?: EnumReservationTypeFilter<"UnitReservation"> | $Enums.ReservationType
    status?: EnumReservationStatusFilter<"UnitReservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"UnitReservation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UnitReservation"> | Date | string | null
    notes?: StringNullableFilter<"UnitReservation"> | string | null
    createdAt?: DateTimeFilter<"UnitReservation"> | Date | string
    updatedAt?: DateTimeFilter<"UnitReservation"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UnitReservationOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitReservationCountOrderByAggregateInput
    _max?: UnitReservationMaxOrderByAggregateInput
    _min?: UnitReservationMinOrderByAggregateInput
  }

  export type UnitReservationScalarWhereWithAggregatesInput = {
    AND?: UnitReservationScalarWhereWithAggregatesInput | UnitReservationScalarWhereWithAggregatesInput[]
    OR?: UnitReservationScalarWhereWithAggregatesInput[]
    NOT?: UnitReservationScalarWhereWithAggregatesInput | UnitReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitReservation"> | string
    unitId?: StringWithAggregatesFilter<"UnitReservation"> | string
    leadId?: StringWithAggregatesFilter<"UnitReservation"> | string
    createdById?: StringWithAggregatesFilter<"UnitReservation"> | string
    type?: EnumReservationTypeWithAggregatesFilter<"UnitReservation"> | $Enums.ReservationType
    status?: EnumReservationStatusWithAggregatesFilter<"UnitReservation"> | $Enums.ReservationStatus
    startAt?: DateTimeWithAggregatesFilter<"UnitReservation"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UnitReservation"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"UnitReservation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnitReservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnitReservation"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    nik?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    leads?: LeadListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    nik?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    leads?: LeadListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    nik?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    customerId?: StringFilter<"Lead"> | string
    marketingId?: StringFilter<"Lead"> | string
    projectId?: StringFilter<"Lead"> | string
    productTypeId?: StringFilter<"Lead"> | string
    unitId?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    stage?: EnumSalesStageFilter<"Lead"> | $Enums.SalesStage
    firstVisitAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUpAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    marketing?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    productType?: XOR<ProductTypeScalarRelationFilter, ProductTypeWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    activities?: ActivityListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    marketingId?: SortOrder
    projectId?: SortOrder
    productTypeId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    firstVisitAt?: SortOrderInput | SortOrder
    nextFollowUpAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    marketing?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    productType?: ProductTypeOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    activities?: ActivityOrderByRelationAggregateInput
    reservations?: UnitReservationOrderByRelationAggregateInput
    _relevance?: LeadOrderByRelevanceInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    customerId?: StringFilter<"Lead"> | string
    marketingId?: StringFilter<"Lead"> | string
    projectId?: StringFilter<"Lead"> | string
    productTypeId?: StringFilter<"Lead"> | string
    unitId?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    stage?: EnumSalesStageFilter<"Lead"> | $Enums.SalesStage
    firstVisitAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUpAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    marketing?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    productType?: XOR<ProductTypeScalarRelationFilter, ProductTypeWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    activities?: ActivityListRelationFilter
    reservations?: UnitReservationListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    marketingId?: SortOrder
    projectId?: SortOrder
    productTypeId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    firstVisitAt?: SortOrderInput | SortOrder
    nextFollowUpAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    customerId?: StringWithAggregatesFilter<"Lead"> | string
    marketingId?: StringWithAggregatesFilter<"Lead"> | string
    projectId?: StringWithAggregatesFilter<"Lead"> | string
    productTypeId?: StringWithAggregatesFilter<"Lead"> | string
    unitId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    source?: EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    stage?: EnumSalesStageWithAggregatesFilter<"Lead"> | $Enums.SalesStage
    firstVisitAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    nextFollowUpAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    leadId?: StringFilter<"Activity"> | string
    createdById?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    activityDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    leadId?: StringFilter<"Activity"> | string
    createdById?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    activityDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    leadId?: StringWithAggregatesFilter<"Activity"> | string
    createdById?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    activityDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    userId?: StringFilter<"DailyReport"> | string
    reportDate?: DateTimeFilter<"DailyReport"> | Date | string
    notes?: StringNullableFilter<"DailyReport"> | string | null
    submittedAt?: DateTimeNullableFilter<"DailyReport"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: DailyReportOrderByRelevanceInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_reportDate?: DailyReportUserIdReportDateCompoundUniqueInput
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    userId?: StringFilter<"DailyReport"> | string
    reportDate?: DateTimeFilter<"DailyReport"> | Date | string
    notes?: StringNullableFilter<"DailyReport"> | string | null
    submittedAt?: DateTimeNullableFilter<"DailyReport"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_reportDate">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReport"> | string
    userId?: StringWithAggregatesFilter<"DailyReport"> | string
    reportDate?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"DailyReport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    oldData?: JsonNullableFilter<"AuditLog">
    newData?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldData?: SortOrderInput | SortOrder
    newData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    oldData?: JsonNullableFilter<"AuditLog">
    newData?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldData?: SortOrderInput | SortOrder
    newData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    oldData?: JsonNullableWithAggregatesFilter<"AuditLog">
    newData?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutMarketingInput
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    reservations?: UnitReservationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutMarketingInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutProjectInput
    leads?: LeadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutProjectInput
    leads?: LeadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutProjectNestedInput
    leads?: LeadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutProjectNestedInput
    leads?: LeadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    id?: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBlocksInput
    units?: UnitCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBlocksNestedInput
    units?: UnitUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockCreateManyInput = {
    id?: string
    projectId: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productTypes?: ProductTypeCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productTypes?: ProductTypeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productTypes?: ProductTypeUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productTypes?: ProductTypeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeCreateInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductTypesInput
    units?: UnitCreateNestedManyWithoutProductTypeInput
    leads?: LeadCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutProductTypeInput
    leads?: LeadUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductTypesNestedInput
    units?: UnitUpdateManyWithoutProductTypeNestedInput
    leads?: LeadUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutProductTypeNestedInput
    leads?: LeadUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutUnitsInput
    productType: ProductTypeCreateNestedOneWithoutUnitsInput
    leads?: LeadCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    blockId: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutUnitsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutUnitsNestedInput
    leads?: LeadUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    blockId: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationCreateInput = {
    id?: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutReservationsInput
    lead: LeadCreateNestedOneWithoutReservationsInput
    createdBy: UserCreateNestedOneWithoutReservationsInput
  }

  export type UnitReservationUncheckedCreateInput = {
    id?: string
    unitId: string
    leadId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutReservationsNestedInput
    lead?: LeadUpdateOneRequiredWithoutReservationsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type UnitReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationCreateManyInput = {
    id?: string
    unitId: string
    leadId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    birthDate?: Date | string | null
    nik?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    birthDate?: Date | string | null
    nik?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    birthDate?: Date | string | null
    nik?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutActivitiesInput
    createdBy: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    leadId: string
    createdById: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutActivitiesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    leadId: string
    createdById: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateInput = {
    id?: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyReportUncheckedCreateInput = {
    id?: string
    userId: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateManyInput = {
    id?: string
    userId: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type UnitReservationListRelationFilter = {
    every?: UnitReservationWhereInput
    some?: UnitReservationWhereInput
    none?: UnitReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockOrderByRelevanceInput = {
    fields: BlockOrderByRelevanceFieldEnum | BlockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlockProjectIdCodeCompoundUniqueInput = {
    projectId: string
    code: string
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProductTypeListRelationFilter = {
    every?: ProductTypeWhereInput
    some?: ProductTypeWhereInput
    none?: ProductTypeWhereInput
  }

  export type ProductTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryOrderByRelevanceInput = {
    fields: ProductCategoryOrderByRelevanceFieldEnum | ProductCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type ProductTypeOrderByRelevanceInput = {
    fields: ProductTypeOrderByRelevanceFieldEnum | ProductTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductTypeCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    ceilingHeight?: SortOrder
    wallMaterial?: SortOrder
    roofMaterial?: SortOrder
    floorMaterial?: SortOrder
    doorMaterial?: SortOrder
    windowMaterial?: SortOrder
    electricity?: SortOrder
    waterSource?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeAvgOrderByAggregateInput = {
    landArea?: SortOrder
    buildingArea?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    ceilingHeight?: SortOrder
    basePrice?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    ceilingHeight?: SortOrder
    wallMaterial?: SortOrder
    roofMaterial?: SortOrder
    floorMaterial?: SortOrder
    doorMaterial?: SortOrder
    windowMaterial?: SortOrder
    electricity?: SortOrder
    waterSource?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    ceilingHeight?: SortOrder
    wallMaterial?: SortOrder
    roofMaterial?: SortOrder
    floorMaterial?: SortOrder
    doorMaterial?: SortOrder
    windowMaterial?: SortOrder
    electricity?: SortOrder
    waterSource?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeSumOrderByAggregateInput = {
    landArea?: SortOrder
    buildingArea?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    ceilingHeight?: SortOrder
    basePrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumUnitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitStatus | EnumUnitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UnitStatus[]
    notIn?: $Enums.UnitStatus[]
    not?: NestedEnumUnitStatusFilter<$PrismaModel> | $Enums.UnitStatus
  }

  export type EnumConstructionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConstructionStatus | EnumConstructionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConstructionStatus[]
    notIn?: $Enums.ConstructionStatus[]
    not?: NestedEnumConstructionStatusFilter<$PrismaModel> | $Enums.ConstructionStatus
  }

  export type EnumHouseFacingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseFacing | EnumHouseFacingFieldRefInput<$PrismaModel> | null
    in?: $Enums.HouseFacing[] | null
    notIn?: $Enums.HouseFacing[] | null
    not?: NestedEnumHouseFacingNullableFilter<$PrismaModel> | $Enums.HouseFacing | null
  }

  export type BlockScalarRelationFilter = {
    is?: BlockWhereInput
    isNot?: BlockWhereInput
  }

  export type ProductTypeScalarRelationFilter = {
    is?: ProductTypeWhereInput
    isNot?: ProductTypeWhereInput
  }

  export type UnitOrderByRelevanceInput = {
    fields: UnitOrderByRelevanceFieldEnum | UnitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnitBlockIdNumberCompoundUniqueInput = {
    blockId: string
    number: string
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    productTypeId?: SortOrder
    number?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    price?: SortOrder
    status?: SortOrder
    constructionStatus?: SortOrder
    facing?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    landArea?: SortOrder
    buildingArea?: SortOrder
    price?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    productTypeId?: SortOrder
    number?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    price?: SortOrder
    status?: SortOrder
    constructionStatus?: SortOrder
    facing?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    productTypeId?: SortOrder
    number?: SortOrder
    code?: SortOrder
    landArea?: SortOrder
    buildingArea?: SortOrder
    price?: SortOrder
    status?: SortOrder
    constructionStatus?: SortOrder
    facing?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    landArea?: SortOrder
    buildingArea?: SortOrder
    price?: SortOrder
  }

  export type EnumUnitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitStatus | EnumUnitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UnitStatus[]
    notIn?: $Enums.UnitStatus[]
    not?: NestedEnumUnitStatusWithAggregatesFilter<$PrismaModel> | $Enums.UnitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitStatusFilter<$PrismaModel>
    _max?: NestedEnumUnitStatusFilter<$PrismaModel>
  }

  export type EnumConstructionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConstructionStatus | EnumConstructionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConstructionStatus[]
    notIn?: $Enums.ConstructionStatus[]
    not?: NestedEnumConstructionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConstructionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConstructionStatusFilter<$PrismaModel>
    _max?: NestedEnumConstructionStatusFilter<$PrismaModel>
  }

  export type EnumHouseFacingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseFacing | EnumHouseFacingFieldRefInput<$PrismaModel> | null
    in?: $Enums.HouseFacing[] | null
    notIn?: $Enums.HouseFacing[] | null
    not?: NestedEnumHouseFacingNullableWithAggregatesFilter<$PrismaModel> | $Enums.HouseFacing | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHouseFacingNullableFilter<$PrismaModel>
    _max?: NestedEnumHouseFacingNullableFilter<$PrismaModel>
  }

  export type EnumReservationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[]
    notIn?: $Enums.ReservationType[]
    not?: NestedEnumReservationTypeFilter<$PrismaModel> | $Enums.ReservationType
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UnitReservationOrderByRelevanceInput = {
    fields: UnitReservationOrderByRelevanceFieldEnum | UnitReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnitReservationCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitReservationMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReservationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[]
    notIn?: $Enums.ReservationType[]
    not?: NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReservationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationTypeFilter<$PrismaModel>
    _max?: NestedEnumReservationTypeFilter<$PrismaModel>
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    nik?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    nik?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    nik?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[]
    notIn?: $Enums.LeadSource[]
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type EnumSalesStageFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStage | EnumSalesStageFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStage[]
    notIn?: $Enums.SalesStage[]
    not?: NestedEnumSalesStageFilter<$PrismaModel> | $Enums.SalesStage
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type LeadOrderByRelevanceInput = {
    fields: LeadOrderByRelevanceFieldEnum | LeadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    marketingId?: SortOrder
    projectId?: SortOrder
    productTypeId?: SortOrder
    unitId?: SortOrder
    source?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    firstVisitAt?: SortOrder
    nextFollowUpAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    marketingId?: SortOrder
    projectId?: SortOrder
    productTypeId?: SortOrder
    unitId?: SortOrder
    source?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    firstVisitAt?: SortOrder
    nextFollowUpAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    marketingId?: SortOrder
    projectId?: SortOrder
    productTypeId?: SortOrder
    unitId?: SortOrder
    source?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    firstVisitAt?: SortOrder
    nextFollowUpAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[]
    notIn?: $Enums.LeadSource[]
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type EnumSalesStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStage | EnumSalesStageFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStage[]
    notIn?: $Enums.SalesStage[]
    not?: NestedEnumSalesStageWithAggregatesFilter<$PrismaModel> | $Enums.SalesStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalesStageFilter<$PrismaModel>
    _max?: NestedEnumSalesStageFilter<$PrismaModel>
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[]
    notIn?: $Enums.ActivityType[]
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    activityDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    activityDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    activityDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[]
    notIn?: $Enums.ActivityType[]
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type DailyReportOrderByRelevanceInput = {
    fields: DailyReportOrderByRelevanceFieldEnum | DailyReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DailyReportUserIdReportDateCompoundUniqueInput = {
    userId: string
    reportDate: Date | string
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportDate?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportDate?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportDate?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldData?: SortOrder
    newData?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LeadCreateNestedManyWithoutMarketingInput = {
    create?: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput> | LeadCreateWithoutMarketingInput[] | LeadUncheckedCreateWithoutMarketingInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMarketingInput | LeadCreateOrConnectWithoutMarketingInput[]
    createMany?: LeadCreateManyMarketingInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DailyReportCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UnitReservationCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput> | UnitReservationCreateWithoutCreatedByInput[] | UnitReservationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutCreatedByInput | UnitReservationCreateOrConnectWithoutCreatedByInput[]
    createMany?: UnitReservationCreateManyCreatedByInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutMarketingInput = {
    create?: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput> | LeadCreateWithoutMarketingInput[] | LeadUncheckedCreateWithoutMarketingInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMarketingInput | LeadCreateOrConnectWithoutMarketingInput[]
    createMany?: LeadCreateManyMarketingInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput> | UnitReservationCreateWithoutCreatedByInput[] | UnitReservationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutCreatedByInput | UnitReservationCreateOrConnectWithoutCreatedByInput[]
    createMany?: UnitReservationCreateManyCreatedByInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeadUpdateManyWithoutMarketingNestedInput = {
    create?: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput> | LeadCreateWithoutMarketingInput[] | LeadUncheckedCreateWithoutMarketingInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMarketingInput | LeadCreateOrConnectWithoutMarketingInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMarketingInput | LeadUpsertWithWhereUniqueWithoutMarketingInput[]
    createMany?: LeadCreateManyMarketingInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMarketingInput | LeadUpdateWithWhereUniqueWithoutMarketingInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMarketingInput | LeadUpdateManyWithWhereWithoutMarketingInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCreatedByInput | ActivityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCreatedByInput | ActivityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCreatedByInput | ActivityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DailyReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UnitReservationUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput> | UnitReservationCreateWithoutCreatedByInput[] | UnitReservationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutCreatedByInput | UnitReservationCreateOrConnectWithoutCreatedByInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutCreatedByInput | UnitReservationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UnitReservationCreateManyCreatedByInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutCreatedByInput | UnitReservationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutCreatedByInput | UnitReservationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutMarketingNestedInput = {
    create?: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput> | LeadCreateWithoutMarketingInput[] | LeadUncheckedCreateWithoutMarketingInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMarketingInput | LeadCreateOrConnectWithoutMarketingInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMarketingInput | LeadUpsertWithWhereUniqueWithoutMarketingInput[]
    createMany?: LeadCreateManyMarketingInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMarketingInput | LeadUpdateWithWhereUniqueWithoutMarketingInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMarketingInput | LeadUpdateManyWithWhereWithoutMarketingInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCreatedByInput | ActivityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCreatedByInput | ActivityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCreatedByInput | ActivityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput> | UnitReservationCreateWithoutCreatedByInput[] | UnitReservationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutCreatedByInput | UnitReservationCreateOrConnectWithoutCreatedByInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutCreatedByInput | UnitReservationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UnitReservationCreateManyCreatedByInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutCreatedByInput | UnitReservationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutCreatedByInput | UnitReservationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type BlockCreateNestedManyWithoutProjectInput = {
    create?: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput> | BlockCreateWithoutProjectInput[] | BlockUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectInput | BlockCreateOrConnectWithoutProjectInput[]
    createMany?: BlockCreateManyProjectInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutProjectInput = {
    create?: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput> | LeadCreateWithoutProjectInput[] | LeadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProjectInput | LeadCreateOrConnectWithoutProjectInput[]
    createMany?: LeadCreateManyProjectInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput> | BlockCreateWithoutProjectInput[] | BlockUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectInput | BlockCreateOrConnectWithoutProjectInput[]
    createMany?: BlockCreateManyProjectInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput> | LeadCreateWithoutProjectInput[] | LeadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProjectInput | LeadCreateOrConnectWithoutProjectInput[]
    createMany?: LeadCreateManyProjectInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type BlockUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput> | BlockCreateWithoutProjectInput[] | BlockUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectInput | BlockCreateOrConnectWithoutProjectInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutProjectInput | BlockUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BlockCreateManyProjectInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutProjectInput | BlockUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutProjectInput | BlockUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput> | LeadCreateWithoutProjectInput[] | LeadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProjectInput | LeadCreateOrConnectWithoutProjectInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutProjectInput | LeadUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LeadCreateManyProjectInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutProjectInput | LeadUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutProjectInput | LeadUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput> | BlockCreateWithoutProjectInput[] | BlockUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutProjectInput | BlockCreateOrConnectWithoutProjectInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutProjectInput | BlockUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BlockCreateManyProjectInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutProjectInput | BlockUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutProjectInput | BlockUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput> | LeadCreateWithoutProjectInput[] | LeadUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProjectInput | LeadCreateOrConnectWithoutProjectInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutProjectInput | LeadUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LeadCreateManyProjectInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutProjectInput | LeadUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutProjectInput | LeadUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBlocksInput = {
    create?: XOR<ProjectCreateWithoutBlocksInput, ProjectUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBlocksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UnitCreateNestedManyWithoutBlockInput = {
    create?: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput> | UnitCreateWithoutBlockInput[] | UnitUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBlockInput | UnitCreateOrConnectWithoutBlockInput[]
    createMany?: UnitCreateManyBlockInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput> | UnitCreateWithoutBlockInput[] | UnitUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBlockInput | UnitCreateOrConnectWithoutBlockInput[]
    createMany?: UnitCreateManyBlockInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<ProjectCreateWithoutBlocksInput, ProjectUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBlocksInput
    upsert?: ProjectUpsertWithoutBlocksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBlocksInput, ProjectUpdateWithoutBlocksInput>, ProjectUncheckedUpdateWithoutBlocksInput>
  }

  export type UnitUpdateManyWithoutBlockNestedInput = {
    create?: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput> | UnitCreateWithoutBlockInput[] | UnitUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBlockInput | UnitCreateOrConnectWithoutBlockInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutBlockInput | UnitUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: UnitCreateManyBlockInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutBlockInput | UnitUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutBlockInput | UnitUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput> | UnitCreateWithoutBlockInput[] | UnitUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBlockInput | UnitCreateOrConnectWithoutBlockInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutBlockInput | UnitUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: UnitCreateManyBlockInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutBlockInput | UnitUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutBlockInput | UnitUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type ProductTypeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput> | ProductTypeCreateWithoutCategoryInput[] | ProductTypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutCategoryInput | ProductTypeCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductTypeCreateManyCategoryInputEnvelope
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
  }

  export type ProductTypeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput> | ProductTypeCreateWithoutCategoryInput[] | ProductTypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutCategoryInput | ProductTypeCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductTypeCreateManyCategoryInputEnvelope
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
  }

  export type ProductTypeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput> | ProductTypeCreateWithoutCategoryInput[] | ProductTypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutCategoryInput | ProductTypeCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductTypeUpsertWithWhereUniqueWithoutCategoryInput | ProductTypeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductTypeCreateManyCategoryInputEnvelope
    set?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    disconnect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    delete?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    update?: ProductTypeUpdateWithWhereUniqueWithoutCategoryInput | ProductTypeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductTypeUpdateManyWithWhereWithoutCategoryInput | ProductTypeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
  }

  export type ProductTypeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput> | ProductTypeCreateWithoutCategoryInput[] | ProductTypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutCategoryInput | ProductTypeCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductTypeUpsertWithWhereUniqueWithoutCategoryInput | ProductTypeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductTypeCreateManyCategoryInputEnvelope
    set?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    disconnect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    delete?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    update?: ProductTypeUpdateWithWhereUniqueWithoutCategoryInput | ProductTypeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductTypeUpdateManyWithWhereWithoutCategoryInput | ProductTypeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductTypesInput = {
    create?: XOR<ProductCategoryCreateWithoutProductTypesInput, ProductCategoryUncheckedCreateWithoutProductTypesInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductTypesInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type UnitCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput> | UnitCreateWithoutProductTypeInput[] | UnitUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutProductTypeInput | UnitCreateOrConnectWithoutProductTypeInput[]
    createMany?: UnitCreateManyProductTypeInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput> | LeadCreateWithoutProductTypeInput[] | LeadUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProductTypeInput | LeadCreateOrConnectWithoutProductTypeInput[]
    createMany?: LeadCreateManyProductTypeInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput> | UnitCreateWithoutProductTypeInput[] | UnitUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutProductTypeInput | UnitCreateOrConnectWithoutProductTypeInput[]
    createMany?: UnitCreateManyProductTypeInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput> | LeadCreateWithoutProductTypeInput[] | LeadUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProductTypeInput | LeadCreateOrConnectWithoutProductTypeInput[]
    createMany?: LeadCreateManyProductTypeInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductTypesNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductTypesInput, ProductCategoryUncheckedCreateWithoutProductTypesInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductTypesInput
    upsert?: ProductCategoryUpsertWithoutProductTypesInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductTypesInput, ProductCategoryUpdateWithoutProductTypesInput>, ProductCategoryUncheckedUpdateWithoutProductTypesInput>
  }

  export type UnitUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput> | UnitCreateWithoutProductTypeInput[] | UnitUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutProductTypeInput | UnitCreateOrConnectWithoutProductTypeInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutProductTypeInput | UnitUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: UnitCreateManyProductTypeInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutProductTypeInput | UnitUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutProductTypeInput | UnitUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput> | LeadCreateWithoutProductTypeInput[] | LeadUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProductTypeInput | LeadCreateOrConnectWithoutProductTypeInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutProductTypeInput | LeadUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: LeadCreateManyProductTypeInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutProductTypeInput | LeadUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutProductTypeInput | LeadUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput> | UnitCreateWithoutProductTypeInput[] | UnitUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutProductTypeInput | UnitCreateOrConnectWithoutProductTypeInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutProductTypeInput | UnitUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: UnitCreateManyProductTypeInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutProductTypeInput | UnitUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutProductTypeInput | UnitUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput> | LeadCreateWithoutProductTypeInput[] | LeadUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutProductTypeInput | LeadCreateOrConnectWithoutProductTypeInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutProductTypeInput | LeadUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: LeadCreateManyProductTypeInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutProductTypeInput | LeadUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutProductTypeInput | LeadUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type BlockCreateNestedOneWithoutUnitsInput = {
    create?: XOR<BlockCreateWithoutUnitsInput, BlockUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutUnitsInput
    connect?: BlockWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutUnitsInput = {
    create?: XOR<ProductTypeCreateWithoutUnitsInput, ProductTypeUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutUnitsInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput> | LeadCreateWithoutUnitInput[] | LeadUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutUnitInput | LeadCreateOrConnectWithoutUnitInput[]
    createMany?: LeadCreateManyUnitInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type UnitReservationCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput> | UnitReservationCreateWithoutUnitInput[] | UnitReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutUnitInput | UnitReservationCreateOrConnectWithoutUnitInput[]
    createMany?: UnitReservationCreateManyUnitInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput> | LeadCreateWithoutUnitInput[] | LeadUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutUnitInput | LeadCreateOrConnectWithoutUnitInput[]
    createMany?: LeadCreateManyUnitInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type UnitReservationUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput> | UnitReservationCreateWithoutUnitInput[] | UnitReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutUnitInput | UnitReservationCreateOrConnectWithoutUnitInput[]
    createMany?: UnitReservationCreateManyUnitInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type EnumUnitStatusFieldUpdateOperationsInput = {
    set?: $Enums.UnitStatus
  }

  export type EnumConstructionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConstructionStatus
  }

  export type NullableEnumHouseFacingFieldUpdateOperationsInput = {
    set?: $Enums.HouseFacing | null
  }

  export type BlockUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<BlockCreateWithoutUnitsInput, BlockUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutUnitsInput
    upsert?: BlockUpsertWithoutUnitsInput
    connect?: BlockWhereUniqueInput
    update?: XOR<XOR<BlockUpdateToOneWithWhereWithoutUnitsInput, BlockUpdateWithoutUnitsInput>, BlockUncheckedUpdateWithoutUnitsInput>
  }

  export type ProductTypeUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<ProductTypeCreateWithoutUnitsInput, ProductTypeUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutUnitsInput
    upsert?: ProductTypeUpsertWithoutUnitsInput
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutUnitsInput, ProductTypeUpdateWithoutUnitsInput>, ProductTypeUncheckedUpdateWithoutUnitsInput>
  }

  export type LeadUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput> | LeadCreateWithoutUnitInput[] | LeadUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutUnitInput | LeadCreateOrConnectWithoutUnitInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutUnitInput | LeadUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeadCreateManyUnitInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutUnitInput | LeadUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutUnitInput | LeadUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type UnitReservationUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput> | UnitReservationCreateWithoutUnitInput[] | UnitReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutUnitInput | UnitReservationCreateOrConnectWithoutUnitInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutUnitInput | UnitReservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitReservationCreateManyUnitInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutUnitInput | UnitReservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutUnitInput | UnitReservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput> | LeadCreateWithoutUnitInput[] | LeadUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutUnitInput | LeadCreateOrConnectWithoutUnitInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutUnitInput | LeadUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeadCreateManyUnitInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutUnitInput | LeadUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutUnitInput | LeadUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type UnitReservationUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput> | UnitReservationCreateWithoutUnitInput[] | UnitReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutUnitInput | UnitReservationCreateOrConnectWithoutUnitInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutUnitInput | UnitReservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitReservationCreateManyUnitInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutUnitInput | UnitReservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutUnitInput | UnitReservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutReservationsInput
    connect?: UnitWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutReservationsInput = {
    create?: XOR<LeadCreateWithoutReservationsInput, LeadUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutReservationsInput
    connect?: LeadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReservationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReservationType
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UnitUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutReservationsInput
    upsert?: UnitUpsertWithoutReservationsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutReservationsInput, UnitUpdateWithoutReservationsInput>, UnitUncheckedUpdateWithoutReservationsInput>
  }

  export type LeadUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<LeadCreateWithoutReservationsInput, LeadUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutReservationsInput
    upsert?: LeadUpsertWithoutReservationsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutReservationsInput, LeadUpdateWithoutReservationsInput>, LeadUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type LeadCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput> | LeadCreateWithoutCustomerInput[] | LeadUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCustomerInput | LeadCreateOrConnectWithoutCustomerInput[]
    createMany?: LeadCreateManyCustomerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput> | LeadCreateWithoutCustomerInput[] | LeadUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCustomerInput | LeadCreateOrConnectWithoutCustomerInput[]
    createMany?: LeadCreateManyCustomerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput> | LeadCreateWithoutCustomerInput[] | LeadUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCustomerInput | LeadCreateOrConnectWithoutCustomerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCustomerInput | LeadUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LeadCreateManyCustomerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCustomerInput | LeadUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCustomerInput | LeadUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput> | LeadCreateWithoutCustomerInput[] | LeadUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCustomerInput | LeadCreateOrConnectWithoutCustomerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCustomerInput | LeadUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LeadCreateManyCustomerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCustomerInput | LeadUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCustomerInput | LeadUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CustomerCreateWithoutLeadsInput, CustomerUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLeadsInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutLeadsInput = {
    create?: XOR<ProjectCreateWithoutLeadsInput, ProjectUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLeadsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutLeadsInput = {
    create?: XOR<ProductTypeCreateWithoutLeadsInput, ProductTypeUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutLeadsInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UnitCreateWithoutLeadsInput, UnitUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeadsInput
    connect?: UnitWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutLeadInput = {
    create?: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput> | ActivityCreateWithoutLeadInput[] | ActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutLeadInput | ActivityCreateOrConnectWithoutLeadInput[]
    createMany?: ActivityCreateManyLeadInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UnitReservationCreateNestedManyWithoutLeadInput = {
    create?: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput> | UnitReservationCreateWithoutLeadInput[] | UnitReservationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutLeadInput | UnitReservationCreateOrConnectWithoutLeadInput[]
    createMany?: UnitReservationCreateManyLeadInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput> | ActivityCreateWithoutLeadInput[] | ActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutLeadInput | ActivityCreateOrConnectWithoutLeadInput[]
    createMany?: ActivityCreateManyLeadInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UnitReservationUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput> | UnitReservationCreateWithoutLeadInput[] | UnitReservationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutLeadInput | UnitReservationCreateOrConnectWithoutLeadInput[]
    createMany?: UnitReservationCreateManyLeadInputEnvelope
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
  }

  export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type EnumSalesStageFieldUpdateOperationsInput = {
    set?: $Enums.SalesStage
  }

  export type CustomerUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CustomerCreateWithoutLeadsInput, CustomerUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLeadsInput
    upsert?: CustomerUpsertWithoutLeadsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLeadsInput, CustomerUpdateWithoutLeadsInput>, CustomerUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    upsert?: UserUpsertWithoutLeadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadsInput, UserUpdateWithoutLeadsInput>, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type ProjectUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<ProjectCreateWithoutLeadsInput, ProjectUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLeadsInput
    upsert?: ProjectUpsertWithoutLeadsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLeadsInput, ProjectUpdateWithoutLeadsInput>, ProjectUncheckedUpdateWithoutLeadsInput>
  }

  export type ProductTypeUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<ProductTypeCreateWithoutLeadsInput, ProductTypeUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutLeadsInput
    upsert?: ProductTypeUpsertWithoutLeadsInput
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutLeadsInput, ProductTypeUpdateWithoutLeadsInput>, ProductTypeUncheckedUpdateWithoutLeadsInput>
  }

  export type UnitUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<UnitCreateWithoutLeadsInput, UnitUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeadsInput
    upsert?: UnitUpsertWithoutLeadsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutLeadsInput, UnitUpdateWithoutLeadsInput>, UnitUncheckedUpdateWithoutLeadsInput>
  }

  export type ActivityUpdateManyWithoutLeadNestedInput = {
    create?: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput> | ActivityCreateWithoutLeadInput[] | ActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutLeadInput | ActivityCreateOrConnectWithoutLeadInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutLeadInput | ActivityUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: ActivityCreateManyLeadInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutLeadInput | ActivityUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutLeadInput | ActivityUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UnitReservationUpdateManyWithoutLeadNestedInput = {
    create?: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput> | UnitReservationCreateWithoutLeadInput[] | UnitReservationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutLeadInput | UnitReservationCreateOrConnectWithoutLeadInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutLeadInput | UnitReservationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: UnitReservationCreateManyLeadInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutLeadInput | UnitReservationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutLeadInput | UnitReservationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput> | ActivityCreateWithoutLeadInput[] | ActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutLeadInput | ActivityCreateOrConnectWithoutLeadInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutLeadInput | ActivityUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: ActivityCreateManyLeadInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutLeadInput | ActivityUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutLeadInput | ActivityUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UnitReservationUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput> | UnitReservationCreateWithoutLeadInput[] | UnitReservationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: UnitReservationCreateOrConnectWithoutLeadInput | UnitReservationCreateOrConnectWithoutLeadInput[]
    upsert?: UnitReservationUpsertWithWhereUniqueWithoutLeadInput | UnitReservationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: UnitReservationCreateManyLeadInputEnvelope
    set?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    disconnect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    delete?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    connect?: UnitReservationWhereUniqueInput | UnitReservationWhereUniqueInput[]
    update?: UnitReservationUpdateWithWhereUniqueWithoutLeadInput | UnitReservationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: UnitReservationUpdateManyWithWhereWithoutLeadInput | UnitReservationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutActivitiesInput
    connect?: LeadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type LeadUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutActivitiesInput
    upsert?: LeadUpsertWithoutActivitiesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutActivitiesInput, LeadUpdateWithoutActivitiesInput>, LeadUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    upsert?: UserUpsertWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyReportsInput, UserUpdateWithoutDailyReportsInput>, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumUnitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitStatus | EnumUnitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UnitStatus[]
    notIn?: $Enums.UnitStatus[]
    not?: NestedEnumUnitStatusFilter<$PrismaModel> | $Enums.UnitStatus
  }

  export type NestedEnumConstructionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConstructionStatus | EnumConstructionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConstructionStatus[]
    notIn?: $Enums.ConstructionStatus[]
    not?: NestedEnumConstructionStatusFilter<$PrismaModel> | $Enums.ConstructionStatus
  }

  export type NestedEnumHouseFacingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseFacing | EnumHouseFacingFieldRefInput<$PrismaModel> | null
    in?: $Enums.HouseFacing[] | null
    notIn?: $Enums.HouseFacing[] | null
    not?: NestedEnumHouseFacingNullableFilter<$PrismaModel> | $Enums.HouseFacing | null
  }

  export type NestedEnumUnitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitStatus | EnumUnitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UnitStatus[]
    notIn?: $Enums.UnitStatus[]
    not?: NestedEnumUnitStatusWithAggregatesFilter<$PrismaModel> | $Enums.UnitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitStatusFilter<$PrismaModel>
    _max?: NestedEnumUnitStatusFilter<$PrismaModel>
  }

  export type NestedEnumConstructionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConstructionStatus | EnumConstructionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConstructionStatus[]
    notIn?: $Enums.ConstructionStatus[]
    not?: NestedEnumConstructionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConstructionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConstructionStatusFilter<$PrismaModel>
    _max?: NestedEnumConstructionStatusFilter<$PrismaModel>
  }

  export type NestedEnumHouseFacingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseFacing | EnumHouseFacingFieldRefInput<$PrismaModel> | null
    in?: $Enums.HouseFacing[] | null
    notIn?: $Enums.HouseFacing[] | null
    not?: NestedEnumHouseFacingNullableWithAggregatesFilter<$PrismaModel> | $Enums.HouseFacing | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHouseFacingNullableFilter<$PrismaModel>
    _max?: NestedEnumHouseFacingNullableFilter<$PrismaModel>
  }

  export type NestedEnumReservationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[]
    notIn?: $Enums.ReservationType[]
    not?: NestedEnumReservationTypeFilter<$PrismaModel> | $Enums.ReservationType
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[]
    notIn?: $Enums.ReservationType[]
    not?: NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReservationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationTypeFilter<$PrismaModel>
    _max?: NestedEnumReservationTypeFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[]
    notIn?: $Enums.LeadSource[]
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumSalesStageFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStage | EnumSalesStageFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStage[]
    notIn?: $Enums.SalesStage[]
    not?: NestedEnumSalesStageFilter<$PrismaModel> | $Enums.SalesStage
  }

  export type NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[]
    notIn?: $Enums.LeadSource[]
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumSalesStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStage | EnumSalesStageFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStage[]
    notIn?: $Enums.SalesStage[]
    not?: NestedEnumSalesStageWithAggregatesFilter<$PrismaModel> | $Enums.SalesStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalesStageFilter<$PrismaModel>
    _max?: NestedEnumSalesStageFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[]
    notIn?: $Enums.ActivityType[]
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[]
    notIn?: $Enums.ActivityType[]
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LeadCreateWithoutMarketingInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutMarketingInput = {
    id?: string
    customerId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutMarketingInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput>
  }

  export type LeadCreateManyMarketingInputEnvelope = {
    data: LeadCreateManyMarketingInput | LeadCreateManyMarketingInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutCreatedByInput = {
    id?: string
    leadId: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput>
  }

  export type ActivityCreateManyCreatedByInputEnvelope = {
    data: ActivityCreateManyCreatedByInput | ActivityCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportCreateWithoutUserInput = {
    id?: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUncheckedCreateWithoutUserInput = {
    id?: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportCreateOrConnectWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportCreateManyUserInputEnvelope = {
    data: DailyReportCreateManyUserInput | DailyReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UnitReservationCreateWithoutCreatedByInput = {
    id?: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutReservationsInput
    lead: LeadCreateNestedOneWithoutReservationsInput
  }

  export type UnitReservationUncheckedCreateWithoutCreatedByInput = {
    id?: string
    unitId: string
    leadId: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationCreateOrConnectWithoutCreatedByInput = {
    where: UnitReservationWhereUniqueInput
    create: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput>
  }

  export type UnitReservationCreateManyCreatedByInputEnvelope = {
    data: UnitReservationCreateManyCreatedByInput | UnitReservationCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutMarketingInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutMarketingInput, LeadUncheckedUpdateWithoutMarketingInput>
    create: XOR<LeadCreateWithoutMarketingInput, LeadUncheckedCreateWithoutMarketingInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutMarketingInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutMarketingInput, LeadUncheckedUpdateWithoutMarketingInput>
  }

  export type LeadUpdateManyWithWhereWithoutMarketingInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutMarketingInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    customerId?: StringFilter<"Lead"> | string
    marketingId?: StringFilter<"Lead"> | string
    projectId?: StringFilter<"Lead"> | string
    productTypeId?: StringFilter<"Lead"> | string
    unitId?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    stage?: EnumSalesStageFilter<"Lead"> | $Enums.SalesStage
    firstVisitAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUpAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutCreatedByInput, ActivityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutCreatedByInput, ActivityUncheckedUpdateWithoutCreatedByInput>
  }

  export type ActivityUpdateManyWithWhereWithoutCreatedByInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    leadId?: StringFilter<"Activity"> | string
    createdById?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type DailyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutUserInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    userId?: StringFilter<"DailyReport"> | string
    reportDate?: DateTimeFilter<"DailyReport"> | Date | string
    notes?: StringNullableFilter<"DailyReport"> | string | null
    submittedAt?: DateTimeNullableFilter<"DailyReport"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    oldData?: JsonNullableFilter<"AuditLog">
    newData?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UnitReservationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UnitReservationWhereUniqueInput
    update: XOR<UnitReservationUpdateWithoutCreatedByInput, UnitReservationUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UnitReservationCreateWithoutCreatedByInput, UnitReservationUncheckedCreateWithoutCreatedByInput>
  }

  export type UnitReservationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UnitReservationWhereUniqueInput
    data: XOR<UnitReservationUpdateWithoutCreatedByInput, UnitReservationUncheckedUpdateWithoutCreatedByInput>
  }

  export type UnitReservationUpdateManyWithWhereWithoutCreatedByInput = {
    where: UnitReservationScalarWhereInput
    data: XOR<UnitReservationUpdateManyMutationInput, UnitReservationUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UnitReservationScalarWhereInput = {
    AND?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
    OR?: UnitReservationScalarWhereInput[]
    NOT?: UnitReservationScalarWhereInput | UnitReservationScalarWhereInput[]
    id?: StringFilter<"UnitReservation"> | string
    unitId?: StringFilter<"UnitReservation"> | string
    leadId?: StringFilter<"UnitReservation"> | string
    createdById?: StringFilter<"UnitReservation"> | string
    type?: EnumReservationTypeFilter<"UnitReservation"> | $Enums.ReservationType
    status?: EnumReservationStatusFilter<"UnitReservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"UnitReservation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UnitReservation"> | Date | string | null
    notes?: StringNullableFilter<"UnitReservation"> | string | null
    createdAt?: DateTimeFilter<"UnitReservation"> | Date | string
    updatedAt?: DateTimeFilter<"UnitReservation"> | Date | string
  }

  export type BlockCreateWithoutProjectInput = {
    id?: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockCreateOrConnectWithoutProjectInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput>
  }

  export type BlockCreateManyProjectInputEnvelope = {
    data: BlockCreateManyProjectInput | BlockCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutProjectInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutProjectInput = {
    id?: string
    customerId: string
    marketingId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutProjectInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput>
  }

  export type LeadCreateManyProjectInputEnvelope = {
    data: LeadCreateManyProjectInput | LeadCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BlockUpsertWithWhereUniqueWithoutProjectInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutProjectInput, BlockUncheckedUpdateWithoutProjectInput>
    create: XOR<BlockCreateWithoutProjectInput, BlockUncheckedCreateWithoutProjectInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutProjectInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutProjectInput, BlockUncheckedUpdateWithoutProjectInput>
  }

  export type BlockUpdateManyWithWhereWithoutProjectInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutProjectInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    projectId?: StringFilter<"Block"> | string
    name?: StringFilter<"Block"> | string
    code?: StringFilter<"Block"> | string
    sortOrder?: IntFilter<"Block"> | number
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type LeadUpsertWithWhereUniqueWithoutProjectInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutProjectInput, LeadUncheckedUpdateWithoutProjectInput>
    create: XOR<LeadCreateWithoutProjectInput, LeadUncheckedCreateWithoutProjectInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutProjectInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutProjectInput, LeadUncheckedUpdateWithoutProjectInput>
  }

  export type LeadUpdateManyWithWhereWithoutProjectInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutBlocksInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBlocksInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBlocksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBlocksInput, ProjectUncheckedCreateWithoutBlocksInput>
  }

  export type UnitCreateWithoutBlockInput = {
    id?: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productType: ProductTypeCreateNestedOneWithoutUnitsInput
    leads?: LeadCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutBlockInput = {
    id?: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutBlockInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput>
  }

  export type UnitCreateManyBlockInputEnvelope = {
    data: UnitCreateManyBlockInput | UnitCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutBlocksInput = {
    update: XOR<ProjectUpdateWithoutBlocksInput, ProjectUncheckedUpdateWithoutBlocksInput>
    create: XOR<ProjectCreateWithoutBlocksInput, ProjectUncheckedCreateWithoutBlocksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBlocksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBlocksInput, ProjectUncheckedUpdateWithoutBlocksInput>
  }

  export type ProjectUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UnitUpsertWithWhereUniqueWithoutBlockInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutBlockInput, UnitUncheckedUpdateWithoutBlockInput>
    create: XOR<UnitCreateWithoutBlockInput, UnitUncheckedCreateWithoutBlockInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutBlockInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutBlockInput, UnitUncheckedUpdateWithoutBlockInput>
  }

  export type UnitUpdateManyWithWhereWithoutBlockInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutBlockInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    blockId?: StringFilter<"Unit"> | string
    productTypeId?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    code?: StringFilter<"Unit"> | string
    landArea?: IntNullableFilter<"Unit"> | number | null
    buildingArea?: IntNullableFilter<"Unit"> | number | null
    price?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFilter<"Unit"> | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFilter<"Unit"> | $Enums.ConstructionStatus
    facing?: EnumHouseFacingNullableFilter<"Unit"> | $Enums.HouseFacing | null
    description?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type ProductTypeCreateWithoutCategoryInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutProductTypeInput
    leads?: LeadCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutProductTypeInput
    leads?: LeadUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeCreateOrConnectWithoutCategoryInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput>
  }

  export type ProductTypeCreateManyCategoryInputEnvelope = {
    data: ProductTypeCreateManyCategoryInput | ProductTypeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductTypeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductTypeWhereUniqueInput
    update: XOR<ProductTypeUpdateWithoutCategoryInput, ProductTypeUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductTypeCreateWithoutCategoryInput, ProductTypeUncheckedCreateWithoutCategoryInput>
  }

  export type ProductTypeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductTypeWhereUniqueInput
    data: XOR<ProductTypeUpdateWithoutCategoryInput, ProductTypeUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductTypeUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductTypeScalarWhereInput
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductTypeScalarWhereInput = {
    AND?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
    OR?: ProductTypeScalarWhereInput[]
    NOT?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
    id?: StringFilter<"ProductType"> | string
    categoryId?: StringFilter<"ProductType"> | string
    name?: StringFilter<"ProductType"> | string
    code?: StringFilter<"ProductType"> | string
    landArea?: IntNullableFilter<"ProductType"> | number | null
    buildingArea?: IntNullableFilter<"ProductType"> | number | null
    bedrooms?: IntNullableFilter<"ProductType"> | number | null
    bathrooms?: IntNullableFilter<"ProductType"> | number | null
    ceilingHeight?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: StringNullableFilter<"ProductType"> | string | null
    roofMaterial?: StringNullableFilter<"ProductType"> | string | null
    floorMaterial?: StringNullableFilter<"ProductType"> | string | null
    doorMaterial?: StringNullableFilter<"ProductType"> | string | null
    windowMaterial?: StringNullableFilter<"ProductType"> | string | null
    electricity?: StringNullableFilter<"ProductType"> | string | null
    waterSource?: StringNullableFilter<"ProductType"> | string | null
    basePrice?: DecimalNullableFilter<"ProductType"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"ProductType"> | string | null
    isActive?: BoolFilter<"ProductType"> | boolean
    createdAt?: DateTimeFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeFilter<"ProductType"> | Date | string
  }

  export type ProductCategoryCreateWithoutProductTypesInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutProductTypesInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutProductTypesInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductTypesInput, ProductCategoryUncheckedCreateWithoutProductTypesInput>
  }

  export type UnitCreateWithoutProductTypeInput = {
    id?: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutUnitsInput
    leads?: LeadCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutProductTypeInput = {
    id?: string
    blockId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutUnitInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutProductTypeInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput>
  }

  export type UnitCreateManyProductTypeInputEnvelope = {
    data: UnitCreateManyProductTypeInput | UnitCreateManyProductTypeInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutProductTypeInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutProductTypeInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutProductTypeInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput>
  }

  export type LeadCreateManyProductTypeInputEnvelope = {
    data: LeadCreateManyProductTypeInput | LeadCreateManyProductTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryUpsertWithoutProductTypesInput = {
    update: XOR<ProductCategoryUpdateWithoutProductTypesInput, ProductCategoryUncheckedUpdateWithoutProductTypesInput>
    create: XOR<ProductCategoryCreateWithoutProductTypesInput, ProductCategoryUncheckedCreateWithoutProductTypesInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductTypesInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductTypesInput, ProductCategoryUncheckedUpdateWithoutProductTypesInput>
  }

  export type ProductCategoryUpdateWithoutProductTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutProductTypeInput, UnitUncheckedUpdateWithoutProductTypeInput>
    create: XOR<UnitCreateWithoutProductTypeInput, UnitUncheckedCreateWithoutProductTypeInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutProductTypeInput, UnitUncheckedUpdateWithoutProductTypeInput>
  }

  export type UnitUpdateManyWithWhereWithoutProductTypeInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type LeadUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutProductTypeInput, LeadUncheckedUpdateWithoutProductTypeInput>
    create: XOR<LeadCreateWithoutProductTypeInput, LeadUncheckedCreateWithoutProductTypeInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutProductTypeInput, LeadUncheckedUpdateWithoutProductTypeInput>
  }

  export type LeadUpdateManyWithWhereWithoutProductTypeInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type BlockCreateWithoutUnitsInput = {
    id?: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateWithoutUnitsInput = {
    id?: string
    projectId: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutUnitsInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutUnitsInput, BlockUncheckedCreateWithoutUnitsInput>
  }

  export type ProductTypeCreateWithoutUnitsInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductTypesInput
    leads?: LeadCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateWithoutUnitsInput = {
    id?: string
    categoryId: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeCreateOrConnectWithoutUnitsInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutUnitsInput, ProductTypeUncheckedCreateWithoutUnitsInput>
  }

  export type LeadCreateWithoutUnitInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutUnitInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutUnitInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput>
  }

  export type LeadCreateManyUnitInputEnvelope = {
    data: LeadCreateManyUnitInput | LeadCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type UnitReservationCreateWithoutUnitInput = {
    id?: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutReservationsInput
    createdBy: UserCreateNestedOneWithoutReservationsInput
  }

  export type UnitReservationUncheckedCreateWithoutUnitInput = {
    id?: string
    leadId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationCreateOrConnectWithoutUnitInput = {
    where: UnitReservationWhereUniqueInput
    create: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput>
  }

  export type UnitReservationCreateManyUnitInputEnvelope = {
    data: UnitReservationCreateManyUnitInput | UnitReservationCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type BlockUpsertWithoutUnitsInput = {
    update: XOR<BlockUpdateWithoutUnitsInput, BlockUncheckedUpdateWithoutUnitsInput>
    create: XOR<BlockCreateWithoutUnitsInput, BlockUncheckedCreateWithoutUnitsInput>
    where?: BlockWhereInput
  }

  export type BlockUpdateToOneWithWhereWithoutUnitsInput = {
    where?: BlockWhereInput
    data: XOR<BlockUpdateWithoutUnitsInput, BlockUncheckedUpdateWithoutUnitsInput>
  }

  export type BlockUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeUpsertWithoutUnitsInput = {
    update: XOR<ProductTypeUpdateWithoutUnitsInput, ProductTypeUncheckedUpdateWithoutUnitsInput>
    create: XOR<ProductTypeCreateWithoutUnitsInput, ProductTypeUncheckedCreateWithoutUnitsInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutUnitsInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutUnitsInput, ProductTypeUncheckedUpdateWithoutUnitsInput>
  }

  export type ProductTypeUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductTypesNestedInput
    leads?: LeadUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutUnitInput, LeadUncheckedUpdateWithoutUnitInput>
    create: XOR<LeadCreateWithoutUnitInput, LeadUncheckedCreateWithoutUnitInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutUnitInput, LeadUncheckedUpdateWithoutUnitInput>
  }

  export type LeadUpdateManyWithWhereWithoutUnitInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitReservationUpsertWithWhereUniqueWithoutUnitInput = {
    where: UnitReservationWhereUniqueInput
    update: XOR<UnitReservationUpdateWithoutUnitInput, UnitReservationUncheckedUpdateWithoutUnitInput>
    create: XOR<UnitReservationCreateWithoutUnitInput, UnitReservationUncheckedCreateWithoutUnitInput>
  }

  export type UnitReservationUpdateWithWhereUniqueWithoutUnitInput = {
    where: UnitReservationWhereUniqueInput
    data: XOR<UnitReservationUpdateWithoutUnitInput, UnitReservationUncheckedUpdateWithoutUnitInput>
  }

  export type UnitReservationUpdateManyWithWhereWithoutUnitInput = {
    where: UnitReservationScalarWhereInput
    data: XOR<UnitReservationUpdateManyMutationInput, UnitReservationUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitCreateWithoutReservationsInput = {
    id?: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutUnitsInput
    productType: ProductTypeCreateNestedOneWithoutUnitsInput
    leads?: LeadCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutReservationsInput = {
    id?: string
    blockId: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutReservationsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
  }

  export type LeadCreateWithoutReservationsInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutReservationsInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutReservationsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutReservationsInput, LeadUncheckedCreateWithoutReservationsInput>
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutMarketingInput
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutMarketingInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type UnitUpsertWithoutReservationsInput = {
    update: XOR<UnitUpdateWithoutReservationsInput, UnitUncheckedUpdateWithoutReservationsInput>
    create: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutReservationsInput, UnitUncheckedUpdateWithoutReservationsInput>
  }

  export type UnitUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutUnitsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutUnitsNestedInput
    leads?: LeadUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type LeadUpsertWithoutReservationsInput = {
    update: XOR<LeadUpdateWithoutReservationsInput, LeadUncheckedUpdateWithoutReservationsInput>
    create: XOR<LeadCreateWithoutReservationsInput, LeadUncheckedCreateWithoutReservationsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutReservationsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutReservationsInput, LeadUncheckedUpdateWithoutReservationsInput>
  }

  export type LeadUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeadCreateWithoutCustomerInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    activities?: ActivityCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCustomerInput = {
    id?: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutLeadInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCustomerInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput>
  }

  export type LeadCreateManyCustomerInputEnvelope = {
    data: LeadCreateManyCustomerInput | LeadCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutCustomerInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCustomerInput, LeadUncheckedUpdateWithoutCustomerInput>
    create: XOR<LeadCreateWithoutCustomerInput, LeadUncheckedCreateWithoutCustomerInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCustomerInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCustomerInput, LeadUncheckedUpdateWithoutCustomerInput>
  }

  export type LeadUpdateManyWithWhereWithoutCustomerInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutLeadsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    birthDate?: Date | string | null
    nik?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    birthDate?: Date | string | null
    nik?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutLeadsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLeadsInput, CustomerUncheckedCreateWithoutLeadsInput>
  }

  export type UserCreateWithoutLeadsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    reservations?: UnitReservationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type ProjectCreateWithoutLeadsInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    code: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLeadsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLeadsInput, ProjectUncheckedCreateWithoutLeadsInput>
  }

  export type ProductTypeCreateWithoutLeadsInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductTypesInput
    units?: UnitCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateWithoutLeadsInput = {
    id?: string
    categoryId: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeCreateOrConnectWithoutLeadsInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutLeadsInput, ProductTypeUncheckedCreateWithoutLeadsInput>
  }

  export type UnitCreateWithoutLeadsInput = {
    id?: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutUnitsInput
    productType: ProductTypeCreateNestedOneWithoutUnitsInput
    reservations?: UnitReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutLeadsInput = {
    id?: string
    blockId: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutLeadsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutLeadsInput, UnitUncheckedCreateWithoutLeadsInput>
  }

  export type ActivityCreateWithoutLeadInput = {
    id?: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutLeadInput = {
    id?: string
    createdById: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutLeadInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput>
  }

  export type ActivityCreateManyLeadInputEnvelope = {
    data: ActivityCreateManyLeadInput | ActivityCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type UnitReservationCreateWithoutLeadInput = {
    id?: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutReservationsInput
    createdBy: UserCreateNestedOneWithoutReservationsInput
  }

  export type UnitReservationUncheckedCreateWithoutLeadInput = {
    id?: string
    unitId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationCreateOrConnectWithoutLeadInput = {
    where: UnitReservationWhereUniqueInput
    create: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput>
  }

  export type UnitReservationCreateManyLeadInputEnvelope = {
    data: UnitReservationCreateManyLeadInput | UnitReservationCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutLeadsInput = {
    update: XOR<CustomerUpdateWithoutLeadsInput, CustomerUncheckedUpdateWithoutLeadsInput>
    create: XOR<CustomerCreateWithoutLeadsInput, CustomerUncheckedCreateWithoutLeadsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLeadsInput, CustomerUncheckedUpdateWithoutLeadsInput>
  }

  export type CustomerUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLeadsInput = {
    update: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProjectUpsertWithoutLeadsInput = {
    update: XOR<ProjectUpdateWithoutLeadsInput, ProjectUncheckedUpdateWithoutLeadsInput>
    create: XOR<ProjectCreateWithoutLeadsInput, ProjectUncheckedCreateWithoutLeadsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLeadsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLeadsInput, ProjectUncheckedUpdateWithoutLeadsInput>
  }

  export type ProjectUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProductTypeUpsertWithoutLeadsInput = {
    update: XOR<ProductTypeUpdateWithoutLeadsInput, ProductTypeUncheckedUpdateWithoutLeadsInput>
    create: XOR<ProductTypeCreateWithoutLeadsInput, ProductTypeUncheckedCreateWithoutLeadsInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutLeadsInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutLeadsInput, ProductTypeUncheckedUpdateWithoutLeadsInput>
  }

  export type ProductTypeUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductTypesNestedInput
    units?: UnitUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type UnitUpsertWithoutLeadsInput = {
    update: XOR<UnitUpdateWithoutLeadsInput, UnitUncheckedUpdateWithoutLeadsInput>
    create: XOR<UnitCreateWithoutLeadsInput, UnitUncheckedCreateWithoutLeadsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeadsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutLeadsInput, UnitUncheckedUpdateWithoutLeadsInput>
  }

  export type UnitUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutUnitsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutUnitsNestedInput
    reservations?: UnitReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: UnitReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutLeadInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutLeadInput, ActivityUncheckedUpdateWithoutLeadInput>
    create: XOR<ActivityCreateWithoutLeadInput, ActivityUncheckedCreateWithoutLeadInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutLeadInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutLeadInput, ActivityUncheckedUpdateWithoutLeadInput>
  }

  export type ActivityUpdateManyWithWhereWithoutLeadInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutLeadInput>
  }

  export type UnitReservationUpsertWithWhereUniqueWithoutLeadInput = {
    where: UnitReservationWhereUniqueInput
    update: XOR<UnitReservationUpdateWithoutLeadInput, UnitReservationUncheckedUpdateWithoutLeadInput>
    create: XOR<UnitReservationCreateWithoutLeadInput, UnitReservationUncheckedCreateWithoutLeadInput>
  }

  export type UnitReservationUpdateWithWhereUniqueWithoutLeadInput = {
    where: UnitReservationWhereUniqueInput
    data: XOR<UnitReservationUpdateWithoutLeadInput, UnitReservationUncheckedUpdateWithoutLeadInput>
  }

  export type UnitReservationUpdateManyWithWhereWithoutLeadInput = {
    where: UnitReservationScalarWhereInput
    data: XOR<UnitReservationUpdateManyMutationInput, UnitReservationUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadCreateWithoutActivitiesInput = {
    id?: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLeadsInput
    marketing: UserCreateNestedOneWithoutLeadsInput
    project: ProjectCreateNestedOneWithoutLeadsInput
    productType: ProductTypeCreateNestedOneWithoutLeadsInput
    unit?: UnitCreateNestedOneWithoutLeadsInput
    reservations?: UnitReservationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutActivitiesInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutActivitiesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutMarketingInput
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    reservations?: UnitReservationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutMarketingInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type LeadUpsertWithoutActivitiesInput = {
    update: XOR<LeadUpdateWithoutActivitiesInput, LeadUncheckedUpdateWithoutActivitiesInput>
    create: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutActivitiesInput, LeadUncheckedUpdateWithoutActivitiesInput>
  }

  export type LeadUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutMarketingNestedInput
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutMarketingNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutDailyReportsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutMarketingInput
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    reservations?: UnitReservationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDailyReportsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutMarketingInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDailyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
  }

  export type UserUpsertWithoutDailyReportsInput = {
    update: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutMarketingInput
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    reservations?: UnitReservationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    username: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutMarketingInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    reservations?: UnitReservationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutMarketingNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type LeadCreateManyMarketingInput = {
    id?: string
    customerId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateManyCreatedByInput = {
    id?: string
    leadId: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type DailyReportCreateManyUserInput = {
    id?: string
    reportDate: Date | string
    notes?: string | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    entity: string
    entityId: string
    action: $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnitReservationCreateManyCreatedByInput = {
    id?: string
    unitId: string
    leadId: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutReservationsNestedInput
    lead?: LeadUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type UnitReservationUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyProjectInput = {
    id?: string
    name: string
    code: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateManyProjectInput = {
    id?: string
    customerId: string
    marketingId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyBlockInput = {
    id?: string
    productTypeId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productType?: ProductTypeUpdateOneRequiredWithoutUnitsNestedInput
    leads?: LeadUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeCreateManyCategoryInput = {
    id?: string
    name: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    ceilingHeight?: Decimal | DecimalJsLike | number | string | null
    wallMaterial?: string | null
    roofMaterial?: string | null
    floorMaterial?: string | null
    doorMaterial?: string | null
    windowMaterial?: string | null
    electricity?: string | null
    waterSource?: string | null
    basePrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTypeUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutProductTypeNestedInput
    leads?: LeadUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutProductTypeNestedInput
    leads?: LeadUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    ceilingHeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wallMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    roofMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    floorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    doorMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    windowMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    electricity?: NullableStringFieldUpdateOperationsInput | string | null
    waterSource?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyProductTypeInput = {
    id?: string
    blockId: string
    number: string
    code: string
    landArea?: number | null
    buildingArea?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.UnitStatus
    constructionStatus?: $Enums.ConstructionStatus
    facing?: $Enums.HouseFacing | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateManyProductTypeInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutUnitsNestedInput
    leads?: LeadUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutUnitNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    landArea?: NullableIntFieldUpdateOperationsInput | number | null
    buildingArea?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumUnitStatusFieldUpdateOperationsInput | $Enums.UnitStatus
    constructionStatus?: EnumConstructionStatusFieldUpdateOperationsInput | $Enums.ConstructionStatus
    facing?: NullableEnumHouseFacingFieldUpdateOperationsInput | $Enums.HouseFacing | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutProductTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyUnitInput = {
    id?: string
    customerId: string
    marketingId: string
    projectId: string
    productTypeId: string
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitReservationCreateManyUnitInput = {
    id?: string
    leadId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLeadsNestedInput
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutReservationsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type UnitReservationUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyCustomerInput = {
    id?: string
    marketingId: string
    projectId: string
    productTypeId: string
    unitId?: string | null
    source: $Enums.LeadSource
    status?: $Enums.LeadStatus
    stage?: $Enums.SalesStage
    firstVisitAt?: Date | string | null
    nextFollowUpAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketing?: UserUpdateOneRequiredWithoutLeadsNestedInput
    project?: ProjectUpdateOneRequiredWithoutLeadsNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutLeadsNestedInput
    unit?: UnitUpdateOneWithoutLeadsNestedInput
    activities?: ActivityUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutLeadNestedInput
    reservations?: UnitReservationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketingId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    stage?: EnumSalesStageFieldUpdateOperationsInput | $Enums.SalesStage
    firstVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyLeadInput = {
    id?: string
    createdById: string
    type: $Enums.ActivityType
    activityDate: Date | string
    description: string
    createdAt?: Date | string
  }

  export type UnitReservationCreateManyLeadInput = {
    id?: string
    unitId: string
    createdById: string
    type?: $Enums.ReservationType
    status?: $Enums.ReservationStatus
    startAt?: Date | string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutReservationsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type UnitReservationUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitReservationUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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