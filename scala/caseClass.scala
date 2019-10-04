abstract class Expr

case class Var(name: String) extends Expr
case class Number(num: Double) extends Expr
case class UnOp(operator: String, arg: Expr) extends Expr
case class BinOp(operator: String, left: Expr, right: Expr) extends Expr

object A {
  def simplifyTop(expr: Expr): Expr = expr match {
    case UnOp("-", UnOp("-", e))  => e //	Двойное отрицание
    case BinOp("+", e, Number(0)) => e // Прибавление	нуля
    case BinOp("*", e, Number(1)) => e // Умножение	на единицу
    case _                        => expr
  }

  def simplifyAll(expr: Expr): Expr = expr match {
    case UnOp("-", UnOp("-", e)) =>
      simplifyAll(e) // '-' является своейсобственной обратной величиной
    case BinOp("+", e, Number(0)) =>
      simplifyAll(e) // '0' нейтральный элемент для '+'
    case BinOp("*", e, Number(1)) =>
      simplifyAll(e) // '1' нейтральный элемент для '*'
    case UnOp(op, e)     => UnOp(op, simplifyAll(e))
    case BinOp(op, l, r) => BinOp(op, simplifyAll(l), simplifyAll(r))
    case _               => expr
  }

  def newSimplifyTop(expr: Expr): Expr = expr match {
    case UnOp("abs", e @ UnOp("abs", _)) => e
    case _                               =>
  }

  def simplifyAdd(e: Expr) = e match {
    case BinOp("+", x, y) if (x == y) => BinOp("*", x, Number(2))
    case _                            => e
  }

  def describe(x: Any) = x match {
    case 5       => "five"
    case true    => "truth"
    case "hello" => "hi!"
    case Nil     => "the empty list"
    case _       => "something else"
  }

  def tupleDemo(expr: Any) = expr match {
    case (a, b, c) => println("matched " + a + b + c)
    case _         =>
  }

  def generalSize(x: Any) = x match {
    case s: String    => s.length
    case m: Map[_, _] => m.size
    case _            => -1
  }

  def isStringArray(x: Any) = x match {
    case a: Array[String] => "yes"
    case _                => "no"
  }

  def factorial(num: Integer): Integer = {
    if (num < 0) return -1
    if (num == 0) return 0
    if (num == 1) return 1
    return num * factorial(num - 1)
  }
}
