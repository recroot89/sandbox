class Point(val x: Int, val y: Int)

trait Rectangular {
  def topLeft: Point
  def bottomRight: Point

  def left = topLeft.x
  def right = bottomRight.x
  def width = right - left
  //	и	множество	других	геометрических	методов...
}

abstract class Component extends Rectangular {
  //	другие	методы...
}

class Rectangle(val bottomRight: Point) extends Rectangular {
  //	другие	методы...
}
