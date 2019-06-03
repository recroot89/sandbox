class Parent
  def say(message)
    p message
  end
end

class Child < Parent
  def say(message)
    a = 10
    super if a < 10
    p 'Hey!'
  end
end

Child.new.say('Hello!')

module Sequences
  def self.fromtoby(from, to, by)
    x = from
    while x <= to
      yield x
      x += by
    end
  end
end

# Sequences.fromtoby(1, 10, 2) { |x| print x }
