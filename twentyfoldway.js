function calculate() {
    var num_books = parseInt($("#num_books").val());
    var num_boxes = parseInt($("#num_boxes").val());
    var are_books_distinct = $("#are_books_distinct").is(":checked");
    var are_boxes_distinct = $("#are_boxes_distinct").is(":checked");
    var does_order_matter = $("#does_order_matter").is(":checked");
    var function_type = $("#function_type").val();
    var description = described(num_books, num_boxes, are_books_distinct, are_boxes_distinct, function_type, does_order_matter);
    var ans = calculateIt(num_books, num_boxes, are_books_distinct, are_boxes_distinct, function_type, does_order_matter);
    $("#ans").html("Answer: " + ans);
    $("#describ").html(description);
}

function calculateIt(num_books, num_boxes, are_books_distinct, are_boxes_distinct, function_type, does_order_matter) {
    var ans = "Not yet implemented";
    switch (parse(are_books_distinct, are_boxes_distinct, function_type, does_order_matter)) {
    case "nyBn":
    case "nyBy":
    case "nnBn":
    case "nnBy":
    case "ynBn":
    case "ynBy":
	ans = bijective_unlabeled(num_books, num_boxes);
	break;
    case "yyBn":
    case "yyBy":
	ans = bijective_labeled(num_books, num_boxes);
	break;
    case "nyIn":
    case "nyIy":
	ans = NYI(num_books, num_boxes);
	break;
    case "nnGn":
    case "nnGy":
	ans = NNG(num_books, num_boxes);
	break;
    case "nnSn":
    case "nnSy":
	ans = NNS(num_books, num_boxes);
	break;
    case "nyGn":
    case "nyGy":
	ans = NYG(num_books, num_boxes);
	break;
    case "nySn":
    case "nySy":
	ans = NYS(num_books, num_boxes);
	break;
    case "ynGn":
	ans = YNGN(num_books, num_boxes);
	break;
    case "ynSn":
	ans = YNSN(num_books, num_boxes);
	break;
    case "nnIn":
    case "nnIy":
    case "ynIn":
    case "ynIy":
	ans = injective_unlabeled(num_books, num_boxes);
	break;
    case "yyGn":
	ans = YYGN(num_books, num_boxes);
	break;
    case "yySn":
	ans = YYSN(num_books, num_boxes);
	break;
    case "yyIn":
    case "yyIy":
	ans = YYI(num_books, num_boxes);
	break;
    case "ynGy":
	ans = YNGY(num_books, num_boxes);
	break;
    case "ynSy":
	ans = YNSY(num_books, num_boxes);
	break;
    case "yyGy":
	ans = YYGY(num_books, num_boxes);
	break;
    case "yySy":
	ans = YYSY(num_books, num_boxes);
	break;
    }
    return ans;
}

function parseBool(bool_val) {
    return bool_val? "y" : "n";
}

function parse(are_books_distinct, are_boxes_distinct, function_type, does_order_matter) {
    return parseBool(are_books_distinct) + parseBool(are_boxes_distinct) + function_type + parseBool(does_order_matter);
}

$(function () {
	$( "#num_books" ).change(function() {
		var min = 0;
		if ($(this).val() < min)
		    {
			$(this).val(min);
		    }       
	    }); 
    });

$(function () {
	$( "#num_boxes" ).change(function() {
		var min = 0;
		if ($(this).val() < min)
		    {
			$(this).val(min);
		    }       
	    }); 
    });

function described(num_books, num_boxes, are_books_distinct, are_boxes_distinct, function_type, does_order_matter) {
    var books_label = are_books_distinct? "labeled" : "unlabeled";
    var boxes_label = are_boxes_distinct? "labeled" : "unlabeled";
    var does_it_matter = does_order_matter? "ordered" : "unordered";
    var constraint = "any number of " + does_it_matter + " objects";
    var book_plural = (num_books == 1) ? "" : "s";
    var box_plural = (num_boxes == 1) ? "" : "s";

    if (!are_books_distinct) {
	constraint = "any number of objects";
    }
    switch (function_type) {
    case "S":
	constraint = "at least one " + does_it_matter + " object";
	if (!are_books_distinct) {
	    constraint = "at least one object";
	}
	break;
    case "I":
	constraint = "at most one object";
	break;
    case "B":
	constraint = "exactly one object";
	break;
    }

    var ans = "Number of ways to divide ";
    ans += num_books + " " + books_label + " object" + book_plural + " ";
    ans += "across ";
    ans += num_boxes + " " + boxes_label + " container" + box_plural + ", ";
    ans += "where each container contains " + constraint + ".";
    
    return ans;
}

// rf(n, k) = n * (n + 1) ... (n + k - 1)
function risingFactorial(n, k) {
    var ans = 1;
    for (var i = 0; i < k; i++) {
	ans = ans * (n + i);
    }
    return ans;
}

// ff(n, k) = n * (n - 1) ... (n - k + 1)
function fallingFactorial(n, k) {
    if (k == 0) return 1;
    if (n < k ) return 0;
    var ans = 1;
    for (var i = 0; i < k; i++) {
	ans = ans * (n - i);
    }
    return ans;
}

function comb(n, k) {
    if (k == 0) return 1;
    if (n == k) return 1;
    if (k < 0 ) return 0;
    if (n < k ) return 0;
    return math.combinations(n, k);
}

// Number of ways n elemnts can be partitioned into k
// non-empty linearly ordered subsets.
function Lah(n, k) {
    if (n < k) return 0;
    return comb(n - 1, k - 1) * math.permutations(n, n-k);
    //return comb(k, n) * risingFactorial(n, k-n);
}

// function Stirling2(n, k) {
//    if (k > n) return 0;
//    return math.stirlingS2(n, k);
//}

// https://docs.sympy.org/latest/_modules/sympy/functions/combinatorial/numbers.html
function Stirling2(n, k) {
    if (n == 0 && k == 0) return 1;
    if (n == 0 || k == 0) return 0;
    var n1 = n - 1;

    // some special values
    if (k == n1) {
	return comb(n, 2);
    }
    if (k == 2) {
	return Math.pow(2, n1) - 1;
    }

    // general recurrence
    return k*Stirling2(n1, k) + Stirling2(n1, k - 1);
}

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

// How many ways to partion k into n non-zero parts.
function Partition(n, k) {
    // Assume n >= 0, k >=0
    if (n > k) return 0;
    if (n == k) return 1;
    if (n == 1) return 1;
    if (k == 0) return 0;
    var dp = zeros([n+1, k+1]);
    dp[0][0] = 1;
    for (var r = 1; r <= n; r++) {
	for (var c = r; c <= k; c++) {
	    dp[r][c] = dp[r][c-r] + dp[r-1][c-1];
	}
    }
    return dp[n][k];
}

function SumPartition(n, k) {
    // Assume n >= 0, k >= 0
    if (k == 0) return 1;
    //if (n > k) return 0;
    //if (n == k) return 1;
    //if (n == 1) return 1;
    var dp = zeros([n+1, k+1]);
    dp[0][0] = 1;
    var ans = 0;
    for (var r = 1; r <= n; r++) {
	for (var c = r; c <= k; c++) {
	    dp[r][c] = dp[r][c-r] + dp[r-1][c-1];
	    if (c == k) ans += dp[r][c];
	}
    }
    return ans;
}

function bijective_unlabeled(k, n) {
    return k==n ? 1 : 0;
}

function bijective_labeled(k, n) {
    return k==n ? math.factorial(n) : 0;
}

function NYI(k, n) {
    return comb(n, k);
}

function NNG(k, n) {
    return SumPartition(n,k);
}

function NNS(k, n) {
    return Partition(n,k);
}

function NYG(k, n) {
    return comb(n+k-1, k);
}

function NYS(k, n) {
    return comb(k-1, n-1);
}

function YNGN(k, n) {
    if (k == 0) return 1;
    var ans = 0;
    for (var i = 1; i <= n; i++) {
	ans = ans + Stirling2(k, i);
    }
    return ans;
}

function YNSN(k, n) {
    return Stirling2(k, n);
}

function injective_unlabeled(k, n) {
    return k<=n ? 1 : 0;
}

function YYGN(k, n) {
    return Math.pow(n, k);
}

function YYSN(k, n) {
    return Stirling2(k, n) * math.factorial(n);
}

function YYI(k, n) {
    return fallingFactorial(n, k);
}

function YNGY(k, n) {
    if (k == 0) return 1;
    var ans = 0;
    for (var i = 1; i <= n; i++) {
	ans = ans + Lah(k, i);
    }
    return ans;
}

function YNSY(k, n) {
    // Intentionally put k first.
    return Lah(k, n);
}

function YYGY(k, n) {
    return fallingFactorial(n + k - 1, k);
}

function YYSY(k, n) {
    return fallingFactorial(k, n) * fallingFactorial(k-1, k-n);
}
