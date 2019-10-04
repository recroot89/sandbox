abstract class Element {
  def contents: Array[String]

  def height: Int = contents.length

  def width: Int = if (height == 0) 0 else contents(0).length

  def above(that: Element): Element =
    new ArrayElement(this.contents ++ that.contents)

  def beside(that: Element): Element =
    new ArrayElement(
      for ((line1, line2) <- this.contents zip that.contents)
        yield line1 + line2
    )

  override def toString() = contents mkString "\n"
}

class ArrayElement(val contents: Array[String]) extends Element

class LineElement(s: String) extends Element {
  var contents = Array(s)

  override def width = s.length

  override def height = 1
}

class UniformElement(
    ch: Char,
    override val width: Int,
    override val height: Int
) extends Element {
  private val line = ch.toString * width
  def contents = Array.fill(height)(line)
}
