const rewire = require("rewire")
const App = rewire("./App")
const forFade = App.__get__("forFade")
const forBottomToTop = App.__get__("forBottomToTop")
// @ponicode
describe("forFade", () => {
    test("0", () => {
        let callFunction = () => {
            forFade({ current: { progress: 300 }, closing: "VT" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            forFade({ current: { progress: 10000 }, closing: "KS" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            forFade({ current: { progress: 6.0 }, closing: "DE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            forFade({ current: { progress: 0 }, closing: "OH" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            forFade({ current: { progress: 0 }, closing: "VT" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            forFade({ current: undefined, closing: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("forBottomToTop", () => {
    test("0", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: 10000 }, closing: "OH" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: 0 }, closing: "TN" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: 6.0 }, closing: "OH" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: 10000 }, closing: "DE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: 6.0 }, closing: "TN" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            forBottomToTop({ current: { progress: Infinity }, closing: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
