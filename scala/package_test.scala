package bobsrockets {
  package navigation {
    class Navigator {
      //	 Указывать	 bobsrockets.navigation.StarMap не	нужно
      val map = new StarMap
    }
    class StarMap
  }
  class Ship {
    //	 Указывать	 bobsrockets.navigation.Navigator не	нужно
    val nav = new navigation.Navigator
  }
  package fleets {
    class Fleet {
      //	Указывать	bobsrockets.Ship	не	нужно				
      def addShip() = { new Ship }
    }
  }
}
