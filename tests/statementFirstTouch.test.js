describe("amountForV1", () => {
    const play = { name: "Hamlet", type: "tragedy" };
    const perf = { playID: "hamlet", audience: 55 };

    it("calculates the amount for a tragedy with a full house", () => {
        const result = amountForV1(perf, play);
        expect(result).toEqual(65000);
    });

    it("calculates the amount for a tragedy with a small audience", () => {
        const perf = { playID: "hamlet", audience: 10 };
        const result = amountForV1(perf, play);
        expect(result).toEqual(40000);
    });

    it("calculates the amount for a comedy with a full house", () => {
        const play = { name: "As You Like It", type: "comedy" };
        const perf = { playID: "as-like", audience: 35 };
        const result = amountForV1(perf, play);
        expect(result).toEqual(58000);
    });

    it("calculates the amount for a comedy with a small audience", () => {
        const play = { name: "As You Like It", type: "comedy" };
        const perf = { playID: "as-like", audience: 10 };
        const result = amountForV1(perf, play);
        expect(result).toEqual(33000);
    });
});

describe("amountForV2", () => {
    const play = { name: "Hamlet", type: "tragedy" };
    const perf = { playID: "hamlet", audience: 55 };

    it("calculates the amount for a tragedy with a full house", () => {
        const result = amountForV2(perf, play);
        expect(result).toEqual(65000);
    });

    it("calculates the amount for a tragedy with a small audience", () => {
        const perf = { playID: "hamlet", audience: 10 };
        const result = amountForV2(perf, play);
        expect(result).toEqual(40000);
    });

    it("calculates the amount for a comedy with a full house", () => {
        const play = { name: "As You Like It", type: "comedy" };
        const perf = { playID: "as-like", audience: 35 };
        const result = amountForV2(perf, play);
        expect(result).toEqual(58000);
    });

    it("calculates the amount for a comedy with a small audience", () => {
        const play = { name: "As You Like It", type: "comedy" };
        const perf = { playID: "as-like", audience: 10 };
        const result = amountForV2(perf, play);
        expect(result).toEqual(33000);
    });
});
