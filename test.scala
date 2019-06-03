object FileMatcher {

  private def filesHere =
    (new java.io.File(".")).listFiles

  private def filesMatching(matcher: String => Boolean) =
    for (file <- filesHere;
         if matcher(file.getName))
      yield file

  def filesEnding(query: String) =
    filesMatching(_.endsWith(query))

  def filesContaining(query: String) =
    filesMatching(_.contains(query))

  def filesRegex(query: String) =
    filesMatching(_.matches(query))

  def containsOdd(nums: List[Int]): Boolean = nums.exists(_ % 2 == 1)
  def twice(op: Double => Double, x: Double) = op(op(x))

  def byNameAssert(predicate: => Boolean) =
    if (assertionsEnabled && !predicate)
      throw new AssertionError

  def boolAssert(predicate: Boolean) =
    if (assertionsEnabled && !predicate)
      throw new AssertionError

  def msort[T](less: (T, T) => Boolean)(xs: List[T]): List[T] = {
    def merge(xs: List[T], ys: List[T]): List[T] = (xs, ys) match {
      case (Nil, _) => ys
      case (_, Nil) => xs
      case (x :: xs1, y :: ys1) =>
        if (less(x, y)) x :: merge(xs1, ys)
        else y :: merge(xs, ys1)
    }
    val n = xs.length / 2
    if (n == 0) xs
    else {
      val (ys, zs) = xs splitAt n
      merge(msort(less)(ys), msort(less)(zs))
    }
  }
  val words = List("the", "quick", "brown", "fox")
  val intSort = msort((x: Int, y: Int) => x < y) _
  val reverseIntSort = msort((x: Int, y: Int) => x > y) _
  val mixedInts = List(4, 1, 9, 0, 5, 8, 3, 6, 2, 7)
}
