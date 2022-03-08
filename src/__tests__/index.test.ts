// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { bar, foo } from "../index";
import test from "ava";

test("foo()", t => {
	t.is(foo(1, 2), 3);
});

test("bar()", t => {
	t.is(bar(2, 1), 1);
});
