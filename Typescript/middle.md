# 题单（中等）

- [x] [2・获取函数返回类型](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.zh-CN.md)
- [x] [3・实现 Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md)
- [x] [8・Readonly 2](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.zh-CN.md)
- [x] [9・深度 Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md)
- [x] [10・元组转合集](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md)

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

## 9・深度 Readonly

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
