# 题单（中等）

- [x] [2・获取函数返回类型](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.zh-CN.md)
- [x] [3・实现 Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md)
- [x] [8・Readonly 2](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.zh-CN.md)
- [x] [9・深度 Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md)
- [x] [10・元组转合集](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md)

- [x] [12・可串联构造器](https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.zh-CN.md)
- [x] [15・最后一个元素](https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.zh-CN.md)
- [x] [16・出堆](https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md)
- [x] [20・Promise.all](https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.zh-CN.md)
- [x] [62・Type Lookup](https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.zh-CN.md)

# 解答

## 2・获取函数返回类型

- [接受挑战](https://tsch.js.org/2/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBBMELQUO3Bg15UL+KgHU0Cvxg9tUN4+ho9UnjhNKICMBPCAQQDsAXACwHs7qAxAVwgAoABAIaMAZlwCUEAMSBaOUCS3tICWdEQFMATtPJdFAGwZxlRIlNMRAGRmA7t2NRAsHKB-eUAUrhAAGAJVUMu6ugBVKAA6qLhCAedqADc4Q-kEAygDG6ooBDBCAIW6uHl4+0aoAPL4AfCGA2zb4gEAMNhCA0fKAQZqAWP+VLk0MAM5EcWwtKSJ0EAC8fABuAFwQ5CwsuqrCkn0FEADeRFCKIkPiy1AQ6p7evQCMm6q6LaqbUDtZvdBEAL6VDIGqEIL9EACylJl7ObmPQSw1j15sBgBBACl6gArjQA-2oAvxQgACJ9hAAD4wBFEJouSrzQAU6hAAOKKZhccgQQBQcoBT80A0O51JgMBgBFrDUGtOJMAB0ACsWhyWOoAObAaDAABeTDgAGEAHJgEDAMBgUAQAD6avVGvVEEABvKpQDHcoBAD1VmpNKog8sV-2en2+2Se+XmA18EFUAA8GKo6AATFp8Dn+wSC5nCSgAbQAurN5so1Jo3BAAPwQNyjOiqQYaRXK00miCAaVtAKvRjiqxpzWotigAtgF+SkrYsIABRACOXEEugANE3XUE4ilbhAROoWJWIAByfhWuDs9tTOgC1QtYBcBh6Fpjy1PCBxQSnX0DUNERs91R93Ittu6XJdRLzrs23Z2oK5XhRiA35QCgrfjtHk9ni921yfZoAAZnvL5Hz8e1X36eYQNA78Cl-KBj17Bhz1bIDJRHAIpldAB5cguVPBgINtaDn1guYIBw6t8KIki+yQlDu3QzDL1yAAFYdK0UU5cnGSZpjoZCPkgq5fmo+YeJHfi8iEqZhCQ5C-3YwCr2k8cRAmMdyKgqS3y0scdJYMcWLU0iOKA5E0WgfTJPtK1AUHUSf0sgCsKvWyYAcn4nKeFyen2Czw03IJaNwhjiNIt4ligQRRlDECuxM3SwqgchA1GMcmGOXQzKIAIdkGV9Uy4StyEze4wA6Ogulct5eBGMYJiUug30GRMIGRUYbjqhrgqalrFJErsAHdRhDTrut6mAsxAUsyzNQBoOUAADlAFNrJay3NBVQCIeZADAlQBquV1QBjyMAFW86QZJkWWANlOR5PlBWFYBhBacaNDFCUZQOiAaUu67GWZVkWnZbleX5IURRaSYV0UTo-sAF7NACxNKwgdu0HwaeqHvqlWULTAIA)

不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。

例如：

```ts
const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

正确解答：

```typescript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
```

注意参数数组~

## 3・实现 Omit

- [接受挑战](https://tsch.js.org/3/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBDMELQUHnagG5wgeQLYEsAul5yFH4BGAnhAIIB2OAFgPbUUBiArhABQACAhrQDM2ASggBiQLRygSW9xbalibiSbLABsccLNXz4xeiIAyMwHduOqIFg5QP7ygClcIAA0y5bSVABUyABwCmAZQDGAJyx3HAhAELc7BxwAHhcAGggAaQA+J0Btm0Bo9UAgBlMI7BwnQCx5QGwlQC+9QAA5QCo5QEB3QFNXOwSnCUB1bUBW63DbFydAT+1AQxjsqHxAaPlAIM1ALH+c20mcAGd8LRxPfwFeX08IFwYAEwYIAG98KBxcVU8ALghpnEDqAHMDiE3PaYCgo6Zzy+u7qChfBgx3CcFptziQGAwTvx8ABfHI4DxrDbbAAK-k8ADcsJ4AO4QAC8EAAsmRIjEtgx4gByR7PQLBBTUSkQAA+EEpRxwJ0pSRyf2olwgOHJ5yRDFRGKxuIJ+x+ED+AKBnhBEGWqmmnliMPwk1sOSSEEAFOoQADiuDobBIEEAUHKAU-NANDuozoOBw7mmp2AwBmvjoADoAFbTH0Mfw3YDQYAALzocAAwgA5MAgYBgFOgCAAfUzWezWYggAN5UKAY7lAIAeGZz5fTECTKfhXiJJLyMXiCQgngAHgtqJtphAANaeMgMATrfXS-AAbQSA4gWj7A6H6wgvB7U4o7c73cSEAA-BBqBjFhBzquALoiycDk9gWFgNMV8sQQDStoBV6KsgzL99z1awAODIVray7BAACiACObC8Ko8TAW2Xi+CE0Iqv4-xstwAFwN6kEnLcTzAGwRxqpSYAAXKy5PPiEDjvgMFwdEYEQaoUQ0Z48FKgAjPExKkqKVI0i89JMNySRJJqUDMfBTHgZBTGwSxwIAEycQ2uBktsvFPPxbyMiybLyoCnjAkJIlgFet7ABAaHTHA7a0dZ-jIf4xEIq29nBhRXGNjxbJ8XSWlMqylJaOikFYJs3IpvMizLKs6zkns+AcicHxXFo3wPBpvkMslXz4HpirKmCEKeFCN6RUsKxrOJwJsfFhzHGcFwpbcuX-PpwKguCkLaKVtBRRVIGyaxmzybVgr1dlqXXqmIAfp+laANByZSAKbWs2flWyagPg+qAGBKgDVcgWgDHkYAKt6Os6rrup6zy+gGQYhmGwD8NM2KLJG0bxltED2sdp0um6HpetdgbBqG4bTBC+EMrMUD6oAL2aAFiaxg-ed-1Xf6QN3VGsYJtWYBAA)

不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。

`Omit` 会创建一个省略 `K` 中字段的 `T` 对象。

例如：

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

正确解答：

```typescript
type MyOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}
```

乍一看很绕，其实搞懂 keyof 和 in 就明白了。

## 8・Readonly 2

- [接受挑战](https://tsch.js.org/8/play/zh-CN)
- [我的解答]()

实现一个通用 `MyReadonly2<T, K>`，它带有两种类型的参数 `T`和 `K`。

`K`指定应设置为 Readonly 的 `T`的属性集。如果未提供 `K`，则应使所有属性都变为只读，就像普通的 `Readonly<T>`一样。

例如

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
```

正确解答

```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in K]: T[Key]
} & Omit<T, K>
```

结合上面的 [实现 Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md) 和简单题中的 [实现 Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md) 可得出该题的答案。

## 9・深度 Readonly ⭐

- [接受挑战](https://tsch.js.org/9/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCcELQUI+2gyvQgJQKYEMAmB7AOwBsBPSeOSq8gIxIgEECAXAC0PoDEBXCACgACWFgDNuASggBiQLRygSW9pAJ2z5i9KXhoArDAGNmcANYYSAZ2k4MGAA7lyUhxEAZGYDu3O1AB8EQIyugdhjAMtaAV4GAFUqA3-6Ai9GAMP+ARNaAc-EQAApoEICcpoDb8RGAFLGA84mAQAzuEIB52oANzoAAcoBUcoBYCYAUroAhbgAGACJW1pi4hKQAPAAqHvWRgMHagGA6gJ-agIYxtYDz1uWAQ8qADqaAU8qAboqACtrjgEgJgEr6gAzqgH3RgFxygFfKgN-R+VDkgBUGgPfKgKdygOIKu4AU6oAm1oCIxoAYRjKAiEaAN3KAo3KAEE1AGAu41yc0AI36RQC-inNIoBvHzkgF+EwAHpoAAdMAwAGARTDcoAxeUA9GaRC6AWblAGyOt0qgHH4wBhkYA1t0AvDpXQC-AYAsTVqgFg5QAwKoAJC0A0fKAU3MPoFAI+6Zwg5B5gCDNAr1GXMUzkZgkawYCAADQgAF4IABvMVQKAADwAXDq9fqoFgTQBGcjmmgmgDkrAAlg7bRAAL7ukiO1gmN1QL3nKCK5UQACiBuV+gwOE1pvdynaaggxoT5qgSdUpAglogNozECzHXo9ogTtd7qD+uLKZ95b9JAdZurCqVKu6eHw8eaNja2ZInVVXmAwAgpnY3CIcZoKtMWAAtiqsOZ6pHo8xY-VyDLt8GIF5HhAAOLOtjcGgQQBQcoBT80A0O6ALH-WMxmNZTEbR3LdKwAHRaUw-ngigAObANAwAAF6sHAADCAByYAgMAYAoaAEAAPqYVh2FYRAgAG8rUgDHcoAgB4YTh5HoRASEoaGKq9q0Kglj0EAYAam4EDg5gAPLaHozBeFq2rkLWOYANoANImBAzoEBAxgkHgIgQN0AC6JrdBJJgqSxbEYBx5iYLoQE4J0wgkAANLmBAkB47oAPzKZpJDaax7GcRAPAEPozqEO6UAORpknOX5EAmvR-ZMYFWm2ea6lOSpYBemAaEUeRECANK2gCr0dUPJkaluHUc6C7WEBzAQLRprhgAjtwWBEJZ658Z6EAiIoeALuWAi0XA351UQenARgpjANwzDOkQphumAFW6CuQ3xqJ5CNfonTVbVRCdOFjFqEOHgNVGfGxh4e1gAl03tmq8ZCRaJp8JIGpeAATI9tAmqYzCKDJwHkLoJrXfqOAmjQeB4P1wjuhgf0hcBUOFlArCw3DUDOiaH3cBgIXmlojrvZ9BDAQGcPVoWhi+hgRBEHghPmsT+pECai1IxWDrmZjOps1AC4M06-oJUjHqs4WfP6tWXpehVy2bnGgnCdtOZ5ndmpPS9mZy6Wb0fV9svJjmv3s+aIn0IDEDA6D2AEImassYjBtWzD+tw4bEAIw7SNOyj5WKOjHNFlb2PlrjX3UxmtO2zr9Ckw25OU8HgYhU79O++HECM3DzOC3D-1u1bXNJwOKc802wuFgLIXF565BiyhqEgHl+WUYA0HKlIAptZ1-lVHIaA5BeIAYEqANVyBGAMeRgAq3k+L5vh+wBfr+-6ASBYHAMIpgAO4YIokHQfB3cQPeI9j6+76fqY35-gBQGgeBpig6NPkEPKngQIAL2bMq4+8T0fJ+z+fG+wQh1FgEAA)

实现一个通用的 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。
您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

例如

```typescript
type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```

正确解答

```typescript
type DeepReadonly<T extends Object> = {
  readonly [Key in keyof T]: T[Key] extends Record<any, any>
    ? T[Key] extends Function
      ? T[Key]
      : DeepReadonly<T[Key]>
    : T[Key]
}
```

递归解决，注意特判 Funtion 的情况

## 10・元组转合集

- [接受挑战](https://tsch.js.org/10/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMAMEFoKGFFQI36Bt4wECqDG0yiEGF4BGAnhAIIB2ALgBYD2V5AYgK4QAUAAgIa0AzNgEoIAYkC0coElvcQEsqAgKYAncTTYAHADaLxbKrKZ48Y0xEAZGYDu3Y1EB52oAbnQNs2gaPUABgBVNO9wwCqBpgAedwA+V0AYf8Bg7UAV+MA9tTRAASNASHNAHgVAELccQCAGGwhAaPlAIM0c12KaAGc8GlINXQplVQBeCABtAHJoFoAaCBaAJk7ugGYWgF0cyuqId0VSmghGz21FH39DKkDa5RCIYGAIRQAPaoBjGkUAEwgaBghiXTaWiAAfbr6nwZa8YtccrcAKdQgAOKyehsYgQQBQcoBT80A0O6ALH+6DQaBpSgAuHZlI50AB0ACtSliGMoAObAODAABedAQAGEAHJgEDAMBgUAQAD6HM5XM5EEABvJpQDHcoBAD3Z3LFbIgjOZ410C28fgCa1Cc0me32pyoZ1KzXkSlUADUuljjbqVBAAErTGjDAD8EH1bzlSwVq0ClpmIRRECoigAbipmazxWKIIBpW0Aq9GACldcqLgzypbIALYaQmzGUQADeEAAogBHNi8LRdbOHRQnCAAXwgAmUDET3W4MoQmMLOioROmwDYNFkWlKHzA6aOvFK0xVTTwJeONECeYLWmCXmdKyCTWgPQGXRaABYAKwANn6NGUbEUwxCXXXAzeO4PD2ex9PIQvk9LJ1n+cLi8Wy0VgTXG7npeG7Ph0YCjCyICxnGEqANBygAAcoAptbQXGkpMqAeBbIAYEqANVy-KAMeRgAq3vCiLImiwAYtieIEsSpKwMA-ClAA7ioFJUnSmEQDCREkUiqLoqUmK4vihIkmSpQMFo3arOUUBbIAL2aAFiaVi8WRAlCdRolsTS9JSmAQA)

实现泛型 `TupleToUnion<T>`，它返回元组所有值的合集。

例如

```typescript
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

解答：
没想太多的递归实现 👇

```typescript
type TupleToUnion<T> = T extends [infer V, ...infer Rest] ? V | TupleToUnion<Rest> : never
```

翻了翻 issue 发现的另一个实现，确实哦！

```typescript
type TupleToUnion<T extends any[]> = T[number]
```

## 12・可串联构造器 ⭐⭐

- [接受挑战](https://tsch.js.org/12/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMBMEFoKHvlQTHKBUAwIeaAIEwFmqUQSOIICMBPCAQQDsAXACwHsbKAxAVwgAoABAQ3oAzDgEoIAYkC0coElvSfwAOCgDYBLAMb86qlgQISDEQBkZgO7c9UQBTqEAFL8AbvwDK6gE6qFdCFMCIRoBu5QPN+gBx6gFjygP7ygBSuaOiAEP8Awgz8qjT8pMoApsAACu5pajRpgJD-gCFugL+KgA6mOIAAcoBUcoCf2oCGMYAw-4Bi8lYAKuQKac5uHl6NgAbygL8BgBAqgGAuRYCbfoDB2oDSsYBQcoDePoDR6oDoKoD4-+YQFoCb8dWAiMaAGEZSg8iAp3IRgN9ygPCGA4A5qoBE1kWAnaaA8PqAedqADc57K4gQAJL0NIuIT8dRpAA0EA6XQggDQjCCxZT8ADOKIggF+EwAyEYAgBgGgAB0wCBkYAF40A2fKAEjlquUIAADJgeHQ0bgAazS5ChDmUHDSohpEEAMSq0gDmaTo3F5OKsdIZLD5UgJhIiZKKEFZlEFnO5EEAlkaAVR1AMr6gFklIoNFaNQBYCYBx+OFor5gHbgwBryoAAc0AE36AZb9ADnmOK2gGj5QBBmlsaUG6CiCAATNLqZEuNIQdQsFGeeM0ISqIUALkRCSSKXSW2TiYgMZRHGUngAvHGWKmhQQoAA6enaFjcADkQiYTFbULgAGZRHWII2ZUzW8kALZpbsQVt0TppBDqBLKdI0EUo1sDqANpuMtukfguacAbwgmrSmdbAAlcsomBAAOpMFzKMOtiAAXy32-rIrF34IYBgAgQB8c0AbHMizSEsywgIoVkAejNACx-ggkjoYFQXBCAACUoNLTxj0HDsmEzGgOHHUhgUHCcLwgRM3DXQcDxcTMCO3bdz0zOiklrNiPwIPioCDGktgGQAr5SJCwVkAIR1ACN0r49kAfKUhj+QBYOSJL5LkAVXloUcYBrEcWD3kAUTTAG4EwBE+O9KACAGc5AHEFQA+6NpNU+VEwBS40AdeVAHVtQAyb1QQAYANpc8+Q8rSzTEolABazQAmdOmQACeUAJAS4OWPy1MJQBt+KxLTABBNMYcUAGBVAHYLFUaWciBROCQBqiIiSpAEJrSyIAIAA+bYIAAcVURgOFICB5kAU-NAGh3RCGDoOgFBRdMgJDJd6wAKxRRsXCFYA4GAAAvBgEFiAA5MAQGAMADtACAAH1TrO86zogAYikAY7lAEAPE6Lqe46ID2g651heJEmSVI0gAHgAeVIGaIDSAAPNCaDDdEcPjFwwz+ri1yhQRyGaytjw-dGIFYiBdxYP6AGlQYhtIofRJGhShAA1RruEHNVM2J8HIeh1U2SYIQICBkGAH4eGpknWfRHmAG1CYAXQgfn8jsYEIEzanxCZiFBw4iBqdVqBREzL6c1+wHxw6wHgahQnmoAMmwyNnwRwmacaxqCD-cVMx5sA+LAI7nqeiBAGlbQBV6PCH1Hp9y63tUccFGfTwPtjU8qDUVkoQAUTBrp1E8D8ICEFwmHHGdeDjxdl1XddgA4bRlA3A6IyjQ9YwLTx+F17MfrzMAm8g6C6GgCBK34Ahh2bUciOnPtv2HvdWyYk8z34LkaOvW97yfF830-Sf8dHajp1necS4XsuoM3IeXYHTuE08Ys8PgAeh+3ttd6hVtBCYRh5d378gIgIuUQQcGGc6AAJcHnFwD8RxP34JOPeyJCxfzPqKcUB0u43zLL2fuEBB47kgWOaBU4X5vw-i4CACCoA-z-gA9OkZgHAjARAkeUCYE9lgP2RB-53rzjjKiKCmDRYEDTkAv6idVCsj+nHTm3c8LQFTtQzOaQwzQEdlrCAgiaHCKTv9CRXM0F0FgLIoBCjYDKIEXIugGjRFaPnJI3RvYDE0IUb2ExEtOGwjUfIxRmDcZERImRCi4CoBMRYmrBe3JOJ0HojxT8BBqLhMiR7VxsZ3FoTDHfHGMT8FxO4gksAcdVFmMcV4jJk5fHkUop7Q6IBQ5hxeoAaDlKiAFNrapYdXr7VAE1CAgAwJUANVy11ADHkYAFW8hojTGhNYAU0GCzXms+JaK1BAogAO7AjWhtbaHSBqDOGaNcak0UTTTmgtWZsBgAoiYFyEeoYoDNUAC9mgAsTVMFs0Zuz9nTMWiszaO03pgCAA)

在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？

在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 `option(key, value)` 和 `get()`。在 `option` 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 `get` 获取最终结果。

例如

```typescript
type Chainable = {
  option(key: string, value: any): any
  get(): any
}

declare const config: Chainable

const result = config.option('foo', 123).option('name', 'type-challenges').option('bar', { value: 'Hello World' }).get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。

你可以假设 `key` 只接受字符串而 `value` 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 `key` 只会被使用一次。

**正确解答**：注意 Key 必须为之前没取过的，或是 Value 类型与之前不同的（用例 2 和 3）。

```typescript
type Chainable<Obj extends Record<string, any> = {}> = {
  option<K extends string, V>(
    key: K extends keyof Obj ? (V extends Obj[K] ? never : V) : K,
    value: V,
  ): Chainable<Omit<Obj, K> & Record<K, V>>
  get(): Obj
}
```

## 15・最后一个元素

- [接受挑战](https://tsch.js.org/15/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMCsEFoKABzQcCqAA5QVHKGFFQBL6UQSOIICMBPCAQQDsAXACwHsbKAxAVwgAoABAQ3oAzDgEoIAYkC0coElvSfwBOC-uQIEJGiIAyMwHduaqAD4IgRldA7DGAZa0BXgYAqlQN-+gRejAMP+Aia0Bz8RAAKAJQiBOU0Db8Q6AFLGA84mAQAz6EAaAFOqAJtaAiMaAGEZSgF96gHXRgP7ygBSuACrkAA4ApgDKAMYKAJb5dBAALAB0AAyRgHnagA3OWIBYCVkABgAy-ADOdAA8OQY9joDB2oClxoDryliADqaAI349OT2AbnqAK-GAe2qAbopoWHiAIW6A3j6A0eoRUASA0fKAQZqRPU90gwR0BYUQigrQEAC8EAA2gByfjAgA0EGBpAhUNKwIAum8Pl8lAAmf5AgDMkLRkOgSOuUHeRQgdH4FQANr8AQNhiNvtAjMBgBBCgAPIqlOiFAAmZKYEFIn2B8ORpPJVIxtKGo2+aOZrI5XJ5-LoguFMAITx6kSM0QgAHEKowOKQIIAoOUAp+aAaHdAFj-DDodHygwAXCyXqUGPUAFaDepMBQAc2AcGAAC8GAgAMIAOTAIGAYDAoAgAH0M5ms5mIIADeWOgGO5QCAHuns2W0xBE8mSZ86aMcmz2TyaLzBl9WICEUYAQ2Oc3W0D6kOKjQhIUFBAvIVhpCR2OJ30ERAAPwQPoQV0QGiFABu4+TqfLZYggGlbQCr0VkbqWjzmqxUALb5QM1GsQADeEAAogBHDj8SmQp+nKFNyEAAL4QEIChMPeUK8DWCBev+lKFDQQbTsAHB0FSgzAtWKKlEM06YoCBBASqIw-n+lIjHWIyAjiEB4jAXb4gYBjgmRwHcpRv7-rRsr0dw4h-EY0BooxH78JuwyVGh4Gse+XwyXQclBuB7GcUiKYgNeN4VoA0HLoIAptZ6TelZJqABBGIAYEqANVy+aAMeRgAq3g6Touu6wCet6foBsGoawMAgiDAA7uOEZRnG1kQLaLluc6boeoMXq+v6gYhmGgxMJSWEVCwryGBAgAvZoAWJq6PFHlJSlvnpRFMbxlWYBAA)

实现一个通用 `Last<T>`，它接受一个数组 `T`并返回其最后一个元素的类型。

**正确解答**：基本送分题

```typescript
type Last<T extends any[]> = T extends [...infer Rest, infer L] ? L : never
```

## 16・出堆

- [接受挑战](https://tsch.js.org/16/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMBsEFoKC-FQYBqUQr2MCMCeEAggHYAuAFgPYmEBiArhABQACAhuQGYMCUEAYkC0coElvQewBOE9vgwYBCiIAyMwHducqAD5AFOqATa0CIxoAwjIYC+9QHXRgf3lAFK4AVfAAcApgGUAxhICWdshAAsAOgAGdQhAPO1ABudAADlAKjlALATLAAMABSo7AB5rDXjAGH-AYO1AUuNAdeVowAdTQBG-eOtswDc9QBX4wD21aMBGVzKK+MAQt0BZJQAbBxIAc0oEaEBPDMBTuUAPt0AYFTbALwzAeL1SwAQjNrLAIAZgwGj5QCDNYPi9sgBnDDJ7BwhJCWgIAF4IAG0AcnYHgBoIB9xX95cvh4ATB4AXWOp3OUgATDd7gBmN7gt7QYFQEGOCASBxXW7JNIXaAaCDAYAQBwAD0cLjIDj+EDIVAguDOj2ebw+vx+SJpoPRkKxKVSF3B+MJxLJDgpVJpdIZMLhHL28WCIBAgFyMwBomkrAFj-k0A7BZZQAVBoB9OUA98qjcLxJwUdxcMjZJIMA4UeKAGJV4gBVEgOq02wDoKoB8f+C+K0EAA4u5KAxcBBAFBygFPzQDQ7hqKGQyHYDgAuQmHFwUPwAKwOfioEj6wDgwAAXhQEABhAByYBAwDAYFAEAA+h3O13OxBAAbybUAx3KAQA9292x22II3mydUdj0iLKSQ-gdzrQ7oD8bdrAvesv7n4D+4SFwHBIIAAlBwHMhvI8ns8AGUBEAA-Ber940xBrGAZ2dEvaFDzqSi57pw+Drm8RBSDuS4ruB66bvuB7WG8B5+NBEjAn+EAWl6wEkqB8FrhuULbiBu4rncd6nhAdBoYex60Ze17Pm+LGft+v6gu6nrWgRRGrhBgJQTBFFwUJiFQncEDoZhLzodYwItiAo7jl2ECANK2gCr0ZYGxqepHaTk27gALZ2EW3g4QA3hAACiACODDsF0bx2aKFIQAAvhAXASFQpnvKwf4INmLk9P0V7AAwZDuF0BwPNOoIuOwBxXtJGDueSZCpI5zldKkc53LCEDwjAG5vMVsoaBoLyZR5OV5S5hV8kyvyfCyPwsgCFX3E87VskCNV1VAWVio1TnNUVvWIbV9XZblk0FQBDqpFVpUIiJ9w+G8ACsM0lWV0BvDtED7cN83jYt+WFYBa1bYhlUbnNo0NddzV4fx61HTNP0Xa9C1NQVn05Y99zPSN9lvUDqS8ZaX2HZtlWnedyN7W8iPlf9UOA0tsMevDoMPTNENgMpraGRpgDQchEgCm1gZhnGSpGD4oAYEqANVy-aAMeRgAq3omyaphmwBZjm+aFsWpawMAnAHAA7qeFZVnWLMQPGvP8ym6aZgc2Z5gWRYlmWBxUF0MXuDQRyaBAgAvZoAWJqqBrgva7rYsG4rNb1lOYBAA)

实现一个通用 `Pop<T>`，它接受一个数组 `T`，并返回一个由数组 `T`的前 length-1 项以相同的顺序组成的数组。

例如

```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```

**额外**：同样，您也可以实现 `Shift`，`Push`和 `Unshift`吗？

**正确解答**：看了小册后不难做出

```typescript
type Pop<T extends any[]> = T extends [...infer Rest, infer L] ? Rest : T
type Push<T extends any[], Arr extends any[]> = [...T, ...Arr]
type Shift<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : T
type Unshift<T extends any[], Arr extends any[]> = [...Arr, ...T]
```

## 20・Promise.all ⭐⭐⭐

- [接受挑战](https://tsch.js.org/20/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBBMAMEFoIAUBOB7AtgSwM4FMA6AQwBtTJEFqbKAjATwgEEA7AFwAt1WmAxAK4QAFAAFiHAGYCAlBADEgWjlAkt4LiqVMSbyADhhwFKleSYiAMjMB3bkagA+CIEZXQOwxgGWtAV4GAKpUDf-oEXowDD-gImtAOfiUACUIQE5TQG34n0AKWMB5xMAgBmsIQDpUwFNFQF-FQAdTAAM0LDx8ZnIc30Bg7UBS40B15XyDfAAZbABrfEBP7UBDGKzAEb9fQBX4wD21QB4FQBS9QC45PP1CgB4AFRtSwDdFRRyZnMB6M0BjyMAE80AQt0Blv0Ac826kqEoc8-ZcSgBjHlx2CD0CggBGCABeFEmCQlR8XHQpAAbvhhABmGQAbhudweTzq0A+EAALNBoVBbqx7o9vvgwUjWPgAO5fZ74Kb3VDYVgAcxswmEfwBwPwABoIH8AFb4a7sOTvOwAb0oUAI7Bm2Ew+HQAnYjP+gJB7JesFg7IA5JJ0Oh1VDKABfPWnKDAYAQfAADx0PPY+AAJhB2OgIHR8BAJmSpgBtVgCTCu1Ds1HsynUmkAXXmMKxcKRtUKxVIwi98MKL3ZqYI0AzuLB4YgxFwEEx9xkZ3OyTsgAp1CAAcWwXAEdAggCg5QCn5oBod0AWP+cdjsHS4ABcpsu104hE5uEI6FQNOAcGAAC9OAgAMIAOTAIGAYDAoAgAH0j8eT8eIIADeR2gGO5QCAHofTw+DxBt7u7TzSOo3dJWLzsDxSXUiZTMws5FpatqsHaRZ-MQdo8KQTACKwTSsOgRKsF6kbCJQQJkAI-yDhy+CwfBTBeoQFEgTSuDhqyYAyIR8YEFMgoQF6ADS+BMNSEAtAw6CSCwoHhoRVG4BxXH5uB+CQUWTHktSkj4KgEAAGp2AA-GpECiaBEkMPm+o2Lu+6Pg+ECANK2gCr0YAFK6ANHy95mWeL6SjoM4POwDDWhArEAKIAI4CGQ7K+VaNoQPqECSPoEDqqInnWggY5kKQMk0v8wCytgpC4Oqu4lnCuKJjM-zsG8nzyYmybpjA7J5gWRYFWWBU4mSxWlYiFVFeQ1XstmAGFL8CosuCMj5oWxaws1sKtYB5Alfc+JdW1PVejV-XyUNzIgqN4ZlmACVutchb-EiXqUKF1q8lMAVBaQUyHQJs0JvNpU1fJ3rrXVkY2DYdFQJdNo3YFZAPV50qCZmRSvfcG24p9fXsr6-rKT9f0XWF123aDj2Q91pALewYLsh9Pp+gGSPk8plMo6gaN0eGJkgI5TlPoA0HKAABygCm1izTnPjuoCUHYgBgSoA1XKXhsgAq3j2fYDsOwCjuOk7TrO86wMAEi4ESylLiuG5CxAnZSzL-ZDiOuBjhOU4znOC7MlldwG4AL2aAFialgm3L5uW8rNu62um4vmAQA)

键入函数 `PromiseAll`，它接受 PromiseLike 对象数组，返回值应为 `Promise<T>`，其中 `T`是解析的结果数组。

```typescript
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
```

**正确解答**：

```typescript
declare function PromiseAll<Args extends readonly unknown[]>(
  values: readonly [...Args],
): Promise<{ [Key in keyof Args]: Args[Key] extends Promise<infer V> ? V : Args[Key] }>
```

疑惑吗？疑惑就对了，请看看这个 pr ：[Variadic tuple types](https://github.com/microsoft/TypeScript/pull/39094)

## 62・Type Lookup ⭐⭐

- [接受挑战](https://tsch.js.org/62/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?ssl=33&ssc=1&pln=34&pc=1#code/PQKgUABBBsBMEFoIBUCeAHAphAMgezwGsBXdSRBSq8gI1QgEEA7AFwAs8n6AxYiACgACAQ1YAzYgEoIAYkC0coElvWcSYBLTrIC2wslHIyDEQBkZgO7dy5QJDmgN9NAMP+AKg0D3yoF+AwDB6gbHNAnBaA7Y0AL5oCo5QD0dQHIDQAp1QBUAwAgVQG8fQGj1OUBT80A-I1jAIAZzKBDAE2tARGNADCM5G0BEI0AbuUBng0AsBMBx+PDomIADAGFhFggAHwgAETwAczq5QBwTQCJfQBtFQEdFOpYMTDrAdW1AVutAU3NAduDANeVAD7dAFL1AELdUwCNjQFPlQF3owBfomxDAU7lAaDlALk9AaPkCksB8czc6-CIAVXQAHi7utogmiwADQQADkABMeqCAHx1JaAdP06r86jZXgRCJ8fj1-oCQaCAMbNGFwxGAuppPRQOrUlgAZ3IqlYmAATmJhPjsICIABvchQSZYABcYMJLFBfIgNGZmEw4NpwtBDDotNpjNUolB-1BAGUOMz2MJVMzNe1QQ1iMyADYmsEAIUwTG6wmt5AAvukIIyWCy2RzOtjeVB+VMFZDuuKg5LpbL5WCABJ4FTgm2g23M1QsFiiVAp23ES2WsO5vAADxZEaD+LwlrwzIVUrwAHcmCnG2wM5gUzRLezCBX3ZSIALsABZVC-CAAXlw6MxXPavzxRehEGAwAgmBLWHx3vBQ7wkuwSJ6dXI1NPg5XIQgAHEM2xiDQIIAoOXigGh3QBY-2xM+h5Wu6fibAAHQAFa0kBtbdMAcDAAAXmwCANAAcmAIDAGAGGgBAAD6uF4fheEQIABvJbIAx3KAIAeOEEdR2EQGhGHDjOHzfO8ILIBuJbekwcoQLSLDpo6K7Tu8HFcTx3JDiGnpMGILIQNqECuhAABkEAAEqYFWzLgl82YgtmK4APwCApm5ibSKAQMZ7zCkwmAAG4stIEC2Q5LIYWAWE0dRECANK2gCr0YAFK63FR3mEfRqiaOgtYtIxEkAKIAI7EM6ILxVumktEpYjMngmhgoIw4IIBzqWg63SYLSwDECwqiWrS4pgF6PrspyzQ8uQw4KqKFZSjKcoKkqqAqmqGparqMVsIaxpauaVq5uVzriu6TVMqyrX+n8gaSUKYJFrQ0YDfGibcbm6aZtmub5oWUJarapbluQVY1nWYINs2rbtt6XY9vifZgCtjHMJFzpTgC7ULj0DFTBAhK0pVYMANrkOl24sF8SUpZaXxvBi3zA9olpLlC0Igr80KkyjGU7hjyXOjjs742ohN4j1pPgywFNAmAAC6HmeSAoVhbRlyAABygCm1kLYV0ehoDkCugBgSoA1XIkYAx5GACreX4-n+wAAcBYEQcyUEwaItKNiycEIch8sQO+Gtaywv6Cv+tKAaB4GQdBsDALS1Y1eoTD0lAK6AC9mgBYmqYDtOy7bsG578GISh9FgEAA)

有时，您可能希望根据某个属性在联合类型中查找类型。

在此挑战中，我们想通过在联合类型 `Cat | Dog`中搜索公共 `type`字段来获取相应的类型。换句话说，在以下示例中，我们期望 `LookUp<Dog | Cat, 'dog'>`获得 `Dog`，`LookUp<Dog | Cat, 'cat'>`获得 `Cat`。

```typescript
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

**正确解答**：第一反应如下

```typescript
type LookUp<U, T extends string> = U extends { type: infer S } & Record<any, any> ? (S extends T ? U : never) : never
```

翻了翻 issue，很巧妙地[一个解答](https://github.com/type-challenges/type-challenges/issues/149)如下：

```typescript
type LookUp<U, T extends string> = U extends { type: T } ? U : never
```
