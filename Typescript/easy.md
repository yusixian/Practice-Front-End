# 题单

- [x] [4・实现 Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md)
- [x] [7・实现 Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md)
- [x] [11・元组转换为对象](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md)
- [x] [14・第一个元素](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md)
- [x] [18・获取元组长度](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.zh-CN.md)
- [ ] [43・Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md)
- [ ] [189・Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md)
- [ ] [268・If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md)
- [ ] [533・Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md)
- [ ] [898・Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md)
- [ ] [3057・Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md)
- [ ] [3060・Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.zh-CN.md)
- [ ] [3312・Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.zh-CN.md)

# 解答

## 4・实现 Pick

- [接受挑战](https://tsch.js.org/4/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBAsELQUHnagG5wgBQJYGMDWl5yFH4BGAnhAIIB2ALgBYD21FAYgK4QAUAAgIZ0AZuwCUEAMSAA70CqyhPbUMzCSXYYANrTgZq+fOP0RAGRmA7t11QAfBEBE1oDn49ACUIgTlNA2-GBv-0CL0YApYwPOJgIAYzJFQAFQBlCEBQxUA7f0AQtwgAA0xcAB5ggBoIAGlzeMAYf8AxeUBYOUB75UBTuUB-eUAKV0Bg7QCofBAQQDm5QG8fQGj1BOD4iEBaOUBIBMBLo0AvxUA9HUByAwTMvMAQ80ACBMAEI0AAOUAqOUAG0xj2xrqIfEBo+UAgzUAsf8D409oAZ3xtWgBTACdBPiwbiGDGABNGCABvfChaDC0NQ3ABcEHOtDu2gA5n8IO8bucsFCAA4A5hgiFQ6iwqBQLCMAC2KOBt3eYJIjEYwIE+AAvoFaGQUS83p80HcbgA3DA3ADuEAAvBAALJkJI4VIfRgZADkAKBN1lEAAPhBZQTiaSbu9ZeZAgTqBCILRpWC2YwOdzeQLhb88XiFcCwbKAMI06gQO5UwmytJw-FEkk3Mlgx5qc43f1QBlQU7xQKWQAU6hAAOKA+jsEgQQBQcoBT80A0O6Hei0Wgo84g4DAC5YegAOgAVuc64w7tDgNBgAAvehwV0AOTAIGAYFHoAgAH0p9OZ9OIIADeRigGO5QCAHpPZxuJxBh6OmSzReLsJL0lkIDcAB63ajvc4QHA3MiMQSvSx2-AAbUyD4g2iyAF1zU-B8-zAOkdjHEB103GcIEAaVtAFXoypdig6Cp23EcMGJVtaBNZkXm+CAAFEAEd2D4NQMkI88WSwHCwMEb1CXVHg9xuOBa3I4EcURYB2ABCNZV3PCICwPhI1vYV33wKiaNoZISLItR5Oom5aJ1ABGDIxQlKVPjlJ0lXMIzoyIlTaPk0jyOU2SdQAJi0w8UgtfTAWBZU1Q1INtV1IzzBMqsIBY844AvWSQrub07nwbSj10mV1QM9z1U1YMySS2VtC5ciMB8-0QLAa57keZ5XmlH58AMzFIRhfAESRVF0WoKrsVxESvJDHUKSpD1QNHQqHieF4ZNUsl1PK-5XNBcFqpxXqCroIrBtMmz3ls8aTUm5qasDLUOvJCBKWpG5aQZUcwHHVCYMAaDlFkAU2sUNQ9DzvACwIEAMCVAGq5RdAGPIwAVb2LUty0raskXrJsWzbDtgAEc4+XubtewHfBLELP6AbLCsqxrMHm1bdtO3Oak+MUI1kYgQAXs0ALE0THRoGsdBxtcchns+0HHcwCAA)

```typescript
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
```

通过 keyof 取出 T 类型的所有键，如果只是 MyPick<T, K>的话，会报错如下

```bash
Type 'K' is not assignable to type 'string | number | symbol'.
Type 'key' cannot be used to index type 'T'.
```

## 7・实现 Readonly

- [接受挑战](https://tsch.js.org/7/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBDsELQUHnagG5wgJQKYEMAmB7AOwBsBPSeOSq8gIxIgEECAXAC0PoDEBXCACgACWFgDNuASggBiQAHegVWVpNbgEsizOMoLSATtnzF6UvDQBWGAMbqA1hhIBncuSnOIgDIzAd26OoAPgiAia0A5+IgABTQIQE5TQG34wG--QEXowApYwHnEwCAGLwhAWDlAQMjAf3lACldAUMVAO39AELcAA0xcQlIAHgAVb1LAGH-AK8DAR90UQAA5QCo5VKhyQFPoiHK9KpJSiEAseUBS40A2U26IAH1AbZtAaPVAIeVAB1MFxsA3PUAV+MA9tW7AGO1AC0UOwHYLYsBvHxXGwCvlQHozQAEjQEhzQD0dQHIDQF+EicBqiKGukqBnGz0Ad-KAB0zehByIB9OUAjDqPdKAe+VAKdygFjFQCf2v1MYBDGOKX0A0rGAHgVoeRANHygCDNQBY-2lSvTmA4oJpmBhtCIsOYMBBanh8BAAN7kKDMZTMIgYABcEDszG0mgA5sKIDgMHZzPKAA6iwjS2XyghKqAAXzS5kIsogzD5eGlAFkSBV9DVefhfABeQXK0XiqUQABEAAlbP6ADTK1XqrU6gjS-0iPDGLDaf3kU19EU2gB0PolEE9QYwRCIeH9EGAwAgAFFtNo8NppeZhAQ8MwIEC7HZlAqtFh2yMDBBNXXNWzmGRM-gs5GNcptcpCPmAzRk5xE2WK9Xa-XG83W-2sJ3u72D876MO8KPtOPyPTSmlfIAKdQgAHExaxuDQIIAoOUAp+aAaHdqVYZhmE1OxJQrRlzFYLMTDsLN6wVYBoGAAAvVg4AAYQAOTAEBgDAQjQEWBZSLI8jSIgQADeWKQBjuUAQA8SIo5iIHwwjx1HCAHSdUY6g9L0oCBM8IAAbQAaVsCBNAgGwSDwEQeQAXQgaVanE2xFLAU0iJAJjmPIiBAGlbQBV6Nyck9P0yi2OUABbTV6zbDjuQFasAEduCwIhQ2rAAPUdLAgY0IBEOsbIgAByAQnLgaDPIlQ01WAbhRSIOxwvYkhOKbOw1SXETyCrPyLGYaoq3czzqm4gcXRtABGbxvJ4gw6jq7w2vDTSwBZNkOS5Hk6oEq0xQlPU5UVcgZ2jBdYxlMbDXIc07IlVkcGlGhEwlYRyBsjBmCwaUhSgKAsGS9gG1mg0jUCrTCJ0izLIgQBoOQ6QBTa3u-TWII0ByF8QAwJUAarkaMAY8jABVvICQLAiDgCgmC4IQ7QkJQ4Q7AAdzZNCMJwn6IAA0HwdA8DIPVWH4MQ5DgDsPAiGS6amQgXxABezQAsTQ8fHIaJ6DYNJhGMaw3C2LAIA)

```typescript
type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
```

https://tsch.js.org/11/play/zh-CN

## 11・元组转换为对象

- [接受挑战](https://tsch.js.org/11/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCM0QtBQwoqBG-QNvGCNjQXHKE-tQhjGQLzEmEBGAnhAM4CWAdgPaP0QAUAAnUywJQQBiQAHegVWVBjMgCsApgGMALvADW0itUKEBWiIAyMwHduGqAD4IgImtAc-EQACgCUIgTlNA2-GBv-0CL0YApYwPOJgIAZDEQATygKaKgABygFRyqIDePoDR6oAw-4BgOoCb8eEo0Zi4eNExSfjRgCFugHSpwIA8CoC-CYD0ZoBzcqiAtHKAsgmAYcqAX4qApua+UISA0fKAQZqAWP9+AAaD8upQsizU8hDyAK4ADgA20hAAvBAA2gDk8tLU8wCGGwA0EBsAtowAJtLzEADMRyfnVzcAGg9nl9cQAJobALoQPbUCBjegTPzyCizJYAJx203mk1WABU5otkYwAPJSOTyAA8kOhjAAZlM0dITMBgBBpAAPaEKaQXCAAbymO32AC4Tttdgdjh9nncNtzBV97gKnl83qKpa93nKfiLHp8br8AL6EQb9PwmQAU6hAAOK0eQAC2mZAggCg5QCn5oBodx6pvk8lm1E5VOGslNADpJNRvYwYQBzYCwYAAL1N8AAwgA5MAgYBgZOgCAAfQzmazmYggAN5XKAY7lAIAe6ezZbTEETycJS1RC2kGOxMgUeORNNp23oF2BcL2FxY8yoe3oFDWfxMqxZhHWAGlVBAGBBkWt6NNTmRpDC-n9uXOKGBNSmQKXy1mIIBpW0Aq9GAClcOifTxnK0naKdZoHJjXWRAAKIAR2mezzMc370riEDqhAxIwowpwnBwNbwF6gGLPQQY7MA0zyLQ8zUBsyaghMZL1is6xbBy-IqkKEqUdKCqqkqAJAiC4zyGABEfuSsZrhuMIkWs0DHAATMctzHAALIxwLsWxLFEYsACytC0nxAknIJDyiScYn-ICUksdWUJLLIQI7HxhAgQy+J-gB8ytuSjY4i2NYknJFLHGyvJcjy5EbAA3DRNz3LK9H3P5YrysFQpvGFiq-JFXy-OBRhGIc5mgS21mAXZ9YOc2+LOaSMz1lx66bilX7QNy0D+YJ3KCf5tzcrc-lidyYlJSlaWWXimW2XW6JYo5+WGS5RUKUp5VspVMBheporqQ1TVhdporaR1qV-Cm1LwdQ8B0pZe0wtBMJgJ+m7HSR-UNoNeV4ms-FCX87nquOyZHveD4QIA0HLBIAptYfaeT5gKAhAmIAYEqANVy+aAMeRgAq3o6zquu6wCej6foBsGobQMAw7UAA7puEZRnGoMQPacMIy6boetQXq+v6gYhmG1CMPMmG0OMpOAC9mgBYmvolNIzTdPo4zRMxvGVZgEAA)

```typescript
type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key
}
```

## 14・第一个元素

- [接受挑战](https://tsch.js.org/14/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMAsEFoKBpvQAHKCo5QwoqAJfSiEGF4BGAnhAIIB2ALgBYD2V5AYgK4QAUAAgIa0AzNgEoIAYkAB3oFVlcbwBOc3qTx4xaiIAyMwHduKqAD4IgImtAc-EQACgCUIgTlNA2-GBv-0CL0YApYwPOJgIAZdEQHnagBucMgFgJgBSuAAYsAJZyAM40ADwAKnohgDD-gMHagKXGgOvKGIAOpoAjfiHxIYBueoAr8YB7aqmAIW5oWNhVgN4+gNHqnlB4gNHygEGagFj-XiH9NFF4NKQADgCmEPJy0BAAvBAA2gDkvMsANBDLxBtbAMbLALrDY5PTAEzzSwDMm+eb0MdtUCMTEHTjvAAmswsR0XFptADMBgBBxgAPCZ7GjjL4QGgMCDESarZYnN4fb6XP6RGKxC4gsGQ6Gw+GI5GTa54fohLwGQAU6hAAOLhehsYgQQBQcoBT80A0O7dOg0GijKIALlBgz2dAAdAArKIyhhyADmwDgwAAXnQEABhAByYBAwDAptAEAA+lbrTbrRBAAbyVUAx3KAQA9LbaPRaIMbTa9Jv98fFwRDYVQvlEpsxFocDAsg5DQ+GluEqAJxnIICxNjKc-xSNHDhAAPyZiBiiBUcYAN3TZpA7s9NoggGlbQCr0UF2g3G1bvSbwgBbUbKmgI04QADeEAAogBHNi8AA2mynUPGMIgAF8IAI5Ax+1tuH6ENLFwvxlQVeMosA2DRwguouiwH6IHteFEr1dFngV6TYrP5wXWIAziRZbgge4YBjTZrj0PR1h-VcYX-OdF2AvFQM4UQ5gMaBznAydeHLGI5BTFVN2grhsNw-C4IQqBfzXOIALQkDYmjeCK2rdM6MQv8WKAtjFjYMNxgEFM4UokSvjEiSvl445nzHdNd2iL88FBCBDyiBASSY3SFGVPA2OWKgGBoCgFCUZZ4I0sFtN0pCaAM1TjIw2JJwABnLVYrNIAAZcIAGtxmWTdbMUusu27CBAGg5VBAFNraLG17MBQDwAxADAlQBquUdQBjyMAFW9BWFUUJWAKVZQVJVVXVWBgH4KIAHd0y1HUDQyiB+UK4qRXFSUomleVFWVNUNSiBgF1vcImCGfQIEAF7NACxNbQetK-rBqqkbWr1Q0fTAIA)

```typescript
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
```

符合小册中模式匹配做提取套路，通过 extends 对类型参数做匹配，结果保存到通过 infer 声明的局部类型变量里，若匹配就能从该局部变量里拿到提取出的类型。

## 18・获取元组长度

- [接受挑战](https://tsch.js.org/18/play/zh-CN)
- [我的解答](https://www.typescriptlang.org/play?#code/PQKgUABBCMAcEFoKHbgwa8qGFFQI36H9UwZXqUQSOIICMBPCAZwEsA7AewbogAoABWx5gSggGJAAd6BVZQEAXAK4AHADYBTAgX7KIgDIzAd26KoAPgiAia0Bz8RAAKAJQiBOU0Db8YG--QIvRgCljA84mAgBi0RA2EqAvvUAAcoCo5QCwEwApXQBC3AAMAGTk6AHMxAAswwBh-wFLjQHXlfzCAJzkAQwATZhlyMJDAB1NMJMAV+MA9tUBN+L8KkLw3KAJAaPlAIM1ALH-3MP6xKgIxcik5CDE5KhlciABeCABtAHJJ6dzlgBoIZYBbBny5GQgAZi2d-cPjgA1zvYOjiABNZYBdYdHxqilcgGM5a7zJbLABiAEEIgBhADyADkIABOO7gqFwiAACQAomCAGovbbLAAipjBAHE4XcAMoAFTBpkp6IAksY7uiAKoAWTB8MpxjBkMxIIijNJ6Opb3cIzGEymMyisQSQPlcXiAB41jNdMBgBA5AAPMa-Sb5CAAFg+0u+fwBysVC1taqt-2uWp1+sNxogAFYCP0wu5dIAKdQgpJoCQkpAggCg5QCn5oBod268TEYikVAAXNrBr94gA6ABWVBzDCyMWAcGAAC94ghIbCwCBgGAm6AIAB9dsdzsdiCAA3kQoBjuUAgB5truj1sQBtNqXjB2q6m6vWTOj5KgQHIFIqUCR0ADWjAA7nRFq9dAtqSt5Ar4hLmyAR2POxBANK2gFXooLte8P9sTxs0XZSYsxAmT4IAAbwgTEAEcJFyGRtkxA05CNCAAF8IAAMyyBhdh2dhpwQbNYMvGIpmACQxBoGQqGWJtfmYKggI1WYFhWJi7kuR4zgJDibnYh5jheV4IFyVc6LoBiwDEhjqB+Z0gRWFEYXhJECUUtEsVxfEdmJMkKQJGk6QZZlWU5bkIF5flBWFUVxSEkSICksQpxA34RKmeSCAQj1VSgmCZFVWdpwYdCZXWbRtlNbRws8xCjR86DYIC6IVXVT5gpk60XW2L0os2AhtQgPCqAQd0kLEEqsiwrICFnHK8qgAqipK2LyrkSrixq5KElVZZ4iOGQGAgfdixkfJlmi94mzAFsv0fQBoOR8QBTa0-L8f2m8AdAgQAwJUAark+0AY8jABVvRNk1TDNgCzXMCyLEsy1gYBcnE-c2sratawIXR4yOk6U3TTMqGzfNC2LUtyyoBgZHImh6I+iBABezQAsTQ0H6zv+wHrpB16azrScwCAA)

```typescript
type Length<T extends readonly unknown[]> = T['length']
```

会抛出 Error 说明得限制传入的类型
