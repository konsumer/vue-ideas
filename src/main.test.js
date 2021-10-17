const rewire = require("rewire")
const main = rewire("./main")
const lazyPage = main.__get__("lazyPage")
// @ponicode
describe("lazyPage", () => {
    test("0", () => {
        let callFunction = () => {
            lazyPage(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            lazyPage(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            lazyPage(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            lazyPage(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            lazyPage(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            lazyPage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
