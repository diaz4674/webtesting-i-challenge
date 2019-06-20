const enhancer = require('./enhancer.js');
// test away!

describe("enhancer.js", () => {
    describe("repair", () => {
        it("restores durability to 100", () =>{
            expect(enhancer.repair({durability: 89}).durability).toBe(100)
            expect(enhancer.repair({ durability: -69 }).durability).toBe(100);
            expect(enhancer.repair({ durability: "a" }).durability).toBe(100);
        })
    })

    describe("succeed", () => {
        it("increases items enhancement by 1", () => {
            expect(enhancer.succeed({enhancement: 19}).enhancement).toBe(20)
            expect(enhancer.succeed({ enhancement: 13 }).enhancement).toBe(14);
        })
        it("If the item enhancement level is 20, the enhancement level is not changed.", () => {
            expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);
        })
    })

    describe("fail", () => {
        it("Item Fails", () => {
            expect(enhancer.fail({enhancement: 17, durability: 20}).enhancement).toBe(16)
        })
    })

})

