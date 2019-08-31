// num_books, num_boxes, are_books_distinct, are_boxes_distinct, function_type, does_order_matter
describe("LAH", () => {
	it("Test 1", () => {
		expect(Lah(4, 2)).toEqual(36);
	    });
    });

describe("NNBN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "B", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "B", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "B", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "B", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "B", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "B", false)).toEqual(0);
	    });
    });

describe("NNBY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "B", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "B", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "B", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "B", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "B", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "B", true)).toEqual(0);
	    });
    });

describe("NYBN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "B", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "B", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "B", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "B", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "B", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "B", false)).toEqual(0);
	    });
    });

describe("NYBY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "B", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "B", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "B", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "B", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "B", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "B", true)).toEqual(0);
	    });
    });

describe("YNBN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "B", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "B", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "B", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "B", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "B", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "B", false)).toEqual(0);
	    });
    });

describe("YNBY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "B", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "B", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "B", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "B", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "B", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "B", true)).toEqual(0);
	    });
    });

describe("YYBN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "B", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "B", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "B", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "B", false)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "B", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "B", false)).toEqual(0);
	    });
    });

describe("YYBY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "B", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "B", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "B", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "B", true)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "B", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "B", true)).toEqual(0);
	    });
    });

describe("NNIN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "I", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "I", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "I", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "I", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "I", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "I", false)).toEqual(1);
	    });
    });

describe("NNIY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "I", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "I", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "I", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "I", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "I", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "I", true)).toEqual(1);
	    });
    });

describe("NYIN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "I", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "I", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "I", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "I", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "I", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "I", false)).toEqual(10);
	    });
    });

describe("NYIY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "I", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "I", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "I", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "I", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "I", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "I", true)).toEqual(10);
	    });
    });

describe("YNIN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "I", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "I", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "I", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "I", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "I", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "I", false)).toEqual(1);
	    });
    });

describe("YNIY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "I", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "I", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "I", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "I", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "I", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "I", true)).toEqual(1);
	    });
    });

describe("YYIN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "I", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "I", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "I", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "I", false)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "I", false)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "I", false)).toEqual(60);
	    });
    });

describe("YYIY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "I", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "I", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "I", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "I", true)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "I", true)).toEqual(0);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "I", true)).toEqual(60);
	    });
    });

describe("NNSN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "S", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "S", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "S", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "S", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "S", false)).toEqual(2);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "S", false)).toEqual(0);
	    });
    });

describe("NNSY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "S", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "S", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "S", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "S", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "S", true)).toEqual(2);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "S", true)).toEqual(0);
	    });
    });

describe("NYSN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "S", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "S", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "S", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "S", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "S", false)).toEqual(6);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "S", false)).toEqual(0);
	    });
    });

describe("NYSY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "S", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "S", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "S", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "S", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "S", true)).toEqual(6);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "S", true)).toEqual(0);
	    });
    });

describe("YNSN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "S", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "S", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "S", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "S", false)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "S", false)).toEqual(25);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "S", false)).toEqual(0);
	    });
    });

describe("YNSY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "S", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "S", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "S", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "S", true)).toEqual(1);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "S", true)).toEqual(120);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "S", true)).toEqual(0);
	    });
    });

describe("YYSN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "S", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "S", false)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "S", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "S", false)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "S", false)).toEqual(150);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "S", false)).toEqual(0);
	    });
    });

describe("YYSY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "S", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "S", true)).toEqual(0);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "S", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "S", true)).toEqual(24);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "S", true)).toEqual(720);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "S", true)).toEqual(0);
	    });
    });

describe("NNGN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "G", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "G", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "G", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "G", false)).toEqual(5);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "G", false)).toEqual(5);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "G", false)).toEqual(3);
	    });
    });

describe("NNGY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, false, "G", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, false, "G", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, false, "G", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, false, "G", true)).toEqual(5);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, false, "G", true)).toEqual(5);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, false, "G", true)).toEqual(3);
	    });
    });

describe("NYGN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "G", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "G", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "G", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "G", false)).toEqual(35);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "G", false)).toEqual(21);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "G", false)).toEqual(35);
	    });
    });

describe("NYGY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, false, true, "G", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, false, true, "G", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, false, true, "G", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, false, true, "G", true)).toEqual(35);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, false, true, "G", true)).toEqual(21);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, false, true, "G", true)).toEqual(35);
	    });
    });

describe("YNGN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "G", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "G", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "G", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "G", false)).toEqual(15);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "G", false)).toEqual(41);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "G", false)).toEqual(5);
	    });
    });

describe("YNGY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, false, "G", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, false, "G", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, false, "G", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, false, "G", true)).toEqual(73);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, false, "G", true)).toEqual(480);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, false, "G", true)).toEqual(13);
	    });
    });

describe("YYGN", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "G", false)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "G", false)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "G", false)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "G", false)).toEqual(256);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "G", false)).toEqual(243);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "G", false)).toEqual(125);
	    });
    });

describe("YYGY", () => {
        it("Zeros", () => {
                expect(calculateIt(0, 0, true, true, "G", true)).toEqual(1);
	    });
        it("Zero Books", () => {
                expect(calculateIt(0, 3, true, true, "G", true)).toEqual(1);
	    });
        it("Zero Boxes", () => {
                expect(calculateIt(2, 0, true, true, "G", true)).toEqual(0);
	    });
        it("Equal", () => {
                expect(calculateIt(4, 4, true, true, "G", true)).toEqual(840);
	    });
        it("More Books than Boxes", () => {
                expect(calculateIt(5, 3, true, true, "G", true)).toEqual(2520);
	    });
        it("More Boxes than Books", () => {
                expect(calculateIt(3, 5, true, true, "G", true)).toEqual(210);
	    });
    });

