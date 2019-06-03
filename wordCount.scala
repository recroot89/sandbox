import scala.collection.mutable
class A {
  def countWords(text: String) {
    val result = mutable.Map.empty[String, Int]
    text
      .split(" ")
      .fold(result) { (word: String) =>
        if (result contains word.toLowerCase) result(word) += 1
        else result(word) = 1
      }

    result
  }

  def process: Unit =
    print(countWords("aa aaa aaa aa sa sa sss sssss"))
}
