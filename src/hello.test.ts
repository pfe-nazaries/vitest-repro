import { expect, test } from 'vitest'
import { Hello } from "./hello.ts";

describe("Hello", () => {
    test("it should return 'Hello World!'", () => {
        expect(new Hello().sayHello()).toStrictEqual("Hello World!");
    })
})
